'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Search, 
  Target, 
  Activity, 
  Ruler, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  Gauge, 
  ChevronLeft, 
  ChevronRight, 
  Lightbulb 
} from 'lucide-react';
import { MaskRevealText, BlurRevealText } from './TextAnimations';
import styles from './EightDDeliveryModel.module.css';

interface PhaseConfig {
  id: number;
  number: string;
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
}

const PHASES_CONFIG: PhaseConfig[] = [
  { id: 1, number: '01', name: 'DISCOVER', icon: Search },
  { id: 2, number: '02', name: 'DEFINE', icon: Target },
  { id: 3, number: '03', name: 'DIAGNOSE', icon: Activity },
  { id: 4, number: '04', name: 'DESIGN', icon: Ruler },
  { id: 5, number: '05', name: 'DEVELOP', icon: Code2 },
  { id: 6, number: '06', name: 'DEPLOY', icon: Rocket },
  { id: 7, number: '07', name: 'DELIVER', icon: CheckCircle2 },
  { id: 8, number: '08', name: 'DRIVE', icon: Gauge },
];

const SECTORS_GEOMETRY = [
  { id: 1, d: 'M 250 35 A 215 215 0 0 1 402.0 97.9 L 327.8 168.7 A 110 110 0 0 0 250 140 Z', textX: 312, textY: 106, name: '1. DISCOVER' },
  { id: 2, d: 'M 402.0 97.9 A 215 215 0 0 1 465 250 L 360 250 A 110 110 0 0 0 327.8 168.7 Z', textX: 401, textY: 201, name: '2. DEFINE' },
  { id: 3, d: 'M 465 250 A 215 215 0 0 1 402.0 402.0 L 327.8 331.2 A 110 110 0 0 0 360 250 Z', textX: 392, textY: 329, name: '3. DIAGNOSE' },
  { id: 4, d: 'M 402.0 402.0 A 215 215 0 0 1 250 465 L 250 360 A 110 110 0 0 0 327.8 331.2 Z', textX: 315, textY: 427, name: '4. DESIGN' },
  { id: 5, d: 'M 250 465 A 215 215 0 0 1 97.9 402.0 L 172.2 331.2 A 110 110 0 0 0 250 360 Z', textX: 185, textY: 427, name: '5. DEVELOP' },
  { id: 6, d: 'M 97.9 402.0 A 215 215 0 0 1 35 250 L 140 250 A 110 110 0 0 0 172.2 331.2 Z', textX: 98, textY: 329, name: '6. DEPLOY' },
  { id: 7, d: 'M 35 250 A 215 215 0 0 1 97.9 97.9 L 172.2 168.7 A 110 110 0 0 0 140 250 Z', textX: 98, textY: 201, name: '7. DELIVER' },
  { id: 8, d: 'M 97.9 97.9 A 215 215 0 0 1 250 35 L 250 140 A 110 110 0 0 0 172.2 168.7 Z', textX: 186, textY: 106, name: '8. DRIVE' },
];

