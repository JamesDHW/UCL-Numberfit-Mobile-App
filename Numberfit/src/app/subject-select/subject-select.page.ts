import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subject-select',
  templateUrl: './subject-select.page.html',
  styleUrls: ['./subject-select.page.scss'],
})
export class SubjectSelectPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let gamemode = this.activatedRoute.snapshot.paramMap.get("gamemode")
    var btnPlay = document.getElementById("play-single");
  }

}
