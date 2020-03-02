import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
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
    private angularFirestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    formBuilder: FormBuilder
  ) {
    this.registerFormGroup = formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password1: ["", [Validators.required]],
      password2: ["", [Validators.required]],
      year: ["", [Validators.required]],
      school: ["", [Validators.required]],
    });
  }

  ngOnInit() {
    let schoolSelect = document.getElementById("schoolSelect");
    this.angularFirestore.collection("Schools").ref.get().then((snapshot)=>{
      snapshot.docs.forEach(doc=>{
        schoolSelect.innerHTML += "<ion-select-option value="+doc.id+">"+doc.id+"</ion-select-option>";
      })
    });
  }

  register(){
    const name = this.registerFormGroup.value['name'];
    const email = this.registerFormGroup.value['email'];
    const password1 = this.registerFormGroup.value['password1'];
    const password2 = this.registerFormGroup.value['password2'];
    const year = this.registerFormGroup.value['year'];
    const school = this.registerFormGroup.value['school'];

    if(password1==password2){
      this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password1).then(()=>{
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password1).then(()=>{
          this.angularFirestore.collection('Users').doc(this.angularFireAuth.auth.currentUser.uid).ref.set({
            name: name,
            year: year,
            school: school,
          }).then(()=>{ this.router.navigate(["/play"]) })
        })
      })
    };

  }

}
