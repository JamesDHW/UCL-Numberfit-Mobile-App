import { Component, OnInit } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';
declare function require(name:string);

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(
    private firebase: Firebase,
    private firebaseAuth: FirebaseAuthentication
  ) { }

  ngOnInit() {

    // save the token server-side and use it to push notifications to this device
    this.firebase.getToken()
    .then(token => console.log(`The token is ${token}`))
    .catch(error => console.error('Error getting token', error));
  }

  

}
