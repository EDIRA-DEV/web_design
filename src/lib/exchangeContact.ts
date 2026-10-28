'use client';

/**
 * EDIRA — Exchange Contact Handler & Hook (Formspree Integration)
 * Phase 1: Sends prospect data + card owner context to Formspree (`mgorobll`)
 * and automatically triggers reciprocal `.vcf` download upon success.
 */

import { useCallback, useState } from 'react';
import type { CardProfile } from './cardsData';
import { EDIRA_CORPORATE_DATA } from './cardsData';
import { downloadVCard } from './vcard';

export const FORMSPREE_ENDPOINT = EDIRA_CORPORATE_DATA.formspreeEndpoint;

export interface ExchangeContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
}

export interface ExchangeContactPayload extends ExchangeContactFormData {
  _subject: string;
  card_owner: string;
  source_url: string;
}

export interface ExchangeContactState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export interface SubmitExchangeContactOptions {
  /** Optional callback to synchronize state changes (`isSubmitting`, `isSuccess`, `error`) */
  onStateChange?: (state: ExchangeContactState) => void;
  /** Whether to automatically download the card owner's `.vcf` on success (defaults to `true`) */
  autoDownloadVCard?: boolean;
}

export interface ExchangeContactResult extends ExchangeContactState {
  ok: boolean;
  payload: ExchangeContactPayload;
}

/**
 * Builds the Formspree payload including prospect fields and digital card context.
 */
export function buildExchangeContactPayload(
  formData: ExchangeContactFormData,
  profile: CardProfile
): ExchangeContactPayload {
  return {
    name: (formData.name || '').trim(),
    company: (formData.company || '').trim(),
    phone: (formData.phone || '').trim(),
    email: (formData.email || '').trim(),
    _subject: 'Nuevo contacto desde Tarjeta Digital de ' + profile.name,
    card_owner: profile.name + ' (' + profile.role + ')',
    source_url:
      typeof window !== 'undefined'
        ? window.location.href
        : `${EDIRA_CORPORATE_DATA.website}/card/${profile.slug}`,
  };
}

/**
 * Submits prospect contact details (`name`, `company`, `phone`, `email`) via `fetch` (`POST`)
 * to EDIRA's production Formspree endpoint (`https://formspree.io/f/mgorobll`).
 *
 * Upon successful submission, automatically triggers `downloadVCard(profile)`
 * so the contact exchange is reciprocal.
 */
export async function submitExchangeContact(
  formData: ExchangeContactFormData,
  profile: CardProfile,
  options?: SubmitExchangeContactOptions
): Promise<ExchangeContactResult> {
  const { onStateChange, autoDownloadVCard = true } = options || {};
  const payload = buildExchangeContactPayload(formData, profile);

  if (!payload.name || !payload.email) {
    const validationError = 'Please enter at least your full name and email address.';
    const errorState: ExchangeContactState = {
      isSubmitting: false,
      isSuccess: false,
      error: validationError,
    };
    onStateChange?.(errorState);
    return {
      ok: false,
      ...errorState,
      payload,
    };
  }

  onStateChange?.({
    isSubmitting: true,
    isSuccess: false,
    error: null,
  });

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let errorDetail = 'Could not send your contact details. Please try again.';
      try {
        const data = await response.json();
        if (data?.errors && Array.isArray(data.errors) && data.errors.length > 0) {
          errorDetail = data.errors.map((err: { message?: string }) => err.message).join(', ');
        }
      } catch {
        // Ignore JSON parse errors on error responses
      }
      throw new Error(errorDetail);
    }

    if (autoDownloadVCard) {
      await downloadVCard(profile);
    }

    const successState: ExchangeContactState = {
      isSubmitting: false,
      isSuccess: true,
      error: null,
    };
    onStateChange?.(successState);

    return {
      ok: true,
      ...successState,
      payload,
    };
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : 'An unexpected error occurred while sending your contact details.';

    const failedState: ExchangeContactState = {
      isSubmitting: false,
      isSuccess: false,
      error: errorMessage,
    };
    onStateChange?.(failedState);

    return {
      ok: false,
      ...failedState,
      payload,
    };
  }
}

/**
 * React hook wrapping `submitExchangeContact` with reactive `isSubmitting`, `isSuccess`, and `error` states.
 */
export function useExchangeContact(
  profile: CardProfile,
  options?: Pick<SubmitExchangeContactOptions, 'autoDownloadVCard'>
) {
  const autoDownloadVCard = options?.autoDownloadVCard ?? true;
  const [state, setState] = useState<ExchangeContactState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const submit = useCallback(
    async (formData: ExchangeContactFormData) => {
      return submitExchangeContact(formData, profile, {
        onStateChange: setState,
        autoDownloadVCard,
      });
    },
    [profile, autoDownloadVCard]
  );

  const reset = useCallback(() => {
    setState({
      isSubmitting: false,
      isSuccess: false,
      error: null,
    });
  }, []);

  return {
    isSubmitting: state.isSubmitting,
    isSuccess: state.isSuccess,
    error: state.error,
    submit,
    reset,
  };
}

