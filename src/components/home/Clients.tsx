import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { clients, clientsSection, type Client } from "@/config/clients";
import styles from "./Clients.module.css";

/**
 * The organizations 5LA has worked with — a low-weight roster that sits just
 * above the closing CTA, so proof lands before the ask.
 *
 * Entries with an approved logo render the mark (muted, resolving to full
 * color on hover). Entries without one render an editorial name treatment.
 * Both presentations share a cell, so a mixed roster still reads as one row.
 */

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

export default function Clients() {
  if (!clientsSection.enabled || clients.length === 0) return null;

  return (
    <section
      className={`section-tight ${styles.wrap}`}
      aria-labelledby="clients-heading"
    >
      <Container>
        <SectionIntro
          eyebrow={clientsSection.eyebrow}
          title={<span id="clients-heading">{clientsSection.title}</span>}
          lead={clientsSection.lead}
          align="center"
          divider
        />

        <ul className={styles.grid}>
          {clients.map((client, i) => (
            <Reveal as="li" key={client.name} delay={(i % 3) * 70} className={styles.cell}>
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

        {clientsSection.footnote && (
          <p className={`caption ${styles.footnote}`}>{clientsSection.footnote}</p>
        )}
      </Container>
    </section>
  );
}
