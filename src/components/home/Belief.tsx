import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./Belief.module.css";

export default function Belief() {
  return (
    <section className={`section ${styles.belief}`} aria-labelledby="belief-heading">
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.statementCol}>
            <hr className={`rule ${styles.rule}`} />
            <p id="belief-heading" className={`${styles.statement}`}>
              Experience is not one department. It is the result of everything
              working together.
            </p>
          </Reveal>
          <Reveal delay={120} className={styles.supportCol}>
            <p className={`body ${styles.support}`}>
              Every customer, employee, digital, live, and audience experience is
              shaped by the systems, people, technology, and stories behind it. At
              5LA, we bring those elements together to create experiences that are
              intentional, aligned, and built to last.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
