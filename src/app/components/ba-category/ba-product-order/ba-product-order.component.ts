import { Component, Output, EventEmitter } from '@angular/core';
import { ProductOrder } from '@interfaces/interfaces';


@Component({
  selector: 'ba-product-order',
  templateUrl: './ba-product-order.component.pug',
  styleUrls: ['./ba-product-order.component.scss']
})
export class BaProductOrderComponent {

  optionsOpened: false;

  actualOrder: ProductOrder = {
    orderField: 'price',
    reverse: false
  }

  orderOptions = [
    {
      field: 'price',
      label: 'Menor Precio',
      reverseLabel: 'Mayor Precio'
    },
    {
      field: 'available',
      label: 'No disponibles primero',
      reverseLabel: 'Disponibles primero'
    },
    {
      field: 'quantity',
      label: 'Menor Cantidad',
      reverseLabel: 'Mayor Cantidad'
    }
  ]
  
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

  getLabel(field: string, reverse: boolean) {
    const fieldOption = this.orderOptions.find(o => o.field == field);
    if(fieldOption) {
      if (this.actualOrder.orderField == field) {
        if(reverse == true) {
          return fieldOption.label;
        } else {
          return fieldOption.reverseLabel;
        }
      } else {
        return fieldOption.label;
      }
    }
    else {
      return 'Orden';
    }
  }


}


