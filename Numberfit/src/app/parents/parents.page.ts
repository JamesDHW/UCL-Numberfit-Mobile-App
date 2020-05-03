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
  title      : string = "loading";
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

        if(this.user.teacher){
          this.title = ""
        } else {
          this.title = this.user.name
        }

        // Test display data
        // this.games = {"Division" : 10, "Multiplication" : 25, "Addition": 60,
        // data : [10,5,35,20,50,60,70,75,90,85],
        // date : ["25 March","26 March","27 March","28 March","29 March","30 March","31 March","1 April","2 April","3 April"]}
        //
        //   this.drawBadges()
        //   this.createLineChart();

        this.http.post(this.server+"/progress",send, {})
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
    for(var key of Object.keys(this.games)){
      if(this.games[key] > require('../config.json').master_above_games_played && key != "data" && key != "date"){
        this.badges.push({
          topic : key,
          rank  : "Master",
          image : "../../assets/badges/master.png"
        })
      } else if(this.games[key] > require('../config.json').expert_above_games_played && key != "data" && key != "date"){
        this.badges.push({
          topic : key,
          rank  : "Expert",
          image : "../../assets/badges/expert.png"
        })
      } else if(this.games[key] > require('../config.json').advanced_above_games_played && key != "data" && key != "date"){
        this.badges.push({
          topic : key,
          rank  : "Advanced",
          image : "../../assets/badges/advanced.png"
        })
      } else if(this.games[key] > require('../config.json').novice_above_games_played && key != "data" && key != "date"){
        this.badges.push({
          topic : key,
          rank  : "Novice",
          image : "../../assets/badges/novice.png"
        })
      }
    }
    if(this.badges.length==0){
      this.badges.push({
        topic : "",
        rank  : "No Badges - Yet!",
        image : "../../assets/icon/trophy.svg"})
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
