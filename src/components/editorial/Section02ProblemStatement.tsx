'use client';

import React from 'react';
import styles from './Section02ProblemStatement.module.css';
import { MaskRevealText, ScrambleText, BlurRevealText } from './TextAnimations';
import { InteractiveTileCard } from './InteractiveTileCard';
import { useLang } from '@/lib/i18n';

/* ─────────────────────────────────────────────────────────────
   DECISION DOMAIN DATA
   ───────────────────────────────────────────────────────────── */
interface DomainCardData {
  id: string;
  categoryEn: string;
  categoryEs: string;
  icon: React.ReactNode;
  leadingSignalEn: string;
  leadingSignalEs: string;
  decisionEnabledEn: string;
  decisionEnabledEs: string;
}

const DOMAIN_CARDS: DomainCardData[] = [
  {
    id: 'demand',
    categoryEn: 'Demand',
    categoryEs: 'Demanda',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    leadingSignalEn: 'Fleet utilization spikes & predictive failure models.',
    leadingSignalEs: 'Picos de utilización de flota y modelos de falla predictiva.',
    decisionEnabledEn: 'Dynamic capacity allocation.',
    decisionEnabledEs: 'Asignación dinámica de capacidad.',
  },
  {
    id: 'flow',
    categoryEn: 'Flow',
    categoryEs: 'Flujo',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
    leadingSignalEn: 'Bay occupancy duration & phase transition delays.',
    leadingSignalEs: 'Duración de ocupación de bahía y retrasos en transición de fase.',
    decisionEnabledEn: 'Critical path re-routing.',
    decisionEnabledEs: 'Redireccionamiento de ruta crítica.',
  },
  {
    id: 'workforce',
    categoryEn: 'Workforce',
    categoryEs: 'Fuerza Laboral',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    leadingSignalEn: 'Certification expiration & localized fatigue metrics.',
    leadingSignalEs: 'Vencimiento de certificaciones y métricas localizadas de fatiga.',
    decisionEnabledEn: 'Preemptive shift structuring.',
    decisionEnabledEs: 'Estructuración preventiva de turnos.',
  },
  {
    id: 'material',
    categoryEn: 'Material',
    categoryEs: 'Material',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    leadingSignalEn: 'Supply chain latency & localized stock depletion.',
    leadingSignalEs: 'Latencia en cadena de suministro y agotamiento localizado de inventario.',
    decisionEnabledEn: 'Just-in-time procurement.',
    decisionEnabledEs: 'Adquisición just-in-time.',
  },
  {
    id: 'assets-quality',
    categoryEn: 'Assets/Quality',
    categoryEs: 'Activos/Calidad',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    leadingSignalEn: 'Non-conformance reports & tool calibration drift.',
    leadingSignalEs: 'Non-Conformance Reports (NCR) y deriva en calibración de herramientas.',
    decisionEnabledEn: 'Targeted quality interventions.',
    decisionEnabledEs: 'Intervenciones de calidad focalizadas.',
  },
  {
    id: 'finance',
    categoryEn: 'Finance',
    categoryEs: 'Finanzas',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    leadingSignalEn: 'Variance in standard after-hours & exceeding costs.',
    leadingSignalEs: 'Varianza en horas extra estándar y costos excedidos.',
    decisionEnabledEn: 'Real-time margin preservation.',
    decisionEnabledEs: 'Preservación de margen en tiempo real.',
  },
];

/* ─────────────────────────────────────────────────────────────
   HYPOTHESIS DATA
   ───────────────────────────────────────────────────────────── */
const PUBLIC_LIMITATIONS_EN = [
  'Actual Querétaro TAT, WIP, utilization, shortages, overtime, rework, or visit-level margin.',
  'Causal improvement from a Control Tower or AI model.',
  'Realized ROI, avoided CAPEX, or Safran-specific model accuracy.',
];

const PUBLIC_LIMITATIONS_ES = [
  'TAT, WIP, utilización, faltantes, horas extra, Rework o margen por visita reales en Querétaro.',
  'Mejora causal atribuible a una Torre de Control o modelo de IA.',
  'ROI realizado, CAPEX evitado o precisión del modelo específico de Safran.',
];

