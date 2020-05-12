import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ICategory } from '../models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }

  categories = []

  getCategoriesFromFirebase() {
    this.angularFireDatabase.list<ICategory[]>('/categories').valueChanges().subscribe(data => {
      this.categories = data      
    })
  }

  addNewCategoryToFirebase(category: ICategory) {
    return this.angularFireDatabase.object<ICategory>('/categories/' + category.id).set({
      id: category.id,
      name: category.name
    })
  }

  getCategories() {
    return this.categories
  }
}
