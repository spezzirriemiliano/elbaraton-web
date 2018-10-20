import { Component, Input, OnInit } from '@angular/core';
import { menuAnimation, layoutAnimation, menuItemAnimation } from './ba-left-menu.animations';
import { MenuService } from '@services/menu.service';
import { Category } from '@interfaces/interfaces';
import { CategoryService } from '@services/category.service';
import { Router  } from '@angular/router';


@Component({
  selector: 'ba-left-menu',
  templateUrl: './ba-left-menu.component.pug',
  styleUrls: ['./ba-left-menu.component.scss'],
  animations: [ menuAnimation, layoutAnimation, menuItemAnimation ]
})
export class BaLeftMenuComponent implements OnInit {

  categories: Array<Category>;
  levelsIndex = [];
  categoriesMenu: Array<Category>;

  constructor(
    public menuService: MenuService,
    public categoryService: CategoryService,
    private router: Router ) {
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

  public goSubLevel(category: Category, index) {
    if (category.sublevels) {
      this.levelsIndex.push(index);
      this.updateCategoriesMenu();
    } else {
      this.router.navigate(['category', category.id]);
      this.closeMenu();
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

  closeMenu() {
    this.menuService.closeLeftMenu();
    this.categoriesMenu = this.categories;
    this.levelsIndex = [];
  }

}
