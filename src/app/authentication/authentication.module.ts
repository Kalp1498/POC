import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveModule } from '../directives/directive.module';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationComponent } from './authentication.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      },
      {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    LoginComponent, 
    SignUpComponent,
    AuthenticationComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CoreModule,
    FormsModule,
    CommonModule,
    DirectiveModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }