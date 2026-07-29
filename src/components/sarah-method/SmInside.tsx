import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SmImageFrame from "./SmImageFrame";
import SmStatusPill from "./SmStatusPill";
import { experienceAreas, smAssets, smBrand } from "@/config/the-sarah-method";
import styles from "./SmInside.module.css";

/**
 * Section 6 — Inside the experience.
 *
 * Every item below was verified against the shipped application. `appName` is
 * the label a user actually sees in the product. Nothing is listed because it
 * would sound good — and the closing note states plainly what the platform does
 * NOT do, rather than leaving a reader to assume.
 */
export default function SmInside() {
  return (
    <section
      id="inside-the-experience"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="sm-inside-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Inside the Experience"
          title={
            <span id="sm-inside-heading">
              A Guided Space for Reflection, Journaling, and Honest Conversation
              With Yourself.
            </span>
          }
          lead="Everything described here is in the application today. It is free to use, works on a phone, and can be added to a home screen."
          divider
        />

        <ul className={styles.list}>
          {experienceAreas.map((area, i) => (
            <Reveal
              key={area.title}
              as="li"
              delay={(i % 3) * 70}
              className={styles.item}
            >
              <div className={styles.head}>
                <h3 className={styles.title}>{area.title}</h3>
                <SmStatusPill status={area.status} />
              </div>
              {area.appName && (
                <p className={styles.appName}>
                  In the app: <span>{area.appName}</span>
                </p>
              )}
              <p className={styles.body}>{area.body}</p>
            </Reveal>
          ))}
        </ul>

        <div className={styles.lower}>
          <Reveal className={styles.figure}>
            <SmImageFrame
              src={smAssets.appScreens}
              alt="A screen from The Sarah Method application: Aunt Sarah’s greeting, the prompt “What’s been sitting heavy on your heart today?” with an empty entry box, and a row of topics to choose from."
              placeholderLabel="Real screenshots from the application"
              placeholderNote="Asset required: captured from the live app, personal entries removed — never a mocked-up interface"
              aspect="1/1"
              fit="contain"
            />
          </Reveal>

          <Reveal delay={100} className={styles.notes}>
            <h3 className={styles.notesHeading}>Worth knowing before you go in</h3>
            <p className={styles.note}>{smBrand.faithNote}</p>
            <p className={styles.note}>
              There is no artificial-intelligence conversation, voice recognition,
              mood assessment, human coaching, or monitoring of what you write.
              Aunt Sarah’s words are written in advance, not generated in response
              to you.
            </p>
            <p className={styles.note}>{smBrand.ageNote}</p>
            <Button
              href={smBrand.appUrl}
              external
              variant="gold"
              size="lg"
              className={styles.cta}
            >
              Enter The Sarah Method
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
