import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./Different.module.css";

const distinctions = [
  {
    a: "Strategy",
    b: "Implementation",
    body: "We do not stop at recommendations. Our work is grounded in what it will take to build, introduce, teach, and sustain the solution.",
  },
  {
    a: "Operations",
    b: "Humanity",
    body: "We believe efficiency should support people—not remove care, dignity, judgment, or connection from the experience.",
  },
  {
    a: "Business",
    b: "Creativity",
    body: "We understand both structure and storytelling, allowing us to build solutions that work operationally and connect emotionally.",
  },
  {
    a: "Vision",
    b: "Accountability",
    body: "We respect bold ideas while helping leaders identify the standards, decisions, systems, and responsibilities required to bring them to life.",
  },
];

export default function Different() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="different-heading">
      <Container>
        <SectionIntro
          eyebrow="The 5LA Difference"
          title={<span id="different-heading">We Connect What Other Providers Often Separate.</span>}
          divider
        />
        <div className={styles.grid}>
          {distinctions.map((d, i) => (
            <Reveal key={d.a} delay={(i % 2) * 80} className={styles.item}>
              <p className={`${styles.pair}`}>
                <span>{d.a}</span>
                <span className={styles.amp} aria-hidden="true">
                  &amp;
                </span>
                <span>{d.b}</span>
              </p>
              <p className={`body ${styles.body}`}>{d.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
