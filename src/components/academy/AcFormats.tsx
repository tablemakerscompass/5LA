import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { formats } from "@/config/academy";
import styles from "./AcFormats.module.css";

/**
 * Section 9 — Learning formats.
 * No durations, schedules, or delivery promises appear — none is approved.
 */
export default function AcFormats() {
  return (
    <section
      id="learning-formats"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="ac-formats-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="How Learning May Be Delivered"
          title={
            <span id="ac-formats-heading">
              Different Audiences Need Different Learning Environments.
            </span>
          }
          lead="Format is chosen with the organization. Session length, schedule, and structure are agreed during planning rather than set in advance."
          divider
        />

        <ul className={styles.list}>
          {formats.map((format, i) => (
            <Reveal
              key={format.title}
              as="li"
              delay={(i % 3) * 60}
              className={styles.item}
            >
              <h3 className={styles.title}>{format.title}</h3>
              <p className={styles.body}>{format.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
