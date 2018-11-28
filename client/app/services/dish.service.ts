import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Dish } from '../shared/models/dish.model';
import { SideDish } from '../shared/models/side-dish.model';
import { Burger } from '../shared/models/burger.model';
import { Ingredient } from '../shared/models/ingredient.model';
import 'rxjs/add/observable/of';

@Injectable()
export class DishService {
  dishesChanged = new Subject<Dish[]>();
  sideDishesChanged = new Subject<SideDish[]>();
  sideDishOptionChanged = new Subject<SideDish[]>();
  burgerDishesChanged = new Subject<Burger[]>();
  burgerDishOptionChanged = new Subject<Burger[]>();
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientsOptionChanged = new Subject<Ingredient[]>();
  ingredientsCategoryChanged = new Subject<string[]>();

  private dishes: Dish[] = [];

  private sideDishes: SideDish[] = [];
  private sideDishOptions: SideDish[] = [];

  private burger: Burger[] = [];
  private burgerOptions: Burger[] = [];

  private ingredients: Ingredient[] = [];
  private ingredientOptions: Ingredient[] = [
    // {
    //   name: 'Sesambrötchen',
    //   price: 1,
    //   category: 'Brot'
    // },
    // {
    //   name: 'Rindfleisch',
    //   price: 1,
    //   category: 'Fleisch'
    // },
    // {
    //   name: 'Cheddar',
    //   price: 1,
    //   category: 'Käse'
    // },
    // {
    //   name: 'Ketchup',
    //   price: 1,
    //   category: 'Sauce'
    // },
    // {
    //   name: 'Senf',
    //   price: 1,
    //   category: 'Sauce'
    // },
    // {
    //   name: 'Eisbergsalat',
    //   price: 1,
    //   category: 'Salat'
    // },
    // {
    //   name: 'Zwiebeln',
    //   price: 1,
    //   category: 'Salat'
    // },
    // {
    //   name: 'Rote Zwiebeln',
    //   price: 1,
    //   category: 'Salat'
    // }
  ];
  private ingredientCategories: string[] = [];

  private categories = [];

  constructor(private http: HttpClient) {
    this.http
      .get<Ingredient[]>('/api/ingredients')
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredientOptions = ingredients;
        const category: string[] = [];
        ingredients.forEach((ingredient: Ingredient) => {
          if (!(category.indexOf(ingredient.category) >= 0)) {
            category.push(ingredient.category);
          }
        });
        this.ingredientCategories = category;
        this.ingredientsOptionChanged.next(this.ingredientOptions.slice());
        this.ingredientsCategoryChanged.next(this.ingredientCategories.slice());
      });

    this.http.get<Burger[]>('/api/burgers').subscribe(burger => {
      this.burgerOptions = burger;
      this.burgerDishOptionChanged.next(this.burgerOptions.slice());
    });

    this.http.get<SideDish[]>('/api/side-dishes').subscribe(sideDishes => {
      this.sideDishOptions = sideDishes;
      this.sideDishOptionChanged.next(this.sideDishOptions.slice());
    });

    this.burgerDishOptionChanged.subscribe(options => {
      this.burgerOptions = options;
    });

    this.sideDishOptionChanged.subscribe(options => {
      this.sideDishOptions = options;
    });

    this.ingredientsOptionChanged.subscribe(options => {
      this.ingredientOptions = options;
      const categories = [];
      options.forEach(option => {
        if (!this.existsObjectArray(option, categories)) {
          categories.push(option.category);
        }
      });
      this.categories = categories;
    });
  }

  existsObjectArray(obj, list: string[]) {
    return list.some(el => {
      return el === obj.category;
    });
  }

  getCategories() {
    return this.categories.slice();
  }

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

  addSideDishOption(sideDish: SideDish) {
    const token = localStorage.getItem('token');
    this.http.post(`/api/side-dish?token=${token}`, sideDish).subscribe(res => {
      // console.log(res);
    });
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

  deleteSideDishOption(id: number) {
    this.http
      .get<SideDish[]>('/api/side-dishes')
      .toPromise()
      .then(sideDishes => {
        const sideDishOption = sideDishes[id];
        this.sideDishOptions.splice(id, 1);
        this.sideDishOptionChanged.next(this.sideDishOptions.slice());
        this.http
          .delete(`/api/side-dish/${sideDishOption._id}`, {
            responseType: 'text'
          })
          .subscribe(res => {
            // console.log(res);
          });
      });
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

  addBurgerOption(burger: Burger) {
    const token = localStorage.getItem('token');
    this.http.post(`/api/burger?token=${token}`, burger).subscribe(res => {
      // console.log(res);
    });
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

  deleteBurgerOption(id: number) {
    this.http
      .get<Burger[]>('/api/burgers')
      .toPromise()
      .then(burgers => {
        const burgerOption = burgers[id];
        this.burgerOptions.splice(id, 1);
        this.burgerDishOptionChanged.next(this.burgerOptions.slice());
        this.http
          .delete(`/api/burger/${burgerOption._id}`, { responseType: 'text' })
          .subscribe(res => {
            return;
            // console.log(res);
          });
      });
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
  addIngredientOption(ingredient: Ingredient) {
    const token = localStorage.getItem('token');
    this.http
      .post(`/api/ingredient?token=${token}`, ingredient)
      .subscribe(res => {
        // console.log(res);
      });
  }

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

  deleteIngredientOptione(id: number) {
    this.http
      .get<Ingredient[]>('/api/ingredients')
      .toPromise()
      .then(burgers => {
        const ingredientOption = burgers[id];
        this.ingredientOptions.splice(id, 1);
        this.ingredientsOptionChanged.next(this.ingredientOptions.slice());
        this.http
          .delete(`/api/ingredient/${ingredientOption._id}`, {
            responseType: 'text'
          })
          .subscribe(res => {
            console.log(res);
          });
      });
  }

  deleteIngredientList() {
    this.ingredients = [];
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
