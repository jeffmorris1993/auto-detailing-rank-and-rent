import Link from "next/link";
import type { CityPage } from "@/lib/pages";
import { Hero } from "./Hero";
import { Breadcrumbs } from "./Breadcrumbs";
import { FAQSection } from "./FAQSection";
import { QuoteRequestForm } from "./QuoteRequestForm";
import { ServiceCards } from "./ServiceCards";
import { CTASection } from "./CTASection";
import { JsonLd } from "./JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";

type CityPageLayoutProps = {
  city: CityPage;
};

const HOW_IT_WORKS = [
  {
    step: "Submit your request",
    description:
      "Share your vehicle and location. The form takes about a minute.",
  },
  {
    step: "Get connected",
    description:
      "Your request may be shared with available local detailing providers serving your area.",
  },
  {
    step: "Confirm and book",
    description:
      "A provider will reach out to confirm pricing and scheduling.",
  },
  {
    step: "Service comes to you",
    description: "The provider arrives at your location on the scheduled day.",
  },
];

export function CityPageLayout({ city }: CityPageLayoutProps) {
  const url = `${SITE_URL}${city.path}`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Mobile Car Detailing in ${city.city}, ${city.state}`,
            description: city.directAnswer,
            serviceType: "Mobile Car Detailing",
            city: city.city,
            state: city.state,
            url,
          }),
          faqSchema(city.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: city.h1, path: city.path },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: city.h1, path: city.path },
        ]}
      />

      <Hero
        eyebrow={`${city.city}, ${city.state}`}
        h1={city.h1}
        subhead={city.intro}
        directAnswer={city.directAnswer}
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Mobile detailing across {city.city}
            </h2>
            <p className="mt-4 text-base text-slate-700">
              We accept requests from these {city.city} neighborhoods (and
              others). If a local provider becomes available, they may contact
              you to confirm service.
            </p>
            <ul className="mt-4 grid gap-2 text-base text-slate-700 sm:grid-cols-2">
              {city.neighborhoods.map((n) => (
                <li key={n} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-brand-600"
                  />
                  <span>{n}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-900">
              How it works
            </h2>
            <ol className="mt-6 space-y-5">
              {HOW_IT_WORKS.map((step, idx) => (
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
                Service options in {city.city}
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link
                    href="/mobile-car-wash-birmingham-mi"
                    className="text-brand-700 hover:text-brand-900"
                  >
                    Mobile Car Wash →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/interior-car-detailing-birmingham-mi"
                    className="text-brand-700 hover:text-brand-900"
                  >
                    Interior Detailing →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/exterior-car-detailing-birmingham-mi"
                    className="text-brand-700 hover:text-brand-900"
                  >
                    Exterior Detailing →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ceramic-coating-birmingham-mi"
                    className="text-brand-700 hover:text-brand-900"
                  >
                    Ceramic Coating →
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <QuoteRequestForm
        defaultService="Mobile Car Detailing"
        defaultCity={city.city}
        sourcePage={city.slug}
      />

      <ServiceCards
        heading={`Services we connect ${city.city} drivers with`}
        intro="Pick the service that fits your vehicle. We'll match you with available local providers."
      />

      <FAQSection faqs={city.faqs} />

      <CTASection />
    </>
  );
}
