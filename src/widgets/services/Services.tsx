// 'use client';
// import clsx from 'clsx';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// import { Arrow } from '@/shared/icons';
// import { H, Button } from '@/shared/ui';

// import type {
//   NavListModalProps,
//   SelectedCategoryType,
// } from '../header/navItemModal/nav-Item.types';

// import { SliderServices } from './../../features/slider/SliderServices';
// import { SERVICES_ITEMS } from './services.const';

// import './_services.scss';

// // Хук для определения мобильной версии (ширина < 768px)
// const useIsMobile = (breakpoint: number = 768) => {
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < breakpoint);
//     };

//     checkIsMobile(); // Проверка при монтировании
//     window.addEventListener('resize', checkIsMobile);

//     return () => window.removeEventListener('resize', checkIsMobile);
//   }, [breakpoint]);

//   return isMobile;
// };

// export const Services = () => {
//   const isMobile = useIsMobile();
//   const [activeService, setActiveService] = useState<number | null>(null);
//   const [selectedService, setSelectedService] = useState<SelectedCategoryType | null>(null);

//   const toggleSlider = (id: number) => {
//     if (activeService === id) {
//       setActiveService(null);
//     } else {
//       setActiveService(id);
//     }
//   };

//   const handleSelectService = (
//     service: Pick<SelectedCategoryType, 'name' | 'image'>,
//     index: number
//   ) => {
//     setSelectedService({ ...service, index });
//   };

//   return (
//     <section className="services with-trapezoids">
//       <div className="container services__container">
//         <div className="services__wrapper-title">
//           <H level={'2'} className="services__title title">
//             Наши услуги
//           </H>
//         </div>

//         <ul className="services__list flex">
//           {SERVICES_ITEMS.map((item) => (
//             <li className="services__item item" key={item.id}>
//               {/* Основная кнопка */}
//               <div className="item__inner">
//                 {isMobile ? (
//                   <button
//                     className={`item__btn ${activeService === item.id ? 'item__btn--active' : ''}`}
//                     onClick={() => toggleSlider(item.id)}
//                   >
//                     <span>{item.title}</span>
//                     <Arrow
//                       color="var(--text-white)"
//                       width={25}
//                       height={20}
//                       className="service-icon"
//                     />
//                   </button>
//                 ) : (
//                   <button className="item__btn">
//                     <span>{item.title}</span>
//                   </button>
//                 )}
//               </div>

//               {/* Подкнопки - всегда видны на десктопе */}
//               {!isMobile && (
//                 <div className="services__sub-items">
//                   {item.list.map((subItem, index) => (
//                     <div key={`${subItem.name}-${index}`} className="services__sub-item">
//                       <Button
//                         href={subItem.href}
//                         variant="two"
//                         className={clsx(selectedService?.name === subItem.name && 'selected')}
//                         onMouseEnter={() => handleSelectService(subItem, index)}
//                         icon
//                       >
//                         {subItem.name}
//                       </Button>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Мобильная версия - слайдер */}
//               {isMobile && activeService === item.id && (
//                 <div className="services__slider-wrapper">
//                   <SliderServices serviceId={item.id} />
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>

//         {!isMobile && selectedService?.image && (
//           <div className="services__image-preview">
//             <Image
//               width={200}
//               height={150}
//               src={selectedService.image}
//               alt={selectedService.name}
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// 'use client';
// import clsx from 'clsx';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// import { Arrow } from '@/shared/icons';
// import { H, Button } from '@/shared/ui';

// import type { SelectedCategoryType } from '../header/navItemModal/nav-Item.types';

// import { SliderServices } from './../../features/slider/SliderServices';
// import { SERVICES_ITEMS } from './services.const';

// import './_services.scss';

// // Хук для определения мобильной версии (ширина < 768px)
// const useIsMobile = (breakpoint: number = 768) => {
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < breakpoint);
//     };

//     checkIsMobile(); // Проверка при монтировании
//     window.addEventListener('resize', checkIsMobile);

//     return () => window.removeEventListener('resize', checkIsMobile);
//   }, [breakpoint]);

//   return isMobile;
// };

// export const Services = () => {
//   const isMobile = useIsMobile();
//   const [activeService, setActiveService] = useState<number | null>(null);
//   const [hoveredService, setHoveredService] = useState<number | null>(null);
//   const [selectedService, setSelectedService] = useState<SelectedCategoryType | null>(null);

//   const toggleSlider = (id: number) => {
//     if (activeService === id) {
//       setActiveService(null);
//     } else {
//       setActiveService(id);
//     }
//   };

