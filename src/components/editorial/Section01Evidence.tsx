import React from 'react';
import styles from './Section01Evidence.module.css';
import { PublicSignalsChart } from './PublicSignalsChart';
import { MaskRevealText, ScrambleText, BlurRevealText } from './TextAnimations';

const REFERENCES = [
  { ref: '[2]', text: 'Consolidated MRO footprint expansion to 50k sqm.' },
  { ref: '[4]', text: 'Workforce certification pipeline for LEAP-1A/1B variants.' },
  { ref: '[5]', text: 'Test-cell throughput optimization via digital twin integration.' },
];

export function Section01Evidence() {
  return (
    <section id="section-01" className={styles.section} aria-labelledby="section-01-title">
      {/* ── Section Header ── */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber} aria-hidden="true">01</span>
        <MaskRevealText
          as="h2"
          id="section-01-title"
          className={styles.sectionTitle}
          text="Evidence & Case for Change"
          delay={80}
        />
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ── Asymmetric Grid: 5 | 7 ── */}
      <div className={styles.grid}>

        {/* ── LEFT COLUMN (5 cols) — Giant Quote + Thesis ── */}
        <div className={styles.leftCol}>
          <div className={styles.stickyWrap}>
            {/* Giant opening quotation mark */}
            <span className={styles.openQuote} aria-hidden="true">&ldquo;</span>

            {/* Strategic thesis with Blur Reveal Animation */}
            <BlurRevealText as="p" className={styles.thesisText} delay={150}>
              The challenge is to synchronize demand, effective capacity, WIP, test-cell
              access, certified skills, parts, quality, and cost-to-serve—before the
              constrained resource becomes a missed commitment.
            </BlurRevealText>

            {/* Attribution */}
            <div className={styles.attribution}>
              <div className={styles.attributionBar} aria-hidden="true" />
              <p className={styles.attributionLabel}>
                EDIRA STRATEGIC<br />THESIS
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN (7 cols) — Essay + Metrics Card + Refs ── */}
        <div className={styles.rightCol}>

          {/* Essay eyebrow with Scramble decoder + display headline */}
          <div className={styles.essayHeader}>
            <p className={styles.essayEyebrow}>
              <ScrambleText text="01 // OFFICIAL EVIDENCE" triggerOnView />
            </p>
            <h3 className={styles.essayTitle}>The Scale of Escalation</h3>
          </div>

          {/* Drop-cap essay body */}
          <div className={styles.essayBody}>
            <p className={styles.dropCap}>
              Sustaining operations in modern aerospace maintenance, repair, and overhaul (MRO)
              networks has moved beyond the capabilities of legacy spreadsheet planning and
              reactive dispatching. As global fleet sizes expand and next-generation propulsion
              systems introduce unprecedented technical complexity, the operational friction
              within shop floor environments multiplies exponentially.
            </p>
            <p className={styles.para}>
              Our analysis across tier-one MRO providers reveals a systemic divergence between
              planned capacity and effective throughput. This gap is not driven by a lack of
              effort, but by a deficit in synchronized decision-making. When a single part delay
              can cascade into a missed engine delivery, visibility across the entire value
              stream becomes non-negotiable.
            </p>
          </div>

          {/* ── Public Signals Bar Chart ── */}
          <PublicSignalsChart />

          {/* ── Reference List ── */}
          <div className={styles.refList}>
            <p className={styles.refListTitle}>Official Indicators and Derivations</p>
            <ul className={styles.refItems}>
              {REFERENCES.map((r) => (
                <li key={r.ref} className={styles.refItem}>
                  <span className={styles.refNumber}>{r.ref}</span>
                  <span className={styles.refText}>{r.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
