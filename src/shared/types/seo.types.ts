export interface ProductSEO {
  title: string;
  description: string;
  keywords: string[];
  technicalSpecs?: {
    resolution?: string;
    channels?: string;
    powerSupply?: string;
    features?: string[];
  };
  schema?: {
    name: string;
    description: string;
    brand: string;
    model: string;
    category: string;
  };
}
