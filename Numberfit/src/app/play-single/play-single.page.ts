import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit }     from '@angular/core';
import { ScreenOrientation }     from '@ionic-native/screen-orientation/ngx';
import { ActivatedRoute }        from '@angular/router';
import { NativeStorage }         from '@ionic-native/native-storage/ngx';
import { HTTP }                  from '@ionic-native/http/ngx';

@Component({
  selector    : 'app-play-single',
  templateUrl : './play-single.page.html',
  styleUrls   : ['./play-single.page.scss'],
})
export class PlaySinglePage implements OnInit {

  server           : string = require('../config.json').server;
  bucket           : string = require('../config.json').bucket;
  subject          : string = this.activatedRoute.snapshot.paramMap.get("subject");
  cookie           : string;
  user             : any;
  question         : string = "../../assets/question.png";
  checkList        : Array<string> = [];
  answer           : Array<Object> = [{answer:"../../assets/answer.png"},{answer:"../../assets/answer.png"},{answer:"../../assets/answer.png"},{answer:"../../assets/answer.png"}];
  videos           : Array<string> = [];
  video            : SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/PuIjnd76cN8');
  correctCounter   : number = 0;
  incorrectCounter : number = 0;
  images           : Array<string> = ['Picture1', 'Picture2', 'Picture3', 'Picture4', 'Picture5', 'Picture6', 'Picture7', 'Picture8', 'Picture9'];;
  imgState         : number = 0;
  pictureRef       : string;
  questionCardEle  : HTMLElement;
  videoEle         : HTMLElement;


  constructor(
    private screenOrientation : ScreenOrientation,
    private activatedRoute    : ActivatedRoute,
    private nativeStorage     : NativeStorage,
    private http              : HTTP,
    private sanitizer         : DomSanitizer,
  ) {
    // lock screen portrait
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    this.pictureRef = this.images[this.imgState];
    // Get cookie
    this.nativeStorage.getItem('cookie')
    .then((data) => {
      this.cookie = data.cookie
      // Get user
      this.nativeStorage.getItem('user')
      .then((data) => {
        this.user = data
        if(!this.user["year"]){this.user["year"] = 6}
        if(!this.user["points"] && this.user["points"]!=0){this.user["points"] = 300}

        // Get URLs to videos
        this.http.get(this.server + "/getVideo",{},{})
        .then(data => {
          var videos = JSON.parse(data.data).videos;
          videos.forEach((item) => {
            this.videos.push(item.url+"?rel=0")
            // console.log(item)
            // console.log("url",item.url+"?rel=0")
          })
          this.video = this.sanitizer.bypassSecurityTrustResourceUrl(videos[0]);
          // Ready to play!!!
          this.play()

        })
        .catch(error => {
          console.log("status", error.status);
          console.log("error", error.error);
          console.log("error here", error);

        });

      });
    });
  }

  ngOnInit(){
    this.questionCardEle = document.querySelector('.question-card');
    this.videoEle = document.querySelector('.video-container');
  }

  play(){
    let qSetNumber =  18; // Number of question sets
    if(this.user.year == 1 && this.subject != "Time"){
      qSetNumber = 6; // For some reason year one have fewer resources on all but Time
    }
    var diff;
    if(this.user.points > require('../config.json').use_adv_cards_above_points){diff="adv";} else
    if(this.user.points > require('../config.json').use_int_cards_above_points){diff="int"} else{
      diff="beg"
    }
    this.answer = [];
    while(this.answer.length<4){
      let page = 4*Math.floor(Math.random() * qSetNumber);
      let card = page+Math.floor(Math.random() * 6); // 6 questions on each page
      let ques = this.bucket+"/"+this.subject+"/"+this.user.year+"/"+diff+"/"+"PDF-"+page+"-"+card+".png"
      let ans  = this.bucket+"/"+this.subject+"/"+this.user.year+"/"+diff+"/"+"PDF-"+(page+2)+"-"+(card+2)+".png"
      // console.log("checklist", this.checkList)
      console.log("question", this.question)
      // console.log("includes", this.checkList.includes(this.question))
      if(!this.checkList.includes(ques)){
        this.question = ques
        this.answer.push({question:this.question, answer:ans})
      }
    }
    this.answer.sort(() => Math.random() - 0.5);
  };


