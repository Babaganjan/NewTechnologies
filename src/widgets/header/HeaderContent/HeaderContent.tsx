import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import '../_header.scss';

import { Button } from '@/shared/ui';

import type { HeaderContentProps } from '../header.types';
import { isModalVariant } from '../helper/isModalVariant';

import { CustomSelect } from './../../../shared/ui/CustomSelect/CustomSelect';

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
  return (
    <header className="header" data-theme={theme}>
      <div className="container header__container flex">
        <div className="header__wrapper flex">
          <nav className="header__nav nav hidden">
            <ul className="nav__list flex">
              {navItems.map((item) => {
                const isHovered = activeNavItem?.includes(item.title) ?? false;

                return (
                  <li
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
                  </li>
                );
              })}
            </ul>
          </nav>
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
          <Link className="header__phone" href="tel:+74951234567">
            +7 (700) 346 43 71
          </Link>
        </div>
        <div className="header__burger flex hidden__burger--deckstop">
          <button className="header__btn" onClick={onMobilModal}></button>
        </div>
      </div>
    </header>
  );
};
