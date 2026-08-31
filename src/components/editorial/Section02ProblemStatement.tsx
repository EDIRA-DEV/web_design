import React from 'react';
import styles from './Section02ProblemStatement.module.css';
import { MaskRevealText, ScrambleText, BlurRevealText } from './TextAnimations';
import { InteractiveTileCard } from './InteractiveTileCard';

/* ─────────────────────────────────────────────────────────────
   DECISION DOMAIN DATA
   Six operational categories, each with a leading signal and
   a decision the platform enables, rendered as modular cards.
   ───────────────────────────────────────────────────────────── */
interface DomainCard {
  id: string;
  category: string;
  icon: React.ReactNode;
  leadingSignal: string;
  decisionEnabled: string;
}

const DOMAIN_CARDS: DomainCard[] = [
  {
    id: 'demand',
    category: 'Demand',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    leadingSignal: 'Fleet utilization spikes & predictive failure models.',
    decisionEnabled: 'Dynamic capacity allocation.',
  },
  {
    id: 'flow',
    category: 'Flow',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
    leadingSignal: 'Bay occupancy duration & phase transition delays.',
    decisionEnabled: 'Critical path re-routing.',
  },
  {
    id: 'workforce',
    category: 'Workforce',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    leadingSignal: 'Certification expiration & localized fatigue metrics.',
    decisionEnabled: 'Preemptive shift structuring.',
  },
  {
    id: 'material',
    category: 'Material',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    leadingSignal: 'Supply chain latency & localized stock depletion.',
    decisionEnabled: 'Just-in-time procurement.',
  },
  {
    id: 'assets-quality',
    category: 'Assets/Quality',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    leadingSignal: 'Non-conformance reports & tool calibration drift.',
    decisionEnabled: 'Targeted quality interventions.',
  },
  {
    id: 'finance',
    category: 'Finance',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    leadingSignal: 'Variance in standard after-hours & exceeding costs.',
    decisionEnabled: 'Real-time margin preservation.',
  },
];

/* ─────────────────────────────────────────────────────────────
   HYPOTHESIS DATA
   ───────────────────────────────────────────────────────────── */
const PUBLIC_LIMITATIONS = [
  'Actual Querétaro TAT, WIP, utilization, shortages, overtime, rework, or visit-level margin.',
  'Causal improvement from a Control Tower or AI model.',
  'Realized ROI, avoided CAPEX, or Safran-specific model accuracy.',
];

