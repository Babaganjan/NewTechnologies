import type { Metadata } from 'next';

import { StructuredData } from '@/shared/components/StructuredData';
import { seoConfig } from '@/shared/config/seo.config';
import { generateWebSiteSchema } from '@/shared/utils/seo.utils';
import {
  About,
  Advertising,
  FavoritesProject,
  FeedbackMenu,
  Hero,
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
  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      <StructuredData data={websiteSchema} />
      <Hero />
      <About />
      <Result />
      <ObjectLevel />
      <Services />
      <Products />
      <FavoritesProject />
      <ProjectMenu />
      <Advertising />
      <Questions />
      <FeedbackMenu theme="white" />
    </>
  );
}
