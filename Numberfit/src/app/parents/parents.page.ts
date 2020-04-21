import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-parents',
  templateUrl: 'parents.page.html',
  styleUrls: ['parents.page.scss'],
})

export class HomePage {
  @ViewChild('barChart', {static: false}) barChart;
  @ViewChild('lineChart', {static: false}) lineChart;

    lines: any;

    bars: any;
    colorArray: any;

  constructor() {}

  ionViewDidEnter() {
   this.createBarChart();
   this.createLineChart();

 }


 createLineChart() {
  this.lines = new Chart(this.lineChart.nativeElement, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jul', 'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'],
      datasets: [{
        label: '% Correct',
        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17, 20, 22, 25, 23],
        borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
        borderWidth: 1

      },  {

        label: '% Incorrect',
        data: [20, 17, 18, 14, 13, 15, 11, 10, 8, 6, 4, 3],
        borderColor: 'rgb(255, 0, 0)',// array should have same number of elements as number of dataset
        borderWidth: 1
      }



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
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Minutes',
        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
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
