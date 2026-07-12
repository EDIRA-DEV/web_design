'use client';

import { useEffect } from 'react';

/**
 * AnalyticsTracker
 *
 * Runs once per page load (client-side) and dispatches the `PageView` event
 * using the Meta Pixel + Conversions API (CAPI) hybrid approach with strict
 * Event ID deduplication. The same `pageViewId` is sent to both channels so
 * Meta de-duplicates on their end and never counts the same event twice.
 */
export function AnalyticsTracker() {
  useEffect(() => {
    // Guard: only execute when fbq is available (Pixel script has loaded)
    if (typeof window === 'undefined') return;

    // ── 1. Generate a unique Event ID ────────────────────────────────────────
    // Combines a high-resolution timestamp with a random hex string to ensure
    // uniqueness even if multiple tabs are open simultaneously.
    const pageViewId = `pv_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2, 10)}`;

    // ── 2. Browser-side Pixel event (with deduplication Event ID) ───────────
    // @ts-expect-error – fbq is injected globally by the Meta Pixel snippet
    if (typeof window.fbq === 'function') {
      // @ts-expect-error
      window.fbq('track', 'PageView', {}, { eventID: pageViewId });
    }

    // ── 3. Server-side CAPI event (fire-and-forget) ──────────────────────────
    // We pass the same pageViewId so Meta can de-duplicate the browser event
    // above against this server event. The token is never exposed to the client
    // because the actual Graph API call is made inside /api/capi/route.ts.
    const sendCapiEvent = async () => {
      try {
        await fetch('/api/capi', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            eventName: 'PageView',
            eventId: pageViewId,
            eventSourceUrl: window.location.href,
            userData: {
              // navigator.userAgent is safe to read client-side
              userAgent: navigator.userAgent,
              // IP resolution happens server-side in the CAPI route handler
              ip: '',
            },
          }),
        });
      } catch (err) {
        // Non-critical: analytics must never break the user experience
        console.warn('[CAPI] PageView event failed to send:', err);
      }
    };

    sendCapiEvent();
    // Empty dependency array: run once per component mount (= once per page)
  }, []);

  // This component renders nothing — it is a pure side-effect component
  return null;
}
