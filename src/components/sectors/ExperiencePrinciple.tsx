import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./ExperiencePrinciple.module.css";

/**
 * Section 2 — the principle behind the four sectors. Spacious editorial
 * layout: no cards, no icons.
 */
export default function ExperiencePrinciple() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="principle-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.head}>
            <p className="eyebrow">How Experience Is Built</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="principle-heading" className={`section-heading ${styles.heading}`}>
              What People Experience Is the Final Result of Everything Working
              Together.
            </h2>
          </Reveal>

          <Reveal delay={120} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              A customer may only see the service. An employee may only see the
              process. An audience may only see the final story. But every
              experience is shaped by decisions, systems, people, tools,
              environments, standards, and communication working behind the
              scenes.
            </p>
            <p className={`body ${styles.paragraph}`}>
              5LA connects those elements so the visible experience is supported
              by a stronger foundation.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <figure className={styles.pullQuote}>
            <blockquote className={styles.quote}>
              The moment people remember is built through work they may never
              see.
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
