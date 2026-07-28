import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { conversationTopics, vxBrand } from "@/config/velaxity";
import styles from "./VxDemo.module.css";

/**
 * Sections 16 and 17 — Demo conversation, and implementation & subscription.
 *
 * PRICING: deliberately not published. The application has a final structure
 * on its own pricing page, but it is not approved for display on this site.
 * When it is, replace the holding copy below — do not add numbers before then.
 */
export default function VxDemo() {
  return (
    <section
      id="request-a-demo"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="vx-demo-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <Reveal>
              <p className="eyebrow">Explore VelaXity</p>
              <hr className={`rule ${styles.rule}`} />
              <h2 id="vx-demo-heading" className={`section-heading ${styles.heading}`}>
                See Whether VelaXity Fits the Way Your Organization Leads.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className={`body ${styles.body}`}>
                A VelaXity conversation should begin with the organization’s
                structure, leadership needs, current systems, priorities, and
                desired experience—not with a generic product demonstration.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className={styles.actions}>
                <Button href={vxBrand.demoPath} variant="gold" size="lg">
                  Request a VelaXity Demo
                </Button>
                <Button
                  href="/experience-sectors/technology"
                  variant="outline"
                  size="lg"
                >
                  Explore Technology Experience
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className={styles.topics}>
            <h3 className={styles.subhead}>What the conversation covers</h3>
            <ul className={styles.topicList}>
              {conversationTopics.map((topic) => (
                <li key={topic} className={styles.topic}>
                  {topic}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Section 17 — implementation & subscription, without pricing. */}
        <Reveal delay={80} className={styles.pricing}>
          <p className={`eyebrow ${styles.pricingEyebrow}`}>
            Implementation &amp; Subscription
          </p>
          <h3 className={styles.pricingHeading}>
            Configured Around the Organization—not Activated as a Generic
            Account.
          </h3>
          <p className={styles.pricingBody}>
            VelaXity requires implementation and organizational setup before
            subscription access. Final public pricing and package details will be
            displayed only after the billing structure, product scope, and
            included features are confirmed.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
