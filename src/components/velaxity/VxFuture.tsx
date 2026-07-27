import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { futureDirections } from "@/config/velaxity";
import styles from "./VxFuture.module.css";

/**
 * Section 15 — Future of VelaXity.
 *
 * Everything here is unbuilt. The qualifier names integrations, personalization,
 * mobile, and predictive signals explicitly, since those are the easiest for a
 * reader to mistake for shipped capability.
 */
export default function VxFuture() {
  const groups = Array.from(new Set(futureDirections.map((d) => d.group)));

  return (
    <section
      id="the-future"
      className={`section ${styles.wrap}`}
      aria-labelledby="vx-future-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Where the Platform May Grow"
          title={
            <span id="vx-future-heading">
              Building Toward a More Connected Executive Operating System.
            </span>
          }
          lead="The long-term vision for VelaXity is to become a premier executive operating environment for hospitality, experience-driven organizations, and leadership teams seeking more connected organizational intelligence."
          divider
        />

        <Reveal delay={60}>
          <p className={styles.qualifier}>
            None of the following is available today. Expanded integrations, AI
            personalization, mobile access, and predictive signals are directions
            under consideration — not features of the current platform.
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
