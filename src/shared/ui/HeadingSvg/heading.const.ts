import { ContactsHeading } from './ContactsHeading';
import { HomeHeading } from './HomeHeading';
import { ProductionHeading } from './ProductionHeading';
import { ServicesHeading } from './ServicesHeading';
import type { HeadingComponentsMap } from './headingSvg.type';

export const HEADING_COMPONENTS: HeadingComponentsMap = {
  '/': HomeHeading,
  '/services/': ServicesHeading,
  '/products/': ProductionHeading,
  '/contacts/': ContactsHeading,
} as const;
