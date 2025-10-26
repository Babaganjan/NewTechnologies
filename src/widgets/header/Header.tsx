// Header.tsx
'use client';
import { useState } from 'react';

import { Modal } from '@/shared/ui';
import {
  DATA_SERVICE_MODAL,
  DATA_PRODUCTION_MODAL,
} from '@/shared/ui/Modal/navItemModal/nav-item.const';
import type { HeaderProps } from '@/shared/ui/types/Header.types';

import { NavItemModal } from './../../shared/ui/Modal/navItemModal/NavItemModal';
import { HeaderContent } from './HeaderContent';
import { HEADER_NAV_ITEMS } from './header.const';

export const Header = ({ theme = 'dark' }: HeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTimeout, setModalTimeout] = useState<NodeJS.Timeout | null>(null);
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);

  // Функция для динамического выбора данных модала
  const getModalData = (activeNavItem: string | null) => {
    if (activeNavItem === 'Сервис') return DATA_SERVICE_MODAL;
    if (activeNavItem === 'Производство') return DATA_PRODUCTION_MODAL;

    return [];
  };

  const handleNavItemEnter = (title: string) => {
    setActiveNavItem(title);
    if (modalTimeout) {
      clearTimeout(modalTimeout);
      setModalTimeout(null);
    }
    setIsModalOpen(true);
  };

  const handleNavItemLeave = () => {
    setActiveNavItem(null);
    const timeout = setTimeout(() => {
      setIsModalOpen(false);
    }, 200);

    setModalTimeout(timeout);
  };

  const handleModalMouseEnter = () => {
    if (modalTimeout) {
      clearTimeout(modalTimeout);
      setModalTimeout(null);
    }
  };

  const handleModalMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsModalOpen(false);
      setActiveNavItem(null);
    }, 200);

    setModalTimeout(timeout);
  };

  const filteredNavItems = HEADER_NAV_ITEMS.filter((item) => {
    if (activeNavItem === 'Сервис') return item.title !== 'Производство';
    if (activeNavItem === 'Производство') return item.title !== 'Сервис';

    return true;
  });

  const currentTheme = isModalOpen ? 'light' : theme;
  const logoSrc = currentTheme === 'dark' ? '/img/logo.svg' : '/img/logoDark.svg';

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveNavItem(null);
  };

  return (
    <>
      {!isModalOpen && (
        <HeaderContent
          navItems={HEADER_NAV_ITEMS}
          theme={currentTheme}
          logoSrc={logoSrc}
          onItemEnter={handleNavItemEnter}
          onItemLeave={handleNavItemLeave}
          onCloseModal={closeModal}
          activeNavItem={activeNavItem}
        />
      )}
      {isModalOpen && (
        <Modal onMouseEnter={handleModalMouseEnter} onMouseLeave={handleModalMouseLeave}>
          <HeaderContent
            navItems={filteredNavItems}
            theme={currentTheme}
            logoSrc={logoSrc}
            onCloseModal={closeModal}
            activeNavItem={activeNavItem}
          />
          <NavItemModal data={getModalData(activeNavItem)} />
        </Modal>
      )}
    </>
  );
};
