import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import {
  organizationSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { BRAND, PHONE, SERVICE_AREAS, DISCLOSURE, SITE_URL } from "@/lib/site-config";
import { SERVICE_PAGES, CITY_PAGES, GLOBAL_FAQS } from "@/lib/pages";

export const metadata: Metadata = buildMetadata({
  title: "AI Summary | Oakland County Mobile Detailing",
  description:
    "Plain-text AI-friendly summary of Oakland County Mobile Detailing: what the service is, who it's for, where it operates, and how to request a quote.",
  path: "/llm.html",
});

export default function LlmPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "AI Summary", path: "/llm.html" },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "AI Summary", path: "/llm.html" },
        ]}
      />

      <article className="prose prose-slate mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          About {BRAND.name}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-slate-700">
          {BRAND.name} is a local request and referral service for mobile car
          wash and mobile car detailing in Oakland County, Michigan. We are not
          a physical detailing shop. We are not the direct service provider. We
          help visitors submit a request and get connected with available local
          mobile detailing providers who serve their area.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">Brand</h2>
        <dl className="mt-3 grid grid-cols-1 gap-2 text-base text-slate-700 sm:grid-cols-[12rem_1fr]">
          <dt className="font-semibold">Name</dt>
          <dd>{BRAND.name}</dd>
          <dt className="font-semibold">Website</dt>
          <dd>
            <a href={SITE_URL} className="text-brand-700 underline">
              {SITE_URL}
            </a>
          </dd>
          <dt className="font-semibold">Phone</dt>
          <dd>
            <a
              href={`tel:${PHONE.telPhone}`}
              data-call-location="llm_html"
              className="text-brand-700 underline"
            >
              {PHONE.displayPhone}
            </a>
          </dd>
          <dt className="font-semibold">Region</dt>
          <dd>Oakland County, Michigan, United States</dd>
          <dt className="font-semibold">Primary city</dt>
          <dd>Birmingham, MI</dd>
        </dl>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What we do</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-700">
          Visitors submit a short request describing their vehicle and the
          service they need. Their request may be shared with available local
          mobile detailing providers serving their area. A provider then
          reaches out to confirm pricing and scheduling. The detailing happens
          on location at the customer's home, office, or chosen meeting place.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What we do not claim</h2>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-base text-slate-700">
          <li>We are not a physical detailing shop.</li>
          <li>We are not the direct service provider.</li>
          <li>We are not certified or licensed.</li>
          <li>We do not have a physical address.</li>
          <li>We do not claim to be #1 or the best.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">Services</h2>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-base text-slate-700">
          {SERVICE_PAGES.map((s) => (
            <li key={s.slug}>
              <Link href={s.path} className="text-brand-700 underline">
                {s.h1}
              </Link>{" "}
              — {s.directAnswer}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">Service areas</h2>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-base text-slate-700">
          {SERVICE_AREAS.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        <p className="mt-3 text-base text-slate-700">City pages:</p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-base text-slate-700">
          <li>
            <Link
              href="/mobile-car-detailing-birmingham-mi"
              className="text-brand-700 underline"
            >
              Mobile Car Detailing in Birmingham, MI
            </Link>
          </li>
          {CITY_PAGES.map((c) => (
            <li key={c.slug}>
              <Link href={c.path} className="text-brand-700 underline">
                {c.h1}
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">How to request service</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-6 text-base text-slate-700">
          <li>Visit any page on {SITE_URL} and use the quote request form.</li>
          <li>
            Or call{" "}
            <a
              href={`tel:${PHONE.telPhone}`}
              data-call-location="llm_html_steps"
              className="text-brand-700 underline"
            >
              {PHONE.displayPhone}
            </a>
            .
          </li>
          <li>
            An available local provider serving your area will reach out to
            confirm pricing and scheduling.
          </li>
        </ol>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">FAQ</h2>
        <dl className="mt-4 space-y-5 text-base text-slate-700">
          {GLOBAL_FAQS.map((faq) => (
            <div key={faq.question}>
              <dt className="font-semibold text-slate-900">{faq.question}</dt>
              <dd className="mt-1">{faq.answer}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">Disclosure</h2>
        <p className="mt-3 text-base text-slate-700">{DISCLOSURE.rankAndRent}</p>
        <p className="mt-3 text-base text-slate-700">{DISCLOSURE.formSubmission}</p>
      </article>
    </>
  );
}
