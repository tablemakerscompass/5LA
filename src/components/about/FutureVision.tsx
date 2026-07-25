import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./FutureVision.module.css";

export default function FutureVision() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="future-heading"
    >
      <Container>
        <div className={styles.inner}>
          <Reveal>
            <p className="eyebrow">Where We Are Going</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="future-heading" className={`${styles.heading}`}>
              Building an Ecosystem Where Business, Technology, Training, and Media
              Strengthen One Another.
            </h2>
          </Reveal>
          <Reveal delay={120} className={styles.copy}>
            <p className="body">
              The long-term vision for 5LA is to become a premier experience
              company known for developing stronger organizations, better-prepared
              professionals, human-centered technology, meaningful media, and
              original properties that create lasting cultural and community
              impact.
            </p>
            <p className="body">
              As the ecosystem grows, every new company, platform, program,
              production, and partnership must remain connected to the same
              purpose: building experiences with structure, excellence, service,
              and intention.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
