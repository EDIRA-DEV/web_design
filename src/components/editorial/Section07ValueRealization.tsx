'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MaskRevealText, ScrambleText, BlurRevealText } from './TextAnimations';
import styles from './Section07ValueRealization.module.css';

/* ─────────────────────────────────────────────────────────────
   SHARED SCROLL-PROGRESS HOOK
   Identical pattern to PublicSignalsChart — pure rAF-driven,
   no framer-motion spring lag.
   progress 0 = element bottom just enters viewport
   progress 1 = element center aligns with visible viewport center
   ───────────────────────────────────────────────────────────── */
function useScrollProgress(ref: React.RefObject<Element | null>) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  function clamp01(v: number) { return Math.max(0, Math.min(1, v)); }

  const compute = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect      = el.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const navbarEl  = document.querySelector('[class*="Navbar-module"]') as HTMLElement | null;
    const subNavEl  = document.querySelector('[class*="MobileEditorialSubNav-module"]') as HTMLElement | null;
    const navbarH   = navbarEl  ? navbarEl.offsetHeight  : 72;
    const subNavH   = (subNavEl && subNavEl.offsetHeight > 0) ? subNavEl.offsetHeight : 0;
    const headerOffset = navbarH + subNavH;
    const usableH   = viewportH - headerOffset;
    const traveled  = viewportH - rect.top;
    const completeAt = usableH * 0.55;
    setProgress(clamp01(traveled / completeAt));
  }, [ref]);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(compute);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    compute();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [compute]);

  return progress;
}

/* ─────────────────────────────────────────────────────────────
   DOMAIN → KPI → DECISION TABLE — 6 domains
   ───────────────────────────────────────────────────────────── */
interface KpiDomain {
  domain: string;
  kpiFamily: string;
  decision: string;
  accent: 'violet' | 'cyan' | 'emerald' | 'amber' | 'rose';
}

const KPI_DOMAINS: KpiDomain[] = [
  {
    domain: 'Demand',
    kpiFamily: 'Forecast accuracy/bias',
    decision: 'Reallocate slots or capacity',
    accent: 'violet',
  },
  {
    domain: 'Flow',
    kpiFamily: 'Throughput, TAT, P50/P80, WIP aging',
    decision: 'Recover visit plan',
    accent: 'cyan',
  },
  {
    domain: 'Capacity',
    kpiFamily: 'Effective capacity, utilization, constraint loss',
    decision: 'Commit realistic output',
    accent: 'violet',
  },
  {
    domain: 'Workforce',
    kpiFamily: 'Certified-skill coverage, productive hours, overtime',
    decision: 'Move, train, hire, or authorize overtime',
    accent: 'emerald',
  },
  {
    domain: 'Material',
    kpiFamily: 'Shortage exposure, supplier OTD/quality, expedite cost',
    decision: 'Protect critical kits',
    accent: 'amber',
  },
  {
    domain: 'Quality',
    kpiFamily: 'First-pass yield, NCR, rework hours',
    decision: 'Contain repeat failure',
    accent: 'rose',
  },
  {
    domain: 'Finance',
    kpiFamily: 'Cost/visit variance, contribution, benefit realization',
    decision: 'Prioritize value-protecting action',
    accent: 'emerald',
  },
];

/* ─────────────────────────────────────────────────────────────
   FINANCE EQUATIONS
   ───────────────────────────────────────────────────────────── */
interface ValueEquation {
  name: string;
  formula: string;
}

const VALUE_EQUATIONS: ValueEquation[] = [
  {
    name: 'Throughput value',
    formula: 'incremental completed visits × approved contribution margin per visit.',
  },
  {
    name: 'TAT/WIP value',
    formula: 'validated cycle-time reduction × approved daily carrying or financing cost.',
  },
  {
    name: 'Labor value',
    formula: 'avoided overtime + productive-hour gain − implementation and operating cost.',
  },
  {
    name: 'CAPEX value',
    formula: 'deferred/avoided investment, only when a governed capacity model supports the decision.',
  },
];

/* ─────────────────────────────────────────────────────────────
   GRADIENT DEFINITIONS PER RING
   index 0 → light violet   (3.5)
   index 1 → medium violet  (10.5)
   index 2 → deep violet    (17.5)
   ───────────────────────────────────────────────────────────── */
