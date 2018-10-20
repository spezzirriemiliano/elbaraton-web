import { Component, OnInit } from '@angular/core';
import { menuAnimation, layoutAnimation } from './ba-cart-menu.animations';
import { MenuService } from '@services/menu.service';
import { CartService } from '@services/cart.service';


@Component({
  selector: 'ba-cart-menu',
  templateUrl: './ba-cart-menu.component.pug',
  styleUrls: ['./ba-cart-menu.component.scss'],
  animations: [ menuAnimation, layoutAnimation ]
})
export class BaCartMenuComponent implements OnInit {


  constructor(
    public menuService: MenuService,
    public cartService: CartService) {
  }

  ngOnInit() {
    /*
    this.categoryService.getCategories().then(
      (data: Array<Category>) => {
        this.categories = data;
        this.updateCategoriesMenu();
      }
    );
    */
  }


  closeMenu() {
    this.menuService.closeCartMenu();
  }

}
