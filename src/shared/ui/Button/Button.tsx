import clsx from 'clsx';
import type { ElementType } from 'react';
import { forwardRef } from 'react';

import { Arrow, ArrowSmall } from '@/shared/icons';

import styles from './Button.module.scss';
import type { IButtonProps, VariantType } from './Button.types';
import { tagNameByVariants } from './helpers';

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, IButtonProps>(
  (
    {
      variant = 'primary',
      type = 'button',
      children,
      rotate,
      className,
      iconSmall,
      icon,
      active,
      ...props
    },
    ref
  ) => {
    const Component = tagNameByVariants[variant] as ElementType;

    const classNameMap: Record<VariantType, string> = {
      primary: styles.primary,
      secondary: styles.secondary,
      feedback: styles.feedback,
      link: styles.link,
      social: styles.social,
      policy: styles.policy,
      upButton: styles.upButton,
      menu: styles.menu,
      one: styles.one,
      two: styles.two,
      description: styles.description,
    };

    return (
      <Component
        type={Component === 'button' ? type : undefined}
        ref={ref}
        className={clsx(classNameMap[variant], className, active && styles.active)}
        {...props}
      >
        {children}
        {icon && <Arrow className={clsx(rotate && styles.rotate)} />}
        {iconSmall && <ArrowSmall />}
      </Component>
    );
  }
);

Button.displayName = 'Button';
