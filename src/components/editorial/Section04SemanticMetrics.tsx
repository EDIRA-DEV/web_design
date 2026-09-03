'use client';

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { MaskRevealText, ScrambleText, BlurRevealText } from './TextAnimations';
import styles from './Section04SemanticMetrics.module.css';


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

import { useLang } from '@/lib/i18n';

/* ─────────────────────────────────────────────────────────────
   GOVERNANCE MECHANISM TABLE DATA
   ───────────────────────────────────────────────────────────── */
interface GovernanceRow {
  id: string;
  controlEn: string;
  controlEs: string;
  mechanismEn: string;
  mechanismEs: string;
  managementOutcomeEn: string;
  managementOutcomeEs: string;
  icon: React.ReactNode;
}

const GOVERNANCE_ROWS: GovernanceRow[] = [
  {
    id: 'ownership',
    controlEn: 'Ownership',
    controlEs: 'Propiedad',
    mechanismEn: 'Executive owner, data owner, steward, product owner',
    mechanismEs: 'Propietario ejecutivo, dueño de datos, administrador, dueño de producto',
    managementOutcomeEn: 'Fast issue resolution and accountability',
    managementOutcomeEs: 'Resolución ágil de problemas y rendición de cuentas',
    icon: <OwnershipIcon />,
  },
  {
    id: 'catalogue-lineage',
    controlEn: 'Catalogue & Lineage',
    controlEs: 'Catálogo & Lineage',
    mechanismEn: 'Purview or equivalent; business glossary; source-to-KPI lineage',
    mechanismEs: 'Purview o equivalente; glosario de negocio; Lineage fuente-a-KPI',
    managementOutcomeEn: 'Trust and impact analysis',
    managementOutcomeEs: 'Confianza y análisis de impacto',
    icon: <CatalogueIcon />,
  },
  {
    id: 'data-contracts',
    controlEn: 'Data contracts',
    controlEs: 'Data Contracts',
    mechanismEn: 'Schema, keys, semantics, cadence, quality SLA, change policy',
    mechanismEs: 'Esquema, claves, semántica, cadencia, SLA de calidad, política de cambios',
    managementOutcomeEn: 'Predictable producer-consumer interface',
    managementOutcomeEs: 'Interfaz productor-consumidor predecible',
    icon: <ContractIcon />,
  },
  {
    id: 'security',
    controlEn: 'Security',
    controlEs: 'Seguridad',
    mechanismEn: 'Entra/RBAC, least privilege, RLS/OLS, encryption, retention',
    mechanismEs: 'Entra/RBAC, mínimo privilegio, RLS/OLS, cifrado, retención',
    managementOutcomeEn: 'Controlled access and compliance',
    managementOutcomeEs: 'Acceso controlado y cumplimiento normativo',
    icon: <SecurityIcon />,
  },
  {
    id: 'quality',
    controlEn: 'Quality',
    controlEs: 'Calidad',
    mechanismEn: 'DQ thresholds, exception queues, root cause, remediation SLA',
    mechanismEs: 'Umbrales DQ, colas de excepción, causa raíz, SLA de remediación',
    managementOutcomeEn: 'Known fitness for use',
    managementOutcomeEs: 'Aptitud de uso conocida y verificada',
    icon: <QualityIcon />,
  },
  {
    id: 'model-governance',
    controlEn: 'Model governance',
    controlEs: 'Gobernanza de modelos',
    mechanismEn: 'Approval, versioning, validation, drift, explainability, audit',
    mechanismEs: 'Aprobación, versionado, validación, deriva, explicabilidad, auditoría',
    managementOutcomeEn: 'Safe, monitored AI decisions',
    managementOutcomeEs: 'Decisiones de IA seguras y monitoreadas',
    icon: <ModelGovIcon />,
  },
];

/* ─────────────────────────────────────────────────────────────
   GOVERNANCE ROW CARD
   ───────────────────────────────────────────────────────────── */
