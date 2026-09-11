'use client';

import dynamic from 'next/dynamic';
import type { LottieProps } from 'lottie-react';

// Dynamically import to avoid SSR issues with lottie-web
const Lottie = dynamic(
  () => import('lottie-react').then((m) => ({ default: m.Lottie })),
  { ssr: false }
);

export type LottieIconProps = LottieProps;

export function LottieIcon(props: LottieIconProps) {
  return <Lottie {...props} />;
}
