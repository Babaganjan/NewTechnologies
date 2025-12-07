'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/shared/ui';

import type { NavListModalProps, SelectedCategoryType } from './nav-Item.types';
import './navItemModal.scss';

interface NavItemModalProps {
  data?: NavListModalProps[];
}

export const NavItemModal = ({ data = [] }: NavItemModalProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<SelectedCategoryType | null>(null);

  const handleTitleHover = (id: number) => {
    setSelectedId(id);
    setSelectedService(null);
  };

  const handleModalLeave = () => {
    setSelectedId(null);
    setSelectedService(null);
  };

  const handleSelectService = (
    service: Pick<SelectedCategoryType, 'name' | 'image'>,
    index: number
  ) => {
    setSelectedService({ ...service, index });
  };

  const selectedItem = data.find((item) => item.id === selectedId);

  return (
    <div className="wrapper-modal container" onMouseLeave={handleModalLeave}>
      <nav className="nav-modal" aria-label="Подменю навигации">
        <ul className="nav-modal__list--title">
          {data.map((item) => (
            <li key={item.id}>
              <Button
                variant="one"
                className={clsx('nav-modal__btn', {
                  selected: selectedId === item.id,
                  unselected: selectedId !== null && selectedId !== item.id,
                })}
                onMouseEnter={() => handleTitleHover(item.id)}
                aria-current={selectedId === item.id && 'true'}
              >
                {item.title}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      {selectedId && (
        <div className="nav-modal--items" aria-label="Список услуг">
          <ul className="nav-modal__list--items">
            {selectedItem?.list?.map((subItem, index) => (
              <li key={`${subItem.name}-${index}`}>
                <Button
                  href={subItem.href}
                  replace
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
            <div
              className="service-image"
              onMouseEnter={() => setSelectedService(selectedService)}
              role="img"
              aria-label={`Изображение услуги: ${selectedService.name}`}
            >
              <Image
                src={selectedService.image}
                alt={selectedService.name}
                fill
                {...(selectedService.name !== 'Видеорегистраторы' &&
                  selectedService.name !== 'Турникеты' && { objectFit: 'cover' })}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
