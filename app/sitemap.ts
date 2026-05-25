import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { ALL_PUBLIC_PATHS } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ALL_PUBLIC_PATHS.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
