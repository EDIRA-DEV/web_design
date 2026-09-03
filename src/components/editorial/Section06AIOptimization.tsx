'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MaskRevealText, ScrambleText, BlurRevealText } from './TextAnimations';
import styles from './Section06AIOptimization.module.css';

import { useLang } from '@/lib/i18n';

/* ─────────────────────────────────────────────────────────────
   AI USE-CASE TABLE — 5 rows
   ───────────────────────────────────────────────────────────── */
interface ModelPill {
  labelEn: string;
  labelEs: string;
  color: 'violet' | 'cyan' | 'emerald' | 'amber';
}

interface AIUseCase {
  id: string;
  useCaseEn: string;
  useCaseEs: string;
  inputsEn: string;
  inputsEs: string;
  modelApproach: ModelPill[];
  decisionOutputEn: string;
  decisionOutputEs: string;
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
    useCaseEn: 'Demand forecast',
    useCaseEs: 'Pronóstico de demanda',
    inputsEn: 'Historical arrivals, installed base, flight hours, contracts, scope',
    inputsEs: 'Llegadas históricas, base instalada, horas de vuelo, contratos, alcance',
    modelApproach: [
      { labelEn: 'Hierarchical time series', labelEs: 'Series de tiempo jerárquicas', color: 'violet' },
      { labelEn: 'Gradient boosting', labelEs: 'Gradient boosting', color: 'violet' },
    ],
    decisionOutputEn: 'Induction & capacity plan',
    decisionOutputEs: 'Plan de Induction & capacidad',
    icon: <CheckIcon />,
  },
  {
    id: 'tat-release-risk',
    useCaseEn: 'TAT / release risk',
    useCaseEs: 'Riesgo TAT / liberación',
    inputsEn: 'Queue age, workscope, shortages, rework, skill coverage',
    inputsEs: 'Antigüedad de cola, workscope, faltantes, Rework, cobertura de habilidades',
    modelApproach: [
      { labelEn: 'Supervised classification', labelEs: 'Clasificación supervisada', color: 'cyan' },
      { labelEn: 'Regression', labelEs: 'Regresión', color: 'cyan' },
    ],
    decisionOutputEn: 'Prioritize or escalate visits',
    decisionOutputEs: 'Priorizar o escalar visitas',
    icon: <ClockIcon />,
  },
  {
    id: 'bottleneck-anomaly',
    useCaseEn: 'Bottleneck / anomaly',
    useCaseEs: 'Cuello de botella / anomalía',
    inputsEn: 'Stage duration, queue age, utilization, downtime',
    inputsEs: 'Duración por etapa, antigüedad de cola, utilización, paros',
    modelApproach: [
      { labelEn: 'Control limits', labelEs: 'Límites de control', color: 'amber' },
      { labelEn: 'Anomaly detection', labelEs: 'Detección de anomalías', color: 'amber' },
    ],
    decisionOutputEn: 'Intervene & rebalance flow',
    decisionOutputEs: 'Intervenir y rebalancear flujo',
    icon: <GridIcon />,
  },
  {
    id: 'schedule-optimization',
    useCaseEn: 'Schedule optimization',
    useCaseEs: 'Optimización de calendario',
    inputsEn: 'Bays, cell, labor certifications, tooling, parts, due dates',
    inputsEs: 'Bahías, celda, certificaciones de mano de obra, herramientas, refacciones, fechas',
    modelApproach: [
      { labelEn: 'MILP / Constraint prog.', labelEs: 'MILP / Prog. de restricciones', color: 'emerald' },
      { labelEn: 'OR-Tools', labelEs: 'OR-Tools', color: 'emerald' },
    ],
    decisionOutputEn: 'Select feasible schedule',
    decisionOutputEs: 'Seleccionar calendario factible',
    icon: <CalendarIcon />,
  },
  {
    id: 'capacity-simulation',
    useCaseEn: 'Capacity simulation',
    useCaseEs: 'Simulación de capacidad',
    inputsEn: 'Arrival variability, process times, failures, availability',
    inputsEs: 'Variabilidad de llegadas, tiempos de proceso, fallas, disponibilidad',
    modelApproach: [
      { labelEn: 'Monte Carlo', labelEs: 'Monte Carlo', color: 'violet' },
      { labelEn: 'Discrete event sim.', labelEs: 'Simulación de eventos discretos', color: 'violet' },
    ],
    decisionOutputEn: 'Test ramp-up & CAPEX',
    decisionOutputEs: 'Evaluar Ramp-up & CAPEX',
    icon: <SimIcon />,
  },
];

/* ─────────────────────────────────────────────────────────────
   PRODUCTION OPERATING LOOP — 5 stages
   ───────────────────────────────────────────────────────────── */
