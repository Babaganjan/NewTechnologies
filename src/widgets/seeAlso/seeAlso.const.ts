interface ISeeAlsoData {
  id: number;
  image: string;
  title: string;
  href: string;
}

export const SEEALSO_DATA: ISeeAlsoData[] = [
  {
    id: 1,
    image: '/img/alsoSeeBlock/opoveshchenie.webp',
    title: 'Системы оповещения',
    href: '/services/opoveshchenie',
  },
  {
    id: 2,
    image: '/img/alsoSeeBlock/ops.webp',
    title: 'Охранно-пожарная сигнализация',
    href: '/services/ops',
  },
  {
    id: 3,
    image: '/img/alsoSeeBlock/pozhartushenie.webp',
    title: 'Системы пожаротушения',
    href: '/services/pozhartushenie',
  },
  {
    id: 4,
    image: '/img/alsoSeeBlock/skd.webp',
    title: 'Системы контроля доступом',
    href: '/services/skd',
  },
  {
    id: 5,
    image: '/img/alsoSeeBlock/videonabludenie.webp',
    title: 'Системы видеонаблюдения',
    href: '/services/videonabludenie',
  },
];
