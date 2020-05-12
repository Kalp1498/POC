import { Component, OnInit } from '@angular/core';
import { FilterProductsPipe } from 'src/app/pipes/filter-products.pipe';
import { IProduct } from 'src/app/models/product.interface';
import { ExcelService } from 'src/app/services/excel.service';
import { ModalService } from 'src/app/services/modal.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ProductService } from 'src/app/services/product.service';
import { SupplierService } from 'src/app/services/supplier.service';
import { CategoryService } from 'src/app/services/category.service';

import { opacityAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss', '../common-scss/product-order.scss'],
  animations: [opacityAnimation]
})

export class ProductComponent implements OnInit {

  constructor(
    private filterProductsPipe: FilterProductsPipe,
    public modalService: ModalService,
    private excelService: ExcelService,
    public spinnerService: SpinnerService,
    private productService: ProductService,
    public categoryService: CategoryService,
    public supplierService: SupplierService,
  ) { }

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  collectionSize: number;
  pageSize: number;
  page: number;

  query: string = '';
  supplier: string = 'Supplier';
  category: string = 'Category';

  opacityAnimationValue: string = 'loading';

  ngOnInit() {
    this.handleOnInit()
  }

  handleOnInit() {
    this.page = 1;
    this.pageSize = 10;
    this.spinnerService.showSpinner = true;
    this.supplierService.getSuppliersFromFirebase();
    this.categoryService.getCategoriesFromFirebase();
    this.getProdcuts();
  }

  getProdcuts() { 
    this.productService.getProductFromFirebase().subscribe(data => {      
      this.products = data;
      this.filteredProducts = data;
      this.collectionSize = this.products.length;
      this.spinnerService.showSpinner = false;
      this.opacityAnimationValue = 'loaded';
    })
  }

  getProductsFromSearch() {
    this.products = this.filterProductsPipe.transform(this.filteredProducts, this.query, this.supplier, this.category)
    this.collectionSize = this.products.length
  }

  exportToExcel() {
    let fileName = 'products.csv';
    let columnNames = ["Id", "Name", "Supplier", "Category", "Price", "Discounted", "Discount"];
    this.excelService.exportToExcel(fileName, columnNames, this.products.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize))
  }

  addUpdateProduct(formProperty: string, product? : IProduct) {
    this.modalService.displayModal(formProperty, product, null)
  }
}