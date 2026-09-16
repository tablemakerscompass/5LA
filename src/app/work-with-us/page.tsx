import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import PageHero from "@/components/layout/PageHero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import ServicePackages from "@/components/work/ServicePackages";
import StrategySession from "@/components/work/StrategySession";
import NotSureWhichFits from "@/components/work/NotSureWhichFits";
import InquiryForm from "@/components/work/InquiryForm";
import WhatHappensNext from "@/components/work/WhatHappensNext";
import AlternativeContact from "@/components/work/AlternativeContact";

const title = "Work With The 5 Loaves Agency | Start a Conversation";
const description =
  "Six ways to work with The 5 Loaves Agency — business setup and operations, brand and creative direction, content and marketing, websites and technology, hospitality training and culture, and events. Starting investments included.";
const url = `${site.url}/work-with-us`;

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

export default function WorkWithUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ label: "Work With Us", path: "/work-with-us" }])
          ),
        }}
      />

      <PageHero
        eyebrow="For Small Businesses Ready to Grow With Intention"
        title="Tell Us Where Your Business Needs Support — We Will Meet You There."
        lead={
          <>
            Whether you are building from the ground up, trying to bring order
            to what is already growing, creating a stronger customer
            experience, or finally getting your brand in front of the right
            people — you do not have to figure out every piece alone.
          </>
        }
        callout="Tell us what is happening. We will help you determine what comes next."
        crumbs={[{ label: "Work With Us" }]}
      />

      <ServicePackages />

      <StrategySession />

      <NotSureWhichFits />

      <QuoteBlock
        quote="You don't have to know exactly what service you need. You just need to know where the business needs help."
        attribution="The business behind the business starts here."
      />

      {/* The form reads `?interest=` from the URL, so it renders on the client. */}
      <Suspense fallback={null}>
        <InquiryForm />
      </Suspense>

      <WhatHappensNext />

      <AlternativeContact />
    </>
  );
}
