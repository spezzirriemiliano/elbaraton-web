import { Component, Output, EventEmitter } from '@angular/core';
import { ProductOrder } from '@interfaces/interfaces';


@Component({
  selector: 'ba-product-order',
  templateUrl: './ba-product-order.component.pug',
  styleUrls: ['./ba-product-order.component.scss']
})
export class BaProductOrderComponent {

  actualOrder: ProductOrder = {
    orderField: '',
    reverse: false
  }
  
  constructor(){}

  @Output() orderChanged = new EventEmitter<ProductOrder>();

  setOrder(orderField: string) {
    let reverse = false;
    if (orderField === this.actualOrder.orderField) {
      this.actualOrder.reverse = !this.actualOrder.reverse;
    } else {
      this.actualOrder.reverse = false;
    }
    this.actualOrder.orderField = orderField    
    this.orderChanged.emit(this.actualOrder);
  }


}


