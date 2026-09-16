import Section from "@/components/layout/Section";
import { site } from "@/config/site";
import styles from "./NotSureWhichFits.module.css";

/**
 * Permission to arrive without a service name in hand. Placed between the
 * packages and the form so an undecided visitor keeps going rather than
 * leaving to figure it out first.
 */
export default function NotSureWhichFits() {
  return (
    <Section tight aria-labelledby="unsure-heading">
      <div className={styles.box}>
        <h2 id="unsure-heading" className={`subheading ${styles.title}`}>
          Not Sure Which One Fits?
        </h2>
        <p className="body">
          That&rsquo;s normal. Most business owners don&rsquo;t come to us with
          the name of the service they need. They come because something
          isn&rsquo;t working, something needs to be built, or they&rsquo;re
          ready for the business to grow differently.
        </p>
        <p className={`body ${styles.close}`}>
          Tell us what&rsquo;s happening. We&rsquo;ll help you figure out what
          comes next.
        </p>
        {/*
          Deliberately a quiet text link rather than a button: the form stays
          the default route, because an inquiry gives us the business name,
          service area, and challenge before the call rather than during it.
          This is here for the person who would genuinely rather talk first.
        */}
        <p className={`caption ${styles.talkFirst}`}>
          Prefer to talk it through first?{" "}
          <a
            href={site.booking.discoveryCall}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.talkFirstLink}
          >
            Book a free 30-minute call
          </a>{" "}
          &mdash; no form required.
        </p>
      </div>
    </Section>
  );
}
