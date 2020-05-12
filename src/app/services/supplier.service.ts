import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ISupplier } from '../models/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }

  suppliers = [];

  getSuppliersFromFirebase() {
    this.angularFireDatabase.list<ISupplier[]>('/suppliers').valueChanges().subscribe(data => {
      this.suppliers = data      
    })
  }

  getSuppliers() {
    return this.suppliers
  }

  addNewSupplierToFirebase(supplier: ISupplier) {
    return this.angularFireDatabase.object<ISupplier>('/suppliers/' + supplier.id).set({
      id: supplier.id,
      name: supplier.name
    })
  }
}
