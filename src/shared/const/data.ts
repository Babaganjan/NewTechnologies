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
    address: 'Алматы, 14/1 Умай Ана',
    phone: '+7 (700) 346 43 71',
  },
  {
    id: 2,
    city: 'Тараз',
    address: 'Тараз, 14/1 Умай Ана',
    phone: '+7 (747) 180 32 18',
  },
  {
    id: 3,
    city: 'Астана',
    address: 'Астана, 14/1 Умай Ана',
    phone: '+7 (700) 836 94 36',
  }
] as const;