import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./BusinessDeliverables.module.css";

const deliverables = [
  "Operational assessment",
  "Business-experience strategy",
  "SOP manual",
  "Employee handbook support",
  "Manager toolkit",
  "Service-standard guide",
  "Guest-experience map",
  "Organizational structure",
  "Roles and responsibility matrix",
  "Leadership operating rhythm",
  "Training plan",
  "Implementation roadmap",
  "Event operating plan",
  "Launch strategy",
  "Culture framework",
  "HR forms and workflows",
];

/** Section 6 — possible deliverables as a typographic index. */
export default function BusinessDeliverables() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="deliverables-heading"
    >
      <Container>
        <div className={styles.layout}>
          <SectionIntro
            eyebrow="Possible Deliverables"
            title={
              <span id="deliverables-heading">
                The Work May Look Different Depending on the Need.
              </span>
            }
            divider
            className={styles.intro}
          />

          <Reveal delay={100} className={styles.listWrap}>
            <ul className={styles.list}>
              {deliverables.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <p className={styles.statement}>
            Deliverables are selected based on the challenge. 5LA does not force
            every organization into the same package or process.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
