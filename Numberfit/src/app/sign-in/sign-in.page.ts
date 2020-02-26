import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
declare function require(name:string);

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  // username: string;
  // password: string;

  constructor(
    private firebase: Firebase,
    private firebaseAuth: FirebaseAuthentication
  ) {
      // this.username = document.getElementById("username").innerHTML
      // this.password = document.getElementById("password").innerHTML
  }

  // testPrint() {
  //   console.log("The username is ", this.username)
  // }

  ngOnInit() {

        // save the token server-side and use it to push notifications to this device
        this.firebase.getToken()
        .then(token => console.log(`The token is ${token}`))
        .catch(error => console.error('Error getting token', error));

        // this.firebaseAuth.signInWithEmailAndPassword(email, password)
        // .then()
        // .catch();
  }
}

function test() {
      var username = document.getElementById("username").textContent;
      var password = document.getElementById("password").textContent;
      console.log(username, password);



}
