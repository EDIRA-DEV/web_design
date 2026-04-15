'use client';

import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import { useLang } from '@/lib/i18n';
import styles from './AboutUsHero.module.css';

export function AboutUsHero() {
  const { t } = useLang();

  return (
    <section className={styles.hero} id="about-us-hero">
      <video autoPlay loop muted playsInline className={styles.videoBg}>
        <source src="/videos/About Us Hero.webm" type="video/webm" />
      </video>
      <div className={styles.overlay} />

      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.prehead}>{t('aboutUsHero.prehead')}</p>
          <h1 className={styles.title}>
            {t('aboutUsHero.title')}
          </h1>

          <p className={styles.subtitle}>{t('aboutUsHero.subtitle')}</p>

          <div className={styles.actions}>
            <Button variant="primary" size="lg">
              {t('aboutUsHero.cta')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
