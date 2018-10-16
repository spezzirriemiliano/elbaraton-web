import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces';
import { ProductService } from '@services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products: Array<Product>;

  constructor(
    private productService: ProductService
  ){}
  
  ngOnInit() {

    this.productService.getProducts().then(
      (data: Array<Product>) => {
        this.products = data;
      }
    );

  }

}
