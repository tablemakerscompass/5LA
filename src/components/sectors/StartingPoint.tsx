import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./StartingPoint.module.css";

const entries = [
  {
    need: "Your organization needs more structure",
    begin: "Begin with Business Experience.",
    href: "/experience-sectors/business",
    accent: "burgundy",
  },
  {
    need: "Your tools and systems are not supporting the work",
    begin: "Begin with Technology Experience.",
    href: "/experience-sectors/technology",
    accent: "ink",
  },
  {
    need: "Your leaders or employees need development",
    begin: "Begin with Training Experience.",
    href: "/experience-sectors/training",
    accent: "green",
  },
  {
    need: "Your story, platform, production, or audience experience needs to be built",
    begin: "Begin with Media Experience.",
    href: "/experience-sectors/media",
    accent: "gold",
  },
];

/** Section 6 — entry-point prompts routed to the right sector. */
export default function StartingPoint() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="starting-point-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Where Should You Begin?"
          title={
            <span id="starting-point-heading">
              Start With the Challenge You Are Trying to Solve.
            </span>
          }
          divider
        />

        <ul className={styles.list}>
          {entries.map((entry, i) => (
            <Reveal
              key={entry.href}
              as="li"
              delay={i * 70}
              className={styles.item}
            >
              <Link href={entry.href} className={styles.link} data-accent={entry.accent}>
                <span className={styles.need}>{entry.need}</span>
                <span className={styles.begin}>
                  {entry.begin}
                  <span className={styles.arrow} aria-hidden="true">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className={styles.footer}>
          <p className={`body ${styles.support}`}>
            Not sure where your need belongs? Begin with the experience you want
            people to have. We will help identify what must be built behind it.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Start a Conversation
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
