import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-manager',
  templateUrl: './itemManager.component.html',
  styleUrls: ['./itemManager.component.scss']
})
export class ItemManagerComponent implements OnInit {
  site: string;
  innerWidth: any;
  isMobile = false;
  classes = [
    {
      'col-3': !this.isMobile,
      'col-0': this.isMobile,
      'col-md-3': !this.isMobile,
      'col-md-0': this.isMobile,
      'col-sm-3': !this.isMobile,
      'col-sm-0': this.isMobile},
    {
    }
  ];

  constructor() {
    this.site = 'settings';
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.isMobile = this.innerWidth <= 770;
  }

  setPage(option: string) {
    this.site = option;
  }

  toggleMenu() {
    this.isMobile = !this.isMobile;
  }

  getMenuPosition() {
    return this.isMobile ? 0 : -100;
  }

  getDisplay() {
    return this.isMobile ? 'none' : 'block';
  }
}
