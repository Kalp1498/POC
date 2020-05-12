import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private toastService: ToastService,
    private angularFireAuth: AngularFireAuth
  ) { }

  user: firebase.User;
  hasPhoto: boolean;

  ngOnInit() {
    this.getUserDetails()
  }

  getUserDetails() {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        this.user = user
        if (user.photoURL) {
          this.hasPhoto = true
        }
      }
    })
  }

  setButtonProperties() {
    let buttonProperties = {}
    if (this.user.photoURL) {
      buttonProperties = {
        "background-image": this.user.photoURL
      }
    } else {
      buttonProperties = {
        "background-color": localStorage.getItem('labelColor')
      }
    }
    return buttonProperties
  }

  navigateToUserProfile() {
    
  }

  logout() {
    if (confirm('Are you sure you want to logout?')) {
      this.angularFireAuth.auth.signOut()
      .then(
        () => {
          localStorage.setItem('uid', '');
          this.router.navigateByUrl('auth/login');
          this.toastService.successToaster('Logged out successfully');
        }
      )
      .catch(
        (err) => {
          this.toastService.errorToaster(err['message'])
        }
      )
    }
  }
}