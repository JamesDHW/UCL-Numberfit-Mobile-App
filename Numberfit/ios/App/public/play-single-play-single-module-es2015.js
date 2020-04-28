(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["play-single-play-single-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play-single/play-single.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play-single/play-single.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button>Quit</ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-content\">\n  <section class=\"overlay-section\">\n  <section class=\"winning-container\">\n  <img id=\"center-star\" src=\"/assets/Winning-decoration/big_star.gif\"/>\n  <p id=\"congrats-font\">Good job!</p><br>\n  <section class=\"congrats-label\"></section>\n  </section>\n  <section class=\"board\">\n  <section>\n    <img id=\"star-animation\" src=\"/assets/Winning-decoration/star_animation.gif\"/>\n  </section>\n  <ion-card class=\"card\">\n    <!-- <ion-card-content> -->\n      <img class=\"question-card\" src=\"{{question}}\"/>\n      <!-- <div  style=\"width:100%; height:100%;\" > -->\n      <iframe class=\"video-container\" src=\"https://www.youtube.com/embed/AkMSuJ9yGbA?autoplay=1&rel=0\" allow='autoplay'></iframe>\n    <!-- </ion-card-content> -->\n  </ion-card>\n  <section class=\"progress-section\">\n    <img src=\"/assets/progress-singleplayer/{{pictureRef}}.png\"/>\n  </section>\n  <section class=\"done-button-section\">\n  <ion-button shape=\"round\" id=\"video-done-button\" (click)=\"switchVideoQuestions(false)\">\n    <span id=\"done-font\">Go!</span>\n  </ion-button>\n</section>\n  <section>\n    <ion-row class=\"choice-row\">\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(0)\">\n          <!-- <span class=\"font\">{{ans1}}</span> -->\n          <img id=\"answer-card\" src=\"{{answer[0]['answer']}}\"/>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(1)\">\n          <!-- <span class=\"font\">{{answerOptions[1]}}</span> -->\n          <img id=\"answer-card\" src=\"{{answer[1]['answer']}}\"/>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"choice-row\">\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(2)\">\n          <!-- <span class=\"font\">{{answerOptions[2]}}</span> -->\n          <img id=\"answer-card\" src=\"{{answer[2]['answer']}}\"/>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(3)\">\n          <!-- <span class=\"font\">{{answerOptions[3]}}</span> -->\n          <img id=\"answer-card\" src=\"{{answer[3]['answer']}}\"/>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </section>\n</section>\n</section>\n<ion-fab class=\"end-section\" vertical=\"center\" horizontal=\"center\" slot=\"fixed\">\n  <ion-fab-button id=\"replay-button\" [routerLink]=\"['/subject-select/0']\">\n    <ion-icon name=\"refresh-outline\"></ion-icon>\n  </ion-fab-button>\n<ion-fab-button id=\"exit-button\" [routerLink]=\"['/play']\">\n    <ion-icon name=\"exit-outline\"></ion-icon>\n</ion-fab-button>\n</ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/config.json":
/*!*****************************!*\
  !*** ./src/app/config.json ***!
  \*****************************/
/*! exports provided: server, bucket, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"server\":\"http://primaryapp-env.eba-rer8nine.us-west-2.elasticbeanstalk.com\",\"bucket\":\"https://primary-app-resources.s3.eu-west-2.amazonaws.com\"}");

/***/ }),

/***/ "./src/app/play-single/play-single-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/play-single/play-single-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PlaySinglePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaySinglePageRoutingModule", function() { return PlaySinglePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _play_single_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./play-single.page */ "./src/app/play-single/play-single.page.ts");




const routes = [
    {
        path: '',
        component: _play_single_page__WEBPACK_IMPORTED_MODULE_3__["PlaySinglePage"]
    }
];
let PlaySinglePageRoutingModule = class PlaySinglePageRoutingModule {
};
PlaySinglePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlaySinglePageRoutingModule);



/***/ }),

/***/ "./src/app/play-single/play-single.module.ts":
/*!***************************************************!*\
  !*** ./src/app/play-single/play-single.module.ts ***!
  \***************************************************/
/*! exports provided: PlaySinglePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaySinglePageModule", function() { return PlaySinglePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _play_single_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./play-single-routing.module */ "./src/app/play-single/play-single-routing.module.ts");
/* harmony import */ var _play_single_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play-single.page */ "./src/app/play-single/play-single.page.ts");







