import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { SERVICE_PAGES } from "@/lib/pages";
import { buildMetadata } from "@/lib/seo";

const SERVICE = SERVICE_PAGES.find(
  (s) => s.slug === "ceramic-coating-birmingham-mi"
)!;

export const metadata: Metadata = buildMetadata({
  title: SERVICE.metaTitle,
  description: SERVICE.metaDescription,
  path: SERVICE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      service={SERVICE}
      relatedServices={[
        { href: "/exterior-car-detailing-birmingham-mi", label: "Exterior Detailing" },
        { href: "/mobile-car-detailing-birmingham-mi", label: "Mobile Car Detailing" },
      ]}
    />
  );
}
