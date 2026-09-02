"use client";

import { useState, useId } from "react";
import type { ReactNode } from "react";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./CapabilityAccordion.module.css";

export type Capability = {
  /** Sequential display number, e.g. "01". */
  n: string;
  title: string;
  statement: string;
  items: string[];
};

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  categories: Capability[];
  /** Anchor target, when something links to this section. */
  id?: string;
};

/**
 * The capability accordion shared by the pages that inherited content from the
 * retired Experience Sectors.
 *
 * Each sector page carried its own copy of this markup. When that content was
 * split across What We Do and the company pages, one shared component was the
 * only way to avoid a fifth and sixth copy of the same accordion.
 */
export default function CapabilityAccordion({
  eyebrow,
  title,
  lead,
  categories,
  id,
}: Props) {
  // First category open by default; each row toggles independently.
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });
  // Ids must be unique when two accordions appear on one page.
  const uid = useId();

  return (
    <section
      id={id}
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby={`${uid}-heading`}
    >
      <Container>
        <SectionIntro
          eyebrow={eyebrow}
          title={<span id={`${uid}-heading`}>{title}</span>}
          lead={lead}
          divider
        />

        <Reveal delay={100}>
          <ul className={styles.list}>
            {categories.map((category, i) => {
              const isOpen = !!open[i];
              const panelId = `${uid}-panel-${i}`;
              const btnId = `${uid}-button-${i}`;
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
