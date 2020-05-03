import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ActivatedRoute } from '@angular/router';
import { NativeStorage }  from '@ionic-native/native-storage/ngx';
import { Router }         from '@angular/router';
import { HTTP }           from '@ionic-native/http/ngx';

@Component({
  selector    : 'app-play',
  templateUrl : 'play.page.html',
  styleUrls   : ['play.page.scss'],
})
export class HomePage implements OnInit {

  server    : string;
  cookie    : string;
  user;
  rank      : string = "Loading";
  rankImage : string = "./assets/icon/trophy.svg";
  @Output() messageFromChild = new EventEmitter();

  constructor(
    private screenOrientation : ScreenOrientation,
    private router            : Router,
    private http              : HTTP,
    private nativeStorage     : NativeStorage,
  ) {
    // lock screen portrait
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    // Get server from config file
    this.server = require('../config.json').server;
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});

    this.nativeStorage.getItem('user')
    .then((data) => {
      this.user = data
      if(this.user.points > require('../config.json').nf_rank1_above){
        this.rank = require('../config.json').nf_rank1_title
        this.rankImage = "./assets/score/master.png"
      } else if(this.user.points > require('../config.json').nf_rank2_above){
          this.rank = require('../config.json').nf_rank2_title
          this.rankImage = "./assets/score/expert.png"
      }else if(this.user.points > require('../config.json').nf_rank3_above){
          this.rank = require('../config.json').nf_rank3_title
          this.rankImage = "./assets/score/advanced.png"
      }else{
          this.rank = require('../config.json').nf_rank4_title
          this.rankImage = "./assets/score/novice.png"
      }
      if(this.user.teacher){
        this.rank = "Teacher"
        this.rankImage = "./assets/score/graduate.png"
      }

    })


  }

  ngOnInit(){
    // Navigate to subject-select page and pass gamemode information base on which div pressed
    var divSingle = document.getElementById("play-single");
    var divMulti = document.getElementById("play-multi");
    divSingle.addEventListener('click', () => this.router.navigate(['/subject-select', 0]));
    divMulti.addEventListener('click', () => this.router.navigate(['/subject-select', 1]));
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
