import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { asgCast, asgCastTagline, type AsgCastCard } from "@/config/aunt-sarahs-girls";
import styles from "./AsgCharacters.module.css";

/**
 * One card in the cast gallery. The gallery is anonymous by design: apart from
 * the announced Aunt Sarah credit, a card carries a photograph and its approved
 * description and nothing else, so readers can guess who is who. Cards without
 * an approved description fall back to the shared tagline. Nothing here —
 * including alt text and descriptions — may name an unrevealed character.
 */
function CastCard({ card }: { card: AsgCastCard }) {
  return (
    <li className={styles.item}>
      <figure className={styles.card}>
        <div className={styles.portrait}>
          {card.portrait ? (
            <Image
              src={card.portrait}
              alt={card.portraitAlt ?? "Cast portrait — character not yet revealed."}
              fill
              sizes="(min-width: 900px) 300px, 70vw"
              loading="lazy"
              className={styles.portraitImage}
            />
          ) : (
            <div className={styles.portraitPlaceholder}>
              <span className={styles.mark} aria-hidden="true">
                ?
              </span>
              <span className={styles.portraitNote}>Portrait coming soon</span>
            </div>
          )}
        </div>

        <figcaption className={styles.plate}>
          {card.credit && <p className={styles.credit}>{card.credit}</p>}
          <p className={styles.desc}>{card.description ?? asgCastTagline}</p>
        </figcaption>
      </figure>
    </li>
  );
}

/** Section 6 — The women of Aunt Sarah's Girls. */
export default function AsgCharacters() {
  return (
    <section
      id="the-women"
      className={`section ${styles.wrap}`}
      aria-labelledby="asg-characters-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="The Women at the Center"
          title={
            <span id="asg-characters-heading">
              Different Stories. Shared History. Truths That Can No Longer Remain
              Buried.
            </span>
          }
          lead="The cast, one portrait at a time. Names are staying behind the curtain for now — see who you can place."
          divider
        />
      </Container>

      <Reveal>
        {/* The row scrolls horizontally on small screens. It carries a tab stop
            and a label so keyboard and screen-reader users can reach and pan it
            without a pointer. */}
        <div
          className={styles.scroller}
          tabIndex={0}
          role="group"
          aria-label="Cast gallery — scrollable"
        >
          <ul className={styles.row}>
            {asgCast.map((card) => (
              <CastCard key={card.id} card={card} />
            ))}
          </ul>
        </div>
      </Reveal>

      <Container>
        <p className={`caption ${styles.note}`}>
          Casting, character artwork, and story details are released only as
          approved. Nothing on this page reveals story outcomes.
        </p>
      </Container>
    </section>
  );
}
