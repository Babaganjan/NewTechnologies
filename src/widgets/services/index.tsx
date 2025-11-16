'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { Arrow } from '@/shared/icons';
import { H, Button } from '@/shared/ui';

import type { SelectedCategoryType } from '../header/navItemModal/nav-Item.types';

import { SliderServices } from './../../features/slider/SliderServices';
import { SERVICES_ITEMS } from './services.const';

import './_services.scss';

const isHovered = (hoveredId: number | null, itemId: number) => hoveredId === itemId;
const isOtherHovered = (hoveredId: number | null, itemId: number) =>
  hoveredId !== null && hoveredId !== itemId;

export const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<SelectedCategoryType | null>(null);

  const handleServiceToggle = (id: number) => {
    setActiveService(activeService === id ? null : id);
  };

  // Обработчик для основной кнопки
  const handleMouseEnter = (id: number) => {
    setHoveredService(id);
    setSelectedService(null);
  };

  // Обработчик для подкнопок
  const handleSelectService = (
    service: Pick<SelectedCategoryType, 'name' | 'image' | 'desc'>,
    index: number,
    parentId: number
  ) => {
    setHoveredService(parentId);
    setSelectedService({ ...service, index });
  };

  const handleServiceMouseLeave = () => {
    setSelectedService(null);
  };

  // Рендер подкнопок для десктопа
  const renderSubItems = (item: (typeof SERVICES_ITEMS)[0]) => (
    <div 
      className="services__sub-items desktop-only"
      onMouseEnter={() => setHoveredService(item.id)}
    >
      {item.list.map((subItem, index) => (
        <div key={`${subItem.name}-${index}`} className="services__sub-item-wrapper">
          <div className="services__sub-item-content">
            <div className="services__sub-item">
              <Button
                href={subItem.href}
                variant="two"
                className={clsx({ 
                  selected: selectedService?.name === subItem.name,
                  'other-red': hoveredService !== null && hoveredService !== item.id // Красный цвет для подкнопок других кнопок
                })}
                onMouseEnter={() => handleSelectService(subItem, index, item.id)}
                onMouseLeave={handleServiceMouseLeave}
                icon
              >
                {subItem.name}
              </Button>
            </div>

            {/* Показываем контент только если выбран этот subItem */}
            {selectedService?.name === subItem.name && (
              <div className="services__sub-item-info">
                {subItem.image && (
                  <div className="services__sub-item-image">
                    <Image
                      width={80}
                      height={60}
                      src={subItem.image}
                      alt={subItem.name}
                      className="services__image"
                    />
                  </div>
                )}

                {subItem.desc && (
                  <div className="services__sub-item-desc">
                    <p className="services__desc-text">{subItem.desc}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="services with-trapezoids">
      <div className="container services__container">
        <div className="services__wrapper-title">
          <H level={'2'} className="services__title title">
            Наши услуги
          </H>
        </div>

        <div className="services__content">
          <ul className="services__list flex">
            {SERVICES_ITEMS.map((item) => (
              <li 
                className="services__item item" 
                key={item.id}
              >
                <div className="item__inner">
                  {/* Мобильная версия кнопки */}
                  <div className="mobile-only">
                    <button
                      className={clsx('item__btn', {
                        'item__btn--active': activeService === item.id,
                      })}
                      onClick={() => handleServiceToggle(item.id)}
                    >
                      <span>{item.title}</span>
                      <Arrow
                        color="var(--text-white)"
                        width={25}
                        height={20}
                        className="service-icon"
                      />
                    </button>
                  </div>

                  {/* Десктопная версия кнопки */}
                  <div className="desktop-only">
                    <button
                      className={clsx('item__btn', {
                        'item__btn--hovered': isHovered(hoveredService, item.id),
                        'item__btn--other': isOtherHovered(hoveredService, item.id),
                        'item__btn--red': hoveredService !== null && hoveredService !== item.id // Красный цвет для других кнопок
                      })}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                    >
                      <span>{item.title}</span>
                    </button>
                  </div>
                </div>

                {renderSubItems(item)}

                {/* Мобильный слайдер */}
                <div className="services__slider-wrapper mobile-only">
                  {activeService === item.id && <SliderServices serviceId={item.id} />}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};