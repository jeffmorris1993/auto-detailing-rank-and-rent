import { SITE_URL, BRAND, PHONE, SERVICE_AREAS } from "./site-config";
import type { FAQ } from "./pages";

/**
 * JSON-LD builders.
 *
 * Notes on honesty:
 * - We intentionally use Organization (not LocalBusiness) at the org level
 *   because we do not operate a physical detailing shop.
 * - Service entities reference the brand as a provider of a referral service,
 *   not as the direct service operator.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND.name,
    url: SITE_URL,
    telephone: PHONE.telPhone,
    email: BRAND.email,
    description:
      "Local request and referral service connecting visitors with available mobile car wash and detailing providers in Oakland County, Michigan.",
    areaServed: SERVICE_AREAS.map((name) => ({
      "@type": "City",
      name,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE.telPhone,
      contactType: "customer service",
      areaServed: "US-MI",
      availableLanguage: ["English"],
    },
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
