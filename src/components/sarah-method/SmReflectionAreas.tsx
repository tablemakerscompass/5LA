import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { reflectionAreas } from "@/config/the-sarah-method";
import styles from "./SmReflectionAreas.module.css";

/**
 * Section 5 — Areas of reflection.
 *
 * A definition list rather than an accordion: every question is visible to
 * every user, with no hover-only or click-only content to discover.
 */
export default function SmReflectionAreas() {
  return (
    <section
      id="reflection-areas"
      className={`section ${styles.wrap}`}
      aria-labelledby="sm-areas-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Areas of Reflection"
          title={
            <span id="sm-areas-heading">
              The Questions Are Personal. The Themes Are Often Shared.
            </span>
          }
          divider
        />

        <dl className={styles.list}>
          {reflectionAreas.map((area, i) => (
            <Reveal
              key={area.title}
              delay={(i % 2) * 60}
              className={styles.item}
            >
              <dt className={styles.term}>{area.title}</dt>
              <dd className={styles.question}>{area.question}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
