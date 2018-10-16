import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BaHeaderComponent } from '@components/ba-header/ba-header.component';
import { BaLeftMenuComponent } from '@components/ba-left-menu/ba-left-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuService } from '@services/menu.service';
import { CategoryService } from '@services/category.service';
import { ProductService } from '@services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    BaHeaderComponent,
    BaLeftMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    MenuService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
