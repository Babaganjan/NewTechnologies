import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import {
  About,
  Advertising,
  FavoritesProject,
  FeedbackMenu,
  ObjectLevel,
  Products,
  ProjectMenu,
  Questions,
  Result,
  Services,
} from '@/widgets';

export const metadata: Metadata = {
  title: {
    default: seoConfig.home.title,
    template: `%s | ${seoConfig.siteName}`,
  },
  description: seoConfig.home.description,
  keywords: seoConfig.home.keywords,
  openGraph: {
    description: seoConfig.home.openGraph.description,
    type: seoConfig.home.openGraph.type,
    title: seoConfig.home.openGraph.title,
  },
};

export default function Home() {
  return (
    <>
      <About />
      <Result />
      <ObjectLevel />
      <Services />
      <Products />
      <FavoritesProject />
      <ProjectMenu />
      <Advertising />
      <Questions />
      <FeedbackMenu />
    </>
  );
}
