import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingAcademy.module.css";

const focusAreas = [
  "Hospitality foundations",
  "Leadership development",
  "Manager development",
  "Guest experience",
  "Workforce readiness",
  "Culture and standards",
  "Organizational learning",
  "The LOAVES framework",
  "Customized company training",
  "Professional-development resources",
];

/**
 * Section 7 — the 5LA Academy's place within the sector. Typographic while
 * final Academy assets are pending; no certification claims are made.
 */
export default function TrainingAcademy() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="academy-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">Built Within 5LA</p>
              <hr className={`rule ${styles.rule}`} />
              <h2
                id="academy-heading"
                className={`section-heading ${styles.heading}`}
              >
                The 5LA Academy: Training for People Who Build the Experience
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className={`body ${styles.paragraph}`}>
                The 5LA Academy transforms the agency’s real-world experience in
                hospitality, operations, leadership, culture, events, and
                workforce development into practical learning experiences for
                professionals and organizations.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className={styles.statement}>
                Academy offerings may include live facilitation, organizational
                workshops, digital learning, guided resources, customized
                training programs, and future certification pathways.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <Button href="/our-companies/5la-academy" variant="gold" size="lg">
                Explore The 5LA Academy
              </Button>
            </Reveal>
          </div>

          <Reveal delay={140} className={styles.aside}>
            <h3 className={styles.label}>Academy focus areas</h3>
            <ul className={styles.areas}>
              {focusAreas.map((area) => (
                <li key={area} className={styles.area}>
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
