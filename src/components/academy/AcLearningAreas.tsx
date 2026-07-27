import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { learningAreas } from "@/config/academy";
import styles from "./AcLearningAreas.module.css";

/**
 * Section 4 — The eight Academy learning areas.
 *
 * Full-width editorial blocks with large numerals, all content visible: no
 * accordion, no tabs, no hover-revealed topics. Everything a reader needs is in
 * the document at load, which keeps it usable by keyboard, touch, and screen
 * reader alike — and avoids eight identical icon cards.
 */
export default function AcLearningAreas() {
  return (
    <section
      id="learning-areas"
      className={`section ${styles.wrap}`}
      aria-labelledby="ac-areas-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="What We Teach"
          title={
            <span id="ac-areas-heading">
              Learning Built Around Leadership, Service, Culture, and the Real
              Work.
            </span>
          }
          divider
        />

        <div className={styles.list}>
          {learningAreas.map((area, i) => (
            <Reveal
              key={area.number}
              delay={(i % 2) * 60}
              className={styles.area}
            >
              <article
                className={styles.areaInner}
                aria-labelledby={`area-${area.number}-heading`}
              >
                <div className={styles.head}>
                  <span className={styles.number} aria-hidden="true">
                    {area.number}
                  </span>
                  <h3
                    id={`area-${area.number}-heading`}
                    className={styles.title}
                  >
                    {area.title}
                  </h3>
                </div>

                <p className={styles.statement}>{area.statement}</p>

                <ul className={styles.topics}>
                  {area.topics.map((topic) => (
                    <li key={topic} className={styles.topic}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
