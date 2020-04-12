import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  signInFormGroup: FormGroup;

  constructor(
    private router: Router,
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

    

  }
}
