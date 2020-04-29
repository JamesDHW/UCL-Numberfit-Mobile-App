import { FormGroup, FormBuilder, Validators, ControlContainer } from '@angular/forms';
import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NativeStorage }          from '@ionic-native/native-storage/ngx';
import { HTTP }                   from '@ionic-native/http/ngx';
import { Md5 }                    from 'ts-md5/dist/md5';

@Component({
  selector    : 'app-my-account',
  templateUrl : './my-account.page.html',
  styleUrls   : ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  server     : string = require('../config.json').server;
  cookie     : string;
  user       : any = {username:"-",name:"-",school:"-",year:"-",teacher:"-"};
  modifyDetailsFormGroup: FormGroup;
  teacherNames = [];
  teacherUsernames = [];
  // formBuilder: FormBuilder;
  yearGroups : Array<string>;
  schoolList : Array<string>;

  constructor(
    private nativeStorage : NativeStorage,
    private router        : Router,
    private http          : HTTP,
    private route         : ActivatedRoute,
    private formBuilder   : FormBuilder,
  ) {
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});
    // Get user from storage
    this.nativeStorage.getItem('user')
    .then((data) => {
      this.user = data

      this.http.get(this.server+"/getTeachers?school="+this.user.school,{},{})
      .then(data => {
        let teachers = JSON.parse(data.data).teachers
        console.log(data.data)
        teachers.forEach((teacher) => {
          this.teacherNames.push(teacher.name)
          this.teacherUsernames.push(teacher.username)
        })
        console.log(this.teacherNames, this.teacherUsernames)
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

    const credentials = {
      username : this.user.username,
      name     : this.user.name,
      school   : this.user.school,
      year     : this.modifyDetailsFormGroup.value.year,
      teacher  : this.user.teacher,
      mTeacher : this.modifyDetailsFormGroup.value.teacher,
      points   : this.user.points,
      cookie   : this.cookie,
      password : Md5.hashStr(password1),
    };

    if(password1==password2 && password1.length > 7){

      console.log(credentials)

      this.http.post(this.server + "/modifyDetails", credentials, {})
      .then(data => {
        this.nativeStorage.setItem('user', {
          username : this.user.username,
          name     : this.user.name,
          school   : this.user.school,
          year     : this.modifyDetailsFormGroup.value.year,
          mTeacher : this.modifyDetailsFormGroup.value.teacher,
          teacher  : this.user.teacher,
          points   : this.user.points,
        })
        .then(() => {
          // console.log("got to play")
          this.router.navigate(['/play'])
        }, error => this.presentAlert());

      })
      .catch(error => {
        console.log("error here",error.error)
        this.presentAlert();

      });

    } else{
      // error!!!
      const alert = document.createElement('ion-alert');
      alert.header = 'Password';
      alert.message = 'Input a more secure password.';
      alert.buttons = ['OK'];

      document.body.appendChild(alert);
      alert.present();
    }

  }

  ngOnInit() {
    // this.cookie = this.route.snapshot.paramMap.get('cookie');
    // console.log(this.cookie);
    // this.getUserDetails();
    // this.modifyDetailsFormGroup.reset({name: this.userObj.name});
    // this.modifyDetailsFormGroup.get('name').setValue(this.userObj.name);
  }

  presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Connection Error';
    alert.message = 'Please check your internet connection.';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }

}
