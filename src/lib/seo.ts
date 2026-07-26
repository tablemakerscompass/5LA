import type { Metadata } from "next";
import { site } from "@/config/site";

/**
 * Build page metadata with sensible 5LA defaults. Titles use the template
 * defined on the root layout (`%s — The 5 Loaves Agency`).
 */
export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = new URL(path, site.url).toString();
  const desc = description ?? site.brand.metaDescription;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: title ? `${title} — ${site.name}` : site.name,
      description: desc,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} — ${site.name}` : site.name,
      description: desc,
      images: ["/brand/og-image.png"],
    },
  };
}

/** Organization structured data (JSON-LD) for the site root. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    slogan: site.brand.primaryStatement,
    description: site.brand.metaDescription,
    logo: new URL("/brand/5la-logo-stacked.png", site.url).toString(),
    // `sameAs` (social profiles) intentionally omitted until real URLs exist.
  };
}
