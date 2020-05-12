import { IProduct } from '../models/product.interface';
import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})
@Injectable({
  providedIn: 'root'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], searchText: string, supplier: string, category: string): any {
    if (!products) {
      return []
    }

    if (searchText == '' && supplier == 'Supplier' && category == 'Category') {
      return products
    }

    return products.filter(item => {
      if (searchText != '' && supplier == 'Supplier' && category == 'Category') {
        if (isNaN(parseInt(searchText)) && item['name'].toString().toLowerCase().includes(searchText.toLowerCase())) {
          return item
        } else {
            if (item['id'].toString().toLowerCase().includes(searchText.toLowerCase())) {
              return item
            }
        }
      }

      if (searchText == '' && supplier != 'Supplier' && category == 'Category') {
        return this.filterOnSupplierOrCategory(item, 'supplier', supplier)
      }

      if (searchText == '' && supplier == 'Supplier' && category != 'Category') {
        return this.filterOnSupplierOrCategory(item, 'category', category)
      }

      if (searchText != '' && supplier != 'Supplier' && category == 'Category') {
        return this.filterOnQueryAndField(item, 'supplier', [searchText, supplier])
      }

      if (searchText != '' && supplier == 'Supplier' && category != 'Category') {
        return this.filterOnQueryAndField(item, 'category', [searchText, category])
      }

      if (searchText == '' && supplier != 'Supplier' && category != 'Category') {
        if (
          item['supplier'].toString().toLowerCase().includes(supplier.toLowerCase()) &&
          item['category'].toString().toLowerCase().includes(category.toLowerCase())
        ) {
          return item
        }
      }

      if (searchText != '' && supplier != 'Supplier' && category != 'Category') {
        if (
          item['id'].toString().toLowerCase().includes(searchText.toLowerCase()) ||
          item['name'].toString().toLowerCase().includes(searchText.toLowerCase()) &&
          item['supplier'].toString().toLowerCase().includes(supplier.toLowerCase()) && 
          item['category'].toString().toLowerCase().includes(category.toLowerCase())
        ) {
          return item
        }
      }
    })
  }

  filterOnSupplierOrCategory(item, field, value) {
    if (item[field].toString().toLowerCase().includes(value.toLowerCase())) {
      return item
    }
  }

  filterOnQueryAndField(item, field: string, value: string[]) {
    if (
      item['id'].toString().toLowerCase().includes(value[0].toLowerCase()) ||
      item['name'].toString().toLowerCase().includes(value[0].toLowerCase()) &&
      item[field].toString().toLowerCase().includes(value[1].toLowerCase())
    ) {
      return item
    }
  }
}