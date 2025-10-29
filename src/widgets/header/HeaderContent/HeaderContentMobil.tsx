import clsx from 'clsx';

import '../_header.scss';

import { DATA_MODAL } from '@/widgets/header/navItemModal/nav-item.const';

import type { HeaderContentProps } from '../header.types';

import { isModalVariant } from './../helper/isModalVariant';
import { NavItemModalMobil } from './../navItemModal/NavItemModalMobil';

export const HeaderContentMobil = ({
  navItems,
  theme,
  onItemEnter,
  onItemLeave,
  onModalClose,
  activeNavItem,
}: HeaderContentProps) => {
  return (
    <header className="header-mobil" data-theme={theme}>
      <div className="header-mobil__container container">
        <button className="header-mobil__btn" onClick={onModalClose}>
          ✕
        </button>
        <nav className="header-mobil__nav nav">
          <ul className="nav__list flex">
            {navItems.map((item) => {
              const isActive = activeNavItem === item.title;

              return (
                <li className="nav__item" key={item.href}>
                  <button
                    className={clsx('nav__link', isActive && 'hovered')}
                    onClick={() => {
                      if (item.hasModal && isModalVariant(item.title)) {
                        if (isActive) {
                          onItemLeave?.();
                        } else {
                          onItemEnter?.(item.title);
                        }
                      } else {
                        onModalClose?.();
                      }
                    }}
                  >
                    {item.title}
                  </button>
                  {isActive && (
                    <div className="nav__sub-menu">
                      <NavItemModalMobil
                        data={DATA_MODAL[item.title as keyof typeof DATA_MODAL] || []}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
