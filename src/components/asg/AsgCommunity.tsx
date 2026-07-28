import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import AsgStatusPill from "./AsgStatusPill";
import { communityExperiences } from "@/config/aunt-sarahs-girls";
import styles from "./AsgCommunity.module.css";

/**
 * Section 10 — Community experiences.
 *
 * Every entry carries its own availability label. Nothing here is presented as
 * currently bookable; update the `status` in config/aunt-sarahs-girls.ts as
 * experiences become real.
 */
export default function AsgCommunity() {
  return (
    <section
      id="community-experiences"
      className={`section ${styles.wrap}`}
      aria-labelledby="asg-community-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Story to Community"
          title={
            <span id="asg-community-heading">
              A Story Can Open the Door to Conversations Communities Need to Have.
            </span>
          }
          lead="These experiences are being shaped alongside the novel and the production. Each is labeled with where it currently stands."
          divider
        />

        <ul className={styles.list}>
          {communityExperiences.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={(i % 3) * 70}
              className={styles.item}
            >
              <h3 className={styles.title}>{item.title}</h3>
              <AsgStatusPill status={item.status} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={80}>
          <p className={`lead ${styles.statement}`}>
            The goal is to create environments where women feel seen, the story is
            treated with dignity, and difficult conversations can begin with care.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
