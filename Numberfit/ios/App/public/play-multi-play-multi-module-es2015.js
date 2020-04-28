(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["play-multi-play-multi-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play-multi/play-multi.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play-multi/play-multi.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n</ion-header>\n\n<ion-content class=\"ion-multi-content\">\n  <section class=\"overlay-section\">\n    <section class=\"winning-container\">\n    <img id=\"center-star\" src=\"/assets/Winning-decoration/big_star.gif\"/>\n    <p id=\"congrats-font\">Congratulations!</p><br>\n    <section class=\"congrats-label\"></section>\n    </section>\n    <section class=\"board\">\n      <section>\n        <img id=\"star-animation\" src=\"/assets/Winning-decoration/star_animation.gif\"/>\n      </section>\n  <ion-row class=\"game-section1\">\n    <ion-col size=\"10\">\n      <section>\n        <ion-row class=\"choice-row\">\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgress(0)\">\n              <!-- <span class=\"font\">5</span> -->\n              <img id=\"answer-card\" src=\"{{answer1[0]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgress(1)\">\n              <!-- <span class=\"font\">8</span> -->\n              <img id=\"answer-card\" src=\"{{answer1[1]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"choice-row\">\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgress(2)\">\n              <!-- <span class=\"font\">10</span> -->\n              <img id=\"answer-card\" src=\"{{answer1[2]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgress(3)\">\n              <!-- <span class=\"font\">6</span> -->\n              <img id=\"answer-card\" src=\"{{answer1[3]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </section>\n      <ion-card class=\"card-rotate\">\n        <ion-card-content>\n          <img class=\"question-card\" src=\"{{question1}}\"/>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"2\" class=\"top-right-progress-bar\">\n      <img src=\"/assets/progress-multiplayer/{{top_right}}.png\"/>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"middle-progress-section\">\n    <ion-col size=\"5\" class=\"middle-progress-bar-left\">\n      <img src=\"/assets/progress-multiplayer/{{middle_left}}.png\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"middle-center\">\n      <img src=\"/assets/progress-multiplayer/{{middle_center}}.png\"/>\n    </ion-col>\n    <ion-col size=\"5\" class=\"middle-progress-bar-right\">\n      <img src=\"/assets/progress-multiplayer/{{middle_right}}.png\"/>\n    </ion-col>\n  </ion-row>\n  <!-- <section class=\"section\">\n    <img src=\"/assets/progress-multiplayer/Picture1.png\"/>\n  </section> -->\n  <ion-row class=\"game-section2\">\n    <ion-col size=\"2\" class=\"bottom-left-progress-bar\">\n      <img src=\"/assets/progress-multiplayer/{{bottom_left}}.png\"/>\n    </ion-col>\n    <ion-col size=\"10\" >\n      <ion-card class=\"card\">\n        <ion-card-content>\n          <img class=\"question-card\" src=\"{{question2}}\"/>\n        </ion-card-content>\n      </ion-card>\n      <section>\n        <ion-row class=\"choice-row\">\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(4)\">\n              <!-- <span class=\"font\">5</span> -->\n              <img id=\"answer-card\" src=\"{{answer2[0]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(5)\">\n              <!-- <span class=\"font\">8</span> -->\n              <img id=\"answer-card\" src=\"{{answer2[1]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"choice-row\">\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(6)\">\n              <!-- <span class=\"font\">10</span> -->\n              <img id=\"answer-card\" src=\"{{answer2[2]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(7)\">\n              <!-- <span class=\"font\">6</span> -->\n              <img id=\"answer-card\" src=\"{{answer2[3]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </section>\n    </ion-col>\n  </ion-row>\n</section>\n</section>\n  <ion-fab class=\"end-section\" vertical=\"center\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button id=\"replay-button\" [routerLink]=\"['/subject-select/1']\">\n      <ion-icon name=\"refresh-outline\"></ion-icon>\n    </ion-fab-button>\n  <ion-fab-button id=\"exit-button\" [routerLink]=\"['/play']\">\n      <ion-icon name=\"exit-outline\"></ion-icon>\n  </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/config.json":
/*!*****************************!*\
  !*** ./src/app/config.json ***!
  \*****************************/
/*! exports provided: server, bucket, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"server\":\"http://primaryapp-env.eba-rer8nine.us-west-2.elasticbeanstalk.com\",\"bucket\":\"https://primary-app-resources.s3.eu-west-2.amazonaws.com\"}");

/***/ }),

