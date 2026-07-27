import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { futureDirections } from "@/config/academy";
import styles from "./AcFuture.module.css";

/**
 * Section 17 — Where the Academy may grow.
 *
 * Everything here is unbuilt or unapproved. The qualifier names certificates
 * and certification explicitly, since those are the easiest to mistake for an
 * accreditation claim.
 */
export default function AcFuture() {
  const groups = Array.from(new Set(futureDirections.map((d) => d.group)));

  return (
    <section
      id="the-future"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="ac-future-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Where the Academy May Grow"
          title={
            <span id="ac-future-heading">
              Building a Hospitality and Leadership Academy Known for Practical
              Excellence.
            </span>
          }
          lead="The long-term vision for The 5LA Academy is to become a premier learning and workforce-development platform serving hospitality professionals, managers, leaders, organizations, and experience builders."
          divider
        />

        <Reveal delay={60}>
          <p className={styles.qualifier}>
            None of the following is available today. Certificates and
            certification programs listed here are future possibilities under
            consideration — the Academy holds no accreditation and awards no
            recognized credential.
          </p>
        </Reveal>

        <div className={styles.groups}>
          {groups.map((group, i) => (
            <Reveal key={group} delay={i * 80} className={styles.group}>
              <h3 className={styles.groupLabel}>{group}</h3>
              <ul className={styles.items}>
                {futureDirections
                  .filter((d) => d.group === group)
                  .map((d) => (
                    <li key={d.title} className={styles.item}>
                      {d.title}
                    </li>
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
