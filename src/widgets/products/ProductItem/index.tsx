import Image from 'next/image';
import Link from 'next/link';

import type { IProductItem } from '@/widgets/products/products.const';

import './_productItem.scss';

export const ProductItem = ({ itemData }: { itemData: IProductItem }) => {
  return (
    <li className="products__item">
      <Link
        href={`/products/${itemData.alias}`}
        aria-label={`${itemData.title} - ${itemData.amount} моделей`}
      >
        <div className="products__img">
          <Image
            src={itemData.image}
            alt={itemData.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="products__title">
          <data value={itemData.amount}>[{itemData.amount}]</data>
          <h4 className="products__section-title">{itemData.title}</h4>
        </div>
      </Link>
    </li>
  );
};
