import Link from "next/link";
import type { ServicePage } from "@/lib/pages";
import { Hero } from "./Hero";
import { Breadcrumbs } from "./Breadcrumbs";
import { FAQSection } from "./FAQSection";
import { QuoteRequestForm } from "./QuoteRequestForm";
import { CTASection } from "./CTASection";
import { JsonLd } from "./JsonLd";
import { CityLinks } from "./CityLinks";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";

type ServicePageLayoutProps = {
  service: ServicePage;
  relatedServices?: Array<{ href: string; label: string }>;
};

export function ServicePageLayout({
  service,
  relatedServices = [],
}: ServicePageLayoutProps) {
  const url = `${SITE_URL}${service.path}`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${service.serviceName} in ${service.city}, ${service.state}`,
            description: service.directAnswer,
            serviceType: service.serviceName,
            city: service.city,
            state: service.state,
            url,
          }),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: service.h1, path: service.path },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: service.h1, path: service.path },
        ]}
      />

      <Hero
        eyebrow={`${service.city}, ${service.state}`}
        h1={service.h1}
        subhead={service.intro}
        directAnswer={service.directAnswer}
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              What's typically included
            </h2>
            <ul className="mt-6 space-y-3 text-base text-slate-700">
              {service.whatIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-brand-600"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-900">
              Service area
            </h2>
            <p className="mt-3 text-base text-slate-700">{service.serviceAreaNote}</p>

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-900">
              How it works
            </h2>
            <ol className="mt-6 space-y-5">
              {service.howItWorks.map((step, idx) => (
                <li key={step.step} className="flex gap-4">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white"
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.step}
                    </h3>
                    <p className="mt-1 text-base text-slate-700">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Talk to a provider sooner
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Call or jump straight to the quote form.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="#quote"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Request Quote
                </Link>
              </div>
            </div>

            {relatedServices.length > 0 && (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Related services
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {relatedServices.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="text-brand-700 hover:text-brand-900"
                      >
                        {r.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <QuoteRequestForm
        defaultService={service.serviceName}
        defaultCity={service.city}
        trackingLocation={service.slug}
      />

      <FAQSection faqs={service.faqs} />

      <CityLinks />

      <CTASection trackingLocation={`${service.slug}_bottom`} />
    </>
  );
}
