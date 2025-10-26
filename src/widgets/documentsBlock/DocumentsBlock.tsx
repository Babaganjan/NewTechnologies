'use client';

import { useState } from 'react';

import { DocumentsIcons } from '@/shared/icons';
import { Button, H } from '@/shared/ui';

import { DOCUMENTS_ITEMS } from './documents.const';

import './Documents.scss';

export const DocumentsBlock = () => {
  const [isActive, setIsActive] = useState('one');
  const [];

  return (
    <section className="documents-section">
      <div className="documents__container container">
        <div className="documents__title-container">
          <H level="2" variant="light">
            Документы
          </H>
        </div>
        <div className="button-container">
          <Button
            variant="secondary"
            onClick={() => setIsActive('one')}
            active={isActive === 'one'}
          >
            Сертификаты
          </Button>
          <Button
            variant="secondary"
            onClick={() => setIsActive('two')}
            active={isActive === 'two'}
          >
            Благодарственные письма
          </Button>
        </div>
        <ul className="documents-list">
          {DOCUMENTS_ITEMS.map((item, index) => (
            <li key={item.id} className="documents-list__item">
              {item.title} <DocumentsIcons />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
