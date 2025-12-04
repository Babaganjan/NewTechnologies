import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import {
  Advantage,
  Description,
  FavoritesProject,
  FeedbackMenu,
  HeroService,
  Programs,
} from '@/widgets';

export const metadata: Metadata = {
  title: 'IT-решения для государственных и частных организаций | NTOUCH',
  description:
    'Комплексные IT-решения для госсектора и бизнеса: системы безопасности, видеонаблюдение, СКУД, сетевое оборудование. Проект "Комфортная школа" - 500+ установок.',
  keywords: [
    'IT-решения для государства',
    'IT-решения для бизнеса',
    'системы безопасности госучреждения',
    'проект комфортная школа',
    'безопасная школа Казахстан',
  ],
  alternates: {
    canonical: `${seoConfig.siteUrl}/services/itsolutionspublicprivate`,
  },
  openGraph: {
    title: 'IT-решения для государственных и частных организаций',
    description:
      'Реализованные проекты для школ, больниц, государственных учреждений по всему Казахстану.',
    url: `${seoConfig.siteUrl}/services/itsolutionspublicprivate`,
    type: 'website',
  },
};

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
            image: '/img/favorite-2-it.webp',
            title: 'Проект «комфортная школа»',
            description:
              'Внедрили систему «Антибуллинг» в рамках проекта «Комфортная школа» при поддержке фонда «Самрук-Казына».',
          },
        ]}
      />
      <FeedbackMenu theme="white" />
    </>
  );
}