/***/ "./src/app/play-multi/play-multi-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/play-multi/play-multi-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PlayMultiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayMultiPageRoutingModule", function() { return PlayMultiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _play_multi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./play-multi.page */ "./src/app/play-multi/play-multi.page.ts");




const routes = [
    {
        path: '',
        component: _play_multi_page__WEBPACK_IMPORTED_MODULE_3__["PlayMultiPage"]
    }
];
let PlayMultiPageRoutingModule = class PlayMultiPageRoutingModule {
};
PlayMultiPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlayMultiPageRoutingModule);



/***/ }),

/***/ "./src/app/play-multi/play-multi.module.ts":
/*!*************************************************!*\
  !*** ./src/app/play-multi/play-multi.module.ts ***!
  \*************************************************/
/*! exports provided: PlayMultiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayMultiPageModule", function() { return PlayMultiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _play_multi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./play-multi-routing.module */ "./src/app/play-multi/play-multi-routing.module.ts");
/* harmony import */ var _play_multi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play-multi.page */ "./src/app/play-multi/play-multi.page.ts");







let PlayMultiPageModule = class PlayMultiPageModule {
};
PlayMultiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _play_multi_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayMultiPageRoutingModule"]
        ],
        declarations: [_play_multi_page__WEBPACK_IMPORTED_MODULE_6__["PlayMultiPage"]]
    })
], PlayMultiPageModule);



/***/ }),

