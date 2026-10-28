'use client';

/**
 * EDIRA — "Exchange Contact" form (rendered inside the GlassDialog bottom sheet).
 * Sends prospect data to Formspree, then shows a clean English confirmation.
 */

import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  Building2,
  CircleCheck,
  LoaderCircle,
  Mail,
  Phone,
  User,
} from 'lucide-react';
import type { CardProfile } from '@/lib/cardsData';
import { useExchangeContact, type ExchangeContactFormData } from '@/lib/exchangeContact';
import styles from './ExchangeContactForm.module.css';

interface ExchangeContactFormProps {
  profile: CardProfile;
  titleId: string;
  descId: string;
  onDone: () => void;
}

const CLOSE_DELAY_MS = 2000;

export function ExchangeContactForm({ profile, titleId, descId, onDone }: ExchangeContactFormProps) {
  const { isSubmitting, error, submit } = useExchangeContact(profile, {
    autoDownloadVCard: false,
  });
  const [phase, setPhase] = useState<'form' | 'success'>('form');
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fd = new FormData(form);
    const data: ExchangeContactFormData = {
      name: String(fd.get('name') ?? ''),
      company: String(fd.get('company') ?? ''),
      phone: String(fd.get('phone') ?? ''),
      email: String(fd.get('email') ?? ''),
    };

    const result = await submit(data);
    if (!result.ok) return;

    setPhase('success');
    closeTimer.current = window.setTimeout(onDone, CLOSE_DELAY_MS);
  };

  if (phase === 'success') {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <span className={styles.successIcon} aria-hidden="true">
          <CircleCheck size={34} strokeWidth={1.75} />
        </span>
        <h2 id={titleId} className={styles.successTitle}>
          Thank You!
        </h2>
        <p id={descId} className={styles.successText}>
          Your contact details have been shared with <strong>{profile.name}</strong>.
        </p>
        <span className={styles.progress} aria-hidden="true">
          <span className={styles.progressBar} />
        </span>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h2 id={titleId} className={styles.title}>
          Exchange Contact with {profile.name}
        </h2>
        <p id={descId} className={styles.subtitle}>
          Share your contact details directly with {profile.firstName} and the EDIRA team.
        </p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {/* Hidden context fields for Formspree lead attribution */}
        <input
          type="hidden"
          name="_subject"
          value={`Nuevo contacto desde Tarjeta Digital de ${profile.name}`}
        />
        <input
          type="hidden"
          name="card_owner"
          value={`${profile.name} (${profile.role})`}
        />
        <input
          type="hidden"
          name="source_url"
          value={
            typeof window !== 'undefined'
              ? window.location.href
              : `${profile.website}/card/${profile.slug}`
          }
        />
        <div className={styles.field}>
          <label htmlFor="xc-name" className={styles.label}>
            Full Name <span className={styles.req} aria-hidden="true">*</span>
          </label>
          <div className={styles.inputWrap}>
            <User className={styles.inputIcon} size={18} aria-hidden="true" />
            <input
              id="xc-name"
              name="name"
              type="text"
              required
              data-autofocus
              autoComplete="name"
              placeholder="Your full name"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="xc-company" className={styles.label}>
            Company / Organization
          </label>
          <div className={styles.inputWrap}>
            <Building2 className={styles.inputIcon} size={18} aria-hidden="true" />
            <input
              id="xc-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Where do you work?"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="xc-phone" className={styles.label}>
            WhatsApp / Phone <span className={styles.req} aria-hidden="true">*</span>
          </label>
          <div className={styles.inputWrap}>
            <Phone className={styles.inputIcon} size={18} aria-hidden="true" />
            <input
              id="xc-phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder="+52 442 000 0000"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="xc-email" className={styles.label}>
            Email Address <span className={styles.req} aria-hidden="true">*</span>
          </label>
          <div className={styles.inputWrap}>
            <Mail className={styles.inputIcon} size={18} aria-hidden="true" />
            <input
              id="xc-email"
              name="email"
              type="email"
              required
              inputMode="email"
              autoComplete="email"
              autoCapitalize="off"
              spellCheck={false}
              placeholder="you@company.com"
              className={styles.input}
            />
          </div>
        </div>

        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}

        <button type="submit" className={styles.submit} disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? (
            <>
              <LoaderCircle className={styles.spinner} size={18} aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              Send Contact
              <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
            </>
          )}
        </button>

        <p className={styles.legal}>
          By submitting, you agree to our{' '}
          <a href="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          . Your details will be sent directly to {profile.firstName} and the EDIRA team.
        </p>
      </form>
    </div>
  );
}
