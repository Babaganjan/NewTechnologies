// // src/shared/ui/Modal/navItemModal/NavItemModal.tsx
// 'use client';
// import Image from 'next/image';
// import { useState } from 'react';

// import { Button } from '@/shared/ui';

// import type { NavListModalProps } from '../../types/NavListModalProps.types';

// import './navItemModal.scss';

// interface NavItemModalProps {
//   data?: NavListModalProps[];
//   onSelect?: (service: string) => void;
// }

// export const NavItemModal = ({
//   data = [],
//   onSelect = (service) => console.log(`Выбрана услуга: ${service}`),
// }: NavItemModalProps) => {
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [hoveredId, setHoveredId] = useState<number | null>(null);
//   const [selectedService, setSelectedService] = useState<{ name: string; image?: string } | null>(
//     null
//   );

//   // Обработчик: наведение на заголовок — hovered + показ подсписка
//   const handleTitleHover = (id: number) => {
//     setHoveredId(id);
//     setSelectedId(id);
//     setSelectedService(null);
//   };

//   // Для подсписка: наведение — выбор сервиса, но hovered на title сохраняется
//   const handleSelectService = (service: { name: string; image?: string }) => {
//     setSelectedService(service);
//     onSelect(service.name);
//   };

//   // Защита: если data пустой — ничего не рендерим
//   if (!data || data.length === 0) {
//     return null;
//   }

//   const selectedItem: NavListModalProps | undefined = data.find((item) => item.id === selectedId);

//   return (
//     <div className="wrapper-modal container">
//       <div className="nav-modal">
//         <ul className="nav-modal__list--title">
//           {data.map((item: NavListModalProps) => (
//             <li key={item.id}>
//               <Button
//                 variant="one"
//                 className={hoveredId === item.id ? 'hovered' : ''}
//                 onMouseEnter={() => handleTitleHover(item.id)}
//               >
//                 {item.title}
//               </Button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {selectedId && (
//         <div className="nav-modal--items flex">
//           <ul className="nav-modal__list--items">
//             {selectedItem?.list.map((subItem, index: number) => (
//               <li key={index}>
//                 <Button
//                   href="/"
//                   variant="two"
//                   onMouseEnter={() => handleSelectService(subItem)}
//                   icon
//                 >
//                   {subItem.name}
//                 </Button>
//               </li>
//             ))}
//           </ul>

//           {selectedService?.image && (
//             <div className="service-image">
//               <Image src={selectedService.image} alt={selectedService.name} fill />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// src/shared/ui/Modal/navItemModal/NavItemModal.tsx
// 'use client';
// import Image from 'next/image';
// import { useState } from 'react';

// import { Button } from '@/shared/ui';

// import type { NavListModalProps } from '../../types/NavListModalProps.types';

// import './navItemModal.scss';

// interface NavItemModalProps {
//   data?: NavListModalProps[];
//   onSelect?: (service: string) => void;
// }

// export const NavItemModal = ({
//   data = [],
//   onSelect = (service) => console.log(`Выбрана услуга: ${service}`),
// }: NavItemModalProps) => {
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [selectedService, setSelectedService] = useState<{ name: string; image?: string } | null>(
//     null
//   );

//   // Обработчик: наведение на заголовок — устанавливаем selectedId
//   const handleTitleHover = (id: number) => {
//     setSelectedId(id);
//     setSelectedService(null);
//   };

//   // Обработчик: уход со всего модального окна — сбрасываем состояние
//   const handleModalLeave = () => {
//     setSelectedId(null);
//     setSelectedService(null);
//   };

//   // Для подсписка: наведение — выбор сервиса
//   const handleSelectService = (service: { name: string; image?: string }) => {
//     setSelectedService(service);
//     onSelect(service.name);
//   };

//   // Защита: если data пустой — ничего не рендерим
//   if (!data || data.length === 0) {
//     return null;
//   }

//   const selectedItem: NavListModalProps | undefined = data.find((item) => item.id === selectedId);

//   return (
//     <div className="wrapper-modal container" onMouseLeave={handleModalLeave}>
//       <div className="nav-modal">
//         <ul className="nav-modal__list--title">
//           {data.map((item: NavListModalProps) => (
//             <li key={item.id}>
//               <Button
//                 variant="one"
//                 className={selectedId === item.id ? 'selected' : ''}
//                 onMouseEnter={() => handleTitleHover(item.id)}
//               >
//                 {item.title}
//               </Button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {selectedId && (
//         <div className="nav-modal--items flex">
//           <ul className="nav-modal__list--items">
//             {selectedItem?.list.map((subItem, index: number) => (
//               <li key={index}>
//                 <Button
//                   href="/"
//                   variant="two"
//                   onMouseEnter={() => handleSelectService(subItem)}
//                   icon
//                 >
//                   {subItem.name}
//                 </Button>
//               </li>
//             ))}
//           </ul>

//           {selectedService?.image && (
//             <div className="service-image">
//               <Image src={selectedService.image} alt={selectedService.name} fill />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

'use client';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/shared/ui';

import type { NavListModalProps } from '../../types/NavListModalProps.types';

import './navItemModal.scss';

interface NavItemModalProps {
  data?: NavListModalProps[];
  onSelect?: (service: string) => void;
}

export const NavItemModal = ({
  data = [],
  onSelect = (service) => console.log(`Выбрана услуга: ${service}`),
}: NavItemModalProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  // Расширим тип для selectedService, чтобы включить index как fallback (если name не уникален)
  const [selectedService, setSelectedService] = useState<{
    name: string;
    image?: string;
    index?: number;
  } | null>(null);

  // Обработчик: наведение на заголовок — устанавливаем selectedId и сбрасываем подвыбор
  const handleTitleHover = (id: number) => {
    setSelectedId(id);
    setSelectedService(null); // Сброс подвыбора при смене категории (но можно добавить дефолт: см. ниже)
    // Опционально: установить дефолтный сервис для немедленного показа изображения
    // const defaultItem = data.find(item => item.id === id)?.list?.[0];
    // if (defaultItem) setSelectedService({ name: defaultItem.name, image: defaultItem.image, index: 0 });
  };

  // Обработчик: уход со всего модального окна — полный сброс
  const handleModalLeave = () => {
    setSelectedId(null);
    setSelectedService(null);
  };

  // Для подсписка: наведение — выбор сервиса (состояние держится)
  const handleSelectService = (service: { name: string; image?: string }, index: number) => {
    setSelectedService({ ...service, index }); // Добавляем index для fallback
    onSelect(service.name);
  };

  // ← Убрано: handleSubmenuLeave — больше не сбрасываем при уходе из подменю!

  // Защита: если data пустой — ничего не рендерим
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
          {/* ← Убрано onMouseLeave */}
          <ul className="nav-modal__list--items">
            {selectedItem?.list?.map((subItem, index: number) => (
              <li key={index}>
                <Button
                  href="/"
                  variant="two"
                  // ← Улучшено: класс на основе name ИЛИ index (fallback, если name дублируется)
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
              // ← Добавлено: onMouseEnter для "запереть" состояние на изображении (предотвращает сброс при gap)
              onMouseEnter={() => {
                if (selectedService) {
                  // "Освежаем" состояние, чтобы оно не сбросилось (если есть другие обработчики)
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
