"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingCapabilities.module.css";

type Category = {
  n: string;
  title: string;
  statement: string;
  items: string[];
};

const categories: Category[] = [
  {
    n: "01",
    title: "Leadership Development",
    statement:
      "We help leaders understand that their behavior, communication, decisions, and consistency shape the experience of the entire organization.",
    items: [
      "Leadership foundations",
      "Self-awareness",
      "Communication",
      "Accountability",
      "Decision-making",
      "Delegation",
      "Coaching",
      "Feedback",
      "Conflict navigation",
      "Team alignment",
      "Culture leadership",
      "Leading through change",
      "Executive and emerging-leader development",
    ],
  },
  {
    n: "02",
    title: "Manager Development",
    statement:
      "We equip managers with practical tools they can use during the actual work—not only concepts discussed in a classroom.",
    items: [
      "Transitioning into management",
      "Manager expectations",
      "Shift or department leadership",
      "Daily communication",
      "Employee coaching",
      "Performance conversations",
      "Documentation",
      "Scheduling and preparation",
      "Operational accountability",
      "Recognition",
      "Team meetings",
      "Problem-solving",
      "Manager operating rhythms",
    ],
  },
  {
    n: "03",
    title: "Hospitality & Guest-Service Training",
    statement:
      "Hospitality is more than friendliness. It is the intentional way people are welcomed, understood, served, and remembered.",
    items: [
      "Hospitality mindset",
      "First impressions",
      "Guest communication",
      "Service sequence",
      "Anticipating needs",
      "Professional presence",
      "Experience recovery",
      "Handling complaints",
      "Service consistency",
      "Teamwork across departments",
      "Personalization",
      "Emotional intelligence",
      "Creating memorable experiences",
    ],
  },
  {
    n: "04",
    title: "Workforce & Employee Development",
    statement:
      "We help employees understand how their role connects to the larger experience and why their contribution matters.",
    items: [
      "New-hire orientation",
      "Workplace expectations",
      "Professional communication",
      "Ownership and accountability",
      "Team collaboration",
      "Time and priority management",
      "Customer awareness",
      "Workplace confidence",
      "Problem-solving",
      "Workplace culture",
      "Career development",
      "Employee readiness",
      "Role-specific learning",
    ],
  },
  {
    n: "05",
    title: "Culture & Organizational Learning",
    statement:
      "Culture becomes real when people understand what the values require in their daily choices, communication, and behavior.",
    items: [
      "Culture alignment",
      "Values in practice",
      "Standards introduction",
      "Culture reset",
      "Internal communication",
      "Team expectations",
      "Leadership alignment workshops",
      "Employee-experience development",
      "Service-culture development",
      "Cross-functional learning",
      "Change adoption",
      "Organizational accountability",
    ],
  },
  {
    n: "06",
    title: "Custom Training Design",
    statement:
      "5LA designs training around the organization’s audience, operating reality, desired behavior, and experience standard.",
    items: [
      "Training-needs assessment",
      "Curriculum development",
      "Facilitator guides",
      "Participant workbooks",
      "Digital learning",
      "Live workshops",
      "Manager reinforcement tools",
      "Learning pathways",
      "Role-based training",
      "Microlearning",
      "Training calendars",
      "Completion tracking",
      "Evaluation and follow-up plans",
    ],
  },
];

/**
 * Section 4 — capabilities grouped into six categories as editorial
 * accordions. First open by default; keyboard- and touch-operable, with no
 * hover-only content.
 */
export default function TrainingCapabilities() {
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
          eyebrow="What We Develop"
          title={
            <span id="capabilities-heading">
              Learning Experiences Built Around the People, the Standard, and
              the Work.
            </span>
          }
          divider
        />

        <Reveal delay={100}>
          <ul className={styles.list}>
            {categories.map((category, i) => {
              const isOpen = !!open[i];
              const panelId = `training-capability-panel-${i}`;
              const btnId = `training-capability-button-${i}`;
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
