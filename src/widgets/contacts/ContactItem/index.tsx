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
    <p className="contacts-title-text">{label}</p>
    {children}
  </li>
);
