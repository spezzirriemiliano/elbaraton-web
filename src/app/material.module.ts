import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatRippleModule,
    MatTooltipModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule
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
      MatInputModule,
      MatSnackBarModule,
      MatPaginatorModule
    ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatSelectModule,
      MatFormFieldModule,
      MatOptionModule,
      MatRippleModule,
      MatTooltipModule,
      MatInputModule,
      MatSnackBarModule,
      MatPaginatorModule
    ],
})
export class ElBaratonMaterialModule { }