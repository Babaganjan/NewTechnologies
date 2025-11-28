'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useScrollContext } from '@/context/ScrollProvider';
import { CITIES_CONTACTS } from '@/shared/const/cities.data';
import { Button, CustomSelect } from '@/shared/ui';

import type { HeaderContentProps } from '../header.types';
import { isModalVariant } from '../helper/isModalVariant';

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
  isModalOpen = false,
  transparentBg = false,
}: HeaderContentProps) => {
  const { isHeaderVisible, isHeaderScrolled, selectedCity, setSelectedCity } = useScrollContext();
  const selectedContact = CITIES_CONTACTS.find((contact) => contact.city === selectedCity);

  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMounted(true);
  }, []);

  const isPrivate = pathname === '/privacy/';

  // Все динамические классы применяем только после монтирования
  const computedClasses = clsx(
    'header',
    isMounted && isHeaderScrolled && 'header-scrolled',
    isMounted && transparentBg && 'header--transparent',
    isMounted && isPrivate && !isHeaderScrolled && !isModalOpen && 'header--privacy',
    isMounted && (theme === 'dark' ? 'header--dark' : 'header--light')
  );

  return (
    <motion.header
      className={computedClasses}
      data-theme={theme}
      initial={{ y: 0 }}
      animate={{
        y: isHeaderVisible ? 0 : -120,
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 100,
      }}
    >
      <div className="container header__container">
        <div className="header__wrapper">
          <nav className="header__nav nav hidden" aria-label="Основная навигация">
            <ul className="nav__list">
              {navItems.map((item) => {
                const isHovered = activeNavItem?.includes(item.title) ?? false;
                const isActive = isClient && item.href === pathname;

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
                      className={clsx(
                        'nav__link',
                        isHovered && 'hovered',
                        isActive && 'active-nav-link'
                      )}
                      iconSmall={item.hasIcon}
                      onClick={onModalClose}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.title}
                    </Button>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <motion.div>
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

        <div className="header__wrapper-contacts hidden__contacts">
          <CustomSelect
            options={CITIES_CONTACTS}
            value={selectedCity}
            onChange={setSelectedCity}
            className="header__city-select"
            isModalOpen={isModalOpen}
          />

          <motion.div>
            {selectedContact && (
              <Link className="header__phone" href={`tel:${selectedContact.href}`}>
                {selectedContact.phone}
              </Link>
            )}
          </motion.div>
        </div>

        <div className="header__burger hidden__burger--deckstop">
          <motion.button
            className="header__btn"
            onClick={onMobilModal}
            aria-label="Открыть меню навигации"
            aria-expanded="false"
          ></motion.button>
        </div>
      </div>
    </motion.header>
  );
};
