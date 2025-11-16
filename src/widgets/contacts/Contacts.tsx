'use client';

import { useScrollContext } from '@/context/ScrollProvider';
import { CITIES_CONTACTS, COMMON_CONTACT_INFO } from '@/shared/const/data';
import { ContactsHeading } from '@/shared/icons';
import { H, Button } from '@/shared/ui';

import { MAPS_EMBED_URL } from './contacts.const';

import './_contacts.scss';

export const Contacts = () => {
  const { selectedCity } = useScrollContext();
  const selectedContact = CITIES_CONTACTS.find((contact) => contact.city === selectedCity);

  return (
    <section className="contacts" aria-labelledby="contacts-title">
      <div className="contacts__container container">
        <H level={'1'} id="contacts-title" className="contacts__title title">
          <ContactsHeading />
        </H>
        <ul className="contacts__list">
          {/* Телефон */}
          <li className="contacts__item phone" key={1}>
            <p className="contacts-title-text">телефон</p>
            <p>
              <Button href={`tel:${selectedContact?.phone}`} variant="link">
                {selectedContact?.phone}
              </Button>
            </p>
            <div className="contacts__decoration" aria-hidden="true"></div>
          </li>

          {/* Адрес */}
          <li className="contacts__item address" key={2}>
            <p className="contacts-title-text">адрес</p>
            <address>{selectedContact?.address || 'Астана, 14/1 умай ана'}</address>
            <div className="contacts__decoration" aria-hidden="true"></div>
          </li>

          {/* Рабочие часы */}
          <li className="contacts__item work-time" key={3}>
            <p className="contacts-title-text">рабочие часы</p>
            <p>{COMMON_CONTACT_INFO.workingHours}</p>
            <div className="contacts__decoration" aria-hidden="true"></div>
          </li>

          {/* Email */}
          <li className="contacts__item mail" key={4}>
            <p className="contacts-title-text">email</p>
            <Button
              href={`mailto:${COMMON_CONTACT_INFO.email}`}
              variant="social"
              className="social-link"
              rel="noopener noreferrer"
            >
              {COMMON_CONTACT_INFO.email}
            </Button>
            <div className="contacts__decoration" aria-hidden="true"></div>
          </li>

          {/* Соцсети */}
          <li className="contacts__item social" key={5}>
            <p className="contacts-title-text">соцсети</p>
            <p>
              <span className="social-links-wrapper">
                {COMMON_CONTACT_INFO.socialNetworks.map((social) => (
                  <Button
                    key={social.id}
                    href={social.href}
                    variant="social"
                    icon
                    className="social-link"
                    rel="noopener noreferrer"
                  >
                    {social.title}
                  </Button>
                ))}
              </span>
            </p>
            <div className="contacts__decoration" aria-hidden="true"></div>
          </li>
        </ul>
        <iframe
          className="contacts__map-iframe"
          src={MAPS_EMBED_URL}
          width="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта с расположением офиса"
        />
      </div>
    </section>
  );
};
