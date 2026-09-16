import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbServices.module.css";

const serviceRoles = [
  {
    name: "Business Setup & Operations",
    href: "/what-we-do#business-setup",
    body: "Supports operations, project management, timelines, budgets, partnerships, events, structure, and implementation.",
  },
  {
    name: "Websites, Technology & AI",
    href: "/what-we-do#websites-technology",
    body: "Supports digital platforms, applications, audience tools, automation, content systems, and online experiences.",
  },
  {
    name: "Hospitality, Training & Culture",
    href: "/what-we-do#hospitality-training",
    body: "Supports facilitator development, cast or team preparation, partner education, workshops, and companion learning experiences.",
  },
  {
    name: "Content, Media & Marketing",
    href: "/what-we-do#content-media",
    body: "Supports publishing, storytelling, production, audience development, visual content, and live experiences.",
  },
];

/** Section 8 — how the shared 5LA services support the Media Group. */
export default function GbServices() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="gb-services-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Powered by the 5LA Services"
          title={
            <span id="gb-services-heading">
              Creative Vision Is Strengthened by Shared Operations,
              Technology, Training, and Marketing Capabilities.
            </span>
          }
          divider
        />

        <ul className={styles.list}>
          {serviceRoles.map((service, i) => (
            <Reveal
              as="li"
              key={service.href}
              delay={(i % 2) * 70}
              className={styles.item}
            >
              <h3 className={styles.name}>
                <Link href={service.href} className={styles.link}>
                  {service.name}
                  <span className={styles.arrow} aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </h3>
              <p className={`body ${styles.body}`}>{service.body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={140}>
          <p className={styles.statement}>
            This shared infrastructure allows the Media Group to develop stories
            with both creative depth and operational discipline.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
