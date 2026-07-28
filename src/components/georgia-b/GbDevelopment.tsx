import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbDevelopment.module.css";

const stages = [
  {
    n: "01",
    title: "Origin",
    body: "Identify the central story, truth, need, audience, and emotional purpose.",
  },
  {
    n: "02",
    title: "Development",
    body: "Build the narrative, characters, structure, format, voice, and creative direction.",
  },
  {
    n: "03",
    title: "Production",
    body: "Create the book, play, visual, event, platform, or audience experience.",
  },
  {
    n: "04",
    title: "Connection",
    body: "Introduce the work through publishing, performance, content, partnerships, conversation, and community.",
  },
  {
    n: "05",
    title: "Extension",
    body: "Identify companion resources, digital experiences, new formats, adaptations, and future opportunities.",
  },
  {
    n: "06",
    title: "Stewardship",
    body: "Maintain organization, quality, brand clarity, audience trust, and long-term vision.",
  },
];

/** Section 7 — how an idea becomes a property. */
export default function GbDevelopment() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="development-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Our Development Approach</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="development-heading"
              className={`section-heading ${styles.heading}`}
            >
              We Do Not Stop at the First Format.
            </h2>
          </Reveal>
          <Reveal delay={120} className={styles.copy}>
            <p className="body">
              A meaningful story may begin as a book, stage play, conversation,
              journal entry, character, visual concept, or community need. The
              Georgia B. Media Group examines how that original idea may
              responsibly expand into a complete property.
            </p>
          </Reveal>
        </div>

        <ol className={styles.stages}>
          {stages.map((stage, i) => (
            <Reveal as="li" key={stage.n} delay={(i % 2) * 70} className={styles.stage}>
              <span className={`numeral ${styles.n}`} aria-hidden="true">
                {stage.n}
              </span>
              <div className={styles.text}>
                <h3 className={`subheading ${styles.title}`}>{stage.title}</h3>
                <p className={`body ${styles.body}`}>{stage.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
