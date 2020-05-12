import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private firebaseAuth: AngularFireAuth,
    private angularFireDatabase: AngularFireDatabase
  ) { }

  colors = [
    '#b61827', '#8e0000', '#b4004e', '#78002e', '#790e8b', '#38006b',
    '#4d2c91', '#000070', '#26418f', '#001064', '#0077c2', '#003c8f',
    '#00766c', '#003d33', '#338a3e', '#005005', '#c9bc1f', '#c17900',
    '#c77800', '#b53d00', '#8d8d8d', '#1b1b1b', '#4b636e', '#102027',
  ]

  addUserDetailsToFirebase() {
    this.angularFireDatabase.object('/users/' + this.firebaseAuth.auth.currentUser.uid + '/userDetails').update({
      email: this.firebaseAuth.auth.currentUser.email
    })
    this.angularFireDatabase.object('/users/' + this.firebaseAuth.auth.currentUser.uid + '/userDetails').valueChanges().subscribe(data => {
      if (!Object.keys(data).includes('labelColor')) {
        this.angularFireDatabase.object('/users/' + this.firebaseAuth.auth.currentUser.uid + '/userDetails').update({
          labelColor: this.colors[Math.floor(Math.random() * this.colors.length)]
        })
      }
      localStorage.setItem('labelColor', data['labelColor'])
    })
    localStorage.setItem('uid', this.firebaseAuth.auth.currentUser.uid); // store user uid to localStorage
  }
}
