import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { companies } from "@/config/companies";
import { articles } from "@/config/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/about",
    "/what-we-do",
    "/aunt-sarahs-girls",
    "/insights",
    "/work-with-us",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/accessibility",
  ];

  // Aunt Sarah's Girls is now a top-level route, listed above.
  const companyRoutes = companies
    .filter((c) => c.slug !== "aunt-sarahs-girls")
    .map((c) => `/our-companies/${c.slug}`);
  const articleRoutes = articles.map((a) => `/insights/${a.slug}`);

  return [
    ...staticRoutes,
    ...companyRoutes,
    ...articleRoutes,
  ].map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
