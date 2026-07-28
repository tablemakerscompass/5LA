import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { audiences } from "@/config/academy";
import styles from "./AcAudiences.module.css";

/** Section 3 — Who the Academy develops. Editorial panels, not persona cards. */
export default function AcAudiences() {
  return (
    <section
      id="who-we-develop"
      className={`section ${styles.wrap}`}
      aria-labelledby="ac-audiences-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Built for the People Behind the Experience"
          title={
            <span id="ac-audiences-heading">
              Different Roles Require Different Development.
            </span>
          }
          divider
        />

        <ol className={styles.list}>
          {audiences.map((audience, i) => (
            <Reveal
              key={audience.title}
              as="li"
              delay={(i % 2) * 60}
              className={styles.item}
            >
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.itemBody}>
                <h3 className={styles.title}>{audience.title}</h3>
                <p className={styles.body}>{audience.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
