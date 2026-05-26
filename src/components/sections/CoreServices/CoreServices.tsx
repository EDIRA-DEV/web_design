'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CoreServices.module.css';
import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database, Cloud, Server, Zap, DollarSign,
  Network, Link, DownloadCloud, CheckCircle, TrendingUp,
  LayoutDashboard, Target, Users, Lightbulb,
  PieChart, LineChart, Activity, Tag,
  BarChart2, UserCheck, ShieldAlert, TextSearch,
  Settings, Lock, Key, Compass,
  Brain, CheckSquare, Presentation, Cpu,
  Map, RefreshCw, Layers
} from 'lucide-react';

const SERVICES_CONFIG = [
  { titleKey: 'coreServices.item0.title', descKey: 'coreServices.item0.desc', points: [
    { textKey: 'coreServices.item0.p0', customIcon: '/icons/cloudData/Modern Data Foundations.svg', icon: undefined },
    { textKey: 'coreServices.item0.p1', customIcon: '/icons/cloudData/Strategic Cloud Migration.svg', icon: undefined },
    { textKey: 'coreServices.item0.p2', customIcon: '/icons/cloudData/High Availability Infrastructure.svg', icon: undefined },
    { textKey: 'coreServices.item0.p3', customIcon: '/icons/cloudData/Optimization.svg', icon: undefined },
    { textKey: 'coreServices.item0.p4', customIcon: '/icons/cloudData/Cloud Cost Optimizations.svg', icon: undefined },
  ]},
  { titleKey: 'coreServices.item1.title', descKey: 'coreServices.item1.desc', points: [
    { textKey: 'coreServices.item1.p0', customIcon: '/icons/dataEngineering/Automated ETL _ ELT Pipelines across systems.svg', icon: undefined },
    { textKey: 'coreServices.item1.p1', customIcon: '/icons/dataEngineering/ERP, CRM and API ecosystem integration.svg', icon: undefined },
    { textKey: 'coreServices.item1.p2', customIcon: '/icons/dataEngineering/Data ingestion and workflow orchestration.svg', icon: undefined },
    { textKey: 'coreServices.item1.p3', customIcon: '/icons/dataEngineering/Automated data validation and quality monitoring.svg', icon: undefined },
    { textKey: 'coreServices.item1.p4', customIcon: '/icons/dataEngineering/Scalable pipelines designed for performance.svg', icon: undefined },
  ]},
  { titleKey: 'coreServices.item2.title', descKey: 'coreServices.item2.desc', points: [
    { textKey: 'coreServices.item2.p0', customIcon: '/icons/analyticsDecision/monitor.svg', icon: undefined },
    { textKey: 'coreServices.item2.p1', customIcon: '/icons/analyticsDecision/ajustamiento.svg', icon: undefined },
    { textKey: 'coreServices.item2.p2', customIcon: '/icons/analyticsDecision/estadistica.svg', icon: undefined },
    { textKey: 'coreServices.item2.p3', customIcon: '/icons/analyticsDecision/informe-de-negocios.svg', icon: undefined },
  ]},
  { titleKey: 'coreServices.item3.title', descKey: 'coreServices.item3.desc', points: [
    { textKey: 'coreServices.item3.p0', customIcon: '/icons/financialOperation/profitability_and_cost_analysis.svg', icon: undefined },
    { textKey: 'coreServices.item3.p1', customIcon: '/icons/financialOperation/Financial forecasting and scenario modeling.svg', icon: undefined },
    { textKey: 'coreServices.item3.p2', customIcon: '/icons/financialOperation/Operational performance monitoring.svg', icon: undefined },
    { textKey: 'coreServices.item3.p3', customIcon: '/icons/financialOperation/Data‑driven pricing optimization.svg', icon: undefined },
  ]},
  { titleKey: 'coreServices.item4.title', descKey: 'coreServices.item4.desc', points: [
    { textKey: 'coreServices.item4.p0', customIcon: '/icons/appliedAlPredictive/Demand forecasting and predictive analytics.svg', icon: undefined },
    { textKey: 'coreServices.item4.p1', customIcon: '/icons/appliedAlPredictive/Customer behavior and churn prediction.svg', icon: undefined },
    { textKey: 'coreServices.item4.p2', customIcon: '/icons/appliedAlPredictive/Predictive risk and operational intelligence.svg', icon: undefined },
    { textKey: 'coreServices.item4.p3', customIcon: '/icons/appliedAlPredictive/Natural Language Processing (NLP) automation.svg', icon: undefined },
  ]},
  { titleKey: 'coreServices.item5.title', descKey: 'coreServices.item5.desc', points: [
    { textKey: 'coreServices.item5.p0', icon: Settings }, { textKey: 'coreServices.item5.p1', icon: Compass },
    { textKey: 'coreServices.item5.p2', icon: Lock }, { textKey: 'coreServices.item5.p3', icon: Key },
  ]},
  { titleKey: 'coreServices.item6.title', descKey: 'coreServices.item6.desc', points: [
    { textKey: 'coreServices.item6.p0', icon: Presentation }, { textKey: 'coreServices.item6.p1', icon: CheckSquare },
    { textKey: 'coreServices.item6.p2', icon: Brain }, { textKey: 'coreServices.item6.p3', icon: Cpu },
  ]},
  { titleKey: 'coreServices.item7.title', descKey: 'coreServices.item7.desc', points: [
    { textKey: 'coreServices.item7.p0', icon: Map }, { textKey: 'coreServices.item7.p1', icon: Layers },
    { textKey: 'coreServices.item7.p2', icon: RefreshCw },
  ]},
];

