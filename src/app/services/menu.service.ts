import { Injectable, Inject } from '@angular/core';

@Injectable()
export class MenuService {

  showLeftMenu: boolean = false;

  constructor() {}

  toggleLeftMenu() {
    this.showLeftMenu = !this.showLeftMenu;
  }

  closeLeftMenu() {
    this.showLeftMenu = false;
  }

  openLeftMenu() {
    this.showLeftMenu = true;
  }

  getShowLeftMenu() {
      return this.showLeftMenu;
  }

}
