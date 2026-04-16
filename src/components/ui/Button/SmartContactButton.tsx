'use client';

import { useContactNavigation } from '@/hooks/useContactNavigation';
import { Button } from '@/components/ui/Button/Button';
import { ReactNode } from 'react';

// Pass through all standard Button props, but override onClick with our smart routing
export interface SmartContactButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string; // in case we need to append classes
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Optional override 
}

export function SmartContactButton({ children, variant = 'primary', size = 'md', className, onClick }: SmartContactButtonProps) {
  const { handleContactClick } = useContactNavigation();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e); // Allow custom click behavior if passed
    } else {
      handleContactClick(); // Default global routing logic
    }
  };

  return (
    <Button variant={variant} size={size} className={className} onClick={handleClick}>
      {children}
    </Button>
  );
}
