// // src/shared/ui/Modal/serviceModal/ServiceModal.tsx
'use client';
import { useState, useEffect } from 'react';

import { H } from '@/shared/ui';

import type { NavListModalProps } from '../../types/NavListModalProps.types';

import { DATA_SERVICE_MODAL } from './nav-item.const';

import './navItemModal.scss';

// Типизация props компонента
interface NavItemModalProps {
  onSelect?: (service: string) => void; // Callback для выбора услуги (опциональный)
}

export const NavItemModal: React.FC<NavItemModalProps> = ({
  onSelect = (service) => console.log(`Выбрана услуга: ${service}`),
}) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<{ name: string; image?: string } | null>(
    null
  );
  const [isMounted, setIsMounted] = useState(false);

  // Решение проблемы гидратации - рендерим только на клиенте
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSelectItem = (id: number) => {
    setSelectedId(id);
    setSelectedService(null); // Сбрасываем выбранную услугу при выборе категории
  };

  const handleSelectService = (service: { name: string; image?: string }) => {
    setSelectedService(service); // Устанавливаем выбранную услугу для отображения картинки
    onSelect(service.name); // Вызываем callback с именем услуги
  };

  // Если выбран item — показываем его подсписок
  const selectedItem: NavListModalProps | undefined = DATA_SERVICE_MODAL.find(
    (item) => item.id === selectedId
  );

  // Не рендерим на сервере, чтобы избежать mismatch
  if (!isMounted) {
    return (
      <div className="wrapper-modal flex">
        <div className="nav-modal">
          <ul className="nav-modal__list--title">
            {DATA_SERVICE_MODAL.map((item: NavListModalProps) => (
              <li className="item" key={item.id}>
                <button className="item__button">
                  <H level={'4'} variant="light" className="item__title">
                    {item.title}
                  </H>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper-modal flex">
      <div className="nav-modal">
        <ul className="nav-modal__list--title">
          {DATA_SERVICE_MODAL.map((item: NavListModalProps) => (
            <li className="item" key={item.id}>
              <button className="item__button" onClick={() => handleSelectItem(item.id)}>
                <H level={'4'} variant="light" className="item__title">
                  {item.title}
                </H>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedId && (
        <div className="nav-modal">
          <ul className="nav-modal__list--items">
            {selectedItem?.list.map((subItem, index: number) => (
              <li className="sub-item" key={index}>
                <button className="sub-item__button" onClick={() => handleSelectService(subItem)}>
                  <H level={'5'} variant="light" className="sub-item__title">
                    {subItem.name}
                  </H>
                </button>
              </li>
            ))}
          </ul>

          {selectedService?.image && (
            <div className="service-image">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
