import Link from 'next/link';

import { CONTACTS_ITEMS, isSocialNetworks } from '@/shared/const/data';
import { Arrow, ContactsHeading } from '@/shared/icons';
import { H } from '@/shared/ui';

import { MAPS_EMBED_URL } from './contacts.const';

import './_contacts.scss';

export const Contacts = () => {
  return (
    <section className="contacts" aria-labelledby="contacts-title">
      <div className="contacts__container container">
        <H level={'1'} id="contacts-title" className="contacts__title title">
          <ContactsHeading />
        </H>
        <ul className="contacts__list">
          {CONTACTS_ITEMS.map((item) => (
            <li className={`contacts__item ${item.className}`} key={item.title}>
              <p className="contacts-title-text">{item.title}</p>
              <p>
                {isSocialNetworks(item.value) ? (
                  <span className="social-links-wrapper">
                    {item.value.map((social) => (
                      <Link
                        key={social.id}
                        href={social.href}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.title}
                        <Arrow width={16} height={20} />
                      </Link>
                    ))}
                  </span>
                ) : item.href ? (
                  <Link href={item.href}>
                    {item.value}
                    {item.className === 'social' && <Arrow width={16} height={20} />}
                  </Link>
                ) : (
                  item.value
                )}
              </p>
              <div className="contacts__decoration" aria-hidden="true"></div>
            </li>
          ))}
        </ul>
        <iframe
          className="contacts__map-iframe"
          src={MAPS_EMBED_URL}
          width="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};
