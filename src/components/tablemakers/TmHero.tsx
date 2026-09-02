import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import TmImageFrame from "./TmImageFrame";
import { tmAssets, tmBrand } from "@/config/tablemakers";
import styles from "./TmHero.module.css";

/**
 * Section 1 — Page hero.
 *
 * WORDMARK: Tablemakers has no approved logo. Per brand direction this is a
 * refined text-based wordmark, labelled as a temporary treatment. No symbol is
 * invented, and the official 5LA logo is untouched.
 *
 * The secondary CTA is "Connect With Tablemakers" pointing at Work With Us —
 * the only engagement destination that genuinely exists. There is no Collective
 * link, no publication, and no signup to point at yet.
 */
export default function TmHero() {
  return (
    <header className={styles.hero} aria-labelledby="tm-hero-heading">
      <Container className={styles.container}>
        <Breadcrumbs
          items={[
            { label: tmBrand.name },
          ]}
          className={styles.crumbs}
        />

        <div className={styles.inner}>
          <div className={styles.content}>
            <Reveal className={styles.lockup}>
              <span className={styles.wordmark}>Tablemakers</span>
              <span className={styles.wordmarkNote}>
                Temporary wordmark treatment — awaiting an approved Tablemakers mark
              </span>
            </Reveal>

            <Reveal delay={60}>
              <p className={`eyebrow ${styles.eyebrow}`}>
                A Professional Community &amp; Thought-Leadership Platform by 5LA
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 id="tm-hero-heading" className={`hero-headline ${styles.headline}`}>
                For the People Building the Environment, Carrying the Standard,
                and <em className={styles.accent}>Making Room for Others.</em>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className={`lead ${styles.lead}`}>
                Tablemakers is a professional community for leaders, managers,
                founders, hospitality professionals, operations professionals,
                and experience builders creating stronger teams, cultures,
                businesses, and environments.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className={styles.actions}>
                <Button href="#what-is-a-tablemaker" variant="primary" size="lg">
                  Discover What It Means to Be a Tablemaker
                </Button>
                <Button href={tmBrand.connectPath} variant="outline" size="lg">
                  Connect With Tablemakers
                </Button>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className={styles.descriptor}>
                Leadership · Hospitality · Culture · Community
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className={styles.figure}>
            <TmImageFrame
              src={tmAssets.hero}
              alt="Leaders and hospitality professionals in conversation around a long table."
              placeholderLabel="A roundtable of professionals in conversation"
              placeholderNote="Asset required: a long table prepared for discussion, diverse leaders mid-conversation, notebooks and warm light — not a dining scene"
              aspect="4/3"
              priority
            />
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
