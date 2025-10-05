import Link from 'next/link';

import { Arrow } from '@/shared/icons';

import './_footer.scss';
import {
  footerAboutItems,
  footerNavItems,
  footerActivityItems,
  footerCompanyItems,
} from './footer.const';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <a href="#" className="footer__logo" aria-label="На главную страницу">
          NT
        </a>
        <button type="button" className="arrow-button" aria-label="Прокрутить страницу к началу">
          Наверх
          <Arrow width={16} height={20} />
        </button>
        <nav className="footer__pages" aria-label="Основная навигация">
          <span className="footer__title">Страницы</span>
          <ul className="footer__list">
            {footerNavItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="footer__about">
          <span className="footer__title">Связь с нами</span>
          <p>Астана, 14/1 умай ана</p>
          <ul>
            {footerAboutItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={item.className}>
                  {item.title}
                  {item.className === 'social-link' && <Arrow width={12} height={15} />}
                </Link>
              </li>
            ))}
          </ul>
        </address>

        <div className="footer__activity">
          <span className="footer__title">Деятельность</span>
          <ul>
            {footerActivityItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__about-company">
          <span className="footer__title">О компании</span>
          <ul>
            {footerCompanyItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__copyright">
          <p className="footer__copyright-text">
            Тоо «Новые технологии»
            <span>© {new Date().getFullYear()} все права защищены</span>
          </p>
          <Link href="#">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
};
