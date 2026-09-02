import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import CompaniesHero from "@/components/companies/CompaniesHero";
import CompaniesParent from "@/components/companies/CompaniesParent";
import CompaniesArchitecture from "@/components/companies/CompaniesArchitecture";
import CompaniesPortfolio from "@/components/companies/CompaniesPortfolio";
import CompaniesFoundations from "@/components/companies/CompaniesFoundations";
import CompaniesIP from "@/components/companies/CompaniesIP";
import CompaniesSectors from "@/components/companies/CompaniesSectors";
import CompaniesPathways from "@/components/companies/CompaniesPathways";
import CompaniesPartnerships from "@/components/companies/CompaniesPartnerships";
import CompaniesLoaves from "@/components/companies/CompaniesLoaves";
import CTABanner from "@/components/ui/CTABanner";

const title = "Our Companies, Platforms & Properties | The 5 Loaves Agency";
const description =
  "Explore the companies, platforms, programs, communities, and original properties developed within The 5 Loaves Agency ecosystem.";
const url = `${site.url}/our-companies`;

export const metadata: Metadata = {
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

export default function OurCompaniesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Our Companies", path: "/our-companies" },
            ])
          ),
        }}
      />

      <CompaniesHero />
      <CompaniesParent />
      <CompaniesArchitecture />
      <CompaniesPortfolio />
      <CompaniesFoundations />
      <CompaniesIP />
      <CompaniesSectors />
      <CompaniesPathways />
      <CompaniesPartnerships />
      <CompaniesLoaves />

      <CTABanner
        eyebrow="Begin Here"
        title="Explore the Brand That Speaks to the Experience You Are Building."
        body="Whether your interest begins with business, technology, training, media, community, healing, professional development, or original storytelling, every part of the 5LA ecosystem was created with purpose and room to grow."
        primary={{ label: "Work With 5LA", href: "/work-with-us" }}
        secondary={{
          label: "Explore Our Experience Sectors",
          href: "/what-we-do",
        }}
      />
    </>
  );
}
