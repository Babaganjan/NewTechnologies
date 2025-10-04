import Image from 'next/image';
import './_header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container flex">
        <div className="header__wrapper flex">
          <nav className="header__nav nav hidden">
            <ul className="nav__list flex">
              <li className="nav__item">
                <a href="" className="nav__link">
                  Сервис
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  IT-решения
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  О нас
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <a href="" className="header__link">
            <Image
              src="/img/logo.svg"
              width={145}
              height={79}
              alt="Логотип"
              className="header__logo"
            />
          </a>
        </div>
        <div className="header__wrapper-contacts hidden__contacts flex">
          <div className="custom-select">
            <select name="city" className="header__city">
              <option value="almaty">Алматы</option>
              <option value="karaganda">Караганда</option>
              <option value="shymkent">Шымкент</option>
            </select>
          </div>
          <a className="header__phone" href="tel:+74951234567">
            +7 (700) 346 43 71
          </a>
        </div>
        <div className="header__burger flex hidden__burger--deckstop">
          <button className="header__btn"></button>
        </div>
      </div>
    </header>
  );
};
