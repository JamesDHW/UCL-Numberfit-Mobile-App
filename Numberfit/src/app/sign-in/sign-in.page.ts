import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component }       from '@angular/core';
import { Router }          from '@angular/router';
import { Md5 }             from 'ts-md5/dist/md5';
import { NativeStorage }   from '@ionic-native/native-storage/ngx';
import { AlertController } from '@ionic/angular';
import { HTTP }            from '@ionic-native/http/ngx';



@Component({
  selector    : 'app-sign-in',
  templateUrl : './sign-in.page.html',
  styleUrls   : ['./sign-in.page.scss'],
})

export class SignInPage {

  signInFormGroup : FormGroup;
  server          : string = require('../config.json').server;
  // server          : string = "http://localhost:3000";
  cookie          : any;

  constructor(
    private nativeStorage   : NativeStorage,
    private alertController : AlertController,
    private router          : Router,
    private http            : HTTP,
    formBuilder             : FormBuilder,
  ) {
    // Get cookie from storage
    this.cookie = this.nativeStorage.getItem('cookie');

    // Initialise sign in form group
    this.signInFormGroup = formBuilder.group({
      email    : ["", [Validators.required]],
      password : ["", [Validators.required]],
    });

  }

  signIn(){
    // Get credentials from form
    const credentials = {
      'username' : this.signInFormGroup.value.email.toLowerCase(),
      'password' : Md5.hashStr(this.signInFormGroup.value.password)
    }

    this.http.post(this.server + "/login",credentials,{})
    .then(data => {
      var user = JSON.parse(data.data);
      console.log("user: ", user)
      console.log("response: ", data)
      this.nativeStorage.setItem('cookie', {cookie: user.cookie})
      .then(() => {
        var savedUser = {
          username : user.username,
          name     : user.name,
          school   : user.school,
          teacher  : user.teacher,
        }
        if(!user.teacher){
          savedUser["year"]   = user.year
          savedUser["points"] = user.points
        }
        //save info
        this.nativeStorage.setItem('user', savedUser)
        .then(() => {
          // console.log("got to play")
          this.router.navigate(['/play'])
        }, error => console.error('Error storing user', error));
      }, error => console.error('Error storing cookie', error));

    })
    .catch(error => {
      console.log("error here", error.error)
      this.presentAlert();

    });

    // var DOM = this;
    // var xhttp = new XMLHttpRequest();
    // console.log(this.server)
    // // Login request response handler
    // xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //
    //   } else if(this.status != 200) {
    //     console.log("error occured:",this.responseText);
    //     DOM.presentAlert();
    //   }
    // };
    // xhttp.open("POST", this.server + "/login", true);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(JSON.stringify(credentials));

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
