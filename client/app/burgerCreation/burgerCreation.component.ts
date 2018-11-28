import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import 'rxjs/add/operator/map';
import {DishService} from '../services/dish.service';
import {Dish} from '../shared/models/dish.model';
import {Ingredient} from '../shared/models/ingredient.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-burger-create',
  templateUrl: './burgerCreation.component.html',
  styleUrls: ['./burgerCreation.component.scss']
})
export class BurgerCreationComponent implements OnInit {
  ingredients: Ingredient[];
  ingredientOptions: Ingredient[];
  ingredientCategories: String[];
  selectedCategory: String;
  @ViewChild('burgerElement') burgerElement: ElementRef;
  breadAdded = false;

  constructor(private dishService: DishService, private renderer: Renderer2) { }

  ngOnInit() {
    this.dishService.ingredientsChanged.subscribe(
      (ingredientList: Ingredient[]) => {
        this.ingredients = ingredientList;
      }
    );
    this.ingredients = this.dishService.getIngredients();
    this.dishService.ingredientsOptionChanged.subscribe(
      (options) => {
        this.ingredientOptions = options;
      }
    );
    this.ingredientOptions = this.dishService.getIngredientOptions();
    this.dishService.ingredientsCategoryChanged.subscribe(
      (categories) => {
        this.ingredientCategories = categories;
      }
    );
    this.ingredientCategories = this.dishService.getIngredientCategories();
    this.selectedCategory = 'Brot';
  }

  addBurgerToDish() {
    let price = 0;
    this.ingredients.forEach(
      (ingredient) => {
        price += ingredient.price;
      }
    );
    this.dishService.addDish(
      {
        name: 'Eigener Burger',
        price: price,
        ingredients: this.ingredients
      }
    );
  }

  addIngredient(ingredient: Ingredient) {
    if (ingredient.category === 'Brot') {
      this.breadAdded = true;
    }
    this.ingredients.push(ingredient);
    this.illustrateBurger();
  }

  deleteIllustration() {
    while (this.burgerElement.nativeElement.firstChild) {
      this.renderer.removeChild(this.burgerElement.nativeElement, this.burgerElement.nativeElement.firstChild);
    }
  }

  illustrateBurger() {
    this.deleteIllustration();
    const bread = [];
    const salads = [];
    const sauces = [];
    const meat = [];
    const cheeses = [];
    this.ingredients.forEach(
      (ing) => {
        switch (ing.category) {
          case 'Brot':
            bread.push(ing);
            break;
          case 'Salat':
            salads.push(ing);
            break;
          case 'Sauce':
            sauces.push(ing);
            break;
          case 'Fleisch':
            meat.push(ing);
            break;
          case 'Käse':
            cheeses.push(ing);
            break;
          default: break;
        }
      }
    );
    // add bread-top
    const breadTopDiv = this.renderer.createElement('div');
    if (this.breadAdded) {
      this.renderer.addClass(breadTopDiv, 'bread-top');
      this.renderer.appendChild(this.burgerElement.nativeElement, breadTopDiv);
    }
    sauces.forEach(
      (sauce) => {
        const sauceDiv = this.renderer.createElement('div');
        this.renderer.addClass(sauceDiv, 'sauce');
        this.renderer.appendChild(this.burgerElement.nativeElement, sauceDiv);
      }
    );
    salads.forEach(
      (salad) => {
        const saladDiv = this.renderer.createElement('div');
        this.renderer.addClass(saladDiv, 'salad');
        this.renderer.appendChild(this.burgerElement.nativeElement, saladDiv);
      }
    );
    cheeses.forEach(
      (cheese) => {
        const cheeseDiv = this.renderer.createElement('div');
        this.renderer.addClass(cheeseDiv, 'cheese');
        this.renderer.appendChild(this.burgerElement.nativeElement, cheeseDiv);
      }
    );
    meat.forEach(
      (m) => {
        const meatDiv = this.renderer.createElement('div');
        this.renderer.addClass(meatDiv, 'meat');
        this.renderer.appendChild(this.burgerElement.nativeElement, meatDiv);
      }
    );
    if (this.breadAdded) {
      const breadBottomDiv = this.renderer.createElement('div');
      this.renderer.addClass(breadBottomDiv, 'bread-bottom');
      this.renderer.appendChild(this.burgerElement.nativeElement, breadBottomDiv);
    }
  }

  deleteList() {
    this.ingredients = [];
    this.deleteIllustration();
  }

  deleteIngredient(id: number) {
    if (this.ingredients[id].category === 'Brot') {
      this.breadAdded = false;
    }
    this.ingredients.splice(id, 1);
    this.illustrateBurger();
    console.log(this.ingredients);
  }

  changedSelection(category: String) {
    this.selectedCategory = category;
  }

  getIngredientsByCategory() {
    const ingredients: Ingredient[] = [];
    this.ingredientOptions.forEach(
      (option) => {
        if (option.category === this.selectedCategory) {
          ingredients.push(option);
        }
      }
    );
    return ingredients.slice();
  }

}
