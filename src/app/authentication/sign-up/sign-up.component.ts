import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '../common-scss/login-signup.scss']
})
export class SignUpComponent implements OnInit {

  email: string = '';
  password: string = '';
  confPassword: string = '';

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit() {

  }

  navigateLogin() {
    this.router.navigateByUrl('auth/login')
  }

}
