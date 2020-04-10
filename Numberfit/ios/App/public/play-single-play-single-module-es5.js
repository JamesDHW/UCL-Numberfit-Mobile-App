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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-content\">\n  <ion-card class=\"card\">\n    <ion-card-content>\n    </ion-card-content>\n  </ion-card>\n  <section>\n    <img src=\"/assets/progress-singleplayer/{{pictureRef}}\" style=\"padding: 10px\"/>\n  </section>\n  <section>\n    <ion-row class=\"choice-row\">\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress()\">\n          <span class=\"font\">5</span>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress()\">\n          <span class=\"font\">8</span>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"choice-row\">\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress()\">\n          <span class=\"font\">10</span>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"choice-section\">\n        <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgress()\">\n          <span class=\"font\">6</span>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </section>\n</ion-content>\n";
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


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Bevan);\n.card {\n  background: #fff;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-bottom: 60%;\n  opacity: 30%;\n}\n.card-title {\n  font-size: 12px;\n  padding-top: 10px;\n  padding-left: 10px;\n  margin: 0;\n}\n.ion-content {\n  --background: url(\"/assets/progress-singleplayer/background_image.jpg\") 100% 100%;\n}\n.choice-section {\n  size: \"6\";\n  text-align: center;\n}\n.choice-button {\n  width: 120px;\n  height: 70px;\n  --border-color:white;\n  --box-shadow: 2px 2px 2px black;\n}\n.choice-button:active {\n  margin-top: 3px;\n  --box-shadow: none;\n}\n.choice-button:hover {\n  color: black;\n}\n.choice-row {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n.font {\n  font-family: \"Bevan\";\n  font-size: 50px;\n  font-weight: 400;\n  line-height: 130px;\n  color: #f7e226;\n  text-align: center;\n  width: 260px;\n  text-shadow: 1px 1px 1px #000, 3px 3px 5px #000;\n  display: inline-block;\n  -ms-transform: rotate(25deg);\n  -webkit-transform: rotate(10deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lcy9naXRodWIvTnVtYmVyZml0L051bWJlcmZpdC9zcmMvYXBwL3BsYXktc2luZ2xlL3BsYXktc2luZ2xlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGxheS1zaW5nbGUvcGxheS1zaW5nbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDBEQUFBO0FBQ1I7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDRjtBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7QURFQTtFQUNFLGlGQUFBO0FDQ0Y7QURFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0VBR0EsK0JBQUE7QUNIRjtBRElFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDRko7QURNQTtFQUNFLFlBQUE7QUNIRjtBRE1BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDSEY7QURNQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBRUEsK0NBQUE7RUFHQSxxQkFBQTtFQUdBLDRCQUFBO0VBR0EsZ0NBQUE7QUNYRiIsImZpbGUiOiJzcmMvYXBwL3BsYXktc2luZ2xlL3BsYXktc2luZ2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CZXZhbik7XG4uY2FyZHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgcGFkZGluZy1ib3R0b206IDYwJTtcbiAgb3BhY2l0eTogMzAlO1xufVxuXG4uY2FyZC10aXRsZXtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvcHJvZ3Jlc3Mtc2luZ2xlcGxheWVyL2JhY2tncm91bmRfaW1hZ2UuanBnJykgMTAwJSAxMDAlO1xufVxuXG4uY2hvaWNlLXNlY3Rpb257XG4gIHNpemU6IFwiNlwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaG9pY2UtYnV0dG9ue1xuICAvLyBzaXplOiBsYXJnZTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIC8vIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOndoaXRlO1xuICAvLyBzaGFwZS1vdXRzaWRlOiByb3VuZDtcbiAgLy8gb3BhY2l0eTogMCU7XG4gIC0tYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XG4gICY6YWN0aXZlIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICB9XG59XG5cbi5jaG9pY2UtYnV0dG9uOmhvdmVye1xuICBjb2xvcjpibGFjaztcbn1cblxuLmNob2ljZS1yb3d7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmZvbnR7XG4gIGZvbnQtZmFtaWx5OiBcIkJldmFuXCI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEzMHB4O1xuICBjb2xvcjogcmdiKDI0NywgMjI2LCAzOCk7XG4gIC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI2MHB4O1xuICAvLyBtYXJnaW46IDc1cHggYXV0byAwO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMCwgM3B4IDNweCA1cHggIzAwMDsgXG4gIC8vIHRleHQtc2hhZG93OiBcbiAgLy8gICAwcHggMHB4IDAgcmdiKC0xNCwxNDQsNDEpLC0xcHggMXB4IDAgcmdiKC0xOSwxMzksMzYpLC0ycHggMnB4IDAgcmdiKC0yMywxMzUsMzIpLC0zcHggM3B4IDAgcmdiKC0yNywxMzEsMjgpLC00cHggNHB4IDAgcmdiKC0zMiwxMjYsMjMpLC01cHggNXB4IDAgcmdiKC0zNiwxMjIsMTkpLC02cHggNnB4IDAgcmdiKC00MCwxMTgsMTUpLC03cHggN3B4IDAgcmdiKC00NSwxMTMsMTApLC04cHggOHB4IDAgcmdiKC00OSwxMDksNiksLTlweCA5cHggMCByZ2IoLTUzLDEwNSwyKSwtMTBweCAxMHB4IDAgcmdiKC01OCwxMDAsLTMpLC0xMXB4IDExcHggMCByZ2IoLTYyLDk2LC03KSwtMTJweCAxMnB4IDAgcmdiKC02Nyw5MSwtMTIpLC0xM3B4IDEzcHggMCByZ2IoLTcxLDg3LC0xNiksLTE0cHggMTRweCAwIHJnYigtNzUsODMsLTIwKSwtMTVweCAxNXB4IDAgcmdiKC04MCw3OCwtMjUpLC0xNnB4IDE2cHggMCByZ2IoLTg0LDc0LC0yOSksLTE3cHggMTdweCAwIHJnYigtODgsNzAsLTMzKSwtMThweCAxOHB4IDAgcmdiKC05Myw2NSwtMzgpLC0xOXB4IDE5cHggMCByZ2IoLTk3LDYxLC00MiksIC0yMHB4IDIwcHggMCByZ2IoLTEwMSw1NywtNDYpOyAgIFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIC8vIG1hcmdpbi1yaWdodDogMTRweDtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcbiAgLy8gLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XG4gIC8vIC1vLXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xufSIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CZXZhbik7XG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIHBhZGRpbmctYm90dG9tOiA2MCU7XG4gIG9wYWNpdHk6IDMwJTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3Byb2dyZXNzLXNpbmdsZXBsYXllci9iYWNrZ3JvdW5kX2ltYWdlLmpwZ1wiKSAxMDAlIDEwMCU7XG59XG5cbi5jaG9pY2Utc2VjdGlvbiB7XG4gIHNpemU6IFwiNlwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaG9pY2UtYnV0dG9uIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOndoaXRlO1xuICAtLWJveC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xufVxuLmNob2ljZS1idXR0b246YWN0aXZlIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jaG9pY2UtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2hvaWNlLXJvdyB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmZvbnQge1xuICBmb250LWZhbWlseTogXCJCZXZhblwiO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMzBweDtcbiAgY29sb3I6ICNmN2UyMjY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI2MHB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMCwgM3B4IDNweCA1cHggIzAwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbn0iXX0= */";
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

    var PlaySinglePage = /*#__PURE__*/function () {
      function PlaySinglePage() {
        _classCallCheck(this, PlaySinglePage);

        this.imgState = 0;
        this.images = ['Picture1', 'Picture2', 'Picture3', 'Picture4', 'Picture5', 'Picture6', 'Picture7', 'Picture8', 'Picture9'];
        this.pictureRef = this.images[this.imgState] + '.png';
      }

      _createClass(PlaySinglePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateProgress",
        value: function updateProgress() {
          this.imgState = ++this.imgState % this.images.length;
          this.pictureRef = this.images[this.imgState] + '.png';
        }
      }]);

      return PlaySinglePage;
    }();

    PlaySinglePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-play-single',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./play-single.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play-single/play-single.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./play-single.page.scss */
      "./src/app/play-single/play-single.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PlaySinglePage);
    /***/
  }
}]);
//# sourceMappingURL=play-single-play-single-module-es5.js.map