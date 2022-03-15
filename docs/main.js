(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*******************************************!*\
  !*** multi ./apps/vachanalay/src/main.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\DJ\gx\apps\vachanalay\src\main.ts */"T6Hx");


/***/ }),

/***/ "T6Hx":
/*!*************************************!*\
  !*** ./apps/vachanalay/src/main.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "mh2f");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "pCgf");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "mh2f":
/*!*********************************************************!*\
  !*** ./apps/vachanalay/src/environments/environment.ts ***!
  \*********************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "nMV/":
/*!**********************************************************************!*\
  !*** ./apps/vachanalay/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "nMV/";

/***/ }),

/***/ "pCgf":
/*!***********************************************!*\
  !*** ./apps/vachanalay/src/app/app.module.ts ***!
  \***********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "vYy8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "mh2f");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([], { initialNavigation: 'enabled' }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([], { initialNavigation: 'enabled' }),
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production,
                        // Register the ServiceWorker as soon as the app is stable
                        // or after 30 seconds (whichever comes first).
                        registrationStrategy: 'registerWhenStable:30000'
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vYy8":
/*!**************************************************!*\
  !*** ./apps/vachanalay/src/app/app.component.ts ***!
  \**************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class AppComponent {
    constructor() {
        this.title = 'vachanalay';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["gx-root"]], decls: 43, vars: 0, consts: [["fxLayout", "column", "fxLayoutAlign", "center stretch ", 1, "page"], ["color", "primary"], ["fxLayoutAlign", "center center"], ["fxFlex", "", 1, "page--content"], ["fxLayout", "row", 1, "page--footer"], ["aria-hidden", "false", "aria-label", "Example home icon"], ["fxFlex", "", "fxLayoutAlign", "center center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Chapter 01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0938\u0902\u0924 \u091C\u094D\u091E\u093E\u0928\u0947\u0936\u094D\u0935\u0930 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0905\u0927\u093F\u0915 \u0926\u0947\u0916\u0923\u0947\u0902 \u0924\u0930\u0940 \u0928\u093F\u0930\u0902\u091C\u0928 \u092A\u093E\u0939\u0923\u0947\u0902 \u0964 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u092F\u094B\u0917\u093F\u0930\u093E\u091C \u0935\u093F\u0928\u0935\u093F\u0923\u0947\u0902 \u092E\u0928\u093E \u0906\u0932\u0947\u0902 \u0935\u094B \u092E\u093E\u092F\u0947 \u0965\u0967\u0965 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0926\u0947\u0939\u092C\u0933\u0940 \u0926\u0947\u0909\u0928\u0940 \u0938\u093E\u0927\u093F\u0932\u0947\u0902 \u092E\u094D\u092F\u093E\u0902 \u0938\u093E\u0927\u0928\u0940\u0902 \u0964");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0924\u0947\u0923\u0947\u0902 \u0938\u092E\u093E\u0927\u093E\u0928 \u092E\u091C \u091C\u094B\u0921\u0932\u0947\u0902 \u0935\u094B \u092E\u093E\u092F\u0947 \u0965\u0968\u0965");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0905\u0928\u0902\u0917\u092A\u0923 \u092B\u093F\u091F\u0932\u0947\u0902 \u092E\u093E\u092F\u093E\u091B\u0902\u0926\u093E \u0938\u093E\u0902\u0920\u0935\u093F\u0932\u0947\u0902 \u0964");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0938\u0915\u0933 \u0926\u0947\u0916\u093F\u0932\u0947\u0902 \u0906\u0924\u094D\u092E\u0938\u094D\u0935\u0930\u0942\u092A \u0935\u094B \u092E\u093E\u092F\u0947 \u0965\u0969\u0965");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u091A\u0902\u0926\u0928 \u091C\u0947\u0935\u0940\u0902 \u092D\u0930\u0932\u093E \u0905\u0936\u094D\u0935\u0924\u094D\u0925 \u092B\u0941\u0932\u0932\u093E \u0964");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0924\u0948\u0938\u093E \u092E\u094D\u092F\u093E\u0902 \u0926\u0947\u0916\u093F\u0932\u093E \u0928\u093F\u0930\u093E\u0915\u093E\u0930 \u0935\u094B \u092E\u093E\u092F\u0947 \u0965\u096A\u0965");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u092A\u0941\u0930\u0947 \u092A\u0941\u0930\u0947 \u0906\u0924\u093E\u0902 \u092A\u094D\u0930\u092A\u0902\u091A \u092A\u093E\u0939\u0923\u0947\u0902 \u0964");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0928\u093F\u091C\u093E\u0928\u0902\u0926\u0940 \u0930\u093E\u0939\u0923\u0947 \u0938\u094D\u0935\u0930\u0942\u092A\u0940\u0902 \u0935\u094B \u092E\u093E\u092F\u0947 \u0965\u096B\u0965");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0910\u0938\u093E \u091C\u094D\u091E\u093E\u0928\u0938\u093E\u0917\u0930\u0942 \u0930\u0916\u0941\u092E\u093E\u0926\u0947\u0935\u093F\u0935\u0930\u0942 \u0964");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0935\u093F\u0920\u094D\u0920\u0932\u0941 \u0928\u093F\u0930\u094D\u0927\u093E\u0930\u0942 \u092E\u094D\u092F\u093E\u0902 \u0926\u0947\u0916\u093F\u0932\u093E \u0935\u094B \u092E\u093E\u092F\u0947 \u0965\u096C\u0965' ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " <3/3> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".page[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 100%;\n}\n.page--content[_ngcontent-%COMP%] {\n  overflow: scroll;\n  padding: 2rem;\n  text-align: center;\n}\n.page--footer[_ngcontent-%COMP%] {\n  box-shadow: 5px 3px 3px 2px silver;\n  position: sticky;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFFO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICAmLS1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICYtLWZvb3RlciB7XG4gICAgYm94LXNoYWRvdzogNXB4IDNweCAzcHggMnB4IHNpbHZlcjtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICB9XG59XG5cblxuXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gx-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map