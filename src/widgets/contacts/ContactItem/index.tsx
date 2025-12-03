'use client';
import type { ReactNode } from 'react';

import { AnimatedCard } from '@/shared/animations/AnimatedCard';

export const ContactItem = ({
  className,
  label,
  children,
}: {
  className: string;
  label: string;
  children: ReactNode;
}) => (
  <AnimatedCard className={`contacts__item ${className}`} enableHover={false}>
    <span className="contacts-title-text">{label}</span>
    {children}
  </AnimatedCard>
);
