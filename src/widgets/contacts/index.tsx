'use client';

import { memo, useMemo } from 'react';

import { useScrollContext } from '@/context/ScrollProvider';
import { CITIES_CONTACTS, COMMON_CONTACT_INFO } from '@/shared/const/cities.data';
import { ContactsHeading } from '@/shared/icons';
import { Button, H } from '@/shared/ui';

import { ContactItem } from './ContactItem';
import { MAPS_EMBED_URL } from './contacts.const';

import './_contacts.scss';

export const Contacts = memo(() => {
  const { selectedCity } = useScrollContext();

  // Мемоизация выбранного контакта
  const selectedContact = useMemo(
    () => CITIES_CONTACTS.find((contact) => contact.city === selectedCity),
    [selectedCity]
  );

  return (
    <section className="contacts" aria-labelledby="contacts-title">
      <div className="contacts__container container">
        <H level="1" id="contacts-title" className="contacts__title title">
          <ContactsHeading />
        </H>

        <ul className="contacts__list" role="list">
          {/* Телефон */}
          <ContactItem className="phone" label="телефон">
            <p>
              <Button
                href={`tel:${selectedContact?.phone}`}
                className="contacts-title-mobile"
                variant="link"
                aria-label={`Позвонить по номеру ${selectedContact?.phone}`}
              >
                {selectedContact?.phone}
              </Button>
            </p>
          </ContactItem>

          {/* Адрес */}
          <ContactItem className="address" label="адрес">
            <address>{selectedContact?.address || 'Астана, 14/1 умай ана'}</address>
          </ContactItem>

          {/* Рабочие часы */}
          <ContactItem className="work-time" label="часы работы">
            <p>{COMMON_CONTACT_INFO.workingHours}</p>
          </ContactItem>

          {/* Email */}
          <ContactItem className="mail" label="email">
            <Button
              href={`mailto:${COMMON_CONTACT_INFO.email}`}
              variant="social"
              className="social-link"
              rel="noopener noreferrer"
              aria-label={`Написать на email ${COMMON_CONTACT_INFO.email}`}
            >
              {COMMON_CONTACT_INFO.email}
            </Button>
          </ContactItem>

          {/* Соцсети */}
          <ContactItem className="social" label="соцсети">
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
                    aria-label={`Перейти в ${social.title}`}
                  >
                    {social.title}
                  </Button>
                ))}
              </span>
            </p>
            <div className="contacts__decoration" aria-hidden="true"></div>
          </ContactItem>
        </ul>

        <iframe
          className="contacts__map-iframe"
          src={MAPS_EMBED_URL}
          width="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта с расположением офиса"
          aria-label="Интерактивная карта Google с местоположением офиса"
        />
      </div>
    </section>
  );
});

Contacts.displayName = 'Contacts';
