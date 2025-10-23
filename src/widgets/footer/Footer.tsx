'use client';
import Link from 'next/link';

import { Button } from '@/shared/ui';
import './_footer.scss';

import {
  FOOTER_ABOUT_ITEMS,
  FOOTER_ACTIVITY_ITEMS,
  FOOTER_COMPANY_ITEMS,
  FOOTER_NAV_ITEMS,
} from './footer.const';

export const Footer = () => {
  const scrollToTop = () => {
    let startTime: number | null = null;
    const start = window.pageYOffset;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / 1000, 1);
      const ease = 1 - Math.pow(1 - progress, 4);

      window.scrollTo(0, start * (1 - ease));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        <Link href="/" className="footer__logo" aria-label="На главную страницу">
          NT
        </Link>
        <Button
          type="button"
          variant="upButton"
          icon
          aria-label="Прокрутить страницу к началу"
          onClick={scrollToTop}
          className="arrow-button"
        >
          Наверх
        </Button>
        <nav className="footer__pages" aria-label="Основная навигация">
          <p className="footer__title">Страницы</p>
          <ul>
            {FOOTER_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Button href={item.href} variant="link">
                  {item.title}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__about">
          <p className="footer__title">Связь с нами</p>
          <address className="footer__address">Астана, 14/1 умай ана</address>
          <nav aria-label="Контактные ссылки">
            <ul>
              {FOOTER_ABOUT_ITEMS.map((item) => (
                <li key={item.href}>
                  <Button href={item.href} variant="link">
                    {item.title}
                  </Button>
                </li>
              ))}
            </ul>
            <Button
              href="https://www.instagram.com/nt-t.kz/"
              variant="social"
              icon
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Button>
          </nav>
        </div>

        <nav className="footer__activity" aria-label="Навигация по деятельности">
          <p className="footer__title">Деятельность</p>
          <ul>
            {FOOTER_ACTIVITY_ITEMS.map((item) => (
              <li key={item.href}>
                <Button href={item.href} variant="link">
                  {item.title}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__about-company" aria-label="Информация о компании">
          <p className="footer__title">О компании</p>
          <ul>
            {FOOTER_COMPANY_ITEMS.map((item) => (
              <li key={item.href}>
                <Button href={item.href} variant="link">
                  {item.title}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__copyright">
          <p>
            Тоо «новые технологии» <br />© {new Date().getFullYear()} все права защищены
          </p>
          <Button href="/privacy-policy" variant="policy">
            Политика конфиденциальности
          </Button>
        </div>
      </div>
    </footer>
  );
};
