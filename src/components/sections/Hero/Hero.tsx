'use client';

import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import { useLang } from '@/lib/i18n';
import styles from './Hero.module.css';

export function Hero() {
  const { t } = useLang();

  return (
    <section className={styles.hero} id="hero">
      <video autoPlay loop muted playsInline className={styles.videoBg}>
        <source src="/videos/hero-bg.webm" type="video/webm" />
      </video>
      <div className={styles.overlay} />

      <Container className={styles.content}>
        <p className={styles.prehead}>{t('hero.prehead')}</p>
        <h1 className={styles.title}>
          {t('hero.title')}
        </h1>

        <p className={styles.subtitle}>{t('hero.subtitle')}</p>

        <div className={styles.actions}>
          <Button variant="primary" size="lg">
            {t('hero.cta.primary')}
          </Button>
          <Button variant="secondary" size="lg">
            {t('hero.cta.secondary')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
