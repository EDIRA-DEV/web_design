'use client';

import { Container } from '@/components/ui/Container/Container';
import { SmartContactButton } from '@/components/ui/Button/SmartContactButton';
import { useLang } from '@/lib/i18n';
import styles from './AboutUsCTA.module.css';

export function AboutUsCTA() {
  const { t } = useLang();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>{t('aboutUsCTA.title')}</h2>
          <p className={styles.subtitle}>{t('aboutUsCTA.subtitle')}</p>
          <SmartContactButton variant="primary" size="lg">
            {t('aboutUsCTA.cta')}
          </SmartContactButton>
        </div>
      </Container>
    </section>
  );
}
