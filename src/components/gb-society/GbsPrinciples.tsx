import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbsPrinciples.module.css";

const principles = [
  {
    title: "Make Room",
    body: "Create welcoming environments where people feel seen, respected, and invited to contribute.",
  },
  {
    title: "Listen Well",
    body: "Approach stories with patience, care, curiosity, and respect for what the speaker is ready to share.",
  },
  {
    title: "Honor the Story",
    body: "Preserve people’s experiences with dignity rather than turning their lives into entertainment or content.",
  },
  {
    title: "Carry It Forward",
    body: "Use what has been learned to strengthen families, communities, relationships, and future generations.",
  },
];

/** Section 6 — the spirit of the Society, set typographically. */
export default function GbsPrinciples() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="principles-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">The Spirit of the Society</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="principles-heading"
              className={`section-heading ${styles.heading}`}
            >
              Make Room. Listen Well. Honor the Story. Carry It Forward.
            </h2>
          </Reveal>
        </div>

        <ul className={styles.list}>
          {principles.map((principle, i) => (
            <Reveal
              as="li"
              key={principle.title}
              delay={(i % 2) * 70}
              className={styles.item}
            >
              <h3 className={styles.title}>{principle.title}</h3>
              <p className={`body ${styles.body}`}>{principle.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
