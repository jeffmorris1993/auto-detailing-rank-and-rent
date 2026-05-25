"use client";

import { useState } from "react";
import { DISCLOSURE } from "@/lib/site-config";
import { trackLeadSubmit, readUtmParams, type LeadFormPayload } from "@/lib/tracking";

type QuoteRequestFormProps = {
  defaultService?: string;
  defaultCity?: string;
  heading?: string;
  intro?: string;
  trackingLocation?: string;
  id?: string;
};

const SERVICES = [
  "Mobile car detailing",
  "Mobile car wash",
  "Interior detailing",
  "Exterior detailing",
  "Ceramic coating",
  "Not sure — recommend something",
];

const CITIES = [
  "Birmingham",
  "Bloomfield Hills",
  "Rochester Hills",
  "Troy",
  "Other Oakland County area",
];

const VEHICLE_TYPES = ["Sedan", "Coupe", "SUV", "Truck", "Van / Minivan", "Other"];

const VEHICLE_CONDITIONS = [
  "Light — recent wash, mostly maintenance",
  "Moderate — typical buildup, normal use",
  "Heavy — needs extra time / deep clean",
  "Pet hair / spills / odor",
];

const TIMING_OPTIONS = [
  "ASAP",
  "Within a few days",
  "Within 1–2 weeks",
  "Flexible — schedule when available",
];

export function QuoteRequestForm({
  defaultService = "",
  defaultCity = "",
  heading = "Request a quote",
  intro = "Tell us about your vehicle and we'll connect you with available local providers.",
  trackingLocation = "page",
  id = "quote",
}: QuoteRequestFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    const required: Array<keyof LeadFormPayload> = [
      "name",
      "phone",
      "email",
      "city",
      "service",
      "vehicleType",
    ];

    for (const key of required) {
      const val = (formData.get(key) as string | null)?.trim();
      if (!val) {
        setErrorMessage("Please fill in all required fields.");
        setStatus("error");
        return;
      }
    }

    const phone = (formData.get("phone") as string).trim();
    if (phone.replace(/\D/g, "").length < 10) {
      setErrorMessage("Please enter a valid phone number.");
      setStatus("error");
      return;
    }

    const email = (formData.get("email") as string).trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    const utms = readUtmParams(window.location.search);

    const payload: LeadFormPayload = {
      name: (formData.get("name") as string).trim(),
      phone,
      email,
      city: formData.get("city") as string,
      service: formData.get("service") as string,
      vehicleType: formData.get("vehicleType") as string,
      vehicleCondition: (formData.get("vehicleCondition") as string) ?? "",
      preferredTiming: (formData.get("preferredTiming") as string) ?? "",
      message: ((formData.get("message") as string) ?? "").trim(),
      pageUrl: window.location.href,
      referrer: document.referrer || "direct",
      submitted_at: new Date().toISOString(),
      ...utms,
    };

    try {
      // TODO: Replace console log with real submission:
      //   - POST to a Next.js Route Handler in app/api/lead/route.ts
      //   - Or directly to Supabase / Resend / Zapier / Vercel Function
      //   - Add server-side validation and bot protection (Vercel BotID)
      trackLeadSubmit(payload);
      setStatus("success");
      (event.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us instead.");
    }
  }

  if (status === "success") {
    return (
      <section
        id={id}
        className="bg-slate-50 py-14 sm:py-20"
        aria-labelledby={`${id}-heading`}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <h2
              id={`${id}-heading`}
              className="text-2xl font-bold text-emerald-900"
            >
              Request received
            </h2>
            <p className="mt-3 text-base text-emerald-900/90">
              Thanks. Your request may be shared with available local detailing
              providers who serve your area. Expect a call or email soon.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 inline-flex items-center rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className="bg-slate-50 py-14 sm:py-20"
      aria-labelledby={`${id}-heading`}
      data-tracking-location={trackingLocation}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2
            id={`${id}-heading`}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-3 text-lg text-slate-600">{intro}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" required>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className={inputClass}
              />
            </Field>
            <Field id="phone" label="Phone" required>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className={inputClass}
                placeholder="(248) 555-0123"
              />
            </Field>
          </div>

          <Field id="email" label="Email" required>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputClass}
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="city" label="City" required>
              <select
                id="city"
                name="city"
                defaultValue={defaultCity}
                required
                className={inputClass}
              >
                <option value="" disabled>
                  Select city
                </option>
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
            <Field id="service" label="Service requested" required>
              <select
                id="service"
                name="service"
                defaultValue={defaultService}
                required
                className={inputClass}
              >
                <option value="" disabled>
                  Select service
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="vehicleType" label="Vehicle type" required>
              <select
                id="vehicleType"
                name="vehicleType"
                required
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Select vehicle type
                </option>
                {VEHICLE_TYPES.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </Field>
            <Field id="vehicleCondition" label="Vehicle condition">
              <select
                id="vehicleCondition"
                name="vehicleCondition"
                defaultValue=""
                className={inputClass}
              >
                <option value="">Select condition (optional)</option>
                {VEHICLE_CONDITIONS.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field id="preferredTiming" label="Preferred timing">
            <select
              id="preferredTiming"
              name="preferredTiming"
              defaultValue=""
              className={inputClass}
            >
              <option value="">Select timing (optional)</option>
              {TIMING_OPTIONS.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </Field>

          <Field id="message" label="Anything else? (optional)">
            <textarea
              id="message"
              name="message"
              rows={4}
              className={inputClass}
              placeholder="Year, make, model, or anything else the provider should know."
            />
          </Field>

          {status === "error" && errorMessage && (
            <p
              role="alert"
              className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Submitting…" : "Request my quote"}
          </button>

          <p className="text-xs text-slate-500">{DISCLOSURE.formSubmission}</p>
        </form>
      </div>
    </section>
  );
}

const inputClass =
  "block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-slate-800"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-600" aria-hidden>
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
