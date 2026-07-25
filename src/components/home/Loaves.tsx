import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./Loaves.module.css";

const values = [
  { letter: "L", word: "Leadership", def: "Setting direction with clarity, responsibility, and intention." },
  { letter: "O", word: "Ownership", def: "Taking responsibility for the standard, the work, and the outcome." },
  { letter: "A", word: "Alignment", def: "Ensuring people, systems, and priorities move together." },
  { letter: "V", word: "Vision", def: "Seeing what is possible and creating a path toward it." },
  { letter: "E", word: "Excellence", def: "Delivering with care, consistency, and attention to detail." },
  { letter: "S", word: "Service", def: "Building experiences around the needs and dignity of people." },
];

export default function Loaves() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="loaves-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Our Standard</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="loaves-heading" className={`section-heading ${styles.heading}`}>
              Built on the LOAVES Framework.
            </h2>
          </Reveal>
          <Reveal delay={120} className={styles.introCol}>
            <p className="body">
              The LOAVES framework guides how we lead, build, train, create, and
              serve. It is the standard connecting every sector, engagement,
              program, and experience within 5LA.
            </p>
          </Reveal>
        </div>

        <ul className={styles.list}>
          {values.map((v, i) => (
            <Reveal key={v.letter} as="li" delay={i * 60} className={styles.item}>
              <span className={styles.letter} aria-hidden="true">
                {v.letter}
              </span>
              <div className={styles.itemText}>
                <h3 className={`subheading ${styles.word}`}>{v.word}</h3>
                <p className={styles.def}>{v.def}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className={styles.ctaWrap}>
          <Button href="/about" variant="text">
            Discover Our Approach
          </Button>
        </div>
      </Container>
    </section>
  );
}
