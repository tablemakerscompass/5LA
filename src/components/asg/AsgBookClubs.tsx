import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AsgStatusPill from "./AsgStatusPill";
import { discussionResources } from "@/config/aunt-sarahs-girls";
import styles from "./AsgBookClubs.module.css";

/** Section 11 — Book clubs & discussion partners. */
export default function AsgBookClubs() {
  return (
    <section
      id="book-clubs"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="asg-bookclubs-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <Reveal>
              <p className="eyebrow">Read Together. Talk Honestly.</p>
              <hr className={`rule ${styles.rule}`} />
              <h2
                id="asg-bookclubs-heading"
                className={`section-heading ${styles.heading}`}
              >
                Aunt Sarah’s Girls Is Built for Conversation.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className={`body ${styles.body}`}>
                The story is suited for book clubs, women’s groups, families,
                cultural organizations, faith communities, and community partners
                interested in exploring truth, communication, identity, family
                patterns, healing, and legacy.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <Button
                href="/work-with-us"
                variant="gold"
                size="lg"
                className={styles.cta}
              >
                Discuss a Book Club or Community Experience
              </Button>
            </Reveal>
          </div>

          <Reveal delay={120} className={styles.resources}>
            <h3 className={styles.subhead}>Companion resources</h3>
            <ul className={styles.list}>
              {discussionResources.map((resource) => (
                <li key={resource.title} className={styles.item}>
                  <span className={styles.itemTitle}>{resource.title}</span>
                  <AsgStatusPill status={resource.status} />
                </li>
              ))}
            </ul>
            <p className={`caption ${styles.note}`}>
              None of these resources is available for download yet. Each will be
              published here as it is completed and approved.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
