// // src/widgets/header/Header.tsx
// 'use client';
// import { useMotionValueEvent, useScroll } from 'framer-motion';
// import { useState } from 'react';

// import useModal from '@/hooks/useModal';
// import { Modal } from '@/shared/ui';
// import { DATA_MODAL } from '@/widgets/header/navItemModal/nav-item.const';

// import { HeaderContent } from './HeaderContent';
// import { HeaderContentMobil } from './HeaderContent/HeaderContentMobil';
// import { EXCLUDE_MAP, HEADER_NAV_ITEMS } from './header.const';
// import { NavItemModal } from './navItemModal';

// export const Header = () => {
//   const [isTopInView, setIsTopInView] = useState(true);

//   // Используем useScroll для отслеживания скролла
//   const { scrollY } = useScroll();

//   // Отслеживаем изменения скролла
//   useMotionValueEvent(scrollY, 'change', (latest) => {
//     // Если скролл меньше 100px - считаем что вверху (прозрачный фон)
//     // Если больше 100px - черный фон
//     setIsTopInView(latest < 100);
//   });

//   const {
//     isModalOpen,
//     isMobilModalOpen,
//     activeNavItem,
//     handleNavItemEnter,
//     handleOnMobilModal,
//     handleCloseAllModals,
//     handleMobilNavItemEnter,
//     handleMobilNavItemLeave,
//   } = useModal({ initialValue: false });

//   const computedTheme = isModalOpen || isMobilModalOpen ? 'light' : 'dark';

//   // Прозрачный фон только когда хедер в начальной позиции и нет модалок
//   const shouldHaveTransparentBg = isTopInView && !isModalOpen && !isMobilModalOpen;

//   const logoSrc = computedTheme === 'dark' ? '/img/logo.svg' : '/img/logoDark.svg';
//   const modalData = activeNavItem ? DATA_MODAL[activeNavItem] : null;

//   const filteredNavItems = () => {
//     if (!activeNavItem) return HEADER_NAV_ITEMS;

//     return HEADER_NAV_ITEMS.filter((item) => item.title !== EXCLUDE_MAP[activeNavItem]);
//   };

//   return (
//     <>
//       {!isModalOpen && (
//         <HeaderContent
//           navItems={HEADER_NAV_ITEMS}
//           theme={computedTheme}
//           logoSrc={logoSrc}
//           onItemEnter={handleNavItemEnter}
//           onItemLeave={handleCloseAllModals}
//           activeNavItem={activeNavItem}
//           onMobilModal={handleOnMobilModal}
//           isModalOpen={false}
//           transparentBg={shouldHaveTransparentBg}
//         />
//       )}

//       {isModalOpen && (
//         <Modal onMouseLeave={handleCloseAllModals}>
//           <HeaderContent
//             navItems={filteredNavItems()}
//             theme={computedTheme}
//             logoSrc={logoSrc}
//             activeNavItem={activeNavItem}
//             onModalClose={handleCloseAllModals}
//             isModalOpen={true}
//             transparentBg={false}
//           />
//           <NavItemModal data={modalData || []} />
//         </Modal>
//       )}
//       {isMobilModalOpen && (
//         <Modal>
//           <HeaderContentMobil
//             navItems={HEADER_NAV_ITEMS}
//             theme={computedTheme}
//             activeNavItem={activeNavItem}
//             onItemEnter={handleMobilNavItemEnter}
//             onItemLeave={handleMobilNavItemLeave}
//             onModalClose={handleCloseAllModals}
//             transparentBg={false}
//           />
//         </Modal>
//       )}
//     </>
//   );
// };

// src/widgets/header/Header.tsx (альтернатива с useScroll)
'use client';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

import useModal from '@/hooks/useModal';
import { Modal } from '@/shared/ui';
import { DATA_MODAL } from '@/widgets/header/navItemModal/nav-item.const';

import { HeaderContent } from './HeaderContent';
import { HeaderContentMobil } from './HeaderContent/HeaderContentMobil';
import { EXCLUDE_MAP, HEADER_NAV_ITEMS } from './header.const';
import { NavItemModal } from './navItemModal';

export const Header = () => {
  const [isTopInView, setIsTopInView] = useState(true);

  // Используем useScroll из framer-motion - работает на всех страницах
  const { scrollY } = useScroll();

  console.log(scrollY);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Если скролл меньше 50px - считаем что вверху
    setIsTopInView(latest < 50);
  });

  // Дополнительная проверка при загрузке
  useEffect(() => {
    setIsTopInView(window.scrollY < 50);
  }, []);

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

  const computedTheme = isModalOpen || isMobilModalOpen ? 'light' : 'dark';
  const shouldHaveTransparentBg = isTopInView && !isModalOpen && !isMobilModalOpen;
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
          theme={computedTheme}
          logoSrc={logoSrc}
          onItemEnter={handleNavItemEnter}
          onItemLeave={handleCloseAllModals}
          activeNavItem={activeNavItem}
          onMobilModal={handleOnMobilModal}
          isModalOpen={false}
          transparentBg={shouldHaveTransparentBg}
        />
      )}

      {isModalOpen && (
        <Modal onMouseLeave={handleCloseAllModals}>
          <HeaderContent
            navItems={filteredNavItems()}
            theme={computedTheme}
            logoSrc={logoSrc}
            activeNavItem={activeNavItem}
            onModalClose={handleCloseAllModals}
            isModalOpen={true}
            transparentBg={false}
          />
          <NavItemModal data={modalData || []} />
        </Modal>
      )}

      {isMobilModalOpen && (
        <Modal>
          <HeaderContentMobil
            navItems={HEADER_NAV_ITEMS}
            theme={computedTheme}
            activeNavItem={activeNavItem}
            onItemEnter={handleMobilNavItemEnter}
            onItemLeave={handleMobilNavItemLeave}
            onModalClose={handleCloseAllModals}
            transparentBg={false}
          />
        </Modal>
      )}
    </>
  );
};
