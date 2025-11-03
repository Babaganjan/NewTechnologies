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

// interface ServicesProps {
//   data?: NavListModalProps[];
// }

// export const Services = ({ data = [] }: ServicesProps) => {
//   const isMobile = useIsMobile(); // true на мобильной (<768px)

//   const [activeService, setActiveService] = useState<number | null>(null);
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [selectedService, setSelectedService] = useState<SelectedCategoryType | null>(null);

//   // Логика для слайдера (мобильная версия)
//   const toggleSlider = (id: number) => {
//     if (activeService === id) {
//       setActiveService(null);
//     } else {
//       setActiveService(id);
//     }
//   };

//   // Логика для hover (десктопная версия)
//   const handleTitleHover = (id: number) => {
//     setSelectedId(id);
//     setSelectedService(null);
//   };

//   const handleModalLeave = () => {
//     setSelectedId(null);
//     setSelectedService(null);
//   };

//   const handleSelectService = (
//     service: Pick<SelectedCategoryType, 'name' | 'image'>,
//     index: number
//   ) => {
//     setSelectedService({ ...service, index });
//   };

//   const selectedItem = data.find((item) => item.id === selectedId);

//   const handleActiveMouseEnter = (id: number) => {
//     setActiveService(id);
//   };

//   const handleActiveMouseLeave = () => {
//     setActiveService(null);
//     setSelectedId(null);
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
//         <ul className="services__list flex">
//           {SERVICES_ITEMS.map((item) => (
//             <li className="services__item item" key={item.id}>
//               <div className="item__inner flex">
//                 {/* Условный рендеринг кнопки: с Arrow на мобильной, без на десктопе */}
//                 {isMobile ? (
//                   <button
//                     className={`item__btn ${activeService === item.id ? 'item__btn--active' : ''}`}
//                     onClick={() => toggleSlider(item.id)}
//                     aria-label={`Показать слайдер для ${item.title}`}
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
//                   <button
//                     className={`item__btn ${activeService === item.id ? 'item__btn--hovered' : ''}`}
//                     onMouseEnter={() => handleActiveMouseEnter(item.id)}
//                     onMouseLeave={handleActiveMouseLeave}
//                   >
//                     <span>{item.title}</span>
//                     {/* Нет Arrow на десктопе */}
//                   </button>
//                 )}
//               </div>
//               {/* Условный рендеринг контента: слайдер на мобильной, nav-modal на десктопе */}
//               {isMobile && activeService === item.id && (
//                 <div className="services__slider-wrapper">
//                   <SliderServices serviceId={item.id} />
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Десктопный блок (nav-modal) появляется только на десктопе при activeService */}
//         {!isMobile && activeService && (
//           <div className="nav-modal" onMouseLeave={handleModalLeave}>
//             <ul className="nav-modal__list--title">
//               {data.map((item) => (
//                 <li key={item.id}>
//                   <Button
//                     variant="one"
//                     className={clsx(selectedId === item.id && 'selected')}
//                     onMouseEnter={() => handleTitleHover(item.id)}
//                   >
//                     {item.title}
//                   </Button>
//                 </li>
//               ))}
//             </ul>

//             {selectedId && selectedItem && (
//               <div className="nav-modal--items flex">
//                 <ul className="nav-modal__list--items">
//                   {selectedItem.list?.map((subItem, index) => (
//                     <li key={`${subItem.name}-${index}`}>
//                       <Button
//                         href={subItem.href}
//                         variant="two"
//                         className={clsx(selectedService?.name === subItem.name && 'selected')}
//                         onMouseEnter={() => handleSelectService(subItem, index)}
//                         icon
//                       >
//                         {subItem.name}
//                       </Button>
//                     </li>
//                   ))}
//                 </ul>
//                 {selectedService?.image && (
//                   <div
//                     className="service-image"
//                     onMouseEnter={() => setSelectedService(selectedService)}
//                   >
//                     <Image src={selectedService.image} alt={selectedService.name} fill />
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };
'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { Arrow } from '@/shared/icons';
import { H, Button } from '@/shared/ui';

