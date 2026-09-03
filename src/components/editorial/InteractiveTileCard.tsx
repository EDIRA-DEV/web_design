'use client';

import React, { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

import { useLang } from '@/lib/i18n';

export interface InteractiveTileCardProps {
  title: string;
  categoryTag?: string;
  leadingSignal: string;
  decisionEnabled: string;
  icon?: React.ReactNode | LucideIcon;
}

export const InteractiveTileCard: React.FC<InteractiveTileCardProps> = ({
  title,
  categoryTag,
  leadingSignal,
  decisionEnabled,
  icon,
}) => {
  const { lang } = useLang();
  const isEs = lang === 'es';
  const cardRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Detect if device is mobile / touch or smaller screen (< 1024px)
    const isMobileDevice =
      window.matchMedia('(max-width: 1023px)').matches ||
      window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    if (!isMobileDevice) return;

    // IntersectionObserver targeting the central 50% of the viewport (-25% top, -25% bottom)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Activate animation for 1.8s then smoothly attenuate
            setIsActive(true);
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
              setIsActive(false);
            }, 1800);
          } else {
            // Reset when leaving the central zone so it can re-trigger on next scroll pass
            setIsActive(false);
            if (timerRef.current) clearTimeout(timerRef.current);
          }
        });
      },
      {
        rootMargin: '-25% 0px -25% 0px',
        threshold: 0.15,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const renderIcon = () => {
    if (!icon) return null;
    if (React.isValidElement(icon)) return icon;
    const IconComp = icon as LucideIcon;
    return <IconComp size={18} strokeWidth={1.75} />;
  };

  return (
    <div
      ref={cardRef}
      className={`edira-tile-card ${isActive ? 'is-active' : ''}`}
      role="listitem"
      aria-label={`Decision domain: ${title}`}
    >
      {/* Conic Glow Shine Effect */}
      <div className="shine-layer" aria-hidden="true">
        <div className="shine-orb" />
      </div>

      {/* Background Animated Tiles & Grid Lines */}
      <div className="background-mesh" aria-hidden="true">
        <div className="tiles">
          <div className="grid-tile tile-1" />
          <div className="grid-tile tile-2" />
          <div className="grid-tile tile-3" />
          <div className="grid-tile tile-4" />
          <div className="grid-tile tile-5" />
          <div className="grid-tile tile-6" />
          <div className="grid-tile tile-7" />
          <div className="grid-tile tile-8" />
          <div className="grid-tile tile-9" />
          <div className="grid-tile tile-10" />
        </div>
        <div className="grid-line line-1" />
        <div className="grid-line line-2" />
        <div className="grid-line line-3" />
      </div>

      {/* Card Content */}
      <div className="card-content">
        <div>
          <div className="card-header">
            <div className="card-icon-bubble" aria-hidden="true">
              {renderIcon()}
            </div>
            {categoryTag && (
              <span className="card-category-tag">
                {categoryTag}
              </span>
            )}
          </div>

          <h4 className="card-title">{title}</h4>

          <div className="card-signals">
            <div className="signal-block">
              <span className="signal-label">
                {isEs ? 'Señal predictiva' : 'Leading Signal'}
              </span>
              <p className="signal-text">{leadingSignal}</p>
            </div>
            <div className="decision-block">
              <span className="decision-label">
                {isEs ? 'Decisión habilitada' : 'Decision Enabled'}
              </span>
              <p className="decision-text">{decisionEnabled}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
