import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit }      from '@angular/core';
import { NativeStorage }          from '@ionic-native/native-storage/ngx';
import { HTTP }                   from '@ionic-native/http/ngx';

@Component({
  selector    : 'app-subject-select',
  templateUrl : './subject-select.page.html',
  styleUrls   : ['./subject-select.page.scss'],
})

export class SubjectSelectPage implements OnInit {

  server   : string = require('../config.json').server;
  cookie   : string;
  user     : string;
  subject  : string = "Addition"; // Default to Addition
  subjects = require('./default_subjects.json').availableTopics;
  gamemode = this.activatedRoute.snapshot.paramMap.get("gamemode");

  constructor(
    private router         : Router,
    private activatedRoute : ActivatedRoute,
    private nativeStorage  : NativeStorage,
    private http           : HTTP,

  ) {
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});
    // Get user from storage
    this.nativeStorage.getItem('user')
    .then((data) => {
      this.user = data

      this.http.get("http://api.numberfit.com:8081/getAvailableTopics",{},{})
      .then(data => {
        this.subjects = JSON.parse(data.data).availableTopics
        let repeats = this.subjects.length;
        let deletes = 0;
        for(var i=0; i<repeats; i++){
          if(!this.user["year"]){this.user["year"] = 6}
          if(!this.subjects[i-deletes].availableYears.includes(
            parseInt(this.user["year"]))){
              this.subjects.splice(i-deletes, 1)
              deletes += 1;
            }
          }
        })
        .catch(error => {
          console.log("status", error.status);
          console.log("error", error.error);
        });
      });
    }

    navigate(topic){
      let gamemode = this.activatedRoute.snapshot.paramMap.get("gamemode");
      if(Number(gamemode) === 0){
        this.router.navigate(['/play-single', topic]);
      } else {
        this.router.navigate(['/play-multi', topic]);
      }
    }

  ngOnInit() {
    // Set the title according to the gamemode
    if(Number(this.gamemode) === 0){
      document.getElementById("title").textContent = "Single Player";
    } else {
      document.getElementById("title").textContent = "Head-to-Head";
    }
  }

}
