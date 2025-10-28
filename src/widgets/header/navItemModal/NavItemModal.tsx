// src/shared/ui/Modal/navItemModal/NavItemModal.tsx
'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/shared/ui';

import type { NavListModalProps, SelectedServiceType } from './nav-Item.types';
import './navItemModal.scss';

interface NavItemModalProps {
  data?: NavListModalProps[];
}

export const NavItemModal = ({ data = [] }: NavItemModalProps) => {
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
    <div className="wrapper-modal container" onMouseLeave={handleModalLeave}>
      <div className="nav-modal">
        <ul className="nav-modal__list--title">
          {data.map((item) => (
            <li key={item.id}>
              <Button
                variant="one"
                className={clsx(selectedId === item.id && 'selected')}
                onMouseEnter={() => handleTitleHover(item.id)}
              >
                {item.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {selectedId && (
        <div className="nav-modal--items flex">
          <ul className="nav-modal__list--items">
            {selectedItem?.list?.map((subItem, index) => (
              <li key={`${subItem.name}-${index}`}>
                <Button
                  href="/"
                  variant="two"
                  className={clsx(selectedService?.name === subItem.name && 'selected')}
                  onMouseEnter={() => handleSelectService(subItem, index)}
                  icon
                >
                  {subItem.name}
                </Button>
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
