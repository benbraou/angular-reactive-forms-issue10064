
export interface User {
  lastName: string;
  firstName: string;
  profession: string;
  address: Address[];
}

export interface Address {
  streetNumber: number;
  streetName: string;
  city: string;
  postalCode: number;
  country: string;
}
