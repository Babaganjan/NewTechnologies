// components/Header/HeaderContent.tsx
'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { useScrollContext } from '@/context/ScrollProvider';
import { CITIES_CONTACTS } from '@/shared/const/data';
import { Button } from '@/shared/ui';
import { CustomSelect } from '@/shared/ui/CustomSelect/CustomSelect';

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
}: HeaderContentProps) => {
  const { isHeaderVisible, isHeaderScrolled, selectedCity, setSelectedCity } = useScrollContext();
  const selectedContact = CITIES_CONTACTS.find((contact) => contact.city === selectedCity);

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
      <div className="container header__container">
        <div className="header__wrapper">
          <nav className="header__nav nav hidden">
            <ul className="nav__list">
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

        <div className="header__wrapper-contacts hidden__contacts">
          <CustomSelect
            options={CITIES_CONTACTS}
            value={selectedCity}
            onChange={setSelectedCity}
            className="header__city-select"
            isModalOpen={isModalOpen}
          />

          <motion.div whileHover={{ scale: 1.05 }}>
            {selectedContact && (
              <Link className="header__phone" href={`tel:${selectedContact.phone}`}>
                {selectedContact.phone}
              </Link>
            )}
          </motion.div>
        </div>

        <div className="header__burger hidden__burger--deckstop">
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
