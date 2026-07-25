import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import CompanyCard from "@/components/ui/CompanyCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { companies } from "@/config/companies";
import styles from "./Ecosystem.module.css";

export default function Ecosystem() {
  const featured = companies.filter((c) => c.featured);
  const supporting = companies.filter((c) => !c.featured);

  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="ecosystem-heading">
      <Container>
        <SectionIntro
          eyebrow="Our Companies & Initiatives"
          title={
            <span id="ecosystem-heading">
              Built Under One Vision. Created for Different Experiences.
            </span>
          }
          lead="The 5LA ecosystem includes companies, platforms, programs, and original properties created to serve businesses, leaders, communities, and audiences in distinct ways."
          divider
        />

        <div className={styles.featured}>
          {featured.map((company, i) => (
            <Reveal key={company.slug} delay={i * 80}>
              <CompanyCard company={company} />
            </Reveal>
          ))}
        </div>

        <p className={styles.supportingLabel}>More across the ecosystem</p>
        <div className={styles.supporting}>
          {supporting.map((company, i) => (
            <Reveal key={company.slug} delay={i * 60}>
              <CompanyCard company={company} />
            </Reveal>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Button href="/our-companies" variant="outline" size="lg">
            Explore the 5LA Ecosystem
          </Button>
        </div>
      </Container>
    </section>
  );
}
