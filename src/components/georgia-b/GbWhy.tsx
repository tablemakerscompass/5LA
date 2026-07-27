import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbWhy.module.css";

/** Section 2 — why the Media Group exists. Editorial, no cards or icons. */
export default function GbWhy() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="why-heading">
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.head}>
            <p className="eyebrow">Why We Exist</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="why-heading" className={`section-heading ${styles.heading}`}>
              Meaningful Stories Need Both Creative Freedom and Strong
              Structure.
            </h2>
          </Reveal>

          <Reveal delay={120} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              Powerful stories often begin with a voice, a memory, a question, a
              character, or an experience that refuses to be forgotten. But
              moving that story from idea to audience requires more than
              creativity alone.
            </p>
            <p className={`body ${styles.paragraph}`}>
              It requires development, organization, production, stewardship,
              business structure, technology, partnerships, and a clear
              understanding of the people the work is intended to reach.
            </p>
            <p className={`body ${styles.paragraph}`}>
              The Georgia B. Media Group was created to provide that home.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <figure className={styles.pullQuote}>
            <blockquote className={styles.quote}>
              The story deserves to be felt. The property deserves to be built.
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
