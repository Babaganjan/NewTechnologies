import type { MetadataRoute } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { getAllProducts } from '@/shared/const/Products/utils/getAllProducts';
import { slugify } from '@/shared/utils/slugify';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const productPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/cameras`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/nvr`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/turnstiles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/switches`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/servercabinets`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const allProducts = getAllProducts();
  const dynamicProductPages: MetadataRoute.Sitemap = allProducts.map((product) => {
    const alias = slugify(product.model);
    let categoryPath = '';

    switch (product.category) {
      case 'CAMERAS':
        categoryPath = 'cameras';
        break;
      case 'NVR':
        categoryPath = 'nvr';
        break;
      case 'TURNSTILES':
        categoryPath = 'turnstiles';
        break;
      case 'SWITCHES':
        categoryPath = 'switches';
        break;
      case 'SERVERCABINETS':
        categoryPath = 'servercabinets';
        break;
      default:
        categoryPath = 'products';
    }

    return {
      url: `${baseUrl}/products/${categoryPath}/${alias}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  // Страницы услуг
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/videonabludenie`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/skd`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/ops`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/pozhartushenie`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/opoveshchenie`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/workingwithntouchequipment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const itSolutionsPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/services/itsolutionspublicprivate`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  return [
    ...staticPages,
    ...productPages,
    ...dynamicProductPages,
    ...servicePages,
    ...itSolutionsPages,
  ];
}
