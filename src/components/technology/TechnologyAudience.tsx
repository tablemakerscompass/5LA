import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./TechnologyAudience.module.css";

const audiences = [
  {
    title: "Growing businesses",
    body: "Organizations ready to move beyond spreadsheets, manual processes, and disconnected tools.",
  },
  {
    title: "Hospitality and experience-driven organizations",
    body: "Businesses needing technology that supports service, standards, teams, operations, and guest experience.",
  },
  {
    title: "Leadership teams",
    body: "Executives seeking clearer visibility, organizational intelligence, and practical decision support.",
  },
  {
    title: "Multi-location organizations",
    body: "Businesses needing consistent reporting, standards, communication, and performance visibility across locations.",
  },
  {
    title: "Training and workforce organizations",
    body: "Teams needing digital learning, employee resources, progress visibility, or knowledge systems.",
  },
  {
    title: "Media and creative properties",
    body: "Projects needing digital platforms, audience tools, production systems, or user experiences.",
  },
  {
    title: "Organizations exploring AI",
    body: "Leaders who want a responsible and practical starting point rather than chasing every new tool.",
  },
];

/** Section 9 — who this sector serves, as a hairline-ruled definition list. */
export default function TechnologyAudience() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="audience-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Who We Support"
          title={
            <span id="audience-heading">
              For Leaders Who Need Technology to Serve the Organization More
              Intentionally.
            </span>
          }
          divider
        />

        <dl className={styles.list}>
          {audiences.map((audience, i) => (
            <Reveal
              key={audience.title}
              delay={(i % 2) * 70}
              className={styles.row}
            >
              <dt className={styles.title}>{audience.title}</dt>
              <dd className={styles.body}>{audience.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
