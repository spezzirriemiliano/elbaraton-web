import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@interfaces/interfaces';

@Injectable()
export class ProductService {

  productsCached: Array<Product>;

  constructor(public http: HttpClient) {}

  public getProductsByCategory(categoryId: number) {
    return new Promise((resolve, reject) => {
      if (this.productsCached) {
        resolve(this.productsCached.filter( p => p.sublevel_id === categoryId ));
      } else {
        this.http.get('/assets/data/products.json').toPromise().then(
          (data: { products: Array<Product> }) => {
            const products = data.products.map(p => {
              p.price = parseInt(p.price.toString().replace(/([$,])/g, ''))
              return p;
            });
            this.productsCached = products;
            resolve(products.filter( p => p.sublevel_id === categoryId ));
          }
        );
      }
    });
  }

  getMaxProductStock(productId: string) {
    return this.productsCached.find(p => p.id === productId).quantity;
  }

}
