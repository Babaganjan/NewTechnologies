import Image from 'next/image';
import Link from 'next/link';

import { H } from '@/shared/ui';

import { seeAlsoTypeData } from './helper/seeAlsoTypeData';
import './seeAlso.scss';

export const SeeAlso = ({ type }: { type: string }) => {
  const data = seeAlsoTypeData(type);

  return (
    <section className="seeAlso">
      <div className="seeAlso__container container">
        <div className="seeAlso__title">
          <H level="2" variant="light">
            смотрите также
          </H>
        </div>
        <h3 className="seeAlso__subtitle">Дополнительные направления по безопасности</h3>
        <ul className="seeAlso__list">
          {data.map((item) => (
            <li className="seeAlso__item" key={item.id}>
              <Link href={item.href}>
                <Image src={item.image} alt={item.title} width={110} height={110} />

                <H level="5" variant="light">
                  {item.title}
                </H>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
