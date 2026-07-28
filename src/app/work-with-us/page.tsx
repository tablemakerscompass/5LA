import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import PageHero from "@/components/layout/PageHero";
import InquiryForm from "@/components/work/InquiryForm";
import WhatHappensNext from "@/components/work/WhatHappensNext";
import AlternativeContact from "@/components/work/AlternativeContact";

const title = "Work With The 5 Loaves Agency | Start a Conversation";
const description =
  "Start a conversation with The 5 Loaves Agency about business operations, artificial intelligence, training, hospitality, media, events, or an ecosystem partnership.";
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
        eyebrow="Start a Conversation"
        title="Tell Us What You Are Building—and Where the Experience Needs Support."
        lead="Whether your need begins with business, technology, training, media, hospitality, events, or one of the brands within the 5LA ecosystem, the first step is understanding the work, the challenge, and the experience you are trying to create."
        crumbs={[{ label: "Work With Us" }]}
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
