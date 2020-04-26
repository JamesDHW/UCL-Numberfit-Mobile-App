import { NativeStorage }         from '@ionic-native/native-storage/ngx';
import { Router, ActivatedRoute} from '@angular/router';
import { Component, OnInit }     from '@angular/core';
import { ElementFinder }         from 'protractor';

@Component({
  selector    : 'app-play-multi',
  templateUrl : './play-multi.page.html',
  styleUrls   : ['./play-multi.page.scss'],
})
export class PlayMultiPage implements OnInit {
  server          : string = require('../config.json').server;
  bucket          : string = require('../config.json').bucket;
  cookie          : string;
  images          : Array<number>;
  imgState        : number;
  top_right       : string;
  bottom_left     : string;
  middle_right    : string;
  middle_left     : string;
  middle_center   : string;
  top_progress    : number;
  bottom_progress : number;
  topUserObj      : onePlayerWrapper;
  bottomUserObj   : onePlayerWrapper;
  pictureRef      : string;
  questionArray   : Array<string>;
  answerOptions   : Array<number>;
  color           : string;
  // questionCardEle: HTMLElement;
  // videoEle: HTMLElement;

  constructor(
    private router         : Router,
    private activatedRoute : ActivatedRoute,
    private nativeStorage  : NativeStorage,
  ) {
    // Get cookie from storage
    this.nativeStorage.getItem('cookie')
    .then((data) => {this.cookie = data.cookie});

    this.prepareQuestions();
    this.prepareProgressBar();

    this.topUserObj = new onePlayerWrapper(this.questionArray);
    this.bottomUserObj = new onePlayerWrapper(this.questionArray);
  }

  ngOnInit() {
    var subject = this.activatedRoute.snapshot.paramMap.get("subject");
    console.log(subject);

  }

  prepareQuestions(){

    this.questionArray = ['Question1', 'Question2', 'Question3','Question4', 'Question5']; //read from database

    this.answerOptions = [123,456,789,112]; // read from database
  }

  prepareProgressBar(){
    this.bottom_progress = 0;
    this.top_progress = 0;
    this.images = [1,2,3,4,5,6,7,8,9,10];

    this.top_right = 'tiger' + this.images[this.top_progress];
    this.bottom_left = 'lion' + this.images[this.bottom_progress];
    this.middle_right = 'tiger' + this.images[9];
    this.middle_left = 'lion' + this.images[9];
    this.middle_center = 'middle-center';
  }

  updateProgress(userAnswer:number){
    if (userAnswer <= 4) {
      if (userAnswer==this.topUserObj.correctAnswer){
        // play video when needed
        this.playAudio(true);
        this.updateProgressTop();
        this.topUserObj.updateStatus(true);
        this.topUserObj.updateQuestionCard(this.questionArray, this.answerOptions);
        if(this.checkWin(this.top_progress)){
          this.winningEffect(true);
          return;
        }
      } else {
        this.playAudio(false);
        this.topUserObj.updateQuestionCard(this.questionArray, this.answerOptions);
        this.topUserObj.updateStatus(false);
      }
    }
    else {
      userAnswer = userAnswer - 4;
      if (userAnswer==this.bottomUserObj.correctAnswer){
        // play video when needed
        this.playAudio(true);
        this.updateProgressBottom();
        this.bottomUserObj.updateStatus(true);
        this.bottomUserObj.updateQuestionCard(this.questionArray, this.answerOptions);
        if(this.checkWin(this.bottom_progress)){
          this.winningEffect(true);
          return;
        }
      } else {
        this.playAudio(false);
        this.bottomUserObj.updateQuestionCard(this.questionArray, this.answerOptions);
        this.bottomUserObj.updateStatus(false);
      }
    }

  }

  displayEnd(){
    let endSection = <HTMLElement>document.querySelector(".end-section");
    let overlaySection = <HTMLElement>document.querySelector(".overlay-section");
    overlaySection.style.opacity = "30%";
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

    let ele1 = <HTMLElement>document.querySelector('#balloon-effect');
    let ele2 = <HTMLElement>document.querySelector('.board');
    let ele3 = <HTMLElement>document.querySelector('.winning-container');
    let ele4 = <HTMLElement>document.querySelector('.congrats-label');
    let ele5 = <HTMLElement>document.querySelector('#star-animation');

    //rotate if top user wins
    if(topWin){
      ele2.style.transform = "rotate(180deg)";
      ele3.style.transform = "rotate(180deg)";
    }

    // star rain appears first
    ele5.style.visibility = "visible";

    this.sleep(2000).then(() => {
      gameSection1.style.visibility = "hidden";
      progressBar.style.visibility = "hidden";
      gameSection2.style.visibility = "hidden";
      ele1.style.animationPlayState = "running";
      ele2.style.visibility = "hidden";
      ele3.style.visibility = "visible";
      ele4.style.width = "100%";
    })
    // redirect to play page after congrats
    this.sleep(8000).then(() => {
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

}

class onePlayerWrapper{

  questionCard: string;
  questionState: number;
  correctAnswer: number; // button number
  correctCounter: number;
  incorrectCounter: number;

  constructor(questionArray: Array<string>){
    this.questionState = 0;
    this.correctCounter = 0;
    this.incorrectCounter = 0;
    this.correctAnswer = 1; // button number starts from 1
    this.questionCard = questionArray[this.questionState];
  }

  updateStatus(isCorrect: boolean) {
    if (isCorrect) this.correctCounter += 1;
    else this.incorrectCounter += 1;
  }

  updateQuestionCard(questionArray: Array<string>, answerOptions:Array<number>){
    this.questionState = ++this.questionState;// % questionArray.length;
    this.questionCard = questionArray[this.questionState];
    // assume answerOptions has been read from database
    var correctAnswerNumber = answerOptions[0];
    answerOptions = this.shuffleAnswerOptions(answerOptions);
    this.correctAnswer = answerOptions.indexOf(correctAnswerNumber)+1; // correct answer button
    console.log("correct answer is: "+this.correctAnswer);
  }

  shuffleAnswerOptions(array:Array<number>) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }


}
