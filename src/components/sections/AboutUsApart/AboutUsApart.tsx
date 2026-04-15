'use client';

import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './AboutUsApart.module.css';

const CARDS = [
  {
    labelKey: 'aboutUsApart.card0.label',
    descKey: 'aboutUsApart.card0.desc',
    videoSrc: '/images/about-us/Tailored Solutions.webm',
  },
  {
    labelKey: 'aboutUsApart.card1.label',
    descKey: 'aboutUsApart.card1.desc',
    videoSrc: '/images/about-us/data-driven.webm',
  },
  {
    labelKey: 'aboutUsApart.card2.label',
    descKey: 'aboutUsApart.card2.desc',
    videoSrc: '/images/about-us/end-to-end.webm',
  },
  {
    labelKey: 'aboutUsApart.card3.label',
    descKey: 'aboutUsApart.card3.desc',
    videoSrc: '/images/about-us/long-term-impact.webm',
  },
];

export function AboutUsApart() {
  const { t } = useLang();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('aboutUsApart.title')}</h2>
          <p className={styles.subtitle}>{t('aboutUsApart.subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <div key={card.labelKey} className={styles.card}>
              <div className={styles.mediaWrapper}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.video}
                >
                  <source src={card.videoSrc} type="video/webm" />
                </video>
              </div>

              <h3 className={styles.cardLabel}>{t(card.labelKey)}</h3>
              <p className={styles.cardDesc}>{t(card.descKey)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
