import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import '../_header.scss';

import { Button } from '@/shared/ui';

import type { HeaderContentProps } from '../header.types';
import { isModalVariant } from '../helper/isModalVariant';

export const HeaderContent = ({
  navItems,
  theme,
  logoSrc,
  onItemEnter,
  onItemLeave,
  onMobilModal,
  activeNavItem,
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
                      onClick={onItemLeave}
                    >
                      {item.title}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Link href="/" className="header__link" onClick={onItemLeave}>
            <Image
              src={logoSrc as string}
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
          <button className="header__btn" onClick={onMobilModal}></button>
        </div>
      </div>
    </header>
  );
};
