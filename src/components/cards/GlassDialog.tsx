'use client';

/**
 * EDIRA — Native <dialog> wrapper with glass styling.
 * - Opened with showModal() → top layer, inert page, focus containment, Esc / back gesture.
 * - Light dismiss via closedby="any" (+ fallback for Safari).
 * - Entry animation via @starting-style; animated exit with a data-closing fallback
 *   for browsers lacking `overlay` / discrete display transitions.
 * - variant="sheet": bottom sheet on mobile, centered modal on desktop.
 */

import { useCallback, useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';
import styles from './GlassDialog.module.css';

let supportsDisplayTransition: boolean | undefined;
function canTransitionDisplay(): boolean {
  if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
  if (!window.CSS?.supports?.('transition-behavior', 'allow-discrete') || !document.body) {
    supportsDisplayTransition = false;
    return false;
  }
  const probe = document.createElement('div');
  probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';
  document.body.appendChild(probe);
  void getComputedStyle(probe).display; // force style flush
  probe.style.display = 'none';
  supportsDisplayTransition = getComputedStyle(probe).display === 'block';
  probe.remove();
  return supportsDisplayTransition;
}

function supportsTopLayerExit(): boolean {
  return Boolean(window.CSS?.supports?.('overlay', 'auto')) && canTransitionDisplay();
}

async function closeWithAnimation(dialog: HTMLDialogElement) {
  if (!dialog.open) return;
  if (!supportsTopLayerExit()) {
    dialog.setAttribute('data-closing', '');
    const animations = dialog.getAnimations({ subtree: true });
    if (animations.length > 0) {
      await Promise.race([
        Promise.allSettled(animations.map((a) => a.finished)),
        new Promise((r) => setTimeout(r, 600)),
      ]);
    }
    if (!dialog.hasAttribute('data-closing')) return;
    dialog.removeAttribute('data-closing');
  }
  dialog.close();
}

export interface GlassDialogProps {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  describedBy?: string;
  variant?: 'sheet' | 'center';
  children: ReactNode;
  closeLabel?: string;
}

export function GlassDialog({
  open,
  onClose,
  labelledBy,
  describedBy,
  variant = 'sheet',
  children,
  closeLabel = 'Cerrar',
}: GlassDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Sync React state → native dialog
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.removeAttribute('data-closing');
      dialog.showModal();
      // Move focus to the primary field (React's autoFocus fires before the dialog is open)
      dialog.querySelector<HTMLElement>('[data-autofocus]')?.focus({ preventScroll: true });
    } else if (!open && dialog.open) {
      void closeWithAnimation(dialog);
    }
  }, [open]);

  // Native events → React state
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    const handleClose = () => onCloseRef.current();
    // Route Esc / back gesture / closedby light-dismiss through the animated close
    const handleCancel = (e: Event) => {
      e.preventDefault();
      void closeWithAnimation(dialog);
    };

    // Light-dismiss fallback where closedby is unsupported (Safari)
    const needsFallback = !('closedBy' in HTMLDialogElement.prototype);
    let pressedOutside = false;
    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    const onPointerDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) void closeWithAnimation(dialog);
      pressedOutside = false;
    };

    dialog.addEventListener('close', handleClose);
    dialog.addEventListener('cancel', handleCancel);
    if (needsFallback) {
      dialog.addEventListener('pointerdown', onPointerDown);
      dialog.addEventListener('pointerup', onPointerUp);
    }
    return () => {
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('cancel', handleCancel);
      dialog.removeEventListener('pointerdown', onPointerDown);
      dialog.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  const requestClose = useCallback(() => {
    if (ref.current) void closeWithAnimation(ref.current);
  }, []);

  return (
    <dialog
      ref={ref}
      className={`${styles.dialog} ${variant === 'sheet' ? styles.sheet : styles.center}`}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      {...({ closedby: 'any' } as Record<string, string>)}
    >
      {variant === 'sheet' && <span className={styles.grabber} aria-hidden="true" />}
      <button
        type="button"
        className={styles.closeBtn}
        onClick={requestClose}
        aria-label={closeLabel}
      >
        <X size={18} strokeWidth={2} aria-hidden="true" />
      </button>
      <div className={styles.body}>{children}</div>
    </dialog>
  );
}
