import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { architectureLayers, vxBrand } from "@/config/velaxity";
import styles from "./VxArchitecture.module.css";

/**
 * Section 4 — What VelaXity is.
 *
 * A layered platform map rather than a circular infographic: a labelled core
 * with three named layers beneath it. The markup is an ordered list of layers,
 * each with its own list of members, so a screen reader hears the structure in
 * the same order it reads visually — and it stacks to a clean vertical flow.
 */
export default function VxArchitecture() {
  return (
    <section
      id="the-platform"
      className={`section ${styles.wrap}`}
      aria-labelledby="vx-architecture-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">The Platform</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="vx-architecture-heading"
              className={`section-heading ${styles.heading}`}
            >
              An Executive Operating Environment Built Around the Organization.
            </h2>
          </Reveal>
          <Reveal delay={90} className={styles.intro}>
            <p className={`body ${styles.body}`}>
              VelaXity is designed as a connected leadership environment rather
              than a single-purpose application.
            </p>
            <p className={`body ${styles.body}`}>
              It brings together executive insight, AI support, standards,
              learning, team information, client or portfolio visibility, and
              predictive thinking so leaders can move through the organization
              with greater clarity.
            </p>
          </Reveal>
        </div>

        <Reveal delay={60} className={styles.map}>
          <div className={styles.core}>
            <span className={styles.coreLabel}>The core</span>
            <span className={styles.coreName}>{vxBrand.name}</span>
            <span className={styles.coreNote}>
              One executive environment
            </span>
          </div>
          <span className={styles.spine} aria-hidden="true" />

          <ol className={styles.layers}>
            {architectureLayers.map((layer, i) => (
              <li key={layer.label} className={styles.layer}>
                <div className={styles.layerHead}>
                  <span className={styles.layerIndex} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.layerLabel}>{layer.label}</h3>
                </div>
                <ul className={styles.members}>
                  {layer.members.map((member) => (
                    <li key={member} className={styles.member}>
                      {member}
                    </li>
                  ))}
                </ul>
                <p className={styles.layerNote}>{layer.note}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
