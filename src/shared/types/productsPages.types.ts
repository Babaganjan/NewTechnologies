import type { ProductData } from '../utils/findProduct';

export interface ProductsPagesProps {
  product: ProductData | null;
}

export interface AliasPagesProps {
  params: Promise<{
    alias: string;
  }>;
}
