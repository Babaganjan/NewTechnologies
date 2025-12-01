import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import {
  About,
  Advertising,
  FavoritesProject,
  FeedbackMenu,
  Hero,
  ObjectLevel,
  Products,
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
      <Hero />
      <About />
      <Result />
      <ObjectLevel />
      <Services />
      <Products />
      <FavoritesProject />

      <Advertising />
      <Questions />
      <FeedbackMenu theme="white" />
    </>
  );
}
