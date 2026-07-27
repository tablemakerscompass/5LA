import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaAudience.module.css";

const audiences = [
  {
    title: "Authors and playwrights",
    body: "Creators developing books, plays, characters, story worlds, and audience experiences.",
  },
  {
    title: "Organizations with meaningful stories",
    body: "Businesses, nonprofits, communities, and institutions needing clearer brand, founder, culture, or impact storytelling.",
  },
  {
    title: "Producers and creative partners",
    body: "Teams developing theater, film, digital content, live experiences, or original properties.",
  },
  {
    title: "Women-focused organizations",
    body: "Groups creating conversations, programs, events, or experiences centered on truth, healing, family, identity, and purpose.",
  },
  {
    title: "Cultural and community organizations",
    body: "Partners preserving stories, creating gatherings, and developing experiences with community meaning.",
  },
  {
    title: "Experience-driven brands",
    body: "Organizations seeking to connect content, events, audience engagement, and brand story.",
  },
  {
    title: "Leaders developing original intellectual property",
    body: "Founders building methods, platforms, programs, communities, characters, media properties, or branded experiences.",
  },
];

/** Section 12 — who this sector serves. */
export default function MediaAudience() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="audience-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Who We Support"
          title={
            <span id="audience-heading">
              For Creators, Organizations, and Communities Building Work That
              Must Be Felt and Remembered.
            </span>
          }
          divider
        />

        <div className={styles.grid}>
          {audiences.map((audience, i) => (
            <Reveal
              key={audience.title}
              delay={(i % 3) * 70}
              className={styles.item}
            >
              <span className={styles.marker} aria-hidden="true" />
              <h3 className={`subheading ${styles.title}`}>{audience.title}</h3>
              <p className={`body ${styles.body}`}>{audience.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
