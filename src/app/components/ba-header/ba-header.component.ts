import { Component } from '@angular/core';
import { MenuService } from '@services/menu.service';
import { CartService } from '@services/cart.service';

@Component({
  selector: 'ba-header',
  templateUrl: './ba-header.component.pug',
  styleUrls: ['./ba-header.component.scss']
})
export class BaHeaderComponent {

  constructor(
    public menuService: MenuService,
    public cartService: CartService
  ){}
}
