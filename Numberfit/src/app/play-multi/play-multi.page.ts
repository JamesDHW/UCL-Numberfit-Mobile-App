import { Component, OnInit } from '@angular/core';
import { NativeStorage }     from '@ionic-native/native-storage/ngx';
import { ActivatedRoute}     from '@angular/router';
import { HTTP }              from '@ionic-native/http/ngx';

@Component({
  selector    : 'app-play-multi',
  templateUrl : './play-multi.page.html',
  styleUrls   : ['./play-multi.page.scss'],
})
export class PlayMultiPage {
  server          : string = require('../config.json').server;
  bucket          : string = require('../config.json').bucket;
  cookie          : string;
  user            : any;
  subject         : string = this.activatedRoute.snapshot.paramMap.get("subject");
  images          : Array<number> = [1,2,3,4,5,6,7,8,9,10];
  imgState        : number;
  top_right       : string; // Something to do with the progress bar
  bottom_left     : string; // Something to do with the progress bar
  middle_right    : string; // Something to do with the progress bar
  middle_left     : string; // Something to do with the progress bar
  middle_center   : string; // Something to do with the progress bar
  top_progress    : number = 0;
  bottom_progress : number = 0;
  topUserObj      : onePlayerWrapper;
  bottomUserObj   : onePlayerWrapper;
  pictureRef      : string;
  color           : string;
  videos          : Array<string> = [];
  video           : string;
  checkList       : Array<string> = [];
  question1       : string;
  answer1         : Array<Object> = [{answer:"-"},{answer:"-"},{answer:"-"},{answer:"-"}];
  question2       : string;
  answer2         : Array<Object> = [{answer:"-"},{answer:"-"},{answer:"-"},{answer:"-"}];
  // questionCardEle: HTMLElement;
  // videoEle: HTMLElement;

