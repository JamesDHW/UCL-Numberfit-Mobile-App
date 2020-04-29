import { Router, ActivatedRoute } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { Chart }                from 'chart.js';
import { NativeStorage }        from '@ionic-native/native-storage/ngx';
import { HTTP }                 from '@ionic-native/http/ngx';


@Component({
  selector    : 'app-parents',
  templateUrl : 'parents.page.html',
  styleUrls   : ['parents.page.scss'],
})

export class HomePage {
  @ViewChild('lineChart', {static: false}) lineChart;

  server     : string = require('../config.json').server;
  cookie     : string;
  lines      : any;
  bars       : any;
  colorArray : any;
  games      : any;
  user       : any;
  badges     : any = [];

  constructor(
    private activatedRoute : ActivatedRoute,
    private nativeStorage  : NativeStorage,
    private http           : HTTP,
  ) {

    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {
      this.cookie = data.cookie
      // Get cookie from storage
      this.nativeStorage.getItem('user')
      .then((data) => {
        this.user = data
        // Get progress of user
        var send = {
          cookie   : this.cookie,
          username : this.activatedRoute.snapshot.paramMap.get("user")
        }

        this.http.post(this.server+"/progress",send, {'Content-Type': 'application/json'})
        .then(data => {
          this.games = JSON.parse(data.data)
          this.drawBadges()
          this.createLineChart();
          console.log("returned - ", data.data)

        })
        .catch(error => {
          console.log("ERRORS FOUND")
          console.log("status:", error.status);
          console.log("error:", error.error); // error message as string

          const alert = document.createElement('ion-alert');
          alert.header = 'Error';
          alert.message = 'Could not find user records!.';
          alert.buttons = ['OK'];

          document.body.appendChild(alert);
          alert.present();
        });

      });

    });

  };

 createLineChart() {
  this.lines = new Chart(this.lineChart.nativeElement, {
    type: 'line',
    data: {
      labels: this.games["date"],
      datasets: [{
        label: 'Score',
        data: this.games["data"],
        borderColor: 'rgb(10, 10, 220)',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
    ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
 }

  drawBadges(){
    if(this.games.length==0){
      document.getElementById("badges").innerHTML += "<label>No Badges Earned - Yet!</label>"
    }
    for(var key of Object.keys(this.games)){
      if(this.games[key] > 50 && key != "data" && key != "date"){
        this.badges.push({
          topic : key,
          rank  : "Master",
          image : "../../assets/badges/master.png"
        })
      } else if(this.games[key] > 35 && key != "data" && key != "date"){
        this.badges.push({
          topic : key,
          rank  : "Expert",
          image : "../../assets/badges/expert.png"
        })
      } else if(this.games[key] > 20 && key != "data" && key != "date"){
        this.badges.push({
          topic : key,
          rank  : "Advanced",
          image : "../../assets/badges/advanced.png"
        })
      } else if(this.games[key] > 5 && key != "data" && key != "date"){
        this.badges.push({
          topic : key,
          rank  : "Novice",
          image : "../../assets/badges/novice.png"
        })
      }
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
