import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { sectors } from "@/config/sectors";
import { companies } from "@/config/companies";
import { articles } from "@/config/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/about",
    "/experience-sectors",
    "/our-companies",
    "/insights",
    "/work-with-us",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const sectorRoutes = sectors.map((s) => `/experience-sectors/${s.slug}`);
  const companyRoutes = companies.map((c) => `/our-companies/${c.slug}`);
  const articleRoutes = articles.map((a) => `/insights/${a.slug}`);

  return [
    ...staticRoutes,
    ...sectorRoutes,
    ...companyRoutes,
    ...articleRoutes,
  ].map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
