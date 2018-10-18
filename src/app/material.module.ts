import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatSelectModule,
      MatFormFieldModule,
      MatOptionModule
    ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatSelectModule,
      MatFormFieldModule,
      MatOptionModule
    ],
})
export class ElBaratonMaterialModule { }