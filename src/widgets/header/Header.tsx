'use client';
import { useState } from 'react';

import { Modal } from '@/shared/ui';
import type { ModalVariant } from '@/widgets/header/navItemModal/nav-Item.types';
import { DATA_MODAL } from '@/widgets/header/navItemModal/nav-item.const';

import { HeaderContent } from './HeaderContent/HeaderContent';
import { HeaderContentMobil } from './HeaderContent/HeaderContentMobil';
import { EXCLUDE_MAP, HEADER_NAV_ITEMS } from './header.const';
import type { HeaderProps } from './header.types';
import { NavItemModal } from './navItemModal/NavItemModal';

export const Header = ({ theme = 'dark' }: HeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobilModalOpen, setIsMobilModalOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<ModalVariant | null>(null);

  const handleNavItemEnter = (title: ModalVariant) => {
    setActiveNavItem(title);
    setIsModalOpen(true);
  };

  const handleOnMobilModal = () => {
    setIsMobilModalOpen(true);
  };

  const handleNavItemLeave = () => {
    setIsModalOpen(false);
    setIsMobilModalOpen(false);
    setActiveNavItem(null);
  };

  const handleMobilNavItemEnter = (title: ModalVariant) => {
    setActiveNavItem(title);
  };

  const handleMobilNavItemLeave = () => {
    setActiveNavItem(null);
  };

  const currentTheme = isModalOpen || isMobilModalOpen ? 'light' : theme;
  const logoSrc = currentTheme === 'dark' ? '/img/logo.svg' : '/img/logoDark.svg';
  const modalData = activeNavItem ? DATA_MODAL[activeNavItem] : null;

  const filteredNavItems = () => {
    if (!activeNavItem) return HEADER_NAV_ITEMS;

    return HEADER_NAV_ITEMS.filter((item) => item.title !== EXCLUDE_MAP[activeNavItem]);
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
          activeNavItem={activeNavItem}
          onMobilModal={handleOnMobilModal}
        />
      )}
      {isModalOpen && (
        <Modal onMouseLeave={handleNavItemLeave}>
          <HeaderContent
            navItems={filteredNavItems()}
            theme={currentTheme}
            logoSrc={logoSrc}
            activeNavItem={activeNavItem}
          />
          <NavItemModal data={modalData || []} />
        </Modal>
      )}
      {isMobilModalOpen && (
        <Modal>
          <HeaderContentMobil
            navItems={HEADER_NAV_ITEMS}
            theme={currentTheme}
            activeNavItem={activeNavItem}
            onItemEnter={handleMobilNavItemEnter}
            onItemLeave={handleMobilNavItemLeave}
            onModalClose={handleNavItemLeave}
          />
        </Modal>
      )}
    </>
  );
};
