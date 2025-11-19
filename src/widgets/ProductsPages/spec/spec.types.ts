import type { tabPanels } from './spec.const';

export interface SpecItem {
  title: string;
  subtitle: string;
}

export type TabLabel = (typeof tabPanels)[number];
