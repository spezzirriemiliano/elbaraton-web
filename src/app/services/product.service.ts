import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces';

@Injectable()
export class ProductService {

  products: Array<Product>;

  constructor(public http: HttpClient) {}

  public getProductsByCategory(categoryId: number) {
    return this.http.get('/assets/data/products.json').toPromise().then(
      (data: { products: Array<Product> }) => {
        const products = [ ...data.products ]
        return products
          .filter( p => p.sublevel_id === categoryId )
          .map(p => {
            p.price = parseInt(p.price.toString().replace(/([$,])/g, ''))
            return p;
          })
      }
    );
  }

  /*
  public getProducts() {
    return this.http.get('/assets/data/products.json').toPromise().then(
      (data: { products: Array<Product> }) => {
        this.products = [ ...data.products ]
        return this.products;
      }
    );
  }*/

  /*public getProductsCached() {
    return this.products;
  }
*/
/*
  public getProductsByCategory(categoryId: number) {
    return this.products.filter((product: Product) => {
      return product.sublevel_id === categoryId;
    });
  }
*/
}
