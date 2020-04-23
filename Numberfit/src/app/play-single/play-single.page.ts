import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play-single',
  templateUrl: './play-single.page.html',
  styleUrls: ['./play-single.page.scss'],
})
export class PlaySinglePage implements OnInit {

  images: Array<string>;
  imgState: number;
  bucket:string = "https://primary-app-resources.s3.eu-west-2.amazonaws.com";
  user:any = {year:1};
  pictureRef: string;
  questionArray: Array<string>;
  questionCard: string;
  questionState: number;
  correctAnswer: number; // button number
  answerOptions: Array<number>;
  color: string;
  correctCounter: number;
  incorrectCounter: number;
  questionCardEle: HTMLElement;
  videoEle: HTMLElement;
  cookie: string;
  question: string;
  answer: Array<object>;
  checkList: Array<string>;



  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    this.prepareProgressBar();

    this.prepareQuestions();

    this.prepareCounter();

    this.play();

  }

  play(){
    let subject = this.activatedRoute.snapshot.paramMap.get("subject");
    let qSetNumber =  18; // Number of question sets
    if(this.user.year == 1 && subject != "Time"){
      qSetNumber = 6; // For some reason year one have fewer resources on all but Time
    }
    this.checkList = [];
    this.answer = [];
    while(this.answer.length!=4){
      let page = 4*Math.floor(Math.random() * qSetNumber);
      let card = page+Math.floor(Math.random() * 6); // 6 questions on each page
      let ques = this.bucket+"/"+subject+"/"+this.user.year+"/beg/"+"PDF-"+page+"-"+card+".png"
      let ans = this.bucket+"/"+subject+"/"+this.user.year+"/beg/"+"PDF-"+(page+2)+"-"+(card+2)+".png"
      if(!this.checkList.includes(this.question)){
        this.question = ques
        this.answer.push({question:this.question, answer:ans})
      }
    }
    this.shuffleAnswerOptions(this.answer)
    console.log(this.answer)
    console.log(this.question)
  };

  ngOnInit() {
    this.questionCardEle = <HTMLElement>document.querySelector('.question-card');
    this.videoEle = document.querySelector('.video-container');
  }

  // main operating function for the whole process
  updateProgress(i:number){
    // check if the answer is correct
    if (this.answer[i]["question"]==this.question){
      // play video when needed
      this.checkList.push(this.question)
      this.playAudio(true);
      this.updateProgressBar();
      if(this.checkWin()){
        return;
      }
      this.updateQuestionCard();
      this.correctCounter += 1;
      if (this.correctCounter%3==0){
        this.switchVideoQuestions(true);
      }
    }
    else {
      this.playAudio(false);
      this.updateQuestionCard();
      this.incorrectCounter += 1;
    }
    this.play()
  }

  prepareCounter(){
    this.correctCounter = 0;
    this.incorrectCounter = 0;
  }

  prepareProgressBar(){
    this.imgState = 0;

    this.images = ['Picture1', 'Picture2', 'Picture3', 'Picture4', 'Picture5', 'Picture6', 'Picture7', 'Picture8', 'Picture9'];

    this.pictureRef = this.images[this.imgState];
  }

  prepareQuestions(){
    this.questionState = 0;

    this.questionArray = ['Question1', 'Question2', 'Question3','Question4', 'Question5']; //read from database

    this.questionCard = this.questionArray[this.questionState];

    this.answerOptions = [123,456,789,112]; // read from database

    this.correctAnswer = 1;//Math.ceil(Math.random() * 4); // read from database
  }

  shuffleAnswerOptions(array:Array<object>) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }

  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

  enableButtons(enable: boolean) {
    let choiceButtons = document.querySelectorAll(".choice-button");
    for(var i=0; i<choiceButtons.length; i++){
      let button = <HTMLInputElement>choiceButtons[i];
      button.disabled = !enable;
    }
  }

  enableVideoOrQuestions(toVideo: boolean) {
    if (toVideo){
      this.questionCardEle.style.visibility = "hidden";
      this.videoEle.style.visibility = "visible";
    } else {
      this.questionCardEle.style.visibility = "visible";
      this.videoEle.style.visibility = "hidden";
    }
  }

  switchVideoQuestions(toVideo: boolean){
    this.enableVideoOrQuestions(toVideo);
    this.enableButtons(!toVideo);
    let backToGameButton = <HTMLElement>document.querySelector("#video-done-button");
    backToGameButton.style.visibility = toVideo? "visible":"hidden";
  }


  // the progress bar move one step forward with correct answer
  updateProgressBar(){
    this.imgState = ++this.imgState; //% this.images.length;
    this.pictureRef = this.images[this.imgState];
  }

  checkWin(): boolean {
    if (this.imgState>=8){
      this.enableButtons(false);
      let ele1 = <HTMLElement>document.querySelector('#balloon-effect');
      let ele2 = <HTMLElement>document.querySelector('.board');
      let ele3 = <HTMLElement>document.querySelector('.winning-container');
      let ele4 = <HTMLElement>document.querySelector('.congrats-label');
      let ele5 = <HTMLElement>document.querySelector('#star-animation');

      // star rain appears first
      ele5.style.visibility = "visible";
      this.questionCardEle.style.visibility = "hidden";
      this.videoEle.style.visibility = "hidden";

      this.sleep(2000).then(() => {
        ele1.style.animationPlayState = "running";
        ele2.style.visibility = "hidden";
        ele3.style.visibility = "visible";
        ele4.style.width = "100%";
      })
      // redirect to play page after congrats
      this.sleep(8000).then(() => {
        ele5.style.visibility = "hidden";
        this.router.navigateByUrl('/play');
        return true;
      })
    }
    return false;
  }

  // the question card changes regardless of correctness
  updateQuestionCard(){
    this.questionState = ++this.questionState % this.questionArray.length;
    this.questionCard = this.questionArray[this.questionState];
    // assume answerOptions has been read from database
    var correctAnswerNumber = this.answerOptions[0];
    this.answerOptions = this.shuffleAnswerOptions(this.answerOptions);
    this.correctAnswer = this.answerOptions.indexOf(correctAnswerNumber)+1;
    console.log("correct answer is: "+this.correctAnswer);
  }

}
