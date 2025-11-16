import Image from 'next/image';
import Link from 'next/link';

import { H } from '@/shared/ui';
import type { IProductItem } from '@/widgets/products/products.const';

import './_productItem.scss';

export const ProductItem = ({ itemData }: { itemData: IProductItem }) => {
  return (
    <li className="products__item">
      <Link href={`/products/${itemData.alias}`} aria-label={`${itemData.title} - ${itemData.amount} моделей`}>
        <div className="products__img">
          <Image
            src={itemData.image}
            alt={itemData.title}
            width={itemData.width}
            height={itemData.height}
          />
        </div>
        <div className="products__title">
          <span aria-label={`${itemData.amount} моделей`}>[{itemData.amount}]</span>
          <H level={'5'} variant="dark">
            {itemData.title}
          </H>
        </div>
      </Link>
    </li>
  );
};
