import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingProcess.module.css";

const stages = [
  {
    n: "01",
    title: "Understand",
    body: "Clarify the audience, challenge, operating environment, expectations, and desired experience.",
  },
  {
    n: "02",
    title: "Assess",
    body: "Identify knowledge gaps, skill gaps, behavioral gaps, leadership gaps, and barriers affecting performance.",
  },
  {
    n: "03",
    title: "Design",
    body: "Build the learning structure, content, exercises, scenarios, resources, and reinforcement tools.",
  },
  {
    n: "04",
    title: "Facilitate",
    body: "Deliver the experience through clear instruction, discussion, reflection, practice, and application.",
  },
  {
    n: "05",
    title: "Reinforce",
    body: "Equip managers and participants with tools, reminders, coaching prompts, and follow-up expectations.",
  },
  {
    n: "06",
    title: "Evaluate",
    body: "Review participation, understanding, application, feedback, and areas requiring continued development.",
  },
];

/** Section 9 — the six-stage approach as full-width editorial rows. */
export default function TrainingProcess() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="process-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Our Approach</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="process-heading" className={`section-heading ${styles.heading}`}>
              We Build Training Around the Behavior and Experience That Must
              Change.
            </h2>
          </Reveal>
        </div>

        <ol className={styles.stages}>
          {stages.map((stage, i) => (
            <Reveal as="li" key={stage.n} delay={(i % 3) * 70} className={styles.stage}>
              <span className={`numeral ${styles.n}`} aria-hidden="true">
                {stage.n}
              </span>
              <div className={styles.text}>
                <h3 className={`subheading ${styles.title}`}>{stage.title}</h3>
                <p className={`body ${styles.body}`}>{stage.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
