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
  const [isMobile, setIsMobile] = useState(false);
  const isClickScrolling = useRef(false);

  // Detect mobile view (< 768px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile ScrollSpy using IntersectionObserver
  useEffect(() => {
    if (!isMobile) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px', // targets top third of screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.findIndex(el => el === entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, observerOptions);

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  // Desktop sticky scroll mapping
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current || window.innerWidth < 768) return;
      
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
  }, [isMobile]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    if (isMobile) {
      isClickScrolling.current = true;
      const element = itemRefs.current[index];
      if (element) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetMargin = 50; // Courtesy margin of 50px
        const targetY = elementPosition - headerHeight - offsetMargin;

        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
      }
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
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

  // Sync desktop video source
  useEffect(() => {
    if (isMobile) return;
    const video = videoRef.current;
    if (!video) return;
    const newSrc = FEATURES_CONFIG[activeIndex].videoSrc;
    if (video.getAttribute('src') !== newSrc) {
      video.src = newSrc;
      video.load();
      video.play().catch(() => {});
    }
  }, [activeIndex, isMobile]);

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
                            {isMobile && (
                              <div className={styles.mobileVideoWrapper}>
                                <video 
                                  src={feature.videoSrc}
                                  autoPlay 
                                  loop 
                                  muted 
                                  playsInline
                                  className={styles.video}
                                />
                              </div>
                            )}
                            <p className={styles.itemDescription}>
                              {t(feature.descKey)}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {!isMobile && (
              <div className={styles.mediaCol}>
                <div className={styles.videoWrapper}>
                  <video 
                    ref={videoRef}
                    src={FEATURES_CONFIG[0].videoSrc}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className={`${styles.video} ${(activeIndex === 1 || activeIndex === 3) ? styles.containVideo : ''}`}
                  />
                </div>
              </div>
            )}

          </div>
        </Container>
      </div>
    </section>
  );
}
