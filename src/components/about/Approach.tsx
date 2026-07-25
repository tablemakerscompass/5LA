import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./Approach.module.css";

const stages = [
  {
    n: "01",
    title: "Understand",
    body: "We listen closely to the vision, the challenge, the people involved, and the experience the organization wants to create.",
  },
  {
    n: "02",
    title: "Examine",
    body: "We assess the systems, operations, leadership, technology, communication, training, and story supporting that experience.",
  },
  {
    n: "03",
    title: "Align",
    body: "We identify where expectations, people, tools, processes, and priorities are disconnected.",
  },
  {
    n: "04",
    title: "Build",
    body: "We develop practical structures, programs, platforms, resources, content, or experiences designed around the actual need.",
  },
  {
    n: "05",
    title: "Equip",
    body: "We help the people responsible for the work understand the standard and carry it forward with confidence.",
  },
];

export default function Approach() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="approach-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">How We Approach the Work</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="approach-heading" className={`section-heading ${styles.heading}`}>
              We Begin with the Experience—and Work Backward.
            </h2>
          </Reveal>
          <Reveal delay={120} className={styles.copy}>
            <p className="body">
              Before recommending a system, program, platform, campaign, training,
              or production, 5LA begins by asking what people should experience,
              what must be true for that experience to happen, and what may prevent
              the organization from delivering it consistently.
            </p>
          </Reveal>
        </div>

        <ol className={styles.stages}>
          {stages.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 70} className={styles.stage}>
              <span className={`numeral ${styles.n}`}>{s.n}</span>
              <h3 className={`subheading ${styles.title}`}>{s.title}</h3>
              <p className={styles.body}>{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
