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

export interface descriptionItem {
  title1?: string;
  title2?: string;
  title3?: string;
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
  id: number;
  model: string;
  name: string;
  category: ProductCategory;

  feature: string;

  gallery: {
    images: string[];
  };

  description?: descriptionItem;

  keySpecs: {
    layout: KeySpecLayout;
    items: KeySpecItem[];
  };

  dimensions?: {
    images: string[];
  };

  specifications: {
    general?: SpecSection;
    technical?: SpecSection;
  };
}
