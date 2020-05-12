import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

import { ModalService } from 'src/app/services/modal.service';
import { ToastService } from 'src/app/services/toast.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-add-update-order',
  templateUrl: './add-update-order.component.html',
  styleUrls: ['./add-update-order.component.scss']
})
export class AddUpdateOrderComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public modalService: ModalService,
    private toastService: ToastService,
    private orderService: OrderService,
    private angularFireDatabase: AngularFireDatabase
  ) { }

  addUpdateOrderForm = this.formBuilder.group({
    id: [],
    customerName: ["", Validators.required],
    address: ["", Validators.required],
    city: ["", Validators.required],
    shipper: ["", Validators.required],
    orderDate: ["", Validators.required],
    orderTotal: ["", Validators.required]
  })

  orderDate: moment.Moment;

  ngOnInit() {
    this.handleOnInit();
  }

  handleOnInit() {
    if (this.modalService.formProperty == 'edit') {
      this.addUpdateOrderForm.patchValue(this.modalService.fethcedOrder)
      this.addUpdateOrderForm.patchValue({
        orderDate: {
          year: parseInt(this.modalService.fethcedOrder.orderDate.split("-")[0]), 
          month: parseInt(this.modalService.fethcedOrder.orderDate.split("-")[1]),
          day: parseInt(this.modalService.fethcedOrder.orderDate.split("-")[2])
        }
      })
    }
  }

  addUpdateOrder() {
    this.refactoringDates(this.addUpdateOrderForm.get('orderDate').value)
    this.orderDate = moment(this.addUpdateOrderForm.get('orderDate').value['year'] + '-' + this.addUpdateOrderForm.get('orderDate').value['month'] + '-' + this.addUpdateOrderForm.get('orderDate').value['day'], 'YYYY-MM-DD')
    this.addUpdateOrderForm.patchValue({
      orderDate: this.orderDate['_i']
    })

    if (this.modalService.formProperty == 'add') {
      let sub = this.angularFireDatabase.list('/orders').valueChanges().subscribe(data => {
        this.addUpdateOrderForm.patchValue({
          id: data.length + 1,
        })
        this.addOrderToFirebase();
        sub.unsubscribe();
      });
    } else {
      if (window.confirm('Are you sure, you want to update the order details?')) {
        this.addOrderToFirebase();
      }
    }
    this.modalService.hideModal();
  }

  refactoringDates (date) {
    if (date['day'] < 10) {
      date['day'] = ("0"+date['day']).slice(-2)
    }
    
    if (date['month'] < 10) {
      date['month'] = ("0"+date['month']).slice(-2)
    }
  }

  addOrderToFirebase() {
    this.orderService.addUpdateProduct(this.addUpdateOrderForm.value).then(
      () => {
        this.toastService.infoToaster(this.modalService.formProperty == 'add' ? 'Order added successfully' : 'Order updated successfully')
      }
    )
  }
}