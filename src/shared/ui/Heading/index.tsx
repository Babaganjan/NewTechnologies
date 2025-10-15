// import type { ReactNode } from 'react';

// import styles from './heading.module.scss';

// type HeadingLevel = 1 | 2 | 3 | 4 | 5;

// type HeadingColor = 'light' | 'dark';

// type HeadingProps = {
//   level: HeadingLevel;
//   children: ReactNode;
//   variant: HeadingColor;
//   className?: string;
//   id?: string;
// };

// const levelToTag: Record<HeadingLevel, keyof React.JSX.IntrinsicElements> = {
//   1: 'h1',
//   2: 'h2',
//   3: 'h3',
//   4: 'h4',
//   5: 'h5',
// };

// export function Heading({ level, children, variant='dark', className, id }: HeadingProps) {
//   // 1. Выбираем какой HTML-тег использовать
//   const Tag = levelToTag[level];

//   // 2. Выбираем CSS-класс для этого уровня
//   const levelClass = styles[`level${level}`];

//   // 3. Рендерим результат
//   return (
//     <Tag className={`${styles.heading} ${levelClass} ${className || ''}`} id={id}>
//       {children}
//     </Tag>
//   );
// }

// export default Heading;
import type { ReactNode } from 'react';

import styles from './heading.module.scss';

type HeadingLevel = 1 | 2 | 3 | 4 | 5;
type HeadingColor = 'light' | 'dark';

type HeadingProps = {
  level: HeadingLevel;
  children: ReactNode;
  variant?: HeadingColor;
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

export function Heading({
  level,
  children,
  variant = 'dark', // значение по умолчанию
  className,
  id,
}: HeadingProps) {
  const Tag = levelToTag[level];

  // 1. Класс для уровня заголовка
  const levelClass = styles[`level${level}`];

  // 2. Класс для варианта цвета (добавляем эту строку!)
  const variantClass = styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`];

  return (
    <Tag className={`${styles.heading} ${levelClass} ${variantClass} ${className || ''}`} id={id}>
      {children}
    </Tag>
  );
}
