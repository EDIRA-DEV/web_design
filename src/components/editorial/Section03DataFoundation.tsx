'use client';

import React from 'react';
import styles from './Section03DataFoundation.module.css';
import { MaskRevealText, ScrambleText, BlurRevealText } from './TextAnimations';
import { MedallionPipeline } from './MedallionPipeline';

/* ─────────────────────────────────────────────────────────────
   DESIGN PRINCIPLES — Three governing design principles
   ───────────────────────────────────────────────────────────── */
interface Principle {
  id: string;
  tag: string;
  title: string;
  body: string;
}

const PRINCIPLES: Principle[] = [
  {
    id: 'decision-backward',
    tag: 'DESIGN PHILOSOPHY',
    title: 'Decision-Backward Architecture',
    body: 'EDIRA would begin with the decision and work backward to the data—not with a dashboard. Every pipeline stage exists to satisfy a specific operational question, not to replicate a source system in the cloud.',
  },
  {
    id: 'platform-agnostic',
    tag: 'IMPLEMENTATION',
    title: 'Platform-Agnostic Control Framework',
    body: 'The target architecture can be implemented in Microsoft Fabric / Azure or equivalent enterprise technology. The medallion layers, semantic contracts, and control objectives remain invariant regardless of the chosen compute layer.',
  },
  {
    id: 'control-objectives',
    tag: 'GOVERNANCE',
    title: 'Control Objectives at Each Layer',
    body: 'Each medallion layer carries an explicit control objective—the non-functional contract that governs reliability, latency, traceability, and auditability. This makes the architecture auditable for aviation-grade compliance.',
  },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
export function Section03DataFoundation() {
  return (
    <section
      id="section-03"
      className={styles.section}
      aria-labelledby="section-03-title"
    >
      {/* ══ SECTION HEADER ══ */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber} aria-hidden="true">
          <ScrambleText text="03" triggerOnView duration={300} />
        </span>
        <MaskRevealText
          id="section-03-title"
          as="h2"
          className={styles.sectionTitle}
          triggerOnView
        >
          Data Foundation &amp; Medallion Architecture
        </MaskRevealText>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ══ LEAD PROSE ══ */}
      <BlurRevealText as="p" className={styles.leadProse} delay={80}>
        EDIRA would begin with the decision and work backward to the data—not with a dashboard.
        The target architecture can be implemented in Microsoft Fabric / Azure or equivalent
        enterprise technology; the control framework remains platform-agnostic.
      </BlurRevealText>

      {/* ══ MEDALLION PIPELINE CAROUSEL ══ */}
      <div className={styles.pipelineWrapper}>
        <MedallionPipeline />
      </div>

      {/* ══ DESIGN PRINCIPLES — 3 columns ══ */}
      <div className={styles.principlesGrid}>
        {PRINCIPLES.map((p, idx) => (
          <div key={p.id} className={styles.principleBlock}>
            <span className={styles.principleTag}>
              <ScrambleText text={p.tag} triggerOnView duration={400} />
            </span>
            <h3 className={styles.principleTitle}>{p.title}</h3>
            <BlurRevealText as="p" className={styles.principleBody} delay={idx * 80}>
              {p.body}
            </BlurRevealText>
          </div>
        ))}
      </div>

      {/* ══ PLATFORM CALLOUT ══ */}
      <div className={styles.platformCallout} role="note" aria-label="Platform compatibility note">
        <div className={styles.calloutIcon} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <div className={styles.calloutContent}>
          <span className={styles.calloutLabel}>Platform Compatibility</span>
          <p className={styles.calloutBody}>
            Validated against Microsoft Fabric (OneLake + Direct Lake), Azure Synapse Analytics,
            Databricks on Azure, and on-premises SQL Server 2022. Semantic layer and control
            objectives are technology-neutral and can be ported to any ANSI-SQL compatible lakehouse.
          </p>
        </div>
      </div>
    </section>
  );
}
