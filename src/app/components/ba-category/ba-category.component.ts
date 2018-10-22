import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProductService } from '@services/product.service';
import { Product, FilterProduct, ProductOrder } from '@interfaces/interfaces';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'ba-category',
  templateUrl: './ba-category.component.pug',
  styleUrls: ['./ba-category.component.scss']
})
export class BaCategoryComponent implements OnInit{

  products: Array<Product>;
  filters: FilterProduct = {
    available: 'all',
    minPrice: 0,
    maxPrice: 0,
    stockQuantity: 0,
    textField: ''
  };

  order: ProductOrder = {
    orderField: '',
    reverse: false
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ){}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      const id = parseInt(routeParams.id);
      this.getProducts(id);
    });

    this.paginator._intl.itemsPerPageLabel = 'Productos por página';
  }

  getProducts(categoryId: number) {
    this.productService.getProductsByCategory(categoryId).then((products: Array<Product>) => {
      this.products = products
    });
  }

  onOrderChanged(order: ProductOrder) {
    this.order = order;
  }

}
