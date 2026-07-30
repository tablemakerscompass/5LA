import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingAudience.module.css";

type Audience = {
  title: string;
  body?: string;
  items?: string[];
};

const audiences: Audience[] = [
  {
    title: "Hospitality organizations",
    items: [
      "Restaurants",
      "Hotels",
      "Venues",
      "Event companies",
      "Guest-experience brands",
    ],
  },
  {
    title: "Growing businesses",
    body: "Organizations formalizing onboarding, management expectations, culture, and employee development.",
  },
  {
    title: "Leadership teams",
    body: "Executives, managers, supervisors, and emerging leaders responsible for guiding people and performance.",
  },
  {
    title: "Multi-location organizations",
    body: "Businesses needing consistent standards and learning across teams, managers, and locations.",
  },
  {
    title: "Experience-driven brands",
    body: "Organizations where employee behavior, communication, service, and environment directly shape the brand promise.",
  },
  {
    title: "Community and creative organizations",
    body: "Programs, productions, initiatives, and teams needing facilitator preparation, leadership development, or audience-experience training.",
  },
  {
    title: "Workforce-development partners",
    body: "Organizations supporting professional readiness, career growth, hospitality development, and leadership preparation.",
  },
];

/** Section 12 — who this sector serves. */
export default function TrainingAudience() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="audience-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Who We Support"
          title={
            <span id="audience-heading">
              For Organizations That Need Their People to Understand, Carry, and
              Strengthen the Standard.
            </span>
          }
          divider
        />

        <div className={styles.grid}>
          {audiences.map((audience, i) => (
            <Reveal
              key={audience.title}
              delay={(i % 3) * 70}
              className={styles.item}
            >
              <span className={styles.marker} aria-hidden="true" />
              <h3 className={`subheading ${styles.title}`}>{audience.title}</h3>
              {audience.body && (
                <p className={`body ${styles.body}`}>{audience.body}</p>
              )}
              {audience.items && (
                <ul className={styles.items}>
                  {audience.items.map((item) => (
                    <li key={item} className={styles.subItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
