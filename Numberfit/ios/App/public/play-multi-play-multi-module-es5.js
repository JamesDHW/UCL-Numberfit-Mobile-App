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


    __webpack_exports__["default"] = "<ion-header>\n</ion-header>\n\n<ion-content class=\"ion-multi-content\">\n  <ion-row>\n    <ion-col size=\"10\">\n      <section>\n        <ion-row class=\"choice-row\">\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgressTop()\">\n              <span class=\"font\">5</span>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgressTop()\">\n              <span class=\"font\">8</span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"choice-row\">\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgressTop()\">\n              <span class=\"font\">10</span>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgressTop()\">\n              <span class=\"font\">6</span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </section>\n      <ion-card class=\"card-rotate\">\n        <ion-card-content>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"2\" class=\"top-right-progress-bar\">\n      <img src=\"/assets/progress-multiplayer/{{top_right}}.png\"/>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"middle-progress-section\">\n    <ion-col size=\"5\" class=\"middle-progress-bar-left\">\n      <img src=\"/assets/progress-multiplayer/{{middle_left}}.png\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"middle-center\">\n      <img src=\"/assets/progress-multiplayer/{{middle_center}}.png\"/>\n    </ion-col>\n    <ion-col size=\"5\" class=\"middle-progress-bar-right\">\n      <img src=\"/assets/progress-multiplayer/{{middle_right}}.png\"/>\n    </ion-col>\n  </ion-row>\n  <!-- <section class=\"section\">\n    <img src=\"/assets/progress-multiplayer/Picture1.png\"/>\n  </section> -->\n  <ion-row>\n    <ion-col size=\"2\" class=\"bottom-left-progress-bar\">\n      <img src=\"/assets/progress-multiplayer/{{bottom_left}}.png\"/>\n    </ion-col>\n    <ion-col size=\"10\" >\n      <ion-card class=\"card\">\n        <ion-card-content>\n        </ion-card-content>\n      </ion-card>\n      <section>\n        <ion-row class=\"choice-row\">\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgressBottom()\">\n              <span class=\"font\">5</span>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgressBottom()\">\n              <span class=\"font\">8</span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"choice-row\">\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgressBottom()\">\n              <span class=\"font\">10</span>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgressBottom()\">\n              <span class=\"font\">6</span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </section>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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

    PlayMultiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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

    PlayMultiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Bevan);\n.ion-multi-content {\n  --background: url(\"/assets/progress-singleplayer/background_image.jpg\") 100% 100%;\n}\nion-row {\n  height: 45%;\n}\n.card {\n  background: #fff;\n  width: 90%;\n  height: 150px;\n  opacity: 30%;\n}\n.middle-progress-section {\n  height: 7%;\n}\n.middle-progress-bar-left {\n  margin-top: 5px;\n}\n.middle-progress-bar-right {\n  margin-bottom: 6px;\n  transform: rotate(180deg);\n}\n.choice-section {\n  size: \"6\";\n  text-align: center;\n}\n.choice-button {\n  width: 100px;\n  height: 30px;\n  --border-color:white;\n  --box-shadow: 2px 2px 2px black;\n}\n.choice-button:active {\n  margin-top: 3px;\n  --box-shadow: none;\n}\n.font {\n  font-family: \"Bevan\";\n  font-size: 20px;\n  color: #f7e226;\n  text-align: center;\n  text-shadow: 1px 1px 1px #000, 3px 3px 5px #000;\n  display: inline-block;\n  -ms-transform: rotate(25deg);\n  -webkit-transform: rotate(10deg);\n}\n.bottom-left-progress-bar {\n  margin-top: 5px;\n}\n.top-right-progress-bar {\n  margin-bottom: 5px;\n  transform: rotate(180deg);\n}\n.choice-button-rotate {\n  width: 100px;\n  height: 30px;\n  --border-color:white;\n  --box-shadow: 2px 2px 2px black;\n  transform: rotate(180deg);\n}\n.choice-button-rotate:active {\n  margin-top: 3px;\n  --box-shadow: none;\n}\n.card-rotate {\n  background: #fff;\n  width: 90%;\n  height: 150px;\n  opacity: 30%;\n  transform: rotate(180deg);\n}\n.middle-center {\n  -webkit-animation-duration: 6s;\n          animation-duration: 6s;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes example {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(1800deg);\n  }\n}\n@keyframes example {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(1800deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lcy9naXRodWIvTnVtYmVyZml0L051bWJlcmZpdC9zcmMvYXBwL3BsYXktbXVsdGkvcGxheS1tdWx0aS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BsYXktbXVsdGkvcGxheS1tdWx0aS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMERBQUE7QUFFUjtFQUNJLGlGQUFBO0FDQUo7QURPQTtFQUNJLFdBQUE7QUNKSjtBRE9BO0VBQ0UsZ0JBQUE7RUFHQSxVQUFBO0VBQ0EsYUFBQTtFQUlBLFlBQUE7QUNURjtBRGtCQTtFQUNJLFVBQUE7QUNmSjtBRG9CQTtFQUNJLGVBQUE7QUNqQko7QURvQkE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDakJKO0FEb0JBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0FDakJKO0FEb0JBO0VBRUksWUFBQTtFQUNBLFlBQUE7RUFFQSxvQkFBQTtFQUdBLCtCQUFBO0FDckJKO0FEc0JJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDcEJSO0FEd0JBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBR0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsK0NBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7QUN4Qko7QUQyQkE7RUFDSSxlQUFBO0FDeEJKO0FENEJBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQ3pCSjtBRDRCQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtFQUtBLHlCQUFBO0FDN0JKO0FEeUJJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDdkJSO0FENEJBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ3pCSjtBRDRCQTtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ3pCSjtBRDJCQTtFQUNJO0lBQU0sdUJBQUE7RUN2QlI7RUR3QkU7SUFBTSwwQkFBQTtFQ3JCUjtBQUNGO0FEa0JBO0VBQ0k7SUFBTSx1QkFBQTtFQ3ZCUjtFRHdCRTtJQUFNLDBCQUFBO0VDckJSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wbGF5LW11bHRpL3BsYXktbXVsdGkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJldmFuKTtcblxuLmlvbi1tdWx0aS1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3Byb2dyZXNzLXNpbmdsZXBsYXllci9iYWNrZ3JvdW5kX2ltYWdlLmpwZycpIDEwMCUgMTAwJTtcbiAgfVxuXG4vLyAgIC5yb3ctc3RydWN0dXJle1xuLy8gICAgIC0taW9uLWdyaWQtaGVpZ2h0OiA5MCU7XG4vLyAgIH1cblxuaW9uLXJvdyB7XG4gICAgaGVpZ2h0OiA0NSU7XG59XG5cbi5jYXJke1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuLy8gICBtYXJnaW4tdG9wOiA1JTtcbi8vICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTUwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogNSU7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuLy8gICBwYWRkaW5nLWJvdHRvbTogNTAlO1xuICBvcGFjaXR5OiAzMCU7XG59XG5cbi8vIC5zZWN0aW9ue1xuLy8gICAgIGhlaWdodDogNyU7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuLy8gICAgIG1hcmdpbi1yaWdodDogNSU7XG4vLyB9XG5cbi5taWRkbGUtcHJvZ3Jlc3Mtc2VjdGlvbntcbiAgICBoZWlnaHQ6IDclO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDMlO1xufVxuXG4ubWlkZGxlLXByb2dyZXNzLWJhci1sZWZ0e1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1pZGRsZS1wcm9ncmVzcy1iYXItcmlnaHR7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcbn1cblxuLmNob2ljZS1zZWN0aW9ue1xuICAgIHNpemU6IFwiNlwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4uY2hvaWNlLWJ1dHRvbntcbiAgICAvLyBzaXplOiBsYXJnZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIC8vIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLS1ib3JkZXItY29sb3I6d2hpdGU7XG4gICAgLy8gc2hhcGUtb3V0c2lkZTogcm91bmQ7XG4gICAgLy8gb3BhY2l0eTogMCU7XG4gICAgLS1ib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuXG4uZm9udHtcbiAgICBmb250LWZhbWlseTogXCJCZXZhblwiO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvLyBmb250LXdlaWdodDogNDAwO1xuICAgIC8vIGxpbmUtaGVpZ2h0OiAxMzBweDtcbiAgICBjb2xvcjogcmdiKDI0NywgMjI2LCAzOCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIHdpZHRoOiAyNjBweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMCwgM3B4IDNweCA1cHggIzAwMDsgIFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xufVxuXG4uYm90dG9tLWxlZnQtcHJvZ3Jlc3MtYmFye1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4udG9wLXJpZ2h0LXByb2dyZXNzLWJhcntcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNob2ljZS1idXR0b24tcm90YXRle1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgLS1ib3JkZXItY29sb3I6d2hpdGU7XG4gICAgLS1ib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uY2FyZC1yb3RhdGV7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgb3BhY2l0eTogMzAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5taWRkbGUtY2VudGVye1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNnM7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xuICAgIDAlICAge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cbiAgICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjAqNWRlZyk7fVxufSIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CZXZhbik7XG4uaW9uLW11bHRpLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvcHJvZ3Jlc3Mtc2luZ2xlcGxheWVyL2JhY2tncm91bmRfaW1hZ2UuanBnXCIpIDEwMCUgMTAwJTtcbn1cblxuaW9uLXJvdyB7XG4gIGhlaWdodDogNDUlO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIG9wYWNpdHk6IDMwJTtcbn1cblxuLm1pZGRsZS1wcm9ncmVzcy1zZWN0aW9uIHtcbiAgaGVpZ2h0OiA3JTtcbn1cblxuLm1pZGRsZS1wcm9ncmVzcy1iYXItbGVmdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1pZGRsZS1wcm9ncmVzcy1iYXItcmlnaHQge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5jaG9pY2Utc2VjdGlvbiB7XG4gIHNpemU6IFwiNlwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaG9pY2UtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOndoaXRlO1xuICAtLWJveC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xufVxuLmNob2ljZS1idXR0b246YWN0aXZlIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5mb250IHtcbiAgZm9udC1mYW1pbHk6IFwiQmV2YW5cIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2Y3ZTIyNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMCwgM3B4IDNweCA1cHggIzAwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbn1cblxuLmJvdHRvbS1sZWZ0LXByb2dyZXNzLWJhciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnRvcC1yaWdodC1wcm9ncmVzcy1iYXIge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5jaG9pY2UtYnV0dG9uLXJvdGF0ZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICAtLWJvcmRlci1jb2xvcjp3aGl0ZTtcbiAgLS1ib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5jaG9pY2UtYnV0dG9uLXJvdGF0ZTphY3RpdmUge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNhcmQtcm90YXRlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3BhY2l0eTogMzAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4ubWlkZGxlLWNlbnRlciB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNnM7XG4gIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBleGFtcGxlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MDBkZWcpO1xuICB9XG59Il19 */";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PlayMultiPage = /*#__PURE__*/function () {
      function PlayMultiPage(router, activatedRoute) {
        _classCallCheck(this, PlayMultiPage);

        this.router = router;
        this.activatedRoute = activatedRoute;
      }

      _createClass(PlayMultiPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var subject = this.activatedRoute.snapshot.paramMap.get("subject");
          console.log(subject); //progress bar

          this.lion_progress = 0;
          this.tiger_progress = 0;
          this.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          this.top_right = 'tiger' + this.images[this.tiger_progress];
          this.bottom_left = 'lion' + this.images[this.lion_progress];
          this.middle_right = 'tiger' + this.images[9];
          this.middle_left = 'lion' + this.images[9];
          this.middle_center = 'middle-center';
        }
      }, {
        key: "updateProgressTop",
        value: function updateProgressTop() {
          this.tiger_progress = ++this.tiger_progress % this.images.length;

          if (this.tiger_progress <= 5) {
            this.top_right = 'tiger' + this.images[this.tiger_progress];
            this.middle_right = 'tiger' + this.images[9];
          } else {
            this.top_right = 'tiger0';
            this.middle_right = 'tiger' + this.images[this.tiger_progress];
          }
        }
      }, {
        key: "updateProgressBottom",
        value: function updateProgressBottom() {
          this.lion_progress = ++this.lion_progress % this.images.length;

          if (this.lion_progress <= 5) {
            this.bottom_left = 'lion' + this.images[this.lion_progress];
            this.middle_left = 'lion' + this.images[9];
          } else {
            this.bottom_left = 'lion0';
            this.middle_left = 'lion' + this.images[this.lion_progress];
          }
        }
      }]);

      return PlayMultiPage;
    }();

    PlayMultiPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    PlayMultiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-play-multi',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./play-multi.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play-multi/play-multi.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./play-multi.page.scss */
      "./src/app/play-multi/play-multi.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], PlayMultiPage);
    /***/
  }
}]);
//# sourceMappingURL=play-multi-play-multi-module-es5.js.map