'use client';

/**
 * EDIRA — Editorial profile avatar with automatic bust framing,
 * solid #fefefe backdrop when photo loads,
 * and automatic fallback to EDIRA dark monogram initials when no photo exists.
 */

import { useEffect, useRef, useState } from 'react';
import styles from './ProfileAvatar.module.css';

interface ProfileAvatarProps {
  src?: string;
  name: string;
  initials: string;
}

type ImageStatus = 'loading' | 'loaded' | 'error';

export function ProfileAvatar({ src, name, initials }: ProfileAvatarProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<ImageStatus>(() => (src ? 'loading' : 'error'));

  useEffect(() => {
    if (!src) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus('error');
      return;
    }

    const img = imgRef.current;
    if (!img) {
      setStatus('loading');
      return;
    }

    if (img.complete) {
      setStatus(img.naturalWidth > 0 ? 'loaded' : 'error');
    } else {
      setStatus('loading');
    }
  }, [src]);

  const hasPhoto = Boolean(src) && status === 'loaded';

  return (
    <div className={styles.avatarRing} data-has-photo={hasPhoto ? 'true' : 'false'}>
      <div className={styles.avatar} data-has-photo={hasPhoto ? 'true' : 'false'}>
        <span className={styles.avatarInitials} aria-hidden="true">
          {initials}
        </span>
        {Boolean(src) && status !== 'error' && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={src}
            alt={name}
            width={400}
            height={400}
            decoding="async"
            fetchPriority="high"
            className={styles.avatarImg}
            data-loaded={hasPhoto ? 'true' : 'false'}
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('error')}
          />
        )}
      </div>
    </div>
  );
}
