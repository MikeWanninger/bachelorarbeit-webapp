import {Ingredient} from './ingredient.model';

export class Dish {
  _id?: string;
  name?: string;
  price?: number;
  ingredients?: Ingredient[];
}
