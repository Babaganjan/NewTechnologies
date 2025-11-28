'use client';
import clsx from 'clsx';
import Image from 'next/image';
import type { KeyboardEvent, MouseEvent } from 'react';

import { DocumentsIcons } from '@/shared/icons';

import type { IDocumentsItems } from '../documents.const';

interface DocumentItemProps {
  item: IDocumentsItems;
  index: number;
  isActive: boolean;
  hasActiveItem: boolean;
  onActivate: (index: number) => void;
  onDeactivate: () => void;
  onDownload: (event: MouseEvent | KeyboardEvent, itemId: number, index: number) => void;
}

export const DocumentItem = ({
  item,
  index,
  isActive,
  hasActiveItem,
  onActivate,
  onDeactivate,
  onDownload,
}: DocumentItemProps) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onDownload(e, item.id, index);
    }
  };

  return (
    <li
      className={clsx(
        'documents-list__item',
        isActive && 'documents-list__item--active',
        hasActiveItem && !isActive && 'documents-list__item--deactive'
      )}
      onMouseEnter={() => onActivate(index)}
      onMouseLeave={onDeactivate}
      onFocus={() => onActivate(index)}
      onBlur={onDeactivate}
      onClick={(e) => onDownload(e, item.id, index)}
      onKeyDown={(e) => handleKeyDown(e)}
      tabIndex={0}
      aria-label={`Скачать ${item.title}`}
    >
      <span className="document__title">{item.title}</span>
      <DocumentsIcons className="documents__icons" aria-hidden="true" />
      <span className="document__number" aria-label={`Номер ${index + 1}`}>
        [{(index + 1).toString().padStart(2, '0')}]
      </span>
      <span className="document__size" aria-label={`Размер ${item.size}`}>
        {item.size}
      </span>
      {isActive && (
        <Image
          src={item.previewImage}
          className="document__image"
          width={192}
          height={248}
          alt={`Предпросмотр ${item.title}`}
          loading="lazy"
        />
      )}
    </li>
  );
};
