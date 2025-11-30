import Image from 'next/image';

import type { SchemeItem } from '@/shared/types/products.types';
import { Button } from '@/shared/ui';

interface AssemblySchemeProps {
  items: SchemeItem[];
}

export const AssemblyScheme = ({ items }: AssemblySchemeProps) => {
  return (
    <div className="assemblyScheme">
      <div className="assemblyScheme__visual">
        <Image
          src="/img/SpecImages/serverCabin.webp"
          alt="Схема сборки"
          fill
          loading="eager"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
        />
      </div>

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
          заказать шкаф
        </Button>
      </div>
    </div>
  );
};
