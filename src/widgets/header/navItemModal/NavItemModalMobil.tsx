// src/shared/ui/Modal/navItemModal/NavItemModal.tsx
'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import { Arrow } from '@/shared/icons';

import type { NavListModalProps, SelectedServiceType } from './nav-Item.types';

import './navItemModalMobil.scss';

interface NavItemModalProps {
  data?: NavListModalProps[];
}

export const NavItemModalMobil = ({ data = [] }: NavItemModalProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<SelectedServiceType | null>(null);

  const handleTitleClick = (id: number) => {
    if (selectedId === id) {
      setSelectedId(null);
      setSelectedService(null);
    } else {
      setSelectedId(id);
      setSelectedService(null);
    }
  };

  const handleModalLeave = () => {
    setSelectedId(null);
    setSelectedService(null);
  };

  const handleSelectService = (service: Pick<SelectedServiceType, 'name'>, index: number) => {
    setSelectedService({ ...service, index });
  };

  const selectedItem = data.find((item) => item.id === selectedId);

  return (
    <div className="modal-mobil__wrapper" onMouseLeave={handleModalLeave}>
      <div className="modal-mobil">
        <ul className="modal-mobil__list--title">
          {data.map((item) => {
            const isActive = selectedId === item.id;

            return (
              <li key={item.id}>
                <button
                  className={clsx(
                    'modal-mobil__btn-list',
                    selectedId === item.id && 'modal-mobil__btn--selected'
                  )}
                  onClick={() => handleTitleClick(item.id)}
                >
                  {item.title}
                  <Arrow width={15} height={12} />
                </button>
                {isActive && (
                  <div className="modal-mobil--items flex">
                    <ul className="modal-mobil__list--items flex">
                      {selectedItem?.list?.map((subItem, index) => (
                        <li key={`${subItem.name}-${index}`}>
                          <Link
                            href="/"
                            className={clsx(
                              'modal-mobil-link-items',
                              selectedService?.name === subItem.name &&
                                'modal-mobil__link--selected'
                            )}
                            onClick={() => handleSelectService(subItem, index)}
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
