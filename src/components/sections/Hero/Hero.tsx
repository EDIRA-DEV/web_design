import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <video autoPlay loop muted playsInline className={styles.videoBg}>
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />

      <Container className={styles.content}>
        <p className={styles.prehead}>Empowering business with the</p>
        <h1 className={styles.title}>
          Technology of<br />Tomorrow
        </h1>

        <p className={styles.subtitle}>
          From strategy to implementation, we design digital products, cloud
          architectures, and AI-powered solutions that are tailored to your
          context, measurable in their impact, and built to scale with your business.
        </p>

        <div className={styles.actions}>
          <Button variant="primary" size="lg">
            Get started
          </Button>
          <Button variant="secondary" size="lg">
            How we work
          </Button>
        </div>
      </Container>
    </section>
  );
}
