import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-leaderboard',
  templateUrl: 'leaderboard.page.html',
  styleUrls: ['leaderboard.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
  ) {  }

  ngOnInit(){
    let schoolSelect = document.getElementById("schoolSelect");
    console.log(schoolSelect)
    this.angularFirestore.collection("Schools").ref.get().then((snapshot)=>{
      snapshot.docs.forEach(doc=>{
        schoolSelect.innerHTML += "<ion-select-option value="+doc.id+">"+doc.id+"</ion-select-option>";
      })
    });
  }
}
