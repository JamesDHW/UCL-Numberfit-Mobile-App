import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-play-multi',
  templateUrl: './play-multi.page.html',
  styleUrls: ['./play-multi.page.scss'],
})
export class PlayMultiPage implements OnInit {
  images: Array<number>;
  imgState: number;
  top_right: string;
  bottom_left: string;
  middle_right: string;
  middle_left: string;
  middle_center: string;
  lion_progress: number;
  tiger_progress: number;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var subject = this.activatedRoute.snapshot.paramMap.get("subject");
    console.log(subject);

    //progress bar
    this.lion_progress = 0;
    this.tiger_progress = 0;

    this.images = [1,2,3,4,5,6,7,8,9,10];


    this.top_right = 'tiger' + this.images[this.tiger_progress];
    this.bottom_left = 'lion' + this.images[this.lion_progress];
    this.middle_right = 'tiger' + this.images[9];
    this.middle_left = 'lion' + this.images[9];
    this.middle_center = 'middle-center';


  }

  updateProgressTop(){
    this.tiger_progress = ++this.tiger_progress%this.images.length;
    if(this.tiger_progress<=5){ 
      this.top_right = 'tiger' + this.images[this.tiger_progress];
      this.middle_right = 'tiger' + this.images[9];
    }
    else{
      this.top_right = 'tiger0';
      this.middle_right = 'tiger' + this.images[this.tiger_progress];
    }
  }

  updateProgressBottom(){
    this.lion_progress = ++this.lion_progress%this.images.length;
    if(this.lion_progress<=5){
      this.bottom_left = 'lion' + this.images[this.lion_progress];
      this.middle_left = 'lion' + this.images[9];
    }
    else{
      this.bottom_left = 'lion0';
      this.middle_left = 'lion' + this.images[this.lion_progress];
    }
    
  }

}
