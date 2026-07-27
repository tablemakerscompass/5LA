"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbCreativeAreas.module.css";

type Area = {
  n: string;
  title: string;
  statement: string;
  items: string[];
};

const areas: Area[] = [
  {
    n: "01",
    title: "Publishing & Literary Properties",
    statement:
      "We develop literary work as both a story and a complete audience experience.",
    items: [
      "Novels",
      "Plays",
      "Story collections",
      "Companion books",
      "Guided journals",
      "Discussion guides",
      "Literary brands",
      "Author development",
      "Publishing strategy",
      "Reader experiences",
      "Book-launch experiences",
      "Adaptation planning",
    ],
  },
  {
    n: "02",
    title: "Theater & Live Productions",
    statement:
      "We connect creative direction with the operational discipline required to bring live work to the stage.",
    items: [
      "Stage plays",
      "Revivals",
      "Readings",
      "Black-box productions",
      "Touring concepts",
      "Live storytelling",
      "Production planning",
      "Casting strategy",
      "Rehearsal structure",
      "Audience experience",
      "Post-show conversations",
      "Community partnerships",
    ],
  },
  {
    n: "03",
    title: "Film, Digital Theater & Visual Storytelling",
    statement:
      "We explore visual formats that allow stories to reach audiences beyond a traditional stage or printed page.",
    items: [
      "Filmed stage productions",
      "Digital theater",
      "Short-form visual storytelling",
      "Character features",
      "Prologue visuals",
      "Story-based digital content",
      "Adaptation development",
      "Production concepts",
      "Audience extensions",
      "Behind-the-scenes content",
    ],
  },
  {
    n: "04",
    title: "Original Intellectual Property",
    statement:
      "We build original work with the long-term vision required for it to grow beyond a single release.",
    items: [
      "Story worlds",
      "Characters",
      "Literary properties",
      "Theatrical properties",
      "Methods",
      "Companion platforms",
      "Branded programs",
      "Adaptation pathways",
      "Franchise architecture",
      "Audience extensions",
      "Property roadmaps",
      "Legacy development",
    ],
  },
  {
    n: "05",
    title: "Brand & Cultural Storytelling",
    statement:
      "We help organizations and creators communicate what the work means—not only what it is.",
    items: [
      "Founder stories",
      "Legacy narratives",
      "Brand narratives",
      "Community storytelling",
      "Cultural content",
      "Editorial campaigns",
      "Interview concepts",
      "Thought leadership",
      "Internal storytelling",
      "Launch narratives",
      "Audience messaging",
      "Experience storytelling",
    ],
  },
  {
    n: "06",
    title: "Live Experiences & Conversations",
    statement:
      "We create experiences that continue through reflection, conversation, content, and community.",
    items: [
      "Book events",
      "Theater conversations",
      "Women-focused experiences",
      "Conferences",
      "Community gatherings",
      "Cultural programs",
      "Facilitated conversations",
      "Legacy experiences",
      "Audience engagement",
      "Companion resources",
      "Partnership events",
      "Post-experience content",
    ],
  },
];

/**
 * Section 4 — the six creative areas as editorial accordions. First open by
 * default; keyboard- and touch-operable, with no hover-only content.
 */
export default function GbCreativeAreas() {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });

  return (
    <section
      id="creative-areas"
      className={`section ${styles.wrap}`}
      aria-labelledby="creative-areas-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Our Creative Areas"
          title={
            <span id="creative-areas-heading">
              From the Page to the Stage, Screen, Room, and Community.
            </span>
          }
          divider
        />

        <Reveal delay={100}>
          <ul className={styles.list}>
            {areas.map((area, i) => {
              const isOpen = !!open[i];
              const panelId = `gb-area-panel-${i}`;
              const btnId = `gb-area-button-${i}`;
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
                      <span className={styles.title}>{area.title}</span>
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
                    <p className={styles.statement}>{area.statement}</p>
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
