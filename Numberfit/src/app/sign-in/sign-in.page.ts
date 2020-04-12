import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';

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
    const credentials = {
      'username' : this.signInFormGroup.value.email,
      'password' : Md5.hashStr(this.signInFormGroup.value.password)
    }

    var DOM = this;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const cookie = JSON.parse(this.responseText).success
        console.log(cookie);
        DOM.router.navigate(['/play'], cookie)
      } else if(this.status != 200) {
        console.log(this.responseText);

      }
    };
    xhttp.open("POST", "http://localhost:3000/login", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(credentials));

  }
}
