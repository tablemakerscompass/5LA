import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbsWhy.module.css";

/** Section 2 — why the Society exists. Spacious editorial, no cards or icons. */
export default function GbsWhy() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="why-heading">
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.head}>
            <p className="eyebrow">Why We Exist</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="why-heading" className={`section-heading ${styles.heading}`}>
              Some Stories Must Be Preserved Before They Are Lost.
            </h2>
          </Reveal>

          <Reveal delay={120} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              Families and communities carry wisdom, sacrifice, traditions,
              truths, and memories that are often passed down informally—or not
              passed down at all.
            </p>
            <p className={`body ${styles.paragraph}`}>
              The Georgia B. Society was created to make room for those stories.
            </p>
            <p className={`body ${styles.paragraph}`}>
              Through gatherings, conversations, documentation, cultural
              experiences, and future community initiatives, the Society seeks
              to preserve what matters, honor the people who carried it, and
              help future generations understand what came before them.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <figure className={styles.pullQuote}>
            <blockquote className={styles.quote}>
              What is remembered can be carried. What is shared can continue.
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
