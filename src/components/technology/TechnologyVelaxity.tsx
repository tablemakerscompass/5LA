import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./TechnologyVelaxity.module.css";

/**
 * Hub names only — these are the platform's areas as approved. No feature
 * claims are made here; the VelaXity profile page carries the full detail.
 */
const hubs = [
  "Executive Hub",
  "AI Hub",
  "Standards Hub",
  "Learning Hub",
  "Team Hub",
  "Portfolio Hub",
  "Predictive Hub",
];

/** Section 6 — VelaXity's place within the sector. Not a product page. */
export default function TechnologyVelaxity() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="velaxity-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">Built Within 5LA</p>
              <hr className={`rule ${styles.rule}`} />
              <h2
                id="velaxity-heading"
                className={`section-heading ${styles.heading}`}
              >
                VelaXity: An AI-Powered Executive Operating System
              </h2>
            </Reveal>

            <Reveal delay={100} className={styles.copy}>
              <p className={`body ${styles.paragraph}`}>
                VelaXity was developed from 5LA’s hands-on experience in
                hospitality, operations, leadership, workforce development,
                culture, standards, and organizational management.
              </p>
              <p className={`body ${styles.paragraph}`}>
                The platform is designed to help leaders access organizational
                intelligence, manage priorities, support teams, strengthen
                standards, and make better-informed decisions from one connected
                executive environment.
              </p>
            </Reveal>

            <Reveal delay={160} className={styles.hubsWrap}>
              <h3 className={styles.label}>Core areas</h3>
              <ul className={styles.hubs}>
                {hubs.map((hub) => (
                  <li key={hub} className={styles.hub}>
                    {hub}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <p className={styles.statement}>
                VelaXity is not intended to replace leadership. It is designed
                to help leaders see more clearly, act more consistently, and
                spend less time moving between disconnected systems.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <Button
                href="https://velaxity.com"
                external
                variant="gold"
                size="lg"
              >
                Explore VelaXity
              </Button>
            </Reveal>
          </div>

          <Reveal delay={140} className={styles.figure}>
            <div className={styles.logoFrame}>
              <Image
                src="/brand/velaxity-logo.png"
                alt="The VelaXity logo: a gold VX monogram inside a gold circle on deep burgundy."
                width={1254}
                height={1254}
                sizes="(min-width: 1000px) 34vw, (min-width: 640px) 22rem, 80vw"
                className={styles.logo}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
