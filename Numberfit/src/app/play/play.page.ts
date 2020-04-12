import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: 'play.page.html',
  styleUrls: ['play.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) {  }

  ngOnInit(){

    // Navigate to subject-select page and pass gamemode information base on which div pressed
    var divSingle = document.getElementById("play-single");
    var divMulti = document.getElementById("play-multi");
    divSingle.addEventListener('click', () => this.router.navigate(['/subject-select', 0]));
    divMulti.addEventListener('click', () => this.router.navigate(['/subject-select', 1]));
  }

  // function example of get request
  getReq(){
    var xhttp = new XMLHttpRequest();
    console.log("pressed");

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      } else{
        console.log(this.responseText);

      }
    };
    // xhttp.open("GET", "http://localhost:3000/login?username=James&password=James99", true);
    xhttp.open("POST", "http://localhost:3000/register", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // xhttp.open("GET", "http://localhost:3000/register?email=jbreeze@hotmail.com&school=Primrose&year=6&teacher=Mrs-Wallace&fName=Jack&lName=Breeze", true);
    xhttp.send(JSON.stringify({'username':'jbreeze@hotmail.co', 'password':'password'}));
  }
}
