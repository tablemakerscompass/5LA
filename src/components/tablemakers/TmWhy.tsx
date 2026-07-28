import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./TmWhy.module.css";

/**
 * Section 4 — Why Tablemakers exists.
 * Framed as professional community, never as therapy or emotional treatment.
 */
export default function TmWhy() {
  return (
    <section
      id="why-tablemakers"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="tm-why-heading"
    >
      <Container narrow>
        <p className="eyebrow">Why We Created the Platform</p>
        <hr className={`rule ${styles.rule}`} />
        <h2 id="tm-why-heading" className={`section-heading ${styles.heading}`}>
          The People Carrying the Experience Need a Place to Be Developed Too.
        </h2>

        <Reveal delay={80} className={styles.copy}>
          <p className={`body ${styles.body}`}>
            Leaders, managers, founders, hospitality professionals, and
            experience builders are often responsible for creating environments
            where everyone else can succeed.
          </p>
          <p className={`body ${styles.body}`}>
            They carry teams, standards, culture, operations, service,
            communication, expectations, and the emotional weight of
            leadership—often without enough space to reflect, learn, exchange
            ideas, or be supported by people who understand the work.
          </p>
          <p className={`body ${styles.body}`}>
            Tablemakers was created to provide that space.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <figure className={styles.quoteWrap}>
            <blockquote className={`quote ${styles.quote}`}>
              The people preparing the table should not have to carry the
              responsibility alone.
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
