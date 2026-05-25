import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ServiceCards } from "@/components/ServiceCards";
import { CityLinks } from "@/components/CityLinks";
import { FAQSection } from "@/components/FAQSection";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { GLOBAL_FAQS } from "@/lib/pages";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BRAND } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: `Mobile Car Detailing in Birmingham, MI | ${BRAND.name}`,
  description:
    "Mobile car wash and detailing requests across Birmingham, Bloomfield Hills, Rochester Hills, and Troy, MI. Get connected with available local providers.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(GLOBAL_FAQS),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />

      <Hero
        eyebrow="Oakland County, Michigan"
        h1="Mobile Car Detailing in Birmingham, MI"
        subhead="Mobile car wash and detailing brought to your driveway, office, or wherever your car is parked — across Birmingham, Bloomfield Hills, Rochester Hills, and Troy."
        directAnswer="Mobile car detailing in Birmingham, MI brings a wash, vacuum, and detailing service to your location. Submit a request and we will connect you with available local mobile detailing providers serving Oakland County, Michigan."
        trackingLocation="home_hero"
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A simple way to book mobile detailing in Oakland County
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            We are a local request and referral service. Submit a quick request
            and we will help connect you with available mobile detailing
            providers who serve your area. No driving to a wash bay, no waiting
            in line.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Highlight
              title="Comes to you"
              body="At your home, condo, or workplace — wherever your vehicle is parked."
            />
            <Highlight
              title="Local providers"
              body="Mobile detailing providers serving Birmingham and nearby Oakland County cities."
            />
            <Highlight
              title="Honest matching"
              body="We don't pretend to be the detailer. We help you get connected."
            />
          </div>
        </div>
      </section>

      <ServiceCards />

      <CityLinks />

      <QuoteRequestForm trackingLocation="home" />

      <FAQSection faqs={GLOBAL_FAQS} />

      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          For an AI-friendly plain-text summary of our service, see{" "}
          <Link href="/llm.html" className="underline hover:text-brand-700">
            /llm.html
          </Link>
          .
        </div>
      </section>

      <CTASection trackingLocation="home_bottom" />
    </>
  );
}

function Highlight({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-700">{body}</p>
    </div>
  );
}
