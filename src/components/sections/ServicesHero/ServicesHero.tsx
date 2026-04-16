'use client';

import { Container } from '@/components/ui/Container/Container';
import { SmartContactButton } from '@/components/ui/Button/SmartContactButton';
import { useLang } from '@/lib/i18n';
import styles from './ServicesHero.module.css';

export function ServicesHero() {
  const { t } = useLang();

  return (
    <section className={styles.hero} id="services-hero">
      <video autoPlay loop muted playsInline className={styles.videoBg}>
        <source src="/videos/Edira_Services_Video_Background.webm" type="video/webm" />
      </video>
      <div className={styles.overlay} />

      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.prehead}>{t('servicesHero.prehead')}</p>
          <h1 className={styles.title}>
            {t('servicesHero.title')}
          </h1>

          <p className={styles.subtitle}>{t('servicesHero.subtitle')}</p>

          <div className={styles.actions}>
            <SmartContactButton variant="primary" size="lg">
              {t('servicesHero.cta')}
            </SmartContactButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
