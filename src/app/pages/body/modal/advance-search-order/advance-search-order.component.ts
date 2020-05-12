import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { IAdvanceSearch } from '../../../../models/advance-search.interface';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-advance-search-order',
  templateUrl: './advance-search-order.component.html',
  styleUrls: ['./advance-search-order.component.scss', '../add-update-order/add-update-order.component.scss']
})
export class AdvanceSearchOrderComponent implements OnInit {

  constructor(
    public orderService: OrderService,
    private modalService: ModalService
  ) { }

  fromDateMoment: moment.Moment;
  toDateMoment: moment.Moment;

  selectedFields: IAdvanceSearch = {};

  ngOnInit() {
    
  }

  onDateSelect(event) {
    console.log(event)
  }

  onSearchSubmit() {
    if (this.selectedFields.selectedFromDate) {
      this.refactoringDates(this.selectedFields.selectedFromDate)
      this.fromDateMoment = moment(this.selectedFields.selectedFromDate['year'] + '-' + this.selectedFields.selectedFromDate['month'] + '-' + this.selectedFields.selectedFromDate['day'], 'YYYY-MM-DD')
      this.selectedFields.selectedFromDate = this.fromDateMoment['_i']
    }

    if (this.selectedFields.selectedToDate) {
      this.refactoringDates(this.selectedFields.selectedToDate)
      this.toDateMoment = moment(this.selectedFields.selectedToDate['year'] + '-' + this.selectedFields.selectedToDate['month'] + '-' + this.selectedFields.selectedToDate['day'], 'YYYY-MM-DD')
      this.selectedFields.selectedToDate = this.toDateMoment["_i"]
    }

    this.orderService.searchSubject.next(this.selectedFields)
    this.modalService.hideModal()
  }

  refactoringDates (date) {
    if (date['day'] < 10) {
      date['day'] = ("0"+date['day']).slice(-2)
    }
    
    if (date['month'] < 10) {
      date['month'] = ("0"+date['month']).slice(-2)
    }
  }
}
