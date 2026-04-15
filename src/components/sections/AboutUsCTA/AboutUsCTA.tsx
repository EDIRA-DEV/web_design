'use client';

import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
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
          <Button variant="primary" size="lg">
            {t('aboutUsCTA.cta')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
