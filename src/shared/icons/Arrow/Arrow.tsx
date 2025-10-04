import type { Icons } from '../icon.type';

export const Arrow = ({
  color = 'currentColor',
  width = 20,
  height = 25,
  decorative,
  ...svgProps
}: Icons) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 25"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      aria-hidden={decorative || undefined}
      role={decorative ? undefined : 'img'}
      {...svgProps}
    >
      <rect x="5" width="5" height="5" />
      <rect x="10" y="5" width="5" height="5" />
      <rect x="15" y="10" width="5" height="5" />
      <rect y="10" width="5" height="5" />
      <rect x="10" y="15" width="5" height="5" />
      <rect x="5" y="20" width="5" height="5" />
    </svg>
  );
};
