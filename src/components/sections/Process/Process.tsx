'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './Process.module.css';

export function Process() {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);

  const STEPS = [
    { id: 'discover', titleKey: 'process.step0.title', descKey: 'process.step0.desc', image: '/images/Discover.png', icon: '/images/Discover.svg' },
    { id: 'define',   titleKey: 'process.step1.title', descKey: 'process.step1.desc', image: '/images/Define.png',   icon: '/images/Define.svg' },
    { id: 'diagnose', titleKey: 'process.step2.title', descKey: 'process.step2.desc', image: '/images/Diagnose.png', icon: '/images/Diagnose.svg' },
    { id: 'design',   titleKey: 'process.step3.title', descKey: 'process.step3.desc', image: '/images/Design.png',   icon: '/images/Design.svg' },
    { id: 'develop',  titleKey: 'process.step4.title', descKey: 'process.step4.desc', image: '/images/Developer.png',icon: '/images/Develop.svg' },
    { id: 'deploy',   titleKey: 'process.step5.title', descKey: 'process.step5.desc', image: '/images/Deploy.png',   icon: '/images/Deploy.svg' },
    { id: 'deliver',  titleKey: 'process.step6.title', descKey: 'process.step6.desc', image: '/images/Deliver.png',  icon: '/images/Deliver.svg' },
    { id: 'drive',    titleKey: 'process.step7.title', descKey: 'process.step7.desc', image: '/images/Drive.png',    icon: '/images/Drive.svg' },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % STEPS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + STEPS.length) % STEPS.length);
  };

  const setStep = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.section} id="delivery-process">
      <div className={styles.fullWidthContainer}>
        <div className={styles.header}>
          <h2 className={styles.heading}>{t('process.heading')}</h2>
          <p className={styles.subheading}>
            {t('process.subheading')}
          </p>
        </div>
        
        <div className={styles.carouselContainer}>
          {STEPS.map((step, index) => {
            let positionClass = styles.hiddenRight;
            if (index === activeIndex) {
              positionClass = styles.active;
            } else if (
              index === activeIndex - 1 || 
              (activeIndex === 0 && index === STEPS.length - 1)
            ) {
              positionClass = styles.prev;
            } else if (
              index === activeIndex + 1 || 
              (activeIndex === STEPS.length - 1 && index === 0)
            ) {
              positionClass = styles.next;
            } else if (index < activeIndex) {
              positionClass = styles.hiddenLeft;
            } else {
              positionClass = styles.hiddenRight;
            }

            return (
              <div 
                key={step.id} 
                className={`${styles.card} ${positionClass}`}
                onClick={() => {
                  if (positionClass === styles.prev) handlePrev();
                  if (positionClass === styles.next) handleNext();
                }}
              >
                <div className={styles.cardLeft}>
                  <div className={styles.iconContainer}>
                    <img src={step.icon} alt={`${t(step.titleKey)} icon`} />
                  </div>
                  <p className={styles.cardDescription}>
                    <strong>{t(step.titleKey)} &ndash; </strong>
                    {t(step.descKey)}
                  </p>
                </div>
                <div className={styles.cardRight}>
                  <img src={step.image} alt={t(step.titleKey)} />
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.bottomNavContainer}>
          <div className={styles.bottomNav}>
            <div className={styles.stepNames}>
              {STEPS.map((step, index) => (
                <button
                  key={`nav-${step.id}`}
                  className={`${styles.stepName} ${index === activeIndex ? styles.active : ''}`}
                  onClick={() => setStep(index)}
                  title={t(step.titleKey)}
                >
                  {t(step.titleKey)}
                </button>
              ))}
            </div>
            <div className={styles.controls}>
              <button className={styles.navBtn} onClick={handlePrev} aria-label="Previous step">
                <svg viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className={styles.navBtn} onClick={handleNext} aria-label="Next step">
                <svg viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
