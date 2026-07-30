import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import LegalPage from "@/components/legal/LegalPage";
import { privacyIntro, privacySections } from "@/content/legal/privacy";

const title = "Privacy Policy | The 5 Loaves Agency";
const description =
  "Learn how The 5 Loaves Agency collects, uses, shares, stores, and protects information submitted through its website.";
const url = `${site.url}/privacy-policy`;

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

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ label: "Privacy Policy", path: "/privacy-policy" }])
          ),
        }}
      />
      <LegalPage
        eyebrow="Legal"
        title="Privacy Policy"
        crumb="Privacy Policy"
        intro={privacyIntro}
        sections={privacySections}
        
      />
    </>
  );
}
