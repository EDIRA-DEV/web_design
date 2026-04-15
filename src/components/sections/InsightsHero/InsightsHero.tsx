'use client';

import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './InsightsHero.module.css';

export function InsightsHero() {
  const { t } = useLang();

  return (
    <section className={styles.hero} id="insights-hero">
      <video autoPlay loop muted playsInline className={styles.videoBg}>
        <source src="/videos/Insights Background.webm" type="video/webm" />
      </video>
      <div className={styles.overlay} />

      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.prehead}>{t('insightsHero.prehead')}</p>
          <h1 className={styles.title}>
            {t('insightsHero.title').split(' ').map((word, i) => (
              <span key={i} className={styles.titleWord}>{word}</span>
            ))}
          </h1>

          <p className={styles.subtitle}>{t('insightsHero.subtitle')}</p>
        </div>
      </Container>
    </section>
  );
}
