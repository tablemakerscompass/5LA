import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { futureDirections } from "@/config/the-sarah-method";
import styles from "./SmFuture.module.css";

/**
 * Section 14 — Where the experience may grow.
 *
 * Everything here is unbuilt. The qualifier is stated once, prominently, rather
 * than repeated on every line — and it explicitly covers the AI, voice, and
 * personalization ideas, which are the easiest to mistake for shipped features.
 */
export default function SmFuture() {
  const groups = Array.from(new Set(futureDirections.map((d) => d.group)));

  return (
    <section
      id="the-future"
      className={`section ${styles.wrap}`}
      aria-labelledby="sm-future-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Where the Experience May Grow"
          title={
            <span id="sm-future-heading">
              Building a Reflection Platform That Can Grow Without Losing Its
              Warmth.
            </span>
          }
          lead="The long-term vision for The Sarah Method is to become a trusted digital companion for women exploring truth, communication, identity, healing, family, and purpose."
          divider
        />

        <Reveal delay={60}>
          <p className={styles.qualifier}>
            None of the following is built yet. Voice experiences, personalized
            pathways, and any conversational or community feature are ideas under
            consideration — not part of the application today.
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
