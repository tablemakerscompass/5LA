import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./CompaniesIP.module.css";

const categories = [
  {
    n: "01",
    title: "Stories",
    body: "Books, plays, characters, productions, narrative worlds, and future adaptations.",
  },
  {
    n: "02",
    title: "Platforms",
    body: "Applications, digital environments, executive tools, and technology-enabled experiences.",
  },
  {
    n: "03",
    title: "Frameworks",
    body: "Methods, standards, training systems, learning programs, and organizational tools.",
  },
  {
    n: "04",
    title: "Communities",
    body: "Professional, cultural, healing, women-focused, and legacy-centered experiences.",
  },
];

/** Section 6 — what 5LA owns and develops, not only what it delivers. */
export default function CompaniesIP() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="ip-heading">
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">What We Own and Develop</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="ip-heading" className={`section-heading ${styles.heading}`}>
              5LA Does More Than Deliver Services. We Build What We Own.
            </h2>
          </Reveal>
          <Reveal delay={120} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              The 5LA ecosystem includes original stories, platforms,
              frameworks, applications, communities, training programs, and
              media properties developed for long-term growth, impact, and
              legacy.
            </p>
            <p className={`body ${styles.paragraph}`}>
              This allows 5LA to apply its own standards internally—building the
              systems, teams, technology, content, audience pathways, and
              operating structures required to move an idea from concept to
              sustainable property.
            </p>
          </Reveal>
        </div>

        <ol className={styles.categories}>
          {categories.map((category, i) => (
            <Reveal
              as="li"
              key={category.n}
              delay={(i % 2) * 70}
              className={styles.category}
            >
              <span className={`numeral ${styles.n}`} aria-hidden="true">
                {category.n}
              </span>
              <h3 className={`subheading ${styles.title}`}>{category.title}</h3>
              <p className={`body ${styles.body}`}>{category.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={140}>
          <p className={styles.note}>
            Not every property is currently launched or commercially available.
            The ecosystem includes active, developing, and future initiatives.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
