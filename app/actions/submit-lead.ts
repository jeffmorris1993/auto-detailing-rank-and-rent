"use server";

import "server-only";
import { headers } from "next/headers";
import { getSupabaseAdmin } from "@/lib/supabase/server";

/**
 * Server action: store a lead in Supabase.
 *
 * Lives behind a server boundary, so the service role key never reaches the
 * browser. The form invokes this via `submitLeadAction(formData)`.
 *
 * Spam protections:
 *   - Honeypot field "website" — if present, silently succeed.
 *   - In-memory IP rate limit (5 / minute) — see TODO below for production.
 */

export type SubmitLeadResult =
  | { ok: true }
  | { ok: false; error: string };

const ALLOWED_CITIES = new Set([
  "Birmingham",
  "Bloomfield Hills",
  "Rochester Hills",
  "Troy",
  "Other Oakland County area",
]);

const ALLOWED_SERVICES = new Set([
  "Mobile Car Detailing",
  "Mobile Car Wash",
  "Interior Car Detailing",
  "Exterior Car Detailing",
  "Ceramic Coating",
  "Not sure — recommend something",
]);

const ALLOWED_VEHICLE_TYPES = new Set([
  "Sedan",
  "Coupe",
  "SUV",
  "Truck",
  "Van / Minivan",
  "Other",
]);

const MAX_LENGTHS: Record<string, number> = {
  name: 120,
  phone: 32,
  email: 254,
  vehicle_condition: 200,
  preferred_timing: 80,
  message: 2000,
  page_url: 2000,
  referrer: 2000,
  utm_source: 200,
  utm_medium: 200,
  utm_campaign: 200,
  utm_term: 200,
  utm_content: 200,
};

// TODO (rate limiting):
// In-process Map only works for a single warm Fluid Compute instance and
// resets on cold start. Swap to a real store before scale:
//   - Upstash Redis (Vercel Marketplace) — simple
//   - Vercel KV / Edge Config
//   - Supabase table + RPC
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const recentByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_WINDOW_MS;
  const arr = (recentByIp.get(ip) ?? []).filter((t) => t > cutoff);
  arr.push(now);
  recentByIp.set(ip, arr);
  return arr.length > RATE_MAX;
}

function str(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

function nullable(v: string): string | null {
  return v.length > 0 ? v : null;
}

export async function submitLeadAction(
  formData: FormData
): Promise<SubmitLeadResult> {
  // 1) Honeypot. Bots blindly fill fields named "website". Drop silently.
  const honeypot = str(formData.get("website"));
  if (honeypot) return { ok: true };

  // 2) Identify the client for rate limiting.
  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return {
      ok: false,
      error: "Too many submissions from your network. Please try again in a minute.",
    };
  }

  // 3) Read + validate fields.
  const name = str(formData.get("name"));
  const phone = str(formData.get("phone"));
  const email = str(formData.get("email"));
  const city = str(formData.get("city"));
  const service = str(formData.get("service"));
  const vehicleType = str(formData.get("vehicle_type"));

  if (!name || !phone || !email || !city || !service || !vehicleType) {
    return { ok: false, error: "Please fill in all required fields." };
  }

  if (phone.replace(/\D/g, "").length < 10) {
    return { ok: false, error: "Please enter a valid phone number." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!ALLOWED_CITIES.has(city)) {
    return { ok: false, error: "Please choose a city from the list." };
  }
  if (!ALLOWED_SERVICES.has(service)) {
    return { ok: false, error: "Please choose a service from the list." };
  }
  if (!ALLOWED_VEHICLE_TYPES.has(vehicleType)) {
    return { ok: false, error: "Please choose a vehicle type from the list." };
  }

  const record = {
    name,
    phone,
    email,
    city,
    service_requested: service,
    vehicle_type: vehicleType,
    vehicle_condition: nullable(str(formData.get("vehicle_condition"))),
    preferred_timing: nullable(str(formData.get("preferred_timing"))),
    message: nullable(str(formData.get("message"))),
    page_url:
      nullable(str(formData.get("page_url"))) ??
      nullable(str(formData.get("source_page"))),
    referrer: nullable(str(formData.get("referrer"))),
    utm_source: nullable(str(formData.get("utm_source"))),
    utm_medium: nullable(str(formData.get("utm_medium"))),
    utm_campaign: nullable(str(formData.get("utm_campaign"))),
    utm_term: nullable(str(formData.get("utm_term"))),
    utm_content: nullable(str(formData.get("utm_content"))),
  };

  // Enforce max lengths to reject abusive payloads early.
  for (const [key, max] of Object.entries(MAX_LENGTHS)) {
    const val = record[key as keyof typeof record];
    if (typeof val === "string" && val.length > max) {
      return { ok: false, error: "One of the fields is too long. Please shorten and try again." };
    }
  }

  // 4) Insert. Status defaults to 'new' in the DB.
  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("leads").insert([record]);
    if (error) {
      console.error("[submitLeadAction] Supabase insert error:", error);
      return {
        ok: false,
        error: "We couldn't save your request. Please try again in a moment.",
      };
    }
  } catch (err) {
    console.error("[submitLeadAction] Unhandled error:", err);
    return {
      ok: false,
      error: "We couldn't save your request. Please try again in a moment.",
    };
  }

  return { ok: true };
}
