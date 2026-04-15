'use client';

import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './AboutUsValues.module.css';

const VALUES = [
  {
    labelKey: 'aboutUsValues.card0.label',
    descKey: 'aboutUsValues.card0.desc',
    videoSrc: '/images/about-us/our-values/Integrity.webm',
  },
  {
    labelKey: 'aboutUsValues.card1.label',
    descKey: 'aboutUsValues.card1.desc',
    videoSrc: '/images/about-us/our-values/Innovation.webm',
  },
  {
    labelKey: 'aboutUsValues.card2.label',
    descKey: 'aboutUsValues.card2.desc',
    videoSrc: '/images/about-us/our-values/Collaboration.webm',
  },
  {
    labelKey: 'aboutUsValues.card3.label',
    descKey: 'aboutUsValues.card3.desc',
    videoSrc: '/images/about-us/our-values/Excellence.webm',
  },
];

export function AboutUsValues() {
  const { t } = useLang();

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{t('aboutUsValues.title')}</h2>

        <div className={styles.grid}>
          {VALUES.map((value) => (
            <div key={value.labelKey} className={styles.card}>
              <div className={styles.iconWrapper}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.icon}
                >
                  <source src={value.videoSrc} type="video/webm" />
                </video>
              </div>
              <h3 className={styles.cardLabel}>{t(value.labelKey)}</h3>
              <p className={styles.cardDesc}>{t(value.descKey)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
