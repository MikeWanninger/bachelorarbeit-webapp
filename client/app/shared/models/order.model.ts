import {Dish} from './dish.model';
import {Address} from './Address.model';

export class Order {
  _id?: string;
  name?: string;
  address?: Address;
  dishes?: Dish[];
  price?: number;
}
