export interface SocialNetworkType {
  id: number;
  title: string;
  href: string;
}

export interface CommonContactInfoType {
  email: string;
  workingHours: string;
  socialNetworks: SocialNetworkType[];
}

export interface CityContactType extends CommonContactInfoType {
  id: number;
  city: string;
  phone: string;
  href: string;
  address: string;
}