/***/ "./src/app/play-multi/play-multi.page.scss":
/*!*************************************************!*\
  !*** ./src/app/play-multi/play-multi.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Bevan);\n.ion-multi-content {\n  --background: url(\"/assets/progress-multiplayer/background.jpg\") 100% 100%;\n}\nion-row {\n  height: 45%;\n}\n.overlay-section {\n  opacity: 100%;\n}\n.card {\n  background: rgba(255, 255, 255, 0.62);\n  width: 92%;\n  height: 150px;\n  text-align: center;\n}\n.question-card {\n  height: 130px;\n}\n.middle-progress-section {\n  height: 7%;\n}\n.middle-progress-bar-left {\n  margin-top: 1%;\n}\n.middle-progress-bar-right {\n  margin-bottom: 2%;\n  transform: rotate(180deg);\n}\n.choice-section {\n  size: \"6\";\n  text-align: center;\n}\n.choice-button {\n  width: 80%;\n  height: 90%;\n  --border-color:white;\n  --background: rgba(233, 250, 233, 0.712);\n  --border-color:rgb(76, 167, 73);\n  --border-style: dashed;\n  --border-width: 5px;\n  --box-shadow: 2px 2px 2px black;\n}\n.choice-button:active {\n  margin-top: 3px;\n  --box-shadow: none;\n}\n.font {\n  font-family: \"Bevan\";\n  font-size: 20px;\n  color: #f7e226;\n  text-align: center;\n  text-shadow: 1px 1px 1px #000, 3px 3px 5px #000;\n  display: inline-block;\n  -ms-transform: rotate(25deg);\n  -webkit-transform: rotate(10deg);\n}\n.bottom-left-progress-bar {\n  margin-top: 5px;\n}\n.top-right-progress-bar {\n  margin-bottom: 5px;\n  transform: rotate(180deg);\n}\n.choice-button-rotate {\n  width: 80%;\n  height: 90%;\n  --border-color:white;\n  --background: rgba(233, 250, 233, 0.712);\n  --border-color:rgb(76, 167, 73);\n  --border-style: dashed;\n  --border-width: 5px;\n  --box-shadow: 2px 2px 2px black;\n  transform: rotate(180deg);\n}\n.choice-button-rotate:active {\n  margin-top: 3px;\n  --box-shadow: none;\n}\n.card-rotate {\n  background: rgba(255, 255, 255, 0.62);\n  width: 92%;\n  height: 150px;\n  text-align: center;\n  transform: rotate(180deg);\n}\n.middle-center {\n  -webkit-animation-duration: 6s;\n          animation-duration: 6s;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes example {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(1800deg);\n  }\n}\n@keyframes example {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(1800deg);\n  }\n}\n#replay-button {\n  --background: rgba(39, 201, 139, 0.897);\n  margin-bottom: 20%;\n}\n#exit-button {\n  --background: rgba(190, 41, 15, 0.897);\n}\n.end-section {\n  visibility: hidden;\n}\n.winning-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  visibility: hidden;\n}\n#balloon-effect {\n  position: absolute;\n  width: 100%;\n  bottom: -100%;\n  transition: ease-in-out;\n  -webkit-animation-name: balloon-animation;\n          animation-name: balloon-animation;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  z-index: 2;\n}\n@-webkit-keyframes balloon-animation {\n  0% {\n    bottom: -100%;\n  }\n  100% {\n    bottom: 100%;\n  }\n}\n@keyframes balloon-animation {\n  0% {\n    bottom: -100%;\n  }\n  100% {\n    bottom: 100%;\n  }\n}\n.congrats-label {\n  position: absolute;\n  width: 0%;\n  height: 60px;\n  top: 60%;\n  background: #b83636;\n  transition: width 0.5s;\n  box-shadow: 3px 3px 5px #000;\n  transition-timing-function: linear;\n}\n#congrats-font {\n  position: absolute;\n  top: 60%;\n  width: 100%;\n  text-align: center;\n  color: white;\n  font-family: \"Bevan\";\n  text-shadow: 3px 3px 5px #000;\n  font-size: 30px;\n  font-weight: 400;\n  z-index: 1;\n}\n.balloon-background-board {\n  position: absolute;\n  width: 100%;\n  height: 69%;\n  margin-top: 50%;\n  overflow: hidden;\n}\n#balloon-background-effect {\n  position: absolute;\n  width: 100%;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-name: balloon-background-animation;\n          animation-name: balloon-background-animation;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  opacity: 80%;\n}\n@-webkit-keyframes balloon-background-animation {\n  0% {\n    padding-left: 0px;\n    padding-top: 0px;\n  }\n  25% {\n    padding-right: 5px;\n    padding-bottom: 10px;\n  }\n  50% {\n    padding-right: 5px;\n    padding-bottom: 0px;\n  }\n  75% {\n    padding-left: 5px;\n    padding-bottom: 10px;\n  }\n  100% {\n    padding-left: 0px;\n    padding-top: 0px;\n  }\n}\n@keyframes balloon-background-animation {\n  0% {\n    padding-left: 0px;\n    padding-top: 0px;\n  }\n  25% {\n    padding-right: 5px;\n    padding-bottom: 10px;\n  }\n  50% {\n    padding-right: 5px;\n    padding-bottom: 0px;\n  }\n  75% {\n    padding-left: 5px;\n    padding-bottom: 10px;\n  }\n  100% {\n    padding-left: 0px;\n    padding-top: 0px;\n  }\n}\n.board {\n  visibility: visible;\n  overflow: hidden;\n  height: 100%;\n}\n#star-animation {\n  position: absolute;\n  height: 100%;\n  visibility: hidden;\n}\n#center-star {\n  position: absolute;\n  margin-right: 10px;\n  width: 100%;\n  top: 5%;\n  text-align: center;\n  z-index: 3;\n}\n.done-button-section {\n  position: absolute;\n  width: 100%;\n  top: 45%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lcy9naXRodWIvTnVtYmVyZml0L051bWJlcmZpdC9zcmMvYXBwL3BsYXktbXVsdGkvcGxheS1tdWx0aS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BsYXktbXVsdGkvcGxheS1tdWx0aS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMERBQUE7QUFFUjtFQUNJLDBFQUFBO0FDQUo7QURPQTtFQUNJLFdBQUE7QUNKSjtBRE9BO0VBQ0ksYUFBQTtBQ0pKO0FET0E7RUFDSSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE9BO0VBQ0ksYUFBQTtBQ0pKO0FEUUE7RUFDSSxVQUFBO0FDTEo7QURVQTtFQUNJLGNBQUE7QUNQSjtBRFVBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFVBO0VBRUksVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUNSSjtBRFNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDUFI7QURXQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLCtDQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0FDVEo7QURZQTtFQUNJLGVBQUE7QUNUSjtBRGFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQ1ZKO0FEYUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0FDVko7QURXSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ1RSO0FEYUE7RUFDSSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ1ZKO0FEYUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNWSjtBRFlBO0VBQ0k7SUFBTSx1QkFBQTtFQ1JSO0VEU0U7SUFBTSwwQkFBQTtFQ05SO0FBQ0Y7QURHQTtFQUNJO0lBQU0sdUJBQUE7RUNSUjtFRFNFO0lBQU0sMEJBQUE7RUNOUjtBQUNGO0FEUUE7RUFDSSx1Q0FBQTtFQUNBLGtCQUFBO0FDTko7QURTRTtFQUNFLHNDQUFBO0FDTko7QURTRTtFQUNFLGtCQUFBO0FDTko7QURTRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTko7QURTRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFVBQUE7QUNOSjtBRFNFO0VBQ0U7SUFBTSxhQUFBO0VDTFI7RURNRTtJQUFNLFlBQUE7RUNIUjtBQUNGO0FEQUU7RUFDRTtJQUFNLGFBQUE7RUNMUjtFRE1FO0lBQU0sWUFBQTtFQ0hSO0FBQ0Y7QURLRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNISjtBRFVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDUEo7QURVRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNQSjtBRFVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLG9EQUFBO1VBQUEsNENBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsWUFBQTtBQ1BKO0FEVUU7RUFDRTtJQUFNLGlCQUFBO0lBQWtCLGdCQUFBO0VDTDFCO0VETUU7SUFBTSxrQkFBQTtJQUFtQixvQkFBQTtFQ0YzQjtFREdFO0lBQU0sa0JBQUE7SUFBbUIsbUJBQUE7RUNDM0I7RURBRTtJQUFNLGlCQUFBO0lBQWtCLG9CQUFBO0VDSTFCO0VESEU7SUFBTSxpQkFBQTtJQUFrQixnQkFBQTtFQ08xQjtBQUNGO0FEYkU7RUFDRTtJQUFNLGlCQUFBO0lBQWtCLGdCQUFBO0VDTDFCO0VETUU7SUFBTSxrQkFBQTtJQUFtQixvQkFBQTtFQ0YzQjtFREdFO0lBQU0sa0JBQUE7SUFBbUIsbUJBQUE7RUNDM0I7RURBRTtJQUFNLGlCQUFBO0lBQWtCLG9CQUFBO0VDSTFCO0VESEU7SUFBTSxpQkFBQTtJQUFrQixnQkFBQTtFQ08xQjtBQUNGO0FETEU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ09KO0FESkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ09KO0FESkU7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNNSjtBREhFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wbGF5LW11bHRpL3BsYXktbXVsdGkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJldmFuKTtcblxuLmlvbi1tdWx0aS1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3Byb2dyZXNzLW11bHRpcGxheWVyL2JhY2tncm91bmQuanBnJykgMTAwJSAxMDAlO1xuICB9XG5cbi8vICAgLnJvdy1zdHJ1Y3R1cmV7XG4vLyAgICAgLS1pb24tZ3JpZC1oZWlnaHQ6IDkwJTtcbi8vICAgfVxuXG5pb24tcm93IHtcbiAgICBoZWlnaHQ6IDQ1JTtcbn1cblxuLm92ZXJsYXktc2VjdGlvbiB7XG4gICAgb3BhY2l0eTogMTAwJTtcbiAgfVxuXG4uY2FyZHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjIpO1xuICAgIHdpZHRoOiA5MiU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5xdWVzdGlvbi1jYXJke1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgLy8gdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLm1pZGRsZS1wcm9ncmVzcy1zZWN0aW9ue1xuICAgIGhlaWdodDogNyU7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDMlO1xuICAgIC8vIG1hcmdpbi1yaWdodDogMyU7XG59XG5cbi5taWRkbGUtcHJvZ3Jlc3MtYmFyLWxlZnR7XG4gICAgbWFyZ2luLXRvcDogMSU7XG59XG5cbi5taWRkbGUtcHJvZ3Jlc3MtYmFyLXJpZ2h0e1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcbn1cblxuLmNob2ljZS1zZWN0aW9ue1xuICAgIHNpemU6IFwiNlwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4uY2hvaWNlLWJ1dHRvbntcbiAgICAvLyBzaXplOiBsYXJnZTtcbiAgICB3aWR0aDogODAlOzsvLzEwMHB4O1xuICAgIGhlaWdodDogOTAlOyAvLzMwcHg7XG4gICAgLS1ib3JkZXItY29sb3I6d2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjUwLCAyMzMsIDAuNzEyKTtcbiAgICAtLWJvcmRlci1jb2xvcjpyZ2IoNzYsIDE2NywgNzMpO1xuICAgIC0tYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDVweDtcbiAgICAtLWJveC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xuICAgICY6YWN0aXZlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG5cbi5mb250e1xuICAgIGZvbnQtZmFtaWx5OiBcIkJldmFuXCI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZ2IoMjQ3LCAyMjYsIDM4KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gd2lkdGg6IDI2MHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwLCAzcHggM3B4IDVweCAjMDAwOyAgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG59XG5cbi5ib3R0b20tbGVmdC1wcm9ncmVzcy1iYXJ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi50b3AtcmlnaHQtcHJvZ3Jlc3MtYmFye1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uY2hvaWNlLWJ1dHRvbi1yb3RhdGV7XG4gICAgd2lkdGg6IDgwJTs7Ly8xMDBweDtcbiAgICBoZWlnaHQ6IDkwJTsgLy8zMHB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOndoaXRlO1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyMzMsIDI1MCwgMjMzLCAwLjcxMik7XG4gICAgLS1ib3JkZXItY29sb3I6cmdiKDc2LCAxNjcsIDczKTtcbiAgICAtLWJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgIC0tYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgLS1ib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICY6YWN0aXZlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuXG4uY2FyZC1yb3RhdGV7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYyKTtcbiAgICB3aWR0aDogOTIlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5taWRkbGUtY2VudGVye1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNnM7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xuICAgIDAlICAge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cbiAgICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjAqNWRlZyk7fVxufVxuXG4jcmVwbGF5LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDM5LCAyMDEsIDEzOSwgMC44OTcpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcbiAgfVxuICBcbiAgI2V4aXQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMTkwLCA0MSwgMTUsIDAuODk3KTtcbiAgfVxuICBcbiAgLmVuZC1zZWN0aW9uIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAud2lubmluZy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICBcbiAgI2JhbGxvb24tZWZmZWN0eyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAtMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24tbmFtZTogYmFsbG9vbi1hbmltYXRpb247XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYmFsbG9vbi1hbmltYXRpb24ge1xuICAgIDAlICAge2JvdHRvbTotMTAwJTt9XG4gICAgMTAwJSB7Ym90dG9tOjEwMCU7fVxuICB9XG4gIFxuICAuY29uZ3JhdHMtbGFiZWwgIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB0b3A6IDYwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCA1NCwgNTQpO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICB9XG4gIFxuICAvLyAuY29uZ3JhdHMtbGFiZWw6aG92ZXIge1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuICAvLyB9XG4gIFxuICAjY29uZ3JhdHMtZm9udCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiQmV2YW5cIjtcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuYmFsbG9vbi1iYWNrZ3JvdW5kLWJvYXJke1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDY5JTtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgI2JhbGxvb24tYmFja2dyb3VuZC1lZmZlY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBiYWxsb29uLWJhY2tncm91bmQtYW5pbWF0aW9uO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIG9wYWNpdHk6IDgwJTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBiYWxsb29uLWJhY2tncm91bmQtYW5pbWF0aW9uIHtcbiAgICAwJSAgIHtwYWRkaW5nLWxlZnQ6MHB4OyBwYWRkaW5nLXRvcDowcHg7fVxuICAgIDI1JSAge3BhZGRpbmctcmlnaHQ6NXB4OyBwYWRkaW5nLWJvdHRvbToxMHB4O31cbiAgICA1MCUgIHtwYWRkaW5nLXJpZ2h0OjVweDsgcGFkZGluZy1ib3R0b206MHB4O31cbiAgICA3NSUgIHtwYWRkaW5nLWxlZnQ6NXB4OyBwYWRkaW5nLWJvdHRvbToxMHB4O31cbiAgICAxMDAlIHtwYWRkaW5nLWxlZnQ6MHB4OyBwYWRkaW5nLXRvcDowcHg7fVxuICB9XG4gIFxuICAuYm9hcmQge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gICNzdGFyLWFuaW1hdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgXG4gICNjZW50ZXItc3RhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAzO1xuICB9XG4gIFxuICAuZG9uZS1idXR0b24tc2VjdGlvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA0NSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9IiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJldmFuKTtcbi5pb24tbXVsdGktY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9wcm9ncmVzcy1tdWx0aXBsYXllci9iYWNrZ3JvdW5kLmpwZ1wiKSAxMDAlIDEwMCU7XG59XG5cbmlvbi1yb3cge1xuICBoZWlnaHQ6IDQ1JTtcbn1cblxuLm92ZXJsYXktc2VjdGlvbiB7XG4gIG9wYWNpdHk6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYyKTtcbiAgd2lkdGg6IDkyJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucXVlc3Rpb24tY2FyZCB7XG4gIGhlaWdodDogMTMwcHg7XG59XG5cbi5taWRkbGUtcHJvZ3Jlc3Mtc2VjdGlvbiB7XG4gIGhlaWdodDogNyU7XG59XG5cbi5taWRkbGUtcHJvZ3Jlc3MtYmFyLWxlZnQge1xuICBtYXJnaW4tdG9wOiAxJTtcbn1cblxuLm1pZGRsZS1wcm9ncmVzcy1iYXItcmlnaHQge1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNob2ljZS1zZWN0aW9uIHtcbiAgc2l6ZTogXCI2XCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNob2ljZS1idXR0b24ge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgLS1ib3JkZXItY29sb3I6d2hpdGU7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMzMsIDI1MCwgMjMzLCAwLjcxMik7XG4gIC0tYm9yZGVyLWNvbG9yOnJnYig3NiwgMTY3LCA3Myk7XG4gIC0tYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiA1cHg7XG4gIC0tYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XG59XG4uY2hvaWNlLWJ1dHRvbjphY3RpdmUge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmZvbnQge1xuICBmb250LWZhbWlseTogXCJCZXZhblwiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZjdlMjI2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwLCAzcHggM3B4IDVweCAjMDAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xufVxuXG4uYm90dG9tLWxlZnQtcHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4udG9wLXJpZ2h0LXByb2dyZXNzLWJhciB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNob2ljZS1idXR0b24tcm90YXRlIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIC0tYm9yZGVyLWNvbG9yOndoaXRlO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjMzLCAyNTAsIDIzMywgMC43MTIpO1xuICAtLWJvcmRlci1jb2xvcjpyZ2IoNzYsIDE2NywgNzMpO1xuICAtLWJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAtLWJvcmRlci13aWR0aDogNXB4O1xuICAtLWJveC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLmNob2ljZS1idXR0b24tcm90YXRlOmFjdGl2ZSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2FyZC1yb3RhdGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjIpO1xuICB3aWR0aDogOTIlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5taWRkbGUtY2VudGVyIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcbiAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwMGRlZyk7XG4gIH1cbn1cbiNyZXBsYXktYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDM5LCAyMDEsIDEzOSwgMC44OTcpO1xuICBtYXJnaW4tYm90dG9tOiAyMCU7XG59XG5cbiNleGl0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgxOTAsIDQxLCAxNSwgMC44OTcpO1xufVxuXG4uZW5kLXNlY3Rpb24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi53aW5uaW5nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4jYmFsbG9vbi1lZmZlY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IC0xMDAlO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhbGxvb24tYW5pbWF0aW9uO1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICB6LWluZGV4OiAyO1xufVxuXG5Aa2V5ZnJhbWVzIGJhbGxvb24tYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIGJvdHRvbTogLTEwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm90dG9tOiAxMDAlO1xuICB9XG59XG4uY29uZ3JhdHMtbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0b3A6IDYwJTtcbiAgYmFja2dyb3VuZDogI2I4MzYzNjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbn1cblxuI2NvbmdyYXRzLWZvbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkJldmFuXCI7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDVweCAjMDAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5iYWxsb29uLWJhY2tncm91bmQtYm9hcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY5JTtcbiAgbWFyZ2luLXRvcDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jYmFsbG9vbi1iYWNrZ3JvdW5kLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIGFuaW1hdGlvbi1uYW1lOiBiYWxsb29uLWJhY2tncm91bmQtYW5pbWF0aW9uO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgb3BhY2l0eTogODAlO1xufVxuXG5Aa2V5ZnJhbWVzIGJhbGxvb24tYmFja2dyb3VuZC1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgfVxuICAyNSUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICA1MCUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG4gIDc1JSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgfVxufVxuLmJvYXJkIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jc3Rhci1hbmltYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4jY2VudGVyLXN0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMztcbn1cblxuLmRvbmUtYnV0dG9uLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDQ1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/play-multi/play-multi.page.ts":
/*!***********************************************!*\
  !*** ./src/app/play-multi/play-multi.page.ts ***!
  \***********************************************/
