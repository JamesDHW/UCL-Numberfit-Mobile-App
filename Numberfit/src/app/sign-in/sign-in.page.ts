import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  signInFormGroup: FormGroup;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    formBuilder: FormBuilder,
  ) {
    this.signInFormGroup = formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  signIn(){
    const email = this.signInFormGroup.value["email"]
    const password = this.signInFormGroup.value["password"]

    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
    .then((authData)=>{
      console.log('signed-in')
      this.router.navigate(['/play']);
    })
    .catch((authError)=>{
      console.log('error =>', authError)
    });
  }
}
