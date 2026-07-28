"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./BusinessCapabilities.module.css";

type Category = {
  n: string;
  title: string;
  statement: string;
  items: string[];
};

const categories: Category[] = [
  {
    n: "01",
    title: "Operations & Organizational Structure",
    statement:
      "We help organizations move from informal, inconsistent processes toward clearer and more sustainable operations.",
    items: [
      "Operational assessment",
      "Workflow review",
      "Department structure",
      "Role clarity",
      "Process improvement",
      "Accountability systems",
      "Daily and weekly operating rhythms",
      "Internal communication structure",
      "Multi-location operational alignment",
      "Business launch support",
      "Project implementation",
    ],
  },
  {
    n: "02",
    title: "SOPs, Policies & Documentation",
    statement:
      "We turn unwritten expectations into practical documents people can understand and use.",
    items: [
      "Standard operating procedures",
      "Employee policies",
      "Manager guides",
      "Service standards",
      "Opening and closing procedures",
      "Escalation processes",
      "Operational checklists",
      "Incident documentation",
      "Training verification systems",
      "Orientation materials",
      "Internal forms and templates",
    ],
  },
  {
    n: "03",
    title: "Hospitality & Guest Experience",
    statement:
      "We help organizations translate their brand promise into a consistent human experience.",
    items: [
      "Guest journey assessment",
      "Hospitality standards",
      "Service-sequence development",
      "Customer touchpoint review",
      "Front-of-house operations",
      "Experience recovery standards",
      "Event guest experience",
      "Brand-to-service alignment",
      "Hospitality culture development",
      "Multi-location service consistency",
    ],
  },
  {
    n: "04",
    title: "Leadership, Culture & People Systems",
    statement:
      "We strengthen the systems leaders use to communicate, guide, support, and hold teams accountable.",
    items: [
      "Leadership alignment",
      "Manager expectations",
      "Culture standards",
      "Employee experience review",
      "Performance-management structure",
      "Communication expectations",
      "Recognition systems",
      "Accountability practices",
      "Manager operating tools",
      "HR process development",
      "Workforce planning support",
    ],
  },
  {
    n: "05",
    title: "Events & Experience Implementation",
    statement:
      "We bring structure to the many moving parts behind live and branded experiences.",
    items: [
      "Event concept development",
      "Experience design",
      "Production planning",
      "Staffing structure",
      "Guest-flow planning",
      "Vendor coordination",
      "Run-of-show development",
      "Event standards",
      "On-site operations",
      "Post-event evaluation",
      "Business and brand launch experiences",
    ],
  },
];

/**
 * Section 4 — capabilities grouped into five categories as editorial
 * accordions. The first is open by default; every panel is reachable by
 * keyboard and touch, and nothing depends on hover.
 */
export default function BusinessCapabilities() {
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
          eyebrow="What We Build"
          title={
            <span id="capabilities-heading">
              Structure, Standards, and Systems Designed Around the Experience.
            </span>
          }
          divider
        />

        <Reveal delay={100}>
          <ul className={styles.list}>
            {categories.map((category, i) => {
              const isOpen = !!open[i];
              const panelId = `capability-panel-${i}`;
              const btnId = `capability-button-${i}`;
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
