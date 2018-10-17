import { Component, Input, OnChanges} from '@angular/core';
import { FilterProduct, Product } from '../../../interfaces';


@Component({
  selector: 'ba-filters',
  templateUrl: './ba-filters.component.pug',
  styleUrls: ['./ba-filters.component.scss']
})
export class BaFiltersComponent implements OnChanges {

    @Input() filters: FilterProduct;
    @Input() products: Array<Product>;

    minPrice: number = 0;
    maxPrice: number = 0;
    maxStock: number = 0;

    ngOnChanges(changes) {
      if (changes.products && this.products) {
        this.calculateLimitValues(this.products);
      }
    }

    calculateLimitValues(products: Array<Product>) {
      const prices = products.map(p => p.price);
      this.maxPrice = Math.max(...prices);
      this.minPrice = Math.min(...prices);
      this.maxStock = Math.max(...products.map(p => p.price));
      console.log('maxPrice: ' + this.maxPrice + ', minPrice: ' + this.minPrice + ', maxStock: ' + this.maxStock);
    }


}