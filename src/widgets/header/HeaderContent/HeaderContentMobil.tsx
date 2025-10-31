'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import { H } from '@/shared/ui';
import type { ModalVariant } from '@/widgets/header/navItemModal/nav-Item.types';
import { DATA_MODAL } from '@/widgets/header/navItemModal/nav-item.const';

import type { HeaderContentProps } from '../header.types';

import { isModalVariant } from './../helper/isModalVariant';
import { NavItemModalMobil } from './../navItemModal/NavItemModalMobil';

import '../_header.scss';

export const HeaderContentMobil = ({
  navItems,
  theme,
  onItemEnter,
  onItemLeave,
  onModalClose,
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
    <header className="modal-mobil" data-theme={theme}>
      <div className="modal-mobil__container container flex">
        <button className="modal-mobil__btn" onClick={onModalClose}>
          ✕
        </button>
        <nav className="modal-mobil__nav nav">
          <ul className="nav__list flex">
            {navItems.map((item) => {
              if (item.hasModal && isModalVariant(item.title)) {
                const modalTitle = item.title;
                const isSelected = selectedOption.includes(modalTitle);

                return (
                  <li className="nav__item" key={item.href}>
                    <button
                      className={clsx('nav__link', isSelected && 'nav__link--active')}
                      onClick={() => handleItemClick(item)}
                    >
                      {item.title}
                    </button>
                    {isSelected && (
                      <div className="nav__sub-menu">
                        <NavItemModalMobil data={DATA_MODAL[modalTitle] || []} />
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li className="nav__item" key={item.href}>
                  <button className={clsx('nav__link')} onClick={() => handleItemClick(item)}>
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="modal-mobil__contacts">
          <div className="wrapper-phone flex">
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
          <div className="wrapper-phone flex">
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
