import { Component, Input } from '@angular/core';
import { CartService } from '@services/cart.service';


@Component({
  selector: 'ba-cart-item',
  templateUrl: './ba-cart-item.component.pug',
  styleUrls: ['./ba-cart-item.component.scss']
})
export class BaCartItemComponent {

  @Input() cartProduct;

  constructor(
    public cartService: CartService) {
  }

  addExistingProduct(id: string) {
    this.cartService.addExistingProduct(id);
  }

  removeExistingProduct(id: string) {
    this.cartService.removeExistingProduct(id);
  }

}
