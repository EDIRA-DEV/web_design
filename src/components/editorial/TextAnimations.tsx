'use client';

import React, { useEffect, useRef, useState, useMemo, ElementType } from 'react';
import styles from './TextAnimations.module.css';

/* ─────────────────────────────────────────────────────────────
   1. MaskRevealText
   Splits text into words wrapped in overflow-hidden containers.
   Translates from translate3d(0, 105%, 0) -> translate3d(0, 0, 0)
   with cubic-bezier(0.16, 1, 0.3, 1) and staggered delays.
   ───────────────────────────────────────────────────────────── */

interface MaskRevealTextProps {
  id?: string;
  text?: string;
  children?: React.ReactNode;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  triggerOnView?: boolean;
}

export function MaskRevealText({
  id,
  text,
  children,
  as: Component = 'div',
  className = '',
  style,
  delay = 0,
  stagger = 30,
  triggerOnView = true,
}: MaskRevealTextProps) {
  const [isRevealed, setIsRevealed] = useState(!triggerOnView);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!triggerOnView) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView]);

  // If simple text string is provided, tokenize by spaces
  const words = useMemo(() => {
    if (typeof text === 'string') {
      return text.split(/\s+/).filter(Boolean);
    }
    return null;
  }, [text]);

  return (
    <Component
      id={id}
      ref={containerRef}
      style={style}
      className={`${styles.maskContainer} ${isRevealed ? styles.maskRevealed : ''} ${className}`}
    >
      {words ? (
        words.map((word, idx) => (
          <span key={`${word}-${idx}`} className={styles.maskWordWrapper}>
            <span
              className={styles.maskWord}
              style={{
                transitionDelay: `${delay + idx * stagger}ms`,
              }}
            >
              {word}
            </span>
          </span>
        ))
      ) : (
        // When rich children are passed, wrap them smoothly
        <span className={styles.maskWordWrapper} style={{ display: 'inline' }}>
          <span
            className={styles.maskWord}
            style={{
              transitionDelay: `${delay}ms`,
            }}
          >
            {children}
          </span>
        </span>
      )}
    </Component>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. ScrambleText (Decoder Effect)
   Rotates random characters ('#', 'X', '/', '0', '1', '§', etc.)
   at 30fps for ~500ms until resolving into real text.
   ───────────────────────────────────────────────────────────── */

const SCRAMBLE_CHARS = ['#', 'X', '/', '0', '1', '§', '%', '&', '*', '+', '?', '<', '>'];

interface ScrambleTextProps {
  text: string;
  className?: string;
  triggerOnView?: boolean;
  duration?: number; // Duration in ms (default 500ms)
  fps?: number; // Frames per second (default 30)
}

export function ScrambleText({
  text,
  className = '',
  triggerOnView = true,
  duration = 500,
  fps = 30,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const startScramble = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const totalFrames = Math.max(1, Math.floor((duration / 1000) * fps));
    const intervalMs = 1000 / fps;
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const resolvedCharsCount = Math.floor(progress * text.length);

      const scrambled = text
        .split('')
        .map((char, index) => {
          // Preserve spaces and special structural dividers
          if (char === ' ' || char === '/' || char === '—' || char === '-') {
            return char;
          }
          if (index < resolvedCharsCount) {
            return text[index];
          }
          const randomChar = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          return randomChar;
        })
        .join('');

      setDisplayText(scrambled);

      if (currentFrame >= totalFrames) {
        clearInterval(timer);
        setDisplayText(text); // Ensure final resolution is exact
      }
    }, intervalMs);
  };

  useEffect(() => {
    if (!triggerOnView) {
      startScramble();
      return;
    }

    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startScramble();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView]);

  return (
    <span ref={elementRef} className={`${styles.scrambleContainer} ${className}`}>
      {displayText}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. BlurRevealText
   Transition from filter: blur(12px) opacity(0) to blur(0px) opacity(1)
   with 1.2s smooth cubic-bezier curve.
   ───────────────────────────────────────────────────────────── */

interface BlurRevealTextProps {
  id?: string;
  text?: string;
  children?: React.ReactNode;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  triggerOnView?: boolean;
}

export function BlurRevealText({
  id,
  text,
  children,
  as: Component = 'p',
  className = '',
  style,
  delay = 0,
  triggerOnView = true,
}: BlurRevealTextProps) {
  const [isRevealed, setIsRevealed] = useState(!triggerOnView);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!triggerOnView) return;
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView]);

  return (
    <Component
      id={id}
      ref={elementRef}
      className={`${styles.blurReveal} ${isRevealed ? styles.blurRevealed : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {text || children}
    </Component>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. VioletShimmer (Decision Intelligence text gradient animation)
   ───────────────────────────────────────────────────────────── */

interface VioletShimmerProps {
  children: React.ReactNode;
  className?: string;
}

export function VioletShimmer({ children, className = '' }: VioletShimmerProps) {
  return (
    <em className={`${styles.textVioletShimmer} ${className}`}>
      {children}
    </em>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. TypewriterText
   Progressive character-by-character reveal with responsive
   wrapping and blinking neon purple cursor caret.
   ───────────────────────────────────────────────────────────── */

interface TypewriterTextProps {
  text: string;
  className?: string;
  cursorClassName?: string;
  speed?: number; // ms per character
  delay?: number; // ms initial delay
  triggerOnView?: boolean;
}

export function TypewriterText({
  text,
  className = '',
  cursorClassName = '',
  speed = 14,
  delay = 150,
  triggerOnView = true,
}: TypewriterTextProps) {
  const [charIndex, setCharIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(!triggerOnView);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!triggerOnView) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView]);

  useEffect(() => {
    if (!hasStarted) return;
    setCharIndex(0);

    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        setCharIndex((prev) => {
          if (prev >= text.length) {
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
      }, speed);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [hasStarted, text, speed, delay]);

  const displayed = text.slice(0, charIndex);

  return (
    <span ref={containerRef} className={className}>
      {displayed}
      <span
        aria-hidden="true"
        className={cursorClassName}
      />
    </span>
  );
}