export function CoreServices() {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
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
      
      const itemsCount = SERVICES_CONFIG.length;
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
      const itemsCount = SERVICES_CONFIG.length;
      const progress = (index + 0.5) / itemsCount; 
      
      window.scrollTo({
        top: absoluteTop + (progress * scrollableDistance),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.stickyContent}>
        <Container className={styles.container}>
          
          <div className={styles.header}>
            <h2 className={styles.mainTitle}>
              <span className={styles.italic}>{t('coreServices.title.italic')}</span> {t('coreServices.title.rest')}
            </h2>
          </div>

          <div className={styles.grid}>
            
            <div className={styles.leftCol}>
              <div className={styles.categoriesList}>
                {SERVICES_CONFIG.map((service, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.div 
                      key={index} 
                      ref={(el: HTMLDivElement | null) => { itemRefs.current[index] = el; }}
                      className={`${styles.categoryItem} ${isActive ? styles.activeCategory : ''}`}
                      onClick={() => handleItemClick(index)}
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.4 }}
                      transition={{ duration: 0.4 }}
                      style={{ cursor: 'pointer' }}
                    >
                      <motion.h3 
                        className={styles.categoryTitle}
                        animate={{ color: isActive ? 'var(--color-text)' : 'var(--color-text-secondary)' }}
                      >
                        {t(service.titleKey)}
                      </motion.h3>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <p className={styles.descriptionText}>
                              {t(service.descKey)}
                            </p>
                            {isMobile && (
                              <div className={styles.mobileTimeline}>
                                <div className={styles.timelineLine}></div>
                                {service.points.map((point: any, pIndex) => {
                                  const Icon = point.icon;
                                  return (
                                    <div key={pIndex} className={styles.timelinePoint}>
                                      <div className={styles.pointIcon}>
                                        {point.customIcon ? (
                                          <img src={point.customIcon} alt="" className={styles.iconElement} />
                                        ) : (
                                          Icon && <Icon className={styles.iconElement} />
                                        )}
                                      </div>
                                      <p className={styles.pointText}>{t(point.textKey)}</p>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {!isMobile && (
              <div className={styles.rightCol}>
                <div className={styles.timelineContainer}>
                  {SERVICES_CONFIG.map((service, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <div 
                        key={index} 
                        className={`${styles.timelineGroup} ${isActive ? styles.activeTimelineGroup : ''}`}
                      >
                        <div className={styles.timelineLine}></div>
                        {service.points.map((point: any, pIndex) => {
                          const Icon = point.icon;
                          return (
                            <div key={pIndex} className={styles.timelinePoint}>
                              <div className={styles.pointIcon}>
                                {point.customIcon ? (
                                  <img src={point.customIcon} alt="" className={styles.iconElement} />
                                ) : (
                                  Icon && <Icon className={styles.iconElement} />
                                )}
                              </div>
                              <p className={styles.pointText}>{t(point.textKey)}</p>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </Container>
      </div>
    </section>
  );
}

