'use client';

import React, { useCallback, useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LottieIcon } from './LottieIcon';
import revistaAnimation from '../../../public/icons/revista.json';
import styles from './ResearchSubscribeCTA.module.css';

/* ─────────────────────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────────────────────── */
type FormState = 'idle' | 'loading' | 'success' | 'error';

interface ResearchSubscribeCTAProps {
  /** Formspree form ID. Falls back to env var or bundled default. */
  formspreeId?: string;
}

/* ─────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
export function ResearchSubscribeCTA({
  formspreeId,
}: ResearchSubscribeCTAProps) {
  const { isEs } = useLanguage();
  const emailId = useId();

  const endpoint = `https://formspree.io/f/${
    formspreeId ??
    process.env.NEXT_PUBLIC_FORMSPREE_RESEARCH_ID ??
    'xrgnekoy'
  }`;

  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!email.trim()) return;

      setFormState('loading');
      setErrorMsg('');

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (res.ok) {
          setFormState('success');
        } else {
          const data = await res.json().catch(() => ({}));
          const msg =
            (data as { error?: string }).error ??
            (isEs
              ? 'Algo salió mal. Por favor intenta de nuevo.'
              : 'Something went wrong. Please try again.');
          setErrorMsg(msg);
          setFormState('error');
        }
      } catch {
        setErrorMsg(
          isEs
            ? 'Error de conexión. Por favor intenta de nuevo.'
            : 'Connection error. Please try again.'
        );
        setFormState('error');
      }
    },
    [email, endpoint, isEs]
  );

  return (
    <section
      className={styles.wrapper}
      aria-label={isEs ? 'Suscripción al boletín de investigación' : 'Research newsletter subscription'}
    >
      {/* ── Glassmorphic card ── */}
      <div className={styles.card}>
        {/* Ambient glow orb */}
        <div className={styles.glowOrb} aria-hidden="true" />

        <AnimatePresence mode="wait" initial={false}>
          {formState === 'success' ? (
            /* ══ SUCCESS STATE ══ */
            <motion.div
              key="success"
              className={styles.successState}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className={styles.successIcon} aria-hidden="true">
                <CheckCircle2 size={32} strokeWidth={1.75} />
              </div>
              <h3 className={styles.successTitle}>
                {isEs ? '¡Te has suscrito!' : "You're subscribed!"}
              </h3>
              <p className={styles.successBody}>
                {isEs
                  ? 'Gracias por unirte al boletín de EDIRA Research. Recibirás nuestros próximos papers y análisis directamente en tu bandeja de entrada.'
                  : 'Thanks for joining the EDIRA Research newsletter. Our next papers and analyses will land directly in your inbox.'}
              </p>
            </motion.div>
          ) : (
            /* ══ FORM STATE ══ */
            <motion.div
              key="form"
              className={styles.formState}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Neon Lottie icon */}
              <div className={styles.iconWrap} aria-hidden="true" suppressHydrationWarning>
                <LottieIcon
                  src={revistaAnimation}
                  loop
                  autoplay
                  className={styles.iconLottie}
                />
              </div>

              {/* Heading */}
              <h2 className={styles.heading}>
                {isEs
                  ? 'Recibe los próximos papers antes de su publicación'
                  : 'Get the next papers before they publish'}
              </h2>

              {/* Sub-copy */}
              <p className={styles.subCopy}>
                {isEs
                  ? 'Análisis técnicos, marcos operativos y benchmarks estratégicos — directamente en tu bandeja de entrada.'
                  : 'Technical analyses, operational frameworks, and strategic benchmarks — delivered directly to your inbox.'}
              </p>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className={styles.form}
                noValidate
                aria-label={isEs ? 'Formulario de suscripción' : 'Subscription form'}
              >
                <div className={styles.inputRow}>
                  <label htmlFor={emailId} className={styles.srOnly}>
                    {isEs ? 'Dirección de correo electrónico' : 'Email address'}
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={formState === 'loading'}
                    placeholder={
                      isEs ? 'tu@empresa.com' : 'you@company.com'
                    }
                    className={styles.emailInput}
                    aria-describedby={formState === 'error' ? 'subscribe-error' : undefined}
                  />
                  <button
                    type="submit"
                    disabled={formState === 'loading' || !email.trim()}
                    className={styles.submitBtn}
                    aria-label={
                      formState === 'loading'
                        ? isEs ? 'Enviando…' : 'Sending…'
                        : isEs ? 'Suscribirme' : 'Subscribe'
                    }
                  >
                    {formState === 'loading' ? (
                      <Loader2
                        size={18}
                        strokeWidth={2}
                        className={styles.spinner}
                        aria-hidden="true"
                      />
                    ) : (
                      <>
                        <span>{isEs ? 'Suscribirme' : 'Subscribe'}</span>
                        <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>

                {/* Inline error */}
                <AnimatePresence>
                  {formState === 'error' && errorMsg && (
                    <motion.p
                      id="subscribe-error"
                      role="alert"
                      className={styles.errorMsg}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {errorMsg}
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>

              {/* Fine print */}
              <p className={styles.finePrint}>
                {isEs
                  ? 'Sin spam. Cancela cuando quieras. Lee nuestra '
                  : 'No spam. Unsubscribe at any time. Read our '}
                <a href="/privacy-notice" className={styles.finePrintLink} target="_blank" rel="noopener noreferrer">
                  {isEs ? 'política de privacidad' : 'privacy policy'}
                </a>
                .
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
