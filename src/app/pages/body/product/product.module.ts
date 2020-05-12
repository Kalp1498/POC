import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { ProductComponent } from './product.component';
import { ModalModule } from 'src/app/pages/body/modal/modal.module';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    NgbModule,
    CoreModule,
    ModalModule,
    FormsModule,
    CommonModule,
    NgbPaginationModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
