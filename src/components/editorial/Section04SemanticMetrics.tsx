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
   GOVERNANCE MECHANISMS — Control → Mechanism → Management Outcome
   ───────────────────────────────────────────────────────────── */
interface GovernanceRow {
  id: string;
  control: string;
  mechanism: string;
  managementOutcome: string;
  icon: React.ReactNode;
}

const OwnershipIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);
const CatalogueIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);
const ContractIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);
const SecurityIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const QualityIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ModelGovIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/>
    <circle cx="12" cy="12" r="7"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
  </svg>
);

const GOVERNANCE_ROWS: GovernanceRow[] = [
  {
    id: 'ownership',
    control: 'Ownership',
    mechanism: 'Executive owner, data owner, steward, product owner',
    managementOutcome: 'Fast issue resolution and accountability',
    icon: <OwnershipIcon />,
  },
  {
    id: 'catalogue-lineage',
    control: 'Catalogue & Lineage',
    mechanism: 'Purview or equivalent; business glossary; source-to-KPI lineage',
    managementOutcome: 'Trust and impact analysis',
    icon: <CatalogueIcon />,
  },
  {
    id: 'data-contracts',
    control: 'Data contracts',
    mechanism: 'Schema, keys, semantics, cadence, quality SLA, change policy',
    managementOutcome: 'Predictable producer-consumer interface',
    icon: <ContractIcon />,
  },
  {
    id: 'security',
    control: 'Security',
    mechanism: 'Entra/RBAC, least privilege, RLS/OLS, encryption, retention',
    managementOutcome: 'Controlled access and compliance',
    icon: <SecurityIcon />,
  },
  {
    id: 'quality',
    control: 'Quality',
    mechanism: 'DQ thresholds, exception queues, root cause, remediation SLA',
    managementOutcome: 'Known fitness for use',
    icon: <QualityIcon />,
  },
  {
    id: 'model-governance',
    control: 'Model governance',
    mechanism: 'Approval, versioning, validation, drift, explainability, audit',
    managementOutcome: 'Safe, monitored AI decisions',
    icon: <ModelGovIcon />,
  },
];

/* ─────────────────────────────────────────────────────────────
   GOVERNANCE ROW CARD
   ───────────────────────────────────────────────────────────── */
function GovernanceRowCard({ row, index }: { row: GovernanceRow; index: number }) {
  return (
    <motion.div
      className={styles.govRow}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.075 }}
      aria-label={`${row.control}: ${row.mechanism} → ${row.managementOutcome}`}
    >
      {/* Control pill (dark navy, bold, icon) */}
      <div className={styles.govControlPill}>
        <span className={styles.govControlIcon} aria-hidden="true">{row.icon}</span>
        <span className={styles.govControlLabel}>{row.control}</span>
      </div>

      {/* Arrow */}
      <div className={styles.govArrow} aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </div>

      {/* Mechanism (plain text body) */}
      <p className={styles.govMechanism}>{row.mechanism}</p>

      {/* Arrow */}
      <div className={styles.govArrow} aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </div>

      {/* Management Outcome (lavender badge) */}
      <div className={styles.govOutcomeBadge}>
        <span className={styles.govOutcomeText}>{row.managementOutcome}</span>
      </div>
    </motion.div>
  );
}

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
      {/* ══ SECTION HEADER ══ */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber} aria-hidden="true">
          <ScrambleText text="04" triggerOnView duration={320} />
        </span>
        <h2 id="section-04-title" className={styles.sectionTitle}>
          <MaskRevealText as="span" className={styles.titleLine} triggerOnView>
            Governance and semantic model:
          </MaskRevealText>
          <MaskRevealText as="span" className={styles.titleLine} triggerOnView delay={120}>
            one version of the decision
          </MaskRevealText>
        </h2>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ══ LEAD PROSE ══ */}
      <BlurRevealText as="p" className={styles.leadProse} delay={80}>
        Data governance is an operating mechanism, not a documentation exercise. It defines who
        owns a metric, which source is authoritative, how freshness and quality are measured, and
        who may access engine-, customer-, employee-, or financial-level detail.
      </BlurRevealText>

      {/* ══ GOVERNANCE MECHANISM TABLE ══ */}
      <motion.div
        className={styles.govWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        role="region"
        aria-label="Data governance operating mechanisms"
      >
        {/* Column headers */}
        <div className={styles.govHeader} aria-hidden="true">
          <span className={styles.govHeaderControl}>Control</span>
          <span className={styles.govHeaderMech}>Mechanism</span>
          <span className={styles.govHeaderOutcome}>Management outcome</span>
        </div>

        {/* Rows */}
        <div className={styles.govRows}>
          {GOVERNANCE_ROWS.map((row, idx) => (
            <GovernanceRowCard key={row.id} row={row} index={idx} />
          ))}
        </div>
      </motion.div>

      {/* ══ SUB-HEADING: SEMANTIC METRICS ══ */}
      <motion.div
        className={styles.subSectionHeader}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.subSectionAccent} aria-hidden="true" />
        <div className={styles.subSectionText}>
          <span className={styles.subSectionEyebrow}>SECTION 04.2</span>
          <h3 className={styles.subSectionTitle}>Semantic metrics & calculation contracts</h3>
          <p className={styles.subSectionBody}>
            The Power BI semantic model should calculate KPIs once and reuse them across pages,
            alerts, exports, and models. Each measure requires a business definition, grain,
            numerator/denominator, exclusions, time logic, owner, threshold, and reconciliation test.
          </p>
        </div>
      </motion.div>

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