/* ─────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
export function Section02ProblemStatement() {
  const { lang } = useLang();
  const isEs = lang === 'es';
  const publicLimitations = isEs ? PUBLIC_LIMITATIONS_ES : PUBLIC_LIMITATIONS_EN;

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
          key={lang}
          as="h2"
          id="section-02-title"
          className={styles.sectionTitle}
          text={
            isEs
              ? 'Planteamiento del problema y alcance de decisión'
              : 'Problem statement, hypothesis, and decision scope'
          }
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
              <ScrambleText
                key={lang}
                text={isEs ? 'OBJETIVO CENTRAL' : 'CORE OBJECTIVE'}
                triggerOnView
                duration={400}
              />
            </span>
            <span className={styles.badgeLabel}>
              {isEs ? 'PROBLEMA DE DECISIÓN' : 'DECISION PROBLEM'}
            </span>
          </div>

          {/* Main decision question — wide, horizontal, balanced */}
          <blockquote className={styles.problemQuote}>
            <BlurRevealText key={lang} as="p" className={styles.problemQuoteText} delay={100}>
              {isEs
                ? '“¿Cómo puede la dirección identificar la restricción operativa que limitará la próxima shop visit, cuantificar su efecto operativo y financiero, e intervenir antes de que el TAT, el compromiso con el cliente o el margen se deterioren?”'
                : '“How can management identify the constraint that will limit the next shop visit, quantify its operational and financial effect, and act before TAT, customer commitment, or margin deteriorates?”'}
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
              {isEs ? 'MARCO DE DECISIÓN EDIRA' : 'EDIRA DECISION FRAMEWORK'}
            </span>
          </div>
        </div>

        {/* RIGHT — Figure preview + Descriptive prose */}
        <div className={styles.problemRight}>
          {/* Rounded preview surface with research video */}
          <figure className={styles.problemFigure} aria-label="MRO shop floor visual reference">
            <video
              autoPlay
              loop
              muted
              playsInline
              className={styles.problemVideo}
            >
              <source src="/videos/research2.mov" type="video/mp4" />
            </video>
            <div className={styles.problemVideoFade} aria-hidden="true" />
          </figure>

          {/* Body prose — right column */}
          <BlurRevealText key={lang} as="p" className={styles.problemBody} delay={200}>
            {isEs
              ? 'El resultado del MRO es un problema de flujo extremo a extremo. Inspección, desensamble, reparación, reposición de material, ensamble, prueba y liberación comparten personas, activos, información y refacciones. La optimización local puede desplazar una cola, no eliminar la restricción del sistema.'
              : 'MRO output is an end-to-end flow problem. Inspection, disassembly, repair, material replenishment, assembly, testing, and release share people, assets, information, and parts. Local optimization can therefore move a queue rather than remove the system constraint.'}
          </BlurRevealText>
        </div>
      </div>

      {/* ══ BLOCK 3 — Decision Domain Grid (3 × 2) ══ */}
      <div className={styles.domainSection}>
        <p className={styles.domainEyebrow}>
          <ScrambleText
            key={lang}
            text={
              isEs
                ? 'DOMINIOS DE DECISIÓN // 06 CATEGORÍAS OPERATIVAS'
                : 'DECISION DOMAINS // 06 OPERATIVE CATEGORIES'
            }
            triggerOnView
            duration={500}
          />
        </p>
        <div className={styles.domainGrid} role="list">
          {DOMAIN_CARDS.map((card) => (
            <InteractiveTileCard
              key={card.id}
              title={isEs ? card.categoryEs : card.categoryEn}
              icon={card.icon}
              leadingSignal={isEs ? card.leadingSignalEs : card.leadingSignalEn}
              decisionEnabled={isEs ? card.decisionEnabledEs : card.decisionEnabledEn}
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
                <ScrambleText
                  key={lang}
                  text={isEs ? 'HIPÓTESIS COMPROBABLE' : 'TESTABLE HYPOTHESIS'}
                  triggerOnView
                  duration={400}
                />
              </span>
            </div>

            {/* Hypothesis body */}
            <BlurRevealText key={lang} as="p" className={styles.hypothesisBody} delay={120}>
              {isEs
                ? 'Si demanda, capacidad nominal y efectiva, WIP, TAT, fuerza laboral, riesgo de material, calidad y resultados financieros se gobiernan en una sola capa de decisión, los planeadores pueden detectar cuellos de botella con mayor anticipación, utilizar los recursos restringidos de forma más productiva e incrementar el Throughput confiable antes de asumir que un CAPEX adicional es la primera respuesta.'
                : 'If demand, nominal and effective capacity, WIP, TAT, workforce, material risk, quality, and financial outcomes are governed in one decision layer, planners can detect bottlenecks earlier, use constrained resources more productively, and increase reliable throughput before assuming additional CAPEX is the first answer.'}
            </BlurRevealText>
          </div>
        </div>

        {/* RIGHT — What public data cannot prove + Pilot Evidence */}
        <div className={styles.hypothesisRight}>
          <h3 className={styles.limitationsTitle}>
            {isEs ? 'Lo que los datos públicos no pueden demostrar' : 'What public data cannot prove'}
          </h3>

          <ul
            className={styles.limitationsList}
            aria-label={isEs ? 'Limitaciones de datos públicos' : 'Limitations of public data'}
          >
            {publicLimitations.map((item, idx) => (
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
            <p className={styles.pilotEvidenceLabel}>
              {isEs ? 'EVIDENCIA MÍNIMA DE PILOTO' : 'MINIMUM PILOT EVIDENCE'}
            </p>
            <p className={styles.pilotEvidenceText}>
              {isEs
                ? 'Eventos de visita con marca de tiempo, órdenes de trabajo, calendarios de capacidad, nóminas de competencias certificadas, historial de faltantes,'
                : 'Timestamped visit events, work orders, capacity calendars, certified-skill rosters, shortage history,'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
