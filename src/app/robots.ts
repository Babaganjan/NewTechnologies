import type { MetadataRoute } from 'next';

import { seoConfig } from '@/shared/config/seo.config';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
  };
}
