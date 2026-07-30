import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./TechnologyAI.module.css";

const principles = [
  {
    title: "Purpose before tools",
    body: "Begin with the problem, the decision, or the experience—not with a platform.",
  },
  {
    title: "Human judgment remains essential",
    body: "AI may support analysis and execution, but responsibility remains with people.",
  },
  {
    title: "Context improves usefulness",
    body: "Technology becomes more valuable when it understands the organization’s standards, priorities, language, and workflows.",
  },
  {
    title: "Adoption matters as much as implementation",
    body: "A system cannot create value when employees do not understand or trust how to use it.",
  },
  {
    title: "Privacy and responsibility matter",
    body: "Organizations should define what information belongs in AI systems and how outputs are reviewed.",
  },
  {
    title: "Simplicity creates value",
    body: "The best technology experience often removes steps rather than adding features.",
  },
];

/** Section 5 — how 5LA approaches AI, stated as six working principles. */
export default function TechnologyAI() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="ai-heading">
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Our AI Philosophy</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="ai-heading" className={`section-heading ${styles.heading}`}>
              AI Should Strengthen Leadership and Work—not Replace Thought,
              Care, or Accountability.
            </h2>
          </Reveal>
          <Reveal delay={120} className={styles.copy}>
            <p className="body">
              5LA approaches artificial intelligence as a practical
              organizational tool. The goal is not to add AI everywhere. The
              goal is to identify where it can reduce friction, improve access
              to information, support better decisions, and give leaders and
              teams more capacity for work requiring judgment, creativity,
              communication, and human connection.
            </p>
          </Reveal>
        </div>

        <ol className={styles.principles}>
          {principles.map((principle, i) => (
            <Reveal
              as="li"
              key={principle.title}
              delay={(i % 3) * 70}
              className={styles.principle}
            >
              <span className={styles.marker} aria-hidden="true" />
              <h3 className={`subheading ${styles.title}`}>{principle.title}</h3>
              <p className={`body ${styles.body}`}>{principle.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
