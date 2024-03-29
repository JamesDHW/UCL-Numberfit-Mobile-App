(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leaderboard-leaderboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/leaderboard/leaderboard.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leaderboard/leaderboard.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><img src=\"/assets/NumberfitLogo.png\"/></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-content\" id='students'>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title class=\"welcome-card-title\">Leaderboard</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <div align=\"center\">\n          <h3 id=\"myScore\">My Score: {{points}} points</h3>\n        </div>\n        <ion-list *ngFor=\"let user of users; index as i\">\n          <ion-item>\n            <ion-label slot=\"start\">{{i+1}}</ion-label>\n            <ion-input value={{user.name}} readonly style=\"text-align: left;\"></ion-input>\n            <ion-label slot=\"end\" style=\"text-align: left;\">{{user.score}}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n\n    </ion-card>\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/config.json":
/*!*****************************!*\
  !*** ./src/app/config.json ***!
  \*****************************/
/*! exports provided: server, bucket, use_int_cards_above_points, use_adv_cards_above_points, master_above_games_played, expert_above_games_played, advanced_above_games_played, novice_above_games_played, nf_rank1_above, nf_rank2_above, nf_rank3_above, nf_rank1_title, nf_rank2_title, nf_rank3_title, nf_rank4_title, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"server\":\"http://primaryapp-env.eba-rer8nine.us-west-2.elasticbeanstalk.com\",\"bucket\":\"https://primary-app-resources.s3.eu-west-2.amazonaws.com\",\"use_int_cards_above_points\":150,\"use_adv_cards_above_points\":300,\"master_above_games_played\":50,\"expert_above_games_played\":30,\"advanced_above_games_played\":15,\"novice_above_games_played\":5,\"nf_rank1_above\":250,\"nf_rank2_above\":150,\"nf_rank3_above\":50,\"nf_rank1_title\":\"Number-Master\",\"nf_rank2_title\":\"Math-Wiz\",\"nf_rank3_title\":\"Math-Hero\",\"nf_rank4_title\":\"Number-Novice\"}");

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.module.ts":
/*!***************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _leaderboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaderboard.page */ "./src/app/leaderboard/leaderboard.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _leaderboard_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_leaderboard_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/leaderboard/leaderboard.page.scss":
/*!***************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lcy9naXRodWIvTnVtYmVyZml0L051bWJlcmZpdC9zcmMvYXBwL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.page.ts":
/*!*************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.page.ts ***!
  \*************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");






let HomePage = class HomePage {
    constructor(screenOrientation, nativeStorage, http, router) {
        this.screenOrientation = screenOrientation;
        this.nativeStorage = nativeStorage;
        this.http = http;
        this.router = router;
        this.server = __webpack_require__(/*! ../config.json */ "./src/app/config.json").server;
        this.points = 0;
        // lock screen portrait
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        // Get cookie from storage
        this.nativeStorage.getItem('cookie')
            .then((data) => { this.cookie = data.cookie; });
        // Get user
        this.nativeStorage.getItem('user')
            .then((data) => {
            this.user = data;
            this.points = data.points;
            if (this.user.teacher) {
                document.getElementById("myScore").style.visibility = "hidden";
            }
            // Get top scores from given school
            this.http.get(this.server + "/leaderboard?school=" + this.user.school + "&cookie=" + this.cookie, {}, {})
                .then(data => {
                // Need to do a request which returns {user : [{user1...}]}
                this.users = JSON.parse(data.data).scores;
            })
                .catch(error => {
                console.log("status", error.status);
                console.log("error", error.error);
                this.router.navigate(['/play']);
                this.presentAlert("Connection", "Error retrieving leaderboard.");
            });
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
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["ScreenOrientation"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leaderboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leaderboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/leaderboard/leaderboard.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leaderboard.page.scss */ "./src/app/leaderboard/leaderboard.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["ScreenOrientation"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=leaderboard-leaderboard-module-es2015.js.map