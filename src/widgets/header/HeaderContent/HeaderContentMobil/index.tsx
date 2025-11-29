'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import { H } from '@/shared/ui';
import type { ModalVariant } from '@/widgets/header/navItemModal/nav-Item.types';
import { DATA_MODAL } from '@/widgets/header/navItemModal/nav-item.const';

import type { HeaderContentProps } from '../../header.types';
import { isModalVariant } from '../../helper/isModalVariant';
import { NavItemModalMobil } from '../../navItemModal/NavItemModalMobil';

import '../../_header.scss';

export const HeaderContentMobil = ({
  navItems,
  theme,
  onItemEnter,
  onItemLeave,
  onModalClose,
  transparentBg = false,
}: HeaderContentProps) => {
  const [selectedOption, setSelectedOption] = useState<ModalVariant[]>([]);

  const handleItemClick = (item: HeaderContentProps['navItems'][0]) => {
    if (item.hasModal && isModalVariant(item.title)) {
      const modalTitle = item.title;

      if (selectedOption.includes(modalTitle)) {
        setSelectedOption((prev) => prev.filter((title) => title !== modalTitle));
        onItemLeave?.();
      } else {
        setSelectedOption((prev) => [...prev, modalTitle]);
        onItemEnter?.(item.title);
      }
    } else {
      onModalClose?.();
    }
  };

  return (
    <header
      className={clsx('modal-mobil', transparentBg && 'modal-mobil--transparent')}
      data-theme={theme}
    >
      <div className="modal-mobil__container container">
        <button className="modal-mobil__btn" onClick={onModalClose} aria-label="Закрыть меню">
          ✕
        </button>
        <nav className="modal-mobil__nav nav" aria-label="Мобильная навигация">
          <ul className="nav__list">
            {navItems.map((item) => {
              if (item.hasModal && isModalVariant(item.title)) {
                const modalTitle = item.title;
                const isSelected = selectedOption.includes(modalTitle);

                return (
                  <li className="nav__item" key={item.href}>
                    <button
                      className={clsx('nav__link', isSelected && 'nav__link--active')}
                      onClick={() => handleItemClick(item)}
                      aria-expanded={isSelected}
                      aria-controls={`submenu-${item.title}`}
                    >
                      {item.title}
                    </button>
                    {isSelected && (
                      <div
                        className="nav__sub-menu"
                        id={`submenu-${item.title}`}
                        role="region"
                        aria-label={`Подменю ${item.title}`}
                      >
                        <NavItemModalMobil data={DATA_MODAL[modalTitle] || []} />
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li className="nav__item" key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx('nav__link')}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="modal-mobil__contacts">
          <div className="wrapper-phone">
            <H level={'5'} className="modal-mobil__city">
              Алматы
            </H>
            <Link className="modal-mobil__phone" href="tel:+77003464371">
              +7 (700) 346 43 71
            </Link>
          </div>
          <div className="wrapper-phone">
            <H level={'5'} className="modal-mobil__city">
              Астана
            </H>
            <Link className="modal-mobil__phone" href="tel:+77008369436">
              +7 (700) 836 94 36
            </Link>
          </div>
          <div className="wrapper-phone">
            <H level={'5'} className="modal-mobil__city">
              Тараз
            </H>
            <Link className="modal-mobil__phone" href="tel:+77471803218">
              +7 (747) 180 32 18
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
