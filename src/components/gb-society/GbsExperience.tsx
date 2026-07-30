import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbsExperience.module.css";

const standards = [
  {
    title: "Warm",
    body: "People should feel welcomed rather than processed.",
  },
  {
    title: "Respectful",
    body: "Stories should be received without judgment, pressure, or exploitation.",
  },
  {
    title: "Thoughtful",
    body: "Every detail—from the environment to the questions—should reflect intention.",
  },
  {
    title: "Safe in tone",
    body: "Participants should understand what the gathering is and what it is not.",
  },
  {
    title: "Meaningful",
    body: "The experience should create something participants can reflect on, preserve, or carry forward.",
  },
];

/** Section 12 — how a Society gathering should feel. Hospitality as identity. */
export default function GbsExperience() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="experience-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">How the Space Should Feel</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="experience-heading"
              className={`section-heading ${styles.heading}`}
            >
              Welcoming Enough for Truth. Structured Enough for Care.
            </h2>
          </Reveal>
        </div>

        <ul className={styles.list}>
          {standards.map((standard, i) => (
            <Reveal
              as="li"
              key={standard.title}
              delay={(i % 3) * 70}
              className={styles.item}
            >
              <h3 className={styles.title}>{standard.title}</h3>
              <p className={`body ${styles.body}`}>{standard.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
