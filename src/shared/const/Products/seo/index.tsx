import type { ProductSEO } from '@/shared/types/seo.types';

import { CAMERAS_SEO } from './cameras.seo';
import { NVR_SEO } from './nvr.seo';
import { SERVERCABINETS_SEO } from './servercabinets.seo';
import { SWITCHES_SEO } from './switches.seo';
import { TURNSTILES_SEO } from './turnstiles.seo';

const ALL_PRODUCT_SEO: Record<string, ProductSEO> = {
  ...NVR_SEO,
  ...CAMERAS_SEO,
  ...TURNSTILES_SEO,
  ...SWITCHES_SEO,
  ...SERVERCABINETS_SEO,
};

export const getProductSEO = (model: string): ProductSEO | undefined => {
  return ALL_PRODUCT_SEO[model.toLowerCase()];
};

export const hasProductSEO = (model: string): boolean => {
  return model.toLowerCase() in ALL_PRODUCT_SEO;
};
