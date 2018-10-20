import { Component, Input } from '@angular/core';
import { CartService } from '@services/cart.service';
import { Product } from '@interfaces/interfaces';

@Component({
  selector: 'ba-product-item',
  templateUrl: './ba-product-item.component.pug',
  styleUrls: ['./ba-product-item.component.scss']
})
export class BaProductItemComponent {

  @Input() product;

  constructor(public cartService: CartService) {

  }

  public addProduct(product: Product) {
    this.cartService.addProduct(product);
  }

}


