import { seoConfig } from '../config/seo.config';

// Экспортируем функцию для генерации структурированных данных (JSON-LD)
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ТОО «Новые Технологии – Тараз» (NTOUCH)',
  url: seoConfig.siteUrl,
  logo: `${seoConfig.siteUrl}/logo.png`,
  description: 'Производитель систем безопасности и видеонаблюдения в Казахстане',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KZ',
    addressRegion: 'Жамбылская область',
    addressLocality: 'Тараз',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    areaServed: 'KZ',
    availableLanguage: ['ru', 'kk'],
  },
});

export const generateProductSchema = (product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image,
  brand: {
    '@type': 'Brand',
    name: product.brand || 'NTOUCH',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'ТОО «Новые Технологии – Тараз»',
  },
});

/**
 * Генерирует канонический URL
 */
export function generateCanonicalUrl(path: string, baseUrl: string = 'https://nt-t.kz'): string {
  return `${baseUrl}${path}`;
}

/**
 * Генерирует breadcrumb schema для страницы
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Генерирует FAQ schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  areaServed?: string;
  provider?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider || 'ТОО «Новые Технологии – Тараз»',
    },
    areaServed: {
      '@type': 'Country',
      name: service.areaServed || 'Kazakhstan',
    },
  };
}
