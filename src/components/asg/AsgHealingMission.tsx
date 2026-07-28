import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { asgBrand } from "@/config/aunt-sarahs-girls";
import styles from "./AsgHealingMission.module.css";

/**
 * Section 8 — The healing mission.
 *
 * No therapeutic, medical, or clinical claims. The disclaimer is present on the
 * page and readable, but deliberately not visually dominant.
 */
export default function AsgHealingMission() {
  return (
    <section
      id="healing-mission"
      className={`section ${styles.wrap}`}
      aria-labelledby="asg-mission-heading"
    >
      <Container narrow>
        <SectionIntro
          eyebrow="Beyond the Story"
          title={
            <span id="asg-mission-heading">
              The Work Is Designed to Begin Conversations, Not End Them.
            </span>
          }
          divider
        />

        <Reveal delay={80} className={styles.copy}>
          <p className={`lead ${styles.lead}`}>
            Aunt Sarah’s Girls was created from questions about truth, silence,
            healing, family, and what women inherit without ever agreeing to
            carry.
          </p>
          <p className={`body ${styles.body}`}>
            Through the novel, stage production, guided conversations, companion
            resources, visual storytelling, and The Sarah Method, the brand
            creates opportunities for women to reflect, communicate, and consider
            what must change for healing to move forward.
          </p>
          <p className={`body ${styles.body}`}>{asgBrand.invitation}</p>
        </Reveal>

        <Reveal delay={140}>
          <aside className={styles.disclaimer} aria-label="Important note">
            <h3 className={styles.disclaimerHeading}>Please note</h3>
            <p className={styles.disclaimerBody}>{asgBrand.disclaimer}</p>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
