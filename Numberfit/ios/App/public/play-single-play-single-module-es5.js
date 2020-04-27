function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["play-single-play-single-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/play-single/play-single.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play-single/play-single.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlaySinglePlaySinglePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button>Quit</ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-content\">\n  <section class=\"overlay-section\">\n  <section class=\"winning-container\">\n  <img id=\"center-star\" src=\"/assets/Winning-decoration/big_star.gif\"/>\n  <p id=\"congrats-font\">Good job!</p><br>\n  <section class=\"congrats-label\"></section>\n  </section>\n  <section class=\"board\">\n  <section>\n    <img id=\"star-animation\" src=\"/assets/Winning-decoration/star_animation.gif\"/>\n  </section>\n  <ion-card class=\"card\">\n    <!-- <ion-card-content> -->\n      <img class=\"question-card\" src=\"{{question}}\"/>\n      <!-- <div  style=\"width:100%; height:100%;\" > -->\n      <iframe class=\"video-container\" src=\"https://www.youtube.com/embed/AkMSuJ9yGbA?autoplay=1&rel=0\" allow='autoplay'></iframe>\n    <!-- </ion-card-content> -->\n  </ion-card>\n  <section>\n    <img src=\"/assets/progress-singleplayer/{{pictureRef}}.png\" style=\"padding: 10px\"/>\n  </section>\n  <section class=\"done-button-section\">\n  <ion-button shape=\"round\" id=\"video-done-button\" (click)=\"switchVideoQuestions(false)\">\n    <span id=\"done-font\">Go!</span>\n  </ion-button>\n</section>\n  <section>\n    <ion-row class=\"choice-row\">\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(0)\">\n          <!-- <span class=\"font\">{{ans1}}</span> -->\n          <img id=\"answer-card\" src=\"{{answer[0]['answer']}}\"/>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(1)\">\n          <!-- <span class=\"font\">{{answerOptions[1]}}</span> -->\n          <img id=\"answer-card\" src=\"{{answer[1]['answer']}}\"/>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"choice-row\">\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(2)\">\n          <!-- <span class=\"font\">{{answerOptions[2]}}</span> -->\n          <img id=\"answer-card\" src=\"{{answer[2]['answer']}}\"/>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(3)\">\n          <!-- <span class=\"font\">{{answerOptions[3]}}</span> -->\n          <img id=\"answer-card\" src=\"{{answer[3]['answer']}}\"/>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </section>\n</section>\n</section>\n<ion-fab class=\"end-section\" vertical=\"center\" horizontal=\"center\" slot=\"fixed\">\n  <ion-fab-button id=\"replay-button\" [routerLink]=\"['/subject-select/0']\">\n    <ion-icon name=\"refresh-outline\"></ion-icon>\n  </ion-fab-button>\n<ion-fab-button id=\"exit-button\" [routerLink]=\"['/play']\">\n    <ion-icon name=\"exit-outline\"></ion-icon>\n</ion-fab-button>\n</ion-fab>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/config.json":
  /*!*****************************!*\
    !*** ./src/app/config.json ***!
    \*****************************/

  /*! exports provided: server, bucket, default */

  /***/
  function srcAppConfigJson(module) {
    module.exports = JSON.parse("{\"server\":\"http://primaryapp-env.eba-rer8nine.us-west-2.elasticbeanstalk.com\",\"bucket\":\"https://primary-app-resources.s3.eu-west-2.amazonaws.com\"}");
    /***/
  },

  /***/
  "./src/app/play-single/play-single-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/play-single/play-single-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: PlaySinglePageRoutingModule */

  /***/
  function srcAppPlaySinglePlaySingleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaySinglePageRoutingModule", function () {
      return PlaySinglePageRoutingModule;
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


    var _play_single_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./play-single.page */
    "./src/app/play-single/play-single.page.ts");

    var routes = [{
      path: '',
      component: _play_single_page__WEBPACK_IMPORTED_MODULE_3__["PlaySinglePage"]
    }];

    var PlaySinglePageRoutingModule = function PlaySinglePageRoutingModule() {
      _classCallCheck(this, PlaySinglePageRoutingModule);
    };

    PlaySinglePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlaySinglePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/play-single/play-single.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/play-single/play-single.module.ts ***!
    \***************************************************/

  /*! exports provided: PlaySinglePageModule */

  /***/
  function srcAppPlaySinglePlaySingleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaySinglePageModule", function () {
      return PlaySinglePageModule;
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


    var _play_single_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./play-single-routing.module */
    "./src/app/play-single/play-single-routing.module.ts");
    /* harmony import */


    var _play_single_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./play-single.page */
    "./src/app/play-single/play-single.page.ts");

    var PlaySinglePageModule = function PlaySinglePageModule() {
      _classCallCheck(this, PlaySinglePageModule);
    };

    PlaySinglePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _play_single_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaySinglePageRoutingModule"]],
      declarations: [_play_single_page__WEBPACK_IMPORTED_MODULE_6__["PlaySinglePage"]]
    })], PlaySinglePageModule);
    /***/
  },

  /***/
  "./src/app/play-single/play-single.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/play-single/play-single.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlaySinglePlaySinglePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Bevan);\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:900\");\n.card {\n  background: rgba(255, 255, 255, 0.62);\n  margin-top: 5%;\n  margin-bottom: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  height: 40%;\n  overflow: hidden;\n}\n.question-card {\n  height: 200px;\n  width: 300px;\n  visibility: visible;\n}\n.video-container {\n  position: absolute;\n  height: 95%;\n  width: 90%;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  visibility: hidden;\n}\n.card-title {\n  font-size: 12px;\n  padding-top: 10px;\n  padding-left: 10px;\n  margin: 0;\n}\n.ion-content {\n  --background: url(\"/assets/progress-singleplayer/background3.png\") 100% 100%;\n}\n.overlay-section {\n  opacity: 100%;\n}\n.board {\n  visibility: visible;\n  overflow: hidden;\n  height: 100%;\n}\n.choice-section {\n  size: \"6\";\n  text-align: center;\n}\n.choice-button {\n  width: 120px;\n  height: 60px;\n  --background: rgba(233, 250, 233, 0.712);\n  --border-color:rgb(76, 167, 73);\n  --border-style: dashed;\n  --border-width: 5px;\n  border-spacing: 5px;\n  shape-outside: round;\n  --box-shadow: 0px 2px 0px black;\n}\n.choice-button:active {\n  margin-top: 3px;\n  --box-shadow: none;\n}\n.choice-button:hover {\n  color: black;\n}\n.answer-card {\n  height: 100%;\n}\n.choice-row {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n.font {\n  font-family: \"Bevan\";\n  font-size: 40px;\n  font-weight: 400;\n  line-height: 130px;\n  color: #f7e226;\n  text-align: center;\n  width: 260px;\n  text-shadow: 1px 1px 1px #000, 3px 3px 5px #000;\n  display: inline-block;\n  -ms-transform: rotate(25deg);\n  -webkit-transform: rotate(10deg);\n}\n.winning-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  visibility: hidden;\n}\n#balloon-effect {\n  position: absolute;\n  width: 100%;\n  bottom: -100%;\n  transition: ease-in-out;\n  -webkit-animation-name: balloon-animation;\n          animation-name: balloon-animation;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  z-index: 2;\n}\n@-webkit-keyframes balloon-animation {\n  0% {\n    bottom: -100%;\n  }\n  100% {\n    bottom: 100%;\n  }\n}\n@keyframes balloon-animation {\n  0% {\n    bottom: -100%;\n  }\n  100% {\n    bottom: 100%;\n  }\n}\n.congrats-label {\n  position: absolute;\n  width: 0%;\n  height: 60px;\n  top: 60%;\n  background: #b83636;\n  transition: width 0.5s;\n  box-shadow: 3px 3px 5px #000;\n  transition-timing-function: linear;\n}\n#congrats-font {\n  position: absolute;\n  top: 60%;\n  width: 100%;\n  text-align: center;\n  color: white;\n  font-family: \"Bevan\";\n  text-shadow: 3px 3px 5px #000;\n  font-size: 40px;\n  font-weight: 500;\n  z-index: 1;\n}\n.balloon-background-board {\n  position: absolute;\n  width: 100%;\n  height: 69%;\n  margin-top: 50%;\n  overflow: hidden;\n}\n#balloon-background-effect {\n  position: absolute;\n  width: 100%;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-name: balloon-background-animation;\n          animation-name: balloon-background-animation;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  opacity: 80%;\n}\n@-webkit-keyframes balloon-background-animation {\n  0% {\n    padding-left: 0px;\n    padding-top: 0px;\n  }\n  25% {\n    padding-right: 5px;\n    padding-bottom: 10px;\n  }\n  50% {\n    padding-right: 5px;\n    padding-bottom: 0px;\n  }\n  75% {\n    padding-left: 5px;\n    padding-bottom: 10px;\n  }\n  100% {\n    padding-left: 0px;\n    padding-top: 0px;\n  }\n}\n@keyframes balloon-background-animation {\n  0% {\n    padding-left: 0px;\n    padding-top: 0px;\n  }\n  25% {\n    padding-right: 5px;\n    padding-bottom: 10px;\n  }\n  50% {\n    padding-right: 5px;\n    padding-bottom: 0px;\n  }\n  75% {\n    padding-left: 5px;\n    padding-bottom: 10px;\n  }\n  100% {\n    padding-left: 0px;\n    padding-top: 0px;\n  }\n}\n#star-animation {\n  position: absolute;\n  height: 100%;\n  visibility: hidden;\n}\n#center-star {\n  position: absolute;\n  margin-right: 10px;\n  width: 100%;\n  top: 5%;\n  text-align: center;\n  z-index: 3;\n}\n.done-button-section {\n  position: absolute;\n  width: 100%;\n  top: 45%;\n  text-align: center;\n}\n#video-done-button {\n  height: 50px;\n  width: 300px;\n  text-align: center;\n  --background: url(\"/assets/progress-singleplayer/button_background.png\") 300px 50px;\n  --border-color:rgb(111, 182, 111);\n  --border-width:5px;\n  --border-style: solid;\n  --box-shadow: 4px 3px 3px rgb(48, 45, 45);\n  z-index: 4;\n  visibility: hidden;\n}\n#video-done-button:hover {\n  color: #174e23;\n}\n#done-font {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  font-size: 30px;\n  color: #6fb66f;\n}\n#replay-button {\n  --background: rgba(39, 201, 139, 0.897);\n  margin-bottom: 20%;\n}\n#exit-button {\n  --background: rgba(190, 41, 15, 0.897);\n}\n.end-section {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lcy9naXRodWIvTnVtYmVyZml0L051bWJlcmZpdC9zcmMvYXBwL3BsYXktc2luZ2xlL3BsYXktc2luZ2xlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGxheS1zaW5nbGUvcGxheS1zaW5nbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDBEQUFBO0FBQ0EscUVBQUE7QUFDUjtFQUNFLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtBQ0FGO0FES0E7RUFFRSxhQUFBO0VBQ0EsWUFBQTtFQUdBLG1CQUFBO0FDTEY7QURRQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNMRjtBRFFBO0VBQ0UsNEVBQUE7QUNMRjtBRFFBO0VBQ0UsYUFBQTtBQ0xGO0FEUUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0xGO0FEUUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFHQSx3Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFFQSwrQkFBQTtBQ1RGO0FEVUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNSSjtBRFlBO0VBQ0UsWUFBQTtBQ1RGO0FEWUE7RUFFRSxZQUFBO0FDVkY7QURhQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ1ZGO0FEYUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0FDVkY7QURhQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDVkY7QURhQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFVBQUE7QUNWRjtBRGFBO0VBQ0U7SUFBTSxhQUFBO0VDVE47RURVQTtJQUFNLFlBQUE7RUNQTjtBQUNGO0FESUE7RUFDRTtJQUFNLGFBQUE7RUNUTjtFRFVBO0lBQU0sWUFBQTtFQ1BOO0FBQ0Y7QURTQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNQRjtBRGNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDWEY7QURjQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNYRjtBRGNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLG9EQUFBO1VBQUEsNENBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsWUFBQTtBQ1hGO0FEY0E7RUFDRTtJQUFNLGlCQUFBO0lBQWtCLGdCQUFBO0VDVHhCO0VEVUE7SUFBTSxrQkFBQTtJQUFtQixvQkFBQTtFQ056QjtFRE9BO0lBQU0sa0JBQUE7SUFBbUIsbUJBQUE7RUNIekI7RURJQTtJQUFNLGlCQUFBO0lBQWtCLG9CQUFBO0VDQXhCO0VEQ0E7SUFBTSxpQkFBQTtJQUFrQixnQkFBQTtFQ0d4QjtBQUNGO0FEVEE7RUFDRTtJQUFNLGlCQUFBO0lBQWtCLGdCQUFBO0VDVHhCO0VEVUE7SUFBTSxrQkFBQTtJQUFtQixvQkFBQTtFQ056QjtFRE9BO0lBQU0sa0JBQUE7SUFBbUIsbUJBQUE7RUNIekI7RURJQTtJQUFNLGlCQUFBO0lBQWtCLG9CQUFBO0VDQXhCO0VEQ0E7SUFBTSxpQkFBQTtJQUFrQixnQkFBQTtFQ0d4QjtBQUNGO0FEQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VGO0FEQ0E7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtRkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFQTtFQUNFLGNBQUE7QUNDRjtBREVBO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVBO0VBQ0Usc0NBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BsYXktc2luZ2xlL3BsYXktc2luZ2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CZXZhbik7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwJyk7XG4uY2FyZHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYyKTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgLy8gd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vIHBhZGRpbmctYm90dG9tOiAyMCU7XG4gIC8vIG9wYWNpdHk6IDMwJTtcbn1cblxuLnF1ZXN0aW9uLWNhcmR7XG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICAvLyB0b3A6IDUlO1xuICAvLyBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4udmlkZW8tY29udGFpbmVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogOTUlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNhcmQtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3Byb2dyZXNzLXNpbmdsZXBsYXllci9iYWNrZ3JvdW5kMy5wbmcnKSAxMDAlIDEwMCU7XG59XG5cbi5vdmVybGF5LXNlY3Rpb24ge1xuICBvcGFjaXR5OiAxMDAlO1xufVxuXG4uYm9hcmQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaG9pY2Utc2VjdGlvbntcbiAgc2l6ZTogXCI2XCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNob2ljZS1idXR0b257XG4gIC8vIHNpemU6IGxhcmdlO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgLy8gLS1pb24tdGFiLWJhci1jb2xvcjp3aGl0ZTtcbiAgLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTMsIDI0MywgMTkxLCAwLjc0KTtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjUwLCAyMzMsIDAuNzEyKTtcbiAgLS1ib3JkZXItY29sb3I6cmdiKDc2LCAxNjcsIDczKTtcbiAgLS1ib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgLS1ib3JkZXItd2lkdGg6IDVweDtcbiAgYm9yZGVyLXNwYWNpbmc6IDVweDtcbiAgc2hhcGUtb3V0c2lkZTogcm91bmQ7XG4gIC8vIG9wYWNpdHk6IDQwJTtcbiAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDBweCBibGFjaztcbiAgJjphY3RpdmUge1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cblxuLmNob2ljZS1idXR0b246aG92ZXJ7XG4gIGNvbG9yOiBibGFjazsgXG59XG5cbi5hbnN3ZXItY2FyZHtcbiAgLy8gd2lkdGg6IDE1MDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2hvaWNlLXJvd3tcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uZm9udHtcbiAgZm9udC1mYW1pbHk6IFwiQmV2YW5cIjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTMwcHg7XG4gIGNvbG9yOiByZ2IoMjQ3LCAyMjYsIDM4KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjYwcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwLCAzcHggM3B4IDVweCAjMDAwOyBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbn1cblxuLndpbm5pbmctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI2JhbGxvb24tZWZmZWN0eyBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAtMTAwJTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBiYWxsb29uLWFuaW1hdGlvbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgei1pbmRleDogMjtcbn1cblxuQGtleWZyYW1lcyBiYWxsb29uLWFuaW1hdGlvbiB7XG4gIDAlICAge2JvdHRvbTotMTAwJTt9XG4gIDEwMCUge2JvdHRvbToxMDAlO31cbn1cblxuLmNvbmdyYXRzLWxhYmVsICB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogNjAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCA1NCwgNTQpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAjMDAwO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG4vLyAuY29uZ3JhdHMtbGFiZWw6aG92ZXIge1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cblxuI2NvbmdyYXRzLWZvbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkJldmFuXCI7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDVweCAjMDAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5iYWxsb29uLWJhY2tncm91bmQtYm9hcmR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjklO1xuICBtYXJnaW4tdG9wOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNiYWxsb29uLWJhY2tncm91bmQtZWZmZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgYW5pbWF0aW9uLW5hbWU6IGJhbGxvb24tYmFja2dyb3VuZC1hbmltYXRpb247XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBvcGFjaXR5OiA4MCU7XG59XG5cbkBrZXlmcmFtZXMgYmFsbG9vbi1iYWNrZ3JvdW5kLWFuaW1hdGlvbiB7XG4gIDAlICAge3BhZGRpbmctbGVmdDowcHg7IHBhZGRpbmctdG9wOjBweDt9XG4gIDI1JSAge3BhZGRpbmctcmlnaHQ6NXB4OyBwYWRkaW5nLWJvdHRvbToxMHB4O31cbiAgNTAlICB7cGFkZGluZy1yaWdodDo1cHg7IHBhZGRpbmctYm90dG9tOjBweDt9XG4gIDc1JSAge3BhZGRpbmctbGVmdDo1cHg7IHBhZGRpbmctYm90dG9tOjEwcHg7fVxuICAxMDAlIHtwYWRkaW5nLWxlZnQ6MHB4OyBwYWRkaW5nLXRvcDowcHg7fVxufVxuXG5cbiNzdGFyLWFuaW1hdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNjZW50ZXItc3RhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMztcbn1cblxuLmRvbmUtYnV0dG9uLXNlY3Rpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN2aWRlby1kb25lLWJ1dHRvbntcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvcHJvZ3Jlc3Mtc2luZ2xlcGxheWVyL2J1dHRvbl9iYWNrZ3JvdW5kLnBuZycpIDMwMHB4IDUwcHg7IFxuICAtLWJvcmRlci1jb2xvcjpyZ2IoMTExLCAxODIsIDExMSk7XG4gIC0tYm9yZGVyLXdpZHRoOjVweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJveC1zaGFkb3c6IDRweCAzcHggM3B4IHJnYig0OCwgNDUsIDQ1KTtcbiAgei1pbmRleDogNDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4jdmlkZW8tZG9uZS1idXR0b246aG92ZXJ7XG4gIGNvbG9yOiByZ2IoMjMsIDc4LCAzNSk7XG59XG5cbiNkb25lLWZvbnQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiByZ2IoMTExLCAxODIsIDExMSk7XG59XG5cbiNyZXBsYXktYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDM5LCAyMDEsIDEzOSwgMC44OTcpO1xuICBtYXJnaW4tYm90dG9tOiAyMCU7XG59XG5cbiNleGl0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgxOTAsIDQxLCAxNSwgMC44OTcpO1xufVxuXG4uZW5kLXNlY3Rpb24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59IiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJldmFuKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwXCIpO1xuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjIpO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xuICBoZWlnaHQ6IDQwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnF1ZXN0aW9uLWNhcmQge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi52aWRlby1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogOTUlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3Byb2dyZXNzLXNpbmdsZXBsYXllci9iYWNrZ3JvdW5kMy5wbmdcIikgMTAwJSAxMDAlO1xufVxuXG4ub3ZlcmxheS1zZWN0aW9uIHtcbiAgb3BhY2l0eTogMTAwJTtcbn1cblxuLmJvYXJkIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2hvaWNlLXNlY3Rpb24ge1xuICBzaXplOiBcIjZcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2hvaWNlLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjMzLCAyNTAsIDIzMywgMC43MTIpO1xuICAtLWJvcmRlci1jb2xvcjpyZ2IoNzYsIDE2NywgNzMpO1xuICAtLWJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAtLWJvcmRlci13aWR0aDogNXB4O1xuICBib3JkZXItc3BhY2luZzogNXB4O1xuICBzaGFwZS1vdXRzaWRlOiByb3VuZDtcbiAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDBweCBibGFjaztcbn1cbi5jaG9pY2UtYnV0dG9uOmFjdGl2ZSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2hvaWNlLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmFuc3dlci1jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2hvaWNlLXJvdyB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmZvbnQge1xuICBmb250LWZhbWlseTogXCJCZXZhblwiO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMzBweDtcbiAgY29sb3I6ICNmN2UyMjY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI2MHB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMCwgM3B4IDNweCA1cHggIzAwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbn1cblxuLndpbm5pbmctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNiYWxsb29uLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogLTEwMCU7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tbmFtZTogYmFsbG9vbi1hbmltYXRpb247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gIHotaW5kZXg6IDI7XG59XG5cbkBrZXlmcmFtZXMgYmFsbG9vbi1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgYm90dG9tOiAtMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDEwMCU7XG4gIH1cbn1cbi5jb25ncmF0cy1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogNjAlO1xuICBiYWNrZ3JvdW5kOiAjYjgzNjM2O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAjMDAwO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG4jY29uZ3JhdHMtZm9udCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQmV2YW5cIjtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmJhbGxvb24tYmFja2dyb3VuZC1ib2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjklO1xuICBtYXJnaW4tdG9wOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNiYWxsb29uLWJhY2tncm91bmQtZWZmZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgYW5pbWF0aW9uLW5hbWU6IGJhbGxvb24tYmFja2dyb3VuZC1hbmltYXRpb247XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBvcGFjaXR5OiA4MCU7XG59XG5cbkBrZXlmcmFtZXMgYmFsbG9vbi1iYWNrZ3JvdW5kLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICB9XG4gIDI1JSB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIDUwJSB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cbiAgNzUlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICB9XG59XG4jc3Rhci1hbmltYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4jY2VudGVyLXN0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMztcbn1cblxuLmRvbmUtYnV0dG9uLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDQ1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdmlkZW8tZG9uZS1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvcHJvZ3Jlc3Mtc2luZ2xlcGxheWVyL2J1dHRvbl9iYWNrZ3JvdW5kLnBuZ1wiKSAzMDBweCA1MHB4O1xuICAtLWJvcmRlci1jb2xvcjpyZ2IoMTExLCAxODIsIDExMSk7XG4gIC0tYm9yZGVyLXdpZHRoOjVweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJveC1zaGFkb3c6IDRweCAzcHggM3B4IHJnYig0OCwgNDUsIDQ1KTtcbiAgei1pbmRleDogNDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4jdmlkZW8tZG9uZS1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzE3NGUyMztcbn1cblxuI2RvbmUtZm9udCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzZmYjY2Zjtcbn1cblxuI3JlcGxheS1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMzksIDIwMSwgMTM5LCAwLjg5Nyk7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbn1cblxuI2V4aXQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE5MCwgNDEsIDE1LCAwLjg5Nyk7XG59XG5cbi5lbmQtc2VjdGlvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/play-single/play-single.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/play-single/play-single.page.ts ***!
    \*************************************************/

  /*! exports provided: PlaySinglePage */

  /***/
  function srcAppPlaySinglePlaySinglePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaySinglePage", function () {
      return PlaySinglePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");

    var PlaySinglePage = /*#__PURE__*/function () {
      function PlaySinglePage(activatedRoute, nativeStorage, router, http) {
        var _this = this;

        _classCallCheck(this, PlaySinglePage);

        this.activatedRoute = activatedRoute;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.http = http;
        this.server = __webpack_require__(
        /*! ../config.json */
        "./src/app/config.json").server;
        this.bucket = __webpack_require__(
        /*! ../config.json */
        "./src/app/config.json").bucket;
        this.subject = this.activatedRoute.snapshot.paramMap.get("subject");
        this.checkList = [];
        this.answer = [{
          answer: "-"
        }, {
          answer: "-"
        }, {
          answer: "-"
        }, {
          answer: "-"
        }];
        this.videos = [];
        this.correctCounter = 0;
        this.incorrectCounter = 0;
        this.images = ['Picture1', 'Picture2', 'Picture3', 'Picture4', 'Picture5', 'Picture6', 'Picture7', 'Picture8', 'Picture9'];
        this.imgState = 0;
        this.pictureRef = this.images[this.imgState]; // Get cookie

        this.nativeStorage.getItem('cookie').then(function (data) {
          _this.cookie = data.cookie; // Get user

          _this.nativeStorage.getItem('user').then(function (data) {
            _this.user = data; // Get URLs to videos

            _this.http.get(_this.server + "/getVideo", {}, {}).then(function (data) {
              var videos = JSON.parse(data.data).videos;
              videos.forEach(function (item) {
                _this.videos.push(item.url);
              }); // Ready to play!!!

              _this.play();
            })["catch"](function (error) {
              console.log("status", error.status);
              console.log("error", error.error);
              console.log("error here", error);
            });
          });
        });
      }

      _createClass(PlaySinglePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.questionCardEle = document.querySelector('.question-card');
          this.videoEle = document.querySelector('.video-container');
        }
      }, {
        key: "play",
        value: function play() {
          var qSetNumber = 18; // Number of question sets

          if (this.user.year == 1 && this.subject != "Time") {
            qSetNumber = 6; // For some reason year one have fewer resources on all but Time
          }

          this.answer = [];

          while (this.answer.length < 4) {
            console.log(this.answer.length);
            var page = 4 * Math.floor(Math.random() * qSetNumber);
            var card = page + Math.floor(Math.random() * 6); // 6 questions on each page

            var ques = this.bucket + "/" + this.subject + "/" + this.user.year + "/beg/" + "PDF-" + page + "-" + card + ".png";
            var ans = this.bucket + "/" + this.subject + "/" + this.user.year + "/beg/" + "PDF-" + (page + 2) + "-" + (card + 2) + ".png"; // console.log("checklist", this.checkList)
            // console.log("question", this.question)
            // console.log("includes", this.checkList.includes(this.question))

            if (!this.checkList.includes(ques)) {
              this.question = ques;
              this.answer.push({
                question: this.question,
                answer: ans
              });
            }
          }

          this.shuffleAnswerOptions(this.answer);
          console.log("answers", this.answer);
          console.log("ansers", this.question);
        }
      }, {
        key: "updateProgress",
        // main operating function for the whole process
        value: function updateProgress(i) {
          // check if the answer is correct
          if (this.answer[i]["question"] == this.question) {
            // play video when needed
            this.checkList.push(this.question);
            this.playAudio(true);
            this.updateProgressBar();

            if (this.checkWin()) {
              return;
            }

            this.correctCounter += 1; //every 3 questions

            if (this.correctCounter % 3 == 0) {
              this.switchVideoQuestions(true);
            }
          } else {
            this.playAudio(false);
            this.incorrectCounter += 1;
          }

          this.play();
        }
      }, {
        key: "displayEnd",
        value: function displayEnd() {
          var endSection = document.querySelector(".end-section");
          var overlaySection = document.querySelector(".overlay-section");
          overlaySection.style.opacity = "30%";
          endSection.style.visibility = "visible";
        }
      }, {
        key: "shuffleAnswerOptions",
        value: function shuffleAnswerOptions(array) {
          array.sort(function () {
            return Math.random() - 0.5;
          });
          return array;
        }
      }, {
        key: "sleep",
        value: function sleep(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        } // sound effect at button click

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
        key: "enableButtons",
        value: function enableButtons(enable) {
          var choiceButtons = document.querySelectorAll(".choice-button");

          for (var i = 0; i < choiceButtons.length; i++) {
            var button = choiceButtons[i];
            button.disabled = !enable;
          }
        }
      }, {
        key: "enableVideoOrQuestions",
        value: function enableVideoOrQuestions(toVideo) {
          if (toVideo) {
            this.questionCardEle.style.visibility = "hidden";
            this.videoEle.style.visibility = "visible";
          } else {
            this.questionCardEle.style.visibility = "visible";
            this.videoEle.style.visibility = "hidden";
          }
        }
      }, {
        key: "switchVideoQuestions",
        value: function switchVideoQuestions(toVideo) {
          this.enableVideoOrQuestions(toVideo);
          this.enableButtons(!toVideo);
          var backToGameButton = document.querySelector("#video-done-button");
          backToGameButton.style.visibility = toVideo ? "visible" : "hidden";
        } // the progress bar move one step forward with correct answer

      }, {
        key: "updateProgressBar",
        value: function updateProgressBar() {
          this.imgState = ++this.imgState; //% this.images.length;

          this.pictureRef = this.images[this.imgState];
        }
      }, {
        key: "checkWin",
        value: function checkWin() {
          var _this2 = this;

          if (this.imgState >= 8) {
            this.saveGame();
            this.enableButtons(false);
            var ele2 = document.querySelector('.board');
            var ele3 = document.querySelector('.winning-container');
            var ele4 = document.querySelector('.congrats-label');
            var ele5 = document.querySelector('#star-animation'); // star rain appears first

            ele5.style.visibility = "visible";
            this.questionCardEle.style.visibility = "hidden";
            this.videoEle.style.visibility = "hidden";
            this.sleep(2000).then(function () {
              ele2.style.visibility = "hidden";
              ele3.style.visibility = "visible";
              ele4.style.width = "100%";
            }); // redirect to play page after congrats

            this.sleep(8000).then(function () {
              ele5.style.visibility = "hidden";

              _this2.displayEnd();

              return true;
            });
          } else {
            return false;
          }
        } // Saves game to gameHistories in server and updates points locally

      }, {
        key: "saveGame",
        value: function saveGame() {
          var _this3 = this;

          var gamePlayed = {
            username: this.user.username,
            correct: this.correctCounter,
            incorrect: this.incorrectCounter,
            topic: this.subject
          };
          var savedUser = {
            cookie: this.cookie,
            username: this.user.username,
            name: this.user.name,
            school: this.user.school,
            year: this.user.year,
            teacher: this.user.teacher,
            points: this.user.points + this.correctCounter - this.incorrectCounter
          };
          console.log("gamePLayed: ", gamePlayed);
          console.log("savedUser: ", savedUser);
          this.http.setDataSerializer('json');
          this.http.post(this.server + "/saveGame", gamePlayed, {}).then(function (data) {
            _this3.http.post(_this3.server + "/updateScore", savedUser, {}).then(function (data) {
              delete savedUser["cookie"];

              _this3.nativeStorage.setItem('user', savedUser).then(function () {}, function (error) {
                return console.error('Error storing cookie', error);
              });
            })["catch"](function (error) {
              console.log("update score error: ", error.error); // this.presentAlert();
            });
          })["catch"](function (error) {
            console.log("save game error:", error.error); // this.presentAlert();
          });
        }
      }]);

      return PlaySinglePage;
    }();

    PlaySinglePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }];
    };

    PlaySinglePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-play-single',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./play-single.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play-single/play-single.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./play-single.page.scss */
      "./src/app/play-single/play-single.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])], PlaySinglePage);
    /***/
  }
}]);
//# sourceMappingURL=play-single-play-single-module-es5.js.map