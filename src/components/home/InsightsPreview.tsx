import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { insights } from "@/config/insights";
import styles from "./InsightsPreview.module.css";

export default function InsightsPreview() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="insights-heading">
      <Container>
        <div className={styles.head}>
          <SectionIntro
            eyebrow="Insights From the Table"
            title={<span id="insights-heading">Ideas for Leaders, Builders, and Experience Makers.</span>}
            lead="Explore perspectives on hospitality, leadership, business operations, artificial intelligence, culture, training, media, and the future of experience."
            divider
          />
          <Button href="/insights" variant="text" className={styles.headCta}>
            Explore All Insights
          </Button>
        </div>

        <div className={styles.grid}>
          {insights.map((post, i) => (
            <Reveal key={post.title} delay={i * 80}>
              <Link href={post.href} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.category}>{post.category}</span>
                  {post.placeholder && (
                    <span className={styles.tag}>Coming soon</span>
                  )}
                </div>
                <h3 className={`subheading ${styles.title}`}>{post.title}</h3>
                <span className={styles.readMore} aria-hidden="true">
                  Read <span className={styles.arrow}>&rarr;</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
