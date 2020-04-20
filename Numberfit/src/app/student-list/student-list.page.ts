import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {

  studentList: Array<string>;
  studentID: number;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.requestStudentList();
  }

  ngOnInit() {

    var xhttpDetails = new XMLHttpRequest();
    let DOM = this;

    xhttpDetails.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("GET details request succeeded");
        DOM.studentList = JSON.parse(this.responseText);
      } else if(this.status != 200) {
        console.log("GET request failed with satus " + this.status);
        DOM.studentList = ["Amy","Bobbi","Candy","David"];
      }
    };

    // Define and send the GET request
    xhttpDetails.open("GET", "http://localhost:3000/studentList?cookie=5e9445193c9c966ce1dcbac6", true);
    xhttpDetails.send();
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

    xhttp.open("POST", "http://localhost:3000/myDetails", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
  }
}
