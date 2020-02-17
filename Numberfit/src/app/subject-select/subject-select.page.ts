import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-select',
  templateUrl: './subject-select.page.html',
  styleUrls: ['./subject-select.page.scss'],
})
export class SubjectSelectPage implements OnInit {

  public subject: string;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute) {
      this.subject = "Addition"
     }

  onChange(event){
    // this.subject = event.target.value;
    console.log(this.subject);
  };

  ngOnInit() {
    let gamemode = this.activatedRoute.snapshot.paramMap.get("gamemode");
    let subjects = ['Addition', 'Subtraction', 'Multiplication', 'Division'];
    var windowObject = this;

    // Set the title according to the gamemode
    if(Number(gamemode) === 0){
      document.getElementById("title").textContent = "Single Player";
    } else {
      document.getElementById("title").textContent = "Head-to-Head";
    }

    // Add subjects to the ion-radio-group
    for (var i = 0; i < subjects.length; i++) {
      document.getElementById("radio-group").innerHTML += "<ion-item><ion-label>"+subjects[i]+
      "</ion-label><ion-radio slot='end' value="+subjects[i]+"></ion-radio></ion-item>";
    }

    // Add eventListener for form submission
    document.getElementById("btn-play").addEventListener("click", function(){
      let radios = this.getElementsByTagName('ion-radio');
      // Navigate to the respective page
      if(Number(gamemode) === 0){
        windowObject.router.navigate(['/play-single', windowObject.subject]);
      } else {
        windowObject.router.navigate(['/play-multi', windowObject.subject]);
      }
    });

  }

}
