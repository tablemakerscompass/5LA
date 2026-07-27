import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AcStatusPill from "./AcStatusPill";
import { velaxityConnections } from "@/config/academy";
import styles from "./AcVelaxity.module.css";

/**
 * Section 15 — Connection to VelaXity.
 *
 * VERIFIED against the VelaXity Learning Hub. Items marked available exist in
 * the platform today; the rest carry their real status. No full LMS integration
 * is claimed, because none exists.
 */
export default function AcVelaxity() {
  return (
    <section
      id="velaxity-connection"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="ac-velaxity-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <Reveal>
              <p className="eyebrow">Learning &amp; Organizational Intelligence</p>
              <hr className={`rule ${styles.rule}`} />
              <h2
                id="ac-velaxity-heading"
                className={`section-heading ${styles.heading}`}
              >
                Training Becomes Stronger When Leaders Can Connect Learning to
                the Organization.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className={`body ${styles.body}`}>
                VelaXity and The 5LA Academy serve different purposes but may
                support one another.
              </p>
              <p className={`body ${styles.body}`}>
                The Academy develops learning, leadership, hospitality, culture,
                and workforce experiences. VelaXity may support access,
                visibility, organizational context, standards, learning
                priorities, and leadership follow-through where the platform’s
                current features allow.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <Button
                href="/our-companies/velaxity"
                variant="gold"
                size="lg"
                className={styles.cta}
              >
                Explore VelaXity
              </Button>
            </Reveal>
          </div>

          <Reveal delay={120} className={styles.panel}>
            <h3 className={styles.subhead}>Where the two connect today</h3>
            <ul className={styles.list}>
              {velaxityConnections.map((item) => (
                <li key={item.title} className={styles.item}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  <AcStatusPill status={item.status} />
                </li>
              ))}
            </ul>
            <p className={`caption ${styles.note}`}>
              VelaXity is not a learning-management system, and the Academy does
              not require it. Organizations may run Academy learning entirely
              without the platform.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
