/**
 * Central site configuration.
 *
 * MVP: form-only demand-validation site. We do NOT publish a phone number,
 * tel: link, or call-tracking script anywhere on the public site. Visitor
 * phone numbers are collected on the quote form for follow-up only.
 *
 * TODO: Update SITE_URL to the real production domain before launch.
 */

// Production URL is set via NEXT_PUBLIC_SITE_URL. Falls back to the brand
// domain for local dev and so static metadata still renders something sane.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oaklandcountymobiledetailing.com"
).replace(/\/$/, "");

export const BRAND = {
  name: "Oakland County Mobile Detailing",
  shortName: "OCMD",
  tagline:
    "Request mobile car wash and detailing in Oakland County, Michigan. Submit a request to check availability in your area.",
  email: "hello@oaklandcountymobiledetailing.com",
  primaryCity: "Birmingham",
  primaryState: "MI",
  primaryRegion: "Oakland County, Michigan",
} as const;

export const SERVICE_AREAS = [
  "Birmingham, MI",
  "Bloomfield Hills, MI",
  "Rochester Hills, MI",
  "Troy, MI",
] as const;

export const DISCLOSURE = {
  formSubmission:
    "Submitting this form helps us understand demand for mobile detailing services in your area. Your request may be shared with available local providers if service becomes available.",
  brand:
    "Oakland County Mobile Detailing collects mobile car wash and detailing requests across Oakland County, Michigan. We are not a detailing shop and we do not guarantee service. If service becomes available in your area, your request may be shared with a local provider.",
} as const;

export const CTA = {
  primary: "Request a Quote",
  secondary: "Check Availability",
} as const;
