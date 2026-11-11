import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

/** Update when page content changes */
const LAST_UPDATED = "2026-11-09";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/our-work",
    "/core-team",
    "/partners",
    "/where-we-work",
    "/about",
    "/support",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return pages.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: LAST_UPDATED,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.7,
  }));
}
