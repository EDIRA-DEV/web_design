'use client';

import { Container } from '@/components/ui/Container/Container';
import { SmartContactButton } from '@/components/ui/Button/SmartContactButton';
import { useLang } from '@/lib/i18n';
import styles from './IndustriesHero.module.css';

export function IndustriesHero() {
  const { t } = useLang();

  return (
    <section className={styles.hero} id="industries-hero">
      <video autoPlay loop muted playsInline className={styles.videoBg}>
        <source src="/videos/Industries_Background.webm" type="video/webm" />
      </video>
      <div className={styles.overlay} />

      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.prehead}>{t('industriesHero.prehead')}</p>
          <h1 className={styles.title}>
            {t('industriesHero.title')}
          </h1>

          <p className={styles.subtitle}>{t('industriesHero.subtitle')}</p>

          <div className={styles.actions}>
            <SmartContactButton variant="primary" size="lg">
              {t('industriesHero.cta')}
            </SmartContactButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
