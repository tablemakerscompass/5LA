import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import TrainingHero from "@/components/training/TrainingHero";
import TrainingMeaning from "@/components/training/TrainingMeaning";
import TrainingChallenges from "@/components/training/TrainingChallenges";
import TrainingCapabilities from "@/components/training/TrainingCapabilities";
import TrainingPhilosophy from "@/components/training/TrainingPhilosophy";
import TrainingLoaves from "@/components/training/TrainingLoaves";
import TrainingAcademy from "@/components/training/TrainingAcademy";
import TrainingTablemakers from "@/components/training/TrainingTablemakers";
import TrainingProcess from "@/components/training/TrainingProcess";
import TrainingFormats from "@/components/training/TrainingFormats";
import TrainingDeliverables from "@/components/training/TrainingDeliverables";
import TrainingAudience from "@/components/training/TrainingAudience";
import TrainingOutcomes from "@/components/training/TrainingOutcomes";
import TrainingEngagements from "@/components/training/TrainingEngagements";
import TrainingConnections from "@/components/training/TrainingConnections";
import CTABanner from "@/components/ui/CTABanner";

const title =
  "Training Experience | Leadership, Hospitality & Workforce Development | 5LA";
const description =
  "Explore Training Experience at The 5 Loaves Agency, including leadership development, hospitality training, manager development, workforce learning, and the LOAVES framework.";
const url = `${site.url}/experience-sectors/training`;

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

export default function TrainingExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Experience Sectors", path: "/experience-sectors" },
              { label: "Training", path: "/experience-sectors/training" },
            ])
          ),
        }}
      />

      <TrainingHero />
      <TrainingMeaning />
      <TrainingChallenges />
      <TrainingCapabilities />
      <TrainingPhilosophy />
      <TrainingLoaves />
      <TrainingAcademy />
      <TrainingTablemakers />
      <TrainingProcess />
      <TrainingFormats />
      <TrainingDeliverables />
      <TrainingAudience />
      <TrainingOutcomes />
      <TrainingEngagements />
      <TrainingConnections />

      <CTABanner
        eyebrow="Begin Here"
        title="Are Your People Being Asked to Deliver a Standard They Have Not Been Equipped to Carry?"
        body="5LA develops learning experiences that help leaders, managers, employees, and professionals understand what excellence requires and how to apply it in the real work."
        primary={{ label: "Work With 5LA", href: "/work-with-us?interest=training" }}
        secondary={{ label: "Start a Conversation", href: "/contact" }}
      />
    </>
  );
}
