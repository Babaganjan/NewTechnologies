import type { ReactNode } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5;

type HeadingProps = {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
  id?: string;
};

const levelToTag: Record<HeadingLevel, keyof React.JSX.IntrinsicElements> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
};

export function Heading({ level, children, className, id }: HeadingProps) {
  const Tag = levelToTag[level];

  return (
    <Tag className={className} id={id}>
      {children}
    </Tag>
  );
}

export default Heading;
