import Image from "next/image";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./OurStory.module.css";

/**
 * Our Story — why 5LA exists, and the two decades of hospitality, events, and
 * operations work it was built on.
 *
 * This is the old "Why We Exist" and "Built From Experience" sections merged.
 * They were making the same argument from two directions — the structure
 * behind an experience, and the experience of having built that structure —
 * across two full-bleed image rows. One section makes the point once.
 */
export default function OurStory() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="story-heading">
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.text}>
            <p className="eyebrow">Why We Exist</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="story-heading" className="section-heading">
              Great Experiences Are Built Long Before They Are Delivered.
            </h2>
            <p className="body">
              Every visible experience is supported by work that often goes unseen.
              Operations create consistency. Leadership establishes the standard.
              Training prepares people to deliver it. Story gives the experience
              meaning.
            </p>
            <p className="body">
              The 5 Loaves Agency was built on more than two decades of hands-on
              work across hospitality, events, operations, workforce development,
              training, media, and theatrical production. That background lets us
              approach an organization from both the strategic and the practical
              side. An idea can be powerful and still fail without structure. A
              beautiful guest-facing experience can be undone by inconsistent
              operations. Employees cannot deliver a standard they were never
              taught, supported, or equipped to carry.
            </p>
            <p className={`body ${styles.close}`}>
              5LA was created to help close those gaps.
            </p>
            <blockquote className={styles.pullquote}>
              The experience people remember is shaped by the structure they may
              never see.
            </blockquote>
          </Reveal>

          <Reveal delay={120} className={styles.figure}>
            <div className={styles.imageFrame}>
              <Image
                src="/brand/5la-why-exists.jpg"
                alt="A leader reviewing plans and materials while a team prepares an elegant setting in the background"
                width={1000}
                height={1250}
                sizes="(min-width: 900px) 40vw, 100vw"
                className={styles.image}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
