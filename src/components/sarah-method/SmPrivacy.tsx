import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { privacyFacts, smBrand } from "@/config/the-sarah-method";
import styles from "./SmPrivacy.module.css";

/**
 * Section 13 — Privacy, trust, and responsible design.
 *
 * Every statement here was read out of the application's source and its own
 * Safety & Privacy screen. Nothing is softened and nothing is inflated: the
 * final entry states the limits as plainly as the capabilities.
 *
 * BEFORE EDITING: re-verify against the application. Do not add a claim of
 * encryption, anonymity, HIPAA compliance, in-app deletion, or risk monitoring
 * unless it has been built and confirmed.
 */
export default function SmPrivacy() {
  return (
    <section
      id="privacy-and-trust"
      className={`section ${styles.wrap}`}
      aria-labelledby="sm-privacy-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Trust Matters"
          title={
            <span id="sm-privacy-heading">
              Women Should Understand What Happens to the Truths They Enter Into
              a Digital Space.
            </span>
          }
          divider
        />

        <Reveal delay={60} className={styles.intro}>
          <p className={`body ${styles.body}`}>
            The Sarah Method should communicate privacy practices clearly, avoid
            vague promises, and collect only the information necessary to support
            the experience.
          </p>
          <p className={`body ${styles.body}`}>
            Users should understand what is stored, how information is used, what
            controls are available, and where the limits of the platform begin.
          </p>
        </Reveal>

        <dl className={styles.facts}>
          {privacyFacts.map((fact, i) => (
            <Reveal key={fact.label} delay={(i % 2) * 60} className={styles.fact}>
              <dt className={styles.factLabel}>{fact.label}</dt>
              <dd className={styles.factBody}>{fact.body}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={100} className={styles.links}>
          <h3 className={styles.linksHeading}>Read the details</h3>
          <p className={`body-sm ${styles.linksNote}`}>
            The application publishes its own Privacy Policy and Terms of
            Service, and asks every user to agree to them before the first
            question. The policies below cover this website.
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
          <p className={`caption ${styles.appLink}`}>
            The application’s own policies are linked from{" "}
            <a
              href={smBrand.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.inlineLink}
            >
              thesarahmethod.com
              <span className={styles.externalMark} aria-hidden="true">
                ↗
              </span>
              <span className="visually-hidden">(opens in a new tab)</span>
            </a>
            , on the welcome screen and in Settings.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
