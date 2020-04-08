import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-leaderboard',
  templateUrl: 'leaderboard.page.html',
  styleUrls: ['leaderboard.page.scss'],
})
export class HomePage implements OnInit {
  selectSchoolGroup: FormGroup;

  constructor(
    formBuilder: FormBuilder,
  ) {
    this.selectSchoolGroup = formBuilder.group({
      school: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    const schoolSelect = document.getElementById('schoolSelect');
    const myScore = document.getElementById('myScore');
    const leaderboard = document.getElementById('leaderboard');

  }

  searchSchool() {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = '';

  }
}
