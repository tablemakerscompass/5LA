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

/**
 * BreadcrumbList structured data (JSON-LD). Pass the same trail rendered by
 * the visible <Breadcrumbs> component; Home is prepended automatically.
 */
export function breadcrumbSchema(items: { label: string; path: string }[]) {
  const trail = [{ label: "Home", path: "/" }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: new URL(item.path, site.url).toString(),
    })),
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
