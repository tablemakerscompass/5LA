import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import PageHero from "@/components/layout/PageHero";
import WhatWeDoOfferings from "@/components/what-we-do/WhatWeDoOfferings";
import WhatWeDoCapabilities from "@/components/what-we-do/WhatWeDoCapabilities";
import WhatWeDoOutcomes from "@/components/what-we-do/WhatWeDoOutcomes";
import CTABanner from "@/components/ui/CTABanner";

const title =
  "What We Do | Hospitality Operations, Training & Events | The 5 Loaves Agency";
const description =
  "Business operations and strategy, hospitality and culture training, and events and experience design — the operational foundation The 5 Loaves Agency builds for hospitality-driven organizations.";
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
 * What We Do — the destination that replaced /what-we-do.
 *
 * The capability and outcome sections are the Business Experience page's own,
 * moved here intact rather than rewritten: they are the most detailed
 * statement of the work anywhere on the site, and the sector page they lived
 * on is retired.
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
      <WhatWeDoCapabilities />
      <WhatWeDoOutcomes />

      <CTABanner
        eyebrow="Begin Here"
        title="Is the Experience Stronger Than the Structure Behind It?"
        body="5LA helps organizations identify the gaps between what they promise, how they operate, and what people actually experience."
        primary={{ label: "Work With 5LA", href: "/work-with-us?interest=business" }}
        secondary={{ label: "Start a Conversation", href: "/contact" }}
      />
    </>
  );
}
