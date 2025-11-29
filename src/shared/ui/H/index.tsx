import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

import styles from './heading.module.scss';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5';
export type HeadingTag = `h${HeadingLevel}`;
type HeadingColor = 'light' | 'dark';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  children: ReactNode;
  variant?: HeadingColor;
}

export function H({
  level = '2',
  children,
  variant = 'dark',
  className,
  id,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as HeadingTag;

  const levelClass = styles[`level${level}`];

  const variantClass = styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`];

  return (
    <Tag className={clsx(styles.heading, levelClass, variantClass, className)} id={id} {...props}>
      {children}
    </Tag>
  );
}
