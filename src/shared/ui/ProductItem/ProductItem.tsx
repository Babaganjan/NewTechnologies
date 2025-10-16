import Image from 'next/image';
import Link from 'next/link';

import type { IProductItem } from '@/widgets/products/products.const';

import './_productItem.scss';

export const ProductItem = ({ itemData }: { itemData: IProductItem }) => {
  return (
    <li className="products__item">
      <Link href={`/products/${itemData.alias}`}>
        <div className="products__img">
          <Image
            src={itemData.image}
            alt={itemData.title}
            width={itemData.width}
            height={itemData.height}
          />
        </div>
        <div className="products__title">
          <span>[{itemData.amount}]</span>
          <h5>{itemData.title}</h5>
        </div>
      </Link>
    </li>
  );
};
