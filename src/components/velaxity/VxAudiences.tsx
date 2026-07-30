import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { audiences } from "@/config/velaxity";
import styles from "./VxAudiences.module.css";

/** Section 7 — Who VelaXity is designed for. Not every industry. */
export default function VxAudiences() {
  return (
    <section
      id="who-its-for"
      className={`section ${styles.wrap}`}
      aria-labelledby="vx-audiences-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Built for Leadership"
          title={
            <span id="vx-audiences-heading">
              For Leaders Managing More Than a Single Task, Team, or Dashboard.
            </span>
          }
          lead="The platform is shaped around hospitality and experience-driven organizations. It is not built for every industry."
          divider
        />

        <ul className={styles.list}>
          {audiences.map((audience, i) => (
            <Reveal
              key={audience.title}
              as="li"
              delay={(i % 3) * 60}
              className={styles.item}
            >
              <h3 className={styles.title}>{audience.title}</h3>
              <p className={styles.body}>{audience.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
