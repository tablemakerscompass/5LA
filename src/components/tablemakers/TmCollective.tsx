import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import TmPendingAction from "./TmPendingAction";
import TmStatusPill from "./TmStatusPill";
import { collectiveFormats, tmBrand } from "@/config/tablemakers";
import styles from "./TmCollective.module.css";

/**
 * Section 6 — The Tablemakers Collective.
 *
 * VERIFIED: no Collective destination exists. No Meetup group, no community
 * platform, no signup, no scheduled gathering — all three repositories and the
 * company Drive were searched. So there is no "Join" button here: joining is
 * shown as inert text with the reason, and the one live action points at Work
 * With Us, which is a real route.
 *
 * Every format below carries its real status. None is running today.
 */
export default function TmCollective() {
  return (
    <section
      id="the-collective"
      className={`section ${styles.wrap}`}
      aria-labelledby="tm-collective-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Community in Practice</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="tm-collective-heading" className={`section-heading ${styles.heading}`}>
              The Tablemakers Collective: A Place for Conversation, Connection,
              and Continued Development
            </h2>
          </Reveal>
          <Reveal delay={100} className={styles.intro}>
            <p className={`body ${styles.body}`}>
              The Tablemakers Collective is the community expression of the
              Tablemakers platform.
            </p>
            <p className={`body ${styles.body}`}>
              It is designed to bring together professionals responsible for
              leadership, hospitality, operations, culture, service, and
              experience through thoughtful conversations, shared learning,
              professional connection, and future community experiences.
            </p>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <p className={styles.statusNote}>{tmBrand.statusNote}</p>
        </Reveal>

        <ul className={styles.formats}>
          {collectiveFormats.map((format, i) => (
            <Reveal
              key={format.title}
              as="li"
              delay={(i % 3) * 50}
              className={styles.format}
            >
              <span className={styles.formatTitle}>{format.title}</span>
              <TmStatusPill status={format.status} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={80} className={styles.actions}>
          <TmPendingAction
            label="Join the Tablemakers Collective"
            note="No community destination yet — this opens when the Collective does"
          />
          <div className={styles.realAction}>
            <p className={styles.realActionNote}>
              In the meantime, the way in is a conversation.
            </p>
            <Button href={tmBrand.connectPath} variant="primary" size="lg">
              Connect With Tablemakers
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
