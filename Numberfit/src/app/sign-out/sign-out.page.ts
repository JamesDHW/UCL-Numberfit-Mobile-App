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
    this.nativeStorage.getItem('cookie').then((data) => {
      this.cookie = data.cookie
    });
  }

  signOut(){

    // console.log("send to", this.server+"/logout?session="+this.cookie)
    this.http.get(this.server+"/logout?session="+this.cookie,{},{})
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
      this.presentAlert("Connection","Failed to sign out.")
    });

  };

  presentAlert(header, msg) {
    const alert = document.createElement('ion-alert');
    alert.header = header;
    alert.message = msg;
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    alert.present();
  }

}
