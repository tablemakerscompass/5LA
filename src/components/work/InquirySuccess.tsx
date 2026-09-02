"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import styles from "./InquirySuccess.module.css";

/**
 * Shown in place of the form after a successful submission. Stays on
 * /work-with-us rather than redirecting, so the visitor never lands on a
 * blank page and the browser back button behaves predictably.
 */
export default function InquirySuccess() {
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Move focus to the confirmation so screen-reader users hear the result.
    heading.current?.focus();
    heading.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, []);

  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="inquiry-received">
      <Container>
        <div className={styles.body} role="status">
          <p className="eyebrow">Inquiry Received</p>
          <hr className="rule" />
          <h2
            id="inquiry-received"
            ref={heading}
            tabIndex={-1}
            className={`section-heading ${styles.title}`}
          >
            Your Inquiry Has Been Received.
          </h2>
          <p className="lead">
            Thank you for sharing what you are building. The 5 Loaves Agency will
            review the information and determine the most appropriate next step.
          </p>
          <div className={styles.actions}>
            <Button href="/" variant="primary" size="lg">
              Return to the Homepage
            </Button>
            <Button href="/insights" variant="outline" size="lg">
              Explore The Tablemakers Compass
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
