'use client';

import React, { useEffect, useRef } from 'react';
import styles from './AmbientVioletGlow.module.css';

/**
 * Linear Interpolation helper for smooth organic inertia
 */
function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

export function AmbientVioletGlow() {
  const orbRef = useRef<HTMLDivElement>(null);
  const secondaryOrbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the device is a touch screen or mobile viewport (< 768px)
    const isMobileQuery = window.matchMedia('(max-width: 768px), (pointer: coarse)');
    if (isMobileQuery.matches) {
      // In mobile, CSS keyframe animations handle the autonomous organic pulse
      return;
    }

    let isRunning = true;
    let rafId: number;

    // Target coordinates (cursor position + scroll offset)
    const target = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.35,
    };

    // Current interpolated positions for primary and secondary orbs
    const currentPrimary = { x: target.x, y: target.y };
    const currentSecondary = { x: target.x, y: target.y };

    let lastScrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const handleScroll = () => {
      const scrollDiff = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      // Shift target slightly with scroll for subtle parallax depth
      target.y -= scrollDiff * 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 60FPS LERP animation loop with direct DOM mutation (avoids React re-renders)
    const animate = () => {
      if (!isRunning) return;

      // Primary orb: fast, responsive LERP (factor 0.055)
      currentPrimary.x = lerp(currentPrimary.x, target.x, 0.055);
      currentPrimary.y = lerp(currentPrimary.y, target.y, 0.055);

      // Secondary orb: deeper latency (factor 0.035) with subtle organic offset
      currentSecondary.x = lerp(currentSecondary.x, target.x - 30, 0.035);
      currentSecondary.y = lerp(currentSecondary.y, target.y + 40, 0.035);

      if (orbRef.current) {
        orbRef.current.style.transform = `translate3d(${currentPrimary.x.toFixed(1)}px, ${currentPrimary.y.toFixed(1)}px, 0) translate(-50%, -50%)`;
      }

      if (secondaryOrbRef.current) {
        secondaryOrbRef.current.style.transform = `translate3d(${currentSecondary.x.toFixed(1)}px, ${currentSecondary.y.toFixed(1)}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      isRunning = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} aria-hidden="true">
      {/* Primary Electric Violet Brush Glow */}
      <div ref={orbRef} className={styles.glowOrb} />
      {/* Secondary Soft Ambient Depth Halo */}
      <div ref={secondaryOrbRef} className={styles.secondaryOrb} />
    </div>
  );
}
