import {Address} from './Address.model';

export class User {
  _id?: string;
  username?: string;
  email?: string;
  address?: Address;
  role?: string;
}
