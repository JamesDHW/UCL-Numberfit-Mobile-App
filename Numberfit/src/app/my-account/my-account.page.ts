import { FormGroup, FormBuilder, Validators, ControlContainer } from '@angular/forms';
import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Md5 }                    from 'ts-md5/dist/md5';
import { NativeStorage }          from '@ionic-native/native-storage/ngx';

@Component({
  selector    : 'app-my-account',
  templateUrl : './my-account.page.html',
  styleUrls   : ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  server     : string;
  cookie     : string;
  userObj    : any;
  modifyDetailsFormGroup: FormGroup;
  // formBuilder: FormBuilder;
  yearGroups : Array<string>;
  schoolList : Array<string>;
  name       : string;
  email      : string;

  constructor(
    private nativeStorage : NativeStorage,
    private router        : Router,
    private route         : ActivatedRoute,
    private formBuilder   : FormBuilder
  ) {
    // Get server from config file
    this.server = require('../config.json').server;
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});

    this.yearGroups = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'];
    this.schoolList = ['UCL', 'LSE', 'Imperial'];
    this.name       = "Loading..";
    this.email      = "Loading..";
    this.modifyDetailsFormGroup = formBuilder.group({
      // name: ["", [Validators.required]],
      // email: ["", [Validators.required, Validators.email]],
      password1 : ["", [Validators.required]],
      password2 : ["", [Validators.required]],
      year      : ["", [Validators.required]],
      school    : ["", [Validators.required]],
    });
  }

  getUserDetails(){
    var xhttpDetails = new XMLHttpRequest();
    let DOM = this;

    xhttpDetails.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("GET details request succeeded");
        DOM.userObj = JSON.parse(this.responseText);
        DOM.changeToLoadedData();
      } else if(this.status != 200) {
        console.log("GET request failed with status " + this.status);
      }
    };

    // Define and send the GET request
    xhttpDetails.open("GET", this.server+"/myDetails?cookie="+this.cookie, true);
    xhttpDetails.send();
  }

  modifyDetails(){
    const DOM = this;

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
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          const cookie = JSON.parse(this.responseText);
          console.log(cookie);
        } else if(this.status != 200) {
          console.log(this.responseText);

        }
      };
      console.log(credentials);
      xhttp.open('POST', this.server+'/modifyDetails', true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify(credentials));

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
    this.getUserDetails();
    // this.modifyDetailsFormGroup.reset({name: this.userObj.name});
    // this.modifyDetailsFormGroup.get('name').setValue(this.userObj.name);
  }

}
