import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router }         from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NativeStorage }  from '@ionic-native/native-storage/ngx';

@Component({
  selector    : 'app-play',
  templateUrl : 'play.page.html',
  styleUrls   : ['play.page.scss'],
})
export class HomePage implements OnInit {

  server : string;
  cookie : string;
  @Output() messageFromChild = new EventEmitter();

  constructor(
    private router        : Router,
    private route         : ActivatedRoute,
    private nativeStorage : NativeStorage,
  ) {
    // Get server from config file
    this.server = require('../config.json').server;
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});
    // this.messageFromChild.emit('Message from child');

  }

  ngOnInit(){

    // Navigate to subject-select page and pass gamemode information base on which div pressed
    var divSingle = document.getElementById("play-single");
    var divMulti = document.getElementById("play-multi");
    divSingle.addEventListener('click', () => this.router.navigate(['/subject-select', 0]));
    divMulti.addEventListener('click', () => this.router.navigate(['/subject-select', 1]));

    // this.cookie = this.route.snapshot.paramMap.get('cookie');
    // console.log(this.cookie);

  }

  navigate(){
    const DOM = this;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);

      } else if(this.status != 200) {
        console.log(this.responseText);

      }
    };
    xhttp.open("GET", "http://numberfit-env.eba-hrxr3amd.us-west-2.elasticbeanstalk.com/myDetails?cookie=5e937d5c8f20116a06468da9", true);
    xhttp.send();
    // this.router.navigateByUrl('my-account');
  }
}
