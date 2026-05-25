/**
 * Lightweight client-side event helpers.
 *
 * TODO: Wire to a real analytics destination (Vercel Analytics, GA4, Plausible,
 *       Posthog, or a Vercel Function).
 */

export type LeadFormPayload = {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  vehicleType: string;
  vehicleCondition: string;
  preferredTiming: string;
  message: string;
  pageUrl: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  submitted_at: string;
};

export function trackCallButtonClick(input: {
  trackingLocation: string;
  pagePath: string;
}) {
  if (typeof window === "undefined") return;
  // TODO: Send to analytics provider.
  // eslint-disable-next-line no-console
  console.log("[call_click]", {
    trackingLocation: input.trackingLocation,
    pagePath: input.pagePath,
    timestamp: new Date().toISOString(),
  });
}

export function trackLeadSubmit(payload: LeadFormPayload) {
  if (typeof window === "undefined") return;
  // TODO: POST to /api/lead, Supabase, Resend, Zapier, or a Vercel Function.
  // eslint-disable-next-line no-console
  console.log("[lead_submit]", payload);
}

export function readUtmParams(search: string): Pick<
  LeadFormPayload,
  "utm_source" | "utm_medium" | "utm_campaign" | "utm_term" | "utm_content"
> {
  const params = new URLSearchParams(search);
  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_term: params.get("utm_term") ?? "",
    utm_content: params.get("utm_content") ?? "",
  };
}
