import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { acBrand, orgProcess, orgTrainingAreas } from "@/config/academy";
import styles from "./AcOrgTraining.module.css";

/** Section 10 — Organizational training. */
export default function AcOrgTraining() {
  return (
    <section
      id="organizational-training"
      className={`section ${styles.wrap}`}
      aria-labelledby="ac-org-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Built for Your Organization</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="ac-org-heading" className={`section-heading ${styles.heading}`}>
              Training Is Stronger When It Reflects the Standards People Are
              Actually Expected to Deliver.
            </h2>
          </Reveal>
          <Reveal delay={100} className={styles.intro}>
            <p className={`body ${styles.body}`}>
              The 5LA Academy can work with organizations to assess learning
              needs, clarify desired behaviors, design training experiences,
              prepare managers, and create reinforcement tools aligned with the
              business.
            </p>
            <h3 className={styles.subhead}>Areas we are often asked about</h3>
            <ul className={styles.areas}>
              {orgTrainingAreas.map((area) => (
                <li key={area} className={styles.area}>
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ol className={styles.process}>
          {orgProcess.map((step, i) => (
            <Reveal
              key={step.number}
              as="li"
              delay={(i % 3) * 60}
              className={styles.step}
            >
              <span className={styles.stepNumber} aria-hidden="true">
                {step.number}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={80} className={styles.ctaWrap}>
          <Button href={acBrand.inquiryPath} variant="primary" size="lg" className={styles.cta}>
            Discuss Organizational Training
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
