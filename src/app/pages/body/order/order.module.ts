import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { CoreModule } from 'src/app/core/core.module';
import { ModalModule } from 'src/app/pages/body/modal/modal.module';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    OrderComponent    
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
    OrderComponent
  ]
})
export class OrderModule { }
