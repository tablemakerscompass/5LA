import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import SectorDetail from "@/components/sectors/SectorDetail";
import CTABanner from "@/components/ui/CTABanner";
import { sectors, getSector } from "@/config/sectors";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";

type Params = { slug: string };

/** Pre-render one static page per sector. */
export function generateStaticParams(): Params[] {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};

  const title = `${sector.name} | The 5 Loaves Agency`;
  const description = sector.overview ?? sector.summary;
  const url = `${site.url}/experience-sectors/${sector.slug}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [
        sector.image
          ? { url: sector.image, alt: sector.imageAlt ?? sector.name }
          : { url: "/brand/og-image.png", width: 1200, height: 630, alt: site.name },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [sector.image ?? "/brand/og-image.png"],
    },
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Experience Sectors", path: "/experience-sectors" },
              { label: sector.name, path: `/experience-sectors/${sector.slug}` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow={`Experience Sector · ${sector.number}`}
        title={sector.name}
        lead={sector.statement}
        crumbs={[
          { label: "Experience Sectors", href: "/experience-sectors" },
          { label: sector.shortName },
        ]}
      />

      <SectorDetail sector={sector} />

      <CTABanner
        eyebrow="Work with 5LA"
        title={`Bring the ${sector.name} to your organization.`}
        body={sector.outcome}
        primary={{
          label: "Work With 5LA",
          href: `/work-with-us?interest=${sector.slug}`,
        }}
        secondary={{ label: "All Experience Sectors", href: "/experience-sectors" }}
      />
    </>
  );
}
