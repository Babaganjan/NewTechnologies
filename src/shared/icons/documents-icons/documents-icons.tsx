import type { Icons } from '../icon.type';

export const DocumentsIcons = ({
  width = 15,
  height = 15,
  decorative,
  color = 'currentColor',
  ...svgProps
}: Icons) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill={color}
      aria-hidden={decorative || undefined}
      role={decorative ? undefined : 'img'}
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <g clipPath="url(#clip0_4021_5495)">
        <rect
          x="4.78809"
          y="4.78589"
          width="5.42857"
          height="5.42857"
          stroke="#565656"
          strokeWidth="2"
        />
        <path d="M10.2891 1H14.0033V4.71429" stroke="#565656" strokeWidth="2" />
        <path d="M10.2891 14H14.0033V10.2857" stroke="#565656" strokeWidth="2" />
        <path d="M4.71777 1H1.00349V4.71429" stroke="#565656" strokeWidth="2" />
        <path d="M4.71777 14H1.00349V10.2857" stroke="#565656" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_4021_5495">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
