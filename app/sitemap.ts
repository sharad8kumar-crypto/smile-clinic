import type { MetadataRoute } from "next";
import { services, siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: "2026-10-30" },
    ...services.map((s) => ({ url: `${siteUrl}/services/${s.slug}`, lastModified: "2026-10-30" })),
  ];
}