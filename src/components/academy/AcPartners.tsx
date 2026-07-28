import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { partners } from "@/config/academy";
import styles from "./AcPartners.module.css";

/**
 * Section 14 — Who may partner with the Academy.
 *
 * These describe the kinds of organizations the Academy is open to. No partner
 * is named, no partnership is implied as active, and the faith-and-service
 * entry describes an interest in aligned learning without implying affiliation.
 */
export default function AcPartners() {
  return (
    <section
      id="learning-partnerships"
      className={`section ${styles.wrap}`}
      aria-labelledby="ac-partners-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Learning Partnerships"
          title={
            <span id="ac-partners-heading">
              For Organizations and Communities Preparing People to Carry a
              Standard.
            </span>
          }
          divider
        />

        <ul className={styles.list}>
          {partners.map((partner, i) => (
            <Reveal
              key={partner.title}
              as="li"
              delay={(i % 3) * 60}
              className={styles.item}
            >
              <h3 className={styles.title}>{partner.title}</h3>
              <p className={styles.body}>{partner.body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={80}>
          <p className={`caption ${styles.note}`}>
            No partnership is currently in place, and no organization listed here
            is a named partner. Conversations begin through Work With Us.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
