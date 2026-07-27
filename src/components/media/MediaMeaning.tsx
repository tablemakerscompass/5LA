import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaMeaning.module.css";

/** Section 2 — large editorial statement. No cards, no icons. */
export default function MediaMeaning() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="meaning-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.head}>
            <p className="eyebrow">Story With Structure</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="meaning-heading" className={`section-heading ${styles.heading}`}>
              The Story Is What People Feel. The Structure Is What Allows It to
              Reach Them.
            </h2>
          </Reveal>

          <Reveal delay={120} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              Meaningful media does more than fill a page, screen, stage, or
              timeline. It gives people language for what they have lived,
              creates connection across communities, and transforms ideas into
              experiences audiences can remember and carry forward.
            </p>
            <p className={`body ${styles.paragraph}`}>
              Media Experience brings together story, production, audience,
              technology, operations, and delivery so the work can move from
              idea to sustainable property.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <figure className={styles.pullQuote}>
            <blockquote className={styles.quote}>
              A powerful story deserves more than attention. It deserves
              structure, stewardship, and room to grow.
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
