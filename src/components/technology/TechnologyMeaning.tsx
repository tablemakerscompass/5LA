import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./TechnologyMeaning.module.css";

/** Section 2 — large editorial statement. No cards, no icons. */
export default function TechnologyMeaning() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="meaning-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.head}>
            <p className="eyebrow">Technology With Purpose</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="meaning-heading" className={`section-heading ${styles.heading}`}>
              The Best Technology Supports the Work Without Becoming the Work.
            </h2>
          </Reveal>

          <Reveal delay={120} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              Organizations often adopt technology because they feel pressure to
              modernize, automate, or use artificial intelligence. But a new
              tool does not solve a problem when the process is unclear, the
              people are unprepared, or the system does not reflect how the
              organization actually operates.
            </p>
            <p className={`body ${styles.paragraph}`}>
              Technology Experience begins with the work, the people, and the
              decisions the organization needs to support.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <figure className={styles.pullQuote}>
            <blockquote className={styles.quote}>
              Technology should reduce friction, strengthen judgment, and create
              clarity—not add another layer of confusion.
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
