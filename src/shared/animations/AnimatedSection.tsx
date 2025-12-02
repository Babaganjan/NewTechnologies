import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { defaultViewport } from './scroll-animations';

interface AnimatedSectionProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  viewport?: typeof defaultViewport;
  delay?: number;
}

export const AnimatedSection = ({
  children,
  variants,
  className = '',
  viewport = defaultViewport,
  delay = 0,
}: AnimatedSectionProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