function GovernanceRowCard({
  row,
  index,
  isEs,
}: {
  row: GovernanceRow;
  index: number;
  isEs: boolean;
}) {
  const control = isEs ? row.controlEs : row.controlEn;
  const mechanism = isEs ? row.mechanismEs : row.mechanismEn;
  const outcome = isEs ? row.managementOutcomeEs : row.managementOutcomeEn;

  return (
    <motion.div
      className={styles.govRow}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.075 }}
      aria-label={`${control}: ${mechanism} → ${outcome}`}
    >
      {/* Control pill (dark navy, bold, icon) */}
      <div className={styles.govControlPill}>
        <span className={styles.govControlIcon} aria-hidden="true">{row.icon}</span>
        <span className={styles.govControlLabel}>{control}</span>
      </div>

      {/* Arrow 1 */}
      <div className={`${styles.govArrow} ${styles.govArrowFirst}`} aria-hidden="true">
        <svg className={styles.govArrowSvg} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </div>

      {/* Mechanism (plain text body) */}
      <p className={styles.govMechanism}>{mechanism}</p>

      {/* Arrow 2 */}
      <div className={`${styles.govArrow} ${styles.govArrowSecond}`} aria-hidden="true">
        <svg className={styles.govArrowSvg} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </div>

      {/* Management Outcome (lavender badge) */}
      <div className={styles.govOutcomeBadge}>
        <span className={styles.govOutcomeText}>{outcome}</span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   KPI METRIC NODES (5 items: 3 top row, 2 bottom row)
   ───────────────────────────────────────────────────────────── */
interface KpiNode {
  id: string;
  step: string;
  titleEn: string;
  titleEs: string;
  subtitleEn: string;
  subtitleEs: string;
  coreLogicEn: string;
  coreLogicEs: string;
  guardrailEn: string;
  guardrailEs: string;
  grainEn: string;
  grainEs: string;
  ownerEn: string;
  ownerEs: string;
  thresholdEn: string;
  thresholdEs: string;
  accentColor: 'violet' | 'cyan' | 'emerald';
}

const KPI_NODES: KpiNode[] = [
  {
    id: 'tat',
    step: '01',
    titleEn: 'TAT',
    titleEs: 'TAT',
    subtitleEn: 'Turn-Around Time',
    subtitleEs: 'Tiempo de Ciclo (TAT)',
    coreLogicEn: 'Release timestamp \u2212 Induction timestamp.',
    coreLogicEs: 'Timestamp de liberación \u2212 Timestamp de Induction.',
    guardrailEn: 'Median + P80/P90 by scope.',
    guardrailEs: 'Mediana + P80/P90 por alcance.',
    grainEn: 'Shop visit \u00b7 workscope tier \u00b7 engine family',
    grainEs: 'Shop visit \u00b7 nivel de workscope \u00b7 familia de motor',
    ownerEn: 'MRO Operations Lead',
    ownerEs: 'Líder de Operaciones MRO',
    thresholdEn: 'P80 \u2264 contractual TAT; median \u2264 baseline \u22125%',
    thresholdEs: 'P80 \u2264 TAT contractual; mediana \u2264 base \u22125%',
    accentColor: 'violet',
  },
  {
    id: 'effective-capacity',
    step: '02',
    titleEn: 'Effective Cap.',
    titleEs: 'Cap. Efectiva',
    subtitleEn: 'Effective Capacity',
    subtitleEs: 'Capacidad Efectiva',
    coreLogicEn: 'Nominal time less planned / unplanned constraint loss.',
    coreLogicEs: 'Tiempo nominal menos pérdidas por restricción planificada / no planificada.',
    guardrailEn: 'Never infer from nominal capacity alone.',
    guardrailEs: 'Nunca inferir solo de la capacidad nominal.',
    grainEn: 'Bay \u00b7 shift \u00b7 week',
    grainEs: 'Bahía \u00b7 turno \u00b7 semana',
    ownerEn: 'Planning & Scheduling Manager',
    ownerEs: 'Gerente de Planeación y Programación',
    thresholdEn: 'Utilisation \u2265 85% of effective cap.',
    thresholdEs: 'Utilización \u2265 85% de la cap. efectiva.',
    accentColor: 'cyan',
  },
  {
    id: 'wip-aging',
    step: '03',
    titleEn: 'WIP Aging',
    titleEs: 'Antigüedad WIP',
    subtitleEn: 'Work-in-Process Age',
    subtitleEs: 'Antigüedad del Work-in-Process',
    coreLogicEn: 'Current time \u2212 Current-stage entry time.',
    coreLogicEs: 'Hora actual \u2212 Hora de entrada a la etapa actual.',
    guardrailEn: 'Threshold by stage and workscope.',
    guardrailEs: 'Umbral por etapa y workscope.',
    grainEn: 'Shop-visit \u00b7 stage \u00b7 day',
    grainEs: 'Shop visit \u00b7 etapa \u00b7 día',
    ownerEn: 'Production Control',
    ownerEs: 'Control de Producción',
    thresholdEn: 'No visit > 120% of stage TAT target',
    thresholdEs: 'Ninguna visita > 120% del objetivo TAT por etapa',
    accentColor: 'violet',
  },
  {
    id: 'skill-coverage',
    step: '04',
    titleEn: 'Skill Coverage',
    titleEs: 'Cobertura de Habilidades',
    subtitleEn: 'Workforce Skill Coverage',
    subtitleEs: 'Cobertura de Habilidades Certificadas',
    coreLogicEn: 'Nominal time less planned / unplanned constraint loss.',
    coreLogicEs: 'Tiempo nominal menos pérdida por restricción planificada / no planificada.',
    guardrailEn: 'By skill, shift, and horizon.',
    guardrailEs: 'Por habilidad, turno y horizonte.',
    grainEn: 'Skill cluster \u00b7 shift \u00b7 week',
    grainEs: 'Clúster de habilidad \u00b7 turno \u00b7 semana',
    ownerEn: 'Workforce Planning Lead',
    ownerEs: 'Líder de Planeación de Fuerza Laboral',
    thresholdEn: 'Coverage \u2265 95% of demand across all critical skills',
    thresholdEs: 'Cobertura \u2265 95% de la demanda en todas las habilidades críticas',
    accentColor: 'emerald',
  },
  {
    id: 'shortage-exposure',
    step: '05',
    titleEn: 'Shortage Exp.',
    titleEs: 'Exposición a Faltantes',
    subtitleEn: 'Parts Shortage Exposure',
    subtitleEs: 'Exposición a Faltantes de Refacciones',
    coreLogicEn: 'Planned visit hours at risk from missing parts.',
    coreLogicEs: 'Horas de visita planificadas en riesgo por refacciones faltantes.',
    guardrailEn: 'Avoid simple part-count metrics.',
    guardrailEs: 'Evitar métricas simples de conteo de piezas.',
    grainEn: 'Shop-visit \u00b7 part-class \u00b7 week',
    grainEs: 'Shop visit \u00b7 clase de refacción \u00b7 semana',
    ownerEn: 'Supply Chain Intelligence',
    ownerEs: 'Inteligencia de Cadena de Suministro',
    thresholdEn: 'Exposure hours \u2264 2% of scheduled production hrs',
    thresholdEs: 'Horas en exposición \u2264 2% de las horas de producción programadas',
    accentColor: 'cyan',
  },
];

