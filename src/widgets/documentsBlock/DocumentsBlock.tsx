'use client';
import { useState } from 'react';

import { H } from '@/shared/ui';

import { DocumentsList } from './DocumentList/DocumentList';
import { DocumentsTabs } from './DocumentsTabs/DocumentsTabs';
import type { ActiveTab } from './documents.const';
import { DOCUMENTS_ITEMS, TAB_LABELS } from './documents.const';

import './Documents.scss';

export const DocumentsBlock = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('one');

  return (
    <section className="documents-section" aria-labelledby="documents-title">
      <div className="documents__container container">
        <div className="documents__title-container">
          <H level="2" variant="light" id="documents-title">
            Документы
          </H>
        </div>
        <DocumentsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <DocumentsList documents={DOCUMENTS_ITEMS[activeTab]} label={TAB_LABELS[activeTab]} />
      </div>
    </section>
  );
};
