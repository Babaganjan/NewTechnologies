'use client';
import type { KeyboardEvent, MouseEvent } from 'react';
import { useState } from 'react';

import { DocumentItem } from '../DocumentItem';
import type { IDocumentsItems } from '../documents.const';

interface DocumentsListProps {
  documents: IDocumentsItems[];
  label: string;
}

export const DocumentsList = ({ documents, label }: DocumentsListProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleDownloadDocument = (event: MouseEvent | KeyboardEvent, index: number) => {
    console.log('Скачано:', 'Индекс:', index);
    setActiveIndex(null);
    (event.currentTarget as HTMLElement).blur();
  };

  return (
    <ul className="documents-list" id="documents-panel" role="tabpanel" aria-label={label}>
      {documents.map((item, index) => (
        <DocumentItem
          key={item.id}
          item={item}
          index={index}
          isActive={activeIndex === index}
          hasActiveItem={activeIndex !== null}
          onActivate={setActiveIndex}
          onDeactivate={() => setActiveIndex(null)}
          onDownload={(e) => handleDownloadDocument(e, index)}
        />
      ))}
    </ul>
  );
};
