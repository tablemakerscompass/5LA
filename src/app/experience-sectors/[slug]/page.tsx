import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import EditorialImage from "@/components/ui/EditorialImage";
import CTABanner from "@/components/ui/CTABanner";
import { sectors, getSector } from "@/config/sectors";
import { createMetadata } from "@/lib/seo";

type Params = { slug: string };

/**
 * Sectors with a dedicated, fully-built route under
 * `app/experience-sectors/<slug>/`. Those static segments take precedence over
 * this dynamic one, so they must not also be pre-rendered here.
 * Remove a slug from this list only if its dedicated route is removed.
 */
const DEDICATED_ROUTES = new Set(["business", "technology", "training"]);

/** Pre-render one static page per sector still served by this placeholder. */
export function generateStaticParams(): Params[] {
  return sectors
    .filter((s) => !DEDICATED_ROUTES.has(s.slug))
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return createMetadata({
    title: sector.name,
    path: `/experience-sectors/${sector.slug}`,
    description: sector.statement,
  });
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
      <PageHero
        eyebrow={`Experience Sector · ${sector.number}`}
        title={sector.name}
        lead={sector.statement}
        crumbs={[
          { label: "Experience Sectors", href: "/experience-sectors" },
          { label: sector.shortName },
        ]}
      />

      <Section>
        <EditorialImage
          placeholderLabel={`${sector.shortName} experience imagery`}
          aspect="21/9"
        />
        <p className="body" style={{ marginTop: "var(--space-6)" }}>
          The full {sector.name} overview — capabilities, approach, and outcomes —
          is being developed in a later phase. This page is part of the site
          architecture with the brand foundation in place.
        </p>
      </Section>

      <CTABanner
        eyebrow="Work with 5LA"
        title={`Bring the ${sector.shortName} Experience to your organization.`}
        primary={{ label: "Work With Us", href: "/work-with-us" }}
        secondary={{ label: "All Sectors", href: "/experience-sectors" }}
      />
    </>
  );
}
