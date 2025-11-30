import type { ReactNode } from 'react';

export const ContactItem = ({
  className,
  label,
  children,
}: {
  className: string;
  label: string;
  children: ReactNode;
}) => (
  <li className={`contacts__item ${className}`}>
    <span className="contacts-title-text">{label}</span>
    {children}
  </li>
);
