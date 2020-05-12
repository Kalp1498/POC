import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

var firebaseConfig = {
  apiKey: "AIzaSyDJAwdfbpKjtEwv8Jx65myzyi62peZ2oO8",
  authDomain: "poc-bacancy-7c86c.firebaseapp.com",
  databaseURL: "https://poc-bacancy-7c86c.firebaseio.com",
  projectId: "poc-bacancy-7c86c",
  storageBucket: "poc-bacancy-7c86c.appspot.com",
  messagingSenderId: "846823088059",
  appId: "1:846823088059:web:d026f7d6412cc0f733ee9e",
  measurementId: "G-07F8D61XBG"
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ]
})
export class FirebaseModule { }