/*! exports provided: PlayMultiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayMultiPage", function() { return PlayMultiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");





let PlayMultiPage = class PlayMultiPage {
    // questionCardEle: HTMLElement;
    // videoEle: HTMLElement;
    constructor(activatedRoute, nativeStorage, http) {
        this.activatedRoute = activatedRoute;
        this.nativeStorage = nativeStorage;
        this.http = http;
        this.server = __webpack_require__(/*! ../config.json */ "./src/app/config.json").server;
        this.bucket = __webpack_require__(/*! ../config.json */ "./src/app/config.json").bucket;
        this.subject = this.activatedRoute.snapshot.paramMap.get("subject");
        this.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.top_progress = 0;
        this.bottom_progress = 0;
        this.videos = [];
        this.checkList = [];
        this.answer1 = [{ answer: "-" }, { answer: "-" }, { answer: "-" }, { answer: "-" }];
        this.answer2 = [{ answer: "-" }, { answer: "-" }, { answer: "-" }, { answer: "-" }];
        // Get cookie from storage
        this.nativeStorage.getItem('cookie')
            .then((data) => { this.cookie = data.cookie; });
        this.prepareProgressBar();
        this.topUserObj = new onePlayerWrapper(this.answer1);
        this.bottomUserObj = new onePlayerWrapper(this.answer2);
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
    play(player) {
        let qSetNumber = 18; // Number of question sets
        if (this.user.year == 1 && this.subject != "Time") {
            qSetNumber = 6; // For some reason year one have fewer resources on all but Time
        }
        var answerArray = [];
        while (answerArray.length < 4) {
            let page = 4 * Math.floor(Math.random() * qSetNumber);
            let card = page + Math.floor(Math.random() * 6); // 6 questions on each page
            let ques = this.bucket + "/" + this.subject + "/" + this.user.year + "/beg/" + "PDF-" + page + "-" + card + ".png";
            let ans = this.bucket + "/" + this.subject + "/" + this.user.year + "/beg/" + "PDF-" + (page + 2) + "-" + (card + 2) + ".png";
            // console.log("checklist", this.checkList)
            // console.log("question", this.question)
            // console.log("includes", this.checkList.includes(this.question))
            if (!this.checkList.includes(ques)) {
                var question = ques;
                answerArray.push({ question: question, answer: ans });
            }
        }
        answerArray.sort(() => Math.random() - 0.5);
        if (player == 1) {
            this.answer1 = answerArray;
            this.question1 = question;
        }
        else {
            this.answer2 = answerArray;
            this.question2 = question;
        }
    }
    ;
    prepareProgressBar() {
        this.top_right = 'tiger' + this.images[this.top_progress];
        this.bottom_left = 'lion' + this.images[this.bottom_progress];
        this.middle_right = 'tiger' + this.images[9];
        this.middle_left = 'lion' + this.images[9];
        this.middle_center = 'middle-center';
    }
    updateProgress(i) {
        if (i < 4) {
            console.log(this.answer1[i]);
            console.log(this.answer1[i]["question"]);
            if (this.answer1[i]["question"] == this.question1) {
                // play video when needed
                this.playAudio(true);
                this.updateProgressTop();
                this.topUserObj.updateStatus(true);
                if (this.checkWin(this.top_progress)) {
                    this.winningEffect(true);
                    return;
                }
            }
            else {
                this.playAudio(false);
            }
            this.play(1);
        }
        else {
            if (this.answer2[i - 4]["question"] == this.question2) {
                // play video when needed
                this.playAudio(true);
                this.updateProgressBottom();
                this.bottomUserObj.updateStatus(true);
                if (this.checkWin(this.bottom_progress)) {
                    this.winningEffect(true);
                    return;
                }
            }
            else {
                this.playAudio(false);
            }
            this.play(2);
        }
    }
    displayEnd() {
        let endSection = document.querySelector(".end-section");
        let overlaySection = document.querySelector(".overlay-section");
        overlaySection.style.opacity = "30%";
        endSection.style.visibility = "visible";
    }
    enableButtons(enable) {
        let choiceButtons = document.querySelectorAll(".choice-button");
        let choiceButtonsRotate = document.querySelectorAll(".choice-button-rotate");
        for (var i = 0; i < choiceButtons.length; i++) {
            let button = choiceButtons[i];
            let buttonRotate = choiceButtonsRotate[i];
            button.disabled = !enable;
            buttonRotate.disabled = !enable;
        }
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    winningEffect(topWin) {
        this.enableButtons(false);
        let gameSection1 = document.querySelector('.game-section1');
        let progressBar = document.querySelector('.middle-progress-section');
        let gameSection2 = document.querySelector('.game-section2');
        let ele2 = document.querySelector('.board');
        let ele3 = document.querySelector('.winning-container');
        let ele4 = document.querySelector('.congrats-label');
        let ele5 = document.querySelector('#star-animation');
        //rotate if top user wins
        if (topWin) {
            ele2.style.transform = "rotate(180deg)";
            ele3.style.transform = "rotate(180deg)";
        }
        // star rain appears first
        ele5.style.visibility = "visible";
        this.sleep(2000).then(() => {
            gameSection1.style.visibility = "hidden";
            progressBar.style.visibility = "hidden";
            gameSection2.style.visibility = "hidden";
            ele2.style.visibility = "hidden";
            ele3.style.visibility = "visible";
            ele4.style.width = "100%";
        });
        // redirect to play page after congrats
        this.sleep(8000).then(() => {
            ele5.style.visibility = "hidden";
            this.displayEnd();
        });
    }
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
    updateProgressTop() {
        this.top_progress = ++this.top_progress; //%this.images.length;
        if (this.top_progress <= 5) {
            this.top_right = 'tiger' + this.images[this.top_progress];
            this.middle_right = 'tiger' + this.images[9];
        }
        else {
            this.top_right = 'tiger0';
            this.middle_right = 'tiger' + this.images[this.top_progress];
        }
    }
    updateProgressBottom() {
        this.bottom_progress = ++this.bottom_progress; //%this.images.length;
        if (this.bottom_progress <= 5) {
            this.bottom_left = 'lion' + this.images[this.bottom_progress];
            this.middle_left = 'lion' + this.images[9];
        }
        else {
            this.bottom_left = 'lion0';
            this.middle_left = 'lion' + this.images[this.bottom_progress];
        }
    }
    checkWin(progress) {
        if (progress >= 9) {
            return true;
        }
        else {
            return false;
        }
    }
};
PlayMultiPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] }
];
PlayMultiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-play-multi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./play-multi.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play-multi/play-multi.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./play-multi.page.scss */ "./src/app/play-multi/play-multi.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])
], PlayMultiPage);

class onePlayerWrapper {
    constructor(questionArray) {
        this.correctCounter = 0;
        this.incorrectCounter = 0;
    }
    updateStatus(isCorrect) {
        if (isCorrect)
            this.correctCounter += 1;
        else
            this.incorrectCounter += 1;
    }
}


/***/ })

}]);
//# sourceMappingURL=play-multi-play-multi-module-es2015.js.map