import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces';

@Injectable()
export class ProductService {

  products: Array<Product>;

  constructor(public http: HttpClient) {}

  public getProducts() {
    return this.http.get('/assets/data/products.json').toPromise().then(
      (data: { products: Array<Product> }) => {
        this.products = [ ...data.products ]
        return this.products;
      }
    );
  }

}
