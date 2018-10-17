import { Component, Input} from '@angular/core';
import { FilterProduct } from '../../../interfaces';


@Component({
  selector: 'ba-filters',
  templateUrl: './ba-filters.component.pug',
  styleUrls: ['./ba-filters.component.scss']
})
export class BaFiltersComponent {

    @Input() filters: FilterProduct;

}