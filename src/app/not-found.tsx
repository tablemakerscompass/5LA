import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <Container narrow>
        <div className={styles.inner}>
          <p className="eyebrow">Error 404</p>
          <hr className="rule" />
          <h1 className="page-title">This page couldn&rsquo;t be found.</h1>
          <p className="lead">
            The page you&rsquo;re looking for may have moved or doesn&rsquo;t exist.
            Let&rsquo;s get you back on track.
          </p>
          <div className={styles.actions}>
            <Button href="/" variant="primary">
              Back to Home
            </Button>
            <Button href="/experience-sectors" variant="text">
              Explore the Sectors
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
