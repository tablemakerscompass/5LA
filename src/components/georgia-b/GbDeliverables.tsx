import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbDeliverables.module.css";

const deliverables = [
  "Story-development roadmap",
  "Manuscript-development plan",
  "Publishing strategy",
  "Production plan",
  "Creative brief",
  "Stage-production structure",
  "Run of show",
  "Visual-storytelling concept",
  "Audience-development plan",
  "Launch campaign",
  "Discussion guide",
  "Companion journal",
  "Book-club resource",
  "Community-conversation guide",
  "Original-property roadmap",
  "Brand architecture",
  "Adaptation pathway",
  "Partnership deck",
  "Live-experience concept",
  "Content ecosystem",
];

/** Section 11 — possible creative deliverables. */
export default function GbDeliverables() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="gb-deliverables-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Possible Creative Deliverables"
          title={
            <span id="gb-deliverables-heading">
              The Deliverable Depends on the Story and the Experience It Is
              Meant to Create.
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
