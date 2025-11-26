import type { ReactNode } from 'react';
import { memo } from 'react';

export const ContactItem = memo<{
  className: string;
  label: string;
  children: ReactNode;
}>(({ className, label, children }) => (
  <li className={`contacts__item ${className}`}>
    <p className="contacts-title-text">{label}</p>
    {children}
  </li>
));

ContactItem.displayName = 'ContactItem';
