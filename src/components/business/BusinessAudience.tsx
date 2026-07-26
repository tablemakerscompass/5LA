import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./BusinessAudience.module.css";

type Audience = {
  title: string;
  body?: string;
  items?: string[];
};

const audiences: Audience[] = [
  {
    title: "Hospitality businesses",
    items: [
      "Restaurants",
      "Venues",
      "Hotels",
      "Event companies",
      "Guest-experience brands",
    ],
  },
  {
    title: "Growing small businesses",
    body: "Founders moving from informal operations toward clearer systems and accountability.",
  },
  {
    title: "Multi-location organizations",
    body: "Businesses needing more consistency across teams, managers, and locations.",
  },
  {
    title: "Experience-driven brands",
    body: "Organizations where service, environment, culture, and customer interaction directly affect the brand promise.",
  },
  {
    title: "Community and creative organizations",
    body: "Programs, productions, initiatives, and events requiring stronger planning, implementation, and operating structure.",
  },
  {
    title: "Leaders managing change",
    body: "Organizations preparing for growth, restructuring, technology adoption, leadership transition, or culture reset.",
  },
];

/** Section 7 — who this sector is designed for. */
export default function BusinessAudience() {
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
              For Organizations That Need the Experience to Become More
              Consistent, Structured, and Sustainable.
            </span>
          }
          divider
        />

        <div className={styles.grid}>
          {audiences.map((audience, i) => (
            <Reveal
              key={audience.title}
              delay={(i % 3) * 80}
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
