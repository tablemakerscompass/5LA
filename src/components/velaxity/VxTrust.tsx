import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { trustFacts } from "@/config/velaxity";
import styles from "./VxTrust.module.css";

/**
 * Section 13 — Data, privacy, and responsible use.
 *
 * Every statement was read out of the application source: Supabase Auth with
 * magic links (MFA not yet enabled), Postgres with row-level security, four
 * permission roles, Stripe for payments, a scheduled Google Reviews sync, and
 * an AI Hub that sends nothing to an external provider.
 *
 * BEFORE EDITING: re-verify against the application. Never add SOC 2, ISO,
 * HIPAA, end-to-end encryption, zero retention, enterprise-grade security,
 * anonymity, or regulatory compliance — none of those is documented.
 */
export default function VxTrust() {
  return (
    <section
      id="trust-and-responsibility"
      className={`section ${styles.wrap}`}
      aria-labelledby="vx-trust-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Trust & Responsibility"
          title={
            <span id="vx-trust-heading">
              Organizations Should Understand How Their Information Is Used.
            </span>
          }
          divider
        />

        <Reveal delay={60} className={styles.intro}>
          <p className={`body ${styles.body}`}>
            VelaXity should communicate its data practices clearly, collect only
            what is necessary, and avoid vague claims about privacy, security, or
            artificial intelligence. What follows describes the platform as it is
            built today.
          </p>
        </Reveal>

        <dl className={styles.facts}>
          {trustFacts.map((fact, i) => (
            <Reveal key={fact.label} delay={(i % 2) * 60} className={styles.fact}>
              <dt className={styles.factLabel}>{fact.label}</dt>
              <dd className={styles.factBody}>{fact.body}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={100} className={styles.links}>
          <h3 className={styles.linksHeading}>Read the details</h3>
          <p className={`body-sm ${styles.linksNote}`}>
            The policies below cover this website. VelaXity publishes its own
            privacy policy, terms, refund, and cancellation documents within the
            application.
          </p>
          <div className={styles.linkRow}>
            <Button href="/privacy-policy" variant="outline">
              Privacy Policy
            </Button>
            <Button href="/terms-of-service" variant="outline">
              Terms of Service
            </Button>
            <Button href="/contact" variant="text">
              Contact &amp; support
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
