import Image from 'next/image';
import Link from 'next/link';

import './_products-block.scss';
import { PRODUCTS_DATA } from './products.const';

export const Products = () => {
  return (
    <section className="products" aria-labelledby="products-title">
      <div className="products__container container">
        <div className="products__wrapper-text">
          <h2 id="products-title" className="products-title">
            Наша продукция
          </h2>
          <p className="products-subtitle">
            <span>надежное Оборудование,</span> соответствующее строгим
            <span>отраслевым</span> стандартам
          </p>
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
