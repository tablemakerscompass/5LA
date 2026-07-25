import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  path: "/about",
  description:
    "The 5 Loaves Agency is a multidisciplinary experience company designing the systems, people, technology, and stories behind meaningful experiences.",
});

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="About 5LA"
      title="The experience company behind the brand."
      crumbs={[{ label: "About" }]}
      note="The full About story — the ecosystem, the philosophy, and the people — is being written for a later phase. The foundation is ready for it."
    />
  );
}
