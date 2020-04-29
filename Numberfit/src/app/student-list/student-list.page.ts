import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit }      from '@angular/core';
import { NativeStorage }          from '@ionic-native/native-storage/ngx';
import { HTTP }                   from '@ionic-native/http/ngx';

@Component({
  selector    : 'app-student-list',
  templateUrl : './student-list.page.html',
  styleUrls   : ['./student-list.page.scss'],
})
export class StudentListPage {

  server      : string = require('../config.json').server;
  cookie      : string;
  studentList : Array<string>;
  studentID   : number;

  constructor(
    private nativeStorage  : NativeStorage,
    private activatedRoute : ActivatedRoute,
    private router         : Router,
    private http           : HTTP,
  ) {
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});
    // this.requestStudentList();

    this.http.get(this.server+"/getStudents?cookie="+this.cookie,{},{})
    .then(data => {
      this.studentList = JSON.parse(data.data).students;

    })
    .catch(error => {
      console.log("status", error.status);
      console.log("error", error.error);
      this.presentAlert("Connection","Error in retrieving pupil list.")
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
