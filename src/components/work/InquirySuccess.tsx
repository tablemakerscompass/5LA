"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";
import styles from "./InquirySuccess.module.css";

/**
 * Shown in place of the form after a successful submission. Stays on
 * /work-with-us rather than redirecting, so the visitor never lands on a
 * blank page and the browser back button behaves predictably.
 *
 * The discovery-call link is offered here rather than anywhere earlier in the
 * page: by this point the inquiry is already in hand, so a call booked from
 * here starts with context instead of a blank slate.
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
            Thank You — We Have It.
          </h2>
          <p className="lead">
            We read every submission ourselves and will follow up within two
            business days. In the meantime, if you would like to get on the
            calendar now, you are welcome to book a free 30-minute discovery
            call.
          </p>
          <div className={styles.actions}>
            <Button
              href={site.booking.discoveryCall}
              external
              variant="primary"
              size="lg"
              arrow
            >
              {site.booking.discoveryCallLabel}
            </Button>
            <Button href="/" variant="outline" size="lg">
              Return to the Homepage
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
