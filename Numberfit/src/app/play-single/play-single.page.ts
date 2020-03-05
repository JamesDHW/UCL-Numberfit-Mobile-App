import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-single',
  templateUrl: './play-single.page.html',
  styleUrls: ['./play-single.page.scss'],
})
export class PlaySinglePage implements OnInit {

  images: Array<string>;
  imgState: number;
  pictureRef: string;

  constructor() { 
    this.imgState = 0;

    this.images = ['Picture1', 'Picture2', 'Picture3', 'Picture4', 'Picture5', 'Picture6', 'Picture7', 'Picture8', 'Picture9'];

    this.pictureRef = this.images[this.imgState] + '.png';
    
  }

  ngOnInit() {
  }

  updateProgress(){
    this.imgState = ++this.imgState % this.images.length;
    this.pictureRef = this.images[this.imgState] + '.png';
    }
  }
}
