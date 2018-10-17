import { Pipe, PipeTransform } from '@angular/core';
import { Product, FilterProduct } from '../interfaces';

@Pipe({
    name: 'productFilter',
    pure: false
})
export class ProductFilterPipe implements PipeTransform {
    transform(items: Product[], filter: FilterProduct): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item) => {
            return item.available === filter.available && 
                item.price >= filter.minPrice &&
                item.price <= filter.maxPrice &&
                item.quantity >= filter.stockQuantity
        });
    }
}