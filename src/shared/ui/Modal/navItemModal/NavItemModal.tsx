// src/shared/ui/Modal/navItemModal/NavItemModal.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/shared/ui';

import type { NavListModalProps } from '../../types/NavListModalProps.types';

import { DATA_SERVICE_MODAL } from './nav-item.const';

import './navItemModal.scss';

// Типизация props компонента
interface NavItemModalProps {
  onSelect?: (service: string) => void;
}

export const NavItemModal = ({
  onSelect = (service) => console.log(`Выбрана услуга: ${service}`),
}: NavItemModalProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<{ name: string; image?: string } | null>(
    null
  );

  const handleSelectItem = (id: number) => {
    setSelectedId(id);
    setSelectedService(null);
  };

  const handleSelectService = (service: { name: string; image?: string }) => {
    setSelectedService(service);
    onSelect(service.name);
  };

  // Если выбран item — показываем его подсписок
  const selectedItem: NavListModalProps | undefined = DATA_SERVICE_MODAL.find(
    (item) => item.id === selectedId
  );

  return (
    <div className="wrapper-modal container">
      <div className="nav-modal">
        <ul className="nav-modal__list--title">
          {DATA_SERVICE_MODAL.map((item: NavListModalProps) => (
            <li key={item.id}>
              <Button
                variant="one"
                onMouseEnter={() => handleSelectItem(item.id)}
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
            {selectedItem?.list.map((subItem, index: number) => (
              <li key={index}>
                <Button
                  href="/"
                  variant="two"
                  onMouseEnter={() => handleSelectService(subItem)}
                  icon
                >
                  {subItem.name}
                </Button>
              </li>
            ))}
          </ul>

          {selectedService?.image && (
            <div className="service-image">
              <Image src={selectedService.image} alt={selectedService.name} fill />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
