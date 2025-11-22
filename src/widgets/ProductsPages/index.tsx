import { GallerySpec } from './gallerySpec';
import { KeySpecs } from './keySpec';
import type { SpecItem } from './keySpec/keySpec.types';
import { SizeSpec } from './sizeSpec';
import { Spec } from './spec';

export const ProductsPages = () => {
  const specsData: SpecItem[] = [
    {
      id: 1,
      title: 'Входящая/исходящая пропускная способность',
      value: '320',
      unit: 'Мбит/сек',
    },
    {
      id: 2,
      title: 'Поддержка подключения до 8 IP-камер',
      description:
        'Позволяет создать полноценную систему видеонаблюдения с охватом всех критических зон объекта.',
    },
    {
      id: 3,
      title: 'Поддержка обновления прошивки через облако',
      description:
        'Обновляйте систему видеонаблюдения автоматически через интернет — без лишних проводов.',
    },
    {
      id: 4,
      title: 'Наличие 1 HDMI и 1 VGA видеовыхода',
      description:
        'Дает возможность подключить два монитора одновременно — современный телевизор (4K) и офисный монитор.',
    },
    {
      id: 5,
      title: '1 SATA',
      unit: 'до 8 ТБ',
      description:
        'Позволяет установить 1 жесткий диск для записи и длительного хранения видеоархива.',
    },
    {
      id: 6,
      title: '1 Сетевой порт RJ-45 10/100 Мбит/с',
      description:
        'Пропускная способность до 100 Мбит/с гарантирует, что ни одно событие не будет пропущено.',
    },
  ];

  const myImages = ['/img/image3.png', '/img/image2.png', '/img/image3.png'];

  return (
    <>
      <GallerySpec images={myImages} />
      <KeySpecs items={specsData} />
      <SizeSpec />
      <Spec />
    </>
  );
};
