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

import { useLang } from '@/lib/i18n';

/* ─────────────────────────────────────────────────────────────
   DOMAIN → KPI → DECISION TABLE — 7 domains
   ───────────────────────────────────────────────────────────── */
interface KpiDomain {
  domainEn: string;
  domainEs: string;
  kpiFamilyEn: string;
  kpiFamilyEs: string;
  decisionEn: string;
  decisionEs: string;
  accent: 'violet' | 'cyan' | 'emerald' | 'amber' | 'rose';
}

const KPI_DOMAINS: KpiDomain[] = [
  {
    domainEn: 'Demand',
    domainEs: 'Demanda',
    kpiFamilyEn: 'Forecast accuracy/bias',
    kpiFamilyEs: 'Precisión/sesgo del pronóstico',
    decisionEn: 'Reallocate slots or capacity',
    decisionEs: 'Reasignar slots o capacidad',
    accent: 'violet',
  },
  {
    domainEn: 'Flow',
    domainEs: 'Flujo',
    kpiFamilyEn: 'Throughput, TAT, P50/P80, WIP age',
    kpiFamilyEs: 'Throughput, TAT, P50/P80, antigüedad WIP',
    decisionEn: 'Recover visit plan',
    decisionEs: 'Recuperar plan de visita',
    accent: 'cyan',
  },
  {
    domainEn: 'Capacity',
    domainEs: 'Capacidad',
    kpiFamilyEn: 'Effective capacity, utilisation, constraint loss',
    kpiFamilyEs: 'Capacidad efectiva, utilización, pérdida por restricción',
    decisionEn: 'Commit realistic output',
    decisionEs: 'Comprometer un output realista',
    accent: 'violet',
  },
  {
    domainEn: 'Workforce',
    domainEs: 'Fuerza Laboral',
    kpiFamilyEn: 'Certified-skill coverage, productive hrs, overtime',
    kpiFamilyEs: 'Cobertura de habilidades certificadas, horas productivas, horas extra',
    decisionEn: 'Shift, train, hire, or authorise OT',
    decisionEs: 'Reubicar, capacitar, contratar o autorizar horas extra',
    accent: 'emerald',
  },
  {
    domainEn: 'Material',
    domainEs: 'Material',
    kpiFamilyEn: 'Shortage exposure, supplier OTD/quality, expedite cost',
    kpiFamilyEs: 'Exposición a faltantes, OTD/calidad del proveedor, costo de urgencias',
    decisionEn: 'Protect critical kits',
    decisionEs: 'Proteger kits críticos',
    accent: 'amber',
  },
  {
    domainEn: 'Quality',
    domainEs: 'Calidad',
    kpiFamilyEn: 'First-pass yield, NCRs, rework hours',
    kpiFamilyEs: 'Rendimiento de primer paso, NCR, horas de Rework',
    decisionEn: 'Contain recurring failure',
    decisionEs: 'Contener la falla recurrente',
    accent: 'rose',
  },
  {
    domainEn: 'Finance',
    domainEs: 'Finanzas',
    kpiFamilyEn: 'Cost/visit variance, contribution, benefits realization',
    kpiFamilyEs: 'Varianza costo/visita, contribución, realización de beneficios',
    decisionEn: 'Prioritize value-protecting action',
    decisionEs: 'Priorizar acción que protege el valor',
    accent: 'emerald',
  },
];

/* ─────────────────────────────────────────────────────────────
   FINANCE EQUATIONS
   ───────────────────────────────────────────────────────────── */
interface ValueEquation {
  nameEn: string;
  nameEs: string;
  formulaEn: string;
  formulaEs: string;
}

