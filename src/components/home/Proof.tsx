import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { clients, clientsSection, type Client } from "@/config/clients";
import { articles, getArticle } from "@/config/articles";
import styles from "./Proof.module.css";

/**
 * Proof — the organizations 5LA has worked with, followed by a single featured
 * insight.
 *
 * This is the old "Who We've Worked With" roster and the old three-post
 * insights grid folded into one section. Three posts made the homepage read
 * like a publication; one post, chosen for the sector the company now leads
 * with, is enough to show there is thinking behind the work. The full library
 * is one link away.
 *
 * Entries with an approved logo render the mark (muted, resolving to full
 * color on hover). Entries without one render an editorial name treatment.
 * Both presentations share a cell, so a mixed roster still reads as one row.
 */

/** The featured post, chosen for the hospitality / events / business lead. */
const FEATURED_SLUG = "future-of-events-is-more-meaningful";

function ClientMark({ client }: { client: Client }) {
  const hasLogo = Boolean(client.logo && client.logoWidth && client.logoHeight);

  return (
    <>
      {hasLogo ? (
        <Image
          src={client.logo!}
          alt={client.name}
          width={client.logoWidth!}
          height={client.logoHeight!}
          className={styles.logo}
        />
      ) : (
        <span className={styles.name}>{client.name}</span>
      )}
      {clientsSection.showDescriptors && client.descriptor && (
        <span className={styles.descriptor}>{client.descriptor}</span>
      )}
    </>
  );
}

export default function Proof() {
  const showRoster = clientsSection.enabled && clients.length > 0;
  /* Falls back to the most recent article if the featured slug is ever retired. */
  const featured = getArticle(FEATURED_SLUG) ?? articles[0];

  if (!showRoster && !featured) return null;

  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="proof-heading">
      <Container>
        <SectionIntro
          eyebrow={clientsSection.eyebrow}
          title={<span id="proof-heading">{clientsSection.title}</span>}
          lead={clientsSection.lead}
          align="center"
          divider
        />

        {showRoster && (
          <ul className={styles.grid}>
            {clients.map((client, i) => (
              <Reveal
                as="li"
                key={client.name}
                delay={(i % 3) * 70}
                className={styles.cell}
              >
                {client.href ? (
                  <a
                    href={client.href}
                    className={styles.item}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ClientMark client={client} />
                  </a>
                ) : (
                  <div className={styles.item}>
                    <ClientMark client={client} />
                  </div>
                )}
              </Reveal>
            ))}
          </ul>
        )}

        {clientsSection.footnote && (
          <p className={`caption ${styles.footnote}`}>{clientsSection.footnote}</p>
        )}

        {featured && (
          <Reveal delay={120} className={styles.insight}>
            <p className={`eyebrow ${styles.insightEyebrow}`}>The Tablemakers Compass</p>
            <Link href={`/insights/${featured.slug}`} className={styles.card}>
              <div className={styles.cardMedia}>
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  sizes="(min-width: 860px) 40vw, 90vw"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.category}>{featured.category}</span>
                <h3 className={`subheading ${styles.title}`}>{featured.title}</h3>
                <p className={`body ${styles.excerpt}`}>{featured.excerpt}</p>
                <span className={styles.readMore} aria-hidden="true">
                  Read the Insight <span className={styles.arrow}>&rarr;</span>
                </span>
              </div>
            </Link>
            <div className={styles.insightCta}>
              <Button href="/insights" variant="text">
                Read More from the Compass
              </Button>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
