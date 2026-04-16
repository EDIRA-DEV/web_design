'use client';

import { useLang } from '@/lib/i18n';
import { UniversalContactForm } from '@/components/ui/UniversalContactForm/UniversalContactForm';
import styles from './Testimonials.module.css';

export function Testimonials() {
  const { t } = useLang();

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.headingGroup}>
          <h2 className={styles.title}>
            {t('testimonials.title1')} <em className={styles.italic}>{t('testimonials.title.italic')}</em><br />
            {t('testimonials.title2')}
          </h2>
          <p className={styles.subtitle}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        <UniversalContactForm />
      </div>
    </section>
  );
}
