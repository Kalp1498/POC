import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';
import { PagesModule } from './pages/pages.module';
import { FirebaseModule } from './core/firebase.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FilterOrdersPipe } from './pipes/filter-orders.pipe';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterOrdersPipe,
    FilterProductsPipe,
    PageNotFoundComponent
  ],
  imports: [
    PagesModule,
    BrowserModule,
    FirebaseModule,
    AppRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
