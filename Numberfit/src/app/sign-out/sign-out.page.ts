import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: 'sign-out.page.html',
  styleUrls: ['sign-out.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
  ) {}

  signOut(){

    var DOM = this;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log('Logged Out!');
        DOM.router.navigate(['/sign-in', ])
      } else{
        // Error
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "http://localhost:3000/logout", true);
  }

}
