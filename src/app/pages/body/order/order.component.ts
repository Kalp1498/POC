import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/order.interface';
import { OrderService } from 'src/app/services/order.service';
import { ExcelService } from 'src/app/services/excel.service';
import { ModalService } from 'src/app/services/modal.service';
import { SpinnerService } from 'src/app/services/spinner.service';

import { opacityAnimation } from 'src/app/animations/animations';
import { FilterOrdersPipe } from 'src/app/pipes/filter-orders.pipe';

import { IAdvanceSearch } from '../../../models/advance-search.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss', '../common-scss/product-order.scss'],
  animations: [opacityAnimation]
})
export class OrderComponent implements OnInit {

  constructor(
    public modalService: ModalService,
    private orderService: OrderService,
    private excelService: ExcelService,
    public spinnerService: SpinnerService,
    private filterOrderPipe: FilterOrdersPipe
  ) { }

  orders: IOrder[] = [];
  filteredOrders: IOrder[] = [];

  query: string = '';
  clearSearchResults: boolean = false;

  collectionSize: number;
  pageSize: number;
  page: number;

  opacityAnimationValue: string = 'loading';

  ngOnInit() {
    this.handleOnInit()
  }

  handleOnInit() {
    this.page = 1;
    this.pageSize = 10;
    this.spinnerService.showSpinner = true;
    this.getOrders()

    this.orderService.searchSubject.subscribe((selectedFields: IAdvanceSearch) => {
      if (Object.keys(selectedFields).length > 0) {
        this.clearSearchResults = true
        this.orders = this.filterOrderPipe.transform(this.filteredOrders, selectedFields)
        this.collectionSize = this.orders.length
      }
    })
  }

  getOrders() {
    this.orderService.getOrdersFromFirebase().subscribe(data => {
      this.orders = data
      this.filteredOrders = data
      this.collectionSize = this.orders.length
      this.spinnerService.showSpinner = false
      this.opacityAnimationValue = 'loaded';
      this.orderService.customers = [...new Set(data.map(x => x.customerName))]
      this.orderService.shippers = [...new Set(data.map(x => x.shipper))]
    })
  }

  getOrdersFromSearch() {
    this.orders = this.filterOrderPipe.transform(this.filteredOrders, this.query);
    this.collectionSize = this.orders.length;
  }

  clearSearch() {
    this.orders = this.filteredOrders
    this.clearSearchResults = false;
  }

  exportToExcel() {
    let fileName = 'orders.csv';
    let columnNames = ["Id", "Customer Name", "Shipper", "Order Date", "Order Total"];
    this.excelService.exportToExcel(fileName, columnNames, this.orders.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize))
  }

  addUpdateOrder(formProperty: string, order?: IOrder) {
    this.modalService.displayModal(formProperty, null, order)
  }
}