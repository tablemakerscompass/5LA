import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import TmStatusPill from "./TmStatusPill";
import { engagementGroups } from "@/config/tablemakers";
import styles from "./TmEngagement.module.css";

/**
 * Section 12 — Ways to engage.
 *
 * Each group carries its real status. Nothing here has a purchase or
 * registration button, because nothing is available to buy or register for.
 */
export default function TmEngagement() {
  return (
    <section
      id="ways-to-engage"
      className={`section ${styles.wrap}`}
      aria-labelledby="tm-engagement-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Ways to Engage"
          title={
            <span id="tm-engagement-heading">
              Tablemakers May Take Shape Through Content, Conversation, Learning,
              and Community.
            </span>
          }
          lead="Each group below is labeled with where it currently stands. None of it is open for registration or purchase today."
          divider
        />

        <div className={styles.groups}>
          {engagementGroups.map((group, i) => (
            <Reveal key={group.label} delay={(i % 3) * 60} className={styles.group}>
              <div className={styles.groupHead}>
                <h3 className={styles.groupLabel}>{group.label}</h3>
                <TmStatusPill status={group.status} />
              </div>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
