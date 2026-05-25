import type { Metadata } from "next";
import { SITE_URL, BRAND } from "./site-config";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
}: BuildMetadataInput): Metadata {
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;

  // Per-page titles are passed in fully formed (e.g. "X in Y, MI | Brand").
  // Use `absolute` so the layout `template` does not append the brand a second time.
  const openGraph: NonNullable<Metadata["openGraph"]> = {
    title,
    description,
    url: canonical,
    siteName: BRAND.name,
    type: "website",
    locale: "en_US",
  };

  const twitter: NonNullable<Metadata["twitter"]> = {
    card: "summary_large_image",
    title,
    description,
  };

  // Only emit an explicit OG image if a caller provides one — otherwise let
  // Next.js's file-convention opengraph-image.tsx supply the image.
  if (ogImage) {
    const ogImageUrl = ogImage.startsWith("http")
      ? ogImage
      : `${SITE_URL}${ogImage}`;
    openGraph.images = [
      { url: ogImageUrl, width: 1200, height: 630, alt: title },
    ];
    twitter.images = [ogImageUrl];
  }

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph,
    twitter,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
