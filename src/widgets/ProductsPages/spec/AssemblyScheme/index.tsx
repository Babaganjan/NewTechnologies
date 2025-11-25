import Image from 'next/image';

import { Button } from '@/shared/ui';

import type { AssemblyItem } from '../spec.types';

interface AssemblySchemeProps {
  items: AssemblyItem[];
}

export const AssemblyScheme = ({ items }: AssemblySchemeProps) => {
  return (
    <div className="assemblyScheme">
      {/* ЛЕВАЯ КОЛОНКА: Схема */}
      <div className="assemblyScheme__visual">
        <Image
          src="/img/SpecImages/serverCabin.webp"
          alt="Схема сборки"
          fill
          style={{ objectFit: 'contain', padding: '20px' }}
        />
      </div>

      {/* ПРАВАЯ КОЛОНКА: Список + Кнопка */}
      <div className="assemblyScheme__content">
        <ul className="assemblyScheme__list">
          {items.map((item) => (
            <li key={item.id} className="assemblyScheme__item">
              <span className="assemblyScheme__title">{item.title}</span>
              <span className="assemblyScheme__desc">{item.description}</span>
            </li>
          ))}
        </ul>

        <Button variant="feedback" icon className="assemblyScheme__btn">
          заказать камеру
        </Button>
      </div>
    </div>
  );
};
