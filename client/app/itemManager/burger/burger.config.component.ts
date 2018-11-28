import {Component, OnInit} from '@angular/core';
import {DishService} from '../../services/dish.service';
import {Dish} from '../../shared/models/dish.model';
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-config-burger',
  templateUrl: './burger.config.component.html',
  styleUrls: ['../itemManager.component.scss']
})
export class BurgerConfigComponent implements OnInit {
  dishes: Dish[] = [];
  form: FormGroup = new FormGroup({});
  formBuilder = new FormBuilder();

  constructor(private dishService: DishService) {
    this.dishes = this.dishService.getBurgerOptions();
    this.dishService.burgerDishOptionChanged.subscribe(
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
          head: dish.name,
          name: dish.name,
          price: dish.price
        })
      );
    });
  }

  addBurger() {
    const forms = this.form.get('forms') as FormArray;
    forms.insert(0, this.formBuilder.group({
      head: 'Name',
      name: '',
      price: ''
    }));
  }

  saveItems() {
    const forms = this.form.get('forms') as FormArray;
    let exist = false;
    for (let i = 0; i < forms.length; ++i) {
      const form = forms.at(i);
      exist = this.existsObjectArray(form.value, this.dishService.getBurgerOptions());
      if (!exist) {
        const dish = {
          name: form.value.name,
          price: form.value.price
        };
        this.dishes.push(dish);
        this.dishService.burgerDishOptionChanged.next(this.dishes);
        this.dishService.addBurgerOption(dish);
      }
    }
  }

  removeAt(index) {
    this.dishService.deleteBurgerOption(index);
  }

  existsObjectArray(obj, list: Dish[]) {
    return list.some((el) => {
      return el.name === obj.name;
    });
  }
}


