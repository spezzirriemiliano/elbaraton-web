import { Component, Input } from '@angular/core';
import { CardData } from '@interfaces/interfaces';

@Component({
  selector: 'ba-payment-section',
  templateUrl: './ba-payment-section.component.pug',
  styleUrls: ['./ba-payment-section.component.scss']
})
export class BaPaymentSectionComponent {

  @Input() cardData: CardData;

}
