import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IOrder } from '../models/order.interface';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }

  customers = [];
  shippers = [];

  searchSubject = new Subject();

  getOrdersFromFirebase(): Observable<IOrder[]> {
    return this.angularFireDatabase.list<IOrder>('/orders').valueChanges();
  }

  getCustomers() {
    return this.customers
  }

  getShippers() {
    return this.shippers
  }

  addUpdateProduct(order: IOrder) {
    return this.angularFireDatabase.object('/orders/' + (order.id - 1)).set(order);
  }
}
