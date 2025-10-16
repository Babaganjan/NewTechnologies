import clsx from 'clsx';
import type { ReactNode, HTMLAttributes } from 'react';

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

  // 1. Класс для уровня заголовка
  const levelClass = styles[`level${level}`];

  // 2. Класс для варианта цвета (добавляем эту строку!)
  const variantClass = styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`];

  return (
    <Tag className={clsx(styles.heading, levelClass, variantClass, className)} id={id} {...props}>
      {children}
    </Tag>
  );
}
