import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subject-select',
  templateUrl: './subject-select.page.html',
  styleUrls: ['./subject-select.page.scss'],
})
export class SubjectSelectPage implements OnInit {

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let gamemode = this.activatedRoute.snapshot.paramMap.get("gamemode");
    let subjects = ['Addition', 'Subtraction', 'Multiplication', 'Division'];
    var radioGroup = document.getElementById("radio-group");
    var btnPlay = document.getElementById("btn-play");

    // Add subjects to the ion-radio-group
    for (var i = 0; i < subjects.length; i++) {
      radioGroup.innerHTML += "<ion-item> <ion-label>"+subjects[i]+"</ion-label>" +
      "<ion-radio slot='end' value='"+subjects[i]+"'></ion-radio> </ion-item>";
    }

    if(Number(gamemode) === 0){
      document.getElementById("title").textContent = "Single Player";
      btnPlay.addEventListener('click', () => this.router.navigate(['/play-single']));
    } else {
      document.getElementById("title").textContent = "Head-to-Head";
      btnPlay.addEventListener('click', () => this.router.navigate(['/play-multi']));
    }
  }

}
