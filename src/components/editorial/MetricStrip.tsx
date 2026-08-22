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

/* ─────────────────────────────────────────────────────────────
   Metric configuration
   ───────────────────────────────────────────────────────────── */
interface MetricConfig {
  /** Uppercase eyebrow label */
  label: string;
  /** Target numeric value to count up to */
  numericValue: number;
  /** Text rendered before the number, same weight/size — e.g. "US$" */
  prefix?: string;
  /** Text rendered right after the number — e.g. "M" */
  suffix?: string;
  /** Smaller badge after the number — e.g. "m²" */
  unit?: string;
  /** Secondary label line below the number — e.g. "LEAP Visits/Year" */
  unitLabel?: string;
  /** Apply en-US thousands formatting: 50000 → "50,000" */
  formatCommas?: boolean;
  /** Stagger delay before this column's animation starts (ms) */
  delay: number;
}

const METRICS: MetricConfig[] = [
  {
    label: 'Investment',
    numericValue: 140,
    prefix: 'US$',
    suffix: 'M',
    delay: 0,
  },
  {
    label: 'Footprint',
    numericValue: 50000,
    unit: 'm²',
    formatCommas: true,
    delay: 80,
  },
  {
    label: 'Throughput',
    numericValue: 350,
    unitLabel: 'LEAP Visits/Year',
    delay: 160,
  },
  {
    label: 'Target Horizon',
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
}

function MetricItem({ config, isLast, enabled }: MetricItemProps) {
  const count = useCountUp(config.numericValue, 1800, enabled, config.delay);

  /* Format: optionally add thousands commas */
  const displayNum = config.formatCommas
    ? count.toLocaleString('en-US')
    : String(count);

  return (
    <div
      className={`${styles.cell} ${!isLast ? styles.cellDivider : ''}`}
      role="listitem"
    >
      {/* ── Eyebrow label ── */}
      <p className={styles.label}>{config.label}</p>

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
      {config.unitLabel && (
        <p className={styles.unitLabel}>{config.unitLabel}</p>
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
      aria-label="Key facility metrics"
    >
      {METRICS.map((m, i) => (
        <MetricItem
          key={m.label}
          config={m}
          isLast={i === METRICS.length - 1}
          enabled={animated}
        />
      ))}
    </div>
  );
}
