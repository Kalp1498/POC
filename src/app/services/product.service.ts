import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }

  getProductFromFirebase(): Observable<IProduct[]> {
    return this.angularFireDatabase.list<IProduct>('/products').valueChanges();
  }

  addUpdateProduct(product: IProduct){
    return this.angularFireDatabase.object('/products/' + (product.id - 1)).set(product);
  }
}
