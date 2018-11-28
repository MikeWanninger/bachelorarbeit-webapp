import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-item-control',
  templateUrl: './item-control.component.html',
  styleUrls: ['../../../itemManager.component.scss']
})
export class ItemControlComponent implements OnInit {
  formBuilder = new FormBuilder();
  @Input() index: number;
  @Input() item: FormGroup;
  @Output() removed: EventEmitter<number> = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit() {}

}
