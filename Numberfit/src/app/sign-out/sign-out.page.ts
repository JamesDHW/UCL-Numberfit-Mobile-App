import { Component }     from '@angular/core';
import { Router }        from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector    : 'app-sign-out',
  templateUrl : 'sign-out.page.html',
  styleUrls   : ['sign-out.page.scss'],
})

export class HomePage {

  server : string;

  constructor(
    private nativeStorage : NativeStorage,
    private router        : Router,
  ) {
    // Get server from config file
    this.server = require('../config.json').server;
  }

  signOut(){

    var DOM   = this;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        DOM.nativeStorage.setItem('cookie', {cookie: "-"})
        .then(() => {
          console.log("Cookie removed!")
          DOM.router.navigate(['/sign-in'])
        },
          error => console.error('Error storing item', error)
        );
      } else{
        // Error
        console.log("error", this.responseText);
      }
    };
    xhttp.open("GET", this.server+"/logout", true);

  };

}