/* ─────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
export function Section02ProblemStatement() {
  return (
    <section
      id="section-02"
      className={styles.section}
      aria-labelledby="section-02-title"
    >
      {/* ══ BLOCK 1 — Section Header ══ */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber} aria-hidden="true">02</span>
        <MaskRevealText
          as="h2"
          id="section-02-title"
          className={styles.sectionTitle}
          text="Problem statement, hypothesis, and decision scope"
          delay={60}
        />
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ══ BLOCK 2 — Decision Problem (Horizontal Balanced 2-Col Card) ══ */}
      <div className={styles.problemGrid}>
        {/* Subtle background radar / decision arcs */}
        <svg className={styles.radarSvg} viewBox="0 0 400 400" fill="none" aria-hidden="true">
          <circle cx="60" cy="60" r="70" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
          <circle cx="60" cy="60" r="140" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
          <circle cx="60" cy="60" r="210" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
          <circle cx="60" cy="60" r="280" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
        </svg>

        {/* LEFT — Dot + Core Objective Badge + Quote + Framework Attribution */}
        <div className={styles.problemLeft}>
          {/* Top Indicator Dot */}
          <div className={styles.topIndicator} aria-hidden="true">
            <span className={styles.indicatorDot} />
          </div>

          {/* Badge row: CORE OBJECTIVE + DECISION PROBLEM */}
          <div className={styles.badgeRow} aria-label="Category tags">
            <span className={styles.badge}>
              <ScrambleText text="CORE OBJECTIVE" triggerOnView duration={400} />
            </span>
            <span className={styles.badgeLabel}>DECISION PROBLEM</span>
          </div>

          {/* Main decision question — wide, horizontal, balanced */}
          <blockquote className={styles.problemQuote}>
            <BlurRevealText as="p" className={styles.problemQuoteText} delay={100}>
              &ldquo;How can management identify the constraint that will limit the next shop
              visit, quantify its operational and financial effect, and act before TAT,
              customer commitment, or margin deteriorates?&rdquo;
            </BlurRevealText>
          </blockquote>

          {/* Attribution: Shield Icon + EDIRA DECISION FRAMEWORK */}
          <div className={styles.attribution}>
            <svg
              className={styles.attributionIcon}
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <span className={styles.attributionLabel}>
              EDIRA DECISION FRAMEWORK
            </span>
          </div>
        </div>

        {/* RIGHT — Figure preview + Descriptive prose */}
        <div className={styles.problemRight}>
          {/* Rounded preview surface */}
          <figure className={styles.problemFigure} aria-label="MRO shop floor visual reference">
            <div className={styles.problemImagePlaceholder} aria-hidden="true">
              <div className={styles.placeholderGrid} aria-hidden="true">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className={styles.placeholderCell} />
                ))}
              </div>
              <div className={styles.placeholderGlow} aria-hidden="true" />
            </div>
          </figure>

          {/* Body prose — right column */}
          <BlurRevealText as="p" className={styles.problemBody} delay={200}>
            MRO output is an end-to-end flow problem. Inspection, disassembly, repair, material
            replenishment, assembly, testing, and release share people, assets, information, and
            parts. Local optimization can therefore move a queue rather than remove the
            system constraint.
          </BlurRevealText>
        </div>
      </div>

      {/* ══ BLOCK 3 — Decision Domain Grid (3 × 2) ══ */}
      <div className={styles.domainSection}>
        <p className={styles.domainEyebrow}>
          <ScrambleText text="DECISION DOMAINS // 06 OPERATIVE CATEGORIES" triggerOnView duration={500} />
        </p>
        <div className={styles.domainGrid} role="list">
          {DOMAIN_CARDS.map((card) => (
            <InteractiveTileCard
              key={card.id}
              title={card.category}
              icon={card.icon}
              leadingSignal={card.leadingSignal}
              decisionEnabled={card.decisionEnabled}
            />
          ))}
        </div>
      </div>

      {/* ══ BLOCK 4 — Testable Hypothesis + Public Limitations (Split) ══ */}
      <div className={styles.hypothesisGrid}>

        {/* LEFT — Testable Hypothesis enclosed card */}
        <div className={styles.hypothesisLeft}>
          <div className={styles.hypothesisCard}>
            {/* Header: Solid square marker + Monospace title */}
            <div className={styles.hypothesisHeader} aria-hidden="true">
              <span className={styles.hypothesisSquare} />
              <span className={styles.hypothesisLabel}>
                <ScrambleText text="TESTABLE HYPOTHESIS" triggerOnView duration={400} />
              </span>
            </div>

            {/* Hypothesis body */}
            <BlurRevealText as="p" className={styles.hypothesisBody} delay={120}>
              If demand, nominal and effective capacity, WIP, TAT, workforce, material
              risk, quality, and financial outcomes are governed in one decision layer,
              planners can detect bottlenecks earlier, use constrained resources more
              productively, and increase reliable throughput before assuming additional
              CAPEX is the first answer.
            </BlurRevealText>
          </div>
        </div>

        {/* RIGHT — What public data cannot prove + Pilot Evidence */}
        <div className={styles.hypothesisRight}>
          <h3 className={styles.limitationsTitle}>What public data cannot prove</h3>

          <ul className={styles.limitationsList} aria-label="Limitations of public data">
            {PUBLIC_LIMITATIONS.map((item, idx) => (
              <li key={idx} className={styles.limitationsItem}>
                <span className={styles.limitationsIcon} aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
                <span className={styles.limitationsText}>{item}</span>
              </li>
            ))}
          </ul>

          {/* Minimum Pilot Evidence Box */}
          <div className={styles.pilotEvidence}>
            <p className={styles.pilotEvidenceLabel}>MINIMUM PILOT EVIDENCE</p>
            <p className={styles.pilotEvidenceText}>
              Timestamped visit events, work orders, capacity calendars,
              certified-skill rosters, shortage history,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
