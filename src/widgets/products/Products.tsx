import Image from 'next/image';
import Link from 'next/link';

import { Heading } from '@/shared/ui/Heading';
import { ProductionHeading } from '@/shared/ui/HeadingSvg/ProductionHeading';

import { PRODUCTS_DATA } from './products.const';
import './_products-block.scss';

export const Products = () => {
  return (
    <section className="products" aria-labelledby="products-title">
      <div className="products__container container">
        <div className="products__wrapper-text">
          <Heading level={2} variant="light" id="products-title" className="products-title title">
            {/* Наша продукция */}
            <ProductionHeading />
          </Heading>
          <Heading level={3} variant="light" className="products-subtitle">
            Надежное Оборудование,<span>соответствующее строгим</span> отраслевым{' '}
            <span>стандартам</span>
          </Heading>
        </div>
        <ul className="products__list">
          {PRODUCTS_DATA.map((item) => (
            <li className="products__item" key={item.id}>
              <Link href={`/products/${item.alias}`}>
                <div className="products__img">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                  />
                </div>
                <div className="products__title">
                  <span>[{item.amount}]</span>
                  <h5>{item.title}</h5>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
