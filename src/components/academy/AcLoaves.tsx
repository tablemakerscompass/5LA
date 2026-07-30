import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { loaves } from "@/config/academy";
import styles from "./AcLoaves.module.css";

/**
 * Section 5 — The LOAVES framework, in Academy terms.
 *
 * The same six approved values used across 5LA, defined here for learners
 * rather than for the organization. Editorial letterforms, no icon circles.
 */
export default function AcLoaves() {
  return (
    <section
      id="loaves-framework"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="ac-loaves-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Our Development Foundation</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="ac-loaves-heading" className={`section-heading ${styles.heading}`}>
              Leadership. Ownership. Alignment. Vision. Excellence. Service.
            </h2>
          </Reveal>
          <Reveal delay={100} className={styles.intro}>
            <p className={`body ${styles.body}`}>
              The LOAVES framework is the values and development system guiding
              how The 5LA Academy prepares leaders, managers, employees,
              professionals, and experience builders.
            </p>
          </Reveal>
        </div>

        <ol className={styles.list}>
          {loaves.map((value, i) => (
            <Reveal
              key={value.letter}
              as="li"
              delay={(i % 3) * 70}
              className={styles.item}
            >
              <span className={styles.letter} aria-hidden="true">
                {value.letter}
              </span>
              <div className={styles.itemBody}>
                <h3 className={styles.word}>{value.word}</h3>
                <p className={styles.def}>{value.def}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={80}>
          <p className={`caption ${styles.note}`}>
            LOAVES may be taught as a complete learning experience or integrated
            into leadership, hospitality, culture, service, and
            workforce-development programs.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
