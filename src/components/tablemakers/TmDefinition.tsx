import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { tablemakerRoles } from "@/config/tablemakers";
import styles from "./TmDefinition.module.css";

/**
 * Section 2 — What is a Tablemaker.
 *
 * A strong editorial statement: no cards, no icons. The role list makes plain
 * that the name is about preparation and responsibility, never about furniture,
 * catering, or dining.
 */
export default function TmDefinition() {
  return (
    <section
      id="what-is-a-tablemaker"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="tm-definition-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.head}>
            <p className="eyebrow">The Meaning Behind the Name</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="tm-definition-heading" className={`section-heading ${styles.heading}`}>
              A Tablemaker Does More Than Take a Seat.
            </h2>
          </Reveal>

          <Reveal delay={100} className={styles.copy}>
            <p className={`body ${styles.body}`}>
              A Tablemaker understands that meaningful experiences do not happen
              by accident.
            </p>
            <p className={`body ${styles.body}`}>
              Someone prepares the environment. Someone establishes the standard.
              Someone develops the people. Someone anticipates what will be
              needed. Someone creates room for others to contribute, grow,
              belong, and succeed.
            </p>
            <p className={`body ${styles.emphasis}`}>That person is a Tablemaker.</p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <figure className={styles.quoteWrap}>
            <blockquote className={`quote ${styles.quote}`}>
              Tablemakers do not wait for the room to become what it needs to be.
              They help build it.
            </blockquote>
          </figure>
        </Reveal>

        <Reveal delay={120} className={styles.rolesBlock}>
          <h3 className={styles.subhead}>A Tablemaker may be</h3>
          <ul className={styles.roles}>
            {tablemakerRoles.map((role) => (
              <li key={role} className={styles.role}>
                {role}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
