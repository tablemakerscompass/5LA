import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { asgCharacters, type AsgCharacter } from "@/config/aunt-sarahs-girls";
import styles from "./AsgCharacters.module.css";

/**
 * One character in the gallery. Every descriptive field is optional: until
 * approved, spoiler-free copy and approved artwork are supplied, the card shows
 * the approved public name and a clearly-labelled placeholder. Nothing about a
 * character is inferred or invented.
 */
function CharacterCard({ character }: { character: AsgCharacter }) {
  const fullName = character.alsoKnownAs
    ? `${character.name}, also known as ${character.alsoKnownAs}`
    : character.name;

  const body = (
    <>
      <div className={styles.portrait}>
        {character.portrait ? (
          <Image
            src={character.portrait}
            alt={
              character.portraitAlt ??
              `Approved character portrait of ${fullName} from Aunt Sarah’s Girls.`
            }
            fill
            sizes="(min-width: 900px) 300px, 70vw"
            loading="lazy"
            className={styles.portraitImage}
          />
        ) : (
          <div className={styles.portraitPlaceholder}>
            <span className={styles.initial} aria-hidden="true">
              {character.name.charAt(0)}
            </span>
            <span className={styles.portraitNote}>
              Approved portrait required
            </span>
          </div>
        )}
      </div>

      <div className={styles.plate}>
        <h3 className={styles.name}>
          {character.name}
          {character.alsoKnownAs && (
            <span className={styles.aka}>
              also known as {character.alsoKnownAs}
            </span>
          )}
        </h3>

        {character.theme && (
          <p className={styles.theme}>{character.theme}</p>
        )}

        <p className={styles.desc}>
          {character.description ?? (
            <span className={styles.pendingCopy}>
              Character description pending approval.
            </span>
          )}
        </p>

        {character.connection && (
          <p className={styles.connection}>{character.connection}</p>
        )}

        {character.quote && (
          <blockquote className={styles.quote}>
            &ldquo;{character.quote}&rdquo;
          </blockquote>
        )}

        {character.href && (
          <span className={styles.cue}>
            Read more <span aria-hidden="true">&rarr;</span>
          </span>
        )}
      </div>
    </>
  );

  if (character.href) {
    return (
      <li className={styles.item}>
        <Link href={character.href} className={`${styles.card} ${styles.linked}`}>
          {body}
        </Link>
      </li>
    );
  }

  return (
    <li className={styles.item}>
      <article className={styles.card} aria-label={fullName}>
        {body}
      </article>
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
          lead="Approved public names are listed below. Portraits and spoiler-free descriptions are added as each is approved for release."
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
          aria-label="Character gallery — scrollable"
        >
          <ul className={styles.row}>
            {asgCharacters.map((character) => (
              <CharacterCard key={character.name} character={character} />
            ))}
          </ul>
        </div>
      </Reveal>

      <Container>
        <p className={`caption ${styles.note}`}>
          Character artwork, biographies, relationships, and story details are
          released only as approved. Nothing on this page reveals story outcomes.
        </p>
      </Container>
    </section>
  );
}
