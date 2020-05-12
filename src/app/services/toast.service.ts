import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {  

  constructor(
    private toastrService: ToastrService
  ) { }

  successToaster(message: string) {
    this.toastrService.success(message)
  }
  
  infoToaster(message: string) {
    this.toastrService.info(message)
  }
  
  warningToaster(message: string) {
    this.toastrService.warning(message)
  }

  errorToaster(message: string) {
    this.toastrService.error(message)
  }
}
