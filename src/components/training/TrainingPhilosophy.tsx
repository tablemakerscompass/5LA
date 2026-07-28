import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingPhilosophy.module.css";

const principles = [
  {
    n: "01",
    title: "Relevant",
    body: "Learning should reflect the employee’s role, environment, responsibilities, and real challenges.",
  },
  {
    n: "02",
    title: "Practical",
    body: "Participants should leave knowing what to do differently, not only what concepts were discussed.",
  },
  {
    n: "03",
    title: "Human-centered",
    body: "Learning must respect the experience, confidence, concerns, and dignity of the people involved.",
  },
  {
    n: "04",
    title: "Interactive",
    body: "Discussion, reflection, scenarios, practice, and application create stronger learning than passive presentation alone.",
  },
  {
    n: "05",
    title: "Reinforced",
    body: "Managers, tools, communication, and follow-up should continue supporting the standard after the session ends.",
  },
  {
    n: "06",
    title: "Connected to operations",
    body: "Training must align with the systems, policies, expectations, and resources employees are expected to use.",
  },
];

/**
 * Section 5 — the training philosophy as a stepped vertical sequence.
 * Typographic rather than a six-icon grid.
 */
export default function TrainingPhilosophy() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="philosophy-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">How People Learn</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="philosophy-heading"
              className={`section-heading ${styles.heading}`}
            >
              Training Should Be Understood, Practiced, Reinforced, and Applied.
            </h2>
          </Reveal>
        </div>

        <ol className={styles.principles}>
          {principles.map((principle, i) => (
            <Reveal
              as="li"
              key={principle.n}
              delay={(i % 3) * 70}
              className={styles.principle}
            >
              <span className={styles.n} aria-hidden="true">
                {principle.n}
              </span>
              <h3 className={`subheading ${styles.title}`}>{principle.title}</h3>
              <p className={`body ${styles.body}`}>{principle.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
