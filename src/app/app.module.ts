// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

// Components
import { AppComponent } from './app.component';
import { BaHeaderComponent } from '@components/ba-header/ba-header.component';
import { BaLeftMenuComponent } from '@components/ba-header/ba-left-menu/ba-left-menu.component';
import { BaCartMenuComponent } from '@components/ba-header/ba-cart-menu/ba-cart-menu.component';
import { BaHomeComponent } from '@components/ba-home/ba-home.component';
import { BaCategoryComponent } from '@components/ba-category/ba-category.component';
import { BaFiltersComponent } from '@components/ba-category/ba-filters/ba-filters.component';
import { BaProductOrderComponent } from '@components/ba-category/ba-product-order/ba-product-order.component';
import { BaProductItemComponent } from '@components/ba-category/ba-product-item/ba-product-item.component';
import { BaCartItemComponent } from '@components/ba-header/ba-cart-menu/ba-cart-item/ba-cart-item.component';
import { BaPaymentSectionComponent } from '@components/ba-header/ba-cart-menu/ba-payment-section/ba-payment-section.component';

// Services
import { MenuService } from '@services/menu.service';
import { CategoryService } from '@services/category.service';
import { ProductService } from '@services/product.service';
import { CartService } from '@services/cart.service';

// Filters
import { ProductFilterPipe } from './pipes/product.filter.pipe';
import { OrderByPipe } from './pipes/order.by.pipe';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Material modules
import { ElBaratonMaterialModule } from './material.module';


// Externals
import { Ng5SliderModule } from 'ng5-slider';



@NgModule({
  declarations: [
    AppComponent,
    BaHeaderComponent,
    BaLeftMenuComponent,
    BaCartMenuComponent,
    BaCartItemComponent,
    BaHomeComponent,
    BaCategoryComponent,
    BaFiltersComponent,
    BaProductOrderComponent,
    BaProductItemComponent,
    BaPaymentSectionComponent,
    ProductFilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ElBaratonMaterialModule,
    Ng5SliderModule,
    ReactiveFormsModule
  ],
  providers: [
    MenuService,
    CategoryService,
    ProductService,
    CurrencyPipe,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
