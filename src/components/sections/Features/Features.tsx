'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Features.module.css';
import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';

const FEATURES_CONFIG = [
  { titleKey: 'features.item0.title', descKey: 'features.item0.desc', videoSrc: '/videos/Acelerate Decision Making (1).webm' },
  { titleKey: 'features.item1.title', descKey: 'features.item1.desc', videoSrc: '/videos/Increase Operational Efficency.webm' },
  { titleKey: 'features.item2.title', descKey: 'features.item2.desc', videoSrc: '/videos/Scale with confidence.webm' },
  { titleKey: 'features.item3.title', descKey: 'features.item3.desc', videoSrc: '/videos/Optimize Financial Visibility.webm' },
];

export function Features() {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollableDistance = height - windowHeight;
      if (scrollableDistance <= 0) return;
      
      let progress = -top / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      const itemsCount = FEATURES_CONFIG.length;
      const index = Math.min(
        Math.floor(progress * itemsCount),
        itemsCount - 1
      );
      
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const newSrc = FEATURES_CONFIG[activeIndex].videoSrc;
    if (video.getAttribute('src') !== newSrc) {
      video.src = newSrc;
      video.load();
      video.play().catch(() => {});
    }
  }, [activeIndex]);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.stickyContent}>
        <Container className={styles.container}>
          <div className={styles.grid}>
            
            <div className={styles.contentCol}>
              <h2 className={styles.title}>
                {t('features.title1')} <br />
                {t('features.title2')} <br />
                <span className={styles.italic}>{t('features.title3')}</span>
              </h2>
              
              <div className={styles.list}>
                {FEATURES_CONFIG.map((feature, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div 
                      key={index} 
                      className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                    >
                      <h3 className={styles.itemTitle}>{t(feature.titleKey)}</h3>
                      <div className={styles.itemDescriptionWrapper}>
                        <div>
                          <p className={styles.itemDescription}>
                            {t(feature.descKey)}
                          </p>
                          <div className={styles.learnMore}>
                            {t('features.learnMore')} <span>›</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.mediaCol}>
              <div className={styles.videoWrapper}>
                <video 
                  ref={videoRef}
                  src={FEATURES_CONFIG[0].videoSrc}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className={styles.video}
                />
              </div>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
