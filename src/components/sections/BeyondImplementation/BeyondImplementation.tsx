'use client';

import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './BeyondImplementation.module.css';

export function BeyondImplementation() {
  const { t } = useLang();

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        
        <div className={styles.topSection}>
          <h2 className={styles.title}>
            <span className={styles.italic}>{t('beyond.title.italic')}</span>
            <br />
            {t('beyond.title.rest')}
          </h2>
        </div>

        <div className={styles.imageContainer}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.image}
          >
            <source src="/videos/service_loop.webm" type="video/webm" />
          </video>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.description}>{t('beyond.desc')}</p>
        </div>

      </Container>
    </section>
  );
}
