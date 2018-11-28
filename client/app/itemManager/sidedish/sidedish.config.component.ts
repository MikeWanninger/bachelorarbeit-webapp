import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Dish} from '../../shared/models/dish.model';
import {DishService} from '../../services/dish.service';
import ObjectId from 'bson-objectid';
import {SideDish} from '../../shared/models/side-dish.model';

@Component({
  selector: 'app-config-sidedish',
  templateUrl: './sidedish.config.component.html',
  styleUrls: ['../itemManager.component.scss'],
})
export class SidedishConfigComponent implements OnInit {
  dishes: Dish[] = [];
  form: FormGroup = new FormGroup({});
  formBuilder = new FormBuilder();

  constructor(private dishService: DishService) {
    this.dishes = this.dishService.getSideDishOptions();
    this.dishService.sideDishOptionChanged.subscribe(
      (dishes) => {
        const forms = this.form.get('forms') as FormArray;
        this.dishes = dishes;
        dishes.forEach(dish => {
          forms.push(
            this.formBuilder.group({
              'head': dish.name,
              'name': dish.name,
              'price': dish.price
            })
          );
        });
        this.form.value.forms = forms;
        this.initForm();
        this.createDishes();
      }
    );

    this.initForm();
    this.createDishes();
  }

  ngOnInit() {}

  initForm() {
    this.form = this.formBuilder.group({
      forms: this.formBuilder.array([])
    });
  }

  createDishes() {
    const forms = this.form.get('forms') as FormArray;
    this.dishes.forEach(dish => {
      forms.push(
        this.formBuilder.group({
          _id: '',
          head: dish.name,
          name: dish.name,
          price: dish.price
        })
      );
    });
  }

  addSideDish() {
    const forms = this.form.get('forms') as FormArray;
    const sideDish = new SideDish();
    sideDish._id = new ObjectId().toHexString().toString();
    sideDish.name = '';
    sideDish.price = 0;

    forms.insert(0, this.formBuilder.group(sideDish));
  }

  saveItems() {
    const forms = this.form.get('forms') as FormArray;
    let exist = false;
    for (let i = 0; i < forms.length; ++i) {
      const form = forms.at(i);
      exist = this.existsObjectArray(form.value, this.dishService.getSideDishOptions());
      if (!exist) {
        const dish = {
          name: form.value.name,
          price: form.value.price
        };
        this.dishes.push(dish);
        this.dishService.sideDishOptionChanged.next(this.dishes);
        this.dishService.addSideDishOption(dish);
      }
    }
  }

  removeAt(index) {
    this.dishService.deleteSideDishOption(index);
  }

  existsObjectArray(obj, list: Dish[]) {
    return list.some((el) => {
      return el.name === obj.name;
    });
  }
}
