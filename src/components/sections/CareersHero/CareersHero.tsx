'use client';

import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './CareersHero.module.css';

export function CareersHero() {
  const { t } = useLang();

  return (
    <section className={styles.hero}>
      <video
        src="/assets/careers/careers_hero.mov"
        autoPlay
        muted
        loop
        playsInline
        className={styles.videoBg}
      />
      <div className={styles.overlay} />
      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.prehead}>{t('careersHero.prehead')}</p>
          <h1 className={styles.title}>
            {t('careersHero.title')}
          </h1>
          <p className={styles.subtitle}>{t('careersHero.subtitle')}</p>
        </div>
      </Container>
    </section>
  );
}
