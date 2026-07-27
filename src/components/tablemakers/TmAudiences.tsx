import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { audiences } from "@/config/tablemakers";
import styles from "./TmAudiences.module.css";

/** Section 5 — Who the platform is for. */
export default function TmAudiences() {
  return (
    <section
      id="the-community"
      className={`section ${styles.wrap}`}
      aria-labelledby="tm-audiences-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="The Tablemakers Community"
          title={
            <span id="tm-audiences-heading">
              For Professionals Responsible for More Than Their Own Performance.
            </span>
          }
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
