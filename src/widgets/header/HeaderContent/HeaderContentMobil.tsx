import clsx from 'clsx';

import '../_header.scss';

import { Button } from '@/shared/ui';

import type { HeaderContentProps } from '../header.types';

export const HeaderContentMobil = ({
  navItems,
  theme,
  onItemLeave,
  onMobilModal,
  activeNavItem,
}: HeaderContentProps) => {
  return (
    <header className="header-mobil" data-theme={theme}>
      <button className="header-mobil__btn" onClick={onItemLeave}>
        ✕
      </button>
      <nav className="header__nav nav">
        <ul className="nav__list flex">
          {navItems.map((item) => {
            const isHovered = activeNavItem === item.title;

            return (
              <li className="nav__item" key={item.href}>
                <Button
                  href={item.href}
                  variant="menu"
                  className={clsx('nav__link', isHovered && 'hovered')}
                  onClick={onMobilModal}
                >
                  {item.title}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