  constructor(
    private activatedRoute : ActivatedRoute,
    private nativeStorage  : NativeStorage,
    private http           : HTTP,
  ) {
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});

    this.prepareProgressBar();

    this.topUserObj = new onePlayerWrapper(this.answer1);
    this.bottomUserObj = new onePlayerWrapper(this.answer2);

    // Get cookie
    this.nativeStorage.getItem('cookie')
    .then((data) => {
      this.cookie = data.cookie
      // Get user
      this.nativeStorage.getItem('user')
      .then((data) => {
        this.user = data
        if(!this.user["points"]){this.user["points"] = 300}
        if(!this.user["year"]){this.user["year"] = 6}

        // Get URLs to videos
        this.http.get(this.server + "/getVideo",{},{})
        .then(data => {
          var videos = JSON.parse(data.data).videos;
          videos.forEach((item) => {
            this.videos.push(item.url)
          })
          this.video = videos[0]
          // Ready to play!!!
          this.play(1);
          this.play(2);

        })
        .catch(error => {
          console.log("status", error.status);
          console.log("error", error.error);
          console.log("error here", error);

        });

      });
    });
  }

  play(player){
    let qSetNumber =  18; // Number of question sets
    if(this.user.year == 1 && this.subject != "Time"){
      qSetNumber = 6; // For some reason year one have fewer resources on all but Time
    }
    var diff;
    if(this.user.points > 250){diff="adv"} else
    if(this.user.points < 100){diff="int"} else{
      diff="beg"
    }
    var answerArray = [];
    while(answerArray.length<4){
      let page = 4*Math.floor(Math.random() * qSetNumber);
      let card = page+Math.floor(Math.random() * 6); // 6 questions on each page
      let ques = this.bucket+"/"+this.subject+"/"+this.user.year+"/"+diff+"/"+"PDF-"+page+"-"+card+".png"
      let ans  = this.bucket+"/"+this.subject+"/"+this.user.year+"/"+diff+"/"+"PDF-"+(page+2)+"-"+(card+2)+".png"
      // console.log("checklist", this.checkList)
      // console.log("question", this.question)
      // console.log("includes", this.checkList.includes(this.question))
      if(!this.checkList.includes(ques)){
        var question = ques
        answerArray.push({question:question, answer:ans})
      }
    }
    answerArray.sort(() => Math.random() - 0.5);
    if(player==1){
      this.answer1 = answerArray
      this.question1 = question
    } else {
      this.answer2 = answerArray
      this.question2 = question
    }
  };

  prepareProgressBar(){
    this.top_right = 'tiger' + this.images[this.top_progress];
    this.bottom_left = 'lion' + this.images[this.bottom_progress];
    this.middle_right = 'tiger' + this.images[9];
    this.middle_left = 'lion' + this.images[9];
    this.middle_center = 'middle-center';
  }

  updateProgress(i:number){

    if (i < 4) {
      console.log(this.answer1[i])
      console.log(this.answer1[i]["question"])
      if (this.answer1[i]["question"]==this.question1){
        // play video when needed
        this.playAudio(true);
        this.updateProgressTop();
        this.topUserObj.updateStatus(true);
        if(this.checkWin(this.top_progress)){
          this.winningEffect(true);
          return;
        }
      } else {
        this.playAudio(false);
      }
      this.play(1)

    }
    else {
      if (this.answer2[i-4]["question"]==this.question2){
        // play video when needed
        this.playAudio(true);
        this.updateProgressBottom();
        this.bottomUserObj.updateStatus(true);
        if(this.checkWin(this.bottom_progress)){
          this.winningEffect(false);
          return;
        }
      } else {
        this.playAudio(false);
      }
      this.play(2)

    }

  }

  displayEnd(){
    let endSection = <HTMLElement>document.querySelector(".end-section");
    let overlaySection = <HTMLElement>document.querySelector(".ion-multi-content");
    overlaySection.style.opacity = "20%";
    endSection.style.visibility = "visible";
  }

  enableButtons(enable: boolean) {
    let choiceButtons = document.querySelectorAll(".choice-button");
    let choiceButtonsRotate = document.querySelectorAll(".choice-button-rotate");
    for(var i=0; i<choiceButtons.length; i++){
      let button = <HTMLInputElement>choiceButtons[i];
      let buttonRotate = <HTMLInputElement>choiceButtonsRotate[i];
      button.disabled = !enable;
      buttonRotate.disabled = !enable;
    }
  }

  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  winningEffect(topWin:boolean){
    this.enableButtons(false);
    let gameSection1 = <HTMLElement>document.querySelector('.game-section1');
    let progressBar = <HTMLElement>document.querySelector('.middle-progress-section');
    let gameSection2 = <HTMLElement>document.querySelector('.game-section2');

    document.getElementById("exit-fab1").style.visibility = "hidden"
    document.getElementById("exit-fab2").style.visibility = "hidden"
    let ele2 = <HTMLElement>document.querySelector('.board');
    let ele3 = <HTMLElement>document.querySelector('.winning-container');
    let ele4 = <HTMLElement>document.querySelector('.congrats-label');
    let ele5 = <HTMLElement>document.querySelector('#star-animation');

    //rotate if top user wins
    if(topWin){
      ele3.style.transform = "rotate(180deg)";
      ele5.style.transform = "rotate(180deg)";
    }

    // star rain appears first
    ele5.style.visibility = "visible";
    progressBar.style.visibility = "hidden";
    gameSection1.style.visibility = "hidden";
    gameSection2.style.visibility = "hidden";
    ele2.style.visibility = "hidden";
    ele3.style.visibility = "visible";
    ele4.style.width = "100%";
    // redirect to play page after congrats
    this.sleep(5000).then(() => {
      ele5.style.visibility = "hidden";
      this.displayEnd();
    })
  }

  playAudio(correctness:boolean){
    let audio = new Audio();
    if (correctness){
      audio.src = "/assets/Sounds/answer_correct.wav";
    } else {
      audio.src = "/assets/Sounds/answer_incorrect.wav";
    }
    audio.load();
    audio.play();
  }

  updateProgressTop(){
    this.top_progress = ++this.top_progress;//%this.images.length;
    if(this.top_progress<=5){
      this.top_right = 'tiger' + this.images[this.top_progress];
      this.middle_right = 'tiger' + this.images[9];
    }
    else{
      this.top_right = 'tiger0';
      this.middle_right = 'tiger' + this.images[this.top_progress];
    }
  }

  updateProgressBottom(){
    this.bottom_progress = ++this.bottom_progress;//%this.images.length;
    if(this.bottom_progress<=5){
      this.bottom_left = 'lion' + this.images[this.bottom_progress];
      this.middle_left = 'lion' + this.images[9];
    }
    else{
      this.bottom_left = 'lion0';
      this.middle_left = 'lion' + this.images[this.bottom_progress];
    }

  }



  checkWin(progress: number): boolean {
    if (progress >= 9) {
      return true;
    } else {
      return false;
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

class onePlayerWrapper{

  correctCounter   : number;
  incorrectCounter : number;

  constructor(questionArray: Array<Object>){
    this.correctCounter   = 0;
    this.incorrectCounter = 0;
  }

  updateStatus(isCorrect: boolean) {
    if (isCorrect) this.correctCounter += 1;
    else this.incorrectCounter += 1;
  }

}
