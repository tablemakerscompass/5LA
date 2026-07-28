import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingEngagements.module.css";

/** Illustrative starting points — not client work, and deliberately unnamed. */
const engagements = [
  {
    n: "01",
    title: "Leadership development series",
    items: [
      "Leadership assessment",
      "Communication",
      "Accountability",
      "Coaching",
      "Culture leadership",
      "Manager tools",
      "Reinforcement plan",
    ],
  },
  {
    n: "02",
    title: "Hospitality standards program",
    items: [
      "Guest journey",
      "Service expectations",
      "Communication",
      "Experience recovery",
      "Role-specific practice",
      "Manager observation tools",
    ],
  },
  {
    n: "03",
    title: "New-manager preparation",
    items: [
      "Role transition",
      "Expectations",
      "Delegation",
      "Feedback",
      "Documentation",
      "Shift leadership",
      "Operating rhythm",
    ],
  },
  {
    n: "04",
    title: "New-hire learning experience",
    items: [
      "Company introduction",
      "Culture",
      "Standards",
      "Role expectations",
      "Service foundation",
      "Workplace communication",
      "Completion verification",
    ],
  },
  {
    n: "05",
    title: "Culture alignment workshop",
    items: [
      "Values clarification",
      "Leadership alignment",
      "Team discussion",
      "Behavioral expectations",
      "Communication standards",
      "Reinforcement plan",
    ],
  },
];

/** Section 14 — example engagement paths, clearly labeled as examples. */
export default function TrainingEngagements() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="engagements-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Where the Work May Begin"
          title={
            <span id="engagements-heading">
              Examples of Training Experience Engagements
            </span>
          }
          lead="These are illustrative starting points, not client case studies. Every program is shaped by the audience, the standard, and the behavior that must change."
          divider
        />

        <div className={styles.list}>
          {engagements.map((engagement, i) => (
            <Reveal
              key={engagement.n}
              delay={(i % 2) * 80}
              className={styles.item}
            >
              <div className={styles.head}>
                <span className={`numeral ${styles.n}`} aria-hidden="true">
                  {engagement.n}
                </span>
                <h3 className={`subheading ${styles.title}`}>
                  {engagement.title}
                </h3>
              </div>
              <div className={styles.mayInclude}>
                <h4 className={styles.label}>May include</h4>
                <ul className={styles.items}>
                  {engagement.items.map((item) => (
                    <li key={item} className={styles.subItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
