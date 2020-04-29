import { Component, OnInit } from '@angular/core';
import { NativeStorage }     from '@ionic-native/native-storage/ngx';
import { HTTP }              from '@ionic-native/http/ngx';

@Component({
  selector    : 'app-leaderboard',
  templateUrl : 'leaderboard.page.html',
  styleUrls   : ['leaderboard.page.scss'],
})

export class HomePage {
  server : string = require('../config.json').server;
  cookie : string;
  user   : any;
  users  : Array<Object>;
  points : number = 0;

  constructor(
    private nativeStorage : NativeStorage,
    private http          : HTTP,
  ) {
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});
    // Get user
    this.nativeStorage.getItem('user')
    .then((data) => {
      this.user = data
      // this.points = data.points
      console.log(this.user)

      // Get top scores from given school
      this.http.get(this.server+"/leaderboard?school="+this.user.school+"&cookie="+this.cookie,{},{})
      .then(data => {
        // Need to do a request which returns {user : [{user1...}]}
        this.users = JSON.parse(data.data).scores;
      })
      .catch(error => {
        console.log("status", error.status);
        console.log("error", error.error);
        this.presentAlert("Connection","Error retrieving leaderboard.")

      });
    });

  }

  presentAlert(header, msg) {
    const alert = document.createElement('ion-alert');
    alert.header = header;
    alert.message = msg;
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    alert.present();
  }

}
