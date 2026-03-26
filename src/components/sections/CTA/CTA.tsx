'use client';

import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import { useLang } from '@/lib/i18n';
import styles from './CTA.module.css';

export function CTA() {
  const { t } = useLang();
  return (
    <section className={styles.cta} id="cta">
      <Container>
        <h2 className={styles.title}>{t('cta.title')}</h2>
        <p className={styles.description}>
          {t('cta.desc')}
        </p>

        <div className={styles.actions}>
          <Button variant="primary" size="lg">
            {t('cta.primary')}
          </Button>
          <Button variant="secondary" size="lg">
            {t('cta.secondary')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
