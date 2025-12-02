import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { cardVariants } from './scroll-animations';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  enableHover?: boolean;
  hoverScale?: number;
  as?: 'li' | 'div' | 'article';
}

export const AnimatedCard = ({
  children,
  className = '',
  enableHover = true,
  hoverScale = 1.02,
  as = 'li',
}: AnimatedCardProps) => {
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={cardVariants}
      whileHover={
        enableHover
          ? {
              scale: hoverScale,
              transition: { duration: 0.3 },
            }
          : undefined
      }
    >
      {children}
    </Component>
  );
};
