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

  server     : string;
  cookie     : string;
  lines      : any;
  bars       : any;
  colorArray : any;
  results: [];
  dates: [];

  constructor(
    private nativeStorage : NativeStorage,
    private router        : Router,
    private http          : HTTP,
  ) {
    // Get server from config file
    this.server = require('../config.json').server;
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});

    var DOM   = this;
    console.log("send to", this.server+"/test")
    this.http.get(this.server+"/progress?cookie="+this.cookie,{},{})

    .then(data => {
      data = JSON.parse(data.data)
      DOM.results = data.data;
      DOM.dates = data["dates"]      
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
      labels: this.dates,
      datasets: [{
        label: 'Score',
        data: this.results,
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
      labels: this.dates,
      datasets: [{
        label: 'Minutes',
        data: this.results,
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


}
