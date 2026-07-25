import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./WhoServes.module.css";

const audiences = [
  {
    title: "Established organizations",
    body: "Businesses seeking stronger operations, leadership alignment, employee development, service standards, and sustainable systems.",
  },
  {
    title: "Growing businesses",
    body: "Founders and teams moving from informal processes toward structure, consistency, and intentional growth.",
  },
  {
    title: "Hospitality & experience-driven brands",
    body: "Organizations where customer service, culture, environments, and team performance directly shape the brand promise.",
  },
  {
    title: "Leaders adopting technology",
    body: "Organizations seeking practical AI, automation, and digital tools without losing the human experience.",
  },
  {
    title: "Creators & communities",
    body: "Writers, producers, brands, and community leaders developing stories, programs, productions, or experiences with cultural and emotional impact.",
  },
];

export default function WhoServes() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="serve-heading">
      <Container>
        <SectionIntro
          eyebrow="Who We Serve"
          title={
            <span id="serve-heading">
              For Organizations and Visionaries Building Something That Must
              Work—and Matter.
            </span>
          }
          divider
        />

        <div className={styles.grid}>
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 80} className={styles.item}>
              <span className={styles.marker} aria-hidden="true" />
              <h3 className={`subheading ${styles.title}`}>{a.title}</h3>
              <p className={`body ${styles.body}`}>{a.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className={styles.statement}>
            The strongest partnerships begin with shared vision, clear
            expectations, and a commitment to the standard.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
