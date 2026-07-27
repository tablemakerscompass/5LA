import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbsAudience.module.css";

const audiences = [
  {
    title: "Families",
    body: "Those seeking to preserve memories, document family stories, strengthen intergenerational connection, or honor a loved one’s legacy.",
  },
  {
    title: "Women and women-focused groups",
    body: "Communities creating space for truth, healing-centered reflection, identity, family, purpose, and shared experience.",
  },
  {
    title: "Community organizations",
    body: "Groups developing cultural programs, intergenerational conversations, story-preservation work, or community gatherings.",
  },
  {
    title: "Faith and service communities",
    body: "Organizations interested in aligned programs centered on family, care, service, truth, reflection, and legacy. The Society is not affiliated with any religious body.",
  },
  {
    title: "Cultural institutions",
    body: "Libraries, theaters, museums, schools, arts organizations, and community spaces interested in storytelling and legacy partnerships.",
  },
  {
    title: "Elder and youth programs",
    body: "Groups interested in connecting generations through conversation, oral history, creativity, and shared learning.",
  },
  {
    title: "Creative and media partners",
    body: "Writers, photographers, filmmakers, producers, facilitators, and storytellers supporting respectful legacy work.",
  },
];

/** Section 9 — who the Society may serve. */
export default function GbsAudience() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="audience-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Who We Hope to Gather"
          title={
            <span id="audience-heading">
              For Families, Women, Communities, and Organizations That Believe
              Stories Matter.
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

        <Reveal delay={140}>
          <p className={styles.note}>
            No formal institutional relationships are implied. Conversations
            begin with shared purpose and alignment on how stories are handled.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
