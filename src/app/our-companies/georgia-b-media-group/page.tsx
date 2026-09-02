import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import GbHero from "@/components/georgia-b/GbHero";
import GbWhy from "@/components/georgia-b/GbWhy";
import GbLegacy from "@/components/georgia-b/GbLegacy";
import GbCreativeAreas from "@/components/georgia-b/GbCreativeAreas";
import GbPhilosophy from "@/components/georgia-b/GbPhilosophy";
import GbProperties from "@/components/georgia-b/GbProperties";
import GbDevelopment from "@/components/georgia-b/GbDevelopment";
import GbSectors from "@/components/georgia-b/GbSectors";
import GbPartners from "@/components/georgia-b/GbPartners";
import GbPathways from "@/components/georgia-b/GbPathways";
import GbDeliverables from "@/components/georgia-b/GbDeliverables";
import GbStandard from "@/components/georgia-b/GbStandard";
import CTABanner from "@/components/ui/CTABanner";
import CapabilityAccordion from "@/components/ui/CapabilityAccordion";
import { gbMediaCapabilities } from "@/config/media-capabilities";

const title =
  "The Georgia B. Media Group | Publishing, Productions & Original Stories";
const description =
  "Explore The Georgia B. Media Group, the publishing, production, and original-storytelling division of The 5 Loaves Agency.";
const url = `${site.url}/our-companies/georgia-b-media-group`;

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
 * Brand schema. Describes the division and its relationship to the parent
 * company only — no claims about products, releases, or availability.
 */
const brandSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Georgia B. Media Group",
  url,
  description:
    "The publishing, production, media, and original-storytelling division within The 5 Loaves Agency.",
  parentOrganization: {
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
  },
};

export default function GeorgiaBMediaGroupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              {
                label: "The Georgia B. Media Group",
                path: "/our-companies/georgia-b-media-group",
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />

      <GbHero />
      <GbWhy />
      <GbLegacy />
      <GbCreativeAreas />
      <GbPhilosophy />
      <GbProperties />
      <GbDevelopment />
      <GbSectors />
      <GbPartners />
      <GbPathways />
      <GbDeliverables />
      {/* Inherited from the retired /our-companies/georgia-b-media-group page. */}
      <CapabilityAccordion
        id="media-capabilities"
        eyebrow="What We Create"
        title="Stories, Properties, Platforms, and Experiences Built With Purpose."
        categories={gbMediaCapabilities}
      />
      <GbStandard />

      <CTABanner
        eyebrow="Begin Here"
        title="What Story, Production, or Original Property Are You Ready to Build?"
        body="The Georgia B. Media Group begins with the story, the audience, and the reason the work must exist—then builds the structure required to bring it forward with purpose."
        primary={{ label: "Discuss a Creative Partnership", href: "/work-with-us?interest=georgia-b-media-group" }}
        secondary={{
          label: "Explore the 5LA Media Experience",
          href: "/our-companies/georgia-b-media-group",
        }}
      />
    </>
  );
}
