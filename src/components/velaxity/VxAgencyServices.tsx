"use client";

/*
 * PARENT-COMPANY SERVICES — NOT VELAXITY PRODUCT CAPABILITIES.
 *
 * This section moved here from the retired /our-companies/velaxity
 * page. Everything below is work The 5 Loaves Agency performs for clients; none
 * of it is a feature of the VelaXity platform. Keep the two separate: the
 * product's verified capabilities live in config/velaxity.ts, which forbids
 * listing anything the application does not actually do.
 */

import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./VxAgencyServices.module.css";

type Category = {
  n: string;
  title: string;
  statement: string;
  items: string[];
};

const categories: Category[] = [
  {
    n: "01",
    title: "AI Strategy & Implementation",
    statement:
      "We help organizations identify where AI can create practical value and where human judgment must remain central.",
    items: [
      "AI-readiness assessment",
      "Use-case identification",
      "AI workflow design",
      "Executive AI support",
      "Responsible-use guidelines",
      "Prompt and knowledge design",
      "Internal AI assistants",
      "Decision-support tools",
      "AI implementation planning",
      "Adoption support",
      "AI governance recommendations",
      "Leadership education",
    ],
  },
  {
    n: "02",
    title: "Workflow Automation",
    statement:
      "We reduce unnecessary manual work while protecting the quality, accountability, and human care required in the process.",
    items: [
      "Process mapping",
      "Repetitive-task identification",
      "Workflow automation",
      "Form and intake automation",
      "Notifications and reminders",
      "Reporting automation",
      "Approval workflows",
      "Client or employee communication flows",
      "Data transfer between systems",
      "Follow-up automation",
      "Operational task management",
      "Documentation support",
    ],
  },
  {
    n: "03",
    title: "Digital Systems & Application Development",
    statement:
      "We help translate operational needs into focused digital tools rather than oversized platforms filled with unused features.",
    items: [
      "Internal business applications",
      "Executive dashboards",
      "Client portals",
      "Employee portals",
      "Training platforms",
      "Digital resource libraries",
      "Intake and booking experiences",
      "Operational tools",
      "Leadership systems",
      "User-experience planning",
      "Feature prioritization",
      "Prototype and MVP development",
    ],
  },
  {
    n: "04",
    title: "Organizational Intelligence",
    statement:
      "We help leaders move from scattered information toward clearer organizational insight.",
    items: [
      "Executive reporting",
      "Performance visibility",
      "Culture insights",
      "Standards tracking",
      "Team feedback",
      "Leadership priorities",
      "Operational trend monitoring",
      "Learning and development visibility",
      "Multi-location comparison",
      "Client or portfolio oversight",
      "Decision-support summaries",
      "Predictive planning support",
    ],
  },
  {
    n: "05",
    title: "Technology Adoption & Modernization",
    statement:
      "Successful modernization depends on how the technology is introduced, understood, owned, and sustained.",
    items: [
      "Current-system assessment",
      "Tool selection",
      "Digital-process redesign",
      "Technology roadmaps",
      "Migration planning",
      "Change communication",
      "Employee adoption support",
      "Leadership preparation",
      "Technology training",
      "System documentation",
      "Governance and ownership",
      "Ongoing review structure",
    ],
  },
];

/**
 * Section 4 — capabilities grouped into five categories as editorial
 * accordions. First open by default; keyboard- and touch-operable, with no
 * hover-only content.
 */
export default function VxAgencyServices() {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });

  return (
    <section
      id="technology-services"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="technology-services-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Technology Services From 5LA"
          title={
            <span id="technology-services-heading">
              Technology Designed Around the Organization, the People, and the
              Decision.
            </span>
          }
          lead="These are engagements delivered by The 5 Loaves Agency, the company that builds VelaXity. They are advisory and implementation services, separate from the VelaXity platform described above."
          divider
        />

        <Reveal delay={100}>
          <ul className={styles.list}>
            {categories.map((category, i) => {
              const isOpen = !!open[i];
              const panelId = `tech-capability-panel-${i}`;
              const btnId = `tech-capability-button-${i}`;
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
