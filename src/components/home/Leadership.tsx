import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import EditorialImage from "@/components/ui/EditorialImage";
import styles from "./Leadership.module.css";

export default function Leadership() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="leadership-heading">
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.figure}>
            {/* PLACEHOLDER — replace with approved founder / leadership photo. */}
            <EditorialImage
              placeholderLabel="Founder / leadership photo"
              aspect="4/3"
            />
          </Reveal>

          <Reveal delay={120} className={styles.text}>
            <p className="eyebrow">Built From Experience</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="leadership-heading" className={`section-heading ${styles.heading}`}>
              Strategy Informed by Real Operations, Leadership, Hospitality, and
              Storytelling.
            </h2>
            <p className="body">
              The 5 Loaves Agency was founded from more than two decades of
              hands-on experience across hospitality, events, operations, workforce
              development, media, and theatrical production. That experience shapes
              a practical approach to solving problems, developing people, and
              transforming ideas into structured experiences.
            </p>
            <Button href="/about" variant="text">
              Meet the Vision Behind 5LA
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
