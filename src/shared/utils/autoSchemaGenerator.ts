// src/shared/utils/autoSchemaGenerator.ts
// Автоматический генератор schema.org разметки на основе SEO данных

import { getProductSEO } from '@/shared/const/Products/seo';
import type { ProductSEO } from '@/shared/types/seo.types';

import {
  generateBreadcrumbSchema,
  generateCameraProductSchema,
  generateNVRProductSchema,
  generateServerCabinetProductSchema,
  generateSwitchProductSchema,
  generateTurnstileProductSchema,
} from './seo.utils';

type ProductCategory = 'CAMERAS' | 'NVR' | 'TURNSTILES' | 'SWITCHES' | 'SERVERCABINETS';

interface ProductData {
  model: string;
  category: ProductCategory;
  name: string;
  feature?: string;
  gallery: {
    images: string[];
  };
}

export function generateProductSchemaAuto(product: ProductData, alias: string) {
  const productSEO = getProductSEO(product.model);
  const baseUrl = 'https://ntouch.kz';

  const categoryPaths: Record<ProductCategory, string> = {
    CAMERAS: 'cameras',
    NVR: 'nvr',
    TURNSTILES: 'turnstiles',
    SWITCHES: 'switches',
    SERVERCABINETS: 'servercabinets',
  };

  const categoryPath = categoryPaths[product.category];
  const imageUrl = product.gallery.images[0]
    ? `${baseUrl}${product.gallery.images[0]}`
    : `${baseUrl}/og-image.jpg`;

  const categoryNames: Record<ProductCategory, string> = {
    CAMERAS: 'Камеры',
    NVR: 'Видеорегистраторы',
    TURNSTILES: 'Турникеты',
    SWITCHES: 'Коммутаторы',
    SERVERCABINETS: 'Серверные шкафы',
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Продукция', url: '/products' },
    { name: categoryNames[product.category], url: `/products/${categoryPath}` },
    { name: `${product.name} ${product.model}`, url: `/products/${categoryPath}/${alias}` },
  ]);

  let productSchema;

  switch (product.category) {
    case 'CAMERAS':
      productSchema = generateCameraProductSchema({
        model: product.model,
        name: product.name,
        description: productSEO?.description || product.feature || product.name,
        image: imageUrl,
        resolution: productSEO?.technicalSpecs?.resolution,
        features: productSEO?.technicalSpecs?.features,
      });
      break;

    case 'NVR':
      productSchema = generateNVRProductSchema({
        model: product.model,
        name: product.name,
        description: productSEO?.description || product.feature || product.name,
        image: imageUrl,
        channels: productSEO?.technicalSpecs?.channels,
        resolution: productSEO?.technicalSpecs?.resolution,
        features: productSEO?.technicalSpecs?.features,
      });
      break;

    case 'TURNSTILES':
      productSchema = generateTurnstileProductSchema({
        model: product.model,
        name: product.name,
        description: productSEO?.description || product.feature || product.name,
        image: imageUrl,
        features: productSEO?.technicalSpecs?.features,
      });
      break;

    case 'SWITCHES':
      productSchema = generateSwitchProductSchema({
        model: product.model,
        name: product.name,
        description: productSEO?.description || product.feature || product.name,
        image: imageUrl,
        ports: extractPorts(product.model, productSEO),
        power: productSEO?.technicalSpecs?.powerSupply,
        features: productSEO?.technicalSpecs?.features,
      });
      break;

    case 'SERVERCABINETS':
      productSchema = generateServerCabinetProductSchema({
        model: product.model,
        name: product.name,
        description: productSEO?.description || product.feature || product.name,
        image: imageUrl,
        size: extractSize(productSEO),
        features: productSEO?.technicalSpecs?.features,
      });
      break;

    default:
      throw new Error(`Unknown product category: ${product.category}`);
  }

  return [productSchema, breadcrumbSchema];
}

function extractPorts(model: string, seo?: ProductSEO): string | undefined {
  if (!seo?.technicalSpecs?.features) return undefined;

  const portsFeature = seo.technicalSpecs.features.find((f) => f.toLowerCase().includes('порт'));

  if (portsFeature) {
    return portsFeature;
  }

  const match = model.match(/(\d+)/);

  return match ? `${match[1]} портов` : undefined;
}

function extractSize(seo?: ProductSEO): string | undefined {
  if (!seo?.technicalSpecs?.features) return undefined;

  const sizeFeature = seo.technicalSpecs.features.find(
    (f) => f.toLowerCase().includes('размер') || f.toLowerCase().includes('высота')
  );

  return sizeFeature;
}
