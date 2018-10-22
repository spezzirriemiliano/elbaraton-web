import { Component, Input } from '@angular/core';
import { CartService } from '@services/cart.service';
import { Product } from '@interfaces/interfaces';
import { MenuService } from '@services/menu.service';

@Component({
  selector: 'ba-product-item',
  templateUrl: './ba-product-item.component.pug',
  styleUrls: ['./ba-product-item.component.scss']
})
export class BaProductItemComponent {

  @Input() product;

  constructor(
    public cartService: CartService,
    public menuService: MenuService
  ) {}

  public addProduct(product: Product) {

    if(this.cartService.cartProductExist(product.id)) {
      this.menuService.openCartMenu();
    } else {
      this.cartService.addProduct(product);
    }
  }

}


