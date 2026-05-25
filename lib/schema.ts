import { SITE_URL, BRAND, SERVICE_AREAS } from "./site-config";
import type { FAQ } from "./pages";

/**
 * JSON-LD builders.
 *
 * MVP framing:
 * - Organization (not LocalBusiness) — no physical shop, no telephone.
 * - Services describe what is being requested, not what is actively offered.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND.name,
    url: SITE_URL,
    email: BRAND.email,
    description:
      "Demand-validation and referral service collecting mobile car wash and detailing requests across Oakland County, Michigan. Not a physical detailing shop. Service availability is not guaranteed.",
    areaServed: SERVICE_AREAS.map((name) => ({
      "@type": "City",
      name,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND.name,
    inLanguage: "en-US",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  serviceType: string;
  city: string;
  state: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: input.url,
    provider: {
      "@type": "Organization",
      name: BRAND.name,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: `${input.city}, ${input.state}`,
    },
    audience: {
      "@type": "Audience",
      audienceType: "Vehicle owners",
    },
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
