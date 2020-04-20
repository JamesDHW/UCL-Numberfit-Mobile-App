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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button>Quit</ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-content\">\n  <section class=\"winning-container\">\n    <img id=\"balloon-effect\" src=\"/assets/Winning-decoration/balloon.png\"/>\n  <img id=\"center-star\" src=\"/assets/Winning-decoration/big_star.gif\"/>\n  <p id=\"congrats-font\">Good job!</p><br>\n  <section class=\"congrats-label\"></section>\n  </section>\n  <section class=\"board\">\n  <section>\n    <img id=\"star-animation\" src=\"/assets/Winning-decoration/star_animation.gif\"/>\n  </section>\n  <section class=\"balloon-background-board\">\n    <img id=\"balloon-background-effect\" src=\"/assets/Winning-decoration/balloon_background.png\"/>\n  </section>\n  <ion-card class=\"card\">\n    <!-- <ion-card-content> -->\n      <img class=\"question-card\" src=\"/assets/Question-card/{{questionCard}}.png\"/>\n      <!-- <div  style=\"width:100%; height:100%;\" > -->\n      <iframe class=\"video-container\" src=\"https://www.youtube.com/embed/BYkwtaJgW5g?autoplay=1&rel=0\" allow='autoplay'></iframe>\n    <!-- </ion-card-content> -->\n  </ion-card>\n  <section>\n    <img src=\"/assets/progress-singleplayer/{{pictureRef}}.png\" style=\"padding: 10px\"/>\n  </section>\n  <section class=\"done-button-section\">\n  <ion-button shape=\"round\" id=\"video-done-button\" (click)=\"switchVideoQuestions(false)\">\n    <span id=\"done-font\">Go!</span>\n  </ion-button>\n</section>\n  <section>\n    <ion-row class=\"choice-row\">\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(1)\">\n          <!-- <span class=\"font\">{{ans1}}</span> -->\n          <img id=\"answer-card\" src=\"/assets/Answers/Answer1.png\"/>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(2)\">\n          <!-- <span class=\"font\">{{answerOptions[1]}}</span> -->\n          <img id=\"answer-card\" src=\"/assets/Answers/Answer1.png\"/>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"choice-row\">\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(3)\">\n          <!-- <span class=\"font\">{{answerOptions[2]}}</span> -->\n          <img id=\"answer-card\" src=\"/assets/Answers/Answer1.png\"/>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress(4)\">\n          <!-- <span class=\"font\">{{answerOptions[3]}}</span> -->\n          <img id=\"answer-card\" src=\"/assets/Answers/Answer1.png\"/>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </section>\n</section>\n</ion-content>\n";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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

    PlaySinglePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
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

    PlaySinglePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Bevan);\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:900\");\n.card {\n  background: rgba(255, 255, 255, 0.62);\n  margin-top: 5%;\n  margin-bottom: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  height: 40%;\n  overflow: hidden;\n}\n.question-card {\n  height: 200px;\n  width: 300px;\n  visibility: visible;\n}\n.video-container {\n  position: absolute;\n  height: 95%;\n  width: 90%;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  visibility: hidden;\n}\n.card-title {\n  font-size: 12px;\n  padding-top: 10px;\n  padding-left: 10px;\n  margin: 0;\n}\n.ion-content {\n  --background: url(\"/assets/progress-singleplayer/background3.png\") 100% 100%;\n}\n.board {\n  visibility: visible;\n  overflow: hidden;\n  height: 100%;\n}\n.choice-section {\n  size: \"6\";\n  text-align: center;\n}\n.choice-button {\n  width: 120px;\n  height: 60px;\n  --background: rgba(233, 250, 233, 0.712);\n  --border-color:rgb(76, 167, 73);\n  --border-style: dashed;\n  --border-width: 5px;\n  border-spacing: 5px;\n  shape-outside: round;\n  --box-shadow: 0px 2px 0px black;\n}\n.choice-button:active {\n  margin-top: 3px;\n  --box-shadow: none;\n}\n.choice-button:hover {\n  color: black;\n}\n.answer-card {\n  height: 100%;\n}\n.choice-row {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n.font {\n  font-family: \"Bevan\";\n  font-size: 40px;\n  font-weight: 400;\n  line-height: 130px;\n  color: #f7e226;\n  text-align: center;\n  width: 260px;\n  text-shadow: 1px 1px 1px #000, 3px 3px 5px #000;\n  display: inline-block;\n  -ms-transform: rotate(25deg);\n  -webkit-transform: rotate(10deg);\n}\n.winning-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  visibility: hidden;\n}\n#balloon-effect {\n  position: absolute;\n  width: 100%;\n  bottom: -100%;\n  -webkit-transition: ease-in-out;\n  transition: ease-in-out;\n  -webkit-animation-name: balloon-animation;\n          animation-name: balloon-animation;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  z-index: 2;\n}\n@-webkit-keyframes balloon-animation {\n  0% {\n    bottom: -100%;\n  }\n  100% {\n    bottom: 100%;\n  }\n}\n@keyframes balloon-animation {\n  0% {\n    bottom: -100%;\n  }\n  100% {\n    bottom: 100%;\n  }\n}\n.congrats-label {\n  position: absolute;\n  width: 0%;\n  height: 60px;\n  top: 60%;\n  background: #b83636;\n  -webkit-transition: width 0.5s;\n  transition: width 0.5s;\n  box-shadow: 3px 3px 5px #000;\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n}\n#congrats-font {\n  position: absolute;\n  top: 60%;\n  width: 100%;\n  text-align: center;\n  color: white;\n  font-family: \"Bevan\";\n  text-shadow: 3px 3px 5px #000;\n  font-size: 40px;\n  font-weight: 500;\n  z-index: 1;\n}\n.balloon-background-board {\n  position: absolute;\n  width: 100%;\n  height: 69%;\n  margin-top: 50%;\n  overflow: hidden;\n}\n#balloon-background-effect {\n  position: absolute;\n  width: 100%;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-name: balloon-background-animation;\n          animation-name: balloon-background-animation;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  opacity: 80%;\n}\n@-webkit-keyframes balloon-background-animation {\n  0% {\n    padding-left: 0px;\n    padding-top: 0px;\n  }\n  25% {\n    padding-right: 5px;\n    padding-bottom: 10px;\n  }\n  50% {\n    padding-right: 5px;\n    padding-bottom: 0px;\n  }\n  75% {\n    padding-left: 5px;\n    padding-bottom: 10px;\n  }\n  100% {\n    padding-left: 0px;\n    padding-top: 0px;\n  }\n}\n@keyframes balloon-background-animation {\n  0% {\n    padding-left: 0px;\n    padding-top: 0px;\n  }\n  25% {\n    padding-right: 5px;\n    padding-bottom: 10px;\n  }\n  50% {\n    padding-right: 5px;\n    padding-bottom: 0px;\n  }\n  75% {\n    padding-left: 5px;\n    padding-bottom: 10px;\n  }\n  100% {\n    padding-left: 0px;\n    padding-top: 0px;\n  }\n}\n#star-animation {\n  position: absolute;\n  height: 100%;\n  visibility: hidden;\n}\n#center-star {\n  position: absolute;\n  margin-right: 10px;\n  width: 100%;\n  top: 5%;\n  text-align: center;\n  z-index: 3;\n}\n.done-button-section {\n  position: absolute;\n  width: 100%;\n  top: 45%;\n  text-align: center;\n}\n#video-done-button {\n  height: 50px;\n  width: 300px;\n  text-align: center;\n  --background: url(\"/assets/progress-singleplayer/button_background.png\") 300px 50px;\n  --border-color:rgb(111, 182, 111);\n  --border-width:5px;\n  --border-style: solid;\n  --box-shadow: 4px 3px 3px rgb(48, 45, 45);\n  z-index: 4;\n  visibility: hidden;\n}\n#video-done-button:hover {\n  color: #174e23;\n}\n#done-font {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  font-size: 30px;\n  color: #6fb66f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lcy9naXRodWIvTnVtYmVyZml0L051bWJlcmZpdC9zcmMvYXBwL3BsYXktc2luZ2xlL3BsYXktc2luZ2xlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGxheS1zaW5nbGUvcGxheS1zaW5nbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDBEQUFBO0FBQ0EscUVBQUE7QUFDUjtFQUNFLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtBQ0FGO0FES0E7RUFFRSxhQUFBO0VBQ0EsWUFBQTtFQUdBLG1CQUFBO0FDTEY7QURRQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNMRjtBRFFBO0VBQ0UsNEVBQUE7QUNMRjtBRFFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNMRjtBRFFBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDTEY7QURRQTtFQUVFLFlBQUE7RUFDQSxZQUFBO0VBR0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBRUEsK0JBQUE7QUNURjtBRFVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDUko7QURZQTtFQUNFLFlBQUE7QUNURjtBRFlBO0VBRUUsWUFBQTtBQ1ZGO0FEYUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNWRjtBRGFBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtBQ1ZGO0FEYUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FEYUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFBQSx1QkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFVBQUE7QUNWRjtBRGFBO0VBQ0U7SUFBTSxhQUFBO0VDVE47RURVQTtJQUFNLFlBQUE7RUNQTjtBQUNGO0FESUE7RUFDRTtJQUFNLGFBQUE7RUNUTjtFRFVBO0lBQU0sWUFBQTtFQ1BOO0FBQ0Y7QURTQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDUEY7QURjQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ1hGO0FEY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWEY7QURjQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLFlBQUE7QUNYRjtBRGNBO0VBQ0U7SUFBTSxpQkFBQTtJQUFrQixnQkFBQTtFQ1R4QjtFRFVBO0lBQU0sa0JBQUE7SUFBbUIsb0JBQUE7RUNOekI7RURPQTtJQUFNLGtCQUFBO0lBQW1CLG1CQUFBO0VDSHpCO0VESUE7SUFBTSxpQkFBQTtJQUFrQixvQkFBQTtFQ0F4QjtFRENBO0lBQU0saUJBQUE7SUFBa0IsZ0JBQUE7RUNHeEI7QUFDRjtBRFRBO0VBQ0U7SUFBTSxpQkFBQTtJQUFrQixnQkFBQTtFQ1R4QjtFRFVBO0lBQU0sa0JBQUE7SUFBbUIsb0JBQUE7RUNOekI7RURPQTtJQUFNLGtCQUFBO0lBQW1CLG1CQUFBO0VDSHpCO0VESUE7SUFBTSxpQkFBQTtJQUFrQixvQkFBQTtFQ0F4QjtFRENBO0lBQU0saUJBQUE7SUFBa0IsZ0JBQUE7RUNHeEI7QUFDRjtBREFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFRjtBRENBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUZBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5Q0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxjQUFBO0FDQ0Y7QURFQTtFQUNFLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGxheS1zaW5nbGUvcGxheS1zaW5nbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJldmFuKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDAnKTtcbi5jYXJke1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjIpO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAvLyB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gcGFkZGluZy1ib3R0b206IDIwJTtcbiAgLy8gb3BhY2l0eTogMzAlO1xufVxuXG4ucXVlc3Rpb24tY2FyZHtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIC8vIHRvcDogNSU7XG4gIC8vIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi52aWRlby1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA5NSU7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2FyZC10aXRsZXtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvcHJvZ3Jlc3Mtc2luZ2xlcGxheWVyL2JhY2tncm91bmQzLnBuZycpIDEwMCUgMTAwJTtcbn1cblxuLmJvYXJkIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2hvaWNlLXNlY3Rpb257XG4gIHNpemU6IFwiNlwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaG9pY2UtYnV0dG9ue1xuICAvLyBzaXplOiBsYXJnZTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIC8vIC0taW9uLXRhYi1iYXItY29sb3I6d2hpdGU7XG4gIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkzLCAyNDMsIDE5MSwgMC43NCk7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMzMsIDI1MCwgMjMzLCAwLjcxMik7XG4gIC0tYm9yZGVyLWNvbG9yOnJnYig3NiwgMTY3LCA3Myk7XG4gIC0tYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiA1cHg7XG4gIGJvcmRlci1zcGFjaW5nOiA1cHg7XG4gIHNoYXBlLW91dHNpZGU6IHJvdW5kO1xuICAvLyBvcGFjaXR5OiA0MCU7XG4gIC0tYm94LXNoYWRvdzogMHB4IDJweCAwcHggYmxhY2s7XG4gICY6YWN0aXZlIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICB9XG59XG5cbi5jaG9pY2UtYnV0dG9uOmhvdmVye1xuICBjb2xvcjogYmxhY2s7IFxufVxuXG4uYW5zd2VyLWNhcmR7XG4gIC8vIHdpZHRoOiAxNTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNob2ljZS1yb3d7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmZvbnR7XG4gIGZvbnQtZmFtaWx5OiBcIkJldmFuXCI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEzMHB4O1xuICBjb2xvcjogcmdiKDI0NywgMjI2LCAzOCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI2MHB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMCwgM3B4IDNweCA1cHggIzAwMDsgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG59XG5cbi53aW5uaW5nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNiYWxsb29uLWVmZmVjdHsgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogLTEwMCU7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tbmFtZTogYmFsbG9vbi1hbmltYXRpb247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gIHotaW5kZXg6IDI7XG59XG5cbkBrZXlmcmFtZXMgYmFsbG9vbi1hbmltYXRpb24ge1xuICAwJSAgIHtib3R0b206LTEwMCU7fVxuICAxMDAlIHtib3R0b206MTAwJTt9XG59XG5cbi5jb25ncmF0cy1sYWJlbCAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0b3A6IDYwJTtcbiAgYmFja2dyb3VuZDogcmdiKDE4NCwgNTQsIDU0KTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbn1cblxuLy8gLmNvbmdyYXRzLWxhYmVsOmhvdmVyIHtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyB9XG5cbiNjb25ncmF0cy1mb250IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJCZXZhblwiO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYmFsbG9vbi1iYWNrZ3JvdW5kLWJvYXJke1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY5JTtcbiAgbWFyZ2luLXRvcDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jYmFsbG9vbi1iYWNrZ3JvdW5kLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIGFuaW1hdGlvbi1uYW1lOiBiYWxsb29uLWJhY2tncm91bmQtYW5pbWF0aW9uO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgb3BhY2l0eTogODAlO1xufVxuXG5Aa2V5ZnJhbWVzIGJhbGxvb24tYmFja2dyb3VuZC1hbmltYXRpb24ge1xuICAwJSAgIHtwYWRkaW5nLWxlZnQ6MHB4OyBwYWRkaW5nLXRvcDowcHg7fVxuICAyNSUgIHtwYWRkaW5nLXJpZ2h0OjVweDsgcGFkZGluZy1ib3R0b206MTBweDt9XG4gIDUwJSAge3BhZGRpbmctcmlnaHQ6NXB4OyBwYWRkaW5nLWJvdHRvbTowcHg7fVxuICA3NSUgIHtwYWRkaW5nLWxlZnQ6NXB4OyBwYWRkaW5nLWJvdHRvbToxMHB4O31cbiAgMTAwJSB7cGFkZGluZy1sZWZ0OjBweDsgcGFkZGluZy10b3A6MHB4O31cbn1cblxuXG4jc3Rhci1hbmltYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4jY2VudGVyLXN0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5kb25lLWJ1dHRvbi1zZWN0aW9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDQ1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdmlkZW8tZG9uZS1idXR0b257XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3Byb2dyZXNzLXNpbmdsZXBsYXllci9idXR0b25fYmFja2dyb3VuZC5wbmcnKSAzMDBweCA1MHB4OyBcbiAgLS1ib3JkZXItY29sb3I6cmdiKDExMSwgMTgyLCAxMTEpO1xuICAtLWJvcmRlci13aWR0aDo1cHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3gtc2hhZG93OiA0cHggM3B4IDNweCByZ2IoNDgsIDQ1LCA0NSk7XG4gIHotaW5kZXg6IDQ7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI3ZpZGVvLWRvbmUtYnV0dG9uOmhvdmVye1xuICBjb2xvcjogcmdiKDIzLCA3OCwgMzUpO1xufVxuXG4jZG9uZS1mb250IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogcmdiKDExMSwgMTgyLCAxMTEpO1xufVxuIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJldmFuKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwXCIpO1xuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjIpO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xuICBoZWlnaHQ6IDQwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnF1ZXN0aW9uLWNhcmQge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi52aWRlby1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogOTUlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3Byb2dyZXNzLXNpbmdsZXBsYXllci9iYWNrZ3JvdW5kMy5wbmdcIikgMTAwJSAxMDAlO1xufVxuXG4uYm9hcmQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaG9pY2Utc2VjdGlvbiB7XG4gIHNpemU6IFwiNlwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaG9pY2UtYnV0dG9uIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMzMsIDI1MCwgMjMzLCAwLjcxMik7XG4gIC0tYm9yZGVyLWNvbG9yOnJnYig3NiwgMTY3LCA3Myk7XG4gIC0tYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiA1cHg7XG4gIGJvcmRlci1zcGFjaW5nOiA1cHg7XG4gIHNoYXBlLW91dHNpZGU6IHJvdW5kO1xuICAtLWJveC1zaGFkb3c6IDBweCAycHggMHB4IGJsYWNrO1xufVxuLmNob2ljZS1idXR0b246YWN0aXZlIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jaG9pY2UtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYW5zd2VyLWNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaG9pY2Utcm93IHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uZm9udCB7XG4gIGZvbnQtZmFtaWx5OiBcIkJldmFuXCI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEzMHB4O1xuICBjb2xvcjogI2Y3ZTIyNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjYwcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwLCAzcHggM3B4IDVweCAjMDAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xufVxuXG4ud2lubmluZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI2JhbGxvb24tZWZmZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAtMTAwJTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBiYWxsb29uLWFuaW1hdGlvbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgei1pbmRleDogMjtcbn1cblxuQGtleWZyYW1lcyBiYWxsb29uLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBib3R0b206IC0xMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJvdHRvbTogMTAwJTtcbiAgfVxufVxuLmNvbmdyYXRzLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogNjBweDtcbiAgdG9wOiA2MCU7XG4gIGJhY2tncm91bmQ6ICNiODM2MzY7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDA7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG5cbiNjb25ncmF0cy1mb250IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJCZXZhblwiO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYmFsbG9vbi1iYWNrZ3JvdW5kLWJvYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2OSU7XG4gIG1hcmdpbi10b3A6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2JhbGxvb24tYmFja2dyb3VuZC1lZmZlY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tbmFtZTogYmFsbG9vbi1iYWNrZ3JvdW5kLWFuaW1hdGlvbjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIG9wYWNpdHk6IDgwJTtcbn1cblxuQGtleWZyYW1lcyBiYWxsb29uLWJhY2tncm91bmQtYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gIH1cbiAgMjUlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgNTAlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuICA3NSUge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gIH1cbn1cbiNzdGFyLWFuaW1hdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNjZW50ZXItc3RhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAzO1xufVxuXG4uZG9uZS1idXR0b24tc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN2aWRlby1kb25lLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9wcm9ncmVzcy1zaW5nbGVwbGF5ZXIvYnV0dG9uX2JhY2tncm91bmQucG5nXCIpIDMwMHB4IDUwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOnJnYigxMTEsIDE4MiwgMTExKTtcbiAgLS1ib3JkZXItd2lkdGg6NXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm94LXNoYWRvdzogNHB4IDNweCAzcHggcmdiKDQ4LCA0NSwgNDUpO1xuICB6LWluZGV4OiA0O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiN2aWRlby1kb25lLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMTc0ZTIzO1xufVxuXG4jZG9uZS1mb250IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjNmZiNjZmO1xufSJdfQ== */";
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PlaySinglePage =
    /*#__PURE__*/
    function () {
      // ans1: number;
      function PlaySinglePage(router, route) {
        _classCallCheck(this, PlaySinglePage);

        this.router = router;
        this.route = route;
        this.prepareProgressBar();
        this.prepareQuestions();
        this.prepareCounter();
        this.cookie = this.route.snapshot.paramMap.get('cookie');
        console.log(this.cookie); // this.convertPNG();
      }

      _createClass(PlaySinglePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.questionCardEle = document.querySelector('.question-card');
          this.videoEle = document.querySelector('.video-container');
        } // main operating function for the whole process

      }, {
        key: "updateProgress",
        value: function updateProgress(userAnswer) {
          // check if the answer is correct
          if (userAnswer == this.correctAnswer) {
            // play video when needed
            this.playAudio(true);
            this.updateProgressBar();

            if (this.checkWin()) {
              return;
            }

            this.updateQuestionCard();
            this.correctCounter += 1;

            if (this.correctCounter % 3 == 0) {
              this.switchVideoQuestions(true);
            }
          } else {
            this.playAudio(false);
            this.updateQuestionCard();
            this.incorrectCounter += 1;
          }
        }
      }, {
        key: "prepareCounter",
        value: function prepareCounter() {
          this.correctCounter = 0;
          this.incorrectCounter = 0;
        }
      }, {
        key: "prepareProgressBar",
        value: function prepareProgressBar() {
          this.imgState = 0;
          this.images = ['Picture1', 'Picture2', 'Picture3', 'Picture4', 'Picture5', 'Picture6', 'Picture7', 'Picture8', 'Picture9'];
          this.pictureRef = this.images[this.imgState];
        }
      }, {
        key: "prepareQuestions",
        value: function prepareQuestions() {
          this.questionState = 0;
          this.questionArray = ['Question1', 'Question2', 'Question3', 'Question4', 'Question5']; //read from database

          this.questionCard = this.questionArray[this.questionState];
          this.answerOptions = [123, 456, 789, 112]; // read from database

          this.correctAnswer = 1; //Math.ceil(Math.random() * 4); // read from database
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
          var _this = this;

          if (this.imgState >= 8) {
            this.enableButtons(false);
            var ele1 = document.querySelector('#balloon-effect');
            var ele2 = document.querySelector('.board');
            var ele3 = document.querySelector('.winning-container');
            var ele4 = document.querySelector('.congrats-label');
            var ele5 = document.querySelector('#star-animation'); // star rain appears first

            ele5.style.visibility = "visible";
            this.questionCardEle.style.visibility = "hidden";
            this.videoEle.style.visibility = "hidden";
            this.sleep(2000).then(function () {
              ele1.style.animationPlayState = "running";
              ele2.style.visibility = "hidden";
              ele3.style.visibility = "visible";
              ele4.style.width = "100%";
            }); // redirect to play page after congrats

            this.sleep(8000).then(function () {
              ele5.style.visibility = "hidden";

              _this.router.navigateByUrl('/play/' + _this.cookie);

              return true;
            });
          }

          return false;
        } // the question card changes regardless of correctness

      }, {
        key: "updateQuestionCard",
        value: function updateQuestionCard() {
          this.questionState = ++this.questionState % this.questionArray.length;
          this.questionCard = this.questionArray[this.questionState]; // assume answerOptions has been read from database

          var correctAnswerNumber = this.answerOptions[0];
          this.answerOptions = this.shuffleAnswerOptions(this.answerOptions);
          this.correctAnswer = this.answerOptions.indexOf(correctAnswerNumber) + 1;
          console.log("correct answer is: " + this.correctAnswer);
        }
      }]);

      return PlaySinglePage;
    }();

    PlaySinglePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    PlaySinglePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-play-single',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./play-single.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play-single/play-single.page.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./play-single.page.scss */
      "./src/app/play-single/play-single.page.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], PlaySinglePage);
    /***/
  }
}]);
//# sourceMappingURL=play-single-play-single-module-es5.js.map