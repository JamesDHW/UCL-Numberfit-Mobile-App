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
    private nativeStorage : NativeStorage,
    public activatedRoute : ActivatedRoute,
    public router         : Router,
    private http          : HTTP,
  ) {
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});
    // this.requestStudentList();

    this.http.get(this.server+"/studentList?cookie="+this.cookie,{},{})
    .then(data => {
      this.studentList = JSON.parse(data.data);

    })
    .catch(error => {
      console.log("status", error.status);
      console.log("error", error.error);

    });
  }

  onSelect(student: string){
    // this.studentID = student;
    console.log(student);
    let DOM = this;
    // DOM.router.navigate(['/leaderboard', DOM.studentID]);
  };

  requestStudentList(){

    var DOM = this;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const cookie = JSON.parse(this.responseText).success
        console.log(cookie);
        DOM.router.navigate(['/leaderboard'])
      } else if(this.status != 200) {
        console.log(this.responseText);

      }
    };

    xhttp.open("POST", this.server+"/myDetails", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
  }
}
