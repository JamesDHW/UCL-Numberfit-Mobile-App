import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: 'sign-out.page.html',
  styleUrls: ['sign-out.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
  ) {}

  signOut(){
    this.angularFireAuth.auth.signOut().then(()=>{
      this.router.navigate(['/sign-in']);
    })
  }

}
