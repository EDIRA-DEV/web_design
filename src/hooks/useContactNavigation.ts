'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useContactModal } from '@/providers/ContactModalContext';
import { useCallback } from 'react';

export function useContactNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { openModal } = useContactModal();

  const handleContactClick = useCallback((e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    if (pathname === '/') {
      // Smooth scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback if section ID isn't found
        router.push('/#contact');
      }
    } else {
      // Open modal on other pages
      openModal();
    }
  }, [pathname, router, openModal]);

  return { handleContactClick };
}
