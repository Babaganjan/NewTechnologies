'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import { Arrow } from '@/shared/icons';

import type { NavListModalProps, SelectedCategoryType } from '../nav-Item.types';

import './navItemModalMobil.scss';

interface NavItemModalProps {
  data?: NavListModalProps[];
}

export const NavItemModalMobil = ({ data = [] }: NavItemModalProps) => {
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

  const handleSelectCategory = (service: Pick<SelectedCategoryType, 'name'>, index: number) => {
    setSelectedCategory({ ...service, index });
  };

  const selectedItem = data.find((item) => selectedId.includes(item.id));

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
                    selectedId.includes(item.id) && 'modal-mobil__btn--selected'
                  )}
                  onClick={() => handleTitleClick(item.id)}
                >
                  {item.title}
                  <Arrow width={15} height={12} />
                </button>
                {isActive && (
                  <div className="modal-mobil--items">
                    <ul className="modal-mobil__list--items">
                      {selectedItem?.list?.map((subItem, index) => (
                        <li key={`${subItem.name}-${index}`}>
                          <Link
                            href="/"
                            className={clsx(
                              'modal-mobil-link-items',
                              selectedCategory?.name === subItem.name &&
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
