'use client';

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { MaskRevealText, ScrambleText, BlurRevealText } from './TextAnimations';
import styles from './Section04SemanticMetrics.module.css';

/* ─────────────────────────────────────────────────────────────
   KPI NODE DATA — Full 8-field calculation contract
   ───────────────────────────────────────────────────────────── */
interface KpiNode {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  coreLogic: string;
  guardrail: string;
  grain: string;
  owner: string;
  threshold: string;
  accentColor: 'violet' | 'cyan' | 'emerald';
}

const KPI_NODES: KpiNode[] = [
  {
    id: 'tat',
    step: '01',
    title: 'TAT',
    subtitle: 'Turn-Around Time',
    coreLogic: 'Release timestamp \u2212 Induction timestamp.',
    guardrail: 'Median + P80/P90 by scope.',
    grain: 'Shop visit \u00b7 workscope tier \u00b7 engine family',
    owner: 'MRO Operations Lead',
    threshold: 'P80 \u2264 contractual TAT; median \u2264 baseline \u22125%',
    accentColor: 'violet',
  },
  {
    id: 'effective-capacity',
    step: '02',
    title: 'Effective Cap.',
    subtitle: 'Effective Capacity',
    coreLogic: 'Nominal time less planned / unplanned constraint loss.',
    guardrail: 'Never infer from nominal capacity alone.',
    grain: 'Bay \u00b7 shift \u00b7 week',
    owner: 'Planning & Scheduling Manager',
    threshold: 'Utilisation \u2265 85% of effective cap.',
    accentColor: 'cyan',
  },
  {
    id: 'wip-aging',
    step: '03',
    title: 'WIP Aging',
    subtitle: 'Work-in-Process Age',
    coreLogic: 'Current time \u2212 Current-stage entry time.',
    guardrail: 'Threshold by stage and workscope.',
    grain: 'Shop-visit \u00b7 stage \u00b7 day',
    owner: 'Production Control',
    threshold: 'No visit > 120% of stage TAT target',
    accentColor: 'violet',
  },
  {
    id: 'skill-coverage',
    step: '04',
    title: 'Skill Coverage',
    subtitle: 'Workforce Skill Coverage',
    coreLogic: 'Nominal time less planned / unplanned constraint loss.',
    guardrail: 'By skill, shift, and horizon.',
    grain: 'Skill cluster \u00b7 shift \u00b7 week',
    owner: 'Workforce Planning Lead',
    threshold: 'Coverage \u2265 95% of demand across all critical skills',
    accentColor: 'emerald',
  },
  {
    id: 'shortage-exposure',
    step: '05',
    title: 'Shortage Exp.',
    subtitle: 'Parts Shortage Exposure',
    coreLogic: 'Planned visit hours at risk from missing parts.',
    guardrail: 'Avoid simple part-count metrics.',
    grain: 'Shop-visit \u00b7 part-class \u00b7 week',
    owner: 'Supply Chain Intelligence',
    threshold: 'Exposure hours \u2264 2% of scheduled production hrs',
    accentColor: 'cyan',
  },
];

/* ─────────────────────────────────────────────────────────────
   SEMANTIC DEFINITION LEDGER — 8 Contract Fields
   ───────────────────────────────────────────────────────────── */
interface ContractField {
  field: string;
  description: string;
  example: string;
}

const CONTRACT_FIELDS: ContractField[] = [
  {
    field: 'Business Definition',
    description: 'Plain-language statement of what the KPI measures and why it matters operationally.',
    example: 'Hours elapsed from induction check-in to final release stamp.',
  },
  {
    field: 'Grain',
    description: 'The most granular level at which the measure is computed and stored.',
    example: 'Shop visit \u00d7 workscope tier \u00d7 engine family \u00d7 week.',
  },
  {
    field: 'Numerator / Denominator',
    description: 'Explicit DAX or SQL expressions for both parts of a ratio measure.',
    example: 'CALCULATE(SUM(Visits[TAT_Hours]), USERELATIONSHIP(...))',
  },
  {
    field: 'Exclusions',
    description: 'Events or records intentionally removed from the calculation scope.',
    example: 'Customer-caused holds, AOG-priority overrides, regulatory suspensions.',
  },
  {
    field: 'Time Logic',
    description: 'Calendar dimension relationships, fiscal vs. calendar year, and time-intelligence patterns.',
    example: 'Rolling 13-week window; excludes weekends from constraint loss.',
  },
  {
    field: 'Owner',
    description: 'Named role accountable for the KPI definition, threshold setting, and reconciliation.',
    example: 'MRO Operations Lead (primary) / Planning Manager (backup).',
  },
  {
    field: 'Threshold',
    description: 'Quantified alert or SLA boundary that triggers governance action when breached.',
    example: 'P80 TAT \u2264 contractual ceiling; red if +10% above target.',
  },
  {
    field: 'Reconciliation Test',
    description: 'Automated assertion that confirms the measure matches source-system totals.',
    example: 'ASSERT SUM(TAT_Hours) = [ERP_Actual_Hours] \u00b1 0.1%.',
  },
];

