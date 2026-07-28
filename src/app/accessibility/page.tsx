import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import LegalPage from "@/components/legal/LegalPage";
import { accessibilityIntro, accessibilitySections } from "@/content/legal/accessibility";

const title = "Accessibility Statement | The 5 Loaves Agency";
const description =
  "Read The 5 Loaves Agency's commitment to providing an accessible and inclusive website experience.";
const url = `${site.url}/accessibility`;

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

export default function AccessibilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ label: "Accessibility Statement", path: "/accessibility" }])
          ),
        }}
      />
      <LegalPage
        eyebrow="Accessibility"
        title="Accessibility Statement"
        crumb="Accessibility Statement"
        intro={accessibilityIntro}
        sections={accessibilitySections}
        showReviewNotice={false}
      />
    </>
  );
}
