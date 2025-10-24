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
  | 'two';

type BaseProps = {
  icon?: boolean;
  rotate?: boolean;
  children?: ReactNode;
  iconSmall?: boolean;
  active?: boolean;
};

type ButtonVariant = Extract<
  VariantType,
  'feedback' | 'upButton' | 'primary' | 'secondary' | 'one'
>;
type LinkVariant = Extract<VariantType, 'link' | 'social' | 'policy' | 'menu' | 'two'>;

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
