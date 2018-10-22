import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, CartProduct } from '@interfaces/interfaces';
import { ProductService } from '@services/product.service';

@Injectable()
export class CartService {

  cart: Array<CartProduct> = [];

  constructor(public productService: ProductService) {}

  public addProduct(product: Product) {
    if (this.cartProductExist(product.id)) {
      this.addExistingProduct(product.id);
    } else {
      this.addNewProduct(product);
    }
  }

  public addExistingProduct(id: string) {
    const cartProduct : CartProduct = this.cart.find(p => p.productId === id);
    if (cartProduct.quantity < this.productService.getMaxProductStock(id)) {
      cartProduct.quantity ++;
      this.saveCart();
    }
  }

  public removeExistingProduct(id: string) {
    const cartProductIndex : number = this.cart.findIndex(p => p.productId === id);
    if(cartProductIndex > -1) {
      if(this.cart[cartProductIndex].quantity > 1) {
        this.cart[cartProductIndex].quantity--;
      } else {
        this.cart.splice(cartProductIndex, 1);
      }
      this.saveCart();
    }
  }

  public deleteAllExistingProducts(id: string) {
    const cartProductIndex : number = this.cart.findIndex(p => p.productId === id);
    this.cart.splice(cartProductIndex, 1);
  }

  public addNewProduct(product: Product) {
    this.cart.push({
      productId: product.id,
      quantity: 1,
      name: product.name,
      price: product.price
    });
    this.saveCart();
  }

  public cartProductExist(productId: string) : boolean {
    return this.cart.findIndex(cp => cp.productId === productId) > -1;
  }

  public getCartproducts() {
    return this.cart;
  }

  public countProducts() {
    return this.cart.length;
  }

  public getTotal() {
    return this.cart.reduce((preValue, currentValue) => {
      return preValue + (currentValue.price * currentValue.quantity);
    }, 0)
  }

  public saveCart(){
    localStorage.setItem('cartProducts', JSON.stringify(this.cart));
  }

  public getSavedCart() {
    this.cart = JSON.parse(localStorage.getItem('cartProducts')) || [];
  }

  public removeSavedCart() {
    localStorage.removeItem('cartProducts');
  }

  public fakeBuyCart() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  public emptyCart() {
    this.cart = [];
  }
}
