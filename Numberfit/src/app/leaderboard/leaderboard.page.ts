import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit }                  from '@angular/core';
import { NativeStorage }                      from '@ionic-native/native-storage/ngx';

@Component({
  selector    : 'app-leaderboard',
  templateUrl : 'leaderboard.page.html',
  styleUrls   : ['leaderboard.page.scss'],
})

export class HomePage implements OnInit {
  server : string = require('../config.json').server;
  cookie : string;
  selectSchoolGroup : FormGroup;

  constructor(
    private nativeStorage : NativeStorage,
    private formBuilder   : FormBuilder,
  ) {
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});

    // Initilaise school for group
    this.selectSchoolGroup = formBuilder.group({
      school: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    const schoolSelect = document.getElementById('schoolSelect');
    const myScore = document.getElementById('myScore');
    const leaderboard = document.getElementById('leaderboard');

  }

  searchSchool() {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = '';

  }
}
