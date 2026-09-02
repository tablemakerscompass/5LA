import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbsAuntSarahs.module.css";

/**
 * Section 8 — the relationship to Aunt Sarah's Girls.
 *
 * The two brands are kept visually and structurally separate: Aunt Sarah's
 * Girls is referenced through its own wordmark panel rather than merged into
 * the Society's identity. No approved Aunt Sarah's Girls imagery exists yet.
 */
export default function GbsAuntSarahs() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="aunt-sarahs-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">Story to Community</p>
              <hr className={`rule ${styles.rule}`} />
              <h2
                id="aunt-sarahs-heading"
                className={`section-heading ${styles.heading}`}
              >
                Aunt Sarah’s Girls Opens Conversations the Society Can Help
                Communities Continue.
              </h2>
            </Reveal>

            <Reveal delay={120} className={styles.copy}>
              <p className={`body ${styles.paragraph}`}>
                Aunt Sarah’s Girls explores truth, family, womanhood, secrets,
                survival, healing, and generational legacy through literary and
                theatrical storytelling.
              </p>
              <p className={`body ${styles.paragraph}`}>
                The Georgia B. Society may extend those themes through community
                gatherings, facilitated conversations, family-story experiences,
                women-focused programs, and legacy-centered resources.
              </p>
              <p className={styles.distinction}>
                Aunt Sarah’s Girls remains an original media property. The
                Society remains a separate community and legacy initiative.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <Button
                href="/aunt-sarahs-girls"
                variant="gold"
                size="lg"
              >
                Explore Aunt Sarah’s Girls
              </Button>
            </Reveal>
          </div>

          <Reveal delay={140} className={styles.figure}>
            <div className={styles.mark}>
              <span className={styles.markLabel}>Original media property</span>
              <span className={styles.wordmark}>Aunt Sarah’s Girls</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
