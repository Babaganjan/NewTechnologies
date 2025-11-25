import type { FC } from 'react';

import {
  Ajax,
  Alhua,
  Arsenal,
  Axis,
  Bolid,
  Bosch,
  DLink,
  Eurolan,
  Forteza,
  Fortinet,
  Hikvision,
  Huawei,
  type Icons,
  Itc,
  Macroscop,
  Mikrotik,
  Oxgard,
  Paritet,
  Rubezh,
  Seagete,
  Ship,
  Sigur,
  Trezor,
  Uniqscan,
  Vers,
  WesternDigital,
} from '@/shared/icons';

export interface IPartner {
  readonly id: number;
  readonly component: FC<Icons>;
  readonly name: string; // Для SEO и accessibility
}

// Заморожены для предотвращения мутаций
export const PARTNERS: readonly IPartner[] = Object.freeze([
  { id: 1, component: Alhua, name: 'Alhua' },
  { id: 2, component: Bosch, name: 'Bosch' },
  { id: 3, component: Hikvision, name: 'Hikvision' },
  { id: 4, component: Huawei, name: 'Huawei' },
  { id: 5, component: Ajax, name: 'Ajax' },
  { id: 6, component: Axis, name: 'Axis' },
  { id: 7, component: Arsenal, name: 'Arsenal' },
  { id: 8, component: Bolid, name: 'Bolid' },
  { id: 9, component: Bosch, name: 'Bosch' },
  { id: 10, component: DLink, name: 'D-Link' },
  { id: 11, component: Eurolan, name: 'Eurolan' },
  { id: 12, component: Forteza, name: 'Forteza' },
  { id: 13, component: Fortinet, name: 'Fortinet' },
  { id: 14, component: Itc, name: 'ITC' },
  { id: 15, component: Macroscop, name: 'Macroscop' },
  { id: 16, component: Mikrotik, name: 'Mikrotik' },
  { id: 17, component: Oxgard, name: 'Oxgard' },
  { id: 18, component: Paritet, name: 'Paritet' },
  { id: 19, component: Rubezh, name: 'Rubezh' },
  { id: 20, component: Seagete, name: 'Seagate' },
  { id: 21, component: Ship, name: 'Ship' },
  { id: 22, component: Sigur, name: 'Sigur' },
  { id: 23, component: Trezor, name: 'Trezor' },
  { id: 24, component: Uniqscan, name: 'Uniqscan' },
  { id: 25, component: Vers, name: 'Vers' },
  { id: 26, component: WesternDigital, name: 'Western Digital' },
] as const);

// Для SEO - список имен партнеров в текстовом формате
export const PARTNER_NAMES = PARTNERS.map((p) => p.name).join(', ');
