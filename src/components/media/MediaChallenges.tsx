import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaChallenges.module.css";

const challenges = [
  {
    n: "01",
    title: "A story without a development plan",
    body: "The idea has emotional or cultural value but lacks structure, format, audience strategy, or a clear path forward.",
  },
  {
    n: "02",
    title: "Content without a larger purpose",
    body: "Individual posts, videos, events, or campaigns exist without a connected narrative or long-term brand direction.",
  },
  {
    n: "03",
    title: "Strong creative work with weak operations",
    body: "Production timelines, budgets, partnerships, approvals, responsibilities, or delivery systems are unclear.",
  },
  {
    n: "04",
    title: "A brand that does not sound like itself",
    body: "Messaging changes across platforms, making the organization’s voice, values, and purpose difficult to recognize.",
  },
  {
    n: "05",
    title: "A live experience that ends when the room closes",
    body: "Events and productions are not extended through content, resources, digital experiences, or audience follow-up.",
  },
  {
    n: "06",
    title: "Original intellectual property without protection or structure",
    body: "Characters, stories, methods, programs, and concepts need clearer ownership, documentation, brand architecture, and development planning.",
  },
  {
    n: "07",
    title: "An audience that is not being nurtured",
    body: "People may engage once but are not given a reason or pathway to remain connected.",
  },
  {
    n: "08",
    title: "Meaningful work presented without emotional depth",
    body: "The content communicates information but does not create feeling, reflection, conversation, or memory.",
  },
];

/** Section 3 — common challenges, set as a ruled editorial index. */
export default function MediaChallenges() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="challenges-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Common Media &amp; Storytelling Challenges"
          title={
            <span id="challenges-heading">
              When the Idea Is Strong but the Path to the Audience Is Unclear.
            </span>
          }
          divider
        />

        <ol className={styles.list}>
          {challenges.map((c, i) => (
            <Reveal as="li" key={c.n} delay={(i % 2) * 70} className={styles.item}>
              <span className={`numeral ${styles.n}`} aria-hidden="true">
                {c.n}
              </span>
              <div className={styles.text}>
                <h3 className={`subheading ${styles.title}`}>{c.title}</h3>
                <p className={`body ${styles.body}`}>{c.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
