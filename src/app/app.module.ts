import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { BaHeaderComponent } from '@components/ba-header/ba-header.component';
import { BaLeftMenuComponent } from '@components/ba-left-menu/ba-left-menu.component';
import { BaHomeComponent } from '@components/ba-home/ba-home.component';
import { BaCategoryComponent } from '@components/ba-category/ba-category.component';
import { BaFiltersComponent } from '@components/ba-category/ba-filters/ba-filters.component';
import { BaProductOrderComponent } from '@components/ba-category/ba-product-order/ba-product-order.component';

// Services
import { MenuService } from '@services/menu.service';
import { CategoryService } from '@services/category.service';
import { ProductService } from '@services/product.service';

// Filters
import { ProductFilterPipe } from './pipes/product.filter.pipe';
import { OrderByPipe } from './pipes/order.by.pipe';

// Routing
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BaHeaderComponent,
    BaLeftMenuComponent,
    BaHomeComponent,
    BaCategoryComponent,
    BaFiltersComponent,
    BaProductOrderComponent,
    ProductFilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MenuService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
