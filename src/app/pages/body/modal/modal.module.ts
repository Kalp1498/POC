import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './modal.component';
import { AddUpdateProductComponent } from './add-update-product/add-update-product.component';
import { AddUpdateOrderComponent } from './add-update-order/add-update-order.component';
import { AdvanceSearchOrderComponent } from './advance-search-order/advance-search-order.component';

@NgModule({
  declarations: [
    ModalComponent,
    AddUpdateOrderComponent,
    AddUpdateProductComponent,
    AdvanceSearchOrderComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
  exports: [
    ModalComponent,
    AddUpdateOrderComponent,
    AddUpdateProductComponent,
    AdvanceSearchOrderComponent
  ]
})
export class ModalModule { }
