'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './MetricStrip.module.css';

/* ─────────────────────────────────────────────────────────────
   Easing — easeOutExpo produces a fast initial rise that
   decelerates cleanly toward the target value.
   ───────────────────────────────────────────────────────────── */
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/* ─────────────────────────────────────────────────────────────
   useCountUp — lightweight rAF counter hook
   @param target    The number to count up to.
   @param duration  Animation duration in ms (default 1800).
   @param enabled   Starts when true (triggered by IntersectionObserver).
   @param delayMs   Stagger offset before the rAF loop begins.
   ───────────────────────────────────────────────────────────── */
function useCountUp(
  target: number,
  duration: number,
  enabled: boolean,
  delayMs: number = 0,
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let rafId: number;

    const timeoutId = window.setTimeout(() => {
      let startTs: DOMHighResTimeStamp | null = null;

      const tick = (ts: DOMHighResTimeStamp) => {
        if (startTs === null) startTs = ts;
        const elapsed = ts - startTs;
        const progress = Math.min(elapsed / duration, 1);
        setValue(Math.round(target * easeOutExpo(progress)));
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [target, duration, enabled, delayMs]);

  return value;
}

import { useLang } from '@/lib/i18n';

/* ─────────────────────────────────────────────────────────────
   Metric configuration
   ───────────────────────────────────────────────────────────── */
interface MetricConfig {
  /** Uppercase eyebrow label */
  labelEn: string;
  labelEs: string;
  /** Target numeric value to count up to */
  numericValue: number;
  /** Text rendered before the number, same weight/size — e.g. "US$" */
  prefix?: string;
  /** Text rendered right after the number — e.g. "M" */
  suffix?: string;
  /** Smaller badge after the number — e.g. "m²" */
  unit?: string;
  /** Secondary label line below the number — e.g. "LEAP Visits/Year" */
  unitLabelEn?: string;
  unitLabelEs?: string;
  /** Apply en-US thousands formatting: 50000 → "50,000" */
  formatCommas?: boolean;
  /** Stagger delay before this column's animation starts (ms) */
  delay: number;
}

const METRICS: MetricConfig[] = [
  {
    labelEn: 'Investment',
    labelEs: 'Inversión',
    numericValue: 140,
    prefix: 'US$',
    suffix: 'M',
    delay: 0,
  },
  {
    labelEn: 'Footprint',
    labelEs: 'Huella',
    numericValue: 50000,
    unit: 'm²',
    formatCommas: true,
    delay: 80,
  },
  {
    labelEn: 'Throughput',
    labelEs: 'Throughput',
    numericValue: 350,
    unitLabelEn: 'LEAP Visits/Year',
    unitLabelEs: 'Visitas LEAP/Año',
    delay: 160,
  },
  {
    labelEn: 'Target Horizon',
    labelEs: 'Horizonte',
    numericValue: 2030,
    delay: 240,
  },
];

/* ─────────────────────────────────────────────────────────────
   MetricItem — individual cell with its own counter instance
   ───────────────────────────────────────────────────────────── */
interface MetricItemProps {
  config: MetricConfig;
  isLast: boolean;
  enabled: boolean;
  isEs: boolean;
}

function MetricItem({ config, isLast, enabled, isEs }: MetricItemProps) {
  const count = useCountUp(config.numericValue, 1800, enabled, config.delay);

  /* Format: optionally add thousands commas */
  const displayNum = config.formatCommas
    ? count.toLocaleString('en-US')
    : String(count);

  const label = isEs ? config.labelEs : config.labelEn;
  const unitLabel = isEs ? config.unitLabelEs : config.unitLabelEn;

  return (
    <div
      className={`${styles.cell} ${!isLast ? styles.cellDivider : ''}`}
      role="listitem"
    >
      {/* ── Eyebrow label ── */}
      <p className={styles.label}>{label}</p>

      {/* ── Value row ── */}
      <p className={styles.value}>
        {config.prefix && (
          <span className={styles.prefix}>{config.prefix}</span>
        )}
        <span className={styles.number}>{displayNum}</span>
        {config.suffix && (
          <span className={styles.suffix}>{config.suffix}</span>
        )}
        {config.unit && (
          <span className={styles.unit}>{config.unit}</span>
        )}
      </p>

      {/* ── Secondary unit label ── */}
      {unitLabel && (
        <p className={styles.unitLabel}>{unitLabel}</p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MetricStrip — root export
   IntersectionObserver on the strip fires all counters at once
   (with per-column stagger delays).
   ───────────────────────────────────────────────────────────── */
export function MetricStrip() {
  const { lang } = useLang();
  const isEs = lang === 'es';
  const [animated, setAnimated] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={stripRef}
      className={styles.strip}
      role="list"
      aria-label={isEs ? 'Métricas clave de la instalación' : 'Key facility metrics'}
    >
      {METRICS.map((m, i) => (
        <MetricItem
          key={m.labelEn}
          config={m}
          isLast={i === METRICS.length - 1}
          enabled={animated}
          isEs={isEs}
        />
      ))}
    </div>
  );
}
