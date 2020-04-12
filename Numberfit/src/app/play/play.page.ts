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
}
