import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./SmAsgConnection.module.css";

/**
 * Section 8 — Connection to Aunt Sarah's Girls.
 *
 * The two brands are kept visually distinct: this section describes the
 * relationship in words and links out, rather than merging the identities.
 */
export default function SmAsgConnection() {
  return (
    <section
      id="from-story-to-reflection"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="sm-asg-heading"
    >
      <Container narrow>
        <p className="eyebrow">From Story to Personal Reflection</p>
        <hr className={`rule ${styles.rule}`} />
        <h2 id="sm-asg-heading" className={`section-heading ${styles.heading}`}>
          The Story Opens the Door. The Sarah Method Helps Women Continue the
          Conversation.
        </h2>

        <Reveal delay={80} className={styles.copy}>
          <p className={`body ${styles.body}`}>
            Aunt Sarah’s Girls explores family secrets, womanhood, survival,
            identity, communication, and legacy through literature and theater.
          </p>
          <p className={`body ${styles.body}`}>
            The Sarah Method carries those themes into a private guided
            experience where women can consider how similar questions, patterns,
            silences, and truths may appear within their own lives.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className={styles.relationship}>
            <div className={styles.side}>
              <span className={styles.sideLabel}>The original property</span>
              <span className={styles.sideName}>Aunt Sarah’s Girls</span>
              <span className={styles.sideRole}>
                Literary and theatrical
              </span>
            </div>
            <span className={styles.link} aria-hidden="true" />
            <div className={styles.side}>
              <span className={styles.sideLabel}>The companion platform</span>
              <span className={styles.sideName}>The Sarah Method</span>
              <span className={styles.sideRole}>
                Digital guided reflection
              </span>
            </div>
          </div>
          <p className={`caption ${styles.statement}`}>
            Aunt Sarah’s Girls is the original literary and theatrical property.
            The Sarah Method is a companion digital reflection platform inspired
            by its themes and voice.
          </p>
        </Reveal>

        <Reveal delay={180} className={styles.ctaWrap}>
          <Button
            href="/aunt-sarahs-girls"
            variant="gold"
            size="lg"
            className={styles.cta}
          >
            Explore Aunt Sarah’s Girls
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
