import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaEngagements.module.css";

/** Illustrative starting points — not client work, and deliberately unnamed. */
const engagements = [
  {
    n: "01",
    title: "Book-to-brand development",
    items: [
      "Story positioning",
      "Publishing plan",
      "Visual identity direction",
      "Launch experience",
      "Reader resources",
      "Discussion strategy",
      "Companion content",
      "Adaptation roadmap",
    ],
  },
  {
    n: "02",
    title: "Stage-production development",
    items: [
      "Creative brief",
      "Script-development structure",
      "Production planning",
      "Casting strategy",
      "Rehearsal calendar",
      "Audience experience",
      "Content campaign",
      "Post-show conversation",
    ],
  },
  {
    n: "03",
    title: "Original property development",
    items: [
      "Property positioning",
      "Story world",
      "Brand architecture",
      "Audience pathways",
      "Digital extension",
      "Live experiences",
      "Partnerships",
      "Long-term roadmap",
    ],
  },
  {
    n: "04",
    title: "Brand-storytelling engagement",
    items: [
      "Founder narrative",
      "Brand voice",
      "Messaging",
      "Content themes",
      "Campaign concepts",
      "Thought leadership",
      "Launch storytelling",
      "Internal culture communication",
    ],
  },
  {
    n: "05",
    title: "Community-conversation experience",
    items: [
      "Theme development",
      "Facilitator structure",
      "Story prompts",
      "Event planning",
      "Partner strategy",
      "Companion resources",
      "Post-event content",
    ],
  },
];

/** Section 14 — example engagement paths, clearly labeled as examples. */
export default function MediaEngagements() {
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
              Examples of Media Experience Engagements
            </span>
          }
          lead="These are illustrative starting points, not completed case studies. Every project is shaped by the story, the audience, and the experience being built."
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
