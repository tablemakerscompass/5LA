import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import SectorsHero from "@/components/sectors/SectorsHero";
import ExperiencePrinciple from "@/components/sectors/ExperiencePrinciple";
import SectorOverview from "@/components/sectors/SectorOverview";
import SectorsConnect from "@/components/sectors/SectorsConnect";
import CrossSectorExamples from "@/components/sectors/CrossSectorExamples";
import StartingPoint from "@/components/sectors/StartingPoint";
import SectorStandard from "@/components/sectors/SectorStandard";
import SectorEcosystem from "@/components/sectors/SectorEcosystem";
import CTABanner from "@/components/ui/CTABanner";

const title = "Experience Sectors | Business, Technology, Training & Media | 5LA";
const description =
  "Explore the four connected Experience Sectors of The 5 Loaves Agency: Business, Technology, Training, and Media.";
const url = `${site.url}/experience-sectors`;

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

export default function ExperienceSectorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Experience Sectors", path: "/experience-sectors" },
            ])
          ),
        }}
      />

      <SectorsHero />
      <ExperiencePrinciple />
      <SectorOverview />
      <SectorsConnect />
      <CrossSectorExamples />
      <StartingPoint />
      <SectorStandard />
      <SectorEcosystem />

      <CTABanner
        eyebrow="Begin Here"
        title="What Part of the Experience Needs to Be Built, Strengthened, or Reimagined?"
        body="Whether your need begins with operations, technology, people, or story, 5LA helps identify the structure required to move from vision to consistent experience."
        primary={{ label: "Work With 5LA", href: "/work-with-us" }}
        secondary={{ label: "Start a Conversation", href: "/contact" }}
      />
    </>
  );
}
