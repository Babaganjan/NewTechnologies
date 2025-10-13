import Link from 'next/link';

import { CONTACTS_ITEMS, MAPS_EMBED_URL } from './contacts.const';
import './_contacts.scss';

export const Contacts = () => {
  return (
    <section className="contacts" aria-labelledby="contacts-title">
      <div className="contacts__container container">
        <h1 id="contacts-title" className="contacts__title">
          Наши контакты
        </h1>
        <ul className="contacts__list">
          {CONTACTS_ITEMS.map((item) => (
            <li className={`contacts__item ${item.className}`} key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.href ? <Link href={item.href}>{item.value}</Link> : item.value}</p>
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
