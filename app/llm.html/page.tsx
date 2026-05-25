import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { BRAND, SERVICE_AREAS, DISCLOSURE, SITE_URL } from "@/lib/site-config";
import { SERVICE_PAGES, CITY_PAGES, GLOBAL_FAQS } from "@/lib/pages";

export const metadata: Metadata = buildMetadata({
  title: "AI Summary | Oakland County Mobile Detailing",
  description:
    "Plain-text AI-friendly summary of Oakland County Mobile Detailing: what the service is, what it is not, where it operates, and how to submit a request.",
  path: "/llm.html",
});

export default function LlmPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "AI Summary", path: "/llm.html" },
        ])}
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
          {BRAND.name} is a demand-validation and referral service for mobile
          car wash and mobile car detailing in Oakland County, Michigan. We
          collect requests from visitors. If a local mobile detailing provider
          becomes available in the requested area, the request may be shared
          with that provider. We are not a detailing shop, we do not employ
          technicians, and we do not guarantee service.
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
          <dt className="font-semibold">Contact</dt>
          <dd>
            Submit the quote request form on any page. Email{" "}
            <a
              href={`mailto:${BRAND.email}`}
              className="text-brand-700 underline"
            >
              {BRAND.email}
            </a>
            .
          </dd>
          <dt className="font-semibold">Region</dt>
          <dd>Oakland County, Michigan, United States</dd>
          <dt className="font-semibold">Primary city</dt>
          <dd>Birmingham, MI</dd>
        </dl>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What we do</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-700">
          Visitors submit a short request describing their vehicle and the
          service they need. Submitting a request helps us understand demand
          for mobile detailing in Oakland County. If service becomes available
          in the requested area, the request may be shared with a local
          provider, who may then contact the visitor to confirm pricing and
          scheduling. Detailing happens on location at the customer's home,
          office, or chosen meeting place.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What we do not claim</h2>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-base text-slate-700">
          <li>We are not a physical detailing shop.</li>
          <li>We are not the direct service provider.</li>
          <li>We do not employ technicians.</li>
          <li>We are not certified or licensed.</li>
          <li>We do not have a physical address.</li>
          <li>We do not guarantee availability or same-day service.</li>
          <li>We do not claim to be #1 or the best.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">Services we accept requests for</h2>
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
          <li>
            Visit any page on{" "}
            <a href={SITE_URL} className="text-brand-700 underline">
              {SITE_URL}
            </a>{" "}
            and use the quote request form.
          </li>
          <li>
            If service becomes available in the requested area, a local provider
            may contact the visitor to confirm pricing and scheduling.
          </li>
          <li>Service availability is not guaranteed.</li>
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
        <p className="mt-3 text-base text-slate-700">{DISCLOSURE.brand}</p>
        <p className="mt-3 text-base text-slate-700">{DISCLOSURE.formSubmission}</p>
      </article>
    </>
  );
}