let PlaySinglePageModule = class PlaySinglePageModule {
};
PlaySinglePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _play_single_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaySinglePageRoutingModule"]
        ],
        declarations: [_play_single_page__WEBPACK_IMPORTED_MODULE_6__["PlaySinglePage"]]
    })
], PlaySinglePageModule);



/***/ }),

/***/ "./src/app/play-single/play-single.page.scss":
/*!***************************************************!*\
  !*** ./src/app/play-single/play-single.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Bevan);\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:900\");\n.card {\n  background: rgba(255, 255, 255, 0.62);\n  margin-top: 3vh;\n  margin-bottom: 2vh;\n  margin-left: 5vw;\n  margin-right: 5vw;\n  padding-left: 2%;\n  padding-right: 2%;\n  text-align: center;\n  height: 40vh;\n  width: 90vw;\n  overflow: hidden;\n}\n.question-card {\n  position: absolute;\n  height: 95%;\n  width: 95%;\n  padding-right: 2.5%;\n  margin-top: 2.5%;\n  visibility: visible;\n}\n.video-container {\n  position: absolute;\n  height: 95%;\n  width: 90%;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  visibility: hidden;\n}\n.card-title {\n  font-size: 12px;\n  padding-top: 10px;\n  padding-left: 10px;\n  margin: 0;\n}\n.ion-content {\n  --background: url(\"/assets/progress-singleplayer/background.jpg\") no-repeat center center;\n  --overflow: hidden;\n}\n.overlay-section {\n  opacity: 100%;\n}\n.board {\n  visibility: visible;\n  overflow: hidden;\n  height: 100%;\n}\n.progress-section {\n  margin-bottom: 1%;\n  height: 10vh;\n  width: 98%;\n  text-align: center;\n}\n.choice-section {\n  size: \"6\";\n  text-align: center;\n}\n.choice-button {\n  width: 90%;\n  height: 60%;\n  --background: rgba(233, 250, 233, 0.712);\n  --border-color:rgb(76, 167, 73);\n  --border-style: dashed;\n  --border-width: 5px;\n  border-spacing: 5px;\n  shape-outside: round;\n  --box-shadow: 0px 2px 0px black;\n}\n.choice-button:active {\n  margin-top: 3px;\n  --box-shadow: none;\n}\n.choice-button:hover {\n  color: black;\n}\n.answer-card {\n  height: 100%;\n}\n.choice-row {\n  height: 18vh;\n  text-align: center;\n}\n.font {\n  font-family: \"Bevan\";\n  font-size: 40px;\n  font-weight: 400;\n  line-height: 130px;\n  color: #f7e226;\n  text-align: center;\n  width: 260px;\n  text-shadow: 1px 1px 1px #000, 3px 3px 5px #000;\n  display: inline-block;\n  -ms-transform: rotate(25deg);\n  -webkit-transform: rotate(10deg);\n}\n.winning-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  visibility: hidden;\n}\n#balloon-effect {\n  position: absolute;\n  width: 100%;\n  bottom: -100%;\n  transition: ease-in-out;\n  -webkit-animation-name: balloon-animation;\n          animation-name: balloon-animation;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  z-index: 2;\n}\n@-webkit-keyframes balloon-animation {\n  0% {\n    bottom: -100%;\n  }\n  100% {\n    bottom: 100%;\n  }\n}\n@keyframes balloon-animation {\n  0% {\n    bottom: -100%;\n  }\n  100% {\n    bottom: 100%;\n  }\n}\n.congrats-label {\n  position: absolute;\n  width: 0%;\n  height: 60px;\n  top: 60%;\n  background: #b83636;\n  transition: width 0.5s;\n  box-shadow: 3px 3px 5px #000;\n  transition-timing-function: linear;\n}\n#congrats-font {\n  position: absolute;\n  top: 60%;\n  width: 100%;\n  text-align: center;\n  color: white;\n  font-family: \"Bevan\";\n  text-shadow: 3px 3px 5px #000;\n  font-size: 40px;\n  font-weight: 500;\n  z-index: 1;\n}\n#star-animation {\n  position: absolute;\n  height: 100%;\n  visibility: hidden;\n}\n#center-star {\n  position: absolute;\n  margin-right: 10px;\n  width: 100%;\n  top: 5%;\n  text-align: center;\n  z-index: 3;\n}\n.done-button-section {\n  position: absolute;\n  width: 100%;\n  top: 45vh;\n  text-align: center;\n}\n#video-done-button {\n  height: 7vh;\n  width: 95%;\n  text-align: center;\n  --background: url(\"/assets/progress-singleplayer/button_background.png\");\n  --border-color:rgb(111, 182, 111);\n  --border-width:5px;\n  --border-style: solid;\n  --box-shadow: 4px 3px 3px rgb(48, 45, 45);\n  z-index: 4;\n  visibility: hidden;\n}\n#video-done-button:hover {\n  color: #174e23;\n}\n#done-font {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  font-size: 5vh;\n  color: #6fb66f;\n}\n#replay-button {\n  --background: rgba(39, 201, 139, 0.897);\n  margin-bottom: 20%;\n}\n#exit-button {\n  --background: rgba(190, 41, 15, 0.897);\n}\n.end-section {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lcy9naXRodWIvTnVtYmVyZml0L051bWJlcmZpdC9zcmMvYXBwL3BsYXktc2luZ2xlL3BsYXktc2luZ2xlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGxheS1zaW5nbGUvcGxheS1zaW5nbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDBEQUFBO0FBQ0EscUVBQUE7QUFDUjtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQUY7QURHQTtFQUNFLHlGQUFBO0VBQ0Esa0JBQUE7QUNBRjtBRE9BO0VBQ0UsYUFBQTtBQ0pGO0FET0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0pGO0FET0E7RUFFRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDTEY7QURRQTtFQUVFLFVBQUE7RUFDQSxXQUFBO0VBR0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBRUEsK0JBQUE7QUNURjtBRFVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDUko7QURZQTtFQUNFLFlBQUE7QUNURjtBRFlBO0VBRUUsWUFBQTtBQ1ZGO0FEYUE7RUFHRSxZQUFBO0VBQ0Esa0JBQUE7QUNaRjtBRGVBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtBQ1pGO0FEZUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1pGO0FEZUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxVQUFBO0FDWkY7QURlQTtFQUNFO0lBQU0sYUFBQTtFQ1hOO0VEWUE7SUFBTSxZQUFBO0VDVE47QUFDRjtBRE1BO0VBQ0U7SUFBTSxhQUFBO0VDWE47RURZQTtJQUFNLFlBQUE7RUNUTjtBQUNGO0FEV0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDVEY7QURnQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNiRjtBRDBDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDdkNGO0FEMENBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDeENGO0FEMkNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDeENGO0FEMkNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHdFQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUN4Q0Y7QUQyQ0E7RUFDRSxjQUFBO0FDeENGO0FEMkNBO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDeENGO0FEMkNBO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtBQ3hDRjtBRDJDQTtFQUNFLHNDQUFBO0FDeENGO0FEMkNBO0VBQ0Usa0JBQUE7QUN4Q0YiLCJmaWxlIjoic3JjL2FwcC9wbGF5LXNpbmdsZS9wbGF5LXNpbmdsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmV2YW4pO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMCcpO1xuLmNhcmR7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Mik7XG4gIG1hcmdpbi10b3A6IDN2aDtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tcmlnaHQ6IDV2dztcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogOTB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnF1ZXN0aW9uLWNhcmR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA5NSU7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmctcmlnaHQ6IDIuNSU7XG4gIG1hcmdpbi10b3A6IDIuNSU7XG4gIC8vIG1hcmdpbi1ib3R0b206IDUlO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4udmlkZW8tY29udGFpbmVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogOTUlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNhcmQtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3Byb2dyZXNzLXNpbmdsZXBsYXllci9iYWNrZ3JvdW5kLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIC8vIGhlaWdodDogMTAwJTtcbiAgLy8gLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvLyAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5vdmVybGF5LXNlY3Rpb24ge1xuICBvcGFjaXR5OiAxMDAlO1xufVxuXG4uYm9hcmQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9ncmVzcy1zZWN0aW9uIHtcbiAgLy8gbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBoZWlnaHQ6IDEwdmg7XG4gIHdpZHRoOiA5OCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNob2ljZS1zZWN0aW9ue1xuICBzaXplOiBcIjZcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2hvaWNlLWJ1dHRvbntcbiAgLy8gc2l6ZTogbGFyZ2U7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNjAlO1xuICAvLyAtLWlvbi10YWItYmFyLWNvbG9yOndoaXRlO1xuICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MywgMjQzLCAxOTEsIDAuNzQpO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjMzLCAyNTAsIDIzMywgMC43MTIpO1xuICAtLWJvcmRlci1jb2xvcjpyZ2IoNzYsIDE2NywgNzMpO1xuICAtLWJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAtLWJvcmRlci13aWR0aDogNXB4O1xuICBib3JkZXItc3BhY2luZzogNXB4O1xuICBzaGFwZS1vdXRzaWRlOiByb3VuZDtcbiAgLy8gb3BhY2l0eTogNDAlO1xuICAtLWJveC1zaGFkb3c6IDBweCAycHggMHB4IGJsYWNrO1xuICAmOmFjdGl2ZSB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuXG4uY2hvaWNlLWJ1dHRvbjpob3ZlcntcbiAgY29sb3I6IGJsYWNrOyBcbn1cblxuLmFuc3dlci1jYXJke1xuICAvLyB3aWR0aDogMTUwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaG9pY2Utcm93e1xuICAvLyBtYXJnaW4tdG9wOiAyJTtcbiAgLy8gbWFyZ2luLWJvdHRvbTogNSU7XG4gIGhlaWdodDogMTh2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9udHtcbiAgZm9udC1mYW1pbHk6IFwiQmV2YW5cIjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTMwcHg7XG4gIGNvbG9yOiByZ2IoMjQ3LCAyMjYsIDM4KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjYwcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwLCAzcHggM3B4IDVweCAjMDAwOyBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbn1cblxuLndpbm5pbmctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI2JhbGxvb24tZWZmZWN0eyBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAtMTAwJTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBiYWxsb29uLWFuaW1hdGlvbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgei1pbmRleDogMjtcbn1cblxuQGtleWZyYW1lcyBiYWxsb29uLWFuaW1hdGlvbiB7XG4gIDAlICAge2JvdHRvbTotMTAwJTt9XG4gIDEwMCUge2JvdHRvbToxMDAlO31cbn1cblxuLmNvbmdyYXRzLWxhYmVsICB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogNjAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCA1NCwgNTQpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAjMDAwO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG4vLyAuY29uZ3JhdHMtbGFiZWw6aG92ZXIge1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cblxuI2NvbmdyYXRzLWZvbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkJldmFuXCI7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDVweCAjMDAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8vIC5iYWxsb29uLWJhY2tncm91bmQtYm9hcmR7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogNjklO1xuLy8gICBtYXJnaW4tdG9wOiA1MCU7XG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyB9XG5cbi8vICNiYWxsb29uLWJhY2tncm91bmQtZWZmZWN0IHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbi8vICAgYW5pbWF0aW9uLW5hbWU6IGJhbGxvb24tYmFja2dyb3VuZC1hbmltYXRpb247XG4vLyAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuLy8gICBvcGFjaXR5OiA4MCU7XG4vLyB9XG5cbi8vIEBrZXlmcmFtZXMgYmFsbG9vbi1iYWNrZ3JvdW5kLWFuaW1hdGlvbiB7XG4vLyAgIDAlICAge3BhZGRpbmctbGVmdDowcHg7IHBhZGRpbmctdG9wOjBweDt9XG4vLyAgIDI1JSAge3BhZGRpbmctcmlnaHQ6NXB4OyBwYWRkaW5nLWJvdHRvbToxMHB4O31cbi8vICAgNTAlICB7cGFkZGluZy1yaWdodDo1cHg7IHBhZGRpbmctYm90dG9tOjBweDt9XG4vLyAgIDc1JSAge3BhZGRpbmctbGVmdDo1cHg7IHBhZGRpbmctYm90dG9tOjEwcHg7fVxuLy8gICAxMDAlIHtwYWRkaW5nLWxlZnQ6MHB4OyBwYWRkaW5nLXRvcDowcHg7fVxuLy8gfVxuXG5cbiNzdGFyLWFuaW1hdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNjZW50ZXItc3RhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMztcbn1cblxuLmRvbmUtYnV0dG9uLXNlY3Rpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNDV2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdmlkZW8tZG9uZS1idXR0b257XG4gIGhlaWdodDogN3ZoO1xuICB3aWR0aDogOTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3Byb2dyZXNzLXNpbmdsZXBsYXllci9idXR0b25fYmFja2dyb3VuZC5wbmcnKTsgXG4gIC0tYm9yZGVyLWNvbG9yOnJnYigxMTEsIDE4MiwgMTExKTtcbiAgLS1ib3JkZXItd2lkdGg6NXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm94LXNoYWRvdzogNHB4IDNweCAzcHggcmdiKDQ4LCA0NSwgNDUpO1xuICB6LWluZGV4OiA0O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiN2aWRlby1kb25lLWJ1dHRvbjpob3ZlcntcbiAgY29sb3I6IHJnYigyMywgNzgsIDM1KTtcbn1cblxuI2RvbmUtZm9udCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNXZoO1xuICBjb2xvcjogcmdiKDExMSwgMTgyLCAxMTEpO1xufVxuXG4jcmVwbGF5LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgzOSwgMjAxLCAxMzksIDAuODk3KTtcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xufVxuXG4jZXhpdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMTkwLCA0MSwgMTUsIDAuODk3KTtcbn1cblxuLmVuZC1zZWN0aW9uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufSIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CZXZhbik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMFwiKTtcbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYyKTtcbiAgbWFyZ2luLXRvcDogM3ZoO1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG4gIG1hcmdpbi1yaWdodDogNXZ3O1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQwdmg7XG4gIHdpZHRoOiA5MHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucXVlc3Rpb24tY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA5NSU7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmctcmlnaHQ6IDIuNSU7XG4gIG1hcmdpbi10b3A6IDIuNSU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi52aWRlby1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogOTUlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3Byb2dyZXNzLXNpbmdsZXBsYXllci9iYWNrZ3JvdW5kLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ub3ZlcmxheS1zZWN0aW9uIHtcbiAgb3BhY2l0eTogMTAwJTtcbn1cblxuLmJvYXJkIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucHJvZ3Jlc3Mtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBoZWlnaHQ6IDEwdmg7XG4gIHdpZHRoOiA5OCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNob2ljZS1zZWN0aW9uIHtcbiAgc2l6ZTogXCI2XCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNob2ljZS1idXR0b24ge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjUwLCAyMzMsIDAuNzEyKTtcbiAgLS1ib3JkZXItY29sb3I6cmdiKDc2LCAxNjcsIDczKTtcbiAgLS1ib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgLS1ib3JkZXItd2lkdGg6IDVweDtcbiAgYm9yZGVyLXNwYWNpbmc6IDVweDtcbiAgc2hhcGUtb3V0c2lkZTogcm91bmQ7XG4gIC0tYm94LXNoYWRvdzogMHB4IDJweCAwcHggYmxhY2s7XG59XG4uY2hvaWNlLWJ1dHRvbjphY3RpdmUge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNob2ljZS1idXR0b246aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5hbnN3ZXItY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNob2ljZS1yb3cge1xuICBoZWlnaHQ6IDE4dmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvbnQge1xuICBmb250LWZhbWlseTogXCJCZXZhblwiO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMzBweDtcbiAgY29sb3I6ICNmN2UyMjY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI2MHB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMCwgM3B4IDNweCA1cHggIzAwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbn1cblxuLndpbm5pbmctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNiYWxsb29uLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogLTEwMCU7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tbmFtZTogYmFsbG9vbi1hbmltYXRpb247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gIHotaW5kZXg6IDI7XG59XG5cbkBrZXlmcmFtZXMgYmFsbG9vbi1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgYm90dG9tOiAtMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDEwMCU7XG4gIH1cbn1cbi5jb25ncmF0cy1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogNjAlO1xuICBiYWNrZ3JvdW5kOiAjYjgzNjM2O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAjMDAwO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG4jY29uZ3JhdHMtZm9udCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQmV2YW5cIjtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgei1pbmRleDogMTtcbn1cblxuI3N0YXItYW5pbWF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI2NlbnRlci1zdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5kb25lLWJ1dHRvbi1zZWN0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA0NXZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN2aWRlby1kb25lLWJ1dHRvbiB7XG4gIGhlaWdodDogN3ZoO1xuICB3aWR0aDogOTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9wcm9ncmVzcy1zaW5nbGVwbGF5ZXIvYnV0dG9uX2JhY2tncm91bmQucG5nXCIpO1xuICAtLWJvcmRlci1jb2xvcjpyZ2IoMTExLCAxODIsIDExMSk7XG4gIC0tYm9yZGVyLXdpZHRoOjVweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJveC1zaGFkb3c6IDRweCAzcHggM3B4IHJnYig0OCwgNDUsIDQ1KTtcbiAgei1pbmRleDogNDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4jdmlkZW8tZG9uZS1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzE3NGUyMztcbn1cblxuI2RvbmUtZm9udCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA1dmg7XG4gIGNvbG9yOiAjNmZiNjZmO1xufVxuXG4jcmVwbGF5LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgzOSwgMjAxLCAxMzksIDAuODk3KTtcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xufVxuXG4jZXhpdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMTkwLCA0MSwgMTUsIDAuODk3KTtcbn1cblxuLmVuZC1zZWN0aW9uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/play-single/play-single.page.ts":
/*!*************************************************!*\
  !*** ./src/app/play-single/play-single.page.ts ***!
  \*************************************************/
