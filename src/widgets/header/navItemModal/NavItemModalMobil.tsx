// src/shared/ui/Modal/navItemModal/NavItemModal.tsx
'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// import { Button } from '@/shared/ui';

import type { NavListModalProps, SelectedServiceType } from './nav-Item.types';

import './navItemModalMobil.scss';

interface NavItemModalProps {
  data?: NavListModalProps[];
}

export const NavItemModalMobil = ({ data = [] }: NavItemModalProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<SelectedServiceType | null>(null);

  const handleTitleHover = (id: number) => {
    setSelectedId(id);
    setSelectedService(null);
  };

  const handleModalLeave = () => {
    setSelectedId(null);
    setSelectedService(null);
  };

  const handleSelectService = (
    service: Pick<SelectedServiceType, 'name' | 'image'>,
    index: number
  ) => {
    setSelectedService({ ...service, index });
  };

  const selectedItem = data.find((item) => item.id === selectedId);

  return (
    <div className="modal-mobil__wrapper container" onMouseLeave={handleModalLeave}>
      <div className="modal-mobil">
        <ul className="modal-mobil__list--title">
          {data.map((item) => (
            <li key={item.id}>
              <button
                className={clsx('modal-mobil__btn-list', selectedId === item.id && 'selected')}
                onMouseEnter={() => handleTitleHover(item.id)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedId && (
        <div className="modal-mobil--items flex">
          <ul className="modal-mobil__list--items">
            {selectedItem?.list?.map((subItem, index) => (
              <li key={`${subItem.name}-${index}`}>
                <Link
                  href="/"
                  //   variant="two"
                  className={clsx(
                    'modal-mobil-link-items',
                    selectedService?.name === subItem.name && 'selected'
                  )}
                  onMouseEnter={() => handleSelectService(subItem, index)}
                >
                  {subItem.name}
                </Link>
              </li>
            ))}
          </ul>
          {selectedService?.image && (
            <div className="service-image" onMouseEnter={() => setSelectedService(selectedService)}>
              <Image src={selectedService.image} alt={selectedService.name} fill />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
