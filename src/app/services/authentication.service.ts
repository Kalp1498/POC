import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { ToastService } from './toast.service';
import { SpinnerService } from './spinner.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router,
    private userService: UserService,
    private toastService: ToastService,
    private firebaseAuth: AngularFireAuth,
    private spinnerService: SpinnerService,
    private angularFireDatabase: AngularFireDatabase
  ) { }

  // signin with email and password using firebase authentication
  SignUpWithEmailAndPassword(signUpForm: NgForm) { 
    this.firebaseAuth.auth.createUserWithEmailAndPassword(
      signUpForm.value.txtEmail, signUpForm.value.txtPassword
    )
    .then(
    () => {
      this.sendConfirmationMail();
      this.spinnerService.handleSpinner();
      setTimeout(() => {
        this.router.navigateByUrl('auth/login');
      }, 2500);
    })
    .catch(
      (err) => {
        this.toastService.errorToaster(err['message'])
      }
    )
  }

  sendConfirmationMail() {
    this.firebaseAuth.auth.currentUser.sendEmailVerification()
    .then(
      () => {
        this.toastService.infoToaster('Verification Mail has been sent.')
      }
    )
  }

  // login with email and password using firebase authentication
  loginWithEmailAndPassword(loginForm: NgForm) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(
      loginForm.value.txtEmail, loginForm.value.txtPassword
    )
    .then (
    (result) => {
      if (result.user.emailVerified) {
        this.userService.addUserDetailsToFirebase();
        this.spinnerService.handleSpinner();
        setTimeout(() => {
          this.router.navigateByUrl('poc');
        }, 2000);
      } else {
        this.toastService.warningToaster('Please validate your email address. Kindly check your inbox.')
      }
    })
    .catch(
      (err) => {
        this.toastService.errorToaster(err['message'])
      }
    )
  }

  // forgot password link using firebase authentication
  forgetPassword(forgotPasswordForm: NgForm) {
    this.firebaseAuth.auth.sendPasswordResetEmail(forgotPasswordForm.value.txtEmail).
    then(
      () => {
        this.toastService.successToaster('Reset Password link has been sent')
        this.router.navigateByUrl('auth/login')
      }
    )
    .catch(
      (err) => {
        this.toastService.errorToaster(err['message'])
      }
    )
  }
}
