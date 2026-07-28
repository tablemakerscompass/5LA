import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaPhilosophy.module.css";

const principles = [
  {
    title: "Truth before performance",
    body: "Storytelling should begin with what is honest, necessary, and meaningful—not only what will attract attention.",
  },
  {
    title: "Audience with dignity",
    body: "People should not be treated as clicks, views, or ticket buyers. The work should respect what they bring into the experience.",
  },
  {
    title: "Structure supports creativity",
    body: "Clear planning, ownership, production, and communication allow the creative work to grow.",
  },
  {
    title: "Story should extend",
    body: "A book may become a play. A play may create a conversation. A conversation may become a platform, resource, community, or new property.",
  },
  {
    title: "Culture matters",
    body: "Media shapes how people see themselves, their families, their communities, and their possibilities.",
  },
  {
    title: "Legacy requires stewardship",
    body: "Original work should be documented, organized, protected through appropriate professional channels, and developed with long-term vision.",
  },
];

/** Section 5 — how 5LA approaches story, as six working principles. */
export default function MediaPhilosophy() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="philosophy-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">How We Approach Story</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="philosophy-heading"
              className={`section-heading ${styles.heading}`}
            >
              The Work Should Move People—and Be Built to Move Forward.
            </h2>
          </Reveal>
        </div>

        <ul className={styles.principles}>
          {principles.map((principle, i) => (
            <Reveal
              as="li"
              key={principle.title}
              delay={(i % 2) * 80}
              className={styles.principle}
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
