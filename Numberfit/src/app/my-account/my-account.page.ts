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
  userObj    : any;
  modifyDetailsFormGroup: FormGroup;
  // formBuilder: FormBuilder;
  yearGroups : Array<string>;
  schoolList : Array<string>;
  name       : string = "Loading..";
  email      : string = "Loading..";

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
    .then((data) => {this.userObj = data});

    this.yearGroups = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'];
    this.schoolList = ['UCL', 'LSE', 'Imperial'];
    this.modifyDetailsFormGroup = formBuilder.group({
      // name: ["", [Validators.required]],
      // email: ["", [Validators.required, Validators.email]],
      password1 : ["", [Validators.required]],
      password2 : ["", [Validators.required]],
      year      : ["", [Validators.required]],
      school    : ["", [Validators.required]],
    });
  }

  // getUserDetails(){
  //   var xhttpDetails = new XMLHttpRequest();
  //   let DOM = this;
  //
  //   xhttpDetails.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       console.log("GET details request succeeded");
  //       DOM.userObj = JSON.parse(this.responseText);
  //       DOM.changeToLoadedData();
  //     } else if(this.status != 200) {
  //       console.log("GET request failed with status " + this.status);
  //     }
  //   };
  //
  //   // Define and send the GET request
  //   xhttpDetails.open("GET", this.server+"/myDetails?cookie="+this.cookie, true);
  //   xhttpDetails.send();
  // }

  modifyDetails(){

    const password1 = this.modifyDetailsFormGroup.value.password1;
    const password2 = this.modifyDetailsFormGroup.value.password2;

    const credentials = {
      // username : this.modifyDetailsFormGroup.value.email.toLowerCase(),
      password : Md5.hashStr(password1),
      // name     : this.modifyDetailsFormGroup.value.name,
      year     : this.modifyDetailsFormGroup.value.year,
      school   : this.modifyDetailsFormGroup.value.school
    };

    if(password1==password2 && password1.length > 7){

      this.http.post(this.server + "/modifyDetails", credentials, {})
      .then(data => {
        // var user = JSON.parse(data.data);
        // var user = data.data;
        // console.log("user: ", user)
        // console.log("response: ", data)
        // this.nativeStorage.setItem('cookie', {cookie: user.cookie})
        // .then(() => {
        //   this.nativeStorage.setItem('user', {
        //     username : user.username,
        //     name     : user.name,
        //     school   : user.school,
        //     year     : user.year,
        //     teacher  : user.teacher,
        //   })
        //   .then(() => {
        //     // console.log("got to play")
        //     this.router.navigate(['/play'])
        //   }, error => console.error('Error storing user', error));
        // }, error => console.error('Error storing cookie', error));

      })
      .catch(error => {
        console.log("error here",error.error)
        this.presentAlert();

      });

      // var xhttp = new XMLHttpRequest();
      //
      // xhttp.onreadystatechange = function() {
      //   if (this.readyState == 4 && this.status == 200) {
      //     const cookie = JSON.parse(this.responseText);
      //     console.log(cookie);
      //   } else if(this.status != 200) {
      //     console.log(this.responseText);
      //
      //   }
      // };
      // console.log(credentials);
      // xhttp.open('POST', this.server+'/modifyDetails', true);
      // xhttp.setRequestHeader("Content-type", "application/json");
      // xhttp.send(JSON.stringify(credentials));

    } else{
      // error!!!
      alert("Please ensure your password is at least 8 characters and matches the confirmation field");
    }

  }

  changeToLoadedData(){
    this.modifyDetailsFormGroup.reset({school: this.userObj.school, year: "Year " + this.userObj.year});
    this.name  = this.userObj.name;
    this.email = this.userObj.username;
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
    alert.header = 'Error';
    alert.message = 'Please check your internet connection.';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }

}
