import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let gamemode = this.activatedRoute.snapshot.paramMap.get("gamemode");
  }

}
