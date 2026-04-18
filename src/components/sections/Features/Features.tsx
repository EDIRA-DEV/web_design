'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Features.module.css';
import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

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
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || window.innerWidth <= 1024) return;
      
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

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    if (window.innerWidth <= 1024) {
      // Mobile native snapping container scroll
      if (itemRefs.current[index]) {
        itemRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // Desktop sticky scroll mapping
      if (!containerRef.current) return;
      const { top } = containerRef.current.getBoundingClientRect();
      const absoluteTop = window.scrollY + top;
      const height = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableDistance = height - windowHeight;
      const itemsCount = FEATURES_CONFIG.length;
      const progress = (index + 0.5) / itemsCount; 
      
      window.scrollTo({
        top: absoluteTop + (progress * scrollableDistance),
        behavior: 'smooth'
      });
    }
  };

  const handleListScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (window.innerWidth > 1024) return;
    const container = e.currentTarget;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.top + containerRect.height / 2;
    let closestIndex = activeIndex;
    let minDistance = Infinity;

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const elCenter = rect.top + rect.height / 2;
      const distance = Math.abs(containerCenter - elCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

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
              
              <div className={styles.list} onScroll={handleListScroll}>
                {FEATURES_CONFIG.map((feature, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.div 
                      key={index} 
                      ref={(el: HTMLDivElement | null) => { itemRefs.current[index] = el; }}
                      className={styles.item}
                      onClick={() => handleItemClick(index)}
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.4 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.h3 
                        className={styles.itemTitle}
                        animate={{ color: isActive ? 'var(--color-text)' : 'var(--color-text-secondary)' }}
                      >
                        {t(feature.titleKey)}
                      </motion.h3>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <p className={styles.itemDescription}>
                              {t(feature.descKey)}
                            </p>
                            <Link href="/services" className={styles.learnMore}>
                              {t('features.learnMore')} <span>›</span>
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
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
