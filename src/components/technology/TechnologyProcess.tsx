import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./TechnologyProcess.module.css";

const stages = [
  {
    n: "01",
    title: "Understand",
    body: "Clarify the work, the people, the pain points, the decisions, and the experience the technology must support.",
  },
  {
    n: "02",
    title: "Map",
    body: "Document the current workflow, information movement, responsibilities, delays, and duplication.",
  },
  {
    n: "03",
    title: "Prioritize",
    body: "Identify which problems should be solved first and which features are actually necessary.",
  },
  {
    n: "04",
    title: "Design",
    body: "Develop the system, workflow, automation, platform, or implementation plan around the real need.",
  },
  {
    n: "05",
    title: "Introduce",
    body: "Prepare leaders and employees through communication, documentation, training, and adoption support.",
  },
  {
    n: "06",
    title: "Improve",
    body: "Review use, performance, feedback, and new needs so the system continues to serve the organization.",
  },
];

/** Section 7 — the six-stage approach on a continuous editorial rail. */
export default function TechnologyProcess() {
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
              We Begin With the Workflow, Not the Software.
            </h2>
          </Reveal>
        </div>

        <ol className={styles.stages}>
          {stages.map((stage, i) => (
            <Reveal as="li" key={stage.n} delay={(i % 2) * 70} className={styles.stage}>
              <span className={styles.n} aria-hidden="true">
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