/* ─────────────────────────────────────────────────────────────
   NODE CARD  (whileInView progressive activation)
   ───────────────────────────────────────────────────────────── */
function KpiCard({ node, index }: { node: KpiNode; index: number }) {
  return (
    <motion.div
      className={`${styles.nodeCard} ${styles['nodeCard--' + node.accentColor]}`}
      initial={{ opacity: 0, y: 28, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.09,
      }}
      whileHover={{ scale: 1.025, transition: { duration: 0.22 } }}
    >
      {/* Top accent ribbon */}
      <div className={styles.nodeRibbon} aria-hidden="true">
        <motion.div
          className={styles.nodeRibbonFill}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: index * 0.09 + 0.32, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Connection port dot */}
      <div className={styles.portDot} aria-hidden="true">
        <motion.div
          className={styles.portDotCore}
          animate={{ scale: [1, 1.5, 1], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.35 }}
        />
      </div>

      {/* Step badge */}
      <div className={styles.stepBadge} aria-label={`Metric ${node.step}`}>
        <span className={styles.stepNumber}>{node.step}</span>
      </div>

      {/* Node header */}
      <div className={styles.nodeTitleGroup}>
        <h3 className={styles.nodeTitle}>{node.title}</h3>
        <span className={styles.nodeSubtitle}>{node.subtitle}</span>
      </div>

      {/* Core Logic */}
      <div className={styles.nodeBlock}>
        <span className={styles.nodeBlockLabel}>CORE LOGIC:</span>
        <p className={styles.nodeBlockBody}>{node.coreLogic}</p>
      </div>

      {/* Meta row: grain + owner */}
      <div className={styles.nodeMeta}>
        <div className={styles.nodeMetaItem}>
          <span className={styles.nodeMetaLabel}>GRAIN</span>
          <span className={styles.nodeMetaValue}>{node.grain}</span>
        </div>
        <div className={styles.nodeMetaItem}>
          <span className={styles.nodeMetaLabel}>OWNER</span>
          <span className={styles.nodeMetaValue}>{node.owner}</span>
        </div>
      </div>

      {/* Guardrail + threshold */}
      <div className={styles.guardrailBox}>
        <span className={styles.guardrailLabel}>GUARDRAIL:</span>
        <p className={styles.guardrailBody}>{node.guardrail}</p>
        <span className={styles.thresholdPill}>{node.threshold}</span>
      </div>

      {/* Subtle corner glow */}
      <div className={styles.cornerGlow} aria-hidden="true" />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   TRACING BEAM SVG  (scroll-driven illuminated path)
   ───────────────────────────────────────────────────────────── */
function TracingBeam({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  const D =
    'M 50 0 L 50 120 Q 50 160 90 160 L 910 160 Q 950 160 950 200 L 950 320 Q 950 360 910 360 L 90 360 Q 50 360 50 400 L 50 520';

  return (
    <svg
      className={styles.tracingSvg}
      viewBox="0 0 1000 540"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tracing-beam-gradient-s04" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0" />
          <stop offset="18%" stopColor="#A855F7" stopOpacity="1" />
          <stop offset="55%" stopColor="#38BDF8" stopOpacity="1" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* Inactive dashed background track */}
      <path
        d={D}
        stroke="rgba(168,85,247,0.15)"
        strokeWidth="2.5"
        strokeDasharray="6 6"
        fill="none"
      />

      {/* Active animated beam */}
      <motion.path
        d={D}
        stroke="url(#tracing-beam-gradient-s04)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        filter="drop-shadow(0px 0px 8px #A855F7)"
        style={{ pathLength, opacity }}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTRACT FIELD ROW
   ───────────────────────────────────────────────────────────── */
function ContractFieldRow({ field, index }: { field: ContractField; index: number }) {
  return (
    <motion.tr
      className={styles.tableRow}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.055 }}
    >
      <td className={styles.tableCellField}>
        <span className={styles.fieldBadge}>{field.field}</span>
      </td>
      <td className={styles.tableCellDesc}>{field.description}</td>
      <td className={styles.tableCellExample}>
        <code className={styles.exampleCode}>{field.example}</code>
      </td>
    </motion.tr>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN SECTION COMPONENT
   ───────────────────────────────────────────────────────────── */
export function Section04SemanticMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const topRow = KPI_NODES.slice(0, 3);
  const bottomRow = KPI_NODES.slice(3);

  return (
    <section
      id="section-04"
      className={styles.section}
      aria-labelledby="section-04-title"
    >
      {/* ══ PREVIOUS SECTION PLACEHOLDER ══ */}
      <div
        className={styles.previousPlaceholder}
        role="note"
        aria-label="Section 04.1 placeholder"
      >
        <span className={styles.placeholderLabel}>
          [ Section 04.1 &bull; Data Governance Operating Mechanisms Placeholder ]
        </span>
      </div>

      {/* ══ SECTION HEADER ══ */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber} aria-hidden="true">
          <ScrambleText text="04" triggerOnView duration={320} />
        </span>
        <MaskRevealText
          id="section-04-title"
          as="h2"
          className={styles.sectionTitle}
          triggerOnView
        >
          Semantic Metrics &amp; Calculation Contracts
        </MaskRevealText>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ══ LEAD PROSE ══ */}
      <BlurRevealText as="p" className={styles.leadProse} delay={80}>
        The Power BI semantic model should calculate KPIs once and reuse them across pages, alerts,
        exports, and models. Each measure requires a business definition, grain,
        numerator/denominator, exclusions, time logic, owner, threshold, and reconciliation test.
      </BlurRevealText>

      {/* ══ CIRCUIT PIPELINE (Tracing Beam + Node Grid) ══ */}
      <div className={styles.pipelineWrapper} ref={containerRef}>
        {/* Scroll-driven tracing beam (desktop only) */}
        <div className={styles.beamLayer} aria-hidden="true">
          <TracingBeam scrollYProgress={scrollYProgress} />
        </div>

        {/* ── ROW 1: Nodes 1–3 ── */}
        <div className={styles.nodeRow} aria-label="KPI metrics row 1">
          {topRow.map((node, idx) => (
            <KpiCard key={node.id} node={node} index={idx} />
          ))}
        </div>

        {/* ── ROW 2: Nodes 4–5 (right-offset on desktop) ── */}
        <div
          className={`${styles.nodeRow} ${styles.nodeRowReversed}`}
          aria-label="KPI metrics row 2"
        >
          <KpiCard key={bottomRow[0].id} node={bottomRow[0]} index={3} />
          <KpiCard key={bottomRow[1].id} node={bottomRow[1]} index={4} />
        </div>
      </div>

      {/* ══ SEMANTIC CONTRACT DEFINITION LEDGER ══ */}
      <motion.div
        className={styles.ledgerWrapper}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Ledger header */}
        <div className={styles.ledgerHeader}>
          <div className={styles.ledgerHeaderLeft}>
            <span className={styles.ledgerEyebrow}>DEFINITION LEDGER</span>
            <h3 className={styles.ledgerTitle}>8-Field Calculation Contract</h3>
          </div>
          <div className={styles.ledgerHeaderRight} aria-hidden="true">
            <div className={styles.ledgerStatusDot} />
            <span className={styles.ledgerStatus}>SEMANTIC LAYER ACTIVE</span>
          </div>
        </div>

        {/* Table */}
        <div
          className={styles.tableWrapper}
          role="region"
          aria-label="KPI calculation contract fields"
        >
          <table className={styles.dataTable}>
            <thead>
              <tr className={styles.tableHead}>
                <th className={styles.tableHeadCell} scope="col">Contract Field</th>
                <th className={styles.tableHeadCell} scope="col">Requirement</th>
                <th className={styles.tableHeadCell} scope="col">TAT Example</th>
              </tr>
            </thead>
            <tbody>
              {CONTRACT_FIELDS.map((field, idx) => (
                <ContractFieldRow key={field.field} field={field} index={idx} />
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* ══ GOVERNANCE GATE CALLOUT ══ */}
      <motion.div
        className={styles.governanceGate}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        role="note"
        aria-label="Governance gate requirement"
      >
        <div className={styles.gateBorderPulse} aria-hidden="true" />

        <div className={styles.gateContent}>
          <div className={styles.gateIconWrapper} aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <div className={styles.gateTextGroup}>
            <p className={styles.gateBody}>
              <strong className={styles.gateStrong}>Governance gate:</strong>{' '}
              A KPI or model is not production-ready until its owner, lineage, quality threshold,
              security classification, and decision use are approved.
            </p>
            {/* Three gate check badges */}
            <div className={styles.gateChecks} aria-label="Gate checklist">
              {[
                { label: 'Owner + Lineage', color: 'violet' },
                { label: 'Quality Threshold', color: 'cyan' },
                { label: 'Security Classification', color: 'emerald' },
              ].map((check) => (
                <div
                  key={check.label}
                  className={`${styles.gateCheck} ${styles['gateCheck--' + check.color]}`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1" />
                    <path
                      d="M3.5 6l1.8 1.8L8.5 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>{check.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
