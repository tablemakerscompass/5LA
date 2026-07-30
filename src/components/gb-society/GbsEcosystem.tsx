import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbsEcosystem.module.css";

const groups = [
  {
    label: "Connected properties",
    items: [
      {
        name: "The Georgia B. Media Group",
        href: "/our-companies/georgia-b-media-group",
        body: "May support publishing, documentation, storytelling, production, content, and preservation projects.",
      },
      {
        name: "Aunt Sarah’s Girls",
        href: "/our-companies/aunt-sarahs-girls",
        body: "Creates literary, theatrical, and conversation-based opportunities centered on women, family, truth, survival, healing, and legacy.",
      },
      {
        name: "The Sarah Method",
        href: "/our-companies/the-sarah-method",
        body: "Provides a digital reflection experience connected to truth, identity, healing, communication, and purpose.",
      },
    ],
  },
  {
    label: "Supporting sectors",
    items: [
      {
        name: "Business Experience",
        href: "/experience-sectors/business",
        body: "Supports event planning, partnerships, operating structure, project development, and implementation.",
      },
      {
        name: "Training Experience",
        href: "/experience-sectors/training",
        body: "Supports facilitators, workshops, guided discussions, leadership development, and community-learning experiences.",
      },
      {
        name: "Media Experience",
        href: "/experience-sectors/media",
        body: "Supports publishing, storytelling, content, production, cultural programming, and audience experience.",
      },
    ],
  },
];

/** Section 7 — how the Society sits within the wider 5LA ecosystem. */
export default function GbsEcosystem() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="ecosystem-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Part of a Larger Vision"
          title={
            <span id="ecosystem-heading">
              The Society Is Supported by the Experience Sectors and Creative
              Properties of 5LA.
            </span>
          }
          divider
        />

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <div key={group.label} className={styles.group}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <ul className={styles.list}>
                {group.items.map((item, i) => (
                  <Reveal
                    as="li"
                    key={item.href}
                    delay={((gi + i) % 2) * 70}
                    className={styles.item}
                  >
                    <h4 className={styles.name}>
                      <Link href={item.href} className={styles.link}>
                        {item.name}
                        <span className={styles.arrow} aria-hidden="true">
                          &rarr;
                        </span>
                      </Link>
                    </h4>
                    <p className={`body ${styles.body}`}>{item.body}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Reveal delay={140}>
          <p className={styles.statement}>
            The Society has its own assignment, but it benefits from the shared
            capabilities of the larger 5LA ecosystem.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
