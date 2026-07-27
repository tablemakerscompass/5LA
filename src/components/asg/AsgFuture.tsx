import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { futureDirections } from "@/config/aunt-sarahs-girls";
import styles from "./AsgFuture.module.css";

/**
 * Section 12 — The future of the property.
 *
 * Everything in this section is an unlaunched possibility, and is labelled as
 * such once at the top of the list rather than repeated on every line.
 */
export default function AsgFuture() {
  const groups = Array.from(new Set(futureDirections.map((d) => d.group)));

  return (
    <section
      id="the-future"
      className={`section ${styles.wrap}`}
      aria-labelledby="asg-future-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="The World Continues"
          title={
            <span id="asg-future-heading">
              The Story Was Never Meant to Live in Only One Format.
            </span>
          }
          lead="The long-term vision for Aunt Sarah’s Girls is to grow as a literary, theatrical, digital, educational, community, and cultural property."
          divider
        />

        <Reveal delay={60}>
          <p className={styles.qualifier}>
            Everything below is a future possibility under consideration. None of
            it is launched, scheduled, secured, or available, and no adaptation
            or partnership has been agreed.
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
