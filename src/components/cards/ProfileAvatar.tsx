'use client';

/**
 * EDIRA — Editorial profile avatar with initials placeholder.
 * The <img> is always rendered: as soon as the real file exists at `profile.avatar`
 * it fades in over the gradient/initials placeholder. If it 404s, the placeholder stays.
 */

import { useEffect, useRef, useState } from 'react';
import styles from './DigitalCard.module.css';

interface ProfileAvatarProps {
  src: string;
  name: string;
  initials: string;
}

type ImageStatus = 'loading' | 'loaded' | 'error';

export function ProfileAvatar({ src, name, initials }: ProfileAvatarProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<ImageStatus>('loading');

  // The image may settle before hydration (onLoad/onError would be missed) → check once mounted.
  useEffect(() => {
    const img = imgRef.current;
    if (!img || !img.complete) return;
    const next: ImageStatus = img.naturalWidth > 0 ? 'loaded' : 'error';
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus(next);
  }, []);

  return (
    <div className={styles.avatarRing}>
      <div className={styles.avatar}>
        <span className={styles.avatarInitials} aria-hidden="true">
          {initials}
        </span>
        {status !== 'error' && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={src}
            alt={name}
            width={256}
            height={256}
            decoding="async"
            fetchPriority="high"
            className={styles.avatarImg}
            data-loaded={status === 'loaded'}
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('error')}
          />
        )}
      </div>
    </div>
  );
}
