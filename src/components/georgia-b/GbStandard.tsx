import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbStandard.module.css";

const principles = [
  {
    title: "Make room",
    body: "Create space for voices, stories, communities, and experiences deserving to be seen and heard.",
  },
  {
    title: "Tell the truth",
    body: "Approach the work with emotional honesty and cultural care.",
  },
  {
    title: "Build responsibly",
    body: "Give the story the planning, structure, and stewardship required to grow.",
  },
  {
    title: "Carry it forward",
    body: "Develop work with legacy, future audiences, and long-term impact in mind.",
  },
];

/**
 * Section 12 — the Georgia B. standard. Distinct from the LOAVES framework
 * while remaining compatible with it.
 */
export default function GbStandard() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="standard-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">The Spirit Behind the Work</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="standard-heading" className={`section-heading ${styles.heading}`}>
              Make Room. Tell the Truth. Carry the Story Forward.
            </h2>
          </Reveal>
          <Reveal delay={120} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              The Media Group’s work is guided by the belief that storytelling
              can preserve memory, reveal truth, create understanding, and make
              room for people to see themselves more clearly.
            </p>
            <p className={`body ${styles.paragraph}`}>
              The work must be developed with care for the story, respect for
              the audience, responsibility for the process, and vision for what
              it may become.
            </p>
          </Reveal>
        </div>

        <ul className={styles.principles}>
          {principles.map((principle, i) => (
            <Reveal
              as="li"
              key={principle.title}
              delay={(i % 2) * 70}
              className={styles.principle}
            >
              <h3 className={styles.title}>{principle.title}</h3>
              <p className={`body ${styles.body}`}>{principle.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
