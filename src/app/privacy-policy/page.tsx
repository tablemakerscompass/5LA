import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  path: "/privacy-policy",
  description: "Privacy Policy for The 5 Loaves Agency, LLC.",
});

export default function PrivacyPolicyPage() {
  return (
    <PlaceholderPage
      eyebrow="Legal"
      title="Privacy Policy"
      crumbs={[{ label: "Privacy Policy" }]}
      note="The Privacy Policy will be provided by The 5 Loaves Agency, LLC. No legal language has been drafted here — final policy text will be supplied for a later phase."
      cta={false}
    />
  );
}
