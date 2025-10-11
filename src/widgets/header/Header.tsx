import Image from 'next/image';
import Link from 'next/link';

import './_header.scss';

import { HEADER_NAV_ITEMS } from './header.const';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container flex">
        <div className="header__wrapper flex">
          <nav className="header__nav nav hidden">
            <ul className="nav__list flex">
              {HEADER_NAV_ITEMS.map((item) => (
                <li className="nav__item" key={item.href}>
                  <Link href={item.href} className="nav__link" key={item.href}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/" className="header__link">
            <Image
              src="/img/logo.svg"
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
          <button className="header__btn"></button>
        </div>
      </div>
    </header>
  );
};
