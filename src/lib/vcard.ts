/**
 * EDIRA — vCard 3.0 (.vcf) Generator & Downloader
 * Supports 400x400 <canvas> JPEG rendering with:
 * - Solid #fefefe backdrop + automatic bust crop (matching ProfileAvatar CSS) when portrait PNG loads
 * - Automatic dark EDIRA purple gradient + white initials monogram fallback when a card has no photo
 */

import type { CardProfile } from './cardsData';
import { EDIRA_CORPORATE_DATA, getProfileInitials } from './cardsData';

const DEFAULT_AVATAR_CANVAS_SIZE = 400;
const DEFAULT_JPEG_QUALITY = 0.85;
const IMAGE_LOAD_TIMEOUT_MS = 4500;

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
function getStructuredName(
  profile: Pick<CardProfile, 'name'> & Partial<Pick<CardProfile, 'firstName' | 'lastName'>>
): {
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
 * Extracts raw Base64 payload from a canvas JPEG data URL.
 */
function extractJpegBase64(canvas: HTMLCanvasElement, quality: number): string | null {
  const dataUrl = canvas.toDataURL('image/jpeg', quality);
  const prefix = 'data:image/jpeg;base64,';
  if (!dataUrl || !dataUrl.startsWith(prefix)) {
    return null;
  }
  const base64 = dataUrl.slice(prefix.length).trim();
  return base64.length > 0 ? base64 : null;
}

/**
 * Renders the fallback EDIRA dark purple gradient + white initials monogram onto a 400x400 <canvas>
 * when a card does not have a portrait photo or when loading the image fails.
 */
export function renderInitialsFallbackBase64(
  initials: string,
  size: number = DEFAULT_AVATAR_CANVAS_SIZE,
  quality: number = DEFAULT_JPEG_QUALITY
): string | null {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null;
  }

  try {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // 1. Base linear gradient (#171226 -> #0b0914)
    const baseGrad = ctx.createLinearGradient(0, 0, size, size);
    baseGrad.addColorStop(0, '#171226');
    baseGrad.addColorStop(1, '#0b0914');
    ctx.fillStyle = baseGrad;
    ctx.fillRect(0, 0, size, size);

    // 2. Radial purple glow at (30%, 20%)
    const glowGrad = ctx.createRadialGradient(
      size * 0.3,
      size * 0.2,
      0,
      size * 0.3,
      size * 0.2,
      size * 0.75
    );
    glowGrad.addColorStop(0, 'rgba(168, 85, 247, 0.36)');
    glowGrad.addColorStop(0.6, 'rgba(124, 58, 237, 0.12)');
    glowGrad.addColorStop(1, 'rgba(11, 9, 20, 0)');
    ctx.fillStyle = glowGrad;
    ctx.fillRect(0, 0, size, size);

    // 3. White monogram initials
    const fontSize = Math.round(size * 0.36);
    ctx.fillStyle = '#ffffff';
    ctx.font = `600 ${fontSize}px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText((initials || 'ED').slice(0, 3).toUpperCase(), size / 2, size / 2 + size * 0.015);

    return extractJpegBase64(canvas, quality);
  } catch {
    return null;
  }
}

/**
 * Loads `avatarUrl` in the browser and renders a 400x400px JPEG on a `<canvas>`:
 * - First fills the entire 400x400 canvas with solid `#fefefe` (preventing transparent PNG pixels from turning black).
 * - Applies the exact bust crop (`object-fit: cover`, `object-position: 50% 14%`, `scale(1.38)` at `origin 50% 22%`)
 *   so iOS/Android contacts show a close-up head-and-shoulders portrait on `#fefefe`.
 * - If `avatarUrl` is undefined or fails to load, falls back to the dark EDIRA gradient + white initials when `fallbackInitials` is provided.
 */
export async function loadAvatarAsBase64(
  avatarUrl?: string,
  size: number = DEFAULT_AVATAR_CANVAS_SIZE,
  quality: number = DEFAULT_JPEG_QUALITY,
  fallbackInitials?: string
): Promise<string | null> {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null;
  }

  const fallback = () =>
    fallbackInitials ? renderInitialsFallbackBase64(fallbackInitials, size, quality) : null;

  if (!avatarUrl) {
    return fallback();
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
      finish(fallback());
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
            finish(fallback());
            return;
          }

          const canvas = document.createElement('canvas');
          canvas.width = size;
          canvas.height = size;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            finish(fallback());
            return;
          }

          // 1. Solid #fefefe background across the entire 400x400 canvas
          ctx.fillStyle = '#fefefe';
          ctx.fillRect(0, 0, size, size);

          // 2. Bust crop matching ProfileAvatar CSS:
          //    object-fit: cover; object-position: 50% 14%;
          //    transform: scale(1.38); transform-origin: 50% 22%;
          ctx.save();
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';

          const originX = size * 0.5;
          const originY = size * 0.22;
          const zoom = 1.38;

          ctx.translate(originX, originY);
          ctx.scale(zoom, zoom);
          ctx.translate(-originX, -originY);

          const coverScale = Math.max(size / naturalWidth, size / naturalHeight);
          const drawnWidth = naturalWidth * coverScale;
          const drawnHeight = naturalHeight * coverScale;
          const offsetX = (size - drawnWidth) * 0.5;
          const offsetY = (size - drawnHeight) * 0.14;

          ctx.drawImage(img, offsetX, offsetY, drawnWidth, drawnHeight);
          ctx.restore();

          const base64 = extractJpegBase64(canvas, quality);
          finish(base64 ?? fallback());
        } catch {
          finish(fallback());
        }
      };

      img.onerror = () => {
        window.clearTimeout(timeoutId);
        finish(fallback());
      };

      img.src = avatarUrl;
    } catch {
      window.clearTimeout(timeoutId);
      finish(fallback());
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
 * Renders the 400x400 bust portrait on `#fefefe` when `profile.avatar` loads,
 * or falls back to the dark EDIRA purple monogram with the executive's initials.
 */
export async function downloadVCard(profile: CardProfile): Promise<string> {
  const initials = getProfileInitials(profile);
  const photoBase64 = await loadAvatarAsBase64(
    profile.avatar,
    DEFAULT_AVATAR_CANVAS_SIZE,
    DEFAULT_JPEG_QUALITY,
    initials
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