//   const handleMouserEnter = (id: number) => {
//     setHoveredService(id);
//   };

//   const handleMouserLeave = () => {
//     setHoveredService(null);
//   };

//   const handleSelectService = (
//     service: Pick<SelectedCategoryType, 'name' | 'image'>,
//     index: number
//   ) => {
//     setSelectedService({ ...service, index });
//   };

//   const handleServiceMouseLeave = () => {
//     setSelectedService(null);
//   };

//   return (
//     <section className="services with-trapezoids">
//       <div className="container services__container">
//         <div className="services__wrapper-title">
//           <H level={'2'} className="services__title title">
//             Наши услуги
//           </H>
//         </div>

//         <div className="services__content">
//           <ul className="services__list flex">
//             {SERVICES_ITEMS.map((item) => (
//               <li className="services__item item" key={item.id}>
//                 {/* Основная кнопка */}
//                 <div className="item__inner">
//                   {isMobile ? (
//                     <button
//                       className={`item__btn ${activeService === item.id ? 'item__btn--active' : ''}`}
//                       onClick={() => toggleSlider(item.id)}
//                     >
//                       <span>{item.title}</span>
//                       <Arrow
//                         color="var(--text-white)"
//                         width={25}
//                         height={20}
//                         className="service-icon"
//                       />
//                     </button>
//                   ) : (
//                     <button
//                       onMouseEnter={() => handleMouserEnter(item.id)}
//                       onMouseLeave={handleMouserLeave}
//                       className={clsx('item__btn', {
//                         'item__btn--hovered': hoveredService === item.id,
//                         'item__btn--other': hoveredService !== null && hoveredService !== item.id,
//                       })}
//                     >
//                       <span>{item.title}</span>
//                     </button>
//                   )}
//                 </div>

//                 {/* Подкнопки - всегда видны на десктопе */}
//                 {!isMobile && (
//                   <div className="services__sub-items">
//                     {item.list.map((subItem, index) => (
//                       <div key={`${subItem.name}-${index}`} className="services__sub-item-wrapper">
//                         <div className="services__sub-item-content">
//                           {/* Подкнопка */}
//                           <div className="services__sub-item">
//                             <Button
//                               href={subItem.href}
//                               variant="two"
//                               className={clsx(selectedService?.name === subItem.name && 'selected')}
//                               onMouseEnter={() => handleSelectService(subItem, index)}
//                               onMouseLeave={handleServiceMouseLeave}
//                               icon
//                             >
//                               {subItem.name}
//                             </Button>
//                           </div>

//                           {/* Картинка рядом с подкнопкой */}
//                           {selectedService?.name === subItem.name && subItem.image && (
//                             <div className="services__sub-item-image">
//                               <Image
//                                 width={80}
//                                 height={60}
//                                 src={subItem.image}
//                                 alt={subItem.name}
//                                 className="services__image"
//                               />
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Мобильная версия - слайдер */}
//                 {isMobile && activeService === item.id && (
//                   <div className="services__slider-wrapper">
//                     <SliderServices serviceId={item.id} />
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// 'use client';
// import clsx from 'clsx';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// import { Arrow } from '@/shared/icons';
// import { H, Button } from '@/shared/ui';

// import type { SelectedCategoryType } from '../header/navItemModal/nav-Item.types';

// import { SliderServices } from './../../features/slider/SliderServices';
// import { SERVICES_ITEMS } from './services.const';

// import './_services.scss';

