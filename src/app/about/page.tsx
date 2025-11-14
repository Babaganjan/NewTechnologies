import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { AboutScroll, AboutUs, Advertising, DocumentsBlock, ProjectMenu } from '@/widgets';

export const metadata: Metadata = {
  title: seoConfig.about.title,
  description: seoConfig.about.description,
  keywords: seoConfig.about.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/about`,
  },
};

export default function About() {
  return (
    <>
      <AboutScroll />
      <AboutUs />
      <DocumentsBlock />
      <Advertising />
      <ProjectMenu />
    </>
  );
}
