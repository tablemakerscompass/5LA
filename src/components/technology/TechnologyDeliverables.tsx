import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./TechnologyDeliverables.module.css";

const deliverables = [
  "AI-readiness assessment",
  "AI-use-case roadmap",
  "Workflow map",
  "Automation plan",
  "Digital-system strategy",
  "Executive dashboard",
  "Internal application",
  "Client portal",
  "Employee portal",
  "AI assistant",
  "Knowledge base",
  "Technology requirements document",
  "Feature-priority roadmap",
  "Prototype",
  "MVP",
  "Adoption and training plan",
  "Responsible-use guidelines",
  "Technology governance structure",
];

/** Section 8 — possible deliverables as a typographic inventory. */
export default function TechnologyDeliverables() {
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
              The Technology Solution Depends on the Work It Must Support.
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
            5LA does not recommend building a platform when a clearer process,
            smaller automation, or better use of an existing tool will solve the
            problem.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