const VALUE_EQUATIONS: ValueEquation[] = [
  {
    nameEn: 'Throughput Value',
    nameEs: 'Valor por Throughput',
    formulaEn: 'Additional visits completed × approved contribution margin per visit.',
    formulaEs: 'Visitas adicionales completadas × margen de contribución aprobado por visita.',
  },
  {
    nameEn: 'TAT/WIP Value',
    nameEs: 'Valor TAT/WIP',
    formulaEn: 'Validated cycle time reduction × approved daily holding or financing cost.',
    formulaEs: 'Reducción de tiempo de ciclo validada × costo diario de carga o financiamiento aprobado.',
  },
  {
    nameEn: 'Labor Value',
    nameEs: 'Valor de Mano de Obra',
    formulaEn: 'Avoided overtime + productive-hour gain − implementation and operating cost.',
    formulaEs: 'Horas extra evitadas + ganancia en horas productivas − costo de implementación y operación.',
  },
  {
    nameEn: 'CAPEX Value',
    nameEs: 'Valor CAPEX',
    formulaEn: 'Deferred/avoided capital expenditure, only where a governed capacity model supports the decision.',
    formulaEs: 'Inversión diferida/evitada, solo cuando un modelo de capacidad gobernado sustenta la decisión.',
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

function HorizontalGauge({ isEs }: { isEs: boolean }) {
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
          {isEs
            ? 'Equivalentes de visita de capacidad teórica · objetivo 350 visitas/año'
            : 'Theoretical capacity visit-equivalents · 350 visits/year target'}
        </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export function Section07ValueRealization() {
  const { lang } = useLang();
  const isEs = lang === 'es';

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
          key={`s07-title-${lang}`}
          id="section-07-title"
          as="h2"
          className={styles.sectionTitle}
          triggerOnView
        >
          {isEs ? 'KPI y modelo de materialización de valor' : 'KPI and value realization model'}
        </MaskRevealText>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ══ LEAD PROSE ══ */}
      <BlurRevealText key={`s07-lead-${lang}`} as="p" className={styles.leadProse} delay={80}>
        {isEs
          ? 'La capa KPI conecta indicadores predictivos, resultados operativos y valor financiero. Cada medida necesita un propietario, umbral, cadencia, ruta de drill-down y acción. Los beneficios deben avanzar por cuatro estados: potencial, validado, aprobado y realizado.'
          : 'The KPI layer connects predictive signals, operational outcomes, and financial value. Every measure needs an owner, threshold, cadence, drill-down path, and action. Benefits must progress through four states: pipeline, validated, approved, and realized.'}
      </BlurRevealText>

      {/* ══ DOMAIN → KPI → DECISION TABLE ══ */}
      <motion.div
        className={styles.domainTableWrapper}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        role="region"
        aria-label={isEs ? 'Tabla de decisión de dominios KPI' : 'KPI domain decision table'}
      >
        {/* Table head */}
        <div className={styles.domainTableHead} aria-hidden="true">
          <span className={styles.domainHeadCell}>{isEs ? 'DOMINIO' : 'DOMAIN'}</span>
          <span className={styles.domainHeadCell}>{isEs ? 'FAMILIA KPI' : 'KPI FAMILY'}</span>
          <span className={styles.domainHeadCell}>{isEs ? 'DECISIÓN' : 'DECISION'}</span>
        </div>

        {/* Rows */}
        {KPI_DOMAINS.map((row, idx) => (
          <motion.div
            key={row.domainEn}
            className={`${styles.domainRow} ${styles['domainRow--' + row.accent]}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1], delay: idx * 0.065 }}
          >
            <span className={styles.domainName}>{isEs ? row.domainEs : row.domainEn}</span>
            <p className={styles.kpiFamily}>{isEs ? row.kpiFamilyEs : row.kpiFamilyEn}</p>
            <p className={styles.decisionText}>{isEs ? row.decisionEs : row.decisionEn}</p>
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
          <h3 className={styles.scenarioTitle}>
            {isEs ? 'Escenario ilustrativo con datos públicos' : 'Illustrative public-data scenario'}
          </h3>
          <p className={styles.scenarioBody}>
            {isEs
              ? 'Aplicado al objetivo declarado de 350 visitas anuales, una mejora de 1, 3 o 5 puntos porcentuales en disponibilidad efectiva corresponde a 3.5, 10.5 o 17.5 equivalentes de capacidad teórica.'
              : 'Applied to the stated 350-visit target, a 1, 3, or 5 percentage point improvement in effective capacity corresponds to 3.5, 10.5, or 17.5 theoretical capacity equivalents.'}
          </p>

          {/* Formula highlight */}
          <div className={styles.formulaBox} aria-label="Formula: 350 times improvement">
            <span className={styles.formulaLabel}>{isEs ? 'Fórmula' : 'Formula'}</span>
            <div className={styles.formulaExpression}>
              <span className={styles.formulaBase}>350</span>
              <span className={styles.formulaOp}>×</span>
              <span className={styles.formulaImprovement}>
                {isEs ? 'mejora' : 'improvement'}
              </span>
            </div>
          </div>

          <p className={styles.scenarioDisclaimer}>
            {isEs
              ? 'Fuentes: Aritmética ilustrativa únicamente, no constituye un pronóstico o compromiso de beneficio de Safran.'
              : 'Sources: Illustrative arithmetic only, not a Safran forecast or benefit commitment.'}
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
          <h3 className={styles.equationsTitle}>
            {isEs ? 'Ecuaciones de valor aprobadas por Finanzas' : 'Finance-approved value equations'}
          </h3>
          <ul
            className={styles.equationsList}
            aria-label={isEs ? 'Ecuaciones de valor aprobadas por Finanzas' : 'Finance-approved value equations'}
          >
            {VALUE_EQUATIONS.map((eq) => (
              <li key={eq.nameEn} className={styles.equationItem}>
                <span className={styles.equationBullet} aria-hidden="true">•</span>
                <div className={styles.equationText}>
                  <strong className={styles.equationName}>
                    {isEs ? eq.nameEs : eq.nameEn}
                  </strong>
                  {' – '}
                  <span className={styles.equationFormula}>
                    {isEs ? eq.formulaEs : eq.formulaEn}
                  </span>
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
        aria-label={isEs ? 'Gráficos de dona de realización de valor' : 'Value realization donut charts'}
      >
        <div className={styles.donutRings}>
          <AnimatedDonut value={3.5}  maxValue={20} label="1 pp" index={0} />
          <AnimatedDonut value={10.5} maxValue={20} label="3 pp" index={1} />
          <AnimatedDonut value={17.5} maxValue={20} label="5 pp" index={2} />
        </div>

        {/* Horizontal gauge bar */}
        <HorizontalGauge isEs={isEs} />
      </motion.div>
    </section>
  );
}
