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

export type BaseProps = {
  icon?: boolean;
  rotate?: boolean;
  children?: ReactNode;
  iconSmall?: boolean;
  active?: boolean;
  scrambler?: boolean;
};

export type ButtonVariant = Extract<
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
