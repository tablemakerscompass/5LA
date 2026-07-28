"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbsInitiatives.module.css";

type Area = {
  n: string;
  title: string;
  statement: string;
  items: string[];
  /** Marks areas that are not yet running, shown as a visible label. */
  future?: boolean;
  note?: string;
};

const areas: Area[] = [
  {
    n: "01",
    title: "Legacy Conversations",
    statement:
      "These conversations create room for people to speak, listen, document, and understand what has shaped them.",
    items: [
      "Intergenerational conversations",
      "Family-story circles",
      "Women’s conversations",
      "Oral-history prompts",
      "Guided reflection",
      "Community storytelling",
      "Truth and reconciliation conversations",
      "Family traditions",
      "Lessons passed between generations",
      "Legacy-letter experiences",
    ],
  },
  {
    n: "02",
    title: "Story Preservation",
    statement:
      "Preservation allows memories and wisdom to become more than something one person remembers.",
    items: [
      "Family interviews",
      "Oral histories",
      "Legacy journals",
      "Photograph documentation",
      "Letter preservation",
      "Family-story collections",
      "Memory books",
      "Digital archives",
      "Community-history projects",
      "Story prompts",
      "Tribute publications",
      "Recorded conversations",
    ],
    note: "The Society does not offer archival, museum, or historical-certification services.",
  },
  {
    n: "03",
    title: "Women-Focused Experiences",
    statement:
      "These experiences create space for women to reflect, communicate, connect, and consider what they are carrying forward.",
    items: [
      "Women’s gatherings",
      "Healing-centered conversations",
      "Identity and purpose discussions",
      "Family and generational storytelling",
      "Truth-centered workshops",
      "Reflective experiences",
      "Book conversations",
      "Community support gatherings",
      "Leadership and legacy discussions",
      "Aunt Sarah’s Girls companion experiences",
    ],
    note: "These are reflective community experiences. They are not therapy, counseling, or medical care.",
  },
  {
    n: "04",
    title: "Cultural & Community Gatherings",
    statement:
      "The gathering itself should reflect care, dignity, welcome, and intention.",
    items: [
      "Community dinners",
      "Legacy celebrations",
      "Cultural conversations",
      "Family-centered events",
      "Storytelling evenings",
      "Creative showcases",
      "Community panels",
      "Intergenerational gatherings",
      "Hospitality-centered experiences",
      "Partner-hosted programs",
    ],
  },
  {
    n: "05",
    title: "Legacy Resources",
    statement:
      "Resources should help families and communities continue the conversation beyond a single event.",
    items: [
      "Guided journals",
      "Family conversation cards",
      "Legacy letters",
      "Reflection guides",
      "Story-preservation workbooks",
      "Discussion guides",
      "Family-history prompts",
      "Community toolkits",
      "Companion publications",
      "Digital resources",
    ],
  },
  {
    n: "06",
    title: "Future Community Initiatives",
    statement:
      "Directions the Society may pursue as it grows, shared as intent rather than availability.",
    items: [
      "Scholarships",
      "Creative-development support",
      "Community microgrants",
      "Women’s programs",
      "Family-legacy projects",
      "Youth storytelling",
      "Elder-story preservation",
      "Community partnerships",
      "Cultural events",
      "Educational initiatives",
    ],
    future: true,
    note: "None of these is currently available. Scholarships, grants, and funding would require a formal structure before any could be offered.",
  },
];

/**
 * Section 5 — the Society's initiative areas as editorial accordions.
 * Areas still in development carry a visible label, so their status is never
 * conveyed by styling alone.
 */
export default function GbsInitiatives() {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });

  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="initiatives-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Possible Society Experiences"
          title={
            <span id="initiatives-heading">
              Programs and Gatherings Designed Around What Communities Need to
              Preserve and Share.
            </span>
          }
          lead="Several of these areas are in development. They are shared to describe the Society’s direction rather than a current schedule of programs."
          divider
        />

        <Reveal delay={100}>
          <ul className={styles.list}>
            {areas.map((area, i) => {
              const isOpen = !!open[i];
              const panelId = `gbs-area-panel-${i}`;
              const btnId = `gbs-area-button-${i}`;
              return (
                <li key={area.n} className={styles.item} data-open={isOpen}>
                  <h3 className={styles.itemHeading}>
                    <button
                      id={btnId}
                      type="button"
                      className={styles.trigger}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen((cur) => ({ ...cur, [i]: !cur[i] }))}
                    >
                      <span className={styles.n} aria-hidden="true">
                        {area.n}
                      </span>
                      <span className={styles.title}>
                        {area.title}
                        {area.future && (
                          <span className={styles.futureTag}>In development</span>
                        )}
                      </span>
                      <span className={styles.icon} aria-hidden="true" />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={styles.panel}
                    hidden={!isOpen}
                  >
                    <div className={styles.panelText}>
                      <p className={styles.statement}>{area.statement}</p>
                      {area.note && <p className={styles.note}>{area.note}</p>}
                    </div>
                    <ul className={styles.items}>
                      {area.items.map((item) => (
                        <li key={item} className={styles.areaItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
