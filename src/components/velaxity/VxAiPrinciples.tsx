import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { aiPrinciples, vxBrand } from "@/config/velaxity";
import styles from "./VxAiPrinciples.module.css";

/**
 * Section 6 — How AI works within VelaXity.
 *
 * The closing note states plainly what the platform's intelligence is and is
 * not today, so the six principles are read as intent rather than as a
 * description of shipped generative features.
 */
export default function VxAiPrinciples() {
  return (
    <section
      id="how-ai-works"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="vx-ai-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="AI With Organizational Context"
          title={
            <span id="vx-ai-heading">
              AI Is More Useful When It Understands the Work It Is Supporting.
            </span>
          }
          divider
        />

        <Reveal delay={60} className={styles.intro}>
          <p className={`body ${styles.body}`}>
            VelaXity is designed to move beyond generic questions and isolated
            prompts by connecting AI support to the organization’s leadership
            context, standards, priorities, teams, learning, and operating
            environment.
          </p>
          <p className={`body ${styles.body}`}>
            The goal is not to replace leadership judgment. The goal is to
            reduce friction, organize information, support preparation, and help
            leaders ask better questions.
          </p>
        </Reveal>

        <dl className={styles.principles}>
          {aiPrinciples.map((principle, i) => (
            <Reveal
              key={principle.title}
              delay={(i % 3) * 70}
              className={styles.principle}
            >
              <dt className={styles.term}>{principle.title}</dt>
              <dd className={styles.desc}>{principle.body}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={80}>
          <p className={styles.note}>
            <span className={styles.noteLabel}>Where the platform is today</span>
            {vxBrand.aiNote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