interface LoopStage {
  num: string;
  titleEn: string;
  titleEs: string;
  controlEn: string;
  controlEs: string;
  gateOutputEn: string;
  gateOutputEs: string;
  accent: 'violet' | 'cyan' | 'emerald' | 'amber' | 'slate';
}

const LOOP_STAGES: LoopStage[] = [
  {
    num: '1.',
    titleEn: 'TRAIN',
    titleEs: 'ENTRENAR',
    controlEn: 'Time-based train/val/test split; leakage prevention',
    controlEs: 'División temporal entrenamiento/validación/prueba; prevención de fuga',
    gateOutputEn: 'Reproducible baseline',
    gateOutputEs: 'Línea base reproducible',
    accent: 'violet',
  },
  {
    num: '2.',
    titleEn: 'VALIDATE',
    titleEs: 'VALIDAR',
    controlEn: 'Accuracy plus cost of false positives/negatives',
    controlEs: 'Exactitud más costo de falsos positivos/negativos',
    gateOutputEn: 'Decision-event thresholds',
    gateOutputEs: 'Umbrales de evento de decisión',
    accent: 'cyan',
  },
  {
    num: '3.',
    titleEn: 'EXPLAIN',
    titleEs: 'EXPLICAR',
    controlEn: 'Drivers, SHAP rules, confidence, freshness',
    controlEs: 'Factores causales, reglas SHAP, confianza, frescura',
    gateOutputEn: 'Reasons user can challenge',
    gateOutputEs: 'Razones que el usuario puede cuestionar',
    accent: 'violet',
  },
  {
    num: '4.',
    titleEn: 'APPROVE',
    titleEs: 'APROBAR',
    controlEn: 'Model-risk & business owner sign-off',
    controlEs: 'Aval del riesgo del modelo y del dueño del negocio',
    gateOutputEn: 'Controlled deployment',
    gateOutputEs: 'Despliegue controlado',
    accent: 'emerald',
  },
  {
    num: '5.',
    titleEn: 'MONITOR',
    titleEs: 'MONITOREAR',
    controlEn: 'Drift, bias, override, uptime, outcomes',
    controlEs: 'Deriva, sesgo, anulación, disponibilidad, resultados',
    gateOutputEn: 'Retrain, recalibrate, retire',
    gateOutputEs: 'Reentrenar, recalibrar o retirar',
    accent: 'amber',
  },
];

/* ─────────────────────────────────────────────────────────────
   HUMAN AUTHORITY GUARDRAILS — 3 items
   ───────────────────────────────────────────────────────────── */
