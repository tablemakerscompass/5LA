import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import PageHero from "@/components/layout/PageHero";
import WhatWeDoOfferings from "@/components/what-we-do/WhatWeDoOfferings";
import WhatWeDoServices from "@/components/what-we-do/WhatWeDoServices";
import WhatWeDoOutcomes from "@/components/what-we-do/WhatWeDoOutcomes";
import CTABanner from "@/components/ui/CTABanner";

const title =
  "What We Do | Hospitality Operations, Training & Events | The 5 Loaves Agency";
const description =
  "The six ways to work with The 5 Loaves Agency: business setup and operations, brand and creative direction, content and marketing, websites and technology, hospitality training and culture, and events and experiences.";
const url = `${site.url}/what-we-do`;

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
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/og-image.png"],
  },
};

/**
 * What We Do — the full statement of the six services.
 *
 * The cards say what each service is; the section below them says what each
 * one covers, anchored by service slug so any link can land on one. Work With
 * Us carries the same six with their starting investments and the form.
 */
export default function WhatWeDoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ label: "What We Do", path: "/what-we-do" }])
          ),
        }}
      />

      <PageHero
        eyebrow="What We Do"
        title="Built on Operations. Delivered With Heart."
        lead="5LA helps hospitality-driven organizations strengthen their operations, develop their people, and produce events and experiences guests actually remember."
        crumbs={[{ label: "What We Do" }]}
      />

      <WhatWeDoOfferings showIntro={false} />
      <WhatWeDoServices />
      <WhatWeDoOutcomes />

      <CTABanner
        eyebrow="Begin Here"
        title="Is the Experience Stronger Than the Structure Behind It?"
        body="5LA helps organizations identify the gaps between what they promise, how they operate, and what people actually experience."
        primary={{ label: "Work With 5LA", href: "/work-with-us" }}
        secondary={{ label: "Start a Conversation", href: "/contact" }}
      />
    </>
  );
}
