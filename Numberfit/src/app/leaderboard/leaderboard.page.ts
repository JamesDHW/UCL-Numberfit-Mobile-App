import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-leaderboard',
  templateUrl: 'leaderboard.page.html',
  styleUrls: ['leaderboard.page.scss'],
})
export class HomePage implements OnInit {
  selectSchoolGroup: FormGroup;

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    formBuilder: FormBuilder,
  ) {
    this.selectSchoolGroup = formBuilder.group({
      school: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    const schoolSelect = document.getElementById('schoolSelect');
    const myScore = document.getElementById('myScore');
    const leaderboard = document.getElementById('leaderboard');

    this.angularFirestore.collection('Schools').ref.get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        schoolSelect.innerHTML += '<ion-select-option value=' + doc.id + '>' + doc.id + '</ion-select-option>';
      });
    });
    this.angularFirestore.collection('Users').doc(this.angularFireAuth.auth.currentUser.uid)
    .ref.get().then((doc) => {
      if (doc.exists) {
        const score = doc.data().score;
        myScore.innerHTML = 'My Score: ' + score + ' points';
      }
    });
    this.angularFirestore.collection('Users').ref.orderBy('score').limit(10)
    .get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        leaderboard.innerHTML += '<ion-item> <ion-label>' + doc.data().name + ' scored '
        + doc.data().score + ' points!' + '</ion-label> </ion-item>';
      });
    });
  }

  searchSchool() {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = '';

    this.angularFirestore.collection('Users').ref
    .where('school', '==', this.selectSchoolGroup.value.school).orderBy('score').limit(10)
    .get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        leaderboard.innerHTML += '<ion-item> <ion-label>' + doc.data().name + ' scored '
        + doc.data().score + ' points!' + '</ion-label> </ion-item>';
      });
    });
  }
}
