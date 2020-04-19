import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: 'play.page.html',
  styleUrls: ['play.page.scss'],
})
export class HomePage implements OnInit {

  cookie: string;
  @Output() messageFromChild = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) { 
    // this.messageFromChild.emit('Message from child');
  }

  ngOnInit(){

    // Navigate to subject-select page and pass gamemode information base on which div pressed
    var divSingle = document.getElementById("play-single");
    var divMulti = document.getElementById("play-multi");
    divSingle.addEventListener('click', () => this.router.navigate(['/subject-select', 0, this.cookie]));
    divMulti.addEventListener('click', () => this.router.navigate(['/subject-select', 1, this.cookie]));

    this.cookie = this.route.snapshot.paramMap.get('cookie');
    console.log(this.cookie);

  }

  navigate(){
    this.router.navigateByUrl('my-account/' + this.cookie);
  }
}
