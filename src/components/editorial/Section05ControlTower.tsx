'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MaskRevealText, ScrambleText, BlurRevealText } from './TextAnimations';
import styles from './Section05ControlTower.module.css';

/* ─────────────────────────────────────────────────────────────
   CONTROL TOWER PAGES — 7 role-based dashboard pages
   ───────────────────────────────────────────────────────────── */
interface TowerPage {
  pageNum: string;
  title: string;
  integrates: string;
  decisionQuestion: string;
  accent: 'violet' | 'cyan' | 'emerald';
}

const TOWER_PAGES: TowerPage[] = [
  {
    pageNum: 'Page 01',
    title: 'Executive Overview',
    integrates: 'Throughput, TAT risk, WIP, constraints, value at risk.',
    decisionQuestion: 'Where must leadership intervene?',
    accent: 'violet',
  },
  {
    pageNum: 'Page 02',
    title: 'Flow & WIP',
    integrates: 'Certified hours, gaps, shifts, learning curve.',
    decisionQuestion: 'Which visits need recovery now?',
    accent: 'cyan',
  },
  {
    pageNum: 'Page 03',
    title: 'Capacity & Resources',
    integrates: 'Bays, test cell, tooling, downtime, load/capacity.',
    decisionQuestion: 'What is the binding constraint by horizon?',
    accent: 'violet',
  },
  {
    pageNum: 'Page 04',
    title: 'Workforce & Skills',
    integrates: 'Certified hours, gaps, shifts, learning curve.',
    decisionQuestion: 'What is the binding constraint by horizon?',
    accent: 'emerald',
  },
  {
    pageNum: 'Page 05',
    title: 'Materials & Suppliers',
    integrates: 'Shortage exposure, OTD, quality, lead time, expedites.',
    decisionQuestion: 'What is the binding constraint by horizon?',
    accent: 'cyan',
  },
  {
    pageNum: 'Page 06',
    title: 'Finance & Value',
    integrates: 'Visit variance, overtime, cost-to-serve, contribution, benefits.',
    decisionQuestion: 'What is the binding constraint by horizon?',
    accent: 'violet',
  },
  {
    pageNum: 'Page 07',
    title: 'Actions & Accountability',
    integrates: 'Owner, decision, due date, status, evidence, outcome.',
    decisionQuestion: 'What is the binding constraint by horizon?',
    accent: 'emerald',
  },
];

/* ─────────────────────────────────────────────────────────────
   ALERT-TO-ACTION WORKFLOW — 6 steps
   ───────────────────────────────────────────────────────────── */
interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: 'violet' | 'cyan' | 'emerald';
}

const SignalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const ExplainIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);
const CompareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
    <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
  </svg>
);
const DecideIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const TrackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <polyline points="9 16 11 18 15 14"/>
  </svg>
);
const LearnIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
  </svg>
);

const WORKFLOW_STEPS: WorkflowStep[] = [
  { step: '01', title: 'Signal', description: 'Threshold or model identifies risk.', icon: <SignalIcon />, accent: 'violet' },
  { step: '02', title: 'Explain', description: 'Drivers, affected visits, confidence, data freshness.', icon: <ExplainIcon />, accent: 'violet' },
  { step: '03', title: 'Compare', description: 'Feasible options and operational/financial trade-offs.', icon: <CompareIcon />, accent: 'cyan' },
  { step: '04', title: 'Decide', description: 'Authorized human selects action or overrides recommendation.', icon: <DecideIcon />, accent: 'cyan' },
  { step: '05', title: 'Track', description: 'Owner, due date, outcome, and benefit evidence.', icon: <TrackIcon />, accent: 'emerald' },
  { step: '06', title: 'Learn', description: 'Feedback updates thresholds, process, and models.', icon: <LearnIcon />, accent: 'emerald' },
];

/* ─────────────────────────────────────────────────────────────
   TOWER PAGE ROW
   ───────────────────────────────────────────────────────────── */
