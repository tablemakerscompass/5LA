import Image from "next/image";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { sarahPrinciples, smAssets } from "@/config/the-sarah-method";
import styles from "./SmSarahRole.module.css";

/**
 * Section 7 — Aunt Sarah's role.
 *
 * Aunt Sarah is a character and a written voice. She is never described as a
 * therapist, counselor, pastor, doctor, or licensed professional.
 */
export default function SmSarahRole() {
  return (
    <section
      id="aunt-sarahs-role"
      className={`section ${styles.wrap}`}
      aria-labelledby="sm-role-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <p className="eyebrow">The Voice Within the Experience</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="sm-role-heading" className={`section-heading ${styles.heading}`}>
              Aunt Sarah Does Not Give Women Their Truth. She Makes Room for Them
              to Hear It.
            </h2>
            <p className={`body ${styles.body}`}>
              Aunt Sarah is the welcoming voice connecting the platform to the
              emotional world of Aunt Sarah’s Girls.
            </p>
            <p className={`body ${styles.body}`}>
              She does not diagnose, prescribe, preach, or pretend to replace
              professional care. Her role is to welcome, ask thoughtful
              questions, encourage honesty, and remind women that they deserve
              room to examine what they are carrying.
            </p>
          </Reveal>

          <Reveal delay={120} className={styles.markWrap}>
            <Image
              src={smAssets.monogram}
              alt="The Sarah Method monogram — a crowned letter S holding a woman’s profile, finished with a pen nib."
              width={512}
              height={512}
              loading="lazy"
              sizes="(min-width: 900px) 320px, 220px"
              className={styles.mark}
            />
          </Reveal>
        </div>

        <Reveal delay={80} className={styles.principlesBlock}>
          <h3 className={styles.subhead}>How she holds the room</h3>
          <dl className={styles.principles}>
            {sarahPrinciples.map((principle) => (
              <div key={principle.title} className={styles.principle}>
                <dt className={styles.term}>{principle.title}</dt>
                <dd className={styles.desc}>{principle.body}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
