// products/types.ts
export type KeySpecLayout = 'layout1' | 'layout2' | 'layout3' | 'layout4';

export interface KeySpecItem {
  id: string | number;
  title?: string;
  value?: string;
  unit?: string;
  description?: string;
  subtitle?: string;
  type?: 'big' | 'subtitle' | 'singleValue' | 'titleEmpty' | 'titleNone';
}

export interface TextItem {
  title: string;
  subtitle: string;
}

export interface ImageItem {
  id: number;
  title: string;
  images: string;
}

export interface SchemeItem {
  id: number;
  title: string;
  description: string;
}

export interface ProductInfoItem {
  id: number;
  model: string;
  dimensions: string;
  units: string | number;
}

export type TabData =
  | { label: string; variant: 'text'; item: TextItem[] }
  | { label: string; variant: 'images'; item: ImageItem[] }
  | { label: string; variant: 'schema'; item: SchemeItem[] }
  | { label: string; variant: 'product'; item: ProductInfoItem[] };

export interface SpecSection {
  tabs: string[];
  data: TabData[];
}

export type ProductCategory = 'CAMERAS' | 'NVR' | 'SWITCHES' | 'TURNSTILES' | 'SERVERCABINETS';

export interface ProductData {
  id: number;
  model: string;
  feature: string;
  title: string;
  category: ProductCategory;
}
export interface ProductsPagesProps {
  product: ProductData | null;
}
export interface ProductConfig {
  // Базовая информация
  id: number;
  model: string;
  name: string;
  category: ProductCategory;

  // Для ProductsMenu
  feature: string; // "1920×1080 / 25 fps" или "20 гбит/сек"

  // Галерея (GallerySpec)
  gallery: {
    images: string[];
  };

  // Основные характеристики (KeySpecs)
  keySpecs: {
    layout: KeySpecLayout;
    items: KeySpecItem[];
  };

  // Размеры (SizeSpec) - опционально
  dimensions?: {
    images: string[];
  };

  // Спецификации (Spec - табы)
  specifications: {
    general?: SpecSection;
    technical?: SpecSection;
  };
}
