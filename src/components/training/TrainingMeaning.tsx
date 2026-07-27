import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingMeaning.module.css";

/** Section 2 — large editorial statement. No cards, no icons. */
export default function TrainingMeaning() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="meaning-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.head}>
            <p className="eyebrow">Learning That Changes the Experience</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="meaning-heading" className={`section-heading ${styles.heading}`}>
              A Standard Cannot Be Delivered Until It Has Been Understood.
            </h2>
          </Reveal>

          <Reveal delay={120} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              Organizations often expect employees and leaders to create
              excellent experiences without clearly teaching what excellence
              looks like, why it matters, or how it should be delivered.
            </p>
            <p className={`body ${styles.paragraph}`}>
              Training Experience connects expectations with practical
              knowledge, behavior, tools, accountability, and ongoing support.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <figure className={styles.pullQuote}>
            <blockquote className={styles.quote}>
              People cannot consistently deliver a standard they have never been
              taught, shown, supported, and equipped to carry.
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
