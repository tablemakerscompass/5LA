import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbsExamples.module.css";

/** Illustrative shapes only — no scheduled dates, numbers, or outcomes. */
const examples = [
  {
    n: "01",
    title: "A family story evening",
    items: [
      "Family photographs",
      "Guided conversation",
      "Recorded memories",
      "Legacy letters",
      "Shared meal",
      "Story documentation",
    ],
  },
  {
    n: "02",
    title: "A women’s truth and legacy gathering",
    items: [
      "Guided reflection",
      "Facilitated conversation",
      "Journaling",
      "Family and identity themes",
      "Aunt Sarah’s Girls discussion",
      "Companion resources",
    ],
  },
  {
    n: "03",
    title: "An intergenerational story project",
    items: [
      "Elder interviews",
      "Youth participation",
      "Photograph collection",
      "Oral-history prompts",
      "Creative presentation",
      "Family or community archive",
    ],
  },
  {
    n: "04",
    title: "A legacy celebration",
    items: [
      "Tribute storytelling",
      "Family history",
      "Cultural traditions",
      "Community recognition",
      "Recorded messages",
      "Legacy publication or keepsake",
    ],
  },
  {
    n: "05",
    title: "A community conversation series",
    items: [
      "A central theme",
      "Facilitators",
      "Story prompts",
      "Partner organizations",
      "Participant resources",
      "Continued discussion",
    ],
  },
];

/** Section 11 — example experiences, clearly labeled as examples. */
export default function GbsExamples() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="examples-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="What This May Look Like"
          title={
            <span id="examples-heading">
              Examples of Legacy and Community Experiences
            </span>
          }
          lead="These describe the shape an experience may take. They are not currently scheduled programs."
          divider
        />

        <div className={styles.list}>
          {examples.map((example, i) => (
            <Reveal
              key={example.n}
              delay={(i % 2) * 70}
              className={styles.item}
            >
              <div className={styles.head}>
                <span className={`numeral ${styles.n}`} aria-hidden="true">
                  {example.n}
                </span>
                <h3 className={`subheading ${styles.title}`}>{example.title}</h3>
              </div>
              <div className={styles.mayInclude}>
                <h4 className={styles.label}>May include</h4>
                <ul className={styles.items}>
                  {example.items.map((item) => (
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
