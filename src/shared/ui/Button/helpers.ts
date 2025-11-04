import Link from 'next/link';

import type { VariantType } from './Button.types';

export const tagNameByVariants: Record<VariantType, 'button' | typeof Link> = {
  primary: 'button',
  feedback: 'button',
  social: Link,
  policy: Link,
  link: Link,
  upButton: 'button',
  menu: Link,
  secondary: 'button',
  one: 'button',
  two: Link,
  description: 'button',
};
