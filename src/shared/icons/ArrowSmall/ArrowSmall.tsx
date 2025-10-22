import type { Icons } from '../icon.type';

export const ArrowSmall = ({ width = 6, height = 8, ...props }: Icons) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 6 8"
      fill="none"
      {...props}
    >
      <rect y="4" width="2" height="2" fill="#919191" />
      <rect x="2" y="6" width="2" height="2" fill="#919191" />
      <rect x="2" width="2" height="2" fill="#919191" />
      <rect x="4" y="4" width="2" height="2" fill="#919191" />
    </svg>
  );
};
