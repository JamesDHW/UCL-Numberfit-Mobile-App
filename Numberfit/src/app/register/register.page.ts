import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerFormGroup: FormGroup;

  constructor(
    private router: Router,
    formBuilder: FormBuilder
  ) {
    this.registerFormGroup = formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password1: ["", [Validators.required]],
      password2: ["", [Validators.required]],
      year: ["", [Validators.required]],
      school: ["", [Validators.required]],
    });
  }

  ngOnInit() {
    let schoolSelect = document.getElementById("schoolSelect");
  }

  register(){
    const name = this.registerFormGroup.value.name;
    const email = this.registerFormGroup.value.email;
    const password1 = this.registerFormGroup.value.password1;
    const password2 = this.registerFormGroup.value.password2;
    const year = this.registerFormGroup.value['year'];
    const school = this.registerFormGroup.value['school'];

    if(password1==password2 && password1.length > 7){
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          alert(this.responseText);
        }
      };

      xhttp.open("GET", "http://localhost:3000/test", true);
      xhttp.send();

    } else{
      alert("Please ensure your password is at least 8 characters and matches the confirmation field");
    }

  }

}
