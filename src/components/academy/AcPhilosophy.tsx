import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { philosophy } from "@/config/academy";
import styles from "./AcPhilosophy.module.css";

/** Section 8 — How the Academy designs learning. Editorial, no icons. */
export default function AcPhilosophy() {
  return (
    <section
      id="training-philosophy"
      className={`section ${styles.wrap}`}
      aria-labelledby="ac-philosophy-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Our Training Philosophy"
          title={
            <span id="ac-philosophy-heading">
              Learning Should Be Relevant, Practical, Interactive, Reinforced,
              and Connected to the Work.
            </span>
          }
          divider
        />

        <dl className={styles.list}>
          {philosophy.map((principle, i) => (
            <Reveal
              key={principle.title}
              delay={(i % 3) * 70}
              className={styles.item}
            >
              <dt className={styles.term}>{principle.title}</dt>
              <dd className={styles.desc}>{principle.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
