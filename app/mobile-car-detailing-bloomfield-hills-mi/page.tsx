import type { Metadata } from "next";
import { CityPageLayout } from "@/components/CityPageLayout";
import { CITY_PAGES } from "@/lib/pages";
import { buildMetadata } from "@/lib/seo";

const CITY = CITY_PAGES.find(
  (c) => c.slug === "mobile-car-detailing-bloomfield-hills-mi"
)!;

export const metadata: Metadata = buildMetadata({
  title: CITY.metaTitle,
  description: CITY.metaDescription,
  path: CITY.path,
});

export default function Page() {
  return <CityPageLayout city={CITY} />;
}
