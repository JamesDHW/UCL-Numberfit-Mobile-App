import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-select',
  templateUrl: './subject-select.page.html',
  styleUrls: ['./subject-select.page.scss'],
})
export class SubjectSelectPage implements OnInit {

  public subject: string = "Addition";
  public subjects: [];

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
      // GET all subjects from Numberfit
      var xhttp = new XMLHttpRequest();
      let DOM = this;

      // Define the listener function for the GET request
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log("GET request succeeded")
          DOM.subjects = JSON.parse(this.responseText);
        } else {
          // Use default (offline) if get request fails
          console.log("GET request failed with satus " + this.status)
          DOM.subjects = require('./default_subjects.json');
          console.log(DOM.subjects)
        }
      };

      // Define and send the GET request
      xhttp.open("GET", "http://api.numberfit.com:8081/getAvailableTopics");
      xhttp.send();

    }

  // Function called when radio button clicked
  onSelect(topic){
    this.subject = topic;
  };

  ngOnInit() {
    let gamemode = this.activatedRoute.snapshot.paramMap.get("gamemode");
    let DOM = this;

    // Set the title according to the gamemode
    if(Number(gamemode) === 0){
      document.getElementById("title").textContent = "Single Player";
    } else {
      document.getElementById("title").textContent = "Head-to-Head";
    }
    //
    // // Add subjects to the ion-radio-group
    // for (var i = 0; i < this.subjects.length; i++) {
    //   document.getElementById("radio-group").innerHTML += "<ion-item><ion-label>"+subjects[i]+
    //   "</ion-label><ion-radio slot='end' value="+subjects[i]+"></ion-radio></ion-item>";
    // }

    // Add eventListener for form submission
    document.getElementById("btn-play").addEventListener("click", function(){
      // Navigate to the respective page
      if(Number(gamemode) === 0){
        DOM.router.navigate(['/play-single', DOM.subject]);
      } else {
        DOM.router.navigate(['/play-multi', DOM.subject]);
      }
    });

  }

}
