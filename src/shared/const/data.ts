// types/contacts.ts
export type AddressContact = {
  readonly id: number;
  readonly city: string;
  readonly address: string;
  readonly phone: string;
};

export const ADDRESS_CONTACTS: readonly AddressContact[] = [
  {
    id: 1,
    city: 'Алматы',
    address: 'РК, г. Алматы, улица Варламова 27Д ЖК "Lake Town", блок 8',
    phone: '+7 (700) 346 43 71',
  },
  {
    id: 2,
    city: 'Тараз',
    address: 'РК, г. Тараз, улица Толе би 61А',
    phone: '+7 (747) 180 32 18',
  },
  {
    id: 3,
    city: 'Астана',
    address: 'РК, г. Астана, ЖК Аристократ, улица Умай Ана 14/1',
    phone: '+7 (700) 836 94 36',
  }
] as const;