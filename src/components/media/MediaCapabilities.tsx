"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaCapabilities.module.css";

type Category = {
  n: string;
  title: string;
  statement: string;
  items: string[];
};

const categories: Category[] = [
  {
    n: "01",
    title: "Publishing & Literary Development",
    statement:
      "We help move literary projects from manuscript or concept toward a complete reader, brand, and audience experience.",
    items: [
      "Book concept development",
      "Manuscript planning",
      "Editorial structure",
      "Publishing strategy",
      "Imprint development",
      "Author positioning",
      "Book-launch planning",
      "Reader experience",
      "Discussion guides",
      "Companion resources",
      "Literary brand development",
      "Adaptation planning",
    ],
  },
  {
    n: "02",
    title: "Theater, Live Production & Digital Theater",
    statement:
      "We connect the creative vision with the operational structure required to bring the work to life.",
    items: [
      "Stage-play development",
      "Production planning",
      "Creative direction",
      "Casting strategy",
      "Rehearsal structure",
      "Run-of-show development",
      "Audience experience",
      "Venue planning",
      "Production operations",
      "Visual storytelling",
      "Digital theater",
      "Filmed-performance development",
      "Touring or revival planning",
    ],
  },
  {
    n: "03",
    title: "Original Intellectual Property",
    statement:
      "We help creators and organizations think beyond a single release and build the larger world, structure, and audience around an original property.",
    items: [
      "Story-world development",
      "Character development",
      "Brand architecture",
      "Property positioning",
      "Franchise planning",
      "Companion-platform development",
      "Adaptation pathways",
      "Audience-extension strategy",
      "Property documentation",
      "Product and experience extensions",
      "Legacy planning",
      "Long-term development roadmaps",
    ],
  },
  {
    n: "04",
    title: "Brand Storytelling & Content",
    statement:
      "We help brands communicate what they do, why it matters, and how people should feel when they encounter the work.",
    items: [
      "Brand narrative",
      "Founder story",
      "Campaign development",
      "Editorial content",
      "Social content strategy",
      "Video concepts",
      "Interview and conversation formats",
      "Thought leadership",
      "Internal storytelling",
      "Culture communication",
      "Launch storytelling",
      "Audience messaging",
      "Content ecosystems",
    ],
  },
  {
    n: "05",
    title: "Live Experiences & Community Engagement",
    statement:
      "We design live experiences that create connection in the room and continue through conversation, content, and community.",
    items: [
      "Conferences",
      "Community conversations",
      "Book events",
      "Theater conversations",
      "Women-focused experiences",
      "Cultural gatherings",
      "Legacy events",
      "Branded experiences",
      "Audience engagement",
      "Facilitated discussions",
      "Partnership experiences",
      "Post-event content and resources",
    ],
  },
  {
    n: "06",
    title: "Media Strategy & Production Structure",
    statement:
      "Creative work becomes more sustainable when ownership, timelines, resources, and decisions are clearly structured.",
    items: [
      "Creative brief",
      "Development roadmap",
      "Production schedule",
      "Budget framework",
      "Roles and responsibilities",
      "Partnership planning",
      "Content calendar",
      "Audience strategy",
      "Distribution planning",
      "Launch plan",
      "Post-production workflow",
      "Asset management",
      "Evaluation and next-step planning",
    ],
  },
];

/**
 * Section 4 — capabilities grouped into six categories as editorial
 * accordions. First open by default; keyboard- and touch-operable, with no
 * hover-only content.
 */
export default function MediaCapabilities() {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });

  return (
    <section
      id="capabilities"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="capabilities-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="What We Create"
          title={
            <span id="capabilities-heading">
              Stories, Properties, Platforms, and Experiences Built With
              Purpose.
            </span>
          }
          divider
        />

        <Reveal delay={100}>
          <ul className={styles.list}>
            {categories.map((category, i) => {
              const isOpen = !!open[i];
              const panelId = `media-capability-panel-${i}`;
              const btnId = `media-capability-button-${i}`;
              return (
                <li key={category.n} className={styles.item} data-open={isOpen}>
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
                        {category.n}
                      </span>
                      <span className={styles.title}>{category.title}</span>
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
                    <p className={styles.statement}>{category.statement}</p>
                    <ul className={styles.items}>
                      {category.items.map((item) => (
                        <li key={item} className={styles.capability}>
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
