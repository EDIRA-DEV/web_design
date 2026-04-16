'use client';

import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './WhoWeAre.module.css';

export function WhoWeAre() {
  const { t } = useLang();

  const values = [
    {
      id: 'val1',
      video: '/assets/careers/clarity.webm',
      title: t('whoWeAre.val1.title'),
    },
    {
      id: 'val2',
      video: '/assets/careers/execution_over_theory.webm',
      title: t('whoWeAre.val2.title'),
    },
    {
      id: 'val3',
      video: '/assets/careers/long_therm_thinking.webm',
      title: t('whoWeAre.val3.title'),
    },
  ];

  return (
    <section className={styles.section} id="who-we-are">
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.italic}>{t('whoWeAre.title')}</span>{' '}
            <span className={styles.bold}>{t('whoWeAre.title.bold')}</span>
          </h2>
          <p className={styles.subtitle}>{t('whoWeAre.subtitle')}</p>
        </div>

        <div className={styles.valuesBlock}>
          <h3 className={styles.weValue}>{t('whoWeAre.weValue')}</h3>
          <div className={styles.grid}>
            {values.map((v) => (
              <div key={v.id} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <video
                    src={v.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.videoIcon}
                  />
                </div>
                <h4 className={styles.cardTitle}>{v.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
