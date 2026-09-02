import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { acBrand, inquiryTopics } from "@/config/academy";
import styles from "./AcInquiry.module.css";

/**
 * Section 18 — Training inquiry.
 * No public scheduling or calendar embed: neither is approved.
 */
export default function AcInquiry() {
  return (
    <section
      id="training-inquiry"
      className={`section ${styles.wrap}`}
      aria-labelledby="ac-inquiry-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <Reveal>
              <p className="eyebrow">Start a Learning Conversation</p>
              <hr className={`rule ${styles.rule}`} />
              <h2
                id="ac-inquiry-heading"
                className={`section-heading ${styles.heading}`}
              >
                What Do Your People Need to Understand, Practice, and Deliver
                More Consistently?
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className={`body ${styles.body}`}>
                An Academy conversation should begin with the audience, the
                challenge, the desired behavior, the operating environment, and
                the experience the organization needs its people to create.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className={styles.actions}>
                <Button href={acBrand.inquiryPath} variant="primary" size="lg">
                  Discuss Organizational Training
                </Button>
                <Button
                  href="/our-companies/5la-academy"
                  variant="outline"
                  size="lg"
                >
                  Explore Training Experience
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className={styles.topics}>
            <h3 className={styles.subhead}>What we usually start with</h3>
            <ul className={styles.topicList}>
              {inquiryTopics.map((topic) => (
                <li key={topic} className={styles.topic}>
                  {topic}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
