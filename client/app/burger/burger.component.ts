import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {DishService} from '../services/dish.service';
import {Burger} from '../shared/models/burger.model';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  constructor(private dishService: DishService) { }

  burgerDishes: Burger[];
  burgerDishOptions: Burger[];

  ngOnInit() {
    this.burgerDishes = this.dishService.getBurger();
    this.burgerDishOptions = this.dishService.getBurgerOptions();
    this.dishService.burgerDishesChanged.subscribe(
      (dishes: Burger[]) => {
        this.burgerDishes = dishes;
      }
    );
  }

  addBurgerDish(dish: Burger) {
    this.dishService.addBurger(dish);
  }

  order() {

  }

  deleteList() {
    this.dishService.deleteBurgerList();
  }

  deleteDish(id: number) {
    this.dishService.deleteBurger(id);
  }

}
