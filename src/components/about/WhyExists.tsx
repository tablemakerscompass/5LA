import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import EditorialImage from "@/components/ui/EditorialImage";
import styles from "./WhyExists.module.css";

export default function WhyExists() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="why-heading">
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.text}>
            <p className="eyebrow">Why We Exist</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="why-heading" className="section-heading">
              Great Experiences Are Built Long Before They Are Delivered.
            </h2>
            <p className="body">
              Every visible experience is supported by work that often goes unseen.
              Operations create consistency. Leadership establishes the standard.
              Training prepares people to deliver it. Technology supports the
              process. Story gives the experience meaning.
            </p>
            <p className="body">
              The 5 Loaves Agency was built to connect those elements. Rather than
              treating business operations, technology, workforce development,
              hospitality, media, and storytelling as isolated services, 5LA
              examines how they work together to shape what people ultimately
              experience.
            </p>
            <blockquote className={styles.pullquote}>
              The experience people remember is shaped by the structure they may
              never see.
            </blockquote>
          </Reveal>

          <Reveal delay={120} className={styles.figure}>
            <EditorialImage
              placeholderLabel="Behind-the-scenes / operations imagery"
              aspect="3/4"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
