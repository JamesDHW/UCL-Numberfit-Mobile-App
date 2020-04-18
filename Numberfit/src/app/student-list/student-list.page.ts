import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { 
    this.requestStudentList();
  }

  ngOnInit() {
  }

  requestStudentList(){

    var DOM = this;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const cookie = JSON.parse(this.responseText).success
        console.log(cookie);
        DOM.router.navigate(['/leaderboard'], cookie)
      } else if(this.status != 200) {
        console.log(this.responseText);

      }
    };

    xhttp.open("POST", "http://localhost:3000/myDetails", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
  }
}
