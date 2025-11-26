export interface SpecItem {
  title: string;
  subtitle: string;
}

export interface SpecItemImages {
  id: number;
  title: string;
  images: string;
}

export interface AssemblyItem {
  id: number;
  title: string;
  description: string;
}

export interface ProductItem {
  id: number;
  model: string;
  dimensions: string;
  units: string | number;
}

export type SpecVariation = 'text' | 'images' | 'schema' | 'product';

export type TabLabel = string;
export type TabLevelObject =
  | {
      label: TabLabel;
      variant: 'text';
      item: SpecItem[];
    }
  | {
      label: TabLabel;
      variant: 'images';
      item: SpecItemImages[];
    }
  | {
      label: TabLabel;
      variant: 'schema';
      item: AssemblyItem[];
    }
  | {
      label: TabLabel;
      variant: 'product';
      item: ProductItem[];
    };
