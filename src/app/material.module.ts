import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatRippleModule,
    MatTooltipModule,
    MatInputModule
    
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatSelectModule,
      MatFormFieldModule,
      MatOptionModule,
      MatRippleModule,
      MatTooltipModule,
      MatInputModule
    ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatSelectModule,
      MatFormFieldModule,
      MatOptionModule,
      MatRippleModule,
      MatTooltipModule,
      MatInputModule
    ],
})
export class ElBaratonMaterialModule { }