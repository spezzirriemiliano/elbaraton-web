import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaHomeComponent } from '@components/ba-home/ba-home.component';
import { BaCategoryComponent } from '@components/ba-category/ba-category.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BaHomeComponent },
  { path: 'category/:id', component: BaCategoryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
