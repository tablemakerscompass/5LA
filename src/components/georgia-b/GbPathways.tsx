import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbPathways.module.css";

const pathways = [
  {
    n: "01",
    title: "Publishing partnerships",
    body: "Literary development, publishing support, distribution conversations, launches, and reader experiences.",
  },
  {
    n: "02",
    title: "Production partnerships",
    body: "Theater, filmed work, digital theater, venues, casting, technical production, and audience experiences.",
  },
  {
    n: "03",
    title: "Cultural and community partnerships",
    body: "Women-focused programs, conversations, gatherings, legacy work, and community engagement.",
  },
  {
    n: "04",
    title: "Brand and storytelling partnerships",
    body: "Founder stories, campaigns, legacy narratives, cultural storytelling, and experience development.",
  },
];

/** Section 10 — the four ways to collaborate. */
export default function GbPathways() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="pathways-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Ways to Collaborate</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="pathways-heading" className={`section-heading ${styles.heading}`}>
              Some Stories Require the Right People Around the Table.
            </h2>
          </Reveal>
        </div>

        <ul className={styles.list}>
          {pathways.map((pathway, i) => (
            <Reveal
              as="li"
              key={pathway.n}
              delay={(i % 2) * 70}
              className={styles.item}
            >
              <span className={styles.n} aria-hidden="true">
                {pathway.n}
              </span>
              <h3 className={styles.title}>{pathway.title}</h3>
              <p className={`body ${styles.body}`}>{pathway.body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={140} className={styles.ctaWrap}>
          <Button href="/work-with-us?interest=georgia-b-media-group" variant="gold" size="lg">
            Discuss a Creative Partnership
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