  // main operating function for the whole process
  updateProgress(i:number){
    // check if the answer is correct
    if (this.answer[i]["question"]==this.question){
      // play video when needed
      this.checkList.push(this.question)
      this.playAudio(true);
      this.updateProgressBar();
      this.correctCounter += 1;
      if(this.checkWin()){
        return;
      }
      //every 3 questions
      if (this.correctCounter%3==0){
        this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.videos[(this.correctCounter/3-1)])
        console.log("vid url",this.videos[(this.correctCounter/3-1)])
        this.switchVideoQuestions(true);
      } else{
        this.enableButtons(false)
        const DOM = this;
        setTimeout(function(){ DOM.enableButtons(true); }, 750);
      }
    }
    else {
      this.playAudio(false);
      this.incorrectCounter += 1;
      this.enableButtons(false)
      const DOM = this;
      setTimeout(function(){ DOM.enableButtons(true); }, 750);
    }
    this.play()
  }

  displayEnd(){
    let endSection = <HTMLElement>document.querySelector(".end-section");
    let overlaySection = <HTMLElement>document.querySelector(".overlay-section");
    overlaySection.style.opacity = "30%";
    endSection.style.visibility = "visible";
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

  switchVideoQuestions(toVideo: boolean){

    if (toVideo){
      this.questionCardEle.style.visibility = "hidden";
      this.videoEle.style.visibility = "visible";
    } else {
      this.questionCardEle.style.visibility = "visible";
      this.videoEle.style.visibility = "hidden";
      this.video = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/PuIjnd76cN8');
    }

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

      if(!this.user.teacher){
        console.log("Saving Game!")
        this.saveGame()
      }

      this.enableButtons(false);
      let ele2 = <HTMLElement>document.querySelector('.board');
      let ele3 = <HTMLElement>document.querySelector('.winning-container');
      let ele4 = <HTMLElement>document.querySelector('.congrats-label');
      let ele5 = <HTMLElement>document.querySelector('#star-animation');

      // star rain appears first
      ele5.style.visibility = "visible";
      this.questionCardEle.style.visibility = "hidden";
      this.videoEle.style.visibility = "hidden";

      ele2.style.visibility = "hidden";
      ele3.style.visibility = "visible";
      ele4.style.width = "100%";
      // redirect to play page after congrats
      this.sleep(5000).then(() => {
        ele5.style.visibility = "hidden";
        this.displayEnd();
        return true;
      })
    } else{
      return false;
    }
  }

  // Saves game to gameHistories in server and updates points locally
  saveGame(){
    var gamePlayed = {
      cookie    : this.cookie,
      correct   : this.correctCounter,
      incorrect : this.incorrectCounter,
      topic     : this.subject,
    }
    var pointsTot = this.correctCounter - this.incorrectCounter
    var savedUser = {
      cookie   : this.cookie,
      points   : pointsTot,
    }
    pointsTot += this.user.points
    // console.log("gamePLayed: ", gamePlayed)
    // console.log("savedUser: ", savedUser.points)
    this.http.setDataSerializer('json');
    this.http.post(this.server + "/saveGame", gamePlayed, {'Content-Type': 'application/json'})
    .then(data => {
      this.http.post(this.server + "/updateScore", savedUser, {'Content-Type': 'application/json'})
      .then(data => {
        this.nativeStorage.setItem('user', {
          username : this.user.username,
          name     : this.user.name,
          school   : this.user.school,
          year     : this.user.year,
          mTeacher : this.user.mTeacher,
          teacher  : this.user.teacher,
          points   : pointsTot,
        })
        .then(() => { }, error => console.error('Error storing cookie', error));
      })
      .catch(error => {
        console.log("update score error: ",error.error)
        this.presentAlert("Connection","Error updating score.");
      });
    })
    .catch(error => {
      console.log("save game error:",error.error)
      this.presentAlert("Connection","Error saving game.");

    });
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
