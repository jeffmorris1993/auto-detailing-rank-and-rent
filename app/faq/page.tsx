import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { GLOBAL_FAQS } from "@/lib/pages";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Car Detailing FAQ",
  description:
    "Frequently asked questions about submitting mobile car wash and detailing requests in Birmingham, Bloomfield Hills, Rochester Hills, and Troy, MI.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(GLOBAL_FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />

      <Hero
        eyebrow="FAQ"
        h1="Mobile Car Detailing FAQ"
        subhead="Quick answers about submitting mobile car wash and detailing requests in Oakland County, MI."
        directAnswer="Oakland County Mobile Detailing is a demand-validation and referral service. We collect requests for mobile car wash and detailing in Birmingham, Bloomfield Hills, Rochester Hills, and Troy, MI. Service availability is not guaranteed."
      />

      <FAQSection faqs={GLOBAL_FAQS} />

      <QuoteRequestForm
        sourcePage="faq"
        defaultCity=""
        defaultService=""
      />

      <CTASection />
    </>
  );
}
