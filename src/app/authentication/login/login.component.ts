import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { NoSpaceValidator } from '../../validators/no-space-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../common-scss/login-signup.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit() {

  }

  navigateToSignUp() {
    this.router.navigateByUrl('auth/signup');
  }

  navigateToForgotPassword() {
    this.router.navigateByUrl('auth/forgotpassword');
  }

}
