'use client';

import { Container } from '@/components/ui/Container/Container';
import { SmartContactButton } from '@/components/ui/Button/SmartContactButton';
import { useLang } from '@/lib/i18n';
import styles from './CareersCTA.module.css';

export function CareersCTA() {
  const { t } = useLang();

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>
            {t('careersCTA.title')} <span className={styles.italic}>{t('careersCTA.title.italic')}</span> {t('careersCTA.title2')}
          </h2>
          <p className={styles.subtitle}>{t('careersCTA.subtitle')}</p>
          <SmartContactButton variant="primary" size="lg">
            {t('careersCTA.button')}
          </SmartContactButton>
        </div>
      </Container>
    </section>
  );
}
