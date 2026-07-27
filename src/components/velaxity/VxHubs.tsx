import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import VxStatusPill from "./VxStatusPill";
import { hubs } from "@/config/velaxity";
import styles from "./VxHubs.module.css";

/**
 * Section 5 — The VelaXity hubs.
 *
 * Seven full-width panels, all content visible: no accordion, no tabs, no
 * hover-revealed detail. Everything a reader needs is in the document at page
 * load, which keeps it usable by keyboard, touch, and screen reader alike.
 *
 * Each hub carries its own availability label, each capability that differs
 * from its hub carries its own, and each panel ends with a plainly-stated
 * limit so no reader over-reads what the hub does.
 */
export default function VxHubs() {
  return (
    <section
      id="the-hubs"
      className={`section ${styles.wrap}`}
      aria-labelledby="vx-hubs-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="One Platform · Connected Hubs"
          title={
            <span id="vx-hubs-heading">
              Each Hub Supports a Different Part of the Leadership Experience.
            </span>
          }
          lead="Capabilities listed without a label are in the platform today. Anything still being built says so."
          divider
        />

        <div className={styles.list}>
          {hubs.map((hub, i) => (
            <Reveal
              key={hub.id}
              delay={(i % 2) * 70}
              className={styles.panel}
            >
              <article aria-labelledby={`hub-${hub.id}-heading`}>
                <div className={styles.panelHead}>
                  <div className={styles.titleRow}>
                    <span className={styles.index} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      id={`hub-${hub.id}-heading`}
                      className={styles.name}
                    >
                      {hub.name}
                    </h3>
                  </div>
                  <VxStatusPill status={hub.status} />
                </div>

                <p className={styles.positioning}>{hub.positioning}</p>

                <div className={styles.areasBlock}>
                  <h4 className={styles.areasLabel}>What it holds</h4>
                  <ul className={styles.areas}>
                    {hub.areas.map((area) => (
                      <li key={area.label} className={styles.area}>
                        <span className={styles.areaLabel}>{area.label}</span>
                        {area.status && (
                          <VxStatusPill
                            status={area.status}
                            className={styles.areaPill}
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {hub.limit && (
                  <p className={styles.limit}>
                    <span className={styles.limitLabel}>Worth knowing:</span>{" "}
                    {hub.limit}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
