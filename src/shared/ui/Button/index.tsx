// src/shared/ui/Button/index.tsx
import clsx from 'clsx';
import type { ElementType, MouseEvent } from 'react';
import { forwardRef } from 'react';

import { useScrambleText } from '@/hooks/useScrambleText';
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
      scrambler = false,
      ...props
    },
    ref
  ) => {
    const Component = tagNameByVariants[variant] as ElementType;

    const textContent = typeof children === 'string' ? children : '';
    const { displayText, trigger } = useScrambleText(textContent);

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
      primaryLink: styles.primary,
    };

    const handleMouseEnter = (e: MouseEvent) => {
      if (scrambler && textContent) {
        trigger();
      }

      if ('onMouseEnter' in props && props.onMouseEnter) {
        props.onMouseEnter(e as any);
      }
    };

    return (
      <Component
        type={Component === 'button' ? type : undefined}
        ref={ref}
        className={clsx(classNameMap[variant], className, active && styles.active)}
        {...props}
        onMouseEnter={handleMouseEnter}
      >
        {scrambler && textContent ? displayText : children}
        {icon && <Arrow className={clsx(rotate && styles.rotate)} />}
        {iconSmall && <ArrowSmall />}
      </Component>
    );
  }
);

Button.displayName = 'Button';