/* ─────────────────────────────────────────────────────────────
   NODE CARD  (whileInView progressive activation)
   ───────────────────────────────────────────────────────────── */
function KpiCard({ node, index, isEs }: { node: KpiNode; index: number; isEs: boolean }) {
  const title = isEs ? node.titleEs : node.titleEn;
  const subtitle = isEs ? node.subtitleEs : node.subtitleEn;
  const coreLogic = isEs ? node.coreLogicEs : node.coreLogicEn;
  const grain = isEs ? node.grainEs : node.grainEn;
  const owner = isEs ? node.ownerEs : node.ownerEn;
  const guardrail = isEs ? node.guardrailEs : node.guardrailEn;
  const threshold = isEs ? node.thresholdEs : node.thresholdEn;

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
        <h3 className={styles.nodeTitle}>{title}</h3>
        <span className={styles.nodeSubtitle}>{subtitle}</span>
      </div>

      {/* Core Logic */}
      <div className={styles.nodeBlock}>
        <span className={styles.nodeBlockLabel}>
          {isEs ? 'LÓGICA CENTRAL:' : 'CORE LOGIC:'}
        </span>
        <p className={styles.nodeBlockBody}>{coreLogic}</p>
      </div>

      {/* Meta row: grain + owner */}
      <div className={styles.nodeMeta}>
        <div className={styles.nodeMetaItem}>
          <span className={styles.nodeMetaLabel}>
            {isEs ? 'GRANULARIDAD' : 'GRAIN'}
          </span>
          <span className={styles.nodeMetaValue}>{grain}</span>
        </div>
        <div className={styles.nodeMetaItem}>
          <span className={styles.nodeMetaLabel}>
            {isEs ? 'PROPIETARIO' : 'OWNER'}
          </span>
          <span className={styles.nodeMetaValue}>{owner}</span>
        </div>
      </div>

      {/* Guardrail + threshold */}
      <div className={styles.guardrailBox}>
        <span className={styles.guardrailLabel}>
          {isEs ? 'SALVAGUARDA:' : 'GUARDRAIL:'}
        </span>
        <p className={styles.guardrailBody}>{guardrail}</p>
        <span className={styles.thresholdPill}>{threshold}</span>
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
  const { lang } = useLang();
  const isEs = lang === 'es';
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
          <MaskRevealText key={`s04-title1-${lang}`} as="span" className={styles.titleLine} triggerOnView>
            {isEs ? 'Gobernanza y modelo semántico:' : 'Governance and semantic model:'}
          </MaskRevealText>
          <MaskRevealText key={`s04-title2-${lang}`} as="span" className={styles.titleLine} triggerOnView delay={120}>
            {isEs ? 'una sola versión de la decisión' : 'one version of the decision'}
          </MaskRevealText>
        </h2>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ══ LEAD PROSE ══ */}
      <BlurRevealText key={`s04-lead-${lang}`} as="p" className={styles.leadProse} delay={80}>
        {isEs
          ? 'La gobernanza de datos es un mecanismo operativo, no un ejercicio documental. Define quién es dueño de una métrica, cuál fuente es autoritativa, cómo se mide la frescura y la calidad, y quién puede acceder a detalle a nivel de motor, cliente, empleado o financiero.'
          : 'Data governance is an operating mechanism, not a documentation exercise. It defines who owns a metric, which source is authoritative, how freshness and quality are measured, and who may access engine-, customer-, employee-, or financial-level detail.'}
      </BlurRevealText>

      {/* ══ GOVERNANCE MECHANISM TABLE ══ */}
      <motion.div
        className={styles.govWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        role="region"
        aria-label={isEs ? 'Mecanismos operativos de gobernanza de datos' : 'Data governance operating mechanisms'}
      >
        {/* Column headers */}
        <div className={styles.govHeader} aria-hidden="true">
          <span className={styles.govHeaderControl}>Control</span>
          <span className={styles.govHeaderMech}>{isEs ? 'Mecanismo' : 'Mechanism'}</span>
          <span className={styles.govHeaderOutcome}>{isEs ? 'Resultado de gestión' : 'Management outcome'}</span>
        </div>

        {/* Rows */}
        <div className={styles.govRows}>
          {GOVERNANCE_ROWS.map((row, idx) => (
            <GovernanceRowCard key={row.id} row={row} index={idx} isEs={isEs} />
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
          <span className={styles.subSectionEyebrow}>
            {isEs ? 'SECCIÓN 04.2' : 'SECTION 04.2'}
          </span>
          <h3 className={styles.subSectionTitle}>
            {isEs ? 'Métricas semánticas y contratos de cálculo' : 'Semantic metrics & calculation contracts'}
          </h3>
          <p className={styles.subSectionBody}>
            {isEs
              ? 'El modelo semántico de Power BI debe calcular los KPIs una sola vez y reutilizarlos en páginas, alertas, exportaciones y modelos. Cada medida requiere una definición de negocio, granularidad, numerador/denominador, exclusiones, lógica temporal, propietario, umbral y prueba de reconciliación.'
              : 'The Power BI semantic model should calculate KPIs once and reuse them across pages, alerts, exports, and models. Each measure requires a business definition, grain, numerator/denominator, exclusions, time logic, owner, threshold, and reconciliation test.'}
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
            <KpiCard key={node.id} node={node} index={idx} isEs={isEs} />
          ))}
        </div>

        {/* ── ROW 2: Nodes 4–5 (right-offset on desktop) ── */}
        <div
          className={`${styles.nodeRow} ${styles.nodeRowReversed}`}
          aria-label="KPI metrics row 2"
        >
          <KpiCard key={bottomRow[0].id} node={bottomRow[0]} index={3} isEs={isEs} />
          <KpiCard key={bottomRow[1].id} node={bottomRow[1]} index={4} isEs={isEs} />
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
        aria-label={isEs ? 'Requisito de compuerta de gobernanza' : 'Governance gate requirement'}
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
              <strong className={styles.gateStrong}>
                {isEs ? 'Compuerta de gobernanza:' : 'Governance gate:'}
              </strong>{' '}
              {isEs
                ? 'Un KPI o modelo no está listo para producción hasta que su propietario, Lineage, umbral de calidad, clasificación de seguridad y uso de decisión sean aprobados.'
                : 'A KPI or model is not production-ready until its owner, lineage, quality threshold, security classification, and decision use are approved.'}
            </p>
            {/* Three gate check badges */}
            <div className={styles.gateChecks} aria-label="Gate checklist">
              {[
                {
                  label: isEs ? 'Propietario + Lineage' : 'Owner + Lineage',
                  color: 'violet',
                },
                {
                  label: isEs ? 'Umbral de Calidad' : 'Quality Threshold',
                  color: 'cyan',
                },
                {
                  label: isEs ? 'Clasificación de Seguridad' : 'Security Classification',
                  color: 'emerald',
                },
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
