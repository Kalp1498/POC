import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockGridComponent } from './stock-grid.component';

@NgModule({
  declarations: [
    StockGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StockGridComponent
  ]
})
export class StockGridModule { }
