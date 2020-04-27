import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NativeStorage }     from '@ionic-native/native-storage/ngx';
import { Router }            from '@angular/router';
import { HTTP }              from '@ionic-native/http/ngx';
import { Md5 }               from 'ts-md5/dist/md5';

@Component({
  selector    : 'app-register',
  templateUrl : './register.page.html',
  styleUrls   : ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  registerFormGroup : FormGroup;
  server     : string;
  cookie     : string;
  yearGroups : Array<number>;
  schoolList : Array<string>;

  constructor(
    private nativeStorage : NativeStorage,
    private http          : HTTP,
    private router        : Router,
    formBuilder: FormBuilder
  ) {
    // Get server from config file
    this.server = require('../config.json').server;
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});

    this.registerFormGroup = formBuilder.group({
      name      : ["", [Validators.required]],
      email     : ["", [Validators.required, Validators.email]],
      password1 : ["", [Validators.required]],
      password2 : ["", [Validators.required]],
      year      : ["", [Validators.required]],
      school    : ["", [Validators.required]],
    });
    this.yearGroups = [1, 2, 3, 4, 5, 6];

    this.http.get(this.server+"/getSchools",{},{})
    .then(data => {
      this.schoolList = JSON.parse(data.data).schools
      console.log("schools:", this.schoolList)

    })
    .catch(error => {
      console.log("status", error.status);
      console.log("error", error.error);

    });
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
      points   : 0,
    };

    console.log(credentials);

    if(password1 == password2 && password1.length > 7){

      console.log(credentials)

      this.http.setDataSerializer('json');
      this.http.get(this.server + "/test", {}, {})
      .then(data => {
        console.log("response: ", data.data)

      })
      .catch(error => {
        console.log("error here",error.error)
        this.presentAlert();

      });

      this.http.post(this.server + "/register", credentials, {'Content-Type': 'application/json'})
      .then(data => {
        var user = JSON.parse(data.data);
        console.log("user: ", user)
        console.log("response: ", data)
        this.nativeStorage.setItem('cookie', {cookie: user.cookie})
        .then(() => {
          //save info
          this.nativeStorage.setItem('user', credentials)
          .then(() => {
            console.log("got to play")
            this.router.navigate(['/play'])
          }, error => console.error('Error storing user', error));
        }, error => console.error('Error storing cookie', error));

      })
      .catch(error => {
        console.log("error here",error.error)
        this.presentAlert();

      });

    } else{
      // error!!!
      alert("Please ensure your password is at least 8 characters and matches the confirmation field");
    }
  }

  presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Error';
    alert.message = 'Please check your internet connection.';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }

}
