'use client';

import { useContactModal } from '@/providers/ContactModalContext';
import { useCallback } from 'react';

export function useContactNavigation() {
  const { openModal } = useContactModal();

  const handleContactClick = useCallback((e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    openModal();
  }, [openModal]);

  return { handleContactClick };
}
