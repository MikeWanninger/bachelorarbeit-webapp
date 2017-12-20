import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {Dish} from '../shared/models/dish.model';
import {SideDish} from '../shared/models/side-dish.model';
import {Burger} from '../shared/models/burger.model';
import {Ingredient} from '../shared/models/ingredient.model';

@Injectable()
export class DishService {
  dishesChanged = new Subject<Dish[]>();
  sideDishesChanged = new Subject<SideDish[]>();
  burgerDishesChanged = new Subject<Burger[]>();
  ingredientsChanged = new Subject<Ingredient[]>();

  private dishes: Dish[] = [];

  private sideDishes: SideDish[] = [];
  private sideDishOptions: SideDish[] = [
    {
      name: 'Pommes',
      price: 1.5
    },
    {
      name: 'Salat',
      price: 1
    },
    {
      name: 'Nuggets',
      price: 2
    }
  ];

  private burger: Burger[] = [];
  private burgerOptions: Burger[] = [
    {
      name: 'Hamburger',
      price: 4
    },
    {
      name: 'Cheeseburger',
      price: 6
    }
  ];

  private ingredients: Ingredient[] = [];
  private ingredientOptions: Ingredient[] = [
    {
      name: 'Sesambrötchen',
      price: 1,
      category: 'Brot'
    },
    {
      name: 'Rindfleisch',
      price: 1,
      category: 'Fleisch'
    },
    {
      name: 'Cheddar',
      price: 1,
      category: 'Käse'
    },
    {
      name: 'Ketchup',
      price: 1,
      category: 'Sauce'
    },
    {
      name: 'Senf',
      price: 1,
      category: 'Sauce'
    },
    {
      name: 'Eisbergsalat',
      price: 1,
      category: 'Salat'
    },
    {
      name: 'Zwiebeln',
      price: 1,
      category: 'Salat'
    },
    {
      name: 'Rote Zwiebeln',
      price: 1,
      category: 'Salat'
    }
  ];
  private ingredientCategories: String[] = [
    'Brot', 'Fleisch', 'Käse', 'Salat', 'Sauce'
  ];

  constructor(private http: HttpClient) {}

  // Dishes
  getDishes() {
    return this.dishes.slice();
  }

  addDish(dish: Dish) {
    this.dishes.push(dish);
    this.dishesChanged.next(this.dishes.slice());
  }

  deleteDish(id: number) {
    const dish: Dish = this.dishes[id];
    for (let i = 0; i < this.sideDishes.length; ++i) {
      if (dish.name === this.sideDishes[i].name) {
        this.deleteSideDish(i);
      }
    }
    for (let i = 0; i < this.burger.length; ++i) {
      if (dish.name === this.burger[i].name) {
        this.deleteBurger(i);
      }
    }
    this.dishes.splice(id, 1);
    this.dishesChanged.next(this.dishes.slice());
  }

  deleteDishList() {
    this.dishes = [];
    this.sideDishes = [];
    this.dishesChanged.next(this.dishes.slice());
    this.sideDishesChanged.next(this.sideDishes.slice());
  }

  // Side-Dishes
  getSideDishes() {
    return this.sideDishes.slice();
  }

  getSideDishOptions() {
    return this.sideDishOptions.slice();
  }

  addSideDish(sideDish: SideDish) {
    this.sideDishes.push(sideDish);
    this.dishes.push(sideDish);
    this.sideDishesChanged.next(this.sideDishes.slice());
    this.dishesChanged.next(this.dishes.slice());
  }

  deleteSideDish(id: number) {
    const sideDish = this.sideDishes[id];
    for (let i = 0; i < this.dishes.length; ++i) {
      if (sideDish.name === this.dishes[i].name) {
        this.dishes.splice(i, 1);
      }
    }
    this.sideDishes.splice(id, 1);
    this.sideDishesChanged.next(this.sideDishes.slice());
    this.dishesChanged.next(this.dishes.slice());
  }

  deleteSideDishList() {
    for (let i = 0; i < this.dishes.length; ++i) {
      for (let j = 0; j < this.sideDishes.length; ++j) {
        if (this.sideDishes[j].name === this.dishes[i].name) {
          this.dishes.splice(i, 1);
        }
      }
    }
    this.sideDishes = [];
    this.sideDishesChanged.next(this.sideDishes.slice());
    this.dishesChanged.next(this.dishes.slice());
  }

  // Burger
  getBurger() {
    return this.burger.slice();
  }

  getBurgerOptions() {
    return this.burgerOptions.slice();
  }

  addBurger(burger: Burger) {
    this.burger.push(burger);
    this.dishes.push(burger);
    this.burgerDishesChanged.next(this.burger.slice());
    this.dishesChanged.next(this.dishes.slice());
  }

  deleteBurger(id: number) {
    const burger = this.burger[id];
    for (let i = 0; i < this.dishes.length; ++i) {
      if (burger.name === this.dishes[i].name) {
        this.dishes.splice(i, 1);
      }
    }
    this.burger.splice(id, 1);
    this.burgerDishesChanged.next(this.burger.slice());
    this.dishesChanged.next(this.dishes.slice());
  }

  deleteBurgerList() {
    for (let i = 0; i < this.dishes.length; ++i) {
      for (let j = 0; j < this.burger.length; ++j) {
        if (this.burger[j].name === this.dishes[i].name) {
          this.dishes.splice(i, 1);
        }
      }
    }
    this.burger = [];
    this.burgerDishesChanged.next(this.burger.slice());
    this.dishesChanged.next(this.dishes.slice());
  }

  // ingredients
  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredientOptions(): Ingredient[] {
    return this.ingredientOptions.slice();
  }

  getIngredientCategories(): String[] {
    return this.ingredientCategories.slice();
  }

  deleteIngredient(id: number) {
    this.ingredients.splice(id, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredientList() {
    this.ingredients = [];
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
