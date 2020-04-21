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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-content\">\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title class=\"welcome-card-title\">Play</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div id=\"play-single\">\n        <img class=\"icon\" src=\"/assets/icon/person-icon.svg\"/>\n        <br>\n        <ion-button expand=\"block\" fill=\"clear\">\n          Single Player\n        </ion-button>\n      </div>\n\n      <div id=\"play-multi\">\n        <img class=\"icon\" src=\"/assets/icon/people-icon.svg\" />\n        <br>\n        <ion-button expand=\"block\" fill=\"clear\">\n          Head-to-Head\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- routerLink=\"../leaderboard\"\n  routerDirection=\"forward\" -->\n\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title class=\"welcome-card-title\">My Acheivements</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <img class=\"icon\" style=\"width: 20%\" src=\"/assets/icon/trophy.svg\" alt=\"\"/>\n      <br><p> Get Playing to Earn Acheivements...</p>\n    </ion-card-content>\n  </ion-card>\n    <ion-card class=\"welcome-card\">\n      <ion-card-content>\n        <ion-button\n        expand=\"block\"\n        fill=\"clear\"\n        (click)=\"navigate()\">\n          My Account\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n";
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _play_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./play.page */
    "./src/app/play/play.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(router, route) {
        _classCallCheck(this, HomePage);

        this.router = router;
        this.route = route;
        this.messageFromChild = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // this.messageFromChild.emit('Message from child');
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // Navigate to subject-select page and pass gamemode information base on which div pressed
          var divSingle = document.getElementById("play-single");
          var divMulti = document.getElementById("play-multi");
          divSingle.addEventListener('click', function () {
            return _this.router.navigate(['/subject-select', 0, _this.cookie]);
          });
          divMulti.addEventListener('click', function () {
<<<<<<< HEAD
            return _this.router.navigate(['/subject-select', 1]);
          }); // this.cookie = this.route.snapshot.paramMap.get('cookie');
          // console.log(this.cookie);
=======
            return _this.router.navigate(['/subject-select', 1, _this.cookie]);
          });
          this.cookie = this.route.snapshot.paramMap.get('cookie');
          console.log(this.cookie);
>>>>>>> save-cookie
        }
      }, {
        key: "navigate",
        value: function navigate() {
<<<<<<< HEAD
          this.router.navigateByUrl('my-account');
=======
          this.router.navigateByUrl('my-account/' + this.cookie);
>>>>>>> save-cookie
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], HomePage.prototype, "messageFromChild", void 0);
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-play',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./play.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play/play.page.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./play.page.scss */
      "./src/app/play/play.page.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=play-play-module-es5.js.map