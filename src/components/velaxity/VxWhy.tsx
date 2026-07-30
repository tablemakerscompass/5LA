import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./VxWhy.module.css";

/** Section 2 — Why VelaXity exists. Editorial, not a feature grid. */
export default function VxWhy() {
  return (
    <section
      id="why-velaxity"
      className={`section ${styles.wrap}`}
      aria-labelledby="vx-why-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.head}>
            <p className="eyebrow">Why We Built It</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="vx-why-heading" className={`section-heading ${styles.heading}`}>
              Leaders Are Surrounded by Information but Often Still Lack Clarity.
            </h2>
          </Reveal>

          <Reveal delay={100} className={styles.copy}>
            <p className={`body ${styles.body}`}>
              Leadership teams often move between disconnected dashboards,
              spreadsheets, messages, meetings, documents, learning systems, HR
              tools, and AI platforms.
            </p>
            <p className={`body ${styles.body}`}>
              The problem is not always a lack of information. The problem is
              that important information is scattered, context is missing,
              priorities compete, and leaders are expected to make decisions
              without one connected view of the organization.
            </p>
            <p className={`body ${styles.body}`}>
              VelaXity was created to help bring that work together.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <figure className={styles.quoteWrap}>
            <blockquote className={`quote ${styles.quote}`}>
              The goal is not more data. The goal is better organizational
              understanding.
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
