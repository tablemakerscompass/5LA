import Image from "next/image";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./Founder.module.css";

export default function Founder() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="founder-heading">
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.figureCol}>
            <div className={styles.imageFrame}>
              <Image
                src="/brand/5la-founder-headshot.jpg"
                alt="Corporate headshot of L.J., founder of The 5 Loaves Agency"
                width={1000}
                height={1500}
                sizes="(min-width: 900px) 34vw, 100vw"
                className={styles.image}
              />
            </div>
            <div className={styles.nameplate}>
              <p className={styles.name}>L.J.</p>
              <p className={styles.role}>Founder &amp; Experience Architect</p>
            </div>
          </Reveal>

          <Reveal delay={120} className={styles.text}>
            <p className="eyebrow">Founder &amp; Experience Architect</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="founder-heading" className="section-heading">
              L.J. — Building Structure Around Vision and Meaning Around Experience.
            </h2>
            <p className="body">
              L.J. is the founder of The 5 Loaves Agency and a hospitality,
              operations, events, workforce-development, media, and
              theatrical-production professional with more than 20 years of
              hands-on experience.
            </p>
            <p className="body">
              Her career has included leadership and operational roles, event
              strategy and execution, sales coordination, training development,
              culture building, content creation, and the writing, directing, and
              producing of more than 15 theatrical productions.
            </p>
            <p className="body">
              Across every role, the recurring assignment has remained the same:
              bring structure to the vision, develop the people responsible for
              carrying it, and create experiences that people can feel and
              remember.
            </p>
            <p className="body">
              Through 5LA, L.J. brings those disciplines together under one
              company—supporting businesses, developing original platforms,
              training professionals, and building media and storytelling
              properties designed to create impact and legacy.
            </p>

            <blockquote className={styles.quote}>
              <p className={styles.quoteText}>
                “I do not believe experience begins when the customer arrives. It
                begins with what the organization has built, what the people
                understand, and what the vision requires.”
              </p>
              <cite className={styles.signature}>L.J.</cite>
            </blockquote>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
