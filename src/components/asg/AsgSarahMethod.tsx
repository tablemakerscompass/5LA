import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AsgStatusPill from "./AsgStatusPill";
import { asgAssets, sarahMethodAreas } from "@/config/aunt-sarahs-girls";
import styles from "./AsgSarahMethod.module.css";

/**
 * Section 9 — The Sarah Method.
 *
 * High-level approved concepts only. No feature list, screenshots, pricing, or
 * launch language — the full Sarah Method page is a later phase.
 */
export default function AsgSarahMethod() {
  return (
    <section
      id="the-sarah-method"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="asg-method-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <Reveal>
              <p className="eyebrow">The Digital Reflection Experience</p>
              <hr className={`rule ${styles.rule}`} />
              <h2 id="asg-method-heading" className={`section-heading ${styles.heading}`}>
                A Place to Continue the Conversation Privately and Intentionally.
              </h2>
              <p className={styles.statusRow}>
                <AsgStatusPill status="in-development" />
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p className={`body ${styles.body}`}>
                The Sarah Method is a digital reflection and healing experience
                developed from the themes, voice, and mission of Aunt Sarah’s
                Girls.
              </p>
              <p className={`body ${styles.body}`}>
                It invites women to pause, journal, explore personal truths,
                examine identity and patterns, and consider what has been sitting
                heavy on their hearts.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <Button
                href="/our-companies/the-sarah-method"
                variant="gold"
                size="lg"
                className={styles.cta}
              >
                Explore The Sarah Method
              </Button>
            </Reveal>
          </div>

          <Reveal delay={120} className={styles.panel}>
            <div className={styles.mark}>
              {asgAssets.sarahMethod ? (
                <Image
                  src={asgAssets.sarahMethod}
                  alt="The Sarah Method logo."
                  width={260}
                  height={90}
                  loading="lazy"
                  className={styles.logo}
                />
              ) : (
                <span className={styles.markPlaceholder}>
                  Approved Sarah Method logo required
                </span>
              )}
            </div>
            <h3 className={styles.subhead}>What it makes room for</h3>
            <ul className={styles.areas}>
              {sarahMethodAreas.map((area) => (
                <li key={area} className={styles.area}>
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
