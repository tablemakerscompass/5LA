import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./CompaniesFoundations.module.css";

const foundations = [
  {
    title: "Business foundation",
    items: [
      "Strategy",
      "Operations",
      "Project structure",
      "Standards",
      "Implementation",
      "Partnerships",
      "Organizational support",
    ],
  },
  {
    title: "Technology foundation",
    items: [
      "Digital platforms",
      "Artificial intelligence",
      "Automation",
      "Applications",
      "User experience",
      "Digital infrastructure",
    ],
  },
  {
    title: "Training foundation",
    items: [
      "Leadership",
      "Learning",
      "Workforce development",
      "Facilitation",
      "Professional resources",
      "Adoption support",
    ],
  },
  {
    title: "Media foundation",
    items: [
      "Publishing",
      "Production",
      "Storytelling",
      "Content",
      "Audience development",
      "Live experiences",
    ],
  },
];

/** Section 5 — the shared capabilities every brand draws on. */
export default function CompaniesFoundations() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="foundations-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Shared Infrastructure"
          title={
            <span id="foundations-heading">
              Each Brand Has Its Own Assignment. Every Brand Shares the Same
              Foundation.
            </span>
          }
          lead="The brands within 5LA serve different audiences, but they are strengthened by shared capabilities across strategy, operations, technology, training, media, storytelling, project development, and experience design."
          divider
        />

        <ul className={styles.grid}>
          {foundations.map((foundation, i) => (
            <Reveal
              as="li"
              key={foundation.title}
              delay={(i % 2) * 70}
              className={styles.item}
            >
              <h3 className={styles.title}>{foundation.title}</h3>
              <ul className={styles.items}>
                {foundation.items.map((item) => (
                  <li key={item} className={styles.subItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={140} className={styles.resultWrap}>
          <span className={styles.resultLabel}>Shared result</span>
          <p className={styles.result}>
            Brands and properties built with structure, purpose, clarity,
            identity, and room to grow.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
