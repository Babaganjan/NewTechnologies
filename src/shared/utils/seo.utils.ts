import { seoConfig } from '../config/seo.config';
import type { ProductConfig } from '../types/products.types';
import type { ProductSEO } from '../types/seo.types';

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

export const generateProductSchema = (product: ProductConfig, seo?: ProductSEO) => {
  const schema = seo?.schema || {
    name: `${product.name} ${product.model}`,
    description: product.feature,
    brand: 'NTOUCH',
    model: product.model,
    category: product.category,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: schema.name,
    description: schema.description,
    brand: {
      '@type': 'Brand',
      name: schema.brand,
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'ТОО «Новые Технологии – Тараз»',
      url: seoConfig.siteUrl,
    },
    model: schema.model,
    category: schema.category,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'KZT',
      seller: {
        '@type': 'Organization',
        name: 'NTOUCH',
      },
    },
  };
};

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
