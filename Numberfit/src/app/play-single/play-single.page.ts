import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-single',
  templateUrl: './play-single.page.html',
  styleUrls: ['./play-single.page.scss'],
})
export class PlaySinglePage implements OnInit {

  images: Array<string>;
  imgState: number;
  pictureRef: string;
  questionArray: Array<string>;
  questionCard: string;
  questionState: number;
  userAnswer: number; // button number
  correctAnswer: number; // button number
  answerOptions: Array<number>;
  color: string;
  

  constructor(private router: Router) { 
    this.imgState = 0;

    this.images = ['Picture1', 'Picture2', 'Picture3', 'Picture4', 'Picture5', 'Picture6', 'Picture7', 'Picture8', 'Picture9'];

    this.pictureRef = this.images[this.imgState];

    // this.readFile();

    this.prepareQuestions();
    
  }

  prepareQuestions(){
    this.questionState = 0;

    this.questionArray = ['Question1', 'Question2', 'Question3','Question4', 'Question5']; //read from database

    this.questionCard = this.questionArray[this.questionState];

    this.answerOptions = [123,456,789,112]; // read from database

    this.correctAnswer = 1;//Math.ceil(Math.random() * 4); // read from database
  }

  shuffleAnswerOptions(array:Array<number>) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }

  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnInit() {
  }


  updateProgress(buttonClicked:number){
    this.userAnswer = buttonClicked;
    if (this.userAnswer==this.correctAnswer){ // check if the answer is correct
      this.playAudio(true);
      this.updateProgressBar();
      this.updateQuestionCard();
    }
    else {
      this.playAudio(false);
      this.updateQuestionCard();
    }
  }
  // sound effect at button click
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

  disableButtons() {
    let choiceButtons = document.querySelectorAll(".choice-button");
    for(var i=0; i<choiceButtons.length; i++){
      let button = <HTMLInputElement>choiceButtons[i];
      button.disabled = true;
    }
  }

  // the progress bar move one step forward with correct answer
  updateProgressBar(){
    this.imgState = ++this.imgState; //% this.images.length;
    this.pictureRef = this.images[this.imgState];
    if (this.imgState>=8){
      // this.sleep(3000).then(() => {
        this.disableButtons();
        let ele1 = <HTMLElement>document.querySelector('#balloon-effect');
        let ele2 = <HTMLElement>document.querySelector('.board');
        let ele3 = <HTMLElement>document.querySelector('.winning-container');
        let ele4 = <HTMLElement>document.querySelector('.congrats-label');
        let ele5 = <HTMLElement>document.querySelector('#star-animation');
        
        // star rain appears first
        ele5.style.visibility = "visible";
        this.sleep(2000).then(() => {
          ele1.style.animationPlayState = "running";
          ele2.style.visibility = "hidden";
          ele3.style.visibility = "visible";
          ele4.style.width = "100%";
        })
        // redirect to play page after congrats
        this.sleep(8000).then(() => {
          this.router.navigateByUrl('/play');
        })
      }
    // )}
  }

  // the question card changes regardless of correctness
  updateQuestionCard(){
    this.questionState = ++this.questionState % this.questionArray.length;
    this.questionCard = this.questionArray[this.questionState];
    // this.correctAnswer = Math.ceil(Math.random() * 4);
    // assume answerOptions has been read from database
    var correctAnswerNumber = this.answerOptions[0];
    this.answerOptions = this.shuffleAnswerOptions(this.answerOptions); 
    this.correctAnswer = this.answerOptions.indexOf(correctAnswerNumber)+1;
    console.log("correct answer is: "+this.correctAnswer);
  }
}