export const EightDDeliveryModel: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activePhase, setActivePhase] = useState<number>(1);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  // Active phase data and icon from localized dictionary
  const currentPhaseData = t.section08.phases[activePhase - 1] ?? t.section08.phases[0];
  const CurrentIcon = PHASES_CONFIG[activePhase - 1]?.icon ?? Search;

  const nextPhase = () => setActivePhase((prev) => (prev >= 8 ? 1 : prev + 1));
  const prevPhase = () => setActivePhase((prev) => (prev <= 1 ? 8 : prev - 1));

  return (
    <section 
      className={styles.section} 
      id="section-08" 
      aria-labelledby="section-08-title"
    >
      {/* ── Section Header (consistent with Chapters 00–07) ── */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber} aria-hidden="true">08</span>
        <MaskRevealText
          key={`s08-title-${lang}`}
          as="h2"
          id="section-08-title"
          className={styles.sectionTitle}
          text={t.section08.title}
          delay={60}
        />
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ── Lead Prose ── */}
      <BlurRevealText key={`s08-lead-${lang}`} as="p" className={styles.leadProse} delay={80}>
        {t.section08.subtitle}
      </BlurRevealText>

      {/* 2. Unified 8D Interactive Container (Wheel + Inspector) */}
      <div className={styles.engineContainer}>
        
        {/* SVG Circular 8D Engine */}
        <div className={styles.wheelWrapper}>
          <div className={styles.wheelSvgBox}>
            <svg 
              viewBox="0 0 500 500" 
              className={styles.wheelSvg}
              role="region" 
              aria-label="8D Delivery Interactive Circular Engine"
            >
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7928CA" stopOpacity="0.5" />
                  <stop offset="60%" stopColor="#3b0764" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#08080e" stopOpacity="0" />
                </radialGradient>
                <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Outer guide track */}
              <circle 
                cx="250" 
                cy="250" 
                r="238" 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.08)" 
                strokeDasharray="3 5" 
                strokeWidth="1" 
              />
              <circle 
                cx="250" 
                cy="250" 
                r="215" 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.12)" 
                strokeWidth="1.5" 
              />
              <circle 
                cx="250" 
                cy="250" 
                r="110" 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.15)" 
                strokeWidth="1" 
              />

              {/* 8 Interactive Sectors */}
              {SECTORS_GEOMETRY.map((sector) => {
                const isSelected = activePhase === sector.id;
                const isHovered = hoveredPhase === sector.id;

                let fill = 'rgba(255, 255, 255, 0.025)';
                let stroke = 'rgba(255, 255, 255, 0.12)';
                let strokeWidth = '1.5px';
                let textFill = '#a1a1aa';

                if (isSelected) {
                  fill = 'rgba(121, 40, 202, 0.38)';
                  stroke = '#a855f7';
                  strokeWidth = '2.5px';
                  textFill = '#ffffff';
                } else if (isHovered) {
                  fill = 'rgba(168, 85, 247, 0.22)';
                  stroke = 'rgba(255, 255, 255, 0.45)';
                  textFill = '#f4f4f5';
                }

                return (
                  <g 
                    key={sector.id} 
                    className={styles.sectorGroup}
                    onClick={() => setActivePhase(sector.id)}
                    onMouseEnter={() => setHoveredPhase(sector.id)}
                    onMouseLeave={() => setHoveredPhase(null)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Phase ${sector.name}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActivePhase(sector.id);
                      }
                    }}
                  >
                    <path
                      d={sector.d}
                      fill={fill}
                      stroke={stroke}
                      strokeWidth={strokeWidth}
                      filter={isSelected ? 'url(#purpleGlow)' : undefined}
                      className={styles.sectorPath}
                    />
                    <text
                      x={sector.textX}
                      y={sector.textY}
                      fill={textFill}
                      className={styles.sectorText}
                    >
                      {sector.name}
                    </text>
                  </g>
                );
              })}

              {/* Center 8D METHOD Hub */}
              <circle 
                cx="250" 
                cy="250" 
                r="95" 
                fill="#0b0b12" 
                stroke="#7928CA" 
                strokeWidth="2.5" 
              />
              <circle 
                cx="250" 
                cy="250" 
                r="88" 
                fill="url(#hubGlow)" 
              />
              <circle 
                cx="250" 
                cy="250" 
                r="68" 
                fill="#10101a" 
                stroke="rgba(255, 255, 255, 0.1)" 
                strokeWidth="1" 
              />
              {/* Center 8D METHOD Icon from public/icons/8d method edira.svg */}
              <image
                href="/icons/8d%20method%20edira.svg"
                x="205"
                y="215.35"
                width="90"
                height="69.3"
                preserveAspectRatio="xMidYMid meet"
                className="pointer-events-none"
              />
            </svg>
          </div>
        </div>

        {/* Bottom Panel: Active Phase Inspector */}
        <div className={styles.inspector}>
          <div className={styles.inspectorHeader}>
            <div className={styles.inspectorIdentity}>
              <div className={styles.iconBadge} aria-hidden="true">
                <CurrentIcon size={24} />
              </div>
              <div>
                <span className={styles.stageBadge}>
                  {t.section08.stepper.stage} {currentPhaseData.number}
                </span>
                <h3 className={styles.phaseTitle}>
                  {currentPhaseData.title}
                </h3>
              </div>
            </div>

            {/* Stepper Controls */}
            <div className={styles.stepperControls}>
              <span className={styles.stepperLabel}>
                <strong className={styles.stepperActiveNum}>{activePhase}</strong> {t.section08.stepper.ofPhases}
              </span>
              <button 
                type="button"
                onClick={prevPhase}
                className={styles.stepPrevBtn}
                aria-label={t.section08.stepper.previous}
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                type="button"
                onClick={nextPhase}
                className={styles.stepNextBtn}
                aria-label={t.section08.stepper.next}
              >
                <span>{t.section08.stepper.next}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* 2-Column Criteria Grid */}
          <div className={styles.criteriaGrid}>
            <div className={styles.criteriaCard}>
              <div>
                <span className={styles.criteriaEyebrowZinc}>
                  {t.section08.stepper.strategicFocus}
                </span>
                <p className={styles.criteriaBody}>
                  {currentPhaseData.focus}
                </p>
              </div>
              <div className={styles.criteriaFooterZinc}>
                {t.section08.stepper.scopeNote}
              </div>
            </div>

            <div className={styles.criteriaCard}>
              <div>
                <span className={styles.criteriaEyebrowPurple}>
                  {t.section08.stepper.gateDeliverable}
                </span>
                <p className={styles.criteriaGateText}>
                  {currentPhaseData.gate}
                </p>
              </div>
              <div className={styles.criteriaFooterPurple}>
                {t.section08.stepper.artifactNote}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Capability Matrix Table (With Hover Sync to the Wheel) */}
      <div className={styles.matrixSection}>
        <div className={styles.matrixHeader}>
          <span className={styles.matrixEyebrow}>
            {t.section08.matrixSubtitle}
          </span>
          <h3 className={styles.matrixTitle}>
            {t.section08.matrixTitle}
          </h3>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th scope="col" className={styles.thCap}>
                  {t.section08.matrixHeaders.capability}
                </th>
                <th scope="col" className={styles.thRole}>
                  {t.section08.matrixHeaders.role}
                </th>
                <th scope="col" className={styles.thPhase}>
                  {t.section08.matrixHeaders.linkedPhase}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.section08.matrix.map((row, idx) => {
                const isActive = activePhase === row.phaseId;
                const isHovered = hoveredPhase === row.phaseId;
                const phaseConfig = PHASES_CONFIG[row.phaseId - 1];

                return (
                  <tr 
                    key={idx}
                    onMouseEnter={() => setHoveredPhase(row.phaseId)}
                    onMouseLeave={() => setHoveredPhase(null)}
                    onClick={() => setActivePhase(row.phaseId)}
                    className={`${styles.tableRow} ${isActive ? styles.tableRowActive : ''}`}
                  >
                    <td className={styles.tdCap}>
                      <span 
                        className={`${styles.bullet} ${isActive ? styles.bulletActive : styles.bulletInactive}`}
                        aria-hidden="true" 
                      />
                      <span>{row.capability}</span>
                    </td>
                    <td className={styles.tdRole}>
                      {row.role}
                    </td>
                    <td className={styles.tdPhase}>
                      0{row.phaseId} // {phaseConfig ? phaseConfig.name : `PHASE ${row.phaseId}`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Strategic Synthesis Callout */}
      <div className={styles.synthesisCard}>
        <div className={styles.synthesisIconBadge} aria-hidden="true">
          <Lightbulb size={22} />
        </div>
        <div className={styles.synthesisContent}>
          <span className={styles.synthesisEyebrow}>
            {t.section08.synthesisTitle}
          </span>
          <p className={styles.synthesisText}>
            <span className={styles.typingContainer}>
              <span className={styles.typingText}>
                {t.section08.synthesis}
              </span>
            </span>
          </p>
        </div>
      </div>

    </section>
  );
};
