import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { futureDirections } from "@/config/tablemakers";
import styles from "./TmFuture.module.css";

/**
 * Section 16 — Where the platform may grow.
 *
 * Everything here is unbuilt. The qualifier names memberships, events,
 * mentorship, and recognition explicitly, since those are the easiest for a
 * reader to mistake for something they could sign up for.
 */
export default function TmFuture() {
  const groups = Array.from(new Set(futureDirections.map((d) => d.group)));

  return (
    <section
      id="the-future"
      className={`section ${styles.wrap}`}
      aria-labelledby="tm-future-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Where the Platform May Grow"
          title={
            <span id="tm-future-heading">
              Building a Professional Community Known for Leadership,
              Hospitality, Standards, and Meaningful Experience.
            </span>
          }
          lead="The long-term vision for Tablemakers is to become a trusted community and thought-leadership platform for professionals responsible for building teams, cultures, operations, service, and experiences."
          divider
        />

        <Reveal delay={60}>
          <p className={styles.qualifier}>
            None of the following exists yet. There is no membership programme,
            no paid tier, no scheduled conference, no active mentorship, and no
            recognition or awards programme — these are directions under
            consideration.
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
