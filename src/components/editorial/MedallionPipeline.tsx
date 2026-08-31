'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Database,
  Settings,
  Cpu,
  FileText,
  Network,
  ArrowLeftRight,
  Cloud,
  Lock,
  Share2,
  FileCheck,
  Key,
  Wrench,
  Calendar,
  TrendingUp,
  PieChart,
  BarChart3,
  Layers,
  Sparkles,
} from 'lucide-react';
import styles from './MedallionPipeline.module.css';

/* ─────────────────────────────────────────────────────────────
   STAGE DATA  (no more hardcoded "active" — all cards neutral)
   ───────────────────────────────────────────────────────────── */
interface Stage {
  step: string;
  name: string;
  icons: React.ComponentType<{ size?: number; className?: string }>[];
  description: string;
  controlObjective: string;
}

const STAGES: Stage[] = [
  {
    step: '01',
    name: 'Source Systems',
    icons: [Database, Settings, Cpu, FileText, Network],
    description: 'MRO/ERP, MES/EAM, QMS, WMS, HR/LMS, Finance, suppliers',
    controlObjective: 'Control objective: Operational events and master data',
  },
  {
    step: '02',
    name: 'Ingestion',
    icons: [ArrowLeftRight, Cloud, Lock, Share2],
    description: 'Batch, CDC, APIs, secure files, event streams',
    controlObjective: 'Control objective: Reliable, monitored movement',
  },
  {
    step: '03',
    name: 'Bronze / Raw',
    icons: [FileCheck],
    description: 'Immutable source-aligned history & raw telemetry',
    controlObjective: 'Control objective: Traceability and replay',
  },
  {
    step: '04',
    name: 'Silver / Conformed',
    icons: [Key, Wrench, Calendar],
    description: 'Keys, units, time zones, deduplication, validated schemas',
    controlObjective: 'Control objective: Single version of operational truth',
  },
  {
    step: '05',
    name: 'Gold / Semantic',
    icons: [TrendingUp, PieChart, BarChart3],
    description: 'Business-ready aggregates: TAT, OEE, WIP index, margin variance',
    controlObjective: 'Control objective: Certified, documented metrics',
  },
  {
    step: '06',
    name: 'Consumption Layer',
    icons: [Layers, Sparkles],
    description: 'Semantic models, Power BI Direct Lake, AI agent & prescriptive APIs',
    controlObjective: 'Control objective: Actionable, explainable recommendations',
  },
];

const TOTAL = STAGES.length; // 6

/* ─────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
export function MedallionPipeline() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  /* Detect mobile on mount + resize */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const stepSize = isMobile ? 1 : 3;
  const maxIndex = isMobile ? TOTAL - 1 : TOTAL - 3;

  const goNext = () => {
    if (currentIndex >= maxIndex) return;
    setDirection('next');
    setCurrentIndex((p) => Math.min(p + stepSize, maxIndex));
  };

  const goPrev = () => {
    if (currentIndex <= 0) return;
    setDirection('prev');
    setCurrentIndex((p) => Math.max(p - stepSize, 0));
  };

  /* Which cards to render */
  const visibleStages = isMobile
    ? [STAGES[currentIndex]]
    : STAGES.slice(currentIndex, currentIndex + 3);

  /* Label: "1 of 6" on mobile / "1–3 of 6" on desktop */
  const rangeLabel = isMobile
    ? `${currentIndex + 1} of ${TOTAL}`
    : `${currentIndex + 1}–${Math.min(currentIndex + 3, TOTAL)} of ${TOTAL}`;

  /* Framer motion variants */
  const containerVariants = {
    enter: (dir: 'next' | 'prev') => ({
      opacity: 0,
      x: dir === 'next' ? 40 : -40,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: 'next' | 'prev') => ({
      opacity: 0,
      x: dir === 'next' ? -40 : 40,
    }),
  };

  return (
    /* Outer overflow guard — prevents horizontal scroll on mobile */
    <div className={styles.outerGuard}>
      <div className={styles.root}>

        {/* ── Controls bar ── */}
        <div className={styles.controlsBar}>
          <div className={styles.pipelineLabel}>
            <span className={styles.pipelineLabelText}>Pipeline View:</span>
            <span className={styles.pipelineRange}>{rangeLabel}</span>
          </div>
          <div className={styles.navButtons}>
            <button
              className={styles.navBtn}
              onClick={goPrev}
              disabled={currentIndex === 0}
              aria-label="Previous stage"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className={styles.navBtn}
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next stage"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* ── Page dots ── */}
        <div className={styles.pageDots} aria-hidden="true">
          {Array.from({ length: isMobile ? TOTAL : Math.ceil(TOTAL / 3) }).map((_, i) => (
            <button
              key={i}
              className={`${styles.pageDot} ${
                (isMobile ? i === currentIndex : i === Math.floor(currentIndex / 3))
                  ? styles.pageDotActive
                  : ''
              }`}
              onClick={() => {
                const target = isMobile ? i : i * 3;
                setDirection(target > currentIndex ? 'next' : 'prev');
                setCurrentIndex(target);
              }}
              aria-label={`Go to ${isMobile ? `stage ${i + 1}` : `page ${i + 1}`}`}
            />
          ))}
        </div>

        {/* ── Animated card group ── */}
        <div className={styles.cardViewport}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              className={styles.cardRow}
              custom={direction}
              variants={containerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            >
              {visibleStages.map((stage, idx) => (
                <React.Fragment key={stage.step}>
                  {/* ─── Card wrapper: relative, no overflow-hidden (so badge is never clipped) ─── */}
                  <div className={styles.cardWrapper}>
                    {/* Floating badge lives on the wrapper, above the overflow-hidden card */}
                    <div className={styles.badge} aria-hidden="true">{stage.step}</div>

                    {/* Card: overflow-hidden only here (contains border beam) */}
                    <div
                      className={styles.card}
                      aria-label={`Stage ${stage.step}: ${stage.name}`}
                    >
                      {/* Border beam overlay (activated on hover via CSS) */}
                      <div className={styles.borderBeam} aria-hidden="true" />

                      {/* Body */}
                      <div className={styles.cardBody}>
                        <h3 className={styles.cardTitle}>{stage.name}</h3>
                        <div className={styles.iconRow} aria-hidden="true">
                          {stage.icons.map((Icon, i) => (
                            <Icon key={i} size={15} className={styles.iconDefault} />
                          ))}
                        </div>
                        <p className={styles.cardDescription}>{stage.description}</p>
                      </div>

                      {/* Footer */}
                      <div className={styles.cardFooter}>
                        <div className={styles.footerDivider} />
                        <p className={styles.controlObjective}>{stage.controlObjective}</p>
                      </div>
                    </div>
                  </div>

                  {/* ─── Directional arrow connector (desktop only) ─── */}
                  {idx < visibleStages.length - 1 && (
                    <div className={styles.arrowConnector} aria-hidden="true">
                      <ArrowRight className={styles.arrowIcon} size={18} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
