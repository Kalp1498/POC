import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // allow user to navigate to home page if uid is not empty in localStorage 
    if (localStorage.getItem("uid") != '') {
      return true;
    } else { // redirect to login page if uid is empty in localStorage
      this.router.navigateByUrl('auth/login');
      return false;
    }
  }
}