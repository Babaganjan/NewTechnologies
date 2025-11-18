import {
  Advantage,
  Description,
  FavoritesProject,
  FeedbackMenu,
  HeroService,
  Programs,
} from '@/widgets';

export default function ItSolutionsPublicPrivate() {
  return (
    <>
      <HeroService
        title="It-решения для государственных и частных организаций"
        type="itsolutionspublicprivate"
      />
      <Description type="ITSOLUTIONS" />
      <Programs />
      <Advantage type="ITSOLUTION" />
      <FavoritesProject
        data={[
          {
            id: 1,
            image: '/img/favorite-2.webp',
            title: 'Проект «комфортная школа»',
            description:
              'Установили турникеты NT по всему Казахстану при поддержке фонда «Самрук-Қазына».',
          },
        ]}
      />
      <FeedbackMenu />
    </>
  );
}
