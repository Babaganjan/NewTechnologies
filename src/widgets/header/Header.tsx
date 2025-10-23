// Header.tsx
'use client';
import { useState } from 'react';

import { Modal } from '@/shared/ui';
import { ServiceModal } from '@/shared/ui/Modal/serviceModal/ServiceModal';
import type { HeaderProps } from '@/shared/ui/types/Header.types';

import { HeaderContent } from './HeaderContent';
import { HEADER_NAV_ITEMS } from './header.const';

export const Header = ({ theme = 'dark' }: HeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTimeout, setModalTimeout] = useState<NodeJS.Timeout | null>(null);

  const filteredNavItems = HEADER_NAV_ITEMS.filter((item) => item.title !== 'Производство');

  const handleMouseEnter = () => {
    if (modalTimeout) {
      clearTimeout(modalTimeout);
      setModalTimeout(null);
    }
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
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
    }, 200);

    setModalTimeout(timeout);
  };

  const currentTheme = isModalOpen ? 'light' : theme;
  const logoSrc = currentTheme === 'dark' ? '/img/logo.svg' : '/img/logoDark.svg';

  return (
    <>
      {!isModalOpen && (
        <HeaderContent
          navItems={HEADER_NAV_ITEMS}
          theme={currentTheme}
          logoSrc={logoSrc}
          onServiceEnter={handleMouseEnter}
          onServiceLeave={handleMouseLeave}
        />
      )}
      {isModalOpen && (
        <Modal onMouseEnter={handleModalMouseEnter} onMouseLeave={handleModalMouseLeave}>
          <HeaderContent navItems={filteredNavItems} theme={currentTheme} logoSrc={logoSrc} />
          <ServiceModal />
        </Modal>
      )}
    </>
  );
};
