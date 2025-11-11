// // components/Header/HeaderContent.tsx
// 'use client';
// import clsx from 'clsx';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';

// import { useHeaderAnimation } from '@/hooks/useHeaderAnimation';
// import { Button } from '@/shared/ui';

// import type { HeaderContentProps } from '../header.types';
// import { isModalVariant } from '../helper/isModalVariant';

// import { CustomSelect } from './../../../shared/ui/CustomSelect/CustomSelect';

// import '../_header.scss';

// export const HeaderContent = ({
//   navItems,
//   theme,
//   logoSrc,
//   onItemEnter,
//   onItemLeave,
//   onMobilModal,
//   activeNavItem,
//   onModalClose,
// }: HeaderContentProps) => {
//   const { isVisible, isScrolled } = useHeaderAnimation();

//   return (
//     <motion.header
//       className={clsx('header', isScrolled && 'header-scrolled')}
//       data-theme={theme}
//       initial={{ y: 0 }}
//       animate={{
//         y: isVisible ? 0 : -100,
//       }}
//       transition={{
//         type: 'spring',
//         damping: 20,
//         stiffness: 300,
//       }}
//     >
//       <div className="container header__container flex">
//         <div className="header__wrapper flex">
//           <nav className="header__nav nav hidden">
//             <ul className="nav__list flex">
//               {navItems.map((item) => {
//                 const isHovered = activeNavItem?.includes(item.title) ?? false;

//                 return (
//                   <motion.li
//                     className="nav__item"
//                     key={item.href}
//                     onMouseEnter={
//                       item.hasModal && onItemEnter
//                         ? () => isModalVariant(item.title) && onItemEnter(item.title)
//                         : undefined
//                     }
//                     onMouseLeave={item.hasModal && onItemLeave ? onItemLeave : undefined}
//                   >
//                     <Button
//                       href={item.href}
//                       variant="menu"
//                       className={clsx('nav__link', isHovered && 'hovered')}
//                       iconSmall={item.hasIcon}
//                       onClick={onModalClose}
//                     >
//                       {item.title}
//                     </Button>
//                   </motion.li>
//                 );
//               })}
//             </ul>
//           </nav>

//           <motion.div whileHover={{ scale: 1.05 }}>
//             <Link href="/" className="header__link" onClick={onModalClose}>
//               <Image
//                 src={logoSrc as string}
//                 width={144}
//                 height={78}
//                 alt="Логотип"
//                 className="header__logo"
//                 priority
//               />
//             </Link>
//           </motion.div>
//         </div>

//         <div className="header__wrapper-contacts hidden__contacts flex">
//           <CustomSelect
//             options={[
//               { value: 'almaty', label: 'Алматы' },
//               { value: 'karaganda', label: 'Караганда' },
//               { value: 'shymkent', label: 'Шымкент' },
//             ]}
//             value="almaty"
//             onChange={(value) => console.log('Выбран город:', value)}
//             className="header__city-select"
//           />

//           <motion.div whileHover={{ scale: 1.05 }}>
//             <Link className="header__phone" href="tel:+74951234567">
//               +7 (700) 346 43 71
//             </Link>
//           </motion.div>
//         </div>

//         <div className="header__burger flex hidden__burger--deckstop">
//           <motion.button
//             className="header__btn"
//             onClick={onMobilModal}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           ></motion.button>
//         </div>
//       </div>
//     </motion.header>
//   );
// };

// components/Header/HeaderContent.tsx
'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { useScrollContext } from '@/context/ScrollProvider';
import { Button } from '@/shared/ui';

import type { HeaderContentProps } from '../header.types';
import { isModalVariant } from '../helper/isModalVariant';

import { CustomSelect } from './../../../shared/ui/CustomSelect/CustomSelect';

import '../_header.scss';

export const HeaderContent = ({
  navItems,
  theme,
  logoSrc,
  onItemEnter,
  onItemLeave,
  onMobilModal,
  activeNavItem,
  onModalClose,
}: HeaderContentProps) => {
  const { isHeaderVisible, isHeaderScrolled } = useScrollContext();

  return (
    <motion.header
      className={clsx('header', isHeaderScrolled && 'header-scrolled')}
      data-theme={theme}
      initial={{ y: 0 }}
      animate={{
        y: isHeaderVisible ? 0 : -100,
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 300,
      }}
    >
      <div className="container header__container flex">
        <div className="header__wrapper flex">
          <nav className="header__nav nav hidden">
            <ul className="nav__list flex">
              {navItems.map((item) => {
                const isHovered = activeNavItem?.includes(item.title) ?? false;

                return (
                  <motion.li
                    className="nav__item"
                    key={item.href}
                    onMouseEnter={
                      item.hasModal && onItemEnter
                        ? () => isModalVariant(item.title) && onItemEnter(item.title)
                        : undefined
                    }
                    onMouseLeave={item.hasModal && onItemLeave ? onItemLeave : undefined}
                  >
                    <Button
                      href={item.href}
                      variant="menu"
                      className={clsx('nav__link', isHovered && 'hovered')}
                      iconSmall={item.hasIcon}
                      onClick={onModalClose}
                    >
                      {item.title}
                    </Button>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="header__link" onClick={onModalClose}>
              <Image
                src={logoSrc as string}
                width={144}
                height={78}
                alt="Логотип"
                className="header__logo"
                priority
              />
            </Link>
          </motion.div>
        </div>

        <div className="header__wrapper-contacts hidden__contacts flex">
          <CustomSelect
            options={[
              { value: 'almaty', label: 'Алматы' },
              { value: 'karaganda', label: 'Караганда' },
              { value: 'shymkent', label: 'Шымкент' },
            ]}
            value="almaty"
            onChange={(value) => console.log('Выбран город:', value)}
            className="header__city-select"
          />

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link className="header__phone" href="tel:+74951234567">
              +7 (700) 346 43 71
            </Link>
          </motion.div>
        </div>

        <div className="header__burger flex hidden__burger--deckstop">
          <motion.button
            className="header__btn"
            onClick={onMobilModal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          ></motion.button>
        </div>
      </div>
    </motion.header>
  );
};
