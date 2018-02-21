import { User, Address } from './model';

export const ADDRESS_1: Address = {
  streetNumber: 1,
  streetName: 'street 1',
  city: 'city 1',
  postalCode: 111,
  country: 'country 1'
};

export const ADDRESS_2: Address = {
  streetNumber: 2,
  streetName: 'street 2',
  city: 'city 2',
  postalCode: 222,
  country: 'country 2'
};

export const ADDRESS_3: Address = {
  streetNumber: 3,
  streetName: 'street 3',
  city: 'city 3',
  postalCode: 333,
  country: 'country 3'
};

export const USER_1: User = {
  lastName: 'one',
  firstName: 'one',
  profession: 'one',
  address: [{...ADDRESS_1}, {...ADDRESS_3} ]
};

export const USER_2: User = {
  lastName: 'two',
  firstName: 'two',
  profession: 'two',
  address: [{...ADDRESS_2} ]
};

export const USERS = [USER_1, USER_2];
