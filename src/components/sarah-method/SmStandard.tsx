import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { experienceStandard } from "@/config/the-sarah-method";
import styles from "./SmStandard.module.css";

/** Section 9 — The experience standard. Editorial typography, no icon grid. */
export default function SmStandard() {
  return (
    <section
      id="experience-standard"
      className={`section ${styles.wrap}`}
      aria-labelledby="sm-standard-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="How the Space Should Feel"
          title={
            <span id="sm-standard-heading">
              Warm Enough for Honesty. Structured Enough for Reflection. Gentle
              Enough to Return To.
            </span>
          }
          divider
        />

        <dl className={styles.list}>
          {experienceStandard.map((standard, i) => (
            <Reveal key={standard.title} delay={(i % 3) * 70} className={styles.item}>
              <dt className={styles.term}>{standard.title}</dt>
              <dd className={styles.desc}>{standard.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
