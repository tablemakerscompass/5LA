import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import EditorialImage from "@/components/ui/EditorialImage";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbsHero.module.css";

/**
 * Hero.
 *
 * The Society has no approved logo, so its name is set as a text wordmark;
 * add `logo` to this brand in `config/companies.ts` when a mark is approved.
 *
 * The hero image is a labeled placeholder: none of the existing approved
 * photography depicts legacy, family, or intergenerational gathering, and
 * substituting a business or theater image would misrepresent the Society.
 * Drop the final asset in `public/brand/` and swap the EditorialImage for an
 * Image with descriptive alt text.
 */
export default function GbsHero() {
  return (
    <section
      className={styles.hero}
      data-surface="dark"
      aria-labelledby="gbs-hero-heading"
    >
      <div className={styles.inner}>
        <Breadcrumbs
          items={[
            { label: "Our Companies", href: "/our-companies" },
            { label: "The Georgia B. Society" },
          ]}
          className={styles.crumbs}
        />

        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">A 5LA Legacy &amp; Community Initiative</p>
            </Reveal>
            <Reveal delay={70}>
              <p className={styles.wordmark}>The Georgia B. Society</p>
            </Reveal>
            <Reveal delay={110}>
              <h1 id="gbs-hero-heading" className={`page-title ${styles.headline}`}>
                Preserving Stories. Honoring Legacy. Making Room for Community.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className={`lead ${styles.lead}`}>
                The Georgia B. Society creates space for family stories,
                cultural memory, meaningful gatherings, intergenerational
                connection, and community experiences rooted in care,
                hospitality, truth, and service.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className={styles.actions}>
                <Button href="#purpose" variant="gold" size="lg">
                  Explore the Society’s Purpose
                </Button>
                <Button href="/work-with-us?interest=georgia-b-society" variant="outline" size="lg">
                  Discuss a Community Partnership
                </Button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className={styles.descriptor}>Legacy · Community · Culture</p>
            </Reveal>
          </div>

          <Reveal delay={160} className={styles.figure}>
            <EditorialImage
              placeholderLabel="Society legacy & gathering imagery"
              aspect="4/3"
              className={styles.image}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
