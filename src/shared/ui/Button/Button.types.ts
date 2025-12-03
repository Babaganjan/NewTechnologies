// src/shared/ui/Button/Button.types.ts
import type { LinkProps } from 'next/link';
import type { ComponentPropsWithRef, ReactNode } from 'react';

export type VariantType =
  | 'feedback'
  | 'link'
  | 'social'
  | 'policy'
  | 'upButton'
  | 'primary'
  | 'menu'
  | 'secondary'
  | 'one'
  | 'two'
  | 'description'
  | 'primaryLink';

type BaseProps = {
  icon?: boolean;
  rotate?: boolean;
  children?: ReactNode;
  iconSmall?: boolean;
  active?: boolean;
  scrambler?: boolean;
};

type ButtonVariant = Extract<
  VariantType,
  'feedback' | 'upButton' | 'primary' | 'secondary' | 'one' | 'description'
>;
type LinkVariant = Extract<
  VariantType,
  'link' | 'social' | 'policy' | 'menu' | 'two' | 'primaryLink'
>;

export type IButtonProps =
  | (BaseProps &
      ComponentPropsWithRef<'button'> & {
        variant?: ButtonVariant;
      })
  | (BaseProps &
      LinkProps &
      ComponentPropsWithRef<'a'> & {
        variant: LinkVariant;
      });
