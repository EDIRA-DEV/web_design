'use client';

import React, { useState, useRef } from 'react';
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
   STAGE DATA
   ───────────────────────────────────────────────────────────── */
interface Stage {
  step: string;
  name: string;
  icons: React.ComponentType<{ size?: number; className?: string }> [];
  description: string;
  controlObjective: string;
  active?: boolean;
}

const STAGES: Stage[] = [
  {
    step: '01',
    name: 'Source Systems',
    icons: [Database, Settings, Cpu, FileText, Network],
    description: 'MRO/ERP, MES/EAM, QMS, WMS, HR/LMS, Finance, suppliers',
    controlObjective: 'Control objective: Operational events and master data',
    active: false,
  },
  {
    step: '02',
    name: 'Ingestion',
    icons: [ArrowLeftRight, Cloud, Lock, Share2],
    description: 'Batch, CDC, APIs, secure files, event streams',
    controlObjective: 'Control objective: Reliable, monitored movement',
    active: true,
  },
  {
    step: '03',
    name: 'Bronze / Raw',
    icons: [FileCheck],
    description: 'Immutable source-aligned history & raw telemetry',
    controlObjective: 'Control objective: Traceability and replay',
    active: false,
  },
  {
    step: '04',
    name: 'Silver / Conformed',
    icons: [Key, Wrench, Calendar],
    description: 'Keys, units, time zones, deduplication, validated schemas',
    controlObjective: 'Control objective: Single version of operational truth',
    active: false,
  },
  {
    step: '05',
    name: 'Gold / Semantic',
    icons: [TrendingUp, PieChart, BarChart3],
    description: 'Business-ready aggregates: TAT, OEE, WIP index, margin variance',
    controlObjective: 'Control objective: Certified, documented metrics',
    active: true,
  },
  {
    step: '06',
    name: 'Consumption Layer',
    icons: [Layers, Sparkles],
    description: 'Semantic models, Power BI Direct Lake, AI agent & prescriptive APIs',
    controlObjective: 'Control objective: Actionable, explainable recommendations',
    active: false,
  },
];

const CARDS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(STAGES.length / CARDS_PER_PAGE);

/* ─────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
export function MedallionPipeline() {
  const [page, setPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const startIndex = page * CARDS_PER_PAGE;
  const visibleStages = STAGES.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const goPrev = () => setPage((p) => Math.max(p - 1, 0));
  const goNext = () => setPage((p) => Math.min(p + 1, TOTAL_PAGES - 1));

  return (
    <div className={styles.root} aria-label="Medallion architecture pipeline">

      {/* ── Top controls bar ── */}
      <div className={styles.controlsBar}>
        <div className={styles.pipelineLabel}>
          <span className={styles.pipelineLabelText}>Pipeline View:</span>
          <span className={styles.pipelineRange}>
            {startIndex + 1}–{Math.min(startIndex + CARDS_PER_PAGE, STAGES.length)}{' '}
            of {STAGES.length}
          </span>
        </div>
        <div className={styles.navButtons}>
          <button
            className={styles.navBtn}
            onClick={goPrev}
            disabled={page === 0}
            aria-label="Previous stages"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            className={styles.navBtn}
            onClick={goNext}
            disabled={page === TOTAL_PAGES - 1}
            aria-label="Next stages"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* ── Page dots ── */}
      <div className={styles.pageDots} aria-hidden="true">
        {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
          <button
            key={i}
            className={`${styles.pageDot} ${i === page ? styles.pageDotActive : ''}`}
            onClick={() => setPage(i)}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Desktop: 3-card grid with arrow connectors ── */}
      <div className={styles.desktopGrid} aria-live="polite">
        {visibleStages.map((stage, idx) => (
          <React.Fragment key={stage.step}>
            {/* Card */}
            <StageCard stage={stage} />

            {/* Animated arrow connector between cards */}
            {idx < visibleStages.length - 1 && (
              <div className={styles.arrowConnector} aria-hidden="true">
                <ArrowRight className={styles.arrowIcon} size={20} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ── Mobile: horizontal snap scroll (1 card per view) ── */}
      <div
        className={styles.mobileScroll}
        ref={scrollRef}
        role="list"
        aria-label="Pipeline stages"
      >
        {STAGES.map((stage) => (
          <div key={stage.step} className={styles.mobileSnapItem} role="listitem">
            <StageCard stage={stage} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: Individual Stage Card
   ───────────────────────────────────────────────────────────── */
function StageCard({ stage }: { stage: Stage }) {
  return (
    <div
      className={`${styles.card} ${stage.active ? styles.cardActive : ''}`}
      aria-label={`Stage ${stage.step}: ${stage.name}`}
    >
      {/* Floating badge */}
      <div className={`${styles.badge} ${stage.active ? styles.badgeActive : ''}`}>
        {stage.step}
      </div>

      {/* Card body */}
      <div className={styles.cardBody}>
        {/* Title */}
        <h3 className={styles.cardTitle}>{stage.name}</h3>

        {/* Icon cluster */}
        <div className={styles.iconRow} aria-hidden="true">
          {stage.icons.map((Icon, i) => (
            <Icon
              key={i}
              size={16}
              className={stage.active ? styles.iconActive : styles.iconDefault}
            />
          ))}
        </div>

        {/* Description */}
        <p className={styles.cardDescription}>{stage.description}</p>
      </div>

      {/* Footer */}
      <div className={styles.cardFooter}>
        <div className={styles.footerDivider} aria-hidden="true" />
        <p className={`${styles.controlObjective} ${stage.active ? styles.controlObjectiveActive : ''}`}>
          {stage.controlObjective}
        </p>
      </div>
    </div>
  );
}