// // Улучшенный хук для определения мобильной версии
// const useIsMobile = (breakpoint: number = 768) => {
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   useEffect(() => {
//     const checkIsMobile = () => setIsMobile(window.innerWidth < breakpoint);

//     checkIsMobile();
//     window.addEventListener('resize', checkIsMobile);

//     return () => window.removeEventListener('resize', checkIsMobile);
//   }, [breakpoint]);

//   return isMobile;
// };

// // Вспомогательные функции для лучшей читаемости
// const isHovered = (hoveredId: number | null, itemId: number) => hoveredId === itemId;
// const isOtherHovered = (hoveredId: number | null, itemId: number) =>
//   hoveredId !== null && hoveredId !== itemId;

// export const Services = () => {
//   const isMobile = useIsMobile();
//   const [activeService, setActiveService] = useState<number | null>(null);
//   const [hoveredService, setHoveredService] = useState<number | null>(null);
//   const [selectedService, setSelectedService] = useState<SelectedCategoryType | null>(null);

//   // Объединенные обработчики
//   const handleServiceToggle = (id: number) => {
//     setActiveService(activeService === id ? null : id);
//   };

//   const handleMouseEnter = (id: number) => setHoveredService(id);
//   const handleMouseLeave = () => setHoveredService(null);

//   const handleSelectService = (
//     service: Pick<SelectedCategoryType, 'name' | 'image'>,
//     index: number
//   ) => {
//     setSelectedService({ ...service, index });
//   };

//   const handleServiceMouseLeave = () => setSelectedService(null);

//   // Рендер подкнопок для десктопа
//   const renderSubItems = (item: (typeof SERVICES_ITEMS)[0]) => (
//     <div className="services__sub-items">
//       {item.list.map((subItem, index) => (
//         <div key={`${subItem.name}-${index}`} className="services__sub-item-wrapper">
//           <div className="services__sub-item-content">
//             <div className="services__sub-item">
//               <Button
//                 href={subItem.href}
//                 variant="two"
//                 className={clsx({ selected: selectedService?.name === subItem.name })}
//                 onMouseEnter={() => handleSelectService(subItem, index)}
//                 onMouseLeave={handleServiceMouseLeave}
//                 icon
//               >
//                 {subItem.name}
//               </Button>
//             </div>

//             {selectedService?.name === subItem.name && subItem.image && (
//               <div className="services__sub-item-image">
//                 <Image
//                   width={80}
//                   height={60}
//                   src={subItem.image}
//                   alt={subItem.name}
//                   className="services__image"
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   // Рендер кнопки в зависимости от платформы
//   const renderServiceButton = (item: (typeof SERVICES_ITEMS)[0]) => {
//     if (isMobile) {
//       return (
//         <button
//           className={clsx('item__btn', { 'item__btn--active': activeService === item.id })}
//           onClick={() => handleServiceToggle(item.id)}
//         >
//           <span>{item.title}</span>
//           <Arrow color="var(--text-white)" width={25} height={20} className="service-icon" />
//         </button>
//       );
//     }

//     return (
//       <button
//         className={clsx('item__btn', {
//           'item__btn--hovered': isHovered(hoveredService, item.id),
//           'item__btn--other': isOtherHovered(hoveredService, item.id),
//         })}
//         onMouseEnter={() => handleMouseEnter(item.id)}
//         onMouseLeave={handleMouseLeave}
//       >
//         <span>{item.title}</span>
//       </button>
//     );
//   };

//   return (
//     <section className="services with-trapezoids">
//       <div className="container services__container">
//         <div className="services__wrapper-title">
//           <H level={'2'} className="services__title title">
//             Наши услуги
//           </H>
//         </div>

//         <div className="services__content">
//           <ul className="services__list flex">
//             {SERVICES_ITEMS.map((item) => (
//               <li className="services__item item" key={item.id}>
//                 <div className="item__inner">{renderServiceButton(item)}</div>

//                 {!isMobile && renderSubItems(item)}

//                 {isMobile && activeService === item.id && (
//                   <div className="services__slider-wrapper">
//                     <SliderServices serviceId={item.id} />
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

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

// Вспомогательные функции для лучшей читаемости
const isHovered = (hoveredId: number | null, itemId: number) => hoveredId === itemId;
const isOtherHovered = (hoveredId: number | null, itemId: number) =>
  hoveredId !== null && hoveredId !== itemId;

export const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<SelectedCategoryType | null>(null);

  // Объединенные обработчики
  const handleServiceToggle = (id: number) => {
    setActiveService(activeService === id ? null : id);
  };

  const handleMouseEnter = (id: number) => setHoveredService(id);
  const handleMouseLeave = () => setHoveredService(null);

  const handleSelectService = (
    service: Pick<SelectedCategoryType, 'name' | 'image'>,
    index: number
  ) => {
    setSelectedService({ ...service, index });
  };

  const handleServiceMouseLeave = () => setSelectedService(null);

  // Рендер подкнопок для десктопа
  const renderSubItems = (item: (typeof SERVICES_ITEMS)[0]) => (
    <div className="services__sub-items desktop-only">
      {item.list.map((subItem, index) => (
        <div key={`${subItem.name}-${index}`} className="services__sub-item-wrapper">
          <div className="services__sub-item-content">
            <div className="services__sub-item">
              <Button
                href={subItem.href}
                variant="two"
                className={clsx({ selected: selectedService?.name === subItem.name })}
                onMouseEnter={() => handleSelectService(subItem, index)}
                onMouseLeave={handleServiceMouseLeave}
                icon
              >
                {subItem.name}
              </Button>
            </div>

            {selectedService?.name === subItem.name && subItem.image && (
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
              <li className="services__item item" key={item.id}>
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
                      })}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
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
