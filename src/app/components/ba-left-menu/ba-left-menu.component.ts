import { Component, Input, OnInit } from '@angular/core';
import { menuAnimation, layoutAnimation, menuItemAnimation } from './ba-left-menu.animations';
import { MenuService } from '@services/menu.service';
import { Category } from '../../interfaces';
import { CategoryService } from '@services/category.service';


@Component({
  selector: 'ba-left-menu',
  templateUrl: './ba-left-menu.component.pug',
  styleUrls: ['./ba-left-menu.component.scss'],
  animations: [ menuAnimation, layoutAnimation, menuItemAnimation ]
})
export class BaLeftMenuComponent implements OnInit{

  categories: Array<Category>;
  levelsIndex = [];
  categoriesMenu: Array<Category>;

  constructor(public menuService: MenuService, public categoryService: CategoryService) {
    this.levelsIndex = [];
  }

  ngOnInit() {
    this.categoryService.getCategories().then(
      (data: Array<Category>) => {
        this.categories = data;
        this.updateCategoriesMenu();
      }
    );
  }

  public goSubLevel(cat, index) {
    if(cat.sublevels) {
      this.levelsIndex.push(index);
      this.updateCategoriesMenu();
    }
  }

  public goBack() {
    this.levelsIndex.pop();
    this.updateCategoriesMenu();
  }

  private updateCategoriesMenu() {
    let categories = this.categories;
    for(const index of this.levelsIndex) {
      categories = categories[index].sublevels;
    }
    this.categoriesMenu = categories;
  }

  closeMenu(){
    this.menuService.closeLeftMenu();
    this.categoriesMenu = this.categories;
    this.levelsIndex = [];
  }

}
