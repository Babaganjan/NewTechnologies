import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { defaultViewport, staggerContainer } from './scroll-animations';

interface AnimatedListProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  childrenDelay?: number;
  viewport?: typeof defaultViewport;
  as?: 'ul' | 'ol' | 'div';
}

export const AnimatedList = ({
  children,
  className = '',
  staggerDelay = 0.12,
  childrenDelay = 0.2,
  viewport = defaultViewport,
  as = 'ul',
}: AnimatedListProps) => {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer(staggerDelay, childrenDelay)}
    >
      {children}
    </Component>
  );
};
