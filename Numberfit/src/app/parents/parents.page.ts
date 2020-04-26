import { Component, ViewChild } from '@angular/core';
import { Chart }                from 'chart.js';
import { NativeStorage }        from '@ionic-native/native-storage/ngx';
import { Router }        from '@angular/router';
import { HTTP }          from '@ionic-native/http/ngx';


@Component({
  selector    : 'app-parents',
  templateUrl : 'parents.page.html',
  styleUrls   : ['parents.page.scss'],
})

export class HomePage {
  @ViewChild('barChart', {static: false}) barChart;
  @ViewChild('lineChart', {static: false}) lineChart;

  server     : string = require('../config.json').server;
  cookie     : string;
  lines      : any;
  bars       : any;
  colorArray : any;
  games      : any;
  badges     : any = [];

  constructor(
    private nativeStorage : NativeStorage,
    private router        : Router,
    private http          : HTTP,
  ) {

    this.games = {data : [2,3,4,5], date : ["jan", "feb", "march", "april"], Addition: 6, Subtraction: 51};
    this.drawBadges()
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});

    this.http.get(this.server+"/progress?cookie="+this.cookie,{},{})

    .then(data => {
      this.games = JSON.parse(data.data)
      this.drawBadges()

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

    })
    .catch(error => {
      console.log("ERRORS FOUND")
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error);
    });

  };


  ionViewDidEnter() {
   this.createBarChart();
   this.createLineChart();
 }


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

 createBarChart() {
   this.bars = new Chart(this.barChart.nativeElement, {
     type: 'bar',
     data: {
       labels: this.games["date"],
       datasets: [{
         label: 'Games',
         data: this.games["data"],
         backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
         borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
         borderWidth: 1
       }]
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
      if(this.games[key] > 50 && key != "data" && key != "date"){
        console.log(key)
        this.badges.push({
          topic : key,
          rank  : "Master",
          image : "../../assets/badges/master.png"
        })
      } else if(this.games[key] > 35 && key != "data" && key != "date"){
        console.log(key)
        this.badges.push({
          topic : key,
          rank  : "Expert",
          image : "../../assets/badges/expert.png"
        })
      } else if(this.games[key] > 20 && key != "data" && key != "date"){
        console.log(key)
        this.badges.push({
          topic : key,
          rank  : "Advanced",
          image : "../../assets/badges/advanced.png"
        })
      } else if(this.games[key] > 5 && key != "data" && key != "date"){
        console.log(key)
        this.badges.push({
          topic : key,
          rank  : "Novice",
          image : "../../assets/badges/novice.png"
        })
      }
    }
    console.log(this.badges)
  }

}
