"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./CrossSectorExamples.module.css";

type Contribution = {
  sector: "Business Experience" | "Technology Experience" | "Training Experience" | "Media Experience";
  accent: "burgundy" | "ink" | "green" | "gold";
  items: string[];
};

type Example = {
  number: string;
  title: string;
  contributions: Contribution[];
  result: string;
};

const business = { sector: "Business Experience", accent: "burgundy" } as const;
const technology = { sector: "Technology Experience", accent: "ink" } as const;
const training = { sector: "Training Experience", accent: "green" } as const;
const media = { sector: "Media Experience", accent: "gold" } as const;

/** Illustrative examples only — not client work, and deliberately unnamed. */
const examples: Example[] = [
  {
    number: "01",
    title: "Hospitality Business Growth",
    contributions: [
      {
        ...business,
        items: [
          "Operational assessment",
          "Service standards",
          "SOP development",
          "Leadership alignment",
        ],
      },
      {
        ...technology,
        items: ["Workflow automation", "Scheduling or reporting tools"],
      },
      {
        ...training,
        items: ["Manager development", "Guest-service training"],
      },
    ],
    result:
      "A more consistent operation supported by clearer systems, better-equipped leaders, and stronger service delivery.",
  },
  {
    number: "02",
    title: "AI Adoption",
    contributions: [
      {
        ...technology,
        items: ["AI strategy", "Tool selection", "Workflow design"],
      },
      {
        ...business,
        items: ["Process review", "Governance and accountability"],
      },
      {
        ...training,
        items: ["Employee adoption", "Leadership education"],
      },
    ],
    result:
      "Technology that improves the work because the systems, expectations, and people are prepared to use it.",
  },
  {
    number: "03",
    title: "Original Media Property",
    contributions: [
      {
        ...media,
        items: [
          "Story development",
          "Publishing or production",
          "Audience engagement",
        ],
      },
      {
        ...business,
        items: ["Project structure", "Partnerships", "Event planning"],
      },
      {
        ...technology,
        items: ["Digital platform", "Audience tools"],
      },
      {
        ...training,
        items: ["Facilitator or partner preparation"],
      },
    ],
    result:
      "A story that becomes a structured brand, platform, production, and community experience.",
  },
  {
    number: "04",
    title: "Organizational Culture Reset",
    contributions: [
      {
        ...business,
        items: [
          "Culture assessment",
          "Leadership alignment",
          "Standards development",
        ],
      },
      {
        ...training,
        items: ["Leadership workshops", "Team development"],
      },
      {
        ...technology,
        items: ["Feedback or performance tools"],
      },
      {
        ...media,
        items: ["Internal storytelling", "Culture communication"],
      },
    ],
    result:
      "A clearer culture supported by aligned leadership, shared language, practical tools, and consistent communication.",
  },
];

/**
 * Section 5 — expandable, clearly-labeled illustrative scenarios. The first
 * panel is open by default so the pattern is visible without interaction.
 */
export default function CrossSectorExamples() {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });

  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="examples-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Experience in Practice"
          title={
            <span id="examples-heading">
              Some Challenges Cannot Be Solved by One Department Alone.
            </span>
          }
          lead="The scenarios below are illustrative examples of how sectors may connect on an engagement. They are not client case studies."
          divider
        />

        <Reveal delay={100}>
          <ul className={styles.list}>
            {examples.map((example, i) => {
              const isOpen = !!open[i];
              const panelId = `example-panel-${i}`;
              const btnId = `example-button-${i}`;
              return (
                <li key={example.number} className={styles.item} data-open={isOpen}>
                  <h3 className={styles.itemHeading}>
                    <button
                      id={btnId}
                      type="button"
                      className={styles.trigger}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen((cur) => ({ ...cur, [i]: !cur[i] }))}
                    >
                      <span className={styles.number} aria-hidden="true">
                        {example.number}
                      </span>
                      <span className={styles.titleText}>
                        <span className="visually-hidden">
                          Example {example.number}:{" "}
                        </span>
                        {example.title}
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
                    <p className={styles.disclaimer}>
                      Example of how sectors may connect
                    </p>

                    <div className={styles.columns}>
                      {example.contributions.map((contribution) => (
                        <div
                          key={contribution.sector}
                          className={styles.column}
                          data-accent={contribution.accent}
                        >
                          <h4 className={styles.columnLabel}>
                            {contribution.sector}
                          </h4>
                          <ul className={styles.columnList}>
                            {contribution.items.map((item) => (
                              <li key={item} className={styles.columnItem}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className={styles.result}>
                      <h4 className={styles.resultLabel}>Resulting experience</h4>
                      <p className={styles.resultText}>{example.result}</p>
                    </div>
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