/*! exports provided: PlaySinglePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaySinglePage", function() { return PlaySinglePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");





let PlaySinglePage = class PlaySinglePage {
    constructor(activatedRoute, nativeStorage, http) {
        this.activatedRoute = activatedRoute;
        this.nativeStorage = nativeStorage;
        this.http = http;
        this.server = __webpack_require__(/*! ../config.json */ "./src/app/config.json").server;
        this.bucket = __webpack_require__(/*! ../config.json */ "./src/app/config.json").bucket;
        this.subject = this.activatedRoute.snapshot.paramMap.get("subject");
        this.checkList = [];
        this.answer = [{ answer: "-" }, { answer: "-" }, { answer: "-" }, { answer: "-" }];
        this.videos = [];
        this.correctCounter = 0;
        this.incorrectCounter = 0;
        this.images = ['Picture1', 'Picture2', 'Picture3', 'Picture4', 'Picture5', 'Picture6', 'Picture7', 'Picture8', 'Picture9'];
        this.imgState = 0;
        this.pictureRef = this.images[this.imgState];
        // Get cookie
        this.nativeStorage.getItem('cookie')
            .then((data) => {
            this.cookie = data.cookie;
            // Get user
            this.nativeStorage.getItem('user')
                .then((data) => {
                this.user = data;
                // Get URLs to videos
                this.http.get(this.server + "/getVideo", {}, {})
                    .then(data => {
                    var videos = JSON.parse(data.data).videos;
                    videos.forEach((item) => {
                        this.videos.push(item.url);
                    });
                    this.video = videos[0];
                    // Ready to play!!!
                    this.play();
                })
                    .catch(error => {
                    console.log("status", error.status);
                    console.log("error", error.error);
                    console.log("error here", error);
                });
            });
        });
    }
    ;
    ngOnInit() {
        this.questionCardEle = document.querySelector('.question-card');
        this.videoEle = document.querySelector('.video-container');
    }
    play() {
        let qSetNumber = 18; // Number of question sets
        if (this.user.year == 1 && this.subject != "Time") {
            qSetNumber = 6; // For some reason year one have fewer resources on all but Time
        }
        this.answer = [];
        while (this.answer.length < 4) {
            console.log(this.answer.length);
            let page = 4 * Math.floor(Math.random() * qSetNumber);
            let card = page + Math.floor(Math.random() * 6); // 6 questions on each page
            let ques = this.bucket + "/" + this.subject + "/" + this.user.year + "/beg/" + "PDF-" + page + "-" + card + ".png";
            let ans = this.bucket + "/" + this.subject + "/" + this.user.year + "/beg/" + "PDF-" + (page + 2) + "-" + (card + 2) + ".png";
            // console.log("checklist", this.checkList)
            // console.log("question", this.question)
            // console.log("includes", this.checkList.includes(this.question))
            if (!this.checkList.includes(ques)) {
                this.question = ques;
                this.answer.push({ question: this.question, answer: ans });
            }
        }
        this.answer.sort(() => Math.random() - 0.5);
    }
    ;
    // main operating function for the whole process
    updateProgress(i) {
        // check if the answer is correct
        if (this.answer[i]["question"] == this.question) {
            // play video when needed
            this.checkList.push(this.question);
            this.playAudio(true);
            this.updateProgressBar();
            if (this.checkWin()) {
                return;
            }
            this.correctCounter += 1;
            //every 3 questions
            if (this.correctCounter % 3 == 0) {
                this.video = this.videos[(this.correctCounter % 3) - 1];
                this.switchVideoQuestions(true);
            }
        }
        else {
            this.playAudio(false);
            this.incorrectCounter += 1;
        }
        this.play();
    }
    displayEnd() {
        let endSection = document.querySelector(".end-section");
        let overlaySection = document.querySelector(".overlay-section");
        overlaySection.style.opacity = "30%";
        endSection.style.visibility = "visible";
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // sound effect at button click
    playAudio(correctness) {
        let audio = new Audio();
        if (correctness) {
            audio.src = "/assets/Sounds/answer_correct.wav";
        }
        else {
            audio.src = "/assets/Sounds/answer_incorrect.wav";
        }
        audio.load();
        audio.play();
    }
    enableButtons(enable) {
        let choiceButtons = document.querySelectorAll(".choice-button");
        for (var i = 0; i < choiceButtons.length; i++) {
            let button = choiceButtons[i];
            button.disabled = !enable;
        }
    }
    enableVideoOrQuestions(toVideo) {
        if (toVideo) {
            this.questionCardEle.style.visibility = "hidden";
            this.videoEle.style.visibility = "visible";
        }
        else {
            this.questionCardEle.style.visibility = "visible";
            this.videoEle.style.visibility = "hidden";
        }
    }
    switchVideoQuestions(toVideo) {
        this.enableVideoOrQuestions(toVideo);
        this.enableButtons(!toVideo);
        let backToGameButton = document.querySelector("#video-done-button");
        backToGameButton.style.visibility = toVideo ? "visible" : "hidden";
    }
    // the progress bar move one step forward with correct answer
    updateProgressBar() {
        this.imgState = ++this.imgState; //% this.images.length;
        this.pictureRef = this.images[this.imgState];
    }
    checkWin() {
        if (this.imgState >= 8) {
            this.saveGame();
            this.enableButtons(false);
            let ele2 = document.querySelector('.board');
            let ele3 = document.querySelector('.winning-container');
            let ele4 = document.querySelector('.congrats-label');
            let ele5 = document.querySelector('#star-animation');
            // star rain appears first
            ele5.style.visibility = "visible";
            this.questionCardEle.style.visibility = "hidden";
            this.videoEle.style.visibility = "hidden";
            this.sleep(2000).then(() => {
                ele2.style.visibility = "hidden";
                ele3.style.visibility = "visible";
                ele4.style.width = "100%";
            });
            // redirect to play page after congrats
            this.sleep(8000).then(() => {
                ele5.style.visibility = "hidden";
                this.displayEnd();
                return true;
            });
        }
        else {
            return false;
        }
    }
    // Saves game to gameHistories in server and updates points locally
    saveGame() {
        var gamePlayed = {
            cookie: this.cookie,
            correct: this.correctCounter,
            incorrect: this.incorrectCounter,
            topic: this.subject,
        };
        var savedUser = {
            cookie: this.cookie,
            username: this.user.username,
            name: this.user.name,
            school: this.user.school,
            year: this.user.year,
            teacher: this.user.teacher,
            points: this.user.points + this.correctCounter - this.incorrectCounter,
        };
        console.log("gamePLayed: ", gamePlayed);
        console.log("savedUser: ", savedUser);
        this.http.setDataSerializer('json');
        this.http.post(this.server + "/saveGame", gamePlayed, {})
            .then(data => {
            this.http.post(this.server + "/updateScore", savedUser, {})
                .then(data => {
                delete savedUser["cookie"];
                this.nativeStorage.setItem('user', savedUser)
                    .then(() => { }, error => console.error('Error storing cookie', error));
            })
                .catch(error => {
                console.log("update score error: ", error.error);
                // this.presentAlert();
            });
        })
            .catch(error => {
            console.log("save game error:", error.error);
            // this.presentAlert();
        });
    }
};
PlaySinglePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] }
];
PlaySinglePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-play-single',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./play-single.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play-single/play-single.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./play-single.page.scss */ "./src/app/play-single/play-single.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])
], PlaySinglePage);



/***/ })

}]);
//# sourceMappingURL=play-single-play-single-module-es2015.js.map