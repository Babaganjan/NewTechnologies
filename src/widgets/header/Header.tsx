// Header.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import './_header.scss';

import { Modal } from '@/shared/ui';
import { ServiceModal } from '@/shared/ui/Modal/serviceModal/ServiceModal';
import type { HeaderProps } from '@/shared/ui/types/Header.types';

import { ArrowSmall } from './../../shared/icons/ArrowSmall/ArrowSmall';
import { HEADER_NAV_ITEMS } from './header.const';

export const Header = ({ theme = 'dark' }: HeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTimeout, setModalTimeout] = useState<NodeJS.Timeout | null>(null);

  const filteredNavItems = HEADER_NAV_ITEMS.filter((item) => item.title !== 'Производство');

  const handleMouseEnter = () => {
    // Отменяем предыдущий таймер закрытия если есть
    if (modalTimeout) {
      clearTimeout(modalTimeout);
      setModalTimeout(null);
    }
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    // Добавляем небольшую задержку перед закрытием
    const timeout = setTimeout(() => {
      setIsModalOpen(false);
    }, 200); // 200ms задержка чтобы пользователь успел переместить курсор на модалку

    setModalTimeout(timeout);
  };

  const handleModalMouseEnter = () => {
    // Отменяем закрытие если курсор на модалке
    if (modalTimeout) {
      clearTimeout(modalTimeout);
      setModalTimeout(null);
    }
  };

  const handleModalMouseLeave = () => {
    setIsModalOpen(false);
  };

  const currentTheme = isModalOpen ? 'light' : theme;

  return (
    <>
      <header className="header" data-theme={currentTheme}>
        <div className="container header__container flex">
          <div className="header__wrapper flex">
            <nav className="header__nav nav hidden">
              <ul className="nav__list flex">
                {isModalOpen
                  ? filteredNavItems.map((item) => (
                      <li className="nav__item" key={item.href}>
                        <Link href={item.href} className="nav__link flex">
                          {item.title}
                          {item.hasIcon && <ArrowSmall />}
                        </Link>
                      </li>
                    ))
                  : HEADER_NAV_ITEMS.map((item) => (
                      <li
                        className="nav__item"
                        key={item.href}
                        onMouseEnter={item.title === 'Сервис' ? handleMouseEnter : undefined}
                        onMouseLeave={item.title === 'Сервис' ? handleMouseLeave : undefined}
                      >
                        <Link href={item.href} className="nav__link flex" key={item.href}>
                          {item.title}
                          {item.hasIcon && <ArrowSmall />}
                        </Link>
                      </li>
                    ))}
              </ul>
            </nav>
            <Link href="/" className="header__link">
              <Image
                src={currentTheme === 'dark' ? '/img/logo.svg' : '/img/logoDark.svg'}
                width={145}
                height={79}
                alt="Логотип"
                className="header__logo"
                priority
              />
            </Link>
          </div>
          <div className="header__wrapper-contacts hidden__contacts flex">
            <div className="custom-select">
              <select name="city" className="header__city">
                <option value="almaty">Алматы</option>
                <option value="karaganda">Караганда</option>
                <option value="shymkent">Шымкент</option>
              </select>
            </div>
            <Link className="header__phone" href="tel:+74951234567">
              +7 (700) 346 43 71
            </Link>
          </div>
          <div className="header__burger flex hidden__burger--deckstop">
            <button className="header__btn"></button>
          </div>
        </div>
      </header>
      {isModalOpen && (
        <Modal>
          <ServiceModal
            onModal={handleMouseEnter}
            onMouseEnter={handleModalMouseEnter}
            onMouseLeave={handleModalMouseLeave}
          />
        </Modal>
      )}
    </>
  );
};
