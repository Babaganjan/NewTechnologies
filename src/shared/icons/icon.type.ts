import type { SVGProps } from 'react';

export interface Icons extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height' | 'fill'> {
  width?: number | string;
  height?: number | string;
  color?: string;
  decorative?: boolean;
}
