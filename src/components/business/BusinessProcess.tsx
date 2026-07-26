import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./BusinessProcess.module.css";

const stages = [
  {
    n: "01",
    title: "Listen",
    body: "Understand the vision, the challenges, the people involved, and the experience the organization wants to create.",
  },
  {
    n: "02",
    title: "Observe",
    body: "Examine how work currently happens across systems, leadership, communication, service, and employee behavior.",
  },
  {
    n: "03",
    title: "Identify",
    body: "Clarify where the experience breaks down, where expectations are unclear, and where systems do not support the work.",
  },
  {
    n: "04",
    title: "Design",
    body: "Develop practical standards, processes, tools, documentation, or structures tailored to the organization.",
  },
  {
    n: "05",
    title: "Implement",
    body: "Help introduce the solution through communication, training, leadership support, and project management.",
  },
  {
    n: "06",
    title: "Sustain",
    body: "Establish ownership, accountability, review processes, and operating rhythms that help the work continue.",
  },
];

/** Section 5 — the six-stage approach, set as an editorial ladder. */
export default function BusinessProcess() {
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
              We Do Not Begin With a Template. We Begin With How the Business
              Actually Works.
            </h2>
          </Reveal>
        </div>

        <ol className={styles.stages}>
          {stages.map((stage, i) => (
            <Reveal as="li" key={stage.n} delay={(i % 3) * 80} className={styles.stage}>
              <span className={styles.n} aria-hidden="true">
                {stage.n}
              </span>
              <h3 className={`subheading ${styles.title}`}>{stage.title}</h3>
              <p className={`body ${styles.body}`}>{stage.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
