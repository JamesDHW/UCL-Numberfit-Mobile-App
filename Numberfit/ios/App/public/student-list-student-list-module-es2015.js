(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-list-student-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-list/student-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-list/student-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-content\">\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title id=\"title\" class=\"welcome-card-title\">Student List</ion-card-title>\n    </ion-card-header>\n      <ion-radio-group\n      id=\"radio-group\"\n      allow-empty-selection=“false”\n      *ngFor=\"let student of studentList\">\n      <ion-item>\n        <ion-label>{{student}}</ion-label>\n        <ion-radio id={{student}} slot=\"end\" (click)=onSelect(student)></ion-radio>\n      </ion-item>\n      </ion-radio-group>\n    <ion-button id=\"btn-play\" expand=\"block\" fill=\"clear\">\n      Check Student Progress\n    </ion-button>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/student-list/student-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/student-list/student-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: StudentListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListPageRoutingModule", function() { return StudentListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _student_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-list.page */ "./src/app/student-list/student-list.page.ts");




const routes = [
    {
        path: '',
        component: _student_list_page__WEBPACK_IMPORTED_MODULE_3__["StudentListPage"]
    }
];
let StudentListPageRoutingModule = class StudentListPageRoutingModule {
};
StudentListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StudentListPageRoutingModule);



/***/ }),

/***/ "./src/app/student-list/student-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/student-list/student-list.module.ts ***!
  \*****************************************************/
/*! exports provided: StudentListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListPageModule", function() { return StudentListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _student_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-list-routing.module */ "./src/app/student-list/student-list-routing.module.ts");
/* harmony import */ var _student_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-list.page */ "./src/app/student-list/student-list.page.ts");







let StudentListPageModule = class StudentListPageModule {
};
StudentListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _student_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentListPageRoutingModule"]
        ],
        declarations: [_student_list_page__WEBPACK_IMPORTED_MODULE_6__["StudentListPage"]]
    })
], StudentListPageModule);



/***/ }),

/***/ "./src/app/student-list/student-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/student-list/student-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/student-list/student-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/student-list/student-list.page.ts ***!
  \***************************************************/
/*! exports provided: StudentListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListPage", function() { return StudentListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let StudentListPage = class StudentListPage {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.requestStudentList();
    }
    ngOnInit() {
        var xhttpDetails = new XMLHttpRequest();
        let DOM = this;
        xhttpDetails.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("GET details request succeeded");
                DOM.studentList = JSON.parse(this.responseText);
            }
            else if (this.status != 200) {
                console.log("GET request failed with satus " + this.status);
                DOM.studentList = ["Amy", "Bobbi", "Candy", "David"];
            }
        };
        // Define and send the GET request
        xhttpDetails.open("GET", "http://localhost:3000/studentList?cookie=5e9445193c9c966ce1dcbac6", true);
        xhttpDetails.send();
    }
    onSelect(student) {
        // this.studentID = student;
        console.log(student);
        let DOM = this;
        // DOM.router.navigate(['/leaderboard', DOM.studentID]);
    }
    ;
    requestStudentList() {
        var DOM = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const cookie = JSON.parse(this.responseText).success;
                console.log(cookie);
<<<<<<< HEAD
                DOM.router.navigate(['/leaderboard']);
=======
                DOM.router.navigate(['/leaderboard'], cookie);
>>>>>>> save-cookie
            }
            else if (this.status != 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("POST", "http://localhost:3000/myDetails", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
    }
};
StudentListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
StudentListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./student-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-list/student-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./student-list.page.scss */ "./src/app/student-list/student-list.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], StudentListPage);



/***/ })

}]);
//# sourceMappingURL=student-list-student-list-module-es2015.js.map