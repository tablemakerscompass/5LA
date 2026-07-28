import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import GbsHero from "@/components/gb-society/GbsHero";
import GbsWhy from "@/components/gb-society/GbsWhy";
import GbsLegacy from "@/components/gb-society/GbsLegacy";
import GbsPurpose from "@/components/gb-society/GbsPurpose";
import GbsInitiatives from "@/components/gb-society/GbsInitiatives";
import GbsPrinciples from "@/components/gb-society/GbsPrinciples";
import GbsEcosystem from "@/components/gb-society/GbsEcosystem";
import GbsAuntSarahs from "@/components/gb-society/GbsAuntSarahs";
import GbsAudience from "@/components/gb-society/GbsAudience";
import GbsPathways from "@/components/gb-society/GbsPathways";
import GbsExamples from "@/components/gb-society/GbsExamples";
import GbsExperience from "@/components/gb-society/GbsExperience";
import GbsFuture from "@/components/gb-society/GbsFuture";
import CTABanner from "@/components/ui/CTABanner";

const title = "The Georgia B. Society | Legacy, Community & Culture";
const description =
  "Discover The Georgia B. Society, a legacy-centered initiative preserving stories, honoring family, and creating meaningful cultural and community experiences.";
const url = `${site.url}/our-companies/georgia-b-society`;

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

/**
 * Brand schema. Describes the initiative and its relationship to the parent
 * company only — no nonprofit status, programs, events, or availability are
 * asserted.
 */
const brandSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Georgia B. Society",
  url,
  description:
    "A legacy-centered cultural and community initiative within The 5 Loaves Agency, preserving stories and creating meaningful community experiences.",
  parentOrganization: {
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
  },
};

export default function GeorgiaBSocietyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Our Companies", path: "/our-companies" },
              {
                label: "The Georgia B. Society",
                path: "/our-companies/georgia-b-society",
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />

      <GbsHero />
      <GbsWhy />
      <GbsLegacy />
      <GbsPurpose />
      <GbsInitiatives />
      <GbsPrinciples />
      <GbsEcosystem />
      <GbsAuntSarahs />
      <GbsAudience />
      <GbsPathways />
      <GbsExamples />
      <GbsExperience />
      <GbsFuture />

      <CTABanner
        eyebrow="Begin Here"
        title="What Story, Legacy, or Community Experience Deserves Room to Continue?"
        body="The Georgia B. Society welcomes aligned conversations with families, organizations, communities, and creative partners interested in preserving stories, honoring legacy, and creating meaningful experiences."
        primary={{
          label: "Discuss a Community Partnership",
          href: "/work-with-us?interest=georgia-b-society",
        }}
        secondary={{
          label: "Explore The Georgia B. Media Group",
          href: "/our-companies/georgia-b-media-group",
        }}
      />
    </>
  );
}
