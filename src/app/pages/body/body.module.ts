import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyComponent } from './body.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockGridComponent } from './stock-grid/stock-grid.component';

import { OrderModule } from './order/order.module';
import { CoreModule } from 'src/app/core/core.module';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { StockGridModule } from './stock-grid/stock-grid.module';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ProductComponent
      },
      {
        path: 'orders',
        component: OrderComponent
      },
      {
        path: 'stockgrid',
        component: StockGridComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [ 
    CoreModule,
    OrderModule,
    CommonModule,
    ProductModule,
    StockGridModule,
    DashboardModule,
    RouterModule.forChild(routes)
  ]
})
export class BodyModule { }
