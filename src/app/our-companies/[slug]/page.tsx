import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import CTABanner from "@/components/ui/CTABanner";
import { companies, getCompany } from "@/config/companies";
import { createMetadata } from "@/lib/seo";

type Params = { slug: string };

/**
 * Brands with a dedicated, hand-built route under `app/our-companies/<slug>/`
 * are skipped here: those static segments take precedence over this dynamic
 * one, so pre-rendering them twice would generate the same URL from two
 * places. The `hasOwnPage` flag on each brand is the single source of truth,
 * so adding a brand page means setting one field rather than editing a list
 * kept in a second file.
 *
 * Every brand now has its own page, so this placeholder pre-renders nothing —
 * it remains as the fallback for any brand added to the config before its
 * page is built.
 */
export function generateStaticParams(): Params[] {
  return companies.filter((c) => !c.hasOwnPage).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) return {};
  return createMetadata({
    title: company.name,
    path: `/our-companies/${company.slug}`,
    description: company.description,
  });
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) notFound();

  return (
    <>
      <PageHero
        eyebrow={company.category}
        title={company.name}
        crumbs={[
          { label: "Our Companies", href: "/our-companies" },
          { label: company.name },
        ]}
      />

      <Section narrow>
        {/* PLACEHOLDER — replace with the brand's full profile in a later phase. */}
        <p className="lead">{company.description}</p>
        <p className="body" style={{ marginTop: "var(--space-5)" }}>
          A full profile for {company.name} within the 5LA ecosystem is being
          developed. This page is part of the site architecture with the brand
          foundation in place.
        </p>
      </Section>

      <CTABanner
        eyebrow="The 5LA ecosystem"
        title="Explore the rest of the ecosystem."
        primary={{ label: "All Companies", href: "/our-companies" }}
        secondary={{ label: "Work With Us", href: "/work-with-us" }}
      />
    </>
  );
}
