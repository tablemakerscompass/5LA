import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { identityQualities } from "@/config/tablemakers";
import styles from "./TmIdentity.module.css";

/** Section 3 — The Tablemaker identity. Editorial typography, no icons. */
export default function TmIdentity() {
  return (
    <section
      id="tablemaker-identity"
      className={`section ${styles.wrap}`}
      aria-labelledby="tm-identity-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Who Tablemakers Are"
          title={
            <span id="tm-identity-heading">
              Leadership Is Not Defined Only by Title. It Is Revealed Through
              Responsibility.
            </span>
          }
          divider
        />

        <ol className={styles.list}>
          {identityQualities.map((quality, i) => (
            <Reveal
              key={quality.title}
              as="li"
              delay={(i % 2) * 60}
              className={styles.item}
            >
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.itemBody}>
                <h3 className={styles.title}>{quality.title}</h3>
                <p className={styles.body}>{quality.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
