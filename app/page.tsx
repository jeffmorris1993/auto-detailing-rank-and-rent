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
    "Request mobile car wash and detailing across Birmingham, Bloomfield Hills, Rochester Hills, and Troy, MI. Submit a request to check whether a local provider is available in your area.",
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
        subhead="Submit a request for mobile car wash and detailing in Birmingham, Bloomfield Hills, Rochester Hills, or Troy, MI. We collect requests to check whether a local provider is available in your area."
        directAnswer="Mobile car detailing in Birmingham, MI is a service in which a detailing provider travels to your location to wash and detail your vehicle. Submit a request to check availability — if a local provider can serve your area, they may contact you. Service availability is not guaranteed."
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A simple way to check availability in Oakland County
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Submit a quick request and we will check whether a local mobile
            detailing provider can serve your area. We are a demand-validation
            and referral service — not the direct detailing provider. Service
            availability is not guaranteed.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Highlight
              title="Submit a request"
              body="Tell us about your vehicle and location. The form takes about a minute."
            />
            <Highlight
              title="Check availability"
              body="We use your request to see whether a local provider can serve your area."
            />
            <Highlight
              title="Honest framing"
              body="We do not pretend to be the detailer and we do not guarantee service."
            />
          </div>
        </div>
      </section>

      <ServiceCards />

      <CityLinks />

      <QuoteRequestForm
        sourcePage="home"
        defaultCity=""
        defaultService=""
      />

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

      <CTASection />
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
