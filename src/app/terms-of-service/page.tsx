import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  path: "/terms-of-service",
  description: "Terms of Service for The 5 Loaves Agency, LLC.",
});

export default function TermsOfServicePage() {
  return (
    <PlaceholderPage
      eyebrow="Legal"
      title="Terms of Service"
      crumbs={[{ label: "Terms of Service" }]}
      note="The Terms of Service will be provided by The 5 Loaves Agency, LLC. No legal language has been drafted here — final terms will be supplied for a later phase."
      cta={false}
    />
  );
}
