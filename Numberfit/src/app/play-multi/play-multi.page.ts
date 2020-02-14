import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-play-multi',
  templateUrl: './play-multi.page.html',
  styleUrls: ['./play-multi.page.scss'],
})
export class PlayMultiPage implements OnInit {

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var subject = this.activatedRoute.snapshot.paramMap.get("subject");
    console.log(subject);

  }

}
