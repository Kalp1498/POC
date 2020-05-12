import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanLoadService implements CanLoad {

  constructor(private router: Router) { }

  canLoad(): boolean {
    // allow user to navigate to login page if uid is empty in localStorage
    if (localStorage.getItem("uid") == '') {
      return true
    } else { // redirect to home if uid is not empty in localStorage
      this.router.navigateByUrl('poc/dashboard');
      return false
    }
  }
}
