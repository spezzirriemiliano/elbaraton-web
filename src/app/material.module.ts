import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatRippleModule,
    MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatSelectModule,
      MatFormFieldModule,
      MatOptionModule,
      MatRippleModule,
      MatTooltipModule
    ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatSelectModule,
      MatFormFieldModule,
      MatOptionModule,
      MatRippleModule,
      MatTooltipModule
    ],
})
export class ElBaratonMaterialModule { }