import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import AcStatusPill from "./AcStatusPill";
import { acBrand, individualLearning } from "@/config/academy";
import styles from "./AcIndividual.module.css";

/**
 * Section 11 — Individual professional development.
 *
 * No enrollment button, no interest list, and no newsletter form: none of those
 * exists yet, and the brief forbids activating functions that do not. The one
 * live route is a conversation through Work With Us.
 */
export default function AcIndividual() {
  return (
    <section
      id="individual-development"
      className={`section ${styles.wrap}`}
      aria-labelledby="ac-individual-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Learning for Professionals"
          title={
            <span id="ac-individual-heading">
              Development for People Who Want to Lead, Serve, and Work With
              Greater Excellence.
            </span>
          }
          lead="Academy learning currently reaches individuals through the organizations they work with. Open individual enrollment is not available yet."
          divider
        />

        <ul className={styles.list}>
          {individualLearning.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={(i % 3) * 50}
              className={styles.item}
            >
              <span className={styles.title}>{item.title}</span>
              <AcStatusPill status={item.status} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={80}>
          <p className={styles.note}>
            There is no enrollment, waiting list, or course purchase to complete
            here yet. When individual programs open, they will be published on
            this page.
          </p>
          <p className={styles.disclaimer}>{acBrand.accreditationNote}</p>
        </Reveal>
      </Container>
    </section>
  );
}
