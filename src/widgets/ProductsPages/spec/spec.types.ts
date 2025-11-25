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

export type TabLabel = string;
