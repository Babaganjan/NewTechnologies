import Image from 'next/image';
import Link from 'next/link';

import { AnimatedCard } from '@/shared/animations/AnimatedCard';
import type { IProductItem } from '@/widgets/products/products.const';

import './_productItem.scss';

export const ProductItem = ({ itemData }: { itemData: IProductItem }) => {
  return (
    <AnimatedCard className="products__item" enableHover={false}>
      <Link
        href={`/products/${itemData.alias}`}
        aria-label={`${itemData.title} - ${itemData.amount} моделей`}
      >
        <div className="products__img">
          <Image
            src={itemData.image}
            alt={itemData.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="products__title">
          <data value={itemData.amount}>[{itemData.amount}]</data>
          <h4 className="products__section-title">{itemData.title}</h4>
        </div>
      </Link>
    </AnimatedCard>
  );
};
