import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CoreModule,
    CommonModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
