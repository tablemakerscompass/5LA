import Section from "@/components/layout/Section";
import Button from "./Button";
import styles from "./CTABanner.module.css";

type CTAButton = { label: string; href: string };

type CTABannerProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  primary?: CTAButton;
  secondary?: CTAButton;
  /** Dark (default) or cream presentation. */
  dark?: boolean;
};

/** Premium, reusable call-to-action banner. */
export default function CTABanner({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  dark = true,
}: CTABannerProps) {
  return (
    <Section dark={dark} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.text}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className={`section-heading ${styles.title}`}>{title}</h2>
          {body && <p className={`lead ${styles.body}`}>{body}</p>}
        </div>
        {(primary || secondary) && (
          <div className={styles.actions}>
            {primary && (
              <Button href={primary.href} variant={dark ? "gold" : "primary"} size="lg">
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button href={secondary.href} variant="outline" size="lg">
                {secondary.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
