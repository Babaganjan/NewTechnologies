// src/widgets/header/Header.tsx
'use client';
import useModal from '@/hooks/useModal';
import { Modal } from '@/shared/ui';
import { DATA_MODAL } from '@/widgets/header/navItemModal/nav-item.const';

import { HeaderContent } from './HeaderContent';
import { HeaderContentMobil } from './HeaderContent/HeaderContentMobil';
import { EXCLUDE_MAP, HEADER_NAV_ITEMS } from './header.const';
import type { ThemeType } from './header.types';
import { useHeaderThemeObserver } from './helper/useThemeObserver';
import { NavItemModal } from './navItemModal';

export const Header = ({ theme: initialTheme = 'dark' }: ThemeType) => {
  // 1. Подключаем наблюдатель
  const observedTheme = useHeaderThemeObserver(initialTheme);

  const {
    isModalOpen,
    isMobilModalOpen,
    activeNavItem,
    handleNavItemEnter,
    handleOnMobilModal,
    handleCloseAllModals,
    handleMobilNavItemEnter,
    handleMobilNavItemLeave,
  } = useModal({ initialValue: false });

  // 2. Логика приоритетов:
  // Если открыта модалка -> всегда 'light' (как у тебя было)
  // Если нет -> берем тему, которую определил Observer (в зависимости от скролла)
  const computedTheme = isModalOpen || isMobilModalOpen ? 'light' : observedTheme;

  const logoSrc = computedTheme === 'dark' ? '/img/logo.svg' : '/img/logoDark.svg';
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
          theme={computedTheme} // <-- Передаем вычисленную тему
          logoSrc={logoSrc}
          onItemEnter={handleNavItemEnter}
          onItemLeave={handleCloseAllModals}
          activeNavItem={activeNavItem}
          onMobilModal={handleOnMobilModal}
          isModalOpen={false}
        />
      )}
      {/* Остальной код без изменений... */}
      {isModalOpen && (
        <Modal onMouseLeave={handleCloseAllModals}>
          <HeaderContent
            navItems={filteredNavItems()}
            theme={computedTheme} // <-- И здесь тоже
            logoSrc={logoSrc}
            activeNavItem={activeNavItem}
            onModalClose={handleCloseAllModals}
            isModalOpen={true}
          />
          <NavItemModal data={modalData || []} />
        </Modal>
      )}
      {isMobilModalOpen && (
        <Modal>
          <HeaderContentMobil
            navItems={HEADER_NAV_ITEMS}
            theme={computedTheme} // <-- И здесь
            activeNavItem={activeNavItem}
            onItemEnter={handleMobilNavItemEnter}
            onItemLeave={handleMobilNavItemLeave}
            onModalClose={handleCloseAllModals}
          />
        </Modal>
      )}
    </>
  );
};
