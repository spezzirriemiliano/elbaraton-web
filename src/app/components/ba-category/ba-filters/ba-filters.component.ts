import { Component, Input, OnChanges} from '@angular/core';
import { FilterProduct, Product } from '../../../interfaces';
import { Options } from 'ng5-slider';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'ba-filters',
  templateUrl: './ba-filters.component.pug',
  styleUrls: ['./ba-filters.component.scss']
})
export class BaFiltersComponent implements OnChanges {

    @Input() filters: FilterProduct;
    @Input() products: Array<Product>;

    optionsRangePrice: Options = {};
    optionsRangeQuantity: Options = {};
    availableIndex: number = 0;


    constructor(private currency: CurrencyPipe) {
      
    }

    ngOnChanges(changes) {
      if (changes.products && this.products) {
        this.calculateLimitValues(this.products);
      }
    }

    calculateLimitValues(products: Array<Product>) {
      const prices = products.map(p => p.price);
      const maxPrice = Math.max(...prices);
      const minPrice = Math.min(...prices);
      const maxStock = Math.max(...products.map(p => p.quantity));
      this.optionsRangePrice = {
        floor: minPrice,
        ceil: maxPrice,
        translate: (value: number): string => {
          return this.currency.transform(value, '$', 'symbol' , '1.0-0');
        }
      }

      this.optionsRangeQuantity = {
        floor: 1,
        ceil: maxStock,
        showSelectionBar: true
      };

      this.filters.maxPrice = maxPrice;
      this.filters.minPrice = minPrice;
      this.filters.stockQuantity = 1;
      this.filters.available = 'all';
      
    }

}