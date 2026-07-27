import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbsPurpose.module.css";

const areas = [
  {
    n: "01",
    title: "Preserve",
    body: "Create opportunities to document family stories, community histories, traditions, photographs, letters, memories, and lived experience.",
  },
  {
    n: "02",
    title: "Gather",
    body: "Bring people together through thoughtful conversations, cultural experiences, women-focused gatherings, family-centered programs, and legacy events.",
  },
  {
    n: "03",
    title: "Honor",
    body: "Recognize the people whose care, sacrifice, leadership, service, and resilience shaped families and communities.",
  },
  {
    n: "04",
    title: "Connect",
    body: "Create stronger understanding between generations by making room for truth, reflection, listening, and shared experience.",
  },
  {
    n: "05",
    title: "Continue",
    body: "Develop resources, programs, partnerships, and future initiatives that help stories, values, and community work move forward.",
  },
];

/** Section 4 — the Society's purpose in five areas. */
export default function GbsPurpose() {
  return (
    <section
      id="purpose"
      className={`section ${styles.wrap}`}
      aria-labelledby="purpose-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="What We Are Building"
          title={
            <span id="purpose-heading">
              A Living Space for Legacy, Story, Culture, and Community.
            </span>
          }
          divider
        />

        <ol className={styles.list}>
          {areas.map((area, i) => (
            <Reveal as="li" key={area.n} delay={(i % 3) * 70} className={styles.item}>
              <span className={styles.n} aria-hidden="true">
                {area.n}
              </span>
              <h3 className={styles.title}>{area.title}</h3>
              <p className={`body ${styles.body}`}>{area.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
