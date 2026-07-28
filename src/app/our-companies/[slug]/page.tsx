import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import CompanyProfile from "@/components/companies/CompanyProfile";
import CTABanner from "@/components/ui/CTABanner";
import { companies, getCompany } from "@/config/companies";
import { sectorForCompany } from "@/config/ecosystem";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) return {};

  const title = `${company.name} | The 5 Loaves Agency`;
  const description = company.description;
  const url = `${site.url}/our-companies/${company.slug}`;

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
        { url: "/brand/og-image.png", width: 1200, height: 630, alt: site.name },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/og-image.png"],
    },
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) notFound();

  const sector = sectorForCompany(company);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Our Companies", path: "/our-companies" },
              { label: company.name, path: `/our-companies/${company.slug}` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow={company.category}
        title={company.name}
        lead={company.description}
        crumbs={[
          { label: "Our Companies", href: "/our-companies" },
          { label: company.name },
        ]}
      />

      <CompanyProfile company={company} />

      <CTABanner
        eyebrow="Work with 5LA"
        title={`Start a conversation about ${company.name}.`}
        body={
          sector
            ? `${company.name} sits within ${sector.name}. ${sector.statement}`
            : undefined
        }
        primary={{
          label: "Work With 5LA",
          href: `/work-with-us?interest=${company.slug}`,
        }}
        secondary={{ label: "All Companies", href: "/our-companies" }}
      />
    </>
  );
}
