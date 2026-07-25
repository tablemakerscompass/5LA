import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The internal design reference is excluded from indexing.
      disallow: ["/style-guide"],
    },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
