import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./TechnologyChallenges.module.css";

const challenges = [
  {
    n: "01",
    title: "Too many disconnected tools",
    body: "Information is spread across platforms that do not communicate, creating duplication and confusion.",
  },
  {
    n: "02",
    title: "Manual work that should be automated",
    body: "Teams spend time repeating tasks, transferring information, or creating reports that could be streamlined.",
  },
  {
    n: "03",
    title: "AI without a clear purpose",
    body: "Leaders want to use artificial intelligence but have not identified the right use cases, safeguards, or implementation plan.",
  },
  {
    n: "04",
    title: "Technology employees do not adopt",
    body: "New systems are introduced without enough communication, training, support, or alignment with actual workflows.",
  },
  {
    n: "05",
    title: "Limited visibility",
    body: "Leaders cannot easily see performance, priorities, team concerns, standards, or operational trends.",
  },
  {
    n: "06",
    title: "Systems built around the software instead of the organization",
    body: "The business is forced to change how it works to fit a tool that was not designed around its needs.",
  },
  {
    n: "07",
    title: "Data without useful insight",
    body: "Reports exist, but leaders still struggle to understand what the information means or what action should follow.",
  },
  {
    n: "08",
    title: "Digital experiences that feel impersonal",
    body: "Technology has reduced the human connection instead of supporting stronger service, leadership, and communication.",
  },
];

/** Section 3 — common challenges, numerals stacked above each title. */
export default function TechnologyChallenges() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="challenges-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Common Technology Challenges"
          title={
            <span id="challenges-heading">
              When the Tools Are Growing but the Work Is Not Getting Easier.
            </span>
          }
          divider
        />

        <ul className={styles.list}>
          {challenges.map((c, i) => (
            <Reveal as="li" key={c.n} delay={(i % 2) * 80} className={styles.item}>
              <span className={styles.n} aria-hidden="true">
                {c.n}
              </span>
              <h3 className={`subheading ${styles.title}`}>{c.title}</h3>
              <p className={`body ${styles.body}`}>{c.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
