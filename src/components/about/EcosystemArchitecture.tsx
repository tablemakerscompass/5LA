import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { getCompany } from "@/config/companies";
import { site } from "@/config/site";
import styles from "./EcosystemArchitecture.module.css";

const groups = [
  {
    label: "Media & Storytelling",
    slugs: [
      "georgia-b-media-group",
      "georgia-b-society",
      "aunt-sarahs-girls",
      "the-sarah-method",
    ],
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

export default function EcosystemArchitecture() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="architecture-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="The 5LA Ecosystem"
          title={<span id="architecture-heading">Distinct Brands. Shared Vision. One Parent Company.</span>}
          lead="The 5 Loaves Agency develops and supports companies, platforms, programs, communities, and original properties designed to serve different audiences while remaining connected by the same values and experience standard."
          divider
        />

        <Reveal className={styles.parent}>
          <span className={styles.parentLabel}>Parent Company</span>
          <span className={styles.parentName}>{site.legalName}</span>
          <span className={styles.stem} aria-hidden="true" />
        </Reveal>

        <div className={styles.groups}>
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 90} className={styles.group}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <ul className={styles.brands}>
                {group.slugs.map((slug) => {
                  const c = getCompany(slug);
                  if (!c) return null;
                  return (
                    <li key={slug}>
                      <Link href={`/our-companies/${slug}`} className={styles.brand}>
                        {c.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Button href="/our-companies" variant="outline" size="lg">
            Explore Our Companies
          </Button>
        </div>
      </Container>
    </section>
  );
}
