import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';
import {DishService} from '../../../services/dish.service';

@Component({
  selector: 'app-item-array',
  templateUrl: './item-array.component.html',
  styleUrls: ['../../itemManager.component.scss']
})
export class ItemArrayComponent implements OnInit {
  formBuilder = new FormBuilder();
  @Input() itemsFormArray: FormArray;
  @Output() removed: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private dishService: DishService
  ) {}

  ngOnInit() {}

}
