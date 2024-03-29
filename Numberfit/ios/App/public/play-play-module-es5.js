function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["play-play-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/play/play.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/play.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayPlayPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-content\">\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title class=\"welcome-card-title\">Play</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div id=\"play-single\">\n        <img class=\"icon\" src=\"/assets/icon/person-icon.svg\"/>\n        <br>\n        <ion-button expand=\"block\" fill=\"clear\">\n          Single Player\n        </ion-button>\n      </div>\n\n      <div id=\"play-multi\">\n        <img class=\"icon\" src=\"/assets/icon/people-icon.svg\" />\n        <br>\n        <ion-button expand=\"block\" fill=\"clear\">\n          Head-to-Head\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title class=\"welcome-card-title\">Numberfit Rank</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <img class=\"icon\" style=\"width: 35%\" src=\"{{rankImage}}\" alt=\"\"/>\n      <ion-card-title class=\"welcome-card-title\">{{rank}}</ion-card-title>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
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
  "./src/app/play/play.module.ts":
  /*!*************************************!*\
    !*** ./src/app/play/play.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPlayPlayModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _play_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./play.page */
    "./src/app/play/play.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _play_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_play_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/play/play.page.scss":
  /*!*************************************!*\
    !*** ./src/app/play/play.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayPlayPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.icon {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lcy9naXRodWIvTnVtYmVyZml0L051bWJlcmZpdC9zcmMvYXBwL3BsYXkvcGxheS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BsYXkvcGxheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BsYXkvcGxheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MCVcbn1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmljb24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/play/play.page.ts":
  /*!***********************************!*\
    !*** ./src/app/play/play.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPlayPlayPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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

    var HomePage = /*#__PURE__*/function () {
      function HomePage(screenOrientation, router, http, nativeStorage) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.screenOrientation = screenOrientation;
        this.router = router;
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.rank = "Loading";
        this.rankImage = "./assets/icon/trophy.svg";
        this.messageFromChild = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // lock screen portrait

        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT); // Get server from config file

        this.server = __webpack_require__(
        /*! ../config.json */
        "./src/app/config.json").server; // Get cookie from storage

        this.nativeStorage.getItem('cookie').then(function (data) {
          _this.cookie = data.cookie;
        });
        this.nativeStorage.getItem('user').then(function (data) {
          _this.user = data;

          if (_this.user.points > __webpack_require__(
          /*! ../config.json */
          "./src/app/config.json").nf_rank1_above) {
            _this.rank = __webpack_require__(
            /*! ../config.json */
            "./src/app/config.json").nf_rank1_title;
            _this.rankImage = "./assets/score/master.png";
          } else if (_this.user.points > __webpack_require__(
          /*! ../config.json */
          "./src/app/config.json").nf_rank2_above) {
            _this.rank = __webpack_require__(
            /*! ../config.json */
            "./src/app/config.json").nf_rank2_title;
            _this.rankImage = "./assets/score/expert.png";
          } else if (_this.user.points > __webpack_require__(
          /*! ../config.json */
          "./src/app/config.json").nf_rank3_above) {
            _this.rank = __webpack_require__(
            /*! ../config.json */
            "./src/app/config.json").nf_rank3_title;
            _this.rankImage = "./assets/score/advanced.png";
          } else {
            _this.rank = __webpack_require__(
            /*! ../config.json */
            "./src/app/config.json").nf_rank4_title;
            _this.rankImage = "./assets/score/novice.png";
          }

          if (_this.user.teacher) {
            _this.rank = "Teacher";
            _this.rankImage = "./assets/score/graduate.png";
          }
        });
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // Navigate to subject-select page and pass gamemode information base on which div pressed
          var divSingle = document.getElementById("play-single");
          var divMulti = document.getElementById("play-multi");
          divSingle.addEventListener('click', function () {
            return _this2.router.navigate(['/subject-select', 0]);
          });
          divMulti.addEventListener('click', function () {
            return _this2.router.navigate(['/subject-select', 1]);
          });
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

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["ScreenOrientation"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HomePage.prototype, "messageFromChild", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-play',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./play.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play/play.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./play.page.scss */
      "./src/app/play/play.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["ScreenOrientation"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=play-play-module-es5.js.map