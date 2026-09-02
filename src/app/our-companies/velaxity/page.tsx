import type { Metadata } from "next";
import CTABanner from "@/components/ui/CTABanner";
import VxHero from "@/components/velaxity/VxHero";
import VxWhy from "@/components/velaxity/VxWhy";
import VxChallenges from "@/components/velaxity/VxChallenges";
import VxArchitecture from "@/components/velaxity/VxArchitecture";
import VxHubs from "@/components/velaxity/VxHubs";
import VxAiPrinciples from "@/components/velaxity/VxAiPrinciples";
import VxAudiences from "@/components/velaxity/VxAudiences";
import VxDifference from "@/components/velaxity/VxDifference";
import VxImplementation from "@/components/velaxity/VxImplementation";
import VxIdentitySuite from "@/components/velaxity/VxIdentitySuite";
import VxOutcomes from "@/components/velaxity/VxOutcomes";
import VxPreview from "@/components/velaxity/VxPreview";
import VxTrust from "@/components/velaxity/VxTrust";
import VxEcosystem from "@/components/velaxity/VxEcosystem";
import VxFuture from "@/components/velaxity/VxFuture";
import VxDemo from "@/components/velaxity/VxDemo";
import VxAgencyServices from "@/components/velaxity/VxAgencyServices";
import VxAgencyOutcomes from "@/components/velaxity/VxAgencyOutcomes";
import theme from "@/components/velaxity/vx-theme.module.css";
import { vxAssets, vxBrand } from "@/config/velaxity";
import { site } from "@/config/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

const base = createMetadata({
  title: vxBrand.name,
  path: vxBrand.path,
  description: vxBrand.metaDescription,
});

/**
 * The full page title is used verbatim rather than through the site title
 * template, because it already carries its own descriptor.
 */
export const metadata: Metadata = {
  ...base,
  title: { absolute: vxBrand.metaTitle },
  keywords: [
    "VelaXity",
    "executive operating system",
    "AI for leadership",
    "hospitality operations software",
    "organizational intelligence",
    "standards management",
    "The 5 Loaves Agency",
  ],
  openGraph: {
    ...base.openGraph,
    title: vxBrand.metaTitle,
    description: vxBrand.metaDescription,
    // FOR EDITORS: set `vxAssets.ogImage` to an approved social card. Until
    // then the shared 5LA card is used rather than an invented graphic.
    ...(vxAssets.ogImage
      ? {
          images: [
            {
              url: vxAssets.ogImage,
              width: 1200,
              height: 630,
              alt: `${vxBrand.name} — ${vxBrand.category}`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    ...base.twitter,
    title: vxBrand.metaTitle,
    description: vxBrand.metaDescription,
    ...(vxAssets.ogImage ? { images: [vxAssets.ogImage] } : {}),
  },
};

/**
 * WebApplication schema — VelaXity is a browser-based application, so the type
 * is technically appropriate.
 *
 * Deliberately omitted: `offers` and any price (the structure is not approved
 * for display on this site), `aggregateRating`, `review`, user counts, release
 * dates, and any security or compliance property. None is verifiable here.
 */
function velaxitySchema() {
  const url = new URL(vxBrand.path, site.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: vxBrand.name,
    url,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Executive operating system",
    operatingSystem: "Any modern web browser",
    browserRequirements: "Requires JavaScript.",
    inLanguage: "en",
    description: vxBrand.metaDescription,
    slogan: vxBrand.positioning,
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Executives, hospitality leaders, multi-location operators, and leadership teams",
    },
    publisher: { "@type": "Organization", name: vxBrand.parent },
    provider: { "@type": "Organization", name: vxBrand.parent },
    featureList: [
      "Executive Hub",
      "AI Hub",
      "Standards Hub",
      "Learning Hub",
      "Team Hub",
      "Portfolio Hub",
    ],
  };
}

export default function VelaXityPage() {
  return (
    <div className={theme.theme}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(velaxitySchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Our Companies", path: "/our-companies" },
              { label: vxBrand.name, path: vxBrand.path },
            ])
          ),
        }}
      />

      {/* 1 */}
      <VxHero />
      {/* 2 */}
      <VxWhy />
      {/* 3 */}
      <VxChallenges />
      {/* 4 */}
      <VxArchitecture />
      {/* 5 */}
      <VxHubs />
      {/* 6 */}
      <VxAiPrinciples />
      {/* 7 */}
      <VxAudiences />
      {/* 8 */}
      <VxDifference />
      {/* 9 */}
      <VxImplementation />
      {/* 10 */}
      <VxIdentitySuite />
      {/* 11 */}
      <VxOutcomes />
      {/* 12 */}
      <VxPreview />
      {/* 13 */}
      <VxTrust />
      {/* 14 */}
      <VxEcosystem />
      {/* 15 */}
      <VxFuture />
      {/*
        * Parent-company technology services, moved here when
        * /our-companies/velaxity was retired. Placed after the product
        * story and clearly labelled as 5LA engagements so nothing here reads
        * as a VelaXity platform capability.
        */}
      <VxAgencyServices />
      <VxAgencyOutcomes />
      {/* 16 + 17 */}
      <VxDemo />

      {/* 18 — the shared global CTA banner, wearing the VelaXity identity. */}
      <CTABanner
        title="Leadership Does Not Need Another Disconnected Tool. It Needs a More Connected View of the Organization."
        body="VelaXity is designed to help leaders bring priorities, people, standards, learning, organizational context, and AI support into one executive environment."
        primary={{ label: "Request a VelaXity Demo", href: vxBrand.demoPath }}
        secondary={{
          label: "Explore 5LA Technology Experience",
          href: "/our-companies/velaxity",
        }}
      />
    </div>
  );
}
