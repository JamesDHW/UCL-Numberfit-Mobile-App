function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["play-multi-play-multi-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/play-multi/play-multi.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play-multi/play-multi.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayMultiPlayMultiPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n</ion-header>\n\n<ion-content class=\"ion-multi-content\" style=\"background-color: #7b9e36;\">\n    <section class=\"winning-container\">\n    <img id=\"center-star\" src=\"/assets/Winning-decoration/big_star.gif\"/>\n    <p id=\"congrats-font\">Congratulations!</p><br>\n    <section class=\"congrats-label\"></section>\n    </section>\n    <section class=\"board\">\n      <section>\n        <img id=\"star-animation\" src=\"/assets/Winning-decoration/star_animation.gif\"/>\n      </section>\n  <section class=\"game-section1\">\n  <ion-row>\n    <ion-col size=\"10\">\n      <section class=\"choice-section\">\n        <ion-row class=\"choice-row\">\n          <ion-col class=\"choice-col\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgress(0)\">\n              <!-- <span class=\"font\">5</span> -->\n              <img id=\"answer-card\" src=\"{{answer1[0]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n          <ion-col size= \"6\" class=\"choice-col\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgress(1)\">\n              <!-- <span class=\"font\">8</span> -->\n              <img id=\"answer-card\" src=\"{{answer1[1]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"choice-row\">\n          <ion-col size= \"6\" class=\"choice-col\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgress(2)\">\n              <!-- <span class=\"font\">10</span> -->\n              <img id=\"answer-card\" src=\"{{answer1[2]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n          <ion-col size= \"6\" class=\"choice-col\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgress(3)\">\n              <!-- <span class=\"font\">6</span> -->\n              <img id=\"answer-card\" src=\"{{answer1[3]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </section>\n      <ion-card size=\"10\" class=\"card-rotate\">\n        <ion-card-content>\n          <img class=\"question-card\" src=\"{{question1}}\"/>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"2\" class=\"top-right-progress-bar\">\n      <img src=\"/assets/progress-multiplayer/{{top_right}}.png\"/>\n    </ion-col>\n  </ion-row>\n  </section>\n  <section class=\"middle-progress-section\">\n    <ion-row>\n    <ion-col size=\"5\" class=\"middle-progress-bar-left\">\n      <img src=\"/assets/progress-multiplayer/{{middle_left}}.png\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"middle-center\">\n      <img src=\"/assets/progress-multiplayer/{{middle_center}}.png\"/>\n    </ion-col>\n    <ion-col size=\"5\" class=\"middle-progress-bar-right\">\n      <img src=\"/assets/progress-multiplayer/{{middle_right}}.png\"/>\n    </ion-col>\n  </ion-row>\n  </section>\n  <!-- <section class=\"section\">\n    <img src=\"/assets/progress-multiplayer/Picture1.png\"/>\n  </section> -->\n  <section class=\"game-section2\">\n  <ion-row>\n    <ion-col size=\"2\" class=\"bottom-left-progress-bar\">\n      <img src=\"/assets/progress-multiplayer/{{bottom_left}}.png\"/>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-card class=\"card\">\n        <ion-card-content>\n          <img class=\"question-card\" src=\"{{question2}}\"/>\n        </ion-card-content>\n      </ion-card>\n      <section class=\"choice-section-bottom\">\n        <ion-row class=\"choice-row\">\n          <ion-col size= \"6\" class=\"choice-col\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(4)\">\n              <!-- <span class=\"font\">5</span> -->\n              <img id=\"answer-card\" src=\"{{answer2[0]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n          <ion-col size= \"6\" class=\"choice-col\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(5)\">\n              <!-- <span class=\"font\">8</span> -->\n              <img id=\"answer-card\" src=\"{{answer2[1]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"choice-row\">\n          <ion-col size= \"6\" class=\"choice-col\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(6)\">\n              <!-- <span class=\"font\">10</span> -->\n              <img id=\"answer-card\" src=\"{{answer2[2]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n          <ion-col size= \"6\" class=\"choice-col\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(7)\">\n              <!-- <span class=\"font\">6</span> -->\n              <img id=\"answer-card\" src=\"{{answer2[3]['answer']}}\"/>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </section>\n    </ion-col>\n  </ion-row>\n</section>\n</section>\n</ion-content>\n<ion-fab class=\"end-section\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n  <ion-fab-button id=\"replay-button\" [routerLink]=\"['/subject-select/1']\">\n    <ion-icon name=\"refresh-outline\"></ion-icon>\n  </ion-fab-button>\n<ion-fab-button id=\"exit-button\" [routerLink]=\"['/play']\">\n    <ion-icon name=\"exit-outline\"></ion-icon>\n</ion-fab-button>\n</ion-fab>\n<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button id=\"exit-fab1\" [routerLink]=\"['/play']\" style=\"margin: 10px; --background: rgba(190, 41, 15, 0.925);\">\n      <ion-icon name=\"exit-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n<ion-fab-button id=\"exit-fab2\" [routerLink]=\"['/play']\" style=\"margin: 10px; --background: rgba(190, 41, 15, 0.925);\">\n    <ion-icon name=\"exit-outline\"></ion-icon>\n</ion-fab-button>\n</ion-fab>\n";
    /***/
  },

  /***/
  "./src/app/config.json":
  /*!*****************************!*\
    !*** ./src/app/config.json ***!
    \*****************************/

  /*! exports provided: server, bucket, use_int_cards_above_points, use_adv_cards_above_points, master_above_games_played, expert_above_games_played, advanced_above_games_played, novice_above_games_played, nf_rank1_above, nf_rank2_above, nf_rank3_above, nf_rank1_title, nf_rank2_title, nf_rank3_title, nf_rank4_title, default */

  /***/
  function srcAppConfigJson(module) {
    module.exports = JSON.parse("{\"server\":\"http://primaryapp-env.eba-rer8nine.us-west-2.elasticbeanstalk.com\",\"bucket\":\"https://primary-app-resources.s3.eu-west-2.amazonaws.com\",\"use_int_cards_above_points\":150,\"use_adv_cards_above_points\":300,\"master_above_games_played\":50,\"expert_above_games_played\":30,\"advanced_above_games_played\":15,\"novice_above_games_played\":5,\"nf_rank1_above\":250,\"nf_rank2_above\":150,\"nf_rank3_above\":50,\"nf_rank1_title\":\"Number-Master\",\"nf_rank2_title\":\"Math-Wiz\",\"nf_rank3_title\":\"Math-Hero\",\"nf_rank4_title\":\"Number-Novice\"}");
    /***/
  },

  /***/
  "./src/app/play-multi/play-multi-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/play-multi/play-multi-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PlayMultiPageRoutingModule */

  /***/
  function srcAppPlayMultiPlayMultiRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayMultiPageRoutingModule", function () {
      return PlayMultiPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _play_multi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./play-multi.page */
    "./src/app/play-multi/play-multi.page.ts");

    var routes = [{
      path: '',
      component: _play_multi_page__WEBPACK_IMPORTED_MODULE_3__["PlayMultiPage"]
    }];

    var PlayMultiPageRoutingModule = function PlayMultiPageRoutingModule() {
      _classCallCheck(this, PlayMultiPageRoutingModule);
    };

    PlayMultiPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlayMultiPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/play-multi/play-multi.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/play-multi/play-multi.module.ts ***!
    \*************************************************/

  /*! exports provided: PlayMultiPageModule */

  /***/
  function srcAppPlayMultiPlayMultiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayMultiPageModule", function () {
      return PlayMultiPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _play_multi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./play-multi-routing.module */
    "./src/app/play-multi/play-multi-routing.module.ts");
    /* harmony import */


    var _play_multi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./play-multi.page */
    "./src/app/play-multi/play-multi.page.ts");

    var PlayMultiPageModule = function PlayMultiPageModule() {
      _classCallCheck(this, PlayMultiPageModule);
    };

    PlayMultiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _play_multi_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayMultiPageRoutingModule"]],
      declarations: [_play_multi_page__WEBPACK_IMPORTED_MODULE_6__["PlayMultiPage"]]
    })], PlayMultiPageModule);
    /***/
  },

  /***/
  "./src/app/play-multi/play-multi.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/play-multi/play-multi.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayMultiPlayMultiPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Bevan);\n.ion-multi-content {\n  --background: url(\"/assets/progress-multiplayer/background.jpg\") no-repeat center;\n  background-size: cover;\n  --overflow: hidden;\n}\n.game-section1 {\n  height: 47vh;\n  width: 100vw;\n}\n.game-section2 {\n  margin-top: 2vh;\n  height: 48vh;\n  width: 100vw;\n}\n.choice-row {\n  height: 9vh;\n}\n.overlay-section {\n  opacity: 100%;\n}\n.card {\n  background: rgba(255, 255, 255, 0.62);\n  width: 98%;\n  height: 24vh;\n  text-align: center;\n  right: 5vw;\n  margin-top: 0;\n}\n.question-card {\n  height: 95%;\n  width: 95%;\n}\n.middle-progress-section {\n  height: 6vh;\n  margin-top: -3%;\n  width: 100vw;\n}\n.middle-progress-bar-left {\n  margin-bottom: 0vh;\n}\n.middle-progress-bar-right {\n  margin-bottom: 2vh;\n  transform: rotate(180deg);\n}\n.choice-col {\n  text-align: center;\n}\n.choice-section {\n  height: 16vh;\n  width: 83vw;\n  text-align: center;\n}\n.choice-section-bottom {\n  text-align: center;\n  height: 16vh;\n  width: 83vw;\n  margin-top: -4%;\n}\n.choice-button {\n  width: 80%;\n  height: 90%;\n  --border-color:white;\n  --background: rgba(233, 250, 233, 0.712);\n  --border-color:rgb(76, 167, 73);\n  --border-style: dashed;\n  --border-width: 5px;\n  --box-shadow: 2px 2px 2px black;\n}\n.choice-button:active {\n  margin-top: 3px;\n  --box-shadow: none;\n}\n.bottom-left-progress-bar {\n  height: 45vh;\n  width: 17vw;\n}\n.top-right-progress-bar {\n  height: 45vh;\n  width: 17vw;\n  transform: rotate(180deg);\n}\n.choice-button-rotate {\n  width: 80%;\n  height: 90%;\n  --border-color:white;\n  --background: rgba(233, 250, 233, 0.712);\n  --border-color:rgb(76, 167, 73);\n  --border-style: dashed;\n  --border-width: 5px;\n  --box-shadow: 2px 2px 2px black;\n  transform: rotate(180deg);\n}\n.choice-button-rotate:active {\n  margin-top: 3px;\n  --box-shadow: none;\n}\n.card-rotate {\n  background: rgba(255, 255, 255, 0.62);\n  width: 98%;\n  height: 24vh;\n  text-align: center;\n  transform: rotate(180deg);\n}\n.middle-center {\n  -webkit-animation-duration: 6s;\n          animation-duration: 6s;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes example {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(1800deg);\n  }\n}\n@keyframes example {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(1800deg);\n  }\n}\n#replay-button {\n  --background: rgba(39, 201, 139, 0.904);\n  margin-bottom: 20%;\n}\n#exit-button {\n  --background: rgba(190, 41, 15, 0.925);\n}\n.end-section {\n  visibility: hidden;\n}\n.winning-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  visibility: hidden;\n}\n#balloon-effect {\n  position: absolute;\n  width: 100%;\n  bottom: -100%;\n  transition: ease-in-out;\n  -webkit-animation-name: balloon-animation;\n          animation-name: balloon-animation;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  z-index: 2;\n}\n@-webkit-keyframes balloon-animation {\n  0% {\n    bottom: -100%;\n  }\n  100% {\n    bottom: 100%;\n  }\n}\n@keyframes balloon-animation {\n  0% {\n    bottom: -100%;\n  }\n  100% {\n    bottom: 100%;\n  }\n}\n.congrats-label {\n  position: absolute;\n  width: 0%;\n  height: 60px;\n  top: 60%;\n  background: #b83636;\n  transition: width 0.5s;\n  box-shadow: 3px 3px 5px #000;\n  transition-timing-function: linear;\n}\n#congrats-font {\n  position: absolute;\n  top: 60%;\n  width: 100%;\n  text-align: center;\n  color: white;\n  font-family: \"Bevan\";\n  text-shadow: 3px 3px 5px #000;\n  font-size: 30px;\n  font-weight: 400;\n  z-index: 1;\n}\n.board {\n  visibility: visible;\n  overflow: hidden;\n  height: 100%;\n}\n#star-animation {\n  position: absolute;\n  height: 100%;\n  visibility: hidden;\n}\n#center-star {\n  position: absolute;\n  margin-right: 10px;\n  width: 100%;\n  top: 5%;\n  text-align: center;\n  z-index: 3;\n}\n.done-button-section {\n  position: absolute;\n  width: 100%;\n  top: 45%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lcy9naXRodWIvTnVtYmVyZml0L051bWJlcmZpdC9zcmMvYXBwL3BsYXktbXVsdGkvcGxheS1tdWx0aS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BsYXktbXVsdGkvcGxheS1tdWx0aS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMERBQUE7QUFFUjtFQUNJLGlGQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEV0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1JGO0FEV0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNSRjtBRFdBO0VBQ0UsV0FBQTtBQ1JGO0FEV0E7RUFDSSxhQUFBO0FDUko7QURXQTtFQUNJLHFDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDUko7QURXQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDUkY7QURjQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtBQ1pKO0FEa0JBO0VBQ0ksa0JBQUE7QUNmSjtBRGtCQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUNmSjtBRGtCQTtFQUNJLGtCQUFBO0FDZko7QURrQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDZkY7QURrQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2ZGO0FEa0JBO0VBRUksVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUNoQko7QURpQkk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNmUjtBRG9CQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDakJKO0FEcUJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ2xCSjtBRHFCQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUNsQko7QURtQkk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNqQlI7QURxQkE7RUFDSSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ2xCSjtBRHFCQTtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ2xCSjtBRHFCQTtFQUNJO0lBQU0sdUJBQUE7RUNqQlI7RURrQkU7SUFBTSwwQkFBQTtFQ2ZSO0FBQ0Y7QURZQTtFQUNJO0lBQU0sdUJBQUE7RUNqQlI7RURrQkU7SUFBTSwwQkFBQTtFQ2ZSO0FBQ0Y7QURpQkE7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0FDZkY7QURrQkE7RUFDRSxzQ0FBQTtBQ2ZGO0FEa0JBO0VBQ0Usa0JBQUE7QUNmRjtBRGtCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDZkY7QURrQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxVQUFBO0FDZkY7QURrQkE7RUFDRTtJQUFNLGFBQUE7RUNkTjtFRGVBO0lBQU0sWUFBQTtFQ1pOO0FBQ0Y7QURTQTtFQUNFO0lBQU0sYUFBQTtFQ2ROO0VEZUE7SUFBTSxZQUFBO0VDWk47QUFDRjtBRGNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQ1pGO0FEbUJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDaEJGO0FEb0JBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNqQkY7QURvQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2pCRjtBRG9CQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ2xCRjtBRHFCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ2xCRiIsImZpbGUiOiJzcmMvYXBwL3BsYXktbXVsdGkvcGxheS1tdWx0aS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmV2YW4pO1xuXG4uaW9uLW11bHRpLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvcHJvZ3Jlc3MtbXVsdGlwbGF5ZXIvYmFja2dyb3VuZC5qcGcnKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi8vICAgLnJvdy1zdHJ1Y3R1cmV7XG4vLyAgICAgLS1pb24tZ3JpZC1oZWlnaHQ6IDkwJTtcbi8vICAgfVxuXG4vLyAuaW9uLXJvdyB7XG4vLyAgICAgaGVpZ2h0OiA0NSU7XG4vLyB9XG5cbi5nYW1lLXNlY3Rpb24xIHtcbiAgaGVpZ2h0OiA0N3ZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5nYW1lLXNlY3Rpb24yIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBoZWlnaHQ6IDQ4dmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmNob2ljZS1yb3cge1xuICBoZWlnaHQ6IDl2aDtcbn1cblxuLm92ZXJsYXktc2VjdGlvbiB7XG4gICAgb3BhY2l0eTogMTAwJTtcbiAgfVxuXG4uY2FyZHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjIpO1xuICAgIHdpZHRoOiA5OCU7XG4gICAgaGVpZ2h0OiAyNHZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICByaWdodDogNXZ3O1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5xdWVzdGlvbi1jYXJke1xuICBoZWlnaHQ6IDk1JTtcbiAgd2lkdGg6IDk1JTtcbiAgLy8gcGFkZGluZy1yaWdodDogMi41JTtcbiAgLy8gbWFyZ2luLXRvcDogMi41JTtcbiAgICAvLyB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ubWlkZGxlLXByb2dyZXNzLXNlY3Rpb257XG4gICAgaGVpZ2h0OiA2dmg7XG4gICAgbWFyZ2luLXRvcDogLTMlO1xuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBtYXJnaW4tbGVmdDogMyU7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAzJTtcbn1cblxuLm1pZGRsZS1wcm9ncmVzcy1iYXItbGVmdHtcbiAgICBtYXJnaW4tYm90dG9tOiAwdmg7XG59XG5cbi5taWRkbGUtcHJvZ3Jlc3MtYmFyLXJpZ2h0e1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXG59XG5cbi5jaG9pY2UtY29se1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4uY2hvaWNlLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDE2dmg7XG4gIHdpZHRoOiA4M3Z3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaG9pY2Utc2VjdGlvbi1ib3R0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTZ2aDtcbiAgd2lkdGg6IDgzdnc7XG4gIG1hcmdpbi10b3A6IC00JTtcbn1cblxuLmNob2ljZS1idXR0b257XG4gICAgLy8gc2l6ZTogbGFyZ2U7XG4gICAgd2lkdGg6IDgwJTs7Ly8xMDBweDtcbiAgICBoZWlnaHQ6IDkwJTsgLy8zMHB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOndoaXRlO1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyMzMsIDI1MCwgMjMzLCAwLjcxMik7XG4gICAgLS1ib3JkZXItY29sb3I6cmdiKDc2LCAxNjcsIDczKTtcbiAgICAtLWJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgIC0tYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgLS1ib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuXG5cbi5ib3R0b20tbGVmdC1wcm9ncmVzcy1iYXJ7XG4gICAgaGVpZ2h0OiA0NXZoO1xuICAgIHdpZHRoOiAxN3Z3O1xuICAgIC8vIHRvcDogMnZoO1xufVxuXG4udG9wLXJpZ2h0LXByb2dyZXNzLWJhcntcbiAgICBoZWlnaHQ6IDQ1dmg7XG4gICAgd2lkdGg6IDE3dnc7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNob2ljZS1idXR0b24tcm90YXRle1xuICAgIHdpZHRoOiA4MCU7Oy8vMTAwcHg7XG4gICAgaGVpZ2h0OiA5MCU7IC8vMzBweDtcbiAgICAtLWJvcmRlci1jb2xvcjp3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjMzLCAyNTAsIDIzMywgMC43MTIpO1xuICAgIC0tYm9yZGVyLWNvbG9yOnJnYig3NiwgMTY3LCA3Myk7XG4gICAgLS1ib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICAtLWJvcmRlci13aWR0aDogNXB4O1xuICAgIC0tYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbn1cblxuLmNhcmQtcm90YXRle1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Mik7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBoZWlnaHQ6IDI0dmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5taWRkbGUtY2VudGVye1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNnM7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTZ2aDtcbn1cbkBrZXlmcmFtZXMgZXhhbXBsZSB7XG4gICAgMCUgICB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxuICAgIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MCo1ZGVnKTt9XG59XG5cbiNyZXBsYXktYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDM5LCAyMDEsIDEzOSwgMC45MDQpO1xuICBtYXJnaW4tYm90dG9tOiAyMCU7XG59XG4gIFxuI2V4aXQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE5MCwgNDEsIDE1LCAwLjkyNSk7XG59XG4gIFxuLmVuZC1zZWN0aW9uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ud2lubmluZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4jYmFsbG9vbi1lZmZlY3R7IFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IC0xMDAlO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhbGxvb24tYW5pbWF0aW9uO1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICB6LWluZGV4OiAyO1xufVxuXG5Aa2V5ZnJhbWVzIGJhbGxvb24tYW5pbWF0aW9uIHtcbiAgMCUgICB7Ym90dG9tOi0xMDAlO31cbiAgMTAwJSB7Ym90dG9tOjEwMCU7fVxufVxuXG4uY29uZ3JhdHMtbGFiZWwgIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogNjBweDtcbiAgdG9wOiA2MCU7XG4gIGJhY2tncm91bmQ6IHJnYigxODQsIDU0LCA1NCk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDA7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG5cbi8vIC5jb25ncmF0cy1sYWJlbDpob3ZlciB7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG4jY29uZ3JhdHMtZm9udCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQmV2YW5cIjtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgei1pbmRleDogMTtcbn1cblxuXG4uYm9hcmQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNzdGFyLWFuaW1hdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNjZW50ZXItc3RhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMztcbn1cblxuLmRvbmUtYnV0dG9uLXNlY3Rpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJldmFuKTtcbi5pb24tbXVsdGktY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9wcm9ncmVzcy1tdWx0aXBsYXllci9iYWNrZ3JvdW5kLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5nYW1lLXNlY3Rpb24xIHtcbiAgaGVpZ2h0OiA0N3ZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5nYW1lLXNlY3Rpb24yIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBoZWlnaHQ6IDQ4dmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmNob2ljZS1yb3cge1xuICBoZWlnaHQ6IDl2aDtcbn1cblxuLm92ZXJsYXktc2VjdGlvbiB7XG4gIG9wYWNpdHk6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYyKTtcbiAgd2lkdGg6IDk4JTtcbiAgaGVpZ2h0OiAyNHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHJpZ2h0OiA1dnc7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5xdWVzdGlvbi1jYXJkIHtcbiAgaGVpZ2h0OiA5NSU7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5taWRkbGUtcHJvZ3Jlc3Mtc2VjdGlvbiB7XG4gIGhlaWdodDogNnZoO1xuICBtYXJnaW4tdG9wOiAtMyU7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLm1pZGRsZS1wcm9ncmVzcy1iYXItbGVmdCB7XG4gIG1hcmdpbi1ib3R0b206IDB2aDtcbn1cblxuLm1pZGRsZS1wcm9ncmVzcy1iYXItcmlnaHQge1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5jaG9pY2UtY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2hvaWNlLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDE2dmg7XG4gIHdpZHRoOiA4M3Z3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaG9pY2Utc2VjdGlvbi1ib3R0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTZ2aDtcbiAgd2lkdGg6IDgzdnc7XG4gIG1hcmdpbi10b3A6IC00JTtcbn1cblxuLmNob2ljZS1idXR0b24ge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgLS1ib3JkZXItY29sb3I6d2hpdGU7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMzMsIDI1MCwgMjMzLCAwLjcxMik7XG4gIC0tYm9yZGVyLWNvbG9yOnJnYig3NiwgMTY3LCA3Myk7XG4gIC0tYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiA1cHg7XG4gIC0tYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XG59XG4uY2hvaWNlLWJ1dHRvbjphY3RpdmUge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJvdHRvbS1sZWZ0LXByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogNDV2aDtcbiAgd2lkdGg6IDE3dnc7XG59XG5cbi50b3AtcmlnaHQtcHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiA0NXZoO1xuICB3aWR0aDogMTd2dztcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNob2ljZS1idXR0b24tcm90YXRlIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIC0tYm9yZGVyLWNvbG9yOndoaXRlO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjMzLCAyNTAsIDIzMywgMC43MTIpO1xuICAtLWJvcmRlci1jb2xvcjpyZ2IoNzYsIDE2NywgNzMpO1xuICAtLWJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAtLWJvcmRlci13aWR0aDogNXB4O1xuICAtLWJveC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLmNob2ljZS1idXR0b24tcm90YXRlOmFjdGl2ZSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2FyZC1yb3RhdGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjIpO1xuICB3aWR0aDogOTglO1xuICBoZWlnaHQ6IDI0dmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLm1pZGRsZS1jZW50ZXIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xuICBhbmltYXRpb24tbmFtZTogZXhhbXBsZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgZXhhbXBsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODAwZGVnKTtcbiAgfVxufVxuI3JlcGxheS1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMzksIDIwMSwgMTM5LCAwLjkwNCk7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbn1cblxuI2V4aXQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE5MCwgNDEsIDE1LCAwLjkyNSk7XG59XG5cbi5lbmQtc2VjdGlvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLndpbm5pbmctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNiYWxsb29uLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogLTEwMCU7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tbmFtZTogYmFsbG9vbi1hbmltYXRpb247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gIHotaW5kZXg6IDI7XG59XG5cbkBrZXlmcmFtZXMgYmFsbG9vbi1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgYm90dG9tOiAtMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDEwMCU7XG4gIH1cbn1cbi5jb25ncmF0cy1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogNjAlO1xuICBiYWNrZ3JvdW5kOiAjYjgzNjM2O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAjMDAwO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG4jY29uZ3JhdHMtZm9udCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQmV2YW5cIjtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmJvYXJkIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jc3Rhci1hbmltYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4jY2VudGVyLXN0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMztcbn1cblxuLmRvbmUtYnV0dG9uLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDQ1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/play-multi/play-multi.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/play-multi/play-multi.page.ts ***!
    \***********************************************/

  /*! exports provided: PlayMultiPage */

  /***/
  function srcAppPlayMultiPlayMultiPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayMultiPage", function () {
      return PlayMultiPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/screen-orientation/ngx */
    "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");

    var PlayMultiPage = /*#__PURE__*/function () {
      // questionCardEle: HTMLElement;
      // videoEle: HTMLElement;
      function PlayMultiPage(activatedRoute, nativeStorage, http, screenOrientation) {
        var _this = this;

        _classCallCheck(this, PlayMultiPage);

        this.activatedRoute = activatedRoute;
        this.nativeStorage = nativeStorage;
        this.http = http;
        this.screenOrientation = screenOrientation;
        this.server = __webpack_require__(
        /*! ../config.json */
        "./src/app/config.json").server;
        this.bucket = __webpack_require__(
        /*! ../config.json */
        "./src/app/config.json").bucket;
        this.subject = this.activatedRoute.snapshot.paramMap.get("subject");
        this.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.top_progress = 0;
        this.bottom_progress = 0;
        this.videos = [];
        this.checkList = [];
        this.question1 = "../../assets/question.png";
        this.answer1 = [{
          answer: "../../assets/answer.png"
        }, {
          answer: "../../assets/answer.png"
        }, {
          answer: "../../assets/answer.png"
        }, {
          answer: "../../assets/answer.png"
        }];
        this.question2 = "../../assets/question.png";
        this.answer2 = [{
          answer: "../../assets/answer.png"
        }, {
          answer: "../../assets/answer.png"
        }, {
          answer: "../../assets/answer.png"
        }, {
          answer: "../../assets/answer.png"
        }]; // lock screen portrait

        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT); // Get cookie from storage

        this.nativeStorage.getItem('cookie').then(function (data) {
          _this.cookie = data.cookie;
        });
        this.prepareProgressBar();
        this.topUserObj = new onePlayerWrapper(this.answer1);
        this.bottomUserObj = new onePlayerWrapper(this.answer2); // Get cookie

        this.nativeStorage.getItem('cookie').then(function (data) {
          _this.cookie = data.cookie; // Get user

          _this.nativeStorage.getItem('user').then(function (data) {
            _this.user = data;

            if (!_this.user["points"]) {
              _this.user["points"] = 300;
            }

            if (!_this.user["year"]) {
              _this.user["year"] = 6;
            } // Get URLs to videos


            _this.http.get(_this.server + "/getVideo", {}, {}).then(function (data) {
              var videos = JSON.parse(data.data).videos;
              videos.forEach(function (item) {
                _this.videos.push(item.url);
              });
              _this.video = videos[0]; // Ready to play!!!

              _this.play(1);

              _this.play(2);
            })["catch"](function (error) {
              console.log("status", error.status);
              console.log("error", error.error);
              console.log("error here", error);
            });
          });
        });
      }

      _createClass(PlayMultiPage, [{
        key: "play",
        value: function play(player) {
          var qSetNumber = 18; // Number of question sets

          if (this.user.year == 1 && this.subject != "Time") {
            qSetNumber = 6; // For some reason year one have fewer resources on all but Time
          }

          var diff;

          if (this.user.points > __webpack_require__(
          /*! ../config.json */
          "./src/app/config.json").use_adv_cards_above_points) {
            diff = "adv";
          } else if (this.user.points > __webpack_require__(
          /*! ../config.json */
          "./src/app/config.json").use_int_cards_above_points) {
            diff = "int";
          } else {
            diff = "beg";
          }

          var answerArray = [];

          while (answerArray.length < 4) {
            var page = 4 * Math.floor(Math.random() * qSetNumber);
            var card = page + Math.floor(Math.random() * 6); // 6 questions on each page

            var ques = this.bucket + "/" + this.subject + "/" + this.user.year + "/" + diff + "/" + "PDF-" + page + "-" + card + ".png";
            var ans = this.bucket + "/" + this.subject + "/" + this.user.year + "/" + diff + "/" + "PDF-" + (page + 2) + "-" + (card + 2) + ".png"; // console.log("checklist", this.checkList)
            // console.log("question", this.question)
            // console.log("includes", this.checkList.includes(this.question))

            if (!this.checkList.includes(ques)) {
              var question = ques;
              answerArray.push({
                question: question,
                answer: ans
              });
            }
          }

          answerArray.sort(function () {
            return Math.random() - 0.5;
          });

          if (player == 1) {
            this.answer1 = answerArray;
            this.question1 = question;
          } else {
            this.answer2 = answerArray;
            this.question2 = question;
          }
        }
      }, {
        key: "prepareProgressBar",
        value: function prepareProgressBar() {
          this.top_right = 'tiger' + this.images[this.top_progress];
          this.bottom_left = 'lion' + this.images[this.bottom_progress];
          this.middle_right = 'tiger' + this.images[9];
          this.middle_left = 'lion' + this.images[9];
          this.middle_center = 'middle-center';
        }
      }, {
        key: "updateProgress",
        value: function updateProgress(i) {
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
            } else {
              this.playAudio(false);
            }

            this.play(1);
          } else {
            if (this.answer2[i - 4]["question"] == this.question2) {
              // play video when needed
              this.playAudio(true);
              this.updateProgressBottom();
              this.bottomUserObj.updateStatus(true);

              if (this.checkWin(this.bottom_progress)) {
                this.winningEffect(false);
                return;
              }
            } else {
              this.playAudio(false);
            }

            this.play(2);
          }
        }
      }, {
        key: "displayEnd",
        value: function displayEnd() {
          var endSection = document.querySelector(".end-section");
          var overlaySection = document.querySelector(".ion-multi-content");
          overlaySection.style.opacity = "20%";
          endSection.style.visibility = "visible";
        }
      }, {
        key: "enableButtons",
        value: function enableButtons(enable) {
          var choiceButtons = document.querySelectorAll(".choice-button");
          var choiceButtonsRotate = document.querySelectorAll(".choice-button-rotate");

          for (var i = 0; i < choiceButtons.length; i++) {
            var button = choiceButtons[i];
            var buttonRotate = choiceButtonsRotate[i];
            button.disabled = !enable;
            buttonRotate.disabled = !enable;
          }
        }
      }, {
        key: "sleep",
        value: function sleep(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }, {
        key: "winningEffect",
        value: function winningEffect(topWin) {
          var _this2 = this;

          this.enableButtons(false);
          var gameSection1 = document.querySelector('.game-section1');
          var progressBar = document.querySelector('.middle-progress-section');
          var gameSection2 = document.querySelector('.game-section2');
          document.getElementById("exit-fab1").style.visibility = "hidden";
          document.getElementById("exit-fab2").style.visibility = "hidden";
          var ele2 = document.querySelector('.board');
          var ele3 = document.querySelector('.winning-container');
          var ele4 = document.querySelector('.congrats-label');
          var ele5 = document.querySelector('#star-animation'); //rotate if top user wins

          if (topWin) {
            ele3.style.transform = "rotate(180deg)";
            ele5.style.transform = "rotate(180deg)";
          } // star rain appears first


          ele5.style.visibility = "visible";
          progressBar.style.visibility = "hidden";
          gameSection1.style.visibility = "hidden";
          gameSection2.style.visibility = "hidden";
          ele2.style.visibility = "hidden";
          ele3.style.visibility = "visible";
          ele4.style.width = "100%"; // redirect to play page after congrats

          this.sleep(5000).then(function () {
            ele5.style.visibility = "hidden";

            _this2.displayEnd();
          });
        }
      }, {
        key: "playAudio",
        value: function playAudio(correctness) {
          var audio = new Audio();

          if (correctness) {
            audio.src = "/assets/Sounds/answer_correct.wav";
          } else {
            audio.src = "/assets/Sounds/answer_incorrect.wav";
          }

          audio.load();
          audio.play();
        }
      }, {
        key: "updateProgressTop",
        value: function updateProgressTop() {
          this.top_progress = ++this.top_progress; //%this.images.length;

          if (this.top_progress <= 5) {
            this.top_right = 'tiger' + this.images[this.top_progress];
            this.middle_right = 'tiger' + this.images[9];
          } else {
            this.top_right = 'tiger0';
            this.middle_right = 'tiger' + this.images[this.top_progress];
          }
        }
      }, {
        key: "updateProgressBottom",
        value: function updateProgressBottom() {
          this.bottom_progress = ++this.bottom_progress; //%this.images.length;

          if (this.bottom_progress <= 5) {
            this.bottom_left = 'lion' + this.images[this.bottom_progress];
            this.middle_left = 'lion' + this.images[9];
          } else {
            this.bottom_left = 'lion0';
            this.middle_left = 'lion' + this.images[this.bottom_progress];
          }
        }
      }, {
        key: "checkWin",
        value: function checkWin(progress) {
          if (progress >= 9) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, msg) {
          var alert = document.createElement('ion-alert');
          alert.header = header;
          alert.message = msg;
          alert.buttons = ['OK'];
          document.body.appendChild(alert);
          alert.present();
        }
      }]);

      return PlayMultiPage;
    }();

    PlayMultiPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
      }, {
        type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["ScreenOrientation"]
      }];
    };

    PlayMultiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-play-multi',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./play-multi.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play-multi/play-multi.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./play-multi.page.scss */
      "./src/app/play-multi/play-multi.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["ScreenOrientation"]])], PlayMultiPage);

    var onePlayerWrapper = /*#__PURE__*/function () {
      function onePlayerWrapper(questionArray) {
        _classCallCheck(this, onePlayerWrapper);

        this.correctCounter = 0;
        this.incorrectCounter = 0;
      }

      _createClass(onePlayerWrapper, [{
        key: "updateStatus",
        value: function updateStatus(isCorrect) {
          if (isCorrect) this.correctCounter += 1;else this.incorrectCounter += 1;
        }
      }]);

      return onePlayerWrapper;
    }();
    /***/

  }
}]);
//# sourceMappingURL=play-multi-play-multi-module-es5.js.map