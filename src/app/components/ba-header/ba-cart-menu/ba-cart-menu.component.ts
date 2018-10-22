import { Component, OnInit } from '@angular/core';
import { menuAnimation, layoutAnimation } from './ba-cart-menu.animations';
import { MenuService } from '@services/menu.service';
import { CartService } from '@services/cart.service';
import { CardData } from '@interfaces/interfaces';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'ba-cart-menu',
  templateUrl: './ba-cart-menu.component.pug',
  styleUrls: ['./ba-cart-menu.component.scss'],
  animations: [ menuAnimation, layoutAnimation ]
})
export class BaCartMenuComponent implements OnInit {

  email: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  cardData: CardData;

  constructor(
    public menuService: MenuService,
    public cartService: CartService,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.cartService.getSavedCart();
    this.clearFieldValues();
  }

  closeMenu() {
    this.clearFieldValues();
    this.menuService.closeCartMenu();
  }

  displayTotal() {
    return this.cartService.getTotal();
  }

  validateBuy() {
    return this.fakeCardValidation() && !this.emailFormControl.hasError('email') && !this.emailFormControl.hasError('required') && this.cartService.countProducts() > 0;
  }

  fakeCardValidation() {
    return this.cardData.number && this.cardData.name && this.cardData.secureCode && this.cardData.expireDate;
  }

  clearFieldValues() {
    this.cardData = {
      number: undefined,
      name: undefined,
      secureCode: undefined,
      expireDate: undefined
    }
  }

  buyCart() {
    this.cartService.fakeBuyCart().then(() => {
      this.snackBar.open('Su compra fue realizada con éxito', '', {
        duration: 2000,
      });
      this.cartService.emptyCart();
      this.clearFieldValues();
      this.cartService.saveCart();
      this.menuService.closeCartMenu();
    });
  }
}