interface Guardrail {
  id: string;
  icon: React.ReactNode;
  titleEn: string;
  titleEs: string;
  bodyEn: string;
  bodyEs: string;
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
    titleEn: 'Human Authority Gate',
    titleEs: 'Compuerta de Autoridad Humana',
    bodyEn:
      'Models recommend or prioritize; authorized roles commit schedules, overtime, supplier and resource decisions. Overrides are logged with rationale.',
    bodyEs:
      'Los modelos recomiendan o priorizan; los roles autorizados confirman calendarios, horas extra, decisiones de proveedor y de recursos. Las anulaciones quedan registradas con justificación.',
  },
  {
    id: 'audit-decision',
    icon: <AuditIcon />,
    titleEn: 'Audit & Decision',
    titleEs: 'Auditoría & Decisión',
    bodyEn:
      'Every recommendation records inputs, model version, confidence, explanation, user identity, and final decision for full traceability.',
    bodyEs:
      'Cada recomendación registra entradas, versión del modelo, confianza, explicación, identidad del usuario y decisión final para trazabilidad completa.',
  },
  {
    id: 'deterministic-fallbacks',
    icon: <FallbackIcon />,
    titleEn: 'Deterministic Fallbacks',
    titleEs: 'Salvaguardas Determinísticas',
    bodyEn:
      'Fallback rules keep operations safe when data is stale, a pipeline fails, or model confidence falls below the operational threshold.',
    bodyEs:
      'Las reglas de respaldo mantienen las operaciones seguras cuando los datos están desactualizados, un Pipeline falla o la confianza del modelo cae por debajo del umbral operativo.',
  },
];

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export function Section06AIOptimization() {
  const { lang } = useLang();
  const isEs = lang === 'es';

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
          key={`s06-title-${lang}`}
          id="section-06-title"
          as="h2"
          className={styles.sectionTitle}
          triggerOnView
        >
          {isEs ? 'IA y optimización: cómo operarían los modelos' : 'AI and optimization: how the models would work'}
        </MaskRevealText>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ══ LEAD PROSE ══ */}
      <BlurRevealText key={`s06-lead-${lang}`} as="p" className={styles.leadProse} delay={80}>
        {isEs
          ? 'La IA se introduce únicamente después de que exista el historial de eventos gobernado y el proceso de decisión. El objetivo no es el control autónomo; es la detección temprana de riesgos, la generación de opciones factibles y la evaluación consistente de trade-offs con un decisor humano en el circuito.'
          : 'AI is introduced only after the governed event history and decision process exist. The objective is not autonomous control; it is earlier risk detection, feasible option generation, and consistent evaluation of trade-offs with a human decision-maker in the loop.'}
      </BlurRevealText>

      {/* ══ AI USE CASE TABLE ══ */}
      <motion.div
        className={styles.tableWrapper}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        role="region"
        aria-label={isEs ? 'Tabla de modelos de casos de uso de IA' : 'AI use-case model table'}
      >
        {/* Table header */}
        <div className={styles.tableHead} aria-hidden="true">
          <span className={styles.tableHeadCell}>{isEs ? 'CASO DE USO' : 'USE CASE'}</span>
          <span className={styles.tableHeadCell}>{isEs ? 'ENTRADAS' : 'INPUTS'}</span>
          <span className={styles.tableHeadCell}>{isEs ? 'ENFOQUE DEL MODELO' : 'MODEL APPROACH'}</span>
          <span className={styles.tableHeadCell}>{isEs ? 'SALIDA DE DECISIÓN' : 'DECISION OUTPUT'}</span>
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
              <span className={styles.useCaseName}>{isEs ? uc.useCaseEs : uc.useCaseEn}</span>
            </div>

            {/* Inputs */}
            <p className={styles.inputsCell}>{isEs ? uc.inputsEs : uc.inputsEn}</p>

            {/* Model approach pills */}
            <div className={styles.pillsCell}>
              {uc.modelApproach.map((pill) => (
                <span
                  key={pill.labelEn}
                  className={`${styles.modelPill} ${styles['modelPill--' + pill.color]}`}
                >
                  {isEs ? pill.labelEs : pill.labelEn}
                </span>
              ))}
            </div>

            {/* Decision output */}
            <div className={styles.outputCell}>
              <span className={styles.outputArrow} aria-hidden="true">›</span>
              <span className={styles.outputText}>
                {isEs ? uc.decisionOutputEs : uc.decisionOutputEn}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ══ PRODUCTION OPERATING LOOP ══ */}
      <div className={styles.loopSection}>
        <div className={styles.loopHeader}>
          <div className={styles.loopHeaderAccent} aria-hidden="true" />
          <h3 className={styles.loopTitle}>
            {isEs ? 'Ciclo de producción en operación' : 'Production operating loop'}
          </h3>
        </div>

        <div
          className={styles.loopStages}
          role="list"
          aria-label={isEs ? 'Etapas del ciclo de producción en operación' : 'Production operating loop stages'}
        >
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
                <span className={styles.loopStageName}>
                  {isEs ? stage.titleEs : stage.titleEn}
                </span>
              </div>

              {/* Control */}
              <div className={styles.loopCardSection}>
                <span className={styles.loopCardLabel}>CONTROL</span>
                <p className={styles.loopCardBody}>{isEs ? stage.controlEs : stage.controlEn}</p>
              </div>

              {/* Gate / Output */}
              <div className={styles.loopCardSection}>
                <span className={`${styles.loopCardLabel} ${styles.loopGateLabel}`}>
                  {isEs ? 'COMPUERTA / SALIDA' : 'GATE / OUTPUT'}
                </span>
                <p className={`${styles.loopCardBody} ${styles.loopGateBody}`}>
                  {isEs ? stage.gateOutputEs : stage.gateOutputEn}
                </p>
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
          aria-label={isEs ? 'Descripción de retroalimentación en bucle cerrado' : 'Closed-loop feedback description'}
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
            {isEs
              ? 'Retroalimentación de Bucle Cerrado: Telemetría Continua, Auditoría Operativa y Disparadores Automatizados de Reentrenamiento'
              : 'Closed-Loop Feedback: Continuous Telemetry, Operational Auditing & Automated Retraining Triggers'}
          </span>
        </motion.div>
      </div>

      {/* ══ HUMAN AUTHORITY & GUARDRAILS ══ */}
      <div className={styles.guardrailsSection}>
        <div className={styles.guardrailsHeader}>
          <div className={styles.guardrailsHeaderAccent} aria-hidden="true" />
          <h3 className={styles.guardrailsTitle}>
            {isEs ? 'Autoridad humana y salvaguardas' : 'Human authority and guardrails'}
          </h3>
        </div>

        <div
          className={styles.guardrailsGrid}
          role="list"
          aria-label={isEs ? 'Salvaguardas de autoridad humana' : 'Human authority guardrails'}
        >
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
              <h4 className={styles.guardrailTitle}>{isEs ? g.titleEs : g.titleEn}</h4>
              <p className={styles.guardrailBody}>{isEs ? g.bodyEs : g.bodyEn}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
