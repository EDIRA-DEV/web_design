'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';
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

import { useLang } from '@/lib/i18n';

/* ─────────────────────────────────────────────────────────────
   STAGE DATA  (no more hardcoded "active" — all cards neutral)
   ───────────────────────────────────────────────────────────── */
interface Stage {
  step: string;
  nameEn: string;
  nameEs: string;
  icons: React.ComponentType<{ size?: number; className?: string }>[];
  descriptionEn: string;
  descriptionEs: string;
  controlObjectiveEn: string;
  controlObjectiveEs: string;
}

const STAGES: Stage[] = [
  {
    step: '01',
    nameEn: 'Source Systems',
    nameEs: 'Sistemas Fuente',
    icons: [Database, Settings, Cpu, FileText, Network],
    descriptionEn: 'MRO/ERP, MES/EAM, QMS, WMS, HR/LMS, Finance, suppliers',
    descriptionEs: 'MRO/ERP, MES/EAM, QMS, WMS, HR/LMS, Finanzas, proveedores',
    controlObjectiveEn: 'Control objective: Operational events and master data',
    controlObjectiveEs: 'Objetivo de control: Eventos operativos y datos maestros',
  },
  {
    step: '02',
    nameEn: 'Ingestion',
    nameEs: 'Ingestion',
    icons: [ArrowLeftRight, Cloud, Lock, Share2],
    descriptionEn: 'Batch, CDC, APIs, secure files, Event Streams',
    descriptionEs: 'Batch, CDC, APIs, archivos seguros, Event Streams',
    controlObjectiveEn: 'Control objective: Reliable, monitored movement',
    controlObjectiveEs: 'Objetivo de control: Movimiento confiable y monitoreado',
  },
  {
    step: '03',
    nameEn: 'Bronze / Raw',
    nameEs: 'Bronze / Raw',
    icons: [FileCheck],
    descriptionEn: 'Source-aligned immutable history and raw telemetry',
    descriptionEs: 'Historial inmutable alineado a la fuente y telemetría cruda',
    controlObjectiveEn: 'Control objective: Traceability and reproducibility',
    controlObjectiveEs: 'Objetivo de control: Trazabilidad y reproducibilidad',
  },
  {
    step: '04',
    nameEn: 'Silver / Conformed',
    nameEs: 'Silver / Conformed',
    icons: [Key, Wrench, Calendar],
    descriptionEn: 'Keys, units, timezones, deduplication, validated schemas',
    descriptionEs: 'Claves, unidades, zonas horarias, deduplicación, esquemas validados',
    controlObjectiveEn: 'Control objective: Single operational truth',
    controlObjectiveEs: 'Objetivo de control: Fuente única de verdad operativa',
  },
  {
    step: '05',
    nameEn: 'Gold / Semantic',
    nameEs: 'Gold / Semantic',
    icons: [TrendingUp, PieChart, BarChart3],
    descriptionEn: 'Business-ready aggregates: TAT, OEE, WIP index, margin variance',
    descriptionEs: 'Agregados listos para el negocio: TAT, OEE, índice WIP, varianza de margen',
    controlObjectiveEn: 'Control objective: Certified, documented metrics',
    controlObjectiveEs: 'Objetivo de control: Métricas certificadas y documentadas',
  },
  {
    step: '06',
    nameEn: 'Consumption Layer',
    nameEs: 'Capa de Consumo',
    icons: [Layers, Sparkles],
    descriptionEn: 'Semantic models, Power BI Direct Lake, AI agent & prescriptive APIs',
    descriptionEs: 'Semantic models, Power BI Direct Lake, agente de IA y APIs prescriptivas',
    controlObjectiveEn: 'Control objective: Actionable, explainable recommendations',
    controlObjectiveEs: 'Objetivo de control: Recomendaciones accionables y explicables',
  },
];

const TOTAL = STAGES.length; // 6

/* ─────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
export function MedallionPipeline() {
  const { lang } = useLang();
  const isEs = lang === 'es';
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

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 40;
    const velocityThreshold = 400;

    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      goNext();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      goPrev();
    }
  };

  /* Which cards to render */
  const visibleStages = isMobile
    ? [STAGES[currentIndex]]
    : STAGES.slice(currentIndex, currentIndex + 3);

  /* Label: "1 de 6" / "1 of 6" */
  const ofWord = isEs ? 'de' : 'of';
  const rangeLabel = isMobile
    ? `${currentIndex + 1} ${ofWord} ${TOTAL}`
    : `${currentIndex + 1}–${Math.min(currentIndex + 3, TOTAL)} ${ofWord} ${TOTAL}`;

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
            <span className={styles.pipelineLabelText}>
              {isEs ? 'Vista del Pipeline:' : 'Pipeline View:'}
            </span>
            <span className={styles.pipelineRange}>{rangeLabel}</span>
          </div>
          <div className={styles.navButtons}>
            <button
              className={styles.navBtn}
              onClick={goPrev}
              disabled={currentIndex === 0}
              aria-label={isEs ? 'Etapas anteriores' : 'Previous stage'}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className={styles.navBtn}
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              aria-label={isEs ? 'Siguientes etapas' : 'Next stage'}
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

        {/* ── Animated card group with touch / drag swipe gestures ── */}
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
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
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
                      aria-label={`Stage ${stage.step}: ${isEs ? stage.nameEs : stage.nameEn}`}
                    >
                      {/* Border beam overlay (activated on hover via CSS) */}
                      <div className={styles.borderBeam} aria-hidden="true" />

                      {/* Body */}
                      <div className={styles.cardBody}>
                        <h3 className={styles.cardTitle}>
                          {isEs ? stage.nameEs : stage.nameEn}
                        </h3>
                        <div className={styles.iconRow} aria-hidden="true">
                          {stage.icons.map((Icon, i) => (
                            <Icon key={i} size={15} className={styles.iconDefault} />
                          ))}
                        </div>
                        <p className={styles.cardDescription}>
                          {isEs ? stage.descriptionEs : stage.descriptionEn}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className={styles.cardFooter}>
                        <div className={styles.footerDivider} />
                        <p className={styles.controlObjective}>
                          {isEs ? stage.controlObjectiveEs : stage.controlObjectiveEn}
                        </p>
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
