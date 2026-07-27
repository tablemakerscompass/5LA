import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbPhilosophy.module.css";

const principles = [
  {
    n: "01",
    title: "Truth",
    body: "The work should begin with what is emotionally honest and necessary.",
  },
  {
    n: "02",
    title: "Dignity",
    body: "The people, families, communities, and experiences represented should be treated with care.",
  },
  {
    n: "03",
    title: "Structure",
    body: "Creative work needs clear development, production, ownership, and delivery systems.",
  },
  {
    n: "04",
    title: "Connection",
    body: "The audience should be invited into recognition, reflection, conversation, or change.",
  },
  {
    n: "05",
    title: "Stewardship",
    body: "Original work should be organized, documented, and developed responsibly.",
  },
  {
    n: "06",
    title: "Legacy",
    body: "The work should be built with consideration for what it may mean years beyond its first release.",
  },
];

/** Section 5 — the storytelling philosophy as a vertical editorial sequence. */
export default function GbPhilosophy() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="philosophy-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">How We Approach the Work</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="philosophy-heading"
              className={`section-heading ${styles.heading}`}
            >
              Stories Should Be Told With Truth, Dignity, Structure, and
              Purpose.
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
              <h3 className={styles.title}>{principle.title}</h3>
              <p className={`body ${styles.body}`}>{principle.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
