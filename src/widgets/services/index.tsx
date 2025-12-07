'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { Arrow } from '@/shared/icons';
import { Button, H } from '@/shared/ui';

import type { SelectedCategoryType } from '../header/navItemModal/nav-Item.types';

import { SERVICES_ITEMS } from './services.const';
import { SliderServices } from './slider/SliderServices';

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

  const handleMouseEnter = (id: number) => {
    setHoveredService(id);
    setSelectedService(null);
  };

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
                  'other-red': hoveredService !== null && hoveredService !== item.id,
                })}
                onMouseEnter={() => handleSelectService(subItem, index, item.id)}
                onMouseLeave={handleServiceMouseLeave}
              >
                {subItem.name}
              </Button>
            </div>

            {selectedService?.name === subItem.name && (
              <div className="services__sub-item-info">
                {subItem.image && (
                  <div className="services__sub-item-image">
                    <Image
                      src={subItem.image}
                      alt={subItem.name}
                      className="services__image"
                      objectFit="cover"
                      fill
                    />
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
      <motion.div
        className="container services__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
      >
        <motion.div variants={fadeInUp} className="services__wrapper-title">
          <H level={'2'} className="services__title title">
            Наши услуги
          </H>
        </motion.div>

        <div className="services__content">
          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.5, delayChildren: 0.2 },
              },
            }}
            className="services__list flex"
          >
            {SERVICES_ITEMS.map((item) => (
              <motion.li variants={fadeInUp} className="services__item item" key={item.id}>
                <div className="item__inner">
                  <div className="mobile-only">
                    <button
                      className={clsx('item__btn', {
                        'item__btn--active': activeService === item.id,
                      })}
                      onClick={() => handleServiceToggle(item.id)}
                      aria-expanded={activeService === item.id}
                      aria-controls={`service-content-${item.id}`}
                    >
                      <span>{item.title}</span>
                      <Arrow
                        color="var(--text-white)"
                        width={25}
                        height={20}
                        className="service-icon"
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <div className="desktop-only">
                    <button
                      className={clsx('item__btn', {
                        'item__btn--hovered': isHovered(hoveredService, item.id),
                        'item__btn--other': isOtherHovered(hoveredService, item.id),
                        'item__btn--red': hoveredService !== null && hoveredService !== item.id,
                      })}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      aria-label={item.title}
                    >
                      <span>{item.title}</span>
                    </button>
                  </div>
                </div>

                {renderSubItems(item)}

                <div
                  className="services__slider-wrapper mobile-only"
                  id={`service-content-${item.id}`}
                  role="region"
                  aria-label={`Услуги категории ${item.title}`}
                >
                  {activeService === item.id && <SliderServices serviceId={item.id} />}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};
