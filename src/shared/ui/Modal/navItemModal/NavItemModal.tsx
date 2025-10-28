// src/shared/ui/Modal/navItemModal/NavItemModal.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/shared/ui';

import type { NavListModalProps } from '../../types/NavListModalProps.types';

import './navItemModal.scss';

interface NavItemModalProps {
  data?: NavListModalProps[];
  // onSelect?: (service: string) => void;
}

export const NavItemModal = ({
  data = [],
  // onSelect = (service) => console.log(`Выбрана услуга: ${service}`),
}: NavItemModalProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<{
    name: string;
    image?: string;
    index?: number;
  } | null>(null);

  // Обработчик: наведение на заголовок — устанавливаем selectedId и сбрасываем подвыбор
  const handleTitleHover = (id: number) => {
    setSelectedId(id);
    setSelectedService(null);
  };

  // Обработчик: уход со всего модального окна — полный сброс
  const handleModalLeave = () => {
    setSelectedId(null);
    setSelectedService(null);
  };

  // Для подсписка: наведение — выбор сервиса (состояние держится)
  const handleSelectService = (service: { name: string; image?: string }, index: number) => {
    setSelectedService({ ...service, index });
    // onSelect(service.name);
  };

  if (!data || data.length === 0) {
    return null;
  }

  const selectedItem: NavListModalProps | undefined = data.find((item) => item.id === selectedId);

  return (
    <div className="wrapper-modal container" onMouseLeave={handleModalLeave}>
      <div className="nav-modal">
        <ul className="nav-modal__list--title">
          {data.map((item: NavListModalProps) => (
            <li key={item.id}>
              <Button
                variant="one"
                className={selectedId === item.id ? 'selected' : ''}
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
          {' '}
          <ul className="nav-modal__list--items">
            {selectedItem?.list?.map((subItem, index: number) => (
              <li key={index}>
                <Button
                  href="/"
                  variant="two"
                  className={
                    selectedService?.name === subItem.name || selectedService?.index === index
                      ? 'selected'
                      : ''
                  }
                  onMouseEnter={() => handleSelectService(subItem, index)}
                  icon
                >
                  {subItem.name}
                </Button>
              </li>
            ))}
          </ul>
          {selectedService?.image && (
            <div
              className="service-image"
              onMouseEnter={() => {
                if (selectedService) {
                  setSelectedService(selectedService);
                }
              }}
            >
              <Image src={selectedService.image} alt={selectedService.name} fill />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
