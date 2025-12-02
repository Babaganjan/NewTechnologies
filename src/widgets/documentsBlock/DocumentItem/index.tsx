'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { DocumentsIcons } from '@/shared/icons';

import type { IDocumentsItems } from '../documents.const';

interface DocumentItemProps {
  item: IDocumentsItems;
  index: number;
  isActive: boolean;
  hasActiveItem: boolean;
  onActivate: (index: number) => void;
  onDeactivate: () => void;
}

export const DocumentItem = ({
  item,
  index,
  isActive,
  hasActiveItem,
  onActivate,
  onDeactivate,
}: DocumentItemProps) => {
  return (
    <li onMouseEnter={() => onActivate(index)} onMouseLeave={onDeactivate}>
      <Link
        href=""
        download={item.file}
        className={clsx(
          'documents-list__item',
          isActive && 'documents-list__item--active',
          hasActiveItem && !isActive && 'documents-list__item--deactive'
        )}
        onFocus={() => onActivate(index)}
        onBlur={onDeactivate}
      >
        <span className="document__title">{item.title}</span>
        <DocumentsIcons className="documents__icons" aria-hidden="true" />
        <data value={index + 1} className="document__number" aria-label={`Номер ${index + 1}`}>
          [{(index + 1).toString().padStart(2, '0')}]
        </data>
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
      </Link>
    </li>
  );
};
