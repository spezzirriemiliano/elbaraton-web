import { Component } from '@angular/core';
import { MenuService } from '@services/menu.service';

@Component({
  selector: 'ba-header',
  templateUrl: './ba-header.component.pug',
  styleUrls: ['./ba-header.component.scss']
})
export class BaHeaderComponent {

  constructor(public menuService: MenuService){}
}
