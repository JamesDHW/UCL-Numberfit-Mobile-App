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

    console.log("send to", this.server+"/logout?session="+this.cookie)
    this.http.get(this.server+"/logout",{},{})
    .then(data => {
      this.nativeStorage.setItem('cookie', {cookie: "-"})
      .then(() => {
        console.log("Cookie removed!")
        this.router.navigate(['/sign-in'])
      }, error => console.error('Error storing item', error));

    })
    .catch(error => {
      console.log("status", error.status);
      console.log("error", error.error);

    });

  };

}
