import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbProperties.module.css";

/**
 * Section 6 — the original properties currently developed within the Media
 * Group. None of the three has an approved logo or imagery yet, so each uses
 * a text-based wordmark panel; add a real asset when one is approved.
 *
 * The Georgia B. Society appears here as a separate legacy and community
 * initiative supported within the wider 5LA ecosystem — not as a media
 * property owned by Aunt Sarah's Girls.
 */
const properties = [
  {
    name: "Aunt Sarah’s Girls",
    slug: "aunt-sarahs-girls",
    category: "Literary · Theatrical · Healing",
    positioning:
      "A storytelling and healing property exploring truth, womanhood, family, survival, and legacy.",
    overview:
      "Aunt Sarah’s Girls includes the novel, stage production, character storytelling, visual content, healing-centered conversations, companion experiences, future adaptations, and The Sarah Method.",
    accent: "maroon",
  },
  {
    name: "The Sarah Method",
    slug: "the-sarah-method",
    category: "Digital Reflection · Truth · Healing · Purpose",
    positioning:
      "A guided reflection experience helping women explore what has been sitting heavy on their hearts.",
    overview:
      "Developed from the themes and voice of Aunt Sarah’s Girls, The Sarah Method creates a welcoming space for reflection, personal truth, identity, healing, and purpose.",
    accent: "burgundy",
  },
  {
    name: "The Georgia B. Society",
    slug: "georgia-b-society",
    category: "Legacy · Community · Culture",
    positioning:
      "A legacy-centered initiative preserving stories and creating meaningful community experiences.",
    overview:
      "The Georgia B. Society extends the values of care, hospitality, culture, family, and story into community gatherings, conversations, legacy preservation, and future programs.",
    accent: "green",
  },
];

export default function GbProperties() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="properties-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Developed Within the Media Group"
          title={
            <span id="properties-heading">
              Original Properties With Stories, Audiences, and Room to Grow.
            </span>
          }
          divider
        />

        <div className={styles.list}>
          {properties.map((property, i) => (
            <Reveal
              key={property.slug}
              delay={i * 80}
              className={styles.item}
            >
              <article
                className={styles.inner}
                data-accent={property.accent}
                aria-labelledby={`property-${property.slug}-heading`}
              >
                <div className={styles.mark}>
                  <span className={styles.wordmark}>{property.name}</span>
                </div>
                <div className={styles.body}>
                  <p className={styles.category}>{property.category}</p>
                  <h3
                    id={`property-${property.slug}-heading`}
                    className={styles.name}
                  >
                    {property.name}
                  </h3>
                  <p className={styles.positioning}>{property.positioning}</p>
                  <p className={`body ${styles.overview}`}>
                    {property.overview}
                  </p>
                  <Link
                    href={`/our-companies/${property.slug}`}
                    className={styles.cta}
                  >
                    Explore {property.name}
                    <span className={styles.arrow} aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
