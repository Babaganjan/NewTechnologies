import type { Icons } from '../icon.type';

export const ArrowBreadcrumbs = ({ width = 6, height = 7, ...props }: Icons) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 3.46387L-3.26266e-07 -0.000234342L-2.34249e-08 6.92797L6 3.46387Z"
        fill="#D0D0D0"
      />
    </svg>
  );
};
