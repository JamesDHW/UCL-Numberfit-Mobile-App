import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: 'sign-out.page.html',
  styleUrls: ['sign-out.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
  ) {}

  signOut(){
    // sign-out then do this...
    this.router.navigate(['/sign-in']);

  }

}
