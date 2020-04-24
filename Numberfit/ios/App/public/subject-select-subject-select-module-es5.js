function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subject-select-subject-select-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/subject-select/subject-select.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subject-select/subject-select.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubjectSelectSubjectSelectPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-content\">\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title id=\"title\" class=\"welcome-card-title\">Subject Select</ion-card-title>\n    </ion-card-header>\n      <ion-radio-group\n      id=\"radio-group\"\n      allow-empty-selection=“false”\n      *ngFor=\"let sub of subjects.availableTopics\">\n      <ion-item>\n        <ion-label>{{sub.Topic}}</ion-label>\n        <ion-radio id={{sub.Topic}} slot=\"end\" (click)=onSelect(sub.Topic)></ion-radio>\n      </ion-item>\n      </ion-radio-group>\n    <ion-button id=\"btn-play\" expand=\"block\" fill=\"clear\">\n      Play Selected Subject\n    </ion-button>\n  </ion-card>\n</ion-content>\n";
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
    module.exports = JSON.parse("{\"server\":\"http://primaryapp-env.eba-aitxzvsh.eu-west-2.elasticbeanstalk.com\",\"bucket\":\"https://primary-app-resources.s3.eu-west-2.amazonaws.com\"}");
    /***/
  },

  /***/
  "./src/app/subject-select/default_subjects.json":
  /*!******************************************************!*\
    !*** ./src/app/subject-select/default_subjects.json ***!
    \******************************************************/

  /*! exports provided: availableTopics, default */

  /***/
  function srcAppSubjectSelectDefault_subjectsJson(module) {
    module.exports = JSON.parse("{\"availableTopics\":[{\"Topic\":\"Addition\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Subtraction\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Multiplication\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Division\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"PlaceValue\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Decimals\",\"availableYears\":[4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Length\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Time\",\"availableYears\":[1,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Fractions\",\"availableYears\":[1,2,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Operations\",\"availableYears\":[5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]}]}");
    /***/
  },

  /***/
  "./src/app/subject-select/subject-select-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/subject-select/subject-select-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SubjectSelectPageRoutingModule */

  /***/
  function srcAppSubjectSelectSubjectSelectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectSelectPageRoutingModule", function () {
      return SubjectSelectPageRoutingModule;
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


    var _subject_select_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./subject-select.page */
    "./src/app/subject-select/subject-select.page.ts");

    var routes = [{
      path: '',
      component: _subject_select_page__WEBPACK_IMPORTED_MODULE_3__["SubjectSelectPage"]
    }];

    var SubjectSelectPageRoutingModule = function SubjectSelectPageRoutingModule() {
      _classCallCheck(this, SubjectSelectPageRoutingModule);
    };

    SubjectSelectPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SubjectSelectPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/subject-select/subject-select.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/subject-select/subject-select.module.ts ***!
    \*********************************************************/

  /*! exports provided: SubjectSelectPageModule */

  /***/
  function srcAppSubjectSelectSubjectSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectSelectPageModule", function () {
      return SubjectSelectPageModule;
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


    var _subject_select_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./subject-select-routing.module */
    "./src/app/subject-select/subject-select-routing.module.ts");
    /* harmony import */


    var _subject_select_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./subject-select.page */
    "./src/app/subject-select/subject-select.page.ts");

    var SubjectSelectPageModule = function SubjectSelectPageModule() {
      _classCallCheck(this, SubjectSelectPageModule);
    };

    SubjectSelectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _subject_select_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubjectSelectPageRoutingModule"]],
      declarations: [_subject_select_page__WEBPACK_IMPORTED_MODULE_6__["SubjectSelectPage"]]
    })], SubjectSelectPageModule);
    /***/
  },

  /***/
  "./src/app/subject-select/subject-select.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/subject-select/subject-select.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSubjectSelectSubjectSelectPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qtc2VsZWN0L3N1YmplY3Qtc2VsZWN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/subject-select/subject-select.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/subject-select/subject-select.page.ts ***!
    \*******************************************************/

  /*! exports provided: SubjectSelectPage */

  /***/
  function srcAppSubjectSelectSubjectSelectPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectSelectPage", function () {
      return SubjectSelectPage;
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

    var SubjectSelectPage = /*#__PURE__*/function () {
      function SubjectSelectPage(router, activatedRoute, nativeStorage) {
        var _this = this;

        _classCallCheck(this, SubjectSelectPage);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.nativeStorage = nativeStorage;
        this.subject = "Addition"; // Default to Addition
        // Get server from config file

        this.server = __webpack_require__(
        /*! ../config.json */
        "./src/app/config.json").server; // Get cookie from storage

        this.nativeStorage.getItem('cookie').then(function (data) {
          _this.cookie = data.cookie;
        }); // GET all subjects from Numberfit

        var xhttpSubjects = new XMLHttpRequest();
        var xhttpDetails = new XMLHttpRequest();
        var DOM = this;
        DOM.subjects = __webpack_require__(
        /*! ./default_subjects.json */
        "./src/app/subject-select/default_subjects.json"); // Define the listener function for the GET request

        xhttpSubjects.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            // Subjects GOT now get details to check year group
            DOM.subjects = JSON.parse(this.responseText);
            xhttpDetails.send();
          } else if (this.status != 200) {
            console.log("GET subjects request failed with satus " + this.status);
          }
        }; // Define the listener function for the GET request


        xhttpDetails.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log("GET details request succeeded"); // Remove elements not available to that year
            // By now availableTopics is an attribute of DOM.subjects

            console.log(JSON.parse(this.responseText));
            var repeats = DOM.subjects["availableTopics"].length;
            var deletes = 0;

            for (var i = 0; i < repeats; i++) {
              if (!DOM.subjects["availableTopics"][i - deletes].availableYears.includes(parseInt(JSON.parse(this.responseText).year))) {
                DOM.subjects["availableTopics"].splice(i - deletes, 1);
                deletes += 1;
              }
            }
          } else if (this.status != 200) {
            console.log("GET details request failed with satus " + this.status);
          }
        }; // Define and send the GET request


        xhttpSubjects.open("GET", "http://api.numberfit.com:8081/getAvailableTopics", true);
        xhttpDetails.open("GET", this.server + "/myDetails?cookie=" + this.cookie, true);
        xhttpSubjects.send();
      } // Function called when radio button clicked


      _createClass(SubjectSelectPage, [{
        key: "onSelect",
        value: function onSelect(topic) {
          // TODO:
          // Deselct current one on click - stopped working when I
          // changed it to programmatically fill the list.
          var radio = document.getElementById(topic);
          this.subject = topic;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var gamemode = this.activatedRoute.snapshot.paramMap.get("gamemode");
          var DOM = this; // Set the title according to the gamemode

          if (Number(gamemode) === 0) {
            document.getElementById("title").textContent = "Single Player";
          } else {
            document.getElementById("title").textContent = "Head-to-Head";
          } // Add eventListener for form submission


          document.getElementById("btn-play").addEventListener("click", function () {
            // Navigate to the respective page
            if (Number(gamemode) === 0) {
              DOM.router.navigate(['/play-single', DOM.subject]);
            } else {
              DOM.router.navigate(['/play-multi', DOM.subject]);
            }
          });
        }
      }]);

      return SubjectSelectPage;
    }();

    SubjectSelectPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]
      }];
    };

    SubjectSelectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-subject-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subject-select.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/subject-select/subject-select.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subject-select.page.scss */
      "./src/app/subject-select/subject-select.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]])], SubjectSelectPage);
    /***/
  }
}]);
//# sourceMappingURL=subject-select-subject-select-module-es5.js.map