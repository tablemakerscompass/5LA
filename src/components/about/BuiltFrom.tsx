import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import EditorialImage from "@/components/ui/EditorialImage";
import styles from "./BuiltFrom.module.css";

export default function BuiltFrom() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="builtfrom-heading">
      <Container>
        <div className={styles.grid}>
          <Reveal delay={120} className={styles.figure}>
            {/* PLACEHOLDER — replace with approved leadership / operations photo. */}
            <EditorialImage
              placeholderLabel="Leadership / operations photo"
              aspect="3/4"
            />
          </Reveal>

          <Reveal className={styles.text}>
            <p className="eyebrow">Built From Experience</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="builtfrom-heading" className="section-heading">
              Practical Strategy Shaped by More Than Two Decades of Doing the Work.
            </h2>
            <p className="body">
              The foundation of 5LA was developed through more than two decades of
              hands-on work across hospitality, events, operations, workforce
              development, sales coordination, training, media, theatrical
              production, and experience management.
            </p>
            <p className="body">
              This background allows 5LA to approach organizations from both the
              strategic and practical side. We understand that an idea can be
              powerful and still fail without structure. We understand that a
              beautiful customer-facing experience can be weakened by inconsistent
              operations. We understand that employees cannot deliver a standard
              they have not been taught, supported, and equipped to carry.
            </p>
            <p className={`body ${styles.close}`}>
              5LA was created to help close those gaps.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
