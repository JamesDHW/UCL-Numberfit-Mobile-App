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
    public activatedRoute: ActivatedRoute,
  ) {

      // GET all subjects from Numberfit
      var xhttpSubjects = new XMLHttpRequest();
      var xhttpDetails = new XMLHttpRequest();
      let DOM = this;

      DOM.subjects = require('./default_subjects.json');

      // Define the listener function for the GET request
      xhttpSubjects.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Subjects GOT now get details to check year group
          DOM.subjects = JSON.parse(this.responseText)
          xhttpDetails.send();
        } else if(this.status != 200) {
          console.log("GET request failed with satus " + this.status)
        }
      };

      // Define the listener function for the GET request
      xhttpDetails.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log("GET request succeeded: ", JSON.parse(this.responseText).year)
          // Remove elements not available to that year
          // By now availableTopics is an attribute of DOM.subjects
          for(var i=0; i<DOM.subjects.availableTopics.length; i++){
            if(DOM.subjects.availableTopics[i].availableYears.includes(parseInt(JSON.parse(this.responseText).year))){
              DOM.subjects.availableTopics.splice(i, 1)
            }
          }

        } else if(this.status != 200) {
          console.log("GET request failed with satus " + this.status)
        }
      };

      // Define and send the GET request
      xhttpSubjects.open("GET", "http://api.numberfit.com:8081/getAvailableTopics", true);
      xhttpDetails.open("GET", "http://localhost:3000/myDetails?cookie=5e9445193c9c966ce1dcbac6", true);
      xhttpSubjects.send();

    }

  // Function called when radio button clicked
  onSelect(topic){
    // TODO:
    // Deselct current one on click - stopped working when I
    // changed it to programmatically fill the list.
    const radio = document.getElementById(topic);
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
