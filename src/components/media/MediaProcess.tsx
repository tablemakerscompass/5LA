import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaProcess.module.css";

const stages = [
  {
    n: "01",
    title: "Listen",
    body: "Understand the story, purpose, audience, assignment, and emotional experience behind the work.",
  },
  {
    n: "02",
    title: "Clarify",
    body: "Identify the central message, format, voice, audience, and reason the property or experience should exist.",
  },
  {
    n: "03",
    title: "Develop",
    body: "Build the narrative, concept, characters, content, program, or creative direction.",
  },
  {
    n: "04",
    title: "Structure",
    body: "Establish ownership, roles, timelines, resources, production needs, and decision points.",
  },
  {
    n: "05",
    title: "Produce",
    body: "Bring the work to life through publishing, staging, filming, content creation, digital development, or live experience.",
  },
  {
    n: "06",
    title: "Connect",
    body: "Create pathways for readers, audiences, partners, and communities to encounter and engage with the work.",
  },
  {
    n: "07",
    title: "Extend",
    body: "Identify opportunities for companion resources, new formats, digital platforms, events, partnerships, adaptations, or future properties.",
  },
];

/** Section 10 — the seven-stage approach as a gold-ruled sequence. */
export default function MediaProcess() {
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
              We Build the Story, the Structure, and the Path to the Audience.
            </h2>
          </Reveal>
        </div>

        <ol className={styles.stages}>
          {stages.map((stage, i) => (
            <Reveal as="li" key={stage.n} delay={(i % 3) * 70} className={styles.stage}>
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
