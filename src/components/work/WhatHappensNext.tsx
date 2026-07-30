import Container from "@/components/layout/Container";
import styles from "./WhatHappensNext.module.css";

const steps = [
  {
    number: "01",
    title: "We review the inquiry",
    body: "5LA reviews the organization, need, timing, and area of support requested.",
  },
  {
    number: "02",
    title: "We determine alignment",
    body: "If the inquiry appears aligned, we will contact you to arrange an introductory conversation or request additional information.",
  },
  {
    number: "03",
    title: "We define the next step",
    body: "The next step may include a discovery call, consultation, project assessment, partnership conversation, or referral to the appropriate 5LA brand.",
  },
];

/** The three-step review process, plus the expectations note. */
export default function WhatHappensNext() {
  return (
    <section className="section" aria-labelledby="next-heading">
      <Container>
        <div className={styles.head}>
          <p className="eyebrow">Next Steps</p>
          <hr className="rule" />
          <h2 id="next-heading" className="section-heading">
            What Happens After You Submit
          </h2>
        </div>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.number} className={styles.step}>
              <span className={`numeral ${styles.number}`}>{step.number}</span>
              <h3 className={`subheading ${styles.title}`}>{step.title}</h3>
              <p className="body">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className={`caption ${styles.note}`}>
          Submission does not guarantee project acceptance, partnership,
          availability, or a specific response time.
        </p>
      </Container>
    </section>
  );
}
