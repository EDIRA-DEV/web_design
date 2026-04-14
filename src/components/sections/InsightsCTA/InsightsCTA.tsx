'use client';

import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import { useLang } from '@/lib/i18n';
import styles from './InsightsCTA.module.css';

export function InsightsCTA() {
  const { t } = useLang();

  return (
    <section className={styles.section} id="insights-cta">
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('insights.cta.title')}</h2>
          <p className={styles.description}>{t('insights.cta.desc')}</p>
          <div className={styles.actions}>
            <Button variant="primary" size="lg">
              {t('insights.cta.button')}
            </Button>
          </div>
        </div>
        
        <div className={styles.videoWrapper}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={styles.video}
          >
            <source src="/videos/Turn Insight Into Action.webm" type="video/webm" />
          </video>
        </div>
      </Container>
    </section>
  );
}
