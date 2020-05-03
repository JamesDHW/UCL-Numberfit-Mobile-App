import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NativeStorage }     from '@ionic-native/native-storage/ngx';
import { Component }         from '@angular/core';
import { Router }            from '@angular/router';
import { HTTP }              from '@ionic-native/http/ngx';
import { Md5 }               from 'ts-md5/dist/md5';



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
    private screenOrientation : ScreenOrientation,
    private nativeStorage     : NativeStorage,
    private router            : Router,
    private http              : HTTP,
    formBuilder               : FormBuilder,
  ) {
    // lock screen portrait
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
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
    console.log(credentials)

    this.http.setDataSerializer('json');
    this.http.post(this.server + "/login",credentials, {'Content-Type': 'application/json'})
    .then(data => {
      var user = JSON.parse(data.data);
      // console.log("user: ", user)
      this.nativeStorage.setItem('cookie', {cookie: user.cookie})
      .then(() => {
        var savedUser = {
          username : user.username,
          name     : user.name,
          school   : user.school,
          teacher  : user.teacher,
        }
        if(!user.teacher){
          savedUser["year"]     = user.year
          savedUser["points"]   = user.points
          savedUser["mTeacher"] = user.mTeacher
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
      if(error.error.errors == "No user found"){
        this.presentAlert("Credentials","Invalid credentials.")
      } else{
        this.presentAlert("Connection","Error logging in to Numberfit.");
      }
    });

  }

  presentAlert(header, msg) {
    const alert = document.createElement('ion-alert');
    alert.header = header;
    alert.message = msg;
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    alert.present();
  }
}