function TowerPageRow({ page, index }: { page: TowerPage; index: number }) {
  return (
    <motion.div
      className={`${styles.towerRow} ${styles['towerRow--' + page.accent]}`}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
    >
      {/* Page label + title */}
      <div className={styles.towerPageMeta}>
        <span className={styles.towerPageNum}>{page.pageNum}</span>
        <span className={styles.towerPageTitle}>{page.title}</span>
      </div>

      {/* What it integrates */}
      <div className={styles.towerIntegrates}>
        <span className={styles.towerLabel}>What it integrates:</span>
        <p className={styles.towerBody}>{page.integrates}</p>
      </div>

      {/* Vertical divider */}
      <div className={styles.towerDivider} aria-hidden="true" />

      {/* Decision question */}
      <div className={styles.towerDecision}>
        <span className={styles.towerLabel}>Decision Question:</span>
        <p className={`${styles.towerBody} ${styles.towerDecisionText}`}>{page.decisionQuestion}</p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   WORKFLOW STEP
   ───────────────────────────────────────────────────────────── */
function WorkflowStepCard({ step, index, isLast }: { step: WorkflowStep; index: number; isLast: boolean }) {
  return (
    <div className={styles.stepWrapper}>
      <motion.div
        className={styles.stepRow}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.09 }}
      >
        {/* Left: step number + connector */}
        <div className={styles.stepLeft}>
          <span className={styles.stepNumber}>{step.step}</span>
          {!isLast && <div className={styles.stepConnector} aria-hidden="true" />}
        </div>

        {/* Center: animated icon circle */}
        <div className={`${styles.stepIconWrap} ${styles['stepIconWrap--' + step.accent]}`} aria-hidden="true">
          <motion.div
            className={styles.stepIconRing}
            animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
          />
          <span className={styles.stepIconInner}>{step.icon}</span>
        </div>

        {/* Right: title + description */}
        <div className={styles.stepContent}>
          <h4 className={`${styles.stepTitle} ${styles['stepTitle--' + step.accent]}`}>{step.title}</h4>
          <p className={styles.stepDesc}>{step.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export function Section05ControlTower() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="section-05"
      className={styles.section}
      aria-labelledby="section-05-title"
      ref={containerRef}
    >
      {/* ══ SECTION HEADER ══ */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber} aria-hidden="true">
          <ScrambleText text="05" triggerOnView duration={320} />
        </span>
        <MaskRevealText
          id="section-05-title"
          as="h2"
          className={styles.sectionTitle}
          triggerOnView
        >
          Power BI MRO Control Tower
        </MaskRevealText>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ══ LEAD SUBTITLE ══ */}
      <BlurRevealText as="p" className={styles.sectionSubtitle} delay={0}>
        from visibility to action
      </BlurRevealText>

      {/* ══ LEAD PROSE ══ */}
      <BlurRevealText as="p" className={styles.leadProse} delay={80}>
        The Control Tower is the governed decision surface of the operating model. It combines
        role-based pages, alerts, drill-through, scenarios, and an action register. Its purpose
        is not to display every available measure; it is to shorten the time from signal to
        accountable action.
      </BlurRevealText>

      {/* ══ 7-ROW DECISION MATRIX ══ */}
      <motion.div
        className={styles.matrixWrapper}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        role="region"
        aria-label="Control Tower page decision matrix"
      >
        {TOWER_PAGES.map((page, idx) => (
          <TowerPageRow key={page.pageNum} page={page} index={idx} />
        ))}
      </motion.div>

      {/* ══ ALERT-TO-ACTION WORKFLOW ══ */}
      <motion.div
        className={styles.workflowSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        {/* Sub-heading */}
        <div className={styles.workflowHeader}>
          <div className={styles.workflowHeaderAccent} aria-hidden="true" />
          <h3 className={styles.workflowTitle}>Alert-to-action workflow</h3>
        </div>

        {/* Steps */}
        <div className={styles.workflowSteps} role="list" aria-label="Alert to action workflow steps">
          {WORKFLOW_STEPS.map((step, idx) => (
            <WorkflowStepCard
              key={step.step}
              step={step}
              index={idx}
              isLast={idx === WORKFLOW_STEPS.length - 1}
            />
          ))}
        </div>
      </motion.div>

      {/* ══ ROLE-BASED CADENCE ══ */}
      <motion.div
        className={styles.cadenceBlock}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        role="note"
        aria-label="Role-based cadence"
      >
        <div className={styles.cadenceLeft}>
          <span className={styles.cadenceLabel}>Role-based cadence</span>
        </div>
        <div className={styles.cadenceRight}>
          <p className={styles.cadenceBody}>
            Shift teams manage queues and exceptions; daily operations meetings manage recovery
            actions; weekly S&OP/capacity reviews balance demand, skills, material and assets;
            monthly executive reviews validate benefits, risk, and scale decisions.
          </p>

          {/* ── NON-NEGOTIABLE DESIGN RULE ── */}
          <motion.div
            className={styles.designRule}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            role="note"
            aria-label="Non-negotiable design rule"
          >
            <div className={styles.designRuleIcon} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <p className={styles.designRuleText}>
              <strong className={styles.designRuleStrong}>NON-NEGOTIABLE DESIGN RULE:</strong>{' '}
              Every red status must lead to a named decision, owner, time window, and measurable
              outcome; otherwise it is reporting, not Decision Intelligence.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
