import PageHero from "./PageHero";
import Section from "./Section";
import CTABanner from "@/components/ui/CTABanner";
import type { Crumb } from "@/components/ui/Breadcrumbs";
import styles from "./PlaceholderPage.module.css";

type PlaceholderPageProps = {
  eyebrow?: string;
  title: string;
  /** A restrained, factual intro line. Avoid inventing marketing claims. */
  lead?: string;
  crumbs?: Crumb[];
  /** Optional short note describing what this page will contain. */
  note?: string;
  /** Show the closing CTA banner (default true). */
  cta?: boolean;
};

/**
 * A restrained, clearly-labeled placeholder for routes that exist in the
 * information architecture but whose full content is built in a later phase.
 * Deliberately avoids fabricated copy, statistics, or claims.
 */
export default function PlaceholderPage({
  eyebrow,
  title,
  lead,
  crumbs,
  note,
  cta = true,
}: PlaceholderPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} crumbs={crumbs} />
      <Section narrow>
        <div className={styles.body}>
          <span className={styles.tag}>In development</span>
          <p className="body">
            {note ??
              "This page is part of the site architecture and is being crafted in a later phase. The global brand system, navigation, and components are in place and ready for its content."}
          </p>
        </div>
      </Section>
      {cta && (
        <CTABanner
          eyebrow="Start a conversation"
          title="Bring structure to your vision."
          body="Tell us what you're building. We'll help align the systems, people, technology, and stories behind it."
          primary={{ label: "Work With Us", href: "/work-with-us" }}
          secondary={{ label: "Explore the Sectors", href: "/experience-sectors" }}
        />
      )}
    </>
  );
}
