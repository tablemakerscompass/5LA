import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingDeliverables.module.css";

const deliverables = [
  "Training-needs assessment",
  "Leadership workshop",
  "Manager-development program",
  "Hospitality curriculum",
  "New-hire orientation",
  "Service-standard training",
  "Culture workshop",
  "Facilitator guide",
  "Participant workbook",
  "Digital learning module",
  "Learning pathway",
  "Training calendar",
  "Manager reinforcement toolkit",
  "Coaching prompts",
  "Knowledge checks",
  "Evaluation plan",
  "Train-the-trainer experience",
];

/** Section 11 — possible deliverables as a ruled three-column index. */
export default function TrainingDeliverables() {
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
              The Training Solution Is Built Around the Need.
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

        <Reveal delay={140}>
          <p className={styles.statement}>
            5LA does not force every organization into the same course,
            curriculum, or delivery method.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
