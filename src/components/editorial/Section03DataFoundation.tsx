'use client';

import React from 'react';
import styles from './Section03DataFoundation.module.css';
import { MaskRevealText, ScrambleText, BlurRevealText } from './TextAnimations';
import { MedallionPipeline } from './MedallionPipeline';
import { useLang } from '@/lib/i18n';

/* ─────────────────────────────────────────────────────────────
   DESIGN PRINCIPLES — Three governing design principles
   ───────────────────────────────────────────────────────────── */
interface Principle {
  id: string;
  tagEn: string;
  tagEs: string;
  titleEn: string;
  titleEs: string;
  bodyEn: string;
  bodyEs: string;
}

const PRINCIPLES: Principle[] = [
  {
    id: 'decision-backward',
    tagEn: 'DESIGN PHILOSOPHY',
    tagEs: 'FILOSOFÍA DE DISEÑO',
    titleEn: 'Decision-Backward Architecture',
    titleEs: 'Arquitectura Orientada a la Decisión',
    bodyEn:
      'EDIRA would begin with the decision and work backward to the data—not with a dashboard. Every pipeline stage exists to satisfy a specific operational question, not to replicate a source system in the cloud.',
    bodyEs:
      'EDIRA partiría de la decisión y trabajaría hacia atrás hasta los datos—no desde un dashboard. Cada etapa del Pipeline existe para satisfacer una pregunta operativa específica, no para replicar un sistema fuente en la nube.',
  },
  {
    id: 'platform-agnostic',
    tagEn: 'IMPLEMENTATION',
    tagEs: 'IMPLEMENTACIÓN',
    titleEn: 'Platform-Agnostic Control Framework',
    titleEs: 'Marco de Control Independiente de Plataforma',
    bodyEn:
      'The target architecture can be implemented in Microsoft Fabric / Azure or equivalent enterprise technology. The medallion layers, semantic contracts, and control objectives remain invariant regardless of the chosen compute layer.',
    bodyEs:
      'La arquitectura objetivo puede implementarse en Microsoft Fabric / Azure o tecnología empresarial equivalente. Las capas Medallion, los Data Contracts semánticos y los objetivos de control son invariantes independientemente de la capa de cómputo elegida.',
  },
  {
    id: 'control-objectives',
    tagEn: 'GOVERNANCE',
    tagEs: 'GOBERNANZA',
    titleEn: 'Control Objectives at Each Layer',
    titleEs: 'Objetivos de Control en Cada Capa',
    bodyEn:
      'Each medallion layer carries an explicit control objective—the non-functional contract that governs reliability, latency, traceability, and auditability. This makes the architecture auditable for aviation-grade compliance.',
    bodyEs:
      'Cada capa Medallion lleva un objetivo de control explícito—el contrato no funcional que rige confiabilidad, latencia, trazabilidad y auditabilidad. Esto hace que la arquitectura sea auditable para el cumplimiento de grado aeronáutico.',
  },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
export function Section03DataFoundation() {
  const { lang } = useLang();
  const isEs = lang === 'es';

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
          key={lang}
          id="section-03-title"
          as="h2"
          className={styles.sectionTitle}
          triggerOnView
        >
          {isEs
            ? 'Fundación de Datos & Medallion Architecture'
            : 'Data Foundation & Medallion Architecture'}
        </MaskRevealText>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ══ LEAD PROSE ══ */}
      <BlurRevealText key={lang} as="p" className={styles.leadProse} delay={80}>
        {isEs
          ? 'EDIRA partiría de la decisión y trabajaría hacia atrás hasta los datos—no desde un dashboard. La arquitectura objetivo puede implementarse en Microsoft Fabric / Azure o tecnología empresarial equivalente; el marco de control es independiente de la plataforma.'
          : 'EDIRA would begin with the decision and work backward to the data—not with a dashboard. The target architecture can be implemented in Microsoft Fabric / Azure or equivalent enterprise technology; the control framework remains platform-agnostic.'}
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
              <ScrambleText
                key={lang}
                text={isEs ? p.tagEs : p.tagEn}
                triggerOnView
                duration={400}
              />
            </span>
            <h3 className={styles.principleTitle}>{isEs ? p.titleEs : p.titleEn}</h3>
            <BlurRevealText key={lang} as="p" className={styles.principleBody} delay={idx * 80}>
              {isEs ? p.bodyEs : p.bodyEn}
            </BlurRevealText>
          </div>
        ))}
      </div>

      {/* ══ PLATFORM CALLOUT ══ */}
      <div
        className={styles.platformCallout}
        role="note"
        aria-label={isEs ? 'Nota de compatibilidad de plataforma' : 'Platform compatibility note'}
      >
        <div className={styles.calloutIcon} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <div className={styles.calloutContent}>
          <span className={styles.calloutLabel}>
            {isEs ? 'Compatibilidad de Plataforma' : 'Platform Compatibility'}
          </span>
          <p className={styles.calloutBody}>
            {isEs
              ? 'Validado contra Microsoft Fabric (OneLake + Direct Lake), Azure Synapse Analytics, Databricks en Azure y SQL Server 2022 on-premises. La capa semántica y los objetivos de control son tecnológicamente neutrales y pueden portarse a cualquier Data Lakehouse compatible con ANSI-SQL.'
              : 'Validated against Microsoft Fabric (OneLake + Direct Lake), Azure Synapse Analytics, Databricks on Azure, and on-premises SQL Server 2022. Semantic layer and control objectives are technology-neutral and can be ported to any ANSI-SQL compatible lakehouse.'}
          </p>
        </div>
      </div>
    </section>
  );
}
