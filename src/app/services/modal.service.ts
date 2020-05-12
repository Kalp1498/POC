import { isUndefined } from 'util';
import { Injectable } from '@angular/core';
import { IOrder } from '../models/order.interface';
import { IProduct } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor( ) { }

  formProperty: string;

  fetchedProduct: IProduct;
  fethcedOrder: IOrder;

  showModal: boolean = false;
  showAddUpdateProductModal: boolean = false;
  showAdvanceSearchModal: boolean = false;
  showAddUpdateOrderModal: boolean = false;

  displayModal(formProperty: string, product?: IProduct, order?: IOrder) {
    this.showModal = true;
    var body = document.body
    body.style.overflow = "hidden"

    if (order == null && product != null || isUndefined(product)) {
      this.showAddUpdateProductModal = true;  
      if (formProperty == 'edit') {
        this.fetchedProduct = product;
      }
    } else {
      this.showModal = true;
      if (formProperty == 'add') {
        this.showAddUpdateOrderModal = true;
      } else if (formProperty == 'edit') {
        this.fethcedOrder = order;
        this.showAddUpdateOrderModal = true;
      } else {
        this.showAdvanceSearchModal = true;
      }
    }
    
    this.formProperty = formProperty
  }

  hideModal() {
    this.showModal = false;
    this.showAddUpdateProductModal = false;
    this.showAddUpdateOrderModal = false;
    this.showAdvanceSearchModal = false;

    var body = document.body
    body.style.overflow = "auto"
  }
}