const DONUT_GRADIENTS = [
  // Light — pastel lavender
  { from: '#DDD6FE', via: '#C4B5FD', to: '#A78BFA' },
  // Medium
  { from: '#A855F7', via: '#8B5CF6', to: '#7C3AED' },
  // Dark — deep indigo
  { from: '#7C3AED', via: '#6D28D9', to: '#4C1D95' },
];

/* ─────────────────────────────────────────────────────────────
   ANIMATED DONUT RING — scroll-driven, matches PublicSignalsChart
   ───────────────────────────────────────────────────────────── */
interface DonutProps {
  value: number;        // Display value (e.g. 3.5)
  maxValue: number;     // Scale max (e.g. 20)
  label: string;        // Bottom label (e.g. "1 pp")
  index: number;
}

function AnimatedDonut({ value, maxValue, label, index }: DonutProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  // Use the shared scroll hook — progress 0→1 drives everything
  const progress = useScrollProgress(svgRef);

  const R            = 52;
  const cx           = 68;
  const cy           = 68;
  const circumference = 2 * Math.PI * R;

  /*
   * Stagger: ring i starts filling a bit after ring i-1.
   * colStart shifts the zero-point of each ring's local progress.
   */
  const colStart   = index * 0.06;
  const localProg  = Math.max(0, Math.min(1, colStart < 1 ? (progress - colStart) / (1 - colStart) : progress));

  // Arc fill
  const fillRatio  = value / maxValue;
  const dashLength = fillRatio * circumference * localProg;

  // Counter — pure function of scroll progress
  const displayVal = (value * localProg).toFixed(1);

  // Label alpha fades in once ring is > 10% filled
  const labelAlpha = Math.max(0, Math.min(1, (localProg - 0.10) / 0.15));

  const grad = DONUT_GRADIENTS[index];
  const gradId = `donut-grad-${index}`;
  const glowId = `donut-glow-${index}`;

  return (
    <div className={styles.donutWrapper}>
      <svg
        ref={svgRef}
        className={styles.donutSvg}
        viewBox="0 0 136 136"
        aria-label={`${displayVal} visit-equivalents at ${label} improvement`}
        role="img"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor={grad.from} />
            <stop offset="50%"  stopColor={grad.via}  />
            <stop offset="100%" stopColor={grad.to}   />
          </linearGradient>
          <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background track — same dark grey as the PublicSignalsChart bars */}
        <circle
          cx={cx} cy={cy} r={R}
          fill="none"
          stroke="#222736"
          strokeWidth="16"
        />

        {/* Scroll-driven fill arc */}
        <circle
          cx={cx} cy={cy} r={R}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="16"
          strokeLinecap="round"
          /* rotate so the arc starts at 12-o'clock */
          transform={`rotate(-90 ${cx} ${cy})`}
          strokeDasharray={`${dashLength} ${circumference - dashLength}`}
          filter={`url(#${glowId})`}
        />

        {/* Center counter — animated with scroll */}
        <text
          x={cx} y={cy + 6}
          textAnchor="middle"
          className={styles.donutValue}
          fill="#ffffff"
        >
          {displayVal}
        </text>
      </svg>

      {/* Bottom label fades in with the ring */}
      <span className={styles.donutLabel} style={{ opacity: labelAlpha }}>{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   HORIZONTAL GAUGE
   ───────────────────────────────────────────────────────────── */
const GAUGE_MARKERS = [
  { value: 3.5, label: '1 pp', pct: (3.5 / 20) * 100 },
  { value: 10.5, label: '3 pp', pct: (10.5 / 20) * 100 },
  { value: 17.5, label: '5 pp', pct: (17.5 / 20) * 100 },
];

function HorizontalGauge() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div className={styles.gaugeWrapper} ref={ref} aria-label="Value range gauge 0 to 20">
      <div className={styles.gaugeTrack}>
        <motion.div
          className={styles.gaugeFill}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{ transformOrigin: 'left center' }}
        />
        {GAUGE_MARKERS.map((m) => (
          <div
            key={m.label}
            className={styles.gaugeMarker}
            style={{ left: `${m.pct}%` }}
            aria-label={`${m.value} visit-equivalents at ${m.label}`}
          >
            <div className={styles.gaugeMarkerTick} />
          </div>
        ))}
      </div>
      <div className={styles.gaugeScale}>
        <span className={styles.gaugeScaleLabel}>0.0</span>
        <span className={styles.gaugeScaleLabel}>5.0</span>
        <span className={styles.gaugeScaleLabel}>10</span>
        <span className={styles.gaugeScaleLabel}>12.5</span>
        <span className={styles.gaugeScaleLabel}>17.5</span>
        <span className={styles.gaugeScaleLabel}>20</span>
      </div>
      <p className={styles.gaugeNote}>
        Visit-equivalents of theoretical capacity · 350-visit/year target
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export function Section07ValueRealization() {
  return (
    <section
      id="section-07"
      className={styles.section}
      aria-labelledby="section-07-title"
    >
      {/* ══ SECTION HEADER ══ */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber} aria-hidden="true">
          <ScrambleText text="07" triggerOnView duration={320} />
        </span>
        <MaskRevealText
          id="section-07-title"
          as="h2"
          className={styles.sectionTitle}
          triggerOnView
        >
          KPI and value realization model
        </MaskRevealText>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ══ LEAD PROSE ══ */}
      <BlurRevealText as="p" className={styles.leadProse} delay={80}>
        The KPI layer links leading indicators, operational outcomes, and financial value. Every
        measure needs an owner, threshold, cadence, drill path, and action. Benefits must progress
        through four states: potential, validated, approved, and realized.
      </BlurRevealText>

      {/* ══ DOMAIN → KPI → DECISION TABLE ══ */}
      <motion.div
        className={styles.domainTableWrapper}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        role="region"
        aria-label="KPI domain decision table"
      >
        {/* Table head */}
        <div className={styles.domainTableHead} aria-hidden="true">
          <span className={styles.domainHeadCell}>DOMAIN</span>
          <span className={styles.domainHeadCell}>KPI FAMILY</span>
          <span className={styles.domainHeadCell}>DECISION</span>
        </div>

        {/* Rows */}
        {KPI_DOMAINS.map((row, idx) => (
          <motion.div
            key={row.domain}
            className={`${styles.domainRow} ${styles['domainRow--' + row.accent]}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1], delay: idx * 0.065 }}
          >
            <span className={styles.domainName}>{row.domain}</span>
            <p className={styles.kpiFamily}>{row.kpiFamily}</p>
            <p className={styles.decisionText}>{row.decision}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ══ TWO-COLUMN: SCENARIO + EQUATIONS ══ */}
      <div className={styles.scenarioGrid}>
        {/* Left: Illustrative scenario */}
        <motion.div
          className={styles.scenarioCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className={styles.scenarioTitle}>Illustrative public-data scenario</h3>
          <p className={styles.scenarioBody}>
            Applied to the stated target of 350 annual visits, a 1, 3, or 5 percentage-point
            improvement in effective availability corresponds to 3.5, 10.5, or 17.5
            visit-equivalents of theoretical capacity.
          </p>

          {/* Formula highlight */}
          <div className={styles.formulaBox} aria-label="Formula: 350 times improvement">
            <span className={styles.formulaLabel}>Formula</span>
            <div className={styles.formulaExpression}>
              <span className={styles.formulaBase}>350</span>
              <span className={styles.formulaOp}>×</span>
              <span className={styles.formulaImprovement}>improvement</span>
            </div>
          </div>

          <p className={styles.scenarioDisclaimer}>
            Sources: Illustrative arithmetic only, not a Safran forecast or benefit claim.
          </p>
        </motion.div>

        {/* Right: Finance equations */}
        <motion.div
          className={styles.equationsCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <h3 className={styles.equationsTitle}>Finance-approved value equations</h3>
          <ul className={styles.equationsList} aria-label="Finance-approved value equations">
            {VALUE_EQUATIONS.map((eq) => (
              <li key={eq.name} className={styles.equationItem}>
                <span className={styles.equationBullet} aria-hidden="true">•</span>
                <div className={styles.equationText}>
                  <strong className={styles.equationName}>{eq.name}</strong>
                  {' – '}
                  <span className={styles.equationFormula}>{eq.formula}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ══ ANIMATED DONUT RINGS ══ */}
      <motion.div
        className={styles.donutSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        aria-label="Value realization donut charts"
      >
        <div className={styles.donutRings}>
          <AnimatedDonut value={3.5}  maxValue={20} label="1 pp" index={0} />
          <AnimatedDonut value={10.5} maxValue={20} label="3 pp" index={1} />
          <AnimatedDonut value={17.5} maxValue={20} label="5 pp" index={2} />
        </div>

        {/* Horizontal gauge bar */}
        <HorizontalGauge />
      </motion.div>
    </section>
  );
}
