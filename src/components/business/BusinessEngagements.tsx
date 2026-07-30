import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./BusinessEngagements.module.css";

/** Illustrative starting points — not client work, and deliberately unnamed. */
const engagements = [
  {
    n: "01",
    title: "Hospitality operations reset",
    items: [
      "Operational assessment",
      "SOP development",
      "Service standards",
      "Manager expectations",
      "Training plan",
      "Accountability rhythm",
    ],
  },
  {
    n: "02",
    title: "New business launch",
    items: [
      "Operating structure",
      "Policies",
      "Guest journey",
      "Staffing plan",
      "Vendor process",
      "Launch timeline",
      "Opening experience",
    ],
  },
  {
    n: "03",
    title: "Leadership and culture alignment",
    items: [
      "Leadership assessment",
      "Role clarity",
      "Communication standards",
      "Culture framework",
      "Manager tools",
      "Team training",
    ],
  },
  {
    n: "04",
    title: "Event or experience development",
    items: [
      "Concept structure",
      "Budget and production planning",
      "Staffing",
      "Vendor coordination",
      "Guest flow",
      "Run of show",
      "Evaluation process",
    ],
  },
  {
    n: "05",
    title: "Growth preparation",
    items: [
      "Workflow review",
      "Organizational structure",
      "Documentation",
      "Technology recommendations",
      "Manager development",
      "Multi-location standards",
    ],
  },
];

/** Section 10 — example engagement paths, clearly labeled as examples. */
export default function BusinessEngagements() {
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
              Examples of Business Experience Engagements
            </span>
          }
          lead="These are illustrative starting points, not client case studies. Every engagement is shaped by what the organization actually needs."
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
