import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaDeliverables.module.css";

const deliverables = [
  "Creative brief",
  "Story-development roadmap",
  "Brand narrative",
  "Publishing plan",
  "Production plan",
  "Run of show",
  "Script-development structure",
  "Content strategy",
  "Editorial calendar",
  "Audience-development plan",
  "Launch campaign",
  "Discussion guide",
  "Companion workbook",
  "Live-experience concept",
  "Community-conversation guide",
  "Property-development roadmap",
  "Brand architecture",
  "Digital-platform concept",
  "Partnership deck",
  "Adaptation strategy",
];

/** Section 11 — possible deliverables as a ruled index. */
export default function MediaDeliverables() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="deliverables-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Possible Deliverables"
          title={
            <span id="deliverables-heading">
              The Deliverable Depends on the Story, Audience, and Experience
              Being Built.
            </span>
          }
          divider
        />

        <Reveal delay={100}>
          <ul className={styles.list}>
            {deliverables.map((item) => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
