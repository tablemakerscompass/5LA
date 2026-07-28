import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Accessibility Statement",
  path: "/accessibility",
  description: "Accessibility Statement for The 5 Loaves Agency, LLC.",
});

export default function AccessibilityPage() {
  return (
    <PlaceholderPage
      eyebrow="Legal"
      title="Accessibility Statement"
      crumbs={[{ label: "Accessibility Statement" }]}
      note="The Accessibility Statement will be provided by The 5 Loaves Agency, LLC. No statement text has been drafted here — the final wording, conformance target, and feedback contact will be supplied for a later phase."
      cta={false}
    />
  );
}
