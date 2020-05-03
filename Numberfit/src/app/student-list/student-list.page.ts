import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NativeStorage }     from '@ionic-native/native-storage/ngx';
import { Component }         from '@angular/core';
import { Router }            from '@angular/router';
import { HTTP }              from '@ionic-native/http/ngx';

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
    private screenOrientation : ScreenOrientation,
    private nativeStorage     : NativeStorage,
    private router            : Router,
    private http              : HTTP,
  ) {
    // lock screen portrait
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {
      this.cookie = data.cookie
      this.http.get(this.server+"/getStudents?cookie="+this.cookie,{},{})
      .then(data => {
        this.studentList = JSON.parse(data.data).students;
        if(this.studentList.length==0){
          this.presentAlert("Empty List","No students to show.")
        }

      })
      .catch(error => {
        console.log("status", error.status);
        console.log("error", error.error);
        this.router.navigate(['/play']);
        this.presentAlert("Connection","Error in retrieving pupil list.")
      });
    });

  }

  navigate(student){
    this.router.navigate(['/parents', student]);
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
