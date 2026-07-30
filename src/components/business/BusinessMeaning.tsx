import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./BusinessMeaning.module.css";

/** Section 2 — large editorial statement. No cards, no icons. */
export default function BusinessMeaning() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="meaning-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.head}>
            <p className="eyebrow">Behind the Experience</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="meaning-heading" className={`section-heading ${styles.heading}`}>
              Strong Customer Experiences Depend on Strong Internal Systems.
            </h2>
          </Reveal>

          <Reveal delay={120} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              What customers see is only one part of the business. Behind every
              consistent experience are leaders making decisions, employees
              carrying the standard, systems guiding the work, and processes
              supporting delivery.
            </p>
            <p className={`body ${styles.paragraph}`}>
              Business Experience focuses on the internal foundation that makes
              the external promise possible.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <figure className={styles.pullQuote}>
            <blockquote className={styles.quote}>
              The experience people receive reflects the structure the
              organization has built.
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
