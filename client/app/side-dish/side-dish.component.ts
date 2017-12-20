import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {DishService} from '../services/dish.service';
import {SideDish} from '../shared/models/side-dish.model';

@Component({
  selector: 'app-side-dish',
  templateUrl: './side-dish.component.html',
  styleUrls: ['./side-dish.component.scss']
})
export class SideDishComponent implements OnInit {
  constructor(private dishService: DishService) { }

  sideDishes: SideDish[];
  sideDishOptions: SideDish[];

  ngOnInit() {
    this.sideDishes = this.dishService.getSideDishes();
    this.sideDishOptions = this.dishService.getSideDishOptions();
    this.dishService.sideDishesChanged.subscribe(
      (dishes: SideDish[]) => {
        this.sideDishes = dishes;
      }
    );
  }

  addSideDish(dish: SideDish) {
    this.dishService.addSideDish(dish);
  }

  order() {

  }

  deleteList() {
    this.dishService.deleteSideDishList();
  }

  deleteDish(id: number) {
    this.dishService.deleteSideDish(id);
  }

}
