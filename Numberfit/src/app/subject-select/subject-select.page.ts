import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit }      from '@angular/core';
import { NativeStorage }          from '@ionic-native/native-storage/ngx';

@Component({
  selector    : 'app-subject-select',
  templateUrl : './subject-select.page.html',
  styleUrls   : ['./subject-select.page.scss'],
})

export class SubjectSelectPage implements OnInit {

  server   : string;
  cookie   : string;
  subject  : string = "Addition"; // Default to Addition
  subjects : [];

  constructor(
    private router         : Router,
    private activatedRoute : ActivatedRoute,
    private nativeStorage  : NativeStorage,
  ) {
    // Get server from config file
    this.server = require('../config.json').server;
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});

    // GET all subjects from Numberfit
    var xhttpSubjects = new XMLHttpRequest();
    var xhttpDetails  = new XMLHttpRequest();
    let DOM = this;

    DOM.subjects = require('./default_subjects.json');

    // Define the listener function for the GET request
    xhttpSubjects.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Subjects GOT now get details to check year group
        DOM.subjects = JSON.parse(this.responseText)
        xhttpDetails.send();
      } else if(this.status != 200) {
        console.log("GET subjects request failed with satus " + this.status)
      }
    };

    // Define the listener function for the GET request
    xhttpDetails.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("GET details request succeeded")
        // Remove elements not available to that year
        // By now availableTopics is an attribute of DOM.subjects
        console.log(JSON.parse(this.responseText));
        let repeats = DOM.subjects["availableTopics"].length;
        let deletes = 0;
        for(var i=0; i<repeats; i++){
          if(!DOM.subjects["availableTopics"][i-deletes].availableYears.includes(
            parseInt(JSON.parse(this.responseText).year))){
              DOM.subjects["availableTopics"].splice(i-deletes, 1)
              deletes += 1;
          }
        }

      } else if(this.status != 200) {
        console.log("GET details request failed with satus " + this.status)
      }
    };

    // Define and send the GET request
    xhttpSubjects.open("GET", "http://api.numberfit.com:8081/getAvailableTopics", true);
    xhttpDetails.open("GET", this.server+"/myDetails?cookie=" + this.cookie, true);
    xhttpSubjects.send();

    }

  // Function called when radio button clicked
  onSelect(topic){
    // TODO:
    // Deselct current one on click - stopped working when I
    // changed it to programmatically fill the list.
    const radio  = document.getElementById(topic);
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
