import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { academyRelationship, tmBrand } from "@/config/tablemakers";
import styles from "./TmAcademy.module.css";

/**
 * Section 10 — Tablemakers and The 5LA Academy.
 *
 * The two are described as connected but separate. No automatic enrollment,
 * credential, or certification is implied through Tablemakers.
 */
export default function TmAcademy() {
  return (
    <section
      id="academy-connection"
      className={`section ${styles.wrap}`}
      aria-labelledby="tm-academy-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <Reveal>
              <p className="eyebrow">Learning to Community</p>
              <hr className={`rule ${styles.rule}`} />
              <h2 id="tm-academy-heading" className={`section-heading ${styles.heading}`}>
                The Academy Develops the Skill. Tablemakers Continues the
                Conversation.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className={`body ${styles.body}`}>
                The 5LA Academy and Tablemakers serve connected but different
                purposes.
              </p>
              <p className={`body ${styles.body}`}>
                The Academy provides structured learning in hospitality,
                leadership, management, workforce development, culture, and the
                LOAVES framework.
              </p>
              <p className={`body ${styles.body}`}>
                Tablemakers extends that development through thought leadership,
                professional conversation, community, resources, gatherings, and
                continued reflection.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.message}>{tmBrand.academyMessage}</p>
            </Reveal>
            <Reveal delay={180}>
              <Button
                href="/our-companies/5la-academy"
                variant="primary"
                size="lg"
                className={styles.cta}
              >
                Explore The 5LA Academy
              </Button>
            </Reveal>
          </div>

          <Reveal delay={120} className={styles.panel}>
            <h3 className={styles.subhead}>Where the two meet</h3>
            <ul className={styles.list}>
              {academyRelationship.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
            <p className={`caption ${styles.note}`}>
              Taking part in Tablemakers does not enroll anyone in the Academy or
              award any credential. They are separate, and joining one is not
              joining the other.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
