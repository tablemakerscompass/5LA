import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./BusinessChallenges.module.css";

const challenges = [
  {
    n: "01",
    title: "Inconsistent service",
    body: "Customers receive different levels of service depending on the employee, shift, location, or manager.",
  },
  {
    n: "02",
    title: "Unclear operations",
    body: "Daily work depends on memory, habit, or individual preference instead of documented systems.",
  },
  {
    n: "03",
    title: "Leadership misalignment",
    body: "Leaders are working toward different priorities, expectations, or standards.",
  },
  {
    n: "04",
    title: "Weak accountability",
    body: "Roles, responsibilities, ownership, and follow-through are unclear.",
  },
  {
    n: "05",
    title: "Rapid growth without structure",
    body: "The business is expanding faster than its systems, processes, and people can support.",
  },
  {
    n: "06",
    title: "Employee confusion",
    body: "Team members are expected to perform without clear training, standards, tools, or communication.",
  },
  {
    n: "07",
    title: "Culture gaps",
    body: "The stated values do not consistently match the employee or customer experience.",
  },
  {
    n: "08",
    title: "Ideas that are not being executed",
    body: "Strong concepts remain delayed because ownership, planning, timelines, or implementation are missing.",
  },
];

/** Section 3 — common challenges, set typographically with large numerals. */
export default function BusinessChallenges() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="challenges-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Common Business Challenges"
          title={
            <span id="challenges-heading">
              When the Vision Is Clear but the Operation Is Not.
            </span>
          }
          divider
        />

        <ul className={styles.list}>
          {challenges.map((c, i) => (
            <Reveal as="li" key={c.n} delay={(i % 2) * 80} className={styles.item}>
              <span className={`numeral ${styles.n}`} aria-hidden="true">
                {c.n}
              </span>
              <div className={styles.text}>
                <h3 className={`subheading ${styles.title}`}>{c.title}</h3>
                <p className={`body ${styles.body}`}>{c.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
