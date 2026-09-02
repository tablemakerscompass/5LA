import type { Metadata } from "next";
import CTABanner from "@/components/ui/CTABanner";
import AcHero from "@/components/academy/AcHero";
import AcWhy from "@/components/academy/AcWhy";
import AcAudiences from "@/components/academy/AcAudiences";
import AcLearningAreas from "@/components/academy/AcLearningAreas";
import AcLoaves from "@/components/academy/AcLoaves";
import AcFoundation from "@/components/academy/AcFoundation";
import AcTablemakers from "@/components/academy/AcTablemakers";
import AcPhilosophy from "@/components/academy/AcPhilosophy";
import AcFormats from "@/components/academy/AcFormats";
import AcOrgTraining from "@/components/academy/AcOrgTraining";
import AcIndividual from "@/components/academy/AcIndividual";
import AcDeliverables from "@/components/academy/AcDeliverables";
import AcPartners from "@/components/academy/AcPartners";
import AcVelaxity from "@/components/academy/AcVelaxity";
import AcEcosystem from "@/components/academy/AcEcosystem";
import AcFuture from "@/components/academy/AcFuture";
import AcInquiry from "@/components/academy/AcInquiry";
import theme from "@/components/academy/ac-theme.module.css";
import CapabilityAccordion from "@/components/ui/CapabilityAccordion";
import { academyCapabilities } from "@/config/training-capabilities";
import { acAssets, acBrand } from "@/config/academy";
import { site } from "@/config/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

const base = createMetadata({
  title: acBrand.name,
  path: acBrand.path,
  description: acBrand.metaDescription,
});

/**
 * The full page title is used verbatim rather than through the site title
 * template, because it already carries its own descriptor.
 */
export const metadata: Metadata = {
  ...base,
  title: { absolute: acBrand.metaTitle },
  keywords: [
    "The 5LA Academy",
    "hospitality training",
    "leadership development",
    "manager development",
    "workforce development",
    "guest experience training",
    "LOAVES framework",
    "The 5 Loaves Agency",
  ],
  openGraph: {
    ...base.openGraph,
    title: acBrand.metaTitle,
    description: acBrand.metaDescription,
    // FOR EDITORS: set `acAssets.ogImage` to an approved social card. Until
    // then the shared 5LA card is used rather than an invented graphic.
    ...(acAssets.ogImage
      ? {
          images: [
            {
              url: acAssets.ogImage,
              width: 1200,
              height: 630,
              alt: `${acBrand.name} — ${acBrand.category}`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    ...base.twitter,
    title: acBrand.metaTitle,
    description: acBrand.metaDescription,
    ...(acAssets.ogImage ? { images: [acAssets.ogImage] } : {}),
  },
};

/**
 * Organization schema, NOT EducationalOrganization.
 *
 * EducationalOrganization implies a school. The Academy is a professional
 * training division with no accreditation and no recognized credential, so the
 * narrower type would overstate what it is. `Course` schema is likewise omitted:
 * no course has a published, approved offering to describe.
 *
 * Nothing here asserts a rating, enrollment figure, price, credential, or
 * outcome — none is verifiable.
 */
function academySchema() {
  const url = new URL(acBrand.path, site.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: acBrand.name,
    url,
    description: acBrand.metaDescription,
    slogan: acBrand.positioning,
    parentOrganization: { "@type": "Organization", name: acBrand.parent },
    knowsAbout: [
      "Hospitality training",
      "Leadership development",
      "Manager development",
      "Guest experience",
      "Workforce readiness",
      "Organizational culture",
      "Service standards",
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Hospitality businesses, multi-location operators, growing organizations, and workforce-development partners",
    },
  };
}

export default function AcademyPage() {
  return (
    <div className={theme.theme}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(academySchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Our Companies", path: "/our-companies" },
              { label: acBrand.name, path: acBrand.path },
            ])
          ),
        }}
      />

      {/* 1 */}
      <AcHero />
      {/* 2 */}
      <AcWhy />
      {/* 3 */}
      <AcAudiences />
      {/* 4 */}
      <AcLearningAreas />
      {/* 5 */}
      <AcLoaves />
      {/* 6 */}
      <AcFoundation />
      {/* 7 */}
      <AcTablemakers />
      {/* 8 */}
      <AcPhilosophy />
      {/* 9 */}
      <AcFormats />
      {/* 10 */}
      <AcOrgTraining />
      {/* Inherited from the retired /our-companies/5la-academy page. */}
      <CapabilityAccordion
        id="training-capabilities"
        eyebrow="What We Teach"
        title="Programs Built Around the People Who Carry the Standard."
        categories={academyCapabilities}
      />
      {/* 11 */}
      <AcIndividual />
      {/* 12 + 13 */}
      <AcDeliverables />
      {/* 14 */}
      <AcPartners />
      {/* 15 */}
      <AcVelaxity />
      {/* 16 */}
      <AcEcosystem />
      {/* 17 */}
      <AcFuture />
      {/* 18 */}
      <AcInquiry />

      {/* 19 — the shared global CTA banner, wearing the Academy identity. */}
      <CTABanner
        title="Your People Are Already Creating an Experience. Let’s Equip Them to Create It With Intention."
        body="The 5LA Academy develops practical learning experiences helping leaders, managers, employees, and professionals understand the standard, carry the responsibility, and serve with excellence."
        primary={{ label: "Work With The 5LA Academy", href: acBrand.inquiryPath }}
        secondary={{
          label: "Explore Tablemakers",
          href: "/our-companies/tablemakers",
        }}
      />
    </div>
  );
}
