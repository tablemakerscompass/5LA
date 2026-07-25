import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./Outcomes.module.css";

const outcomes = [
  {
    n: "01",
    title: "Stronger Organizations",
    body: "Clear systems, aligned leadership, intentional operations, and service standards that support consistent delivery.",
  },
  {
    n: "02",
    title: "Better-Equipped People",
    body: "Training, tools, and development experiences that prepare employees and leaders to carry the mission forward.",
  },
  {
    n: "03",
    title: "Smarter Technology",
    body: "Practical AI, automation, and digital systems designed around how organizations and people actually work.",
  },
  {
    n: "04",
    title: "Stories That Endure",
    body: "Media, productions, content, and original experiences that create emotional connection and lasting impact.",
  },
];

export default function Outcomes() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="outcomes-heading">
      <Container>
        <SectionIntro
          eyebrow="What We Help Build"
          title={
            <span id="outcomes-heading">
              From Vision to Structure. From Structure to Experience.
            </span>
          }
          divider
        />
        <div className={styles.grid}>
          {outcomes.map((o, i) => (
            <Reveal key={o.n} delay={(i % 2) * 90}>
              <article className={styles.item}>
                <span className={`numeral ${styles.n}`}>{o.n}</span>
                <h3 className={`subheading ${styles.title}`}>{o.title}</h3>
                <p className={`body ${styles.body}`}>{o.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
