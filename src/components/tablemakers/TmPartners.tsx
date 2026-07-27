import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { partners, tmBrand } from "@/config/tablemakers";
import styles from "./TmPartners.module.css";

/**
 * Section 14 — Who may partner with Tablemakers.
 * No partner is named, and no partnership is implied as active.
 */
export default function TmPartners() {
  return (
    <section
      id="partnerships"
      className={`section ${styles.wrap}`}
      aria-labelledby="tm-partners-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Community & Content Partnerships"
          title={
            <span id="tm-partners-heading">
              For Organizations Interested in Developing the People Who Build the
              Experience.
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

        <Reveal delay={80} className={styles.ctaWrap}>
          <Button
            href={tmBrand.connectPath}
            variant="primary"
            size="lg"
            className={styles.cta}
          >
            Discuss a Tablemakers Partnership
          </Button>
          <p className={`caption ${styles.note}`}>
            No partnership is currently in place, and no organization listed here
            is a named partner.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
