import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbPartners.module.css";

const partners = [
  {
    title: "Authors and playwrights",
    body: "Creators developing books, scripts, characters, story worlds, or adaptation pathways.",
  },
  {
    title: "Producers and creative teams",
    body: "Partners building theater, filmed work, digital storytelling, live experiences, or original properties.",
  },
  {
    title: "Cultural and community organizations",
    body: "Groups developing stories, events, conversations, and experiences with community meaning.",
  },
  {
    title: "Women-focused organizations",
    body: "Partners creating programs, discussions, productions, or resources centered on truth, healing, family, identity, and purpose.",
  },
  {
    title: "Venues and experience partners",
    body: "Theaters, event spaces, cultural venues, and organizations interested in hosting or supporting aligned work.",
  },
  {
    title: "Publishers and distribution partners",
    body: "Organizations exploring aligned publishing, production, distribution, or audience-development opportunities.",
  },
  {
    title: "Brands with meaningful stories",
    body: "Organizations seeking founder, legacy, culture, community, or audience-centered storytelling.",
  },
];

/** Section 9 — who the Media Group may work with. */
export default function GbPartners() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="partners-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Creative &amp; Cultural Partnerships"
          title={
            <span id="partners-heading">
              For Creators, Organizations, and Communities Building Work That
              Must Be Felt and Remembered.
            </span>
          }
          divider
        />

        <div className={styles.grid}>
          {partners.map((partner, i) => (
            <Reveal
              key={partner.title}
              delay={(i % 3) * 70}
              className={styles.item}
            >
              <span className={styles.marker} aria-hidden="true" />
              <h3 className={`subheading ${styles.title}`}>{partner.title}</h3>
              <p className={`body ${styles.body}`}>{partner.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className={styles.note}>
            Conversations begin with fit. Not every inquiry will move forward,
            and alignment on purpose, audience, and standard comes first.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
