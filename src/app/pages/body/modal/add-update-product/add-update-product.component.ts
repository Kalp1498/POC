import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

import { ToastService } from 'src/app/services/toast.service';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.scss']
})
export class AddUpdateProductComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public modalService: ModalService,
    private toastService: ToastService,
    private productService: ProductService,
    public supplierService: SupplierService,
    public categoryService: CategoryService,
    private angularFireDatabase: AngularFireDatabase
    ) { }
    
  showDiscount: boolean = true;
  addNewCategory: boolean = false;
  addNewSupplier: boolean = false;

  supplier: string = "Chris";
  category: string = "Mobile";

  addUpdateProductForm = this.formBuilder.group({
    id: [],
    name: ["", Validators.required],
    supplier: [""],
    category: [""],
    price: ["", Validators.required],
    discounted: ["", Validators.required],
    discount: [""]
  })

  ngOnInit(): void {
    this.handleOnInit()
  }

  handleOnInit() {
    if (this.modalService.formProperty == 'edit') {
      this.addUpdateProductForm.patchValue(this.modalService.fetchedProduct)
      this.supplier = this.modalService.fetchedProduct.supplier;
      this.category = this.modalService.fetchedProduct.category;
      if (this.modalService.fetchedProduct.discounted == 'No') {
        this.showDiscount = false
      }
    }
    else {
      this.showDiscount = false
    }
  }

  handleSupplier() {
    this.addNewSupplier = !this.addNewSupplier;
    this.addUpdateProductForm.get('supplier').setValidators(this.addNewSupplier ? Validators.required : null);
    if (this.addNewSupplier) {
      this.addUpdateProductForm.patchValue({
        supplier: ''
      })
    }
  }

  handleCategory() {
    this.addNewCategory = !this.addNewCategory;
    this.addUpdateProductForm.get('category').setValidators(this.addNewCategory ? Validators.required : null);
    if (this.addNewCategory) {
      this.addUpdateProductForm.patchValue({
        category: ''
      })
    }
  }

  isShowDiscount(event) {
    event.target.value == 'Yes' ? this.showDiscount = true : this.showDiscount = false
    this.addUpdateProductForm.get('discount').setValidators(this.showDiscount ? Validators.required : null);
  }

  addUpdateProduct() {
    if (!this.addNewSupplier) {
      this.addUpdateProductForm.patchValue({
        supplier: this.supplier
      })
    }

    if (!this.addNewCategory) {
      this.addUpdateProductForm.patchValue({
        category: this.category
      })
    }

    if (this.modalService.formProperty == 'add') {
      let sub = this.angularFireDatabase.list('/products').valueChanges().subscribe(data => {
        this.addUpdateProductForm.patchValue({
          id: data.length + 1
        })
        this.addUpdateProductToFirebase();
        sub.unsubscribe();
      });
    } else {
      if (window.confirm('Are you sure, you want to update the product details?')) {
        this.addUpdateProductToFirebase();
      }
    }

    this.modalService.hideModal();
  }

  addUpdateProductToFirebase() {
    this.productService.addUpdateProduct(this.addUpdateProductForm.value).then(
      () => {
        this.toastService.infoToaster(this.modalService.formProperty == 'add' ? 'Product added successfully' : 'Product updated successfully')
        this.addSupplier()
        this.addCategory()
      }
    ).catch(
      () => {
        this.toastService.errorToaster(this.modalService.formProperty == 'add' ? 'There was an error adding product details' : 'There was an error updating product details')
      }
    )
  }

  addSupplier() {
    if (this.addNewSupplier) {
      if(this.supplierService.suppliers.findIndex(item => item.name === this.addUpdateProductForm.get('supplier').value) == -1) {
        this.supplierService.addNewSupplierToFirebase({id: this.supplierService.suppliers.length, name: this.addUpdateProductForm.get('supplier').value}).then(
          () => {
            this.toastService.infoToaster('Added new supplier successfully')
          }
        ).catch(
          () => {
            this.toastService.errorToaster('There was an error adding new supplier')
          }
        )
      }
    }
  }

  addCategory() {
    if (this.addNewCategory) {
      if (this.categoryService.categories.findIndex(item => item.name === this.addUpdateProductForm.get('category').value) == -1) {
        this.categoryService.addNewCategoryToFirebase({id: this.categoryService.categories.length, name: this.addUpdateProductForm.get('category').value}).then(
          () => {
            this.toastService.infoToaster('Added new category successfully')
          }
        ).catch(
          () => {
            this.toastService.errorToaster('There was an error adding new category')
          }
        )
      }
    }
  }
}