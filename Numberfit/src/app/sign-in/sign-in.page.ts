import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  // username: string;
  // password: string;

  constructor() { 
      // this.username = document.getElementById("username").innerHTML
      // this.password = document.getElementById("password").innerHTML
  }

  // testPrint() {
  //   console.log("The username is ", this.username)
  // }

  ngOnInit() {
  }
}

function test() {
      var username = document.getElementById("username").textContent;
      var password = document.getElementById("password").textContent;
      console.log(username, password);
  
}
