import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component }     from '@angular/core';
import { Router }        from '@angular/router';
import { HTTP }          from '@ionic-native/http/ngx';


@Component({
  selector    : 'app-sign-out',
  templateUrl : 'sign-out.page.html',
  styleUrls   : ['sign-out.page.scss'],
})

export class HomePage {

  // server : string = "http://localhost:3000";
  server : string = require('../config.json').server;
  cookie : any;

  constructor(
    private nativeStorage : NativeStorage,
    private router        : Router,
    private http          : HTTP,
  ) {
    // Get cookie from storage
    this.cookie = this.nativeStorage.getItem('cookie');
  }

  signOut(){

    var DOM   = this;
    console.log("send to", this.server+"/test")
    this.http.get(this.server+"/test",{},{})
    .then(data => {

      DOM.nativeStorage.setItem('cookie', {cookie: "-"})
      .then(() => {
        console.log("Cookie removed!")
        DOM.router.navigate(['/sign-in'])
      }, error => console.error('Error storing item', error));

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

    })
    .catch(error => {

      console.log("ERRORS FOUND")
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error);

    });

  };

}
