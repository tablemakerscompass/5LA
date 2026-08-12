import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import TmPendingAction from "./TmPendingAction";
import { tmBrand } from "@/config/tablemakers";
import { compassArticles } from "@/config/articles";
import styles from "./TmJoin.module.css";

/**
 * Section 17 — Join or follow Tablemakers.
 *
 * Every live action is a real route: a conversation through Work With Us, the
 * Academy page, and — once a Compass piece exists — the published Compass. The
 * Collective and upcoming gatherings stay inert text with the reason, because
 * neither has a destination. No signup, no membership, no event calendar —
 * none of that has been built.
 */
export default function TmJoin() {
  const latestCompass = compassArticles[0];

  return (
    <section
      id="join-tablemakers"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="tm-join-heading"
    >
      <Container narrow>
        <p className="eyebrow">Find Your Place at the Table</p>
        <hr className={`rule ${styles.rule}`} />
        <h2 id="tm-join-heading" className={`section-heading ${styles.heading}`}>
          You Do Not Need a Certain Title to Begin Carrying the Standard.
        </h2>

        <Reveal delay={80}>
          <p className={`body ${styles.body}`}>
            Tablemakers welcomes professionals who understand that leadership,
            hospitality, culture, operations, and service are connected—and that
            stronger experiences begin with people willing to prepare the
            environment.
          </p>
        </Reveal>

        <Reveal delay={120} className={styles.live}>
          <h3 className={styles.subhead}>Open today</h3>
          <div className={styles.actions}>
            <Button href={tmBrand.connectPath} variant="gold" size="lg">
              Connect With Tablemakers
            </Button>
            <Button href="/our-companies/5la-academy" variant="outline" size="lg">
              Explore The 5LA Academy
            </Button>
            {latestCompass && (
              <Button
                href={`/insights/${latestCompass.slug}`}
                variant="outline"
                size="lg"
              >
                Read The Tablemakers Compass
              </Button>
            )}
          </div>
        </Reveal>

        <Reveal delay={160} className={styles.pending}>
          <h3 className={styles.subhead}>Opening later</h3>
          <div className={styles.pendingRow}>
            <TmPendingAction
              label="Join the Tablemakers Collective"
              note="No community destination yet"
            />
            {!latestCompass && (
              <TmPendingAction
                label="Follow The Tablemakers Compass"
                note="No article published yet"
              />
            )}
            <TmPendingAction
              label="Attend an upcoming conversation"
              note="No gathering scheduled yet"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
