import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanLoadService } from './auth-guard/can-load.service';
import { CanActivateService } from './auth-guard/can-activate.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(module => module.AuthenticationModule),
    canLoad: [CanLoadService]
  },
  {
    path: 'poc',
    loadChildren: () => import('./pages/pages.module').then(module => module.PagesModule),
    canActivate: [CanActivateService]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
