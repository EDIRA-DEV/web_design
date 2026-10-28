/**
 * EDIRA — vCard 3.0 (.vcf) Generator & Downloader
 * Phase 1: Supports in-memory <canvas> JPEG resizing (max 300x300, 0.8 quality)
 * with graceful fallback if the avatar is an unavailable placeholder or fails to load.
 */

import type { CardProfile } from './cardsData';
import { EDIRA_CORPORATE_DATA } from './cardsData';

const DEFAULT_MAX_AVATAR_SIZE = 300;
const DEFAULT_JPEG_QUALITY = 0.8;
const IMAGE_LOAD_TIMEOUT_MS = 4000;

/**
 * Escapes special characters in vCard 3.0 text fields according to RFC 2426.
 */
function escapeVCardValue(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,');
}

/**
 * Extracts structured family name (lastName) and given name (firstName) for the vCard `N` property.
 */
function getStructuredName(profile: Pick<CardProfile, 'name'> & Partial<Pick<CardProfile, 'firstName' | 'lastName'>>): {
  firstName: string;
  lastName: string;
} {
  if (profile.firstName && profile.lastName) {
    return {
      firstName: profile.firstName.trim(),
      lastName: profile.lastName.trim(),
    };
  }

  const parts = profile.name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return { firstName: '', lastName: '' };
  }
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: '' };
  }

  const lastName = parts[parts.length - 1];
  const firstName = parts.slice(0, -1).join(' ');
  return { firstName, lastName };
}

/**
 * Attempts to load `avatarUrl` in the browser, resize it in memory on a `<canvas>`
 * to at most `maxSize x maxSize` (300x300px) as JPEG (`quality = 0.8`), and return
 * the raw Base64 payload without the `data:image/jpeg;base64,` prefix.
 *
 * Returns `null` if running on the server, if the image is a missing placeholder,
 * or if loading/encoding fails for any reason.
 */
export async function loadAvatarAsBase64(
  avatarUrl?: string,
  maxSize: number = DEFAULT_MAX_AVATAR_SIZE,
  quality: number = DEFAULT_JPEG_QUALITY
): Promise<string | null> {
  if (typeof window === 'undefined' || typeof document === 'undefined' || !avatarUrl) {
    return null;
  }

  return new Promise<string | null>((resolve) => {
    let settled = false;
    const finish = (result: string | null) => {
      if (!settled) {
        settled = true;
        resolve(result);
      }
    };

    const timeoutId = window.setTimeout(() => {
      finish(null);
    }, IMAGE_LOAD_TIMEOUT_MS);

    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';

      img.onload = () => {
        window.clearTimeout(timeoutId);
        try {
          const naturalWidth = img.naturalWidth || img.width;
          const naturalHeight = img.naturalHeight || img.height;

          if (!naturalWidth || !naturalHeight) {
            finish(null);
            return;
          }

          let targetWidth = naturalWidth;
          let targetHeight = naturalHeight;

          if (targetWidth > maxSize || targetHeight > maxSize) {
            if (targetWidth >= targetHeight) {
              targetHeight = Math.max(1, Math.round((targetHeight * maxSize) / targetWidth));
              targetWidth = maxSize;
            } else {
              targetWidth = Math.max(1, Math.round((targetWidth * maxSize) / targetHeight));
              targetHeight = maxSize;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = targetWidth;
          canvas.height = targetHeight;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            finish(null);
            return;
          }

          // Fill solid dark background before drawing in case of transparent source PNG/WebP
          ctx.fillStyle = '#0a0a0a';
          ctx.fillRect(0, 0, targetWidth, targetHeight);
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          const prefix = 'data:image/jpeg;base64,';
          if (!dataUrl || !dataUrl.startsWith(prefix)) {
            finish(null);
            return;
          }

          const base64 = dataUrl.slice(prefix.length).trim();
          finish(base64.length > 0 ? base64 : null);
        } catch {
          finish(null);
        }
      };

      img.onerror = () => {
        window.clearTimeout(timeoutId);
        finish(null);
      };

      img.src = avatarUrl;
    } catch {
      window.clearTimeout(timeoutId);
      finish(null);
    }
  });
}

/**
 * Builds a RFC 2426 compliant vCard 3.0 string compatible with iOS and Android.
 */
export function generateVCardString(
  profile: CardProfile,
  photoBase64?: string | null
): string {
  const { firstName, lastName } = getStructuredName(profile);
  const org = profile.company || EDIRA_CORPORATE_DATA.company;
  const website = profile.website || EDIRA_CORPORATE_DATA.website;

  const lines: string[] = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${escapeVCardValue(lastName)};${escapeVCardValue(firstName)};;;`,
    `FN:${escapeVCardValue(profile.name)}`,
    `ORG:${escapeVCardValue(org)}`,
    `TITLE:${escapeVCardValue(profile.role)}`,
    `TEL;TYPE=CELL,VOICE:${profile.phoneRaw}`,
    `EMAIL;TYPE=PREF,INTERNET:${profile.email}`,
    `URL:${website}`,
  ];

  if (photoBase64 && photoBase64.trim().length > 0) {
    lines.push(`PHOTO;ENCODING=b;TYPE=JPEG:${photoBase64.trim()}`);
  }

  lines.push('END:VCARD');

  return lines.join('\r\n') + '\r\n';
}

/**
 * Generates and downloads on-the-fly a `.vcf` (vCard 3.0) file for the given profile.
 * Never fails even if `profile.avatar` is a missing placeholder or fails to load.
 */
export async function downloadVCard(profile: CardProfile): Promise<string> {
  const photoBase64 = await loadAvatarAsBase64(
    profile.avatar,
    DEFAULT_MAX_AVATAR_SIZE,
    DEFAULT_JPEG_QUALITY
  );

  const vcfContent = generateVCardString(profile, photoBase64);

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const blob = new Blob([vcfContent], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${profile.slug || 'edira-contact'}.vcf`);
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1500);
  }

  return vcfContent;
}

