import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SmStatusPill from "./SmStatusPill";
import { communityExtensions } from "@/config/the-sarah-method";
import styles from "./SmCommunity.module.css";

/**
 * Section 12 — Organizational and community experiences.
 *
 * Each entry carries its own availability label; update the `status` in
 * config/the-sarah-method.ts as experiences become real.
 */
export default function SmCommunity() {
  return (
    <section
      id="community-experiences"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="sm-community-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Extending the Experience"
          title={
            <span id="sm-community-heading">
              The Platform May Also Support Guided Conversations Beyond the
              Individual User.
            </span>
          }
          lead="Each of these is labeled with where it currently stands. Most are still being shaped."
          divider
        />

        <ul className={styles.list}>
          {communityExtensions.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={(i % 3) * 60}
              className={styles.item}
            >
              <h3 className={styles.title}>{item.title}</h3>
              <SmStatusPill status={item.status} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={80} className={styles.ctaWrap}>
          <Button
            href="/work-with-us?interest=the-sarah-method"
            variant="gold"
            size="lg"
            className={styles.cta}
          >
            Discuss a Sarah Method Partnership
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
