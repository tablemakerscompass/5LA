import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingChallenges.module.css";

const challenges = [
  {
    n: "01",
    title: "Inconsistent onboarding",
    body: "New employees receive different information depending on who trains them, when they start, or where they work.",
  },
  {
    n: "02",
    title: "Managers promoted without preparation",
    body: "Strong employees move into leadership roles without the tools required to communicate, coach, delegate, and hold people accountable.",
  },
  {
    n: "03",
    title: "Training that does not change behavior",
    body: "Information is delivered, but employees are not given practice, reinforcement, ownership, or follow-up.",
  },
  {
    n: "04",
    title: "Unclear service standards",
    body: "Employees are told to provide excellent service without a shared definition of what the experience should look and feel like.",
  },
  {
    n: "05",
    title: "Culture that exists only in words",
    body: "Values are displayed publicly but are not translated into daily leadership, communication, and behavior.",
  },
  {
    n: "06",
    title: "Skill gaps affecting the customer experience",
    body: "Employees may understand their tasks but lack confidence, judgment, hospitality awareness, or communication skills.",
  },
  {
    n: "07",
    title: "Limited accountability after training",
    body: "Training ends without manager follow-up, observation, coaching, measurement, or reinforcement.",
  },
  {
    n: "08",
    title: "One program used for every audience",
    body: "Executives, managers, frontline employees, and new hires receive the same material even though their responsibilities differ.",
  },
];

/** Section 3 — common challenges on green rules. */
export default function TrainingChallenges() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="challenges-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Common People-Development Challenges"
          title={
            <span id="challenges-heading">
              When Expectations Are High but Development Is Inconsistent.
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
