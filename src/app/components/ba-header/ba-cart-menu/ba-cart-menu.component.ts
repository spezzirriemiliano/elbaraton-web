import { Component, OnInit } from '@angular/core';
import { menuAnimation, layoutAnimation } from './ba-cart-menu.animations';
import { MenuService } from '@services/menu.service';
import { CartService } from '@services/cart.service';
import { CardData } from '@interfaces/interfaces';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ba-cart-menu',
  templateUrl: './ba-cart-menu.component.pug',
  styleUrls: ['./ba-cart-menu.component.scss'],
  animations: [ menuAnimation, layoutAnimation ]
})
export class BaCartMenuComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  cardData: CardData = {
    number: 12321,
    name: undefined,
    secureCode: undefined,
    expireDate: undefined
  };

  constructor(
    public menuService: MenuService,
    public cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.getSavedCart();
  }

  closeMenu() {
    this.menuService.closeCartMenu();
  }

  displayTotal() {
    return this.cartService.getTotal();
  }

}
