import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingFormats.module.css";

const formats = [
  {
    title: "Live workshops",
    body: "Facilitated in-person or virtual sessions built around interaction, reflection, practice, and discussion.",
  },
  {
    title: "Leadership intensives",
    body: "Focused development experiences for executives, managers, supervisors, or emerging leaders.",
  },
  {
    title: "Organizational programs",
    body: "Multi-session learning pathways designed around a company’s goals, standards, and audience.",
  },
  {
    title: "Digital learning",
    body: "Structured learning modules, guided resources, reflection activities, and knowledge reinforcement.",
  },
  {
    title: "Train-the-trainer programs",
    body: "Preparation for internal facilitators, managers, or leaders responsible for continuing the learning.",
  },
  {
    title: "Team development experiences",
    body: "Customized sessions supporting communication, culture, accountability, alignment, and collaboration.",
  },
  {
    title: "Learning resources",
    body: "Workbooks, facilitator guides, manager tools, discussion guides, checklists, and reinforcement materials.",
  },
];

/** Section 10 — the delivery formats available. */
export default function TrainingFormats() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="formats-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="How Learning May Be Delivered"
          title={
            <span id="formats-heading">
              Different Audiences Require Different Learning Environments.
            </span>
          }
          divider
        />

        <dl className={styles.list}>
          {formats.map((format, i) => (
            <Reveal
              key={format.title}
              delay={(i % 2) * 70}
              className={styles.row}
            >
              <dt className={styles.title}>{format.title}</dt>
              <dd className={styles.body}>{format.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
