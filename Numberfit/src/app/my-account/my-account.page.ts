import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ScreenOrientation }      from '@ionic-native/screen-orientation/ngx';
import { NativeStorage }          from '@ionic-native/native-storage/ngx';
import { Component }              from '@angular/core';
import { HTTP }                   from '@ionic-native/http/ngx';
import { Md5 }                    from 'ts-md5/dist/md5';

@Component({
  selector    : 'app-my-account',
  templateUrl : './my-account.page.html',
  styleUrls   : ['./my-account.page.scss'],
})
export class MyAccountPage {

  server           : string = require('../config.json').server;
  cookie           : string;
  user             : any = {username:"-",name:"-",school:"-",year:"-",teacher:"-"};
  yearGroups       : Array<string>;
  schoolList       : Array<string>;
  teachers         = [];
  teachDef         = "Select."
  modifyDetailsFormGroup: FormGroup;

  constructor(
    private screenOrientation : ScreenOrientation,
    private nativeStorage     : NativeStorage,
    private router            : Router,
    private http              : HTTP,
    private route             : ActivatedRoute,
    formBuilder               : FormBuilder,
  ) {
    // lock screen portrait
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});
    // Get user from storage
    this.nativeStorage.getItem('user')
    .then((data) => {
      this.user = data
      if(this.user.teacher){;
        document.getElementById("modForm").style.display = "none";
      }

      this.http.get(this.server+"/getTeachers?school="+this.user.school,{},{})
      .then(data => {
        this.teachers = JSON.parse(data.data).teachers
        this.teachers.forEach(teacher => {
          if(teacher.username == this.user.mTeacher){
            this.teachDef = teacher.name
          }
        })
      })
      .catch(error => {
        console.log("status", error.status);
        console.log("error", error.error);

      });
    });

    this.yearGroups = ['1', '2', '3', '4', '5', '6'];
    this.modifyDetailsFormGroup = formBuilder.group({
      password1 : ["", [Validators.required]],
      password2 : ["", [Validators.required]],
      year      : ["", [Validators.required]],
      teacher   : ["", [Validators.required]],
    });
  }

  modifyDetails(){

    const password1 = this.modifyDetailsFormGroup.value.password1;
    const password2 = this.modifyDetailsFormGroup.value.password2;

    console.log("teacher",this.modifyDetailsFormGroup.value)
    const credentials = {
      year     : this.modifyDetailsFormGroup.value.year,
      mTeacher : this.modifyDetailsFormGroup.value.teacher,
      cookie   : this.cookie,
      password : Md5.hashStr(password1),
    };

    if((password1==password2 && password1.length > 7) || (password1.length==0 && password2.length==0)){

      // console.log(credentials)
      this.http.setDataSerializer('json');
      this.http.post(this.server + "/modifyDetails", credentials, {'Content-Type': 'application/json'})
      .then(data => {
        var year;
        var mTeacher;
        if(!this.modifyDetailsFormGroup.value.year){
          year = this.user.year
        }else{
          year = this.modifyDetailsFormGroup.value.year
        }
        if(!this.modifyDetailsFormGroup.value.teacher){
          mTeacher = this.user.mTeacher
        }else{
          mTeacher = this.modifyDetailsFormGroup.value.teacher
        }
        this.nativeStorage.setItem('user', {
          username : this.user.username,
          name     : this.user.name,
          school   : this.user.school,
          year     : year,
          mTeacher : mTeacher,
          teacher  : this.user.teacher,
          points   : this.user.points,
        })
        .then(() => {
          // console.log("got to play")
          this.router.navigate(['/play'])
          this.presentAlert("Success!","")
        }, () => this.presentAlert("Internal Storage","Error updating details internally."));
      })
      .catch(error => {
        console.log("error here",error.error)
        this.presentAlert("Connection","Error updating details to the internet.");
      });
    } else{
      // error!!!
      this.presentAlert("Password","Please choose a more secure password.");
    }

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
