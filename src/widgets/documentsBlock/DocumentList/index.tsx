'use client';
import { useState } from 'react';

import { DocumentItem } from '../DocumentItem';
import type { IDocumentsItems } from '../documents.const';

interface DocumentsListProps {
  documents: IDocumentsItems[];
}

export const DocumentsList = ({ documents }: DocumentsListProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ul className="documents-list">
      {documents.map((item, index) => (
        <DocumentItem
          key={item.id}
          item={item}
          index={index}
          isActive={activeIndex === index}
          hasActiveItem={activeIndex !== null}
          onActivate={setActiveIndex}
          onDeactivate={() => setActiveIndex(null)}
        />
      ))}
    </ul>
  );
};
