import Link from 'next/link';

import { Arrow } from '@/shared/icons';
import { Heading } from '@/shared/ui/Heading';
import { ContactsHeading } from '@/shared/ui/HeadingSvg/ContactsHeading';

import { CONTACTS_ITEMS, MAPS_EMBED_URL } from './contacts.const';

import './_contacts.scss';

export const Contacts = () => {
  return (
    <section className="contacts" aria-labelledby="contacts-title">
      <div className="contacts__container container">
        <Heading level={1} id="contacts-title" className="contacts__title">
          <ContactsHeading />
        </Heading>
        <ul className="contacts__list">
          {CONTACTS_ITEMS.map((item) => (
            <li className={`contacts__item ${item.className}`} key={item.title}>
              <Heading level={2}>{item.title}</Heading>
              <p>
                {item.href ? (
                  <Link href={item.href}>
                    {item.value} {item.className === 'social' && <Arrow width={16} height={20} />}
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
