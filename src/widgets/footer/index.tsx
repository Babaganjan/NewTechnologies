'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { useScrollContext } from '@/context/ScrollProvider';
import { fadeInUp } from '@/shared/animations/scroll-animations';
import { CITIES_CONTACTS, COMMON_CONTACT_INFO } from '@/shared/const/cities.data';
import { Button } from '@/shared/ui';
import './_footer.scss';

import { FOOTER_ACTIVITY_ITEMS, FOOTER_COMPANY_ITEMS, FOOTER_NAV_ITEMS } from './footer.const';

export const Footer = () => {
  const { selectedCity } = useScrollContext();
  const selectedContact = CITIES_CONTACTS.find((contact) => contact.city === selectedCity);
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
      <motion.div
        className="footer__container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
          },
        }}
      >
        <Link href="/" className="footer__logo" aria-label="Вернуться на главную страницу">
          NT
        </Link>
        <Button
          type="button"
          variant="upButton"
          icon
          aria-label="Прокрутить страницу к началу"
          onClick={scrollToTop}
          className="arrow-button footer__link"
        >
          Наверх
        </Button>
        <nav className="footer__pages" aria-label="Основная навигация">
          <p className="footer__title">Страницы</p>
          <ul>
            {FOOTER_NAV_ITEMS.map((item) => (
              <motion.li variants={fadeInUp} key={item.href}>
                <Button href={item.href} variant="link" className="footer__link">
                  {item.title}
                </Button>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="footer__about">
          <motion.p variants={fadeInUp} className="footer__title">
            Связь с нами
          </motion.p>
          <motion.address variants={fadeInUp} className="footer__address">
            {selectedContact?.address || 'Астана, 14/1 умай ана'}
          </motion.address>
          {selectedContact && (
            <motion.div variants={fadeInUp}>
              <Button
                href={`tel:${selectedContact.href}`}
                variant="link"
                aria-label={`Позвонить по номеру ${selectedContact.phone}`}
              >
                {selectedContact.phone}
              </Button>
            </motion.div>
          )}
          <motion.div variants={fadeInUp}>
            <Button
              href={`mailto:${COMMON_CONTACT_INFO.email}`}
              variant="social"
              className="social-link"
              rel="noopener noreferrer"
              aria-label={`Написать на email ${COMMON_CONTACT_INFO.email}`}
            >
              {COMMON_CONTACT_INFO.email}
            </Button>
          </motion.div>
          <nav aria-label="Социальные сети">
            {COMMON_CONTACT_INFO.socialNetworks.map((item) => (
              <motion.div variants={fadeInUp} key={item.id}>
                <Button
                  href={item.href}
                  variant="social"
                  icon
                  className="social-link footer__link"
                  rel="noopener noreferrer"
                  aria-label={`Наш ${item.title}`}
                >
                  {item.title}
                </Button>
              </motion.div>
            ))}
          </nav>
        </div>

        <nav className="footer__activity" aria-label="Навигация по деятельности">
          <motion.p variants={fadeInUp} className="footer__title">
            Деятельность
          </motion.p>
          <ul>
            {FOOTER_ACTIVITY_ITEMS.map((item) => (
              <motion.li variants={fadeInUp} key={item.href}>
                <Button href={item.href} variant="link" className="footer__link">
                  {item.title}
                </Button>
              </motion.li>
            ))}
          </ul>
        </nav>

        <nav className="footer__about-company" aria-label="Информация о компании">
          <motion.p variants={fadeInUp} className="footer__title">
            О компании
          </motion.p>
          <ul>
            {FOOTER_COMPANY_ITEMS.map((item) => (
              <motion.li variants={fadeInUp} key={item.href}>
                <Button href={item.href} variant="link" className="footer__link">
                  {item.title}
                </Button>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.div variants={fadeInUp} className="footer__copyright">
          <p>
            Тоо «новые технологии» <br />© {new Date().getFullYear()} все права защищены
          </p>
          <Button href="/privacy" variant="policy">
            Политика конфиденциальности
          </Button>
        </motion.div>
      </motion.div>
    </footer>
  );
};
