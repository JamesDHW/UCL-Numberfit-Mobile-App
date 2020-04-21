import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-sign-out',
  templateUrl: 'sign-out.page.html',
  styleUrls: ['sign-out.page.scss'],
})
export class HomePage {

  constructor(
    // private nativeStorage: NativeStorage,
    private router: Router,
  ) {}

  signOut(){

    var DOM = this;
    var xhttp = new XMLHttpRequest();

    // xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //     DOM.nativeStorage.setItem('cookie', {cookie: "-"})
    //     .then(() => {
    //       console.log("cookie removed")
    //       DOM.router.navigate(['/sign-in'])
    //     },
    //       error => console.error('Error storing item', error)
    //     );
    //   } else{
    //     // Error
    //     console.log("error", this.responseText);
    //   }
    // };
    // xhttp.open("GET", "http://localhost:3000/logout", true);
  }

}
