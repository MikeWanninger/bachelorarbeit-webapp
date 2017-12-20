import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {DishService} from '../services/dish.service';
import {Dish} from '../shared/models/dish.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private dishService: DishService) { }

  dishes: Dish[];

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
    this.dishService.dishesChanged.subscribe(
      (dishes: Dish[]) => {
        this.dishes = dishes;
      }
    );
  }

  order() {

  }

  deleteList() {
    this.dishService.deleteDishList();
  }

  deleteDish(id: number) {
    this.dishService.deleteDish(id);
  }

}
