export interface OurAchievementsItem {
  subtitle: string;
  sliderTitle?: string;
  sliderHiglightTitle: string;
  sliderList: string[];
  city: string;
}

export interface OurAchievementsData {
  mainTitle: string;
  data: OurAchievementsItem[];
}

export const OURACHIEVEMENTS__DATA: OurAchievementsData[] = [
  {
    mainTitle: 'Государственное признание',
    data: [
      {
        subtitle: '«Қазақстанның үздік тауары»',
        sliderTitle:
          'Победитель в номинации «Өндірістік мақсаттағы үздік тауарлар» (Лучшие товары производственного назначения)',
        sliderHiglightTitle:
          '— Признание высокого качества и конкурентоспособности отечественного оборудования',
        sliderList: [
          '/img/ourAchievements/one/our-achievements.webp',
          '/img/ourAchievements/one/our-achievements-1.webp',
          '/img/ourAchievements/one/our-achievements-2.webp',
        ],
        city: 'Тараз, 2025',
      },
      {
        subtitle: '«Қазақстанның үздік тауары» — Республиканский этап',
        sliderTitle: 'Дипломант конкурса в категории производственных товаров',
        sliderHiglightTitle:
          '— Награда вручена при участии Президента Республики Казахстан \n — Подтверждение национального уровня доверия к казахстанским технологиям безопасности',
        sliderList: [
          '/img/ourAchievements/two/our-achievements.webp',
          '/img/ourAchievements/two/our-achievements-1.webp',
          '/img/ourAchievements/two/our-achievements-2.webp',
        ],
        city: 'Астана, 2025',
      },
      {
        subtitle:
          'Участие в конкурсе на соискание премии Президента Республики Казахстан «Алтын Сапа»',
        sliderHiglightTitle:
          '— Оценка вклада компании в развитие качества и стандартов производства',
        sliderList: [],
        city: 'НПП РК Атамекен, 2025',
      },
    ],
  },
  {
    mainTitle: 'Профессиональное признание',
    data: [
      {
        subtitle: '«Лидер отрасли» по Национальному бизнес-рейтингу Казахстана',
        sliderTitle:
          'Компания «Новые Технологии – Тараз» удостоена почётного звания «Лидер отрасли»',
        sliderList: ['/img/ourAchievements/three/our-achievements.webp'],
        sliderHiglightTitle:
          'за высокую эффективность деятельности и значительный вклад в устойчивое развитие предпринимательства и экономики Казахстана.',
        city: '2020',
      },
    ],
  },
  {
    mainTitle: 'Международное признание',
    data: [
      {
        subtitle: 'Специальный приз жюри конкурса BOLID',
        sliderTitle: 'Лучший проект на базе ИСО «Орион»',
        sliderHiglightTitle:
          '— Отмечено профессиональное мастерство и технические компетенции инженеров компании',
        sliderList: ['/img/ourAchievements/fourth/our-achievements.webp'],
        city: 'Тараз, 2019',
      },
    ],
  },
  {
    mainTitle: 'Выставки и отраслевые события',
    data: [
      {
        subtitle: 'VIII Выставка казахстанских производителей',
        sliderHiglightTitle:
          '— Активное участие в отраслевой выставке \n — Поддержка развития отечественного производства',
        sliderList: [
          '/img/ourAchievements/five/our-achievements.webp',
          '/img/ourAchievements/five/our-achievements-1.webp',
          '/img/ourAchievements/five/our-achievements-2.webp',
        ],
        city: 'Фонд «Даму», 2025',
      },
    ],
  },
  {
    mainTitle: 'конкурсы систем безопасности',
    data: [
      {
        subtitle: 'Лучший проект по пожаротушению',
        sliderTitle: 'Лучший проект по пожаротушению INTANT Форум по системам безопасности.',
        sliderHiglightTitle:
          '— Признание инженерного уровня и эффективности проектных решений \n — Награда за результативный проект в сфере противопожарной защиты',
        sliderList: ['/img/ourAchievements/six/our-achievements.webp'],
        city: 'INTANT, 2017',
      },
    ],
  },
];
