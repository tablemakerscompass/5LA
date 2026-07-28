import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./CompaniesPartnerships.module.css";

const pathways = [
  {
    title: "Business and organizational partnerships",
    body: "Consulting, operations, hospitality, technology, workforce development, leadership, and experience strategy.",
  },
  {
    title: "Creative and media partnerships",
    body: "Publishing, productions, adaptations, live experiences, content, venues, and audience engagement.",
  },
  {
    title: "Community and learning partnerships",
    body: "Workshops, women-focused programs, leadership development, professional communities, cultural initiatives, and legacy experiences.",
  },
];

/** Section 9 — how aligned organizations may collaborate. */
export default function CompaniesPartnerships() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="partnerships-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Partnerships</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="partnerships-heading"
              className={`section-heading ${styles.heading}`}
            >
              Some Experiences Are Built Through Collaboration.
            </h2>
          </Reveal>
          <Reveal delay={120} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              5LA welcomes aligned conversations with organizations,
              communities, venues, creative partners, technology collaborators,
              training partners, producers, publishers, and experience-focused
              leaders.
            </p>
            <p className={`body ${styles.paragraph}`}>
              Partnership begins with shared purpose, clear expectations,
              respect for the audience, and commitment to the standard behind
              the work.
            </p>
          </Reveal>
        </div>

        <ul className={styles.pathways}>
          {pathways.map((pathway, i) => (
            <Reveal
              as="li"
              key={pathway.title}
              delay={i * 80}
              className={styles.pathway}
            >
              <h3 className={styles.title}>{pathway.title}</h3>
              <p className={`body ${styles.body}`}>{pathway.body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={140} className={styles.ctaWrap}>
          <Button href="/work-with-us" variant="gold" size="lg">
            Discuss a Partnership
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
