'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MaskRevealText, ScrambleText, BlurRevealText } from './TextAnimations';
import styles from './Section06AIOptimization.module.css';

/* ─────────────────────────────────────────────────────────────
   AI USE-CASE TABLE — 5 rows
   ───────────────────────────────────────────────────────────── */
interface ModelPill {
  label: string;
  color: 'violet' | 'cyan' | 'emerald' | 'amber';
}

interface AIUseCase {
  id: string;
  useCase: string;
  inputs: string;
  modelApproach: ModelPill[];
  decisionOutput: string;
  icon: React.ReactNode;
}

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const SimIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const AI_USE_CASES: AIUseCase[] = [
  {
    id: 'demand-forecast',
    useCase: 'Demand forecast',
    inputs: 'Historical arrivals, installed base, flight hours, contracts, scope',
    modelApproach: [
      { label: 'Hierarchical time series', color: 'violet' },
      { label: 'Gradient boosting', color: 'violet' },
    ],
    decisionOutput: 'Induction & capacity plan',
    icon: <CheckIcon />,
  },
  {
    id: 'tat-release-risk',
    useCase: 'TAT / release risk',
    inputs: 'Queue age, workscope, shortages, rework, skill coverage',
    modelApproach: [
      { label: 'Supervised classification', color: 'cyan' },
      { label: 'Regression', color: 'cyan' },
    ],
    decisionOutput: 'Prioritize or escalate visits',
    icon: <ClockIcon />,
  },
  {
    id: 'bottleneck-anomaly',
    useCase: 'Bottleneck / anomaly',
    inputs: 'Stage duration, queue age, utilization, downtime',
    modelApproach: [
      { label: 'Control limits', color: 'amber' },
      { label: 'Anomaly detection', color: 'amber' },
    ],
    decisionOutput: 'Intervene & rebalance flow',
    icon: <GridIcon />,
  },
  {
    id: 'schedule-optimization',
    useCase: 'Schedule optimization',
    inputs: 'Bays, cell, labor certifications, tooling, parts, due dates',
    modelApproach: [
      { label: 'MILP / Constraint prog.', color: 'emerald' },
      { label: 'OR-Tools', color: 'emerald' },
    ],
    decisionOutput: 'Select feasible schedule',
    icon: <CalendarIcon />,
  },
  {
    id: 'capacity-simulation',
    useCase: 'Capacity simulation',
    inputs: 'Arrival variability, process times, failures, availability',
    modelApproach: [
      { label: 'Monte Carlo', color: 'violet' },
      { label: 'Discrete event sim.', color: 'violet' },
    ],
    decisionOutput: 'Test ramp-up & CAPEX',
    icon: <SimIcon />,
  },
];

/* ─────────────────────────────────────────────────────────────
   PRODUCTION OPERATING LOOP — 5 stages
   ───────────────────────────────────────────────────────────── */
interface LoopStage {
  num: string;
  title: string;
  control: string;
  gateOutput: string;
  accent: 'violet' | 'cyan' | 'emerald' | 'amber' | 'slate';
}

const LOOP_STAGES: LoopStage[] = [
  {
    num: '1.',
    title: 'TRAIN',
    control: 'Time-based train/val/test split; leakage prevention',
    gateOutput: 'Reproducible baseline',
    accent: 'violet',
  },
  {
    num: '2.',
    title: 'VALIDATE',
    control: 'Accuracy plus cost of false positives/negatives',
    gateOutput: 'Decision-event thresholds',
    accent: 'cyan',
  },
  {
    num: '3.',
    title: 'EXPLAIN',
    control: 'Drivers, SHAP rules, confidence, freshness',
    gateOutput: 'Reasons user can challenge',
    accent: 'violet',
  },
  {
    num: '4.',
    title: 'APPROVE',
    control: 'Model-risk & business owner sign-off',
    gateOutput: 'Controlled deployment',
    accent: 'emerald',
  },
  {
    num: '5.',
    title: 'MONITOR',
    control: 'Drift, bias, override, uptime, outcomes',
    gateOutput: 'Retrain, recalibrate, retire',
    accent: 'amber',
  },
];

/* ─────────────────────────────────────────────────────────────
   HUMAN AUTHORITY GUARDRAILS — 3 items
   ───────────────────────────────────────────────────────────── */
interface Guardrail {
  id: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}

const AuthGateIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const AuditIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
  </svg>
);
const FallbackIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const GUARDRAILS: Guardrail[] = [
  {
    id: 'human-authority',
    icon: <AuthGateIcon />,
    title: 'Human Authority Gate',
    body: 'Models recommend or prioritize; authorized roles commit schedules, overtime, supplier and resource decisions. Overrides are logged with rationale.',
  },
  {
    id: 'audit-decision',
    icon: <AuditIcon />,
    title: 'Audit & Decision',
    body: 'Every recommendation records inputs, model version, confidence, explanation, user identity, and final decision for full traceability.',
  },
  {
    id: 'deterministic-fallbacks',
    icon: <FallbackIcon />,
    title: 'Deterministic Fallbacks',
    body: 'Fallback rules keep operations safe when data is stale, a pipeline fails, or model confidence falls below the operational threshold.',
  },
];

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export function Section06AIOptimization() {
  return (
    <section
      id="section-06"
      className={styles.section}
      aria-labelledby="section-06-title"
    >
      {/* ══ SECTION HEADER ══ */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber} aria-hidden="true">
          <ScrambleText text="06" triggerOnView duration={320} />
        </span>
        <MaskRevealText
          id="section-06-title"
          as="h2"
          className={styles.sectionTitle}
          triggerOnView
        >
          AI and optimization: how the models would work
        </MaskRevealText>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ══ LEAD PROSE ══ */}
      <BlurRevealText as="p" className={styles.leadProse} delay={80}>
        AI is introduced only after the governed event history and decision process exist. The
        objective is not autonomous control; it is earlier risk detection, feasible option
        generation, and consistent evaluation of trade-offs with a human decision-maker in the loop.
      </BlurRevealText>

      {/* ══ AI USE CASE TABLE ══ */}
      <motion.div
        className={styles.tableWrapper}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        role="region"
        aria-label="AI use-case model table"
      >
        {/* Table header */}
        <div className={styles.tableHead} aria-hidden="true">
          <span className={styles.tableHeadCell}>USE CASE</span>
          <span className={styles.tableHeadCell}>INPUTS</span>
          <span className={styles.tableHeadCell}>MODEL APPROACH</span>
          <span className={styles.tableHeadCell}>DECISION OUTPUT</span>
        </div>

        {/* Table rows */}
        {AI_USE_CASES.map((uc, idx) => (
          <motion.div
            key={uc.id}
            className={styles.tableRow}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1], delay: idx * 0.07 }}
          >
            {/* Use case */}
            <div className={styles.useCaseCell}>
              <span className={styles.useCaseIcon} aria-hidden="true">{uc.icon}</span>
              <span className={styles.useCaseName}>{uc.useCase}</span>
            </div>

            {/* Inputs */}
            <p className={styles.inputsCell}>{uc.inputs}</p>

            {/* Model approach pills */}
            <div className={styles.pillsCell}>
              {uc.modelApproach.map((pill) => (
                <span
                  key={pill.label}
                  className={`${styles.modelPill} ${styles['modelPill--' + pill.color]}`}
                >
                  {pill.label}
                </span>
              ))}
            </div>

            {/* Decision output */}
            <div className={styles.outputCell}>
              <span className={styles.outputArrow} aria-hidden="true">›</span>
              <span className={styles.outputText}>{uc.decisionOutput}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ══ PRODUCTION OPERATING LOOP ══ */}
      <div className={styles.loopSection}>
        <div className={styles.loopHeader}>
          <div className={styles.loopHeaderAccent} aria-hidden="true" />
          <h3 className={styles.loopTitle}>Production operating loop</h3>
        </div>

        <div className={styles.loopStages} role="list" aria-label="Production operating loop stages">
          {LOOP_STAGES.map((stage, idx) => (
            <motion.div
              key={stage.num}
              className={`${styles.loopCard} ${styles['loopCard--' + stage.accent]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
              role="listitem"
            >
              {/* Top accent bar */}
              <motion.div
                className={styles.loopCardBar}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 + 0.25, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Stage number + title */}
              <div className={styles.loopCardHeader}>
                <span className={styles.loopStageNum}>{stage.num}</span>
                <span className={styles.loopStageName}>{stage.title}</span>
              </div>

              {/* Control */}
              <div className={styles.loopCardSection}>
                <span className={styles.loopCardLabel}>CONTROL</span>
                <p className={styles.loopCardBody}>{stage.control}</p>
              </div>

              {/* Gate / Output */}
              <div className={styles.loopCardSection}>
                <span className={`${styles.loopCardLabel} ${styles.loopGateLabel}`}>GATE / OUTPUT</span>
                <p className={`${styles.loopCardBody} ${styles.loopGateBody}`}>{stage.gateOutput}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closed-loop feedback banner */}
        <motion.div
          className={styles.closedLoopBanner}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          aria-label="Closed-loop feedback description"
        >
          <motion.span
            className={styles.closedLoopIcon}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </motion.span>
          <span className={styles.closedLoopText}>
            Closed-Loop Feedback: Continuous Telemetry, Operational Auditing & Automated Retraining Triggers
          </span>
        </motion.div>
      </div>

      {/* ══ HUMAN AUTHORITY & GUARDRAILS ══ */}
      <div className={styles.guardrailsSection}>
        <div className={styles.guardrailsHeader}>
          <div className={styles.guardrailsHeaderAccent} aria-hidden="true" />
          <h3 className={styles.guardrailsTitle}>Human authority and guardrails</h3>
        </div>

        <div className={styles.guardrailsGrid} role="list" aria-label="Human authority guardrails">
          {GUARDRAILS.map((g, idx) => (
            <motion.div
              key={g.id}
              className={styles.guardrailCard}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              role="listitem"
            >
              <div className={styles.guardrailIconWrap} aria-hidden="true">
                {g.icon}
              </div>
              <h4 className={styles.guardrailTitle}>{g.title}</h4>
              <p className={styles.guardrailBody}>{g.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
