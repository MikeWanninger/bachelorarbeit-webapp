import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Dish } from '../../shared/models/dish.model';
import { DishService } from '../../services/dish.service';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-config-ingredient',
  templateUrl: './ingredient.config.component.html',
  styleUrls: ['../itemManager.component.scss']
})
export class IngredientConfigComponent implements OnInit {
  dishes: Ingredient[] = [];
  form: FormGroup = new FormGroup({});
  formBuilder = new FormBuilder();
  categories = [];

  constructor(private dishService: DishService) {
    this.dishes = this.dishService.getIngredientOptions();
    this.dishService.ingredientsOptionChanged.subscribe(dishes => {
      const forms = this.form.get('forms') as FormArray;
      this.dishes = dishes;
      dishes.forEach(dish => {
        forms.push(
          this.formBuilder.group({
            head: dish.name,
            name: dish.name,
            price: dish.price,
            categories: new FormControl()
          })
        );
      });
      this.form.value.forms = forms;
      this.initForm();
      this.createDishes();
      this.categories = this.dishService.getCategories();
    });

    this.categories = this.dishService.getCategories();

    this.initForm();
    this.createDishes();
    console.log((<FormGroup>this.form.get('forms')).controls);
  }

  ngOnInit() {}

  initForm() {
    this.form = this.formBuilder.group({
      forms: this.formBuilder.array([])
    });
  }

  createDishes() {
    const forms = this.form.get('forms') as FormArray;
    this.dishes.forEach((dish: Ingredient) => {
      forms.push(
        this.formBuilder.group({
          head: dish.name,
          name: dish.name,
          price: dish.price,
          categories: new FormControl(dish.category)
        })
      );
    });
  }

  addBurger() {
    const forms = this.form.get('forms') as FormArray;
    forms.insert(
      0,
      this.formBuilder.group({
        head: 'Name',
        name: '',
        price: '',
        categories: new FormControl()
      })
    );
  }

  saveItems() {
    const forms = this.form.get('forms') as FormArray;
    let exist = false;
    for (let i = 0; i < forms.length; ++i) {
      const form = forms.at(i);
      exist = this.existsObjectArray(
        form.value,
        this.dishService.getIngredientOptions()
      );
      if (!exist) {
        const dish = {
          name: form.value.name,
          price: form.value.price,
          category: form.value.categories
        };
        this.dishes.push(dish);
        this.dishService.ingredientsOptionChanged.next(this.dishes);
        this.dishService.addIngredientOption(dish);
      }
    }
  }

  removeAt(id: number) {
    this.dishService.deleteIngredientOptione(id);
  }

  existsObjectArray(obj, list: Dish[]) {
    return list.some(el => {
      return el.name === obj.name;
    });
  }

  getForm() {
    return <FormGroup>this.form.get('forms');
  }
}
