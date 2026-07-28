import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import VxStatusPill from "./VxStatusPill";
import { identityComponents } from "@/config/velaxity";
import styles from "./VxIdentitySuite.module.css";

/**
 * Section 10 — Organizational Identity Suite.
 *
 * VERIFIED: the components marked available are captured during onboarding or
 * configuration today. The rest carry their real status. This is configuration,
 * not white-label software — no branded domain, custom app, or isolated
 * infrastructure is offered.
 */
export default function VxIdentitySuite() {
  return (
    <section
      id="organizational-identity"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="vx-identity-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Built Around Your Organization"
          title={
            <span id="vx-identity-heading">
              VelaXity Should Reflect the Organization It Is Supporting.
            </span>
          }
          divider
        />

        <Reveal delay={60} className={styles.intro}>
          <p className={`body ${styles.body}`}>
            The Organizational Identity Suite is intended to help VelaXity
            understand and reflect the organization’s approved language,
            leadership expectations, values, standards, structure, and operating
            context.
          </p>
          <p className={`body ${styles.body}`}>
            Much of it is established during setup, with a member of the team
            configuring the workspace alongside the organization. Each component
            below carries its current status.
          </p>
        </Reveal>

        <ul className={styles.list}>
          {identityComponents.map((component, i) => (
            <Reveal
              key={component.label}
              as="li"
              delay={(i % 3) * 50}
              className={styles.item}
            >
              <span className={styles.label}>{component.label}</span>
              <VxStatusPill status={component.status} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={80}>
          <p className={`caption ${styles.note}`}>
            This is organizational configuration, not white-label software.
            VelaXity does not currently offer branded domains, custom
            applications, or isolated infrastructure, and personalization is
            established through setup rather than applied automatically.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
