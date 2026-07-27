import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { getCompany } from "@/config/companies";
import styles from "./CompaniesArchitecture.module.css";

const groups = [
  {
    label: "Media, Publishing & Storytelling",
    slugs: ["georgia-b-media-group", "aunt-sarahs-girls", "the-sarah-method"],
  },
  {
    label: "Legacy, Culture & Community",
    slugs: ["georgia-b-society"],
  },
  {
    label: "Technology & Organizational Intelligence",
    slugs: ["velaxity"],
  },
  {
    label: "Training & Professional Development",
    slugs: ["5la-academy", "tablemakers"],
  },
];

/** Section 3 — how the ecosystem is communicated, grouped by assignment. */
export default function CompaniesArchitecture() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="architecture-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="The Brand Architecture"
          title={
            <span id="architecture-heading">
              Different Assignments. Connected Capabilities. Shared Standards.
            </span>
          }
          lead="Each part of the ecosystem was developed to address a distinct audience, need, experience, or opportunity. Some operate as business divisions. Others are platforms, programs, communities, or original properties positioned for long-term growth."
          divider
        />

        <ul className={styles.groups}>
          {groups.map((group, i) => (
            <Reveal as="li" key={group.label} delay={(i % 2) * 70} className={styles.group}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <ul className={styles.brands}>
                {group.slugs.map((slug) => {
                  const company = getCompany(slug);
                  if (!company) return null;
                  return (
                    <li key={slug} className={styles.brand}>
                      <Link
                        href={`/our-companies/${slug}`}
                        className={styles.brandLink}
                      >
                        {company.name}
                      </Link>
                      <span className={styles.brandType}>
                        {company.brandType}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={140}>
          <p className={styles.note}>
            These categories explain how the ecosystem is communicated. They are
            not intended to represent separate legal entities unless formally
            established as such.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
