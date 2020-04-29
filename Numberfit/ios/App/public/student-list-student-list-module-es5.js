function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-list-student-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student-list/student-list.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-list/student-list.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentListStudentListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n  </ion-toolbar>\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@ionic/core@next/css/ionic.bundle.css\"/>\n</ion-header>\n\n<ion-content  class=\"ion-content\">\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title id=\"title\" class=\"welcome-card-title\">Student List</ion-card-title>\n    </ion-card-header>\n      <ion-list\n      id=\"radio-group\"\n      allow-empty-selection=“false”\n      *ngFor=\"let student of studentList\">\n        <ion-item>\n          <ion-label (click)=\"navigate(student.username)\">{{student.name}}</ion-label>\n        </ion-item>\n      </ion-list>\n  </ion-card>\n</ion-content>\n";
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
    module.exports = JSON.parse("{\"server\":\"http://primaryapp-env.eba-rer8nine.us-west-2.elasticbeanstalk.com\",\"bucket\":\"https://primary-app-resources.s3.eu-west-2.amazonaws.com\"}");
    /***/
  },

  /***/
  "./src/app/student-list/student-list-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/student-list/student-list-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: StudentListPageRoutingModule */

  /***/
  function srcAppStudentListStudentListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListPageRoutingModule", function () {
      return StudentListPageRoutingModule;
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


    var _student_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-list.page */
    "./src/app/student-list/student-list.page.ts");

    var routes = [{
      path: '',
      component: _student_list_page__WEBPACK_IMPORTED_MODULE_3__["StudentListPage"]
    }];

    var StudentListPageRoutingModule = function StudentListPageRoutingModule() {
      _classCallCheck(this, StudentListPageRoutingModule);
    };

    StudentListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StudentListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/student-list/student-list.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/student-list/student-list.module.ts ***!
    \*****************************************************/

  /*! exports provided: StudentListPageModule */

  /***/
  function srcAppStudentListStudentListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListPageModule", function () {
      return StudentListPageModule;
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


    var _student_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-list-routing.module */
    "./src/app/student-list/student-list-routing.module.ts");
    /* harmony import */


    var _student_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-list.page */
    "./src/app/student-list/student-list.page.ts");

    var StudentListPageModule = function StudentListPageModule() {
      _classCallCheck(this, StudentListPageModule);
    };

    StudentListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _student_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentListPageRoutingModule"]],
      declarations: [_student_list_page__WEBPACK_IMPORTED_MODULE_6__["StudentListPage"]]
    })], StudentListPageModule);
    /***/
  },

  /***/
  "./src/app/student-list/student-list.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/student-list/student-list.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentListStudentListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/student-list/student-list.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/student-list/student-list.page.ts ***!
    \***************************************************/

  /*! exports provided: StudentListPage */

  /***/
  function srcAppStudentListStudentListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListPage", function () {
      return StudentListPage;
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
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");

    var StudentListPage = /*#__PURE__*/function () {
      function StudentListPage(nativeStorage, activatedRoute, router, http) {
        var _this = this;

        _classCallCheck(this, StudentListPage);

        this.nativeStorage = nativeStorage;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.server = __webpack_require__(
        /*! ../config.json */
        "./src/app/config.json").server; // Get cookie from storage

        this.nativeStorage.getItem('cookie').then(function (data) {
          _this.cookie = data.cookie;
        }); // this.requestStudentList();

        this.http.get(this.server + "/getStudents?cookie=" + this.cookie, {}, {}).then(function (data) {
          _this.studentList = JSON.parse(data.data).students;
        })["catch"](function (error) {
          console.log("status", error.status);
          console.log("error", error.error);
        });
      }

      _createClass(StudentListPage, [{
        key: "navigate",
        value: function navigate(student) {
          // this.studentID = student;
          console.log(student); // DOM.router.navigate(['/leaderboard', DOM.studentID]);
        }
      }]);

      return StudentListPage;
    }();

    StudentListPage.ctorParameters = function () {
      return [{
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }];
    };

    StudentListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-student-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student-list/student-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-list.page.scss */
      "./src/app/student-list/student-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])], StudentListPage);
    /***/
  }
}]);
//# sourceMappingURL=student-list-student-list-module-es5.js.map