import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./TechnologyEngagements.module.css";

/** Illustrative starting points — not client work, and deliberately unnamed. */
const engagements = [
  {
    n: "01",
    title: "AI adoption strategy",
    items: [
      "AI-readiness review",
      "Use-case prioritization",
      "Responsible-use guidelines",
      "Leadership education",
      "Pilot workflow",
      "Employee adoption plan",
    ],
  },
  {
    n: "02",
    title: "Workflow automation",
    items: [
      "Process mapping",
      "Repetitive-task review",
      "Automation design",
      "Tool integration",
      "Testing",
      "Documentation",
      "Team training",
    ],
  },
  {
    n: "03",
    title: "Executive visibility",
    items: [
      "Leadership-needs assessment",
      "KPI review",
      "Dashboard planning",
      "Data-source mapping",
      "Executive summary design",
      "Reporting rhythm",
    ],
  },
  {
    n: "04",
    title: "Internal application",
    items: [
      "User interviews",
      "Workflow design",
      "Feature prioritization",
      "Prototype",
      "MVP development",
      "Testing",
      "Launch support",
    ],
  },
  {
    n: "05",
    title: "Technology modernization",
    items: [
      "Current-tool assessment",
      "System recommendations",
      "Migration roadmap",
      "Ownership structure",
      "Training plan",
      "Adoption support",
    ],
  },
];

/** Section 11 — example engagement paths, clearly labeled as examples. */
export default function TechnologyEngagements() {
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
              Examples of Technology Experience Engagements
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
