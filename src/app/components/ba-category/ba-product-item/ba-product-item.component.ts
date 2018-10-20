import { Component, Input } from '@angular/core';

@Component({
  selector: 'ba-product-item',
  templateUrl: './ba-product-item.component.pug',
  styleUrls: ['./ba-product-item.component.scss']
})
export class BaProductItemComponent {

  @Input() product;

}


