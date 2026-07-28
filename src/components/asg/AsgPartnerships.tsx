import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { partnershipPathways } from "@/config/aunt-sarahs-girls";
import styles from "./AsgPartnerships.module.css";

/**
 * Section 14 — Partnership pathways.
 *
 * These describe the kinds of partners the property is open to. No partner,
 * adaptation deal, or affiliation is named or implied.
 */
export default function AsgPartnerships() {
  return (
    <section
      id="partnerships"
      className={`section ${styles.wrap}`}
      aria-labelledby="asg-partnerships-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Partnerships"
          title={
            <span id="asg-partnerships-heading">
              Help Bring the Story Into Rooms Where the Conversation Is Needed.
            </span>
          }
          divider
        />

        <ol className={styles.list}>
          {partnershipPathways.map((pathway, i) => (
            <Reveal
              key={pathway.number}
              as="li"
              delay={(i % 3) * 70}
              className={styles.item}
            >
              <span className={styles.number} aria-hidden="true">
                {pathway.number}
              </span>
              <h3 className={styles.title}>{pathway.title}</h3>
              <p className={styles.body}>{pathway.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={80} className={styles.ctaWrap}>
          <Button href="/work-with-us" variant="primary" size="lg" className={styles.cta}>
            Discuss an Aunt Sarah’s Girls Partnership
          </Button>
          <p className={`caption ${styles.note}`}>
            No partnership, adaptation, or distribution agreement is currently in
            place. Conversations begin through Work With Us.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
