import Container from "@/components/layout/Container";
import AsgImageFrame from "./AsgImageFrame";
import Reveal from "@/components/ui/Reveal";
import { asgAssets, asgBrand } from "@/config/aunt-sarahs-girls";
import styles from "./AsgStoryWorld.module.css";

const details = [
  "The house exterior",
  "A warm sitting room",
  "An open journal",
  "A black front door",
  "A quiet hallway",
  "Family photographs",
  "A table prepared for conversation",
];

/** Section 2 — The story world. */
export default function AsgStoryWorld() {
  return (
    <section
      id="story-world"
      className={`section ${styles.wrap}`}
      aria-labelledby="asg-world-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <p className="eyebrow">The World of Aunt Sarah’s Girls</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="asg-world-heading" className={`section-heading ${styles.heading}`}>
              A House Filled With History. Women Carrying More Than Anyone Knows.
            </h2>
            <p className={`body ${styles.body}`}>
              Set in {asgBrand.setting}, Aunt Sarah’s Girls centers around Aunt
              Sarah’s family home—a place where women return carrying grief,
              shame, questions, secrets, survival, and the truths they have
              struggled to speak.
            </p>
            <p className={`body ${styles.body}`}>
              The house is more than a setting. It is where stories are
              remembered, difficult conversations begin, family patterns are
              confronted, and women are invited to lay down what they have been
              carrying.
            </p>
          </Reveal>

          <Reveal delay={120} className={styles.figure}>
            <AsgImageFrame
              src={asgAssets.house}
              alt="Aunt Sarah’s family home — the black front door open to the porch, framed by green trees in warm afternoon light."
              placeholderLabel="Aunt Sarah’s house — approved exterior or sitting-room artwork"
              placeholderNote="Asset required: black front door, green trees, warm light, a path to the porch"
              aspect="4/3"
            />
          </Reveal>
        </div>

        <Reveal delay={80}>
          <figure className={styles.quoteWrap}>
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className={`quote ${styles.quote}`}>
              Come on in. I’ve been waiting for you. Whatever you’ve been
              carrying, you do not have to carry it in here.
            </blockquote>
            <figcaption className={`caption ${styles.attribution}`}>
              Aunt Sarah
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <ul className={styles.details} aria-label="Visual details of the story world">
            {details.map((detail) => (
              <li key={detail} className={styles.detail}>
                {detail}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
