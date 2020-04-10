(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subject-select-subject-select-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject-select/subject-select.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subject-select/subject-select.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-content\">\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title id=\"title\" class=\"welcome-card-title\">Subject Select</ion-card-title>\n    </ion-card-header>\n      <ion-radio-group\n      id=\"radio-group\"\n      allow-empty-selection=“false”\n      *ngFor=\"let sub of subjects.availableTopics\">\n      <ion-item>\n        <ion-label>{{sub.Topic}}</ion-label>\n        <ion-radio slot='end' (click)=onSelect(sub.Topic)></ion-radio>\n      </ion-item>\n      </ion-radio-group>\n    <ion-button id=\"btn-play\" expand=\"block\" fill=\"clear\">\n      Play Selected Subject\n    </ion-button>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/subject-select/default_subjects.json":
/*!******************************************************!*\
  !*** ./src/app/subject-select/default_subjects.json ***!
  \******************************************************/
/*! exports provided: availableTopics, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"availableTopics\":[{\"Topic\":\"Addition\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Subtraction\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Multiplication\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Division\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"PlaceValue\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Decimals\",\"availableYears\":[4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Length\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Time\",\"availableYears\":[1,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Fractions\",\"availableYears\":[1,2,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"FractionsOperations\",\"availableYears\":[5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]}]}");

/***/ }),

/***/ "./src/app/subject-select/subject-select-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/subject-select/subject-select-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SubjectSelectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSelectPageRoutingModule", function() { return SubjectSelectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _subject_select_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subject-select.page */ "./src/app/subject-select/subject-select.page.ts");




const routes = [
    {
        path: '',
        component: _subject_select_page__WEBPACK_IMPORTED_MODULE_3__["SubjectSelectPage"]
    }
];
let SubjectSelectPageRoutingModule = class SubjectSelectPageRoutingModule {
};
SubjectSelectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubjectSelectPageRoutingModule);



/***/ }),

/***/ "./src/app/subject-select/subject-select.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/subject-select/subject-select.module.ts ***!
  \*********************************************************/
/*! exports provided: SubjectSelectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSelectPageModule", function() { return SubjectSelectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _subject_select_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject-select-routing.module */ "./src/app/subject-select/subject-select-routing.module.ts");
/* harmony import */ var _subject_select_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subject-select.page */ "./src/app/subject-select/subject-select.page.ts");







let SubjectSelectPageModule = class SubjectSelectPageModule {
};
SubjectSelectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subject_select_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubjectSelectPageRoutingModule"]
        ],
        declarations: [_subject_select_page__WEBPACK_IMPORTED_MODULE_6__["SubjectSelectPage"]]
    })
], SubjectSelectPageModule);



/***/ }),

/***/ "./src/app/subject-select/subject-select.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/subject-select/subject-select.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qtc2VsZWN0L3N1YmplY3Qtc2VsZWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/subject-select/subject-select.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/subject-select/subject-select.page.ts ***!
  \*******************************************************/
/*! exports provided: SubjectSelectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSelectPage", function() { return SubjectSelectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let SubjectSelectPage = class SubjectSelectPage {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.subject = "Addition";
        // GET all subjects from Numberfit
        var xhttp = new XMLHttpRequest();
        let DOM = this;
        // Define the listener function for the GET request
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("GET request succeeded");
                DOM.subjects = JSON.parse(this.responseText);
            }
            else {
                // Use default (offline) if get request fails
                console.log("GET request failed with satus " + this.status);
                DOM.subjects = __webpack_require__(/*! ./default_subjects.json */ "./src/app/subject-select/default_subjects.json");
                console.log(DOM.subjects);
            }
        };
        // Define and send the GET request
        xhttp.open("GET", "http://api.numberfit.com:8081/getAvailableTopics");
        xhttp.send();
    }
    // Function called when radio button clicked
    onSelect(topic) {
        this.subject = topic;
    }
    ;
    ngOnInit() {
        let gamemode = this.activatedRoute.snapshot.paramMap.get("gamemode");
        let DOM = this;
        // Set the title according to the gamemode
        if (Number(gamemode) === 0) {
            document.getElementById("title").textContent = "Single Player";
        }
        else {
            document.getElementById("title").textContent = "Head-to-Head";
        }
        //
        // // Add subjects to the ion-radio-group
        // for (var i = 0; i < this.subjects.length; i++) {
        //   document.getElementById("radio-group").innerHTML += "<ion-item><ion-label>"+subjects[i]+
        //   "</ion-label><ion-radio slot='end' value="+subjects[i]+"></ion-radio></ion-item>";
        // }
        // Add eventListener for form submission
        document.getElementById("btn-play").addEventListener("click", function () {
            // Navigate to the respective page
            if (Number(gamemode) === 0) {
                DOM.router.navigate(['/play-single', DOM.subject]);
            }
            else {
                DOM.router.navigate(['/play-multi', DOM.subject]);
            }
        });
    }
};
SubjectSelectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SubjectSelectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subject-select',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./subject-select.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject-select/subject-select.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./subject-select.page.scss */ "./src/app/subject-select/subject-select.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], SubjectSelectPage);



/***/ })

}]);
//# sourceMappingURL=subject-select-subject-select-module-es2015.js.map