import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerFormGroup: FormGroup;
  yearGroups: Array<string>;
  schoolList: Array<string>;

  constructor(
    // private nativeStorage: NativeStorage,
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
    this.yearGroups = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'];
    this.schoolList = ['UCL', 'LSE', 'Imperial'];
  }

  ngOnInit() {
    // get the schools from the DB
    let schoolSelect = document.getElementById("schoolSelect");
  }

  register(){
    const DOM = this;

    const password1 = this.registerFormGroup.value.password1;
    const password2 = this.registerFormGroup.value.password2;

    const credentials = {
      username : this.registerFormGroup.value.email.toLowerCase(),
      password : Md5.hashStr(password1),
      name     : this.registerFormGroup.value.name,
      year     : this.registerFormGroup.value.year,
      school   : this.registerFormGroup.value.school,
      teacher  : false,
    };

    console.log(credentials);

    if(password1==password2 && password1.length > 7){
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          const cookie = JSON.parse(this.responseText).success
          console.log(cookie);
          // DOM.nativeStorage.setItem('cookie', {cookie: cookie})
          // .then(
          //   () => DOM.router.navigate(['/play']),
          //   error => console.error('Error storing item', error)
          // );
        } else if(this.status != 200) {
          console.log(this.responseText);

        }
      };

      xhttp.open('POST', 'http://localhost:3000/register?', true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify(credentials));

    } else{
      // error!!!
      alert("Please ensure your password is at least 8 characters and matches the confirmation field");
    }

  }

}
