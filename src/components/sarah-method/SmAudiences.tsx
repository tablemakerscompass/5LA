import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { audiences } from "@/config/the-sarah-method";
import styles from "./SmAudiences.module.css";

/**
 * Section 11 — Who the platform may serve.
 *
 * Described by situation and interest, never by diagnosis, and never as though
 * the platform suits everyone.
 */
export default function SmAudiences() {
  return (
    <section
      id="who-it-serves"
      className={`section ${styles.wrap}`}
      aria-labelledby="sm-audiences-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Who May Find Value Here"
          title={
            <span id="sm-audiences-heading">
              For Women Ready to Pause, Tell the Truth, and Listen More Closely
              to Their Own Lives.
            </span>
          }
          lead="It will not be the right fit for everyone, and it is not meant to be."
          divider
        />

        <ul className={styles.list}>
          {audiences.map((audience, i) => (
            <Reveal
              key={audience.title}
              as="li"
              delay={(i % 3) * 70}
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
