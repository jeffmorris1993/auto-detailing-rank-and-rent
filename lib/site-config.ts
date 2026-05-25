/**
 * Central site configuration.
 *
 * TODO: Update SITE_URL to the real production domain before launch.
 * TODO: Replace displayPhone / telPhone with a real call-tracking number
 *       (e.g. CallRail, CallTrackingMetrics) before launch.
 */

export const SITE_URL = "https://oaklandcountymobiledetailing.com";

export const BRAND = {
  name: "Oakland County Mobile Detailing",
  shortName: "OCMD",
  tagline: "Mobile car wash and detailing requests across Oakland County, MI.",
  email: "hello@oaklandcountymobiledetailing.com",
  primaryCity: "Birmingham",
  primaryState: "MI",
  primaryRegion: "Oakland County, Michigan",
} as const;

export const PHONE = {
  displayPhone: "(248) 555-0123",
  telPhone: "+12485550123",
} as const;

export const SERVICE_AREAS = [
  "Birmingham, MI",
  "Bloomfield Hills, MI",
  "Rochester Hills, MI",
  "Troy, MI",
] as const;

export const HOURS = {
  // Honest hours statement — request form is 24/7, provider scheduling varies.
  description: "Requests accepted 24/7. Local detailing providers typically schedule appointments 7 days a week, weather permitting.",
} as const;

export const DISCLOSURE = {
  formSubmission:
    "By submitting this form, you agree that your request may be shared with available local detailing providers who serve your area.",
  rankAndRent:
    "Oakland County Mobile Detailing is a local request and referral service. We connect visitors with available mobile detailing providers serving Oakland County, Michigan. We are not the direct service provider.",
} as const;
