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
  Mirkrotik,
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
  id: number;
  component: FC<Icons>;
}

export const PARTNERS: IPartner[] = [
  { id: 1, component: Alhua },
  { id: 2, component: Bosch },
  { id: 3, component: Hikvision },
  { id: 4, component: Huawei },
  { id: 5, component: Ajax },
  { id: 6, component: Axis },
  { id: 7, component: Arsenal },
  { id: 8, component: Bolid },
  { id: 9, component: Bosch },
  { id: 10, component: DLink },
  { id: 11, component: Eurolan },
  { id: 12, component: Forteza },
  { id: 13, component: Fortinet },
  { id: 14, component: Itc },
  { id: 15, component: Macroscop },
  { id: 16, component: Mirkrotik },
  { id: 17, component: Oxgard },
  { id: 18, component: Paritet },
  { id: 19, component: Rubezh },
  { id: 20, component: Seagete },
  { id: 21, component: Ship },
  { id: 22, component: Sigur },
  { id: 23, component: Trezor },
  { id: 24, component: Uniqscan },
  { id: 25, component: Vers },
  { id: 26, component: WesternDigital },
] as const;
