(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-account-my-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n  </ion-toolbar>\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@ionic/core@next/css/ionic.bundle.css\"/>\n</ion-header>\n\n<ion-content class=\"ion-content\">\n  <ion-card class=\"welcome-card\">\n    <ion-card-content>\n      <ion-card-header>\n        <ion-card-title class=\"welcome-card-title\">My Account</ion-card-title>\n      </ion-card-header>\n      <ion-item style=\"margin-top: 20px;\">\n        <ion-label style=\"width: auto !important\">Name: </ion-label>\n        <ion-input value={{user.name}} readonly style=\"text-align: left;\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Email: </ion-label>\n        <ion-input value={{user.username}} readonly style=\"text-align: left;\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>School: </ion-label>\n        <ion-input value={{user.school}} readonly style=\"text-align: left;\"></ion-input>\n      </ion-item>\n      <form [formGroup]=\"modifyDetailsFormGroup\" id=\"modForm\">\n\n      <ion-item>\n        <ion-label>Year Group</ion-label>\n        <ion-select\n        formControlName=\"year\" multiple=\"false\"\n        cancelText=\"Cancel\" okText=\"Select\" placeholder=\"{{user.year}}\">\n          <ion-select-option *ngFor=\"let year of yearGroups\" value={{year}}>\n            {{year}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Teacher</ion-label>\n        <ion-select\n        formControlName=\"teacher\" id=\"schoolSelect\"\n        multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\" placeholder=\"{{teachDef}}\">\n        <ion-select-option *ngFor=\"let teacher of teachers;\" value={{teacher.username}}>\n          {{teacher.name}}\n        </ion-select-option>\n      </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Change Password</ion-label>\n        <ion-input formControlName=\"password1\" type='password'></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Comfirm Password</ion-label>\n        <ion-input formControlName=\"password2\" type='password'></ion-input>\n      </ion-item>\n      <br>\n      <ion-button\n        (click)=\"modifyDetails()\"\n        expand='block' fill=\"clear\">\n        Confirm Changes\n      </ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/my-account/my-account-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/my-account/my-account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MyAccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPageRoutingModule", function() { return MyAccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _my_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-account.page */ "./src/app/my-account/my-account.page.ts");




const routes = [
    {
        path: '',
        component: _my_account_page__WEBPACK_IMPORTED_MODULE_3__["MyAccountPage"]
    }
];
let MyAccountPageRoutingModule = class MyAccountPageRoutingModule {
};
MyAccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyAccountPageRoutingModule);



/***/ }),

/***/ "./src/app/my-account/my-account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.module.ts ***!
  \*************************************************/
/*! exports provided: MyAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function() { return MyAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _my_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-account-routing.module */ "./src/app/my-account/my-account-routing.module.ts");
/* harmony import */ var _my_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-account.page */ "./src/app/my-account/my-account.page.ts");







let MyAccountPageModule = class MyAccountPageModule {
};
MyAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _my_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyAccountPageRoutingModule"]
        ],
        declarations: [_my_account_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountPage"]]
    })
], MyAccountPageModule);



/***/ }),

/***/ "./src/app/my-account/my-account.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/my-account/my-account.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-account/my-account.page.ts ***!
  \***********************************************/
/*! exports provided: MyAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPage", function() { return MyAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__);







let MyAccountPage = class MyAccountPage {
    constructor(nativeStorage, router, http, route, formBuilder) {
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.http = http;
        this.route = route;
        this.server = __webpack_require__(/*! ../config.json */ "./src/app/config.json").server;
        this.user = { username: "-", name: "-", school: "-", year: "-", teacher: "-" };
        this.teachers = [];
        this.teachDef = "Select.";
        // Get cookie from storage
        this.nativeStorage.getItem('cookie')
            .then((data) => { this.cookie = data.cookie; });
        // Get user from storage
        this.nativeStorage.getItem('user')
            .then((data) => {
            this.user = data;
            if (this.user.teacher) {
                ;
                document.getElementById("modForm").style.display = "none";
            }
            this.http.get(this.server + "/getTeachers?school=" + this.user.school, {}, {})
                .then(data => {
                this.teachers = JSON.parse(data.data).teachers;
                this.teachers.forEach(teacher => {
                    if (teacher.username == this.user.mTeacher) {
                        this.teachDef = teacher.name;
                    }
                });
            })
                .catch(error => {
                console.log("status", error.status);
                console.log("error", error.error);
            });
        });
        this.yearGroups = ['1', '2', '3', '4', '5', '6'];
        this.modifyDetailsFormGroup = formBuilder.group({
            password1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            year: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            teacher: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    modifyDetails() {
        const password1 = this.modifyDetailsFormGroup.value.password1;
        const password2 = this.modifyDetailsFormGroup.value.password2;
        console.log("teacher", this.modifyDetailsFormGroup.value);
        const credentials = {
            year: this.modifyDetailsFormGroup.value.year,
            mTeacher: this.modifyDetailsFormGroup.value.teacher,
            cookie: this.cookie,
            password: ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__["Md5"].hashStr(password1),
        };
        if ((password1 == password2 && password1.length > 7) || (password1.length == 0 && password2.length == 0)) {
            // console.log(credentials)
            this.http.setDataSerializer('json');
            this.http.post(this.server + "/modifyDetails", credentials, { 'Content-Type': 'application/json' })
                .then(data => {
                var year;
                var mTeacher;
                if (!this.modifyDetailsFormGroup.value.year) {
                    year = this.user.year;
                }
                else {
                    year = this.modifyDetailsFormGroup.value.year;
                }
                if (!this.modifyDetailsFormGroup.value.teacher) {
                    mTeacher = this.user.mTeacher;
                }
                else {
                    mTeacher = this.modifyDetailsFormGroup.value.teacher;
                }
                this.nativeStorage.setItem('user', {
                    username: this.user.username,
                    name: this.user.name,
                    school: this.user.school,
                    year: year,
                    mTeacher: mTeacher,
                    teacher: this.user.teacher,
                    points: this.user.points,
                })
                    .then(() => {
                    // console.log("got to play")
                    this.router.navigate(['/play']);
                    this.presentAlert("Success!", "");
                }, () => this.presentAlert("Internal Storage", "Error updating details internally."));
            })
                .catch(error => {
                console.log("error here", error.error);
                this.presentAlert("Connection", "Error updating details to the internet.");
            });
        }
        else {
            // error!!!
            this.presentAlert("Password", "Please choose a more secure password.");
        }
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
MyAccountPage.ctorParameters = () => [
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
MyAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-my-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-account.page.scss */ "./src/app/my-account/my-account.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], MyAccountPage);



/***/ })

}]);
//# sourceMappingURL=my-account-my-account-module-es2015.js.map