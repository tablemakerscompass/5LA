import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbsPathways.module.css";

const pathways = [
  {
    n: "01",
    title: "Host a gathering",
    body: "Partner with the Society to develop a conversation, family event, women-focused experience, or legacy-centered program.",
  },
  {
    n: "02",
    title: "Preserve a story",
    body: "Explore a respectful project involving interviews, photographs, journals, letters, oral histories, or family narratives.",
  },
  {
    n: "03",
    title: "Develop a resource",
    body: "Collaborate on journals, conversation guides, story prompts, discussion materials, or community toolkits.",
  },
  {
    n: "04",
    title: "Support a future initiative",
    body: "Discuss aligned sponsorships, venues, programming, scholarships, community projects, or cultural partnerships as initiatives develop.",
  },
];

/** Section 10 — the four collaboration pathways. */
export default function GbsPathways() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="pathways-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Community Collaboration</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="pathways-heading" className={`section-heading ${styles.heading}`}>
              Legacy Work Is Stronger When Communities Help Build It Together.
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

        <Reveal delay={140} className={styles.footer}>
          <p className={styles.note}>
            The Society is not a registered nonprofit, and contributions are not
            tax-deductible. Support conversations are about partnership,
            programming, and shared work rather than donations.
          </p>
          <Button href="/work-with-us" variant="gold" size="lg">
            Discuss a Community Partnership
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
