import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, CartProduct } from '@interfaces/interfaces';
import { ProductService } from '@services/product.service';

@Injectable()
export class CartService {

  cart: Array<CartProduct> = [];

  constructor(public productService: ProductService) {}


  public addProduct(product: Product) {
    
    const indexCartProduct = this.getCartProductIndex(product.id);

    if (indexCartProduct > -1) {
      const cartProduct = this.cart[indexCartProduct];
      if (cartProduct.quantity < this.productService.getMaxProductStock(product.id)) {
        cartProduct.quantity ++;
      }
    } else {
      this.cart.push({
        productId: product.id,
        quantity: 1,
        name: product.name
      });
    }
  }

  private getCartProductIndex(productId: string) : number {
    return this.cart.findIndex(cp => cp.productId === productId);
  }

  public getCartproducts() {
    return this.cart;
  }

  public countProducts() {
    return this.cart.length;
  }

}