import type {
  NavListModalProps,
  SelectedCategoryType,
} from '../header/navItemModal/nav-Item.types';

import { SliderServices } from './../../features/slider/SliderServices';
import { SERVICES_ITEMS } from './services.const';

import './_services.scss';

// Хук для определения мобильной версии (ширина < 768px)
const useIsMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkIsMobile(); // Проверка при монтировании
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);

  return isMobile;
};

interface ServicesProps {
  data?: NavListModalProps[];
}

export const Services = () => {
  const isMobile = useIsMobile(); // true на мобильной (<768px)

  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<SelectedCategoryType | null>(null);

  // Логика для слайдера (мобильная версия)
  const toggleSlider = (id: number) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
    }
  };

  const handleModalLeave = () => {
    setActiveService(null); // Теперь закрывает модал при уходе мыши с него
    setSelectedId(null);
    setSelectedService(null);
  };

  const handleSelectService = (
    service: Pick<SelectedCategoryType, 'name' | 'image'>,
    index: number
  ) => {
    setSelectedService({ ...service, index });
  };

  const handleActiveMouseEnter = (id: number) => {
    setActiveService(id);
    setSelectedId(id); // Добавлено: сразу выбираем элемент для модала
    setSelectedService(null); // Сбрасываем, чтобы не было старого выделения
  };

  const selectedItem = SERVICES_ITEMS.find((item) => item.id === selectedId);

  return (
    <section className="services with-trapezoids">
      <div className="container services__container">
        <div className="services__wrapper-title">
          <H level={'2'} className="services__title title">
            Наши услуги
          </H>
        </div>
        <ul className="services__list flex">
          {SERVICES_ITEMS.map((item) => (
            <li className="services__item item" key={item.id}>
              <div className="item__inner flex">
                {/* Условный рендеринг кнопки: с Arrow на мобильной, без на десктопе */}
                {isMobile ? (
                  <button
                    className={`item__btn ${activeService === item.id ? 'item__btn--active' : ''}`}
                    onClick={() => toggleSlider(item.id)}
                    aria-label={`Показать слайдер для ${item.title}`}
                  >
                    <span>{item.title}</span>
                    <Arrow
                      color="var(--text-white)"
                      width={25}
                      height={20}
                      className="service-icon"
                    />
                  </button>
                ) : (
                  <button
                    className={`item__btn ${activeService === item.id ? 'item__btn--hovered' : ''}`}
                    onMouseEnter={() => handleActiveMouseEnter(item.id)} // Только открывает модал
                    // Убрал onMouseLeave — теперь модал закрывается только при уходе с него
                  >
                    <span>{item.title}</span>
                    {/* Нет Arrow на десктопе */}
                  </button>
                )}
              </div>
              {/* Условный рендеринг контента: слайдер на мобильной, nav-modal на десктопе */}
              {isMobile && activeService === item.id && (
                <div className="services__slider-wrapper">
                  <SliderServices serviceId={item.id} />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Десктопный блок (nav-modal) появляется только на десктопе при activeService */}
        {!isMobile && activeService && (
          <div className="nav-modal" onMouseLeave={handleModalLeave}>
            {selectedId &&
              selectedItem && ( // Теперь selectedId ставится сразу, и selectedItem найдётся
                <div className="nav-modal--items flex">
                  <ul className="nav-modal__list--items">
                    {selectedItem.list?.map((subItem, index) => (
                      <li key={`${subItem.name}-${index}`}>
                        <Button
                          href={subItem.href}
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
                    >
                      <Image
                        width={40}
                        height={40}
                        src={selectedService.image}
                        alt={selectedService.name}
                      />
                    </div>
                  )}
                </div>
              )}
          </div>
        )}
      </div>
    </section>
  );
};
