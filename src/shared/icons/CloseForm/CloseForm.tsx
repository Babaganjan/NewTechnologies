import type { Icons } from '../icon.type';
// #565656
export const CloseForm = ({
  color = 'currentColor',
  width = 20,
  height = 20,
  className,
}: Icons) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.000244141"
        y="36.1"
        width="51.0532"
        height="2.68701"
        transform="rotate(-45 0.000244141 36.1)"
        fill={color}
      />
      <rect
        x="1.90015"
        y="0.000574112"
        width="51.0532"
        height="2.68701"
        transform="rotate(45 1.90015 0.000574112)"
        fill={color}
      />
    </svg>
  );
};
