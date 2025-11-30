'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import { Arrow } from '@/shared/icons';

import type { NavListModalProps, SelectedCategoryType } from '../nav-Item.types';

import './navItemModalMobil.scss';

interface NavItemModalProps {
  data?: NavListModalProps[];
  onModalClose?: () => void;
}

export const NavItemModalMobil = ({ data = [], onModalClose }: NavItemModalProps) => {
  const [selectedId, setSelectedId] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategoryType | null>(null);

  const handleTitleClick = (id: number) => {
    if (selectedId.includes(id)) {
      setSelectedId((prev) => prev.filter((item) => item !== id));
      setSelectedCategory(null);
    } else {
      setSelectedId((prev) => [...prev, id]);
      setSelectedCategory(null);
    }
  };

  const handleSelectCategory = (service: { name: string }, index: number) => {
    setSelectedCategory({ ...service, index });
    if (onModalClose) onModalClose();
  };

  return (
    <div className="modal-mobil__wrapper">
      <div className="modal-mobil">
        <ul className="modal-mobil__list--title">
          {data.map((item) => {
            const isActive = selectedId.includes(item.id);

            return (
              <li key={item.id}>
                <button
                  className={clsx(
                    'modal-mobil__btn-list',
                    isActive && 'modal-mobil__btn--selected'
                  )}
                  onClick={() => handleTitleClick(item.id)}
                  aria-expanded={isActive}
                  aria-controls={`category-${item.id}`}
                >
                  {item.title}
                  <Arrow
                    width={15}
                    height={12}
                    className={clsx(
                      'modal-mobil__arrow',
                      isActive && 'modal-mobil__arrow--rotated'
                    )}
                  />
                </button>
                {isActive && (
                  <div className="modal-mobil--items" id={`category-${item.id}`}>
                    <ul className="modal-mobil__list--items">
                      {item.list?.map((subItem, index) => (
                        <li key={`${subItem.name}-${index}`}>
                          <Link
                            href={subItem.href}
                            className={clsx(
                              'modal-mobil-link-items',
                              selectedCategory?.name === subItem.name &&
                                selectedCategory?.index === index &&
                                'modal-mobil__link--selected'
                            )}
                            onClick={() => handleSelectCategory(subItem, index)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
