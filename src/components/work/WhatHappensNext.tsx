import Container from "@/components/layout/Container";
import styles from "./WhatHappensNext.module.css";

const steps = [
  {
    number: "01",
    title: "We read it — really",
    body: "Every submission goes to a real person, not a queue. You will hear back within two business days.",
  },
  {
    number: "02",
    title: "We book a real conversation",
    body: "A short call to understand your business before we talk about anything else. No pitch deck, no pressure.",
  },
  {
    number: "03",
    title: "You get a clear next step",
    body: "A proposal, a straight answer that we are not the right fit, or a referral to someone who is.",
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
            What Happens After You Hit Send
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

        <p className={`body ${styles.promise}`}>
          <strong>Our promise:</strong> we will not leave you guessing. If we
          are not the right fit, we will tell you plainly and point you
          somewhere better.
        </p>

        <p className={`caption ${styles.note}`}>
          Submission does not guarantee project acceptance, partnership, or
          availability.
        </p>
      </Container>
    </section>
  );
}
