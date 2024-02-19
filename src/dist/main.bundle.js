webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./active-bookings/active-bookings.module": [
		"../../../../../src/app/layout/active-bookings/active-bookings.module.ts"
	],
	"./customer-support/customer-support.module": [
		"../../../../../src/app/layout/customer-support/customer-support.module.ts"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/layout/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./forgotpassword/forgotpassword.module": [
		"../../../../../src/app/forgotpassword/forgotpassword.module.ts",
		"forgotpassword.module"
	],
	"./layout/layout.module": [
		"../../../../../src/app/layout/layout.module.ts",
		"layout.module"
	],
	"./login/login.module": [
		"../../../../../src/app/login/login.module.ts",
		"login.module"
	],
	"./not-found/not-found.module": [
		"../../../../../src/app/not-found/not-found.module.ts",
		"not-found.module"
	],
	"./photos/photos.module": [
		"../../../../../src/app/layout/photos/photos.module.ts"
	],
	"./products/products.module": [
		"../../../../../src/app/layout/products/products.module.ts",
		"products.module"
	],
	"./profile/profile.module": [
		"../../../../../src/app/layout/profile/profile.module.ts",
		"profile.module"
	],
	"./signup/signup.module": [
		"../../../../../src/app/signup/signup.module.ts",
		"signup.module"
	],
	"./user-management/user-management.module": [
		"../../../../../src/app/layout/user-management/user-management.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared__["a" /* AuthGuard */]]
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotPasswordModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes, { useHash: true })
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared__["a" /* AuthGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(translate) {
        this.translate = translate;
        translate.addLangs(['en', 'fr', 'ur']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur/) ? browserLang : 'en');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_customer_support_customer_support_module__ = __webpack_require__("../../../../../src/app/layout/customer-support/customer-support.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_active_bookings_active_bookings_module__ = __webpack_require__("../../../../../src/app/layout/active-bookings/active-bookings.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layout_user_management_user_management_module__ = __webpack_require__("../../../../../src/app/layout/user-management/user-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_photos_photos_module__ = __webpack_require__("../../../../../src/app/layout/photos/photos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    //     for development
    //     return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, '/assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_8__layout_customer_support_customer_support_module__["CustomerSupportModule"],
            __WEBPACK_IMPORTED_MODULE_9__layout_active_bookings_active_bookings_module__["ActiveBookingsModule"],
            __WEBPACK_IMPORTED_MODULE_10__layout_user_management_user_management_module__["UserManagementModule"],
            __WEBPACK_IMPORTED_MODULE_11__layout_photos_photos_module__["PhotosModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__shared__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__shared__["f" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/active-bookings-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveBookingsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_active_bookings_active_bookings_component__ = __webpack_require__("../../../../../src/app/layout/active-bookings/components/active-bookings/active-bookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_booking_type_booking_type_component__ = __webpack_require__("../../../../../src/app/layout/active-bookings/components/booking-type/booking-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_create_booking_type_create_booking_type_component__ = __webpack_require__("../../../../../src/app/layout/active-bookings/components/create-booking-type/create-booking-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_update_booking_type_update_booking_type_component__ = __webpack_require__("../../../../../src/app/layout/active-bookings/components/update-booking-type/update-booking-type.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_active_bookings_active_bookings_component__["a" /* ActiveBookingsComponent */] },
    { path: 'booking-type', component: __WEBPACK_IMPORTED_MODULE_3__components_booking_type_booking_type_component__["a" /* BookingTypeComponent */] },
    { path: 'create-booking-type', component: __WEBPACK_IMPORTED_MODULE_4__components_create_booking_type_create_booking_type_component__["a" /* CreateBookingTypeComponent */] },
    { path: 'update-booking-type', component: __WEBPACK_IMPORTED_MODULE_5__components_update_booking_type_update_booking_type_component__["a" /* UpdateBookingTypeComponent */] }
];
var ActiveBookingsRoutingModule = (function () {
    function ActiveBookingsRoutingModule() {
    }
    return ActiveBookingsRoutingModule;
}());
ActiveBookingsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], ActiveBookingsRoutingModule);

//# sourceMappingURL=active-bookings-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/active-bookings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveBookingsModule", function() { return ActiveBookingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_mydatepicker__ = __webpack_require__("../../../../ngx-mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__active_bookings_routing_module__ = __webpack_require__("../../../../../src/app/layout/active-bookings/active-bookings-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_active_bookings_active_bookings_component__ = __webpack_require__("../../../../../src/app/layout/active-bookings/components/active-bookings/active-bookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_booking_type_booking_type_component__ = __webpack_require__("../../../../../src/app/layout/active-bookings/components/booking-type/booking-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_create_booking_type_create_booking_type_component__ = __webpack_require__("../../../../../src/app/layout/active-bookings/components/create-booking-type/create-booking-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_update_booking_type_update_booking_type_component__ = __webpack_require__("../../../../../src/app/layout/active-bookings/components/update-booking-type/update-booking-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_active_bookings_service__ = __webpack_require__("../../../../../src/app/layout/active-bookings/services/active-bookings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ActiveBookingsModule = (function () {
    function ActiveBookingsModule() {
    }
    return ActiveBookingsModule;
}());
ActiveBookingsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__active_bookings_routing_module__["a" /* ActiveBookingsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared__["c" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_mydatepicker__["NgxMyDatePickerModule"].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__components_active_bookings_active_bookings_component__["a" /* ActiveBookingsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_booking_type_booking_type_component__["a" /* BookingTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_create_booking_type_create_booking_type_component__["a" /* CreateBookingTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_update_booking_type_update_booking_type_component__["a" /* UpdateBookingTypeComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__services_active_bookings_service__["a" /* ActiveBookingsService */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]]
    })
], ActiveBookingsModule);

//# sourceMappingURL=active-bookings.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/components/active-bookings/active-bookings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sp_require {\n    color:#ff0000;\n}\n\ntextarea {\n    resize: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/components/active-bookings/active-bookings.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n   <div [@routerTransition]>\n<app-page-header [heading]=\"'Active Bookings'\" [icon]=\"'fa-fw fa-calendar'\"></app-page-header>\n\n<div class=\"card\">\n    \n    <div class=\"card-header\">\n      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> Booking\n    </div>\n\n    <div class=\"clear-filler\"></div>\n    <div class=\"clear-filler\"></div>\n      <form role=\"form\">\n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-3\">\n            <div class=\"pull-left\">\n              <div class=\"input-group\">\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-info\">\n                        <i class=\"fa fa-search\"></i>\n                    </button>\n                </span>  \n                <input #gb type=\"text\" pInputText class=\"form-control\" placeholder=\"Search\">\n              </div>\n              </div>\n          </div>\n      \n        <div class=\"col-lg-3 col-lg-offset-6\">\n        <div class=\"pull-right\">\n            <button type=\"button\" routerLink=\"booking-type\" class=\"btn btn-info pull-right\">Booking Types</button>\n          </div>\n        </div>\n      \n      </div>\n        \n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-12 table-responsive\">\n          <div class=\"clear-filler\"></div>\n          <p-dataTable \n            [value]=\"bookings\"\n            sortMode=\"multiple\"\n            [rows]=\"10\"\n            [paginator]=\"true\"\n            [pageLinks]=\"3\"\n            [rowsPerPageOptions]=\"[10,25,50,100]\"\n            [globalFilter]=\"gb\" \n          #dt> \n            <p-column\n              field=\"bookingType.name\"\n              header=\"Booking Type\"\n              [sortable]=\"true\"\n              [style]=\"{'width':'14%', 'text-align':'center', 'word-wrap': 'no-wrap'}\"> \n            </p-column>\n\n            <p-column\n              field=\"bookingType.serviceType\"\n              header=\"Service Type\"\n              [sortable]=\"true\"\n              [style]=\"{'width':'14%', 'text-align':'center', 'word-wrap': 'no-wrap'}\"> \n            </p-column>\n\n            <p-column\n              field=\"customer\"\n              header=\"Customer Name\"\n              [sortable]=\"true\"\n              [style]=\"{'width':'17%', 'text-align':'center'}\"> \n                <ng-template\n                  let-bookings=\"rowData\"\n                  pTemplate=\"body\">\n                  {{ bookings.customer.firstName +' '+ bookings.customer.lastName}}\n                </ng-template>  \n            </p-column>\n\n            <p-column\n              field=\"customer.mobileNumber\"\n              header=\"Contact Number\"\n              [sortable]=\"true\"\n              [style]=\"{'width':'14%', 'text-align':'center', 'word-wrap': 'no-wrap'}\"> \n            </p-column>\n            \n            <p-column\n              field=\"appointment\"\n              header=\"Appointment Date\"\n              [sortable]=\"true\"\n              [style]=\"{'width':'20%', 'text-align':'center'}\">\n              <ng-template\n                let-bookings=\"rowData\"\n                pTemplate=\"body\">\n                  {{ bookings.dateTime | date: 'dd MMM yyyy hh:mm a': true}}\n              </ng-template>  \n            </p-column>\n            \n            <p-column\n              field=\"status\"\n              header=\"Status\"\n              [sortable]=\"true\"\n              [style]=\"{'width':'11%', 'text-align': 'center', 'word-wrap': 'no-wrap'}\">\n                <ng-template\n                  let-bookings=\"rowData\"\n                  pTemplate=\"body\">\n                    <span [ngClass]=\"{'text-info': bookings.status == 'CONFIRMED', 'text-primary': bookings.status == 'APPROVED', 'text-danger': bookings.status == 'DECLINED' || bookings.status == 'CANCELED', 'text-success': bookings.status == 'COMPLETED', 'text-warning': bookings.status == 'PENDING'}\">{{ bookings.status}}</span> \n                </ng-template>  \n            </p-column>\n\n            <p-column\n              field=\"action\"\n              header=\"Action\"\n              [sortable]=\"false\"\n              [style]=\"{'width':'10%', 'text-align': 'center', 'word-wrap': 'no-wrap'}\">\n              <ng-template\n                let-bookings=\"rowData\"\n                pTemplate=\"body\">\n                  <button\n                    type=\"button\"\n                    title=\"View\"\n                    class=\"btn btn-sm btn-primary\"\n                    (click)=\"getBookingDetailsRow(bookings.bookingId); open(content);\">\n                    View\n                  </button>\n              </ng-template>\n            </p-column>\n          </p-dataTable>\n        </div>\n      </div>\n\n      <div class=\"clear-filler\"></div>\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-12 text-center\">\n          <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        </div>\n      </div>\n      <div class=\"clear-filler\"></div>\n\n      <!-- Start - Modal -->\n      <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\"> Booking Details</h6>\n          <button type=\"button\" #btnDismiss class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <!--\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Booking ID</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>{{ selectedBookingDetails.bookingId }}</p>\n            </div>\n          </div> \n          -->\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Booking Type</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBookingDetails.bookingType.name }}\n                <span [hidden]=\"selectedBookingDetails.bookingType.name != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Service Type</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBookingDetails.bookingType.serviceType }}\n                <span [hidden]=\"selectedBookingDetails.bookingType.serviceType != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n          \n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Customer Name</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBookingDetails.customer.firstName + ' ' + selectedBookingDetails.customer.lastName }}\n                <span [hidden]=\"selectedBookingDetails.customer.firstName != '' && selectedBookingDetails.customer.lastName != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Contact Number</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBookingDetails.customer.mobileNumber }}\n                <span [hidden]=\"selectedBookingDetails.customer.mobileNumber != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Email Address</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBookingDetails.customer.email }}\n                <span [hidden]=\"selectedBookingDetails.customer.email != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Appointment Date</label>\n            </div>\n            <div class=\"col-lg-6\">\n            <p>\n              {{ selectedBookingDetails.dateTime | date : 'dd MMM yyyy hh:mm a' }}\n              <span [hidden]=\"selectedBookingDetails.dateTime != null\">N/A</span>\n            </p>\n            \n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Location</label>\n            </div>\n            <div class=\"col-lg-6\">\n            <p>\n              {{ selectedBookingDetails.location }}\n              <span [hidden]=\"selectedBookingDetails.location != ''\">N/A</span>\n            </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Status</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <span [ngClass]=\"{'text-info': selectedBookingDetails.status == 'CONFIRMED', 'text-primary': selectedBookingDetails.status == 'APPROVED', 'text-danger': selectedBookingDetails.status == 'DECLINED' || selectedBookingDetails.status == 'CANCELED', 'text-warning': selectedBookingDetails.status == 'PENDING', 'text-success': selectedBookingDetails.status == 'COMPLETED' }\">{{ selectedBookingDetails.status }}</span>\n              <span [hidden]=\"selectedBookingDetails.status != ''\">N/A</span>\n            </div>\n          </div>\n          \n          <div class=\"col-lg-12\">\n              <div class=\"col-lg-6\">\n                <label>Photographer \n                  <span *ngIf=\"selectedBookingDetails.status == 'PENDING'\" class=\"sp_require\">*</span>\n                </label>\n              </div>\n              <div class=\"col-lg-6\">\n\n                  <label *ngIf=\"selectedBookingDetails.status != 'PENDING'\">\n                    {{ lbl_photographer }}\n                    <span [hidden]=\"lbl_photographer != ''\">N/A</span>\n                  </label>\n                  \n                  <select name=\"photographer\" class=\"form-control\" [(ngModel)]=\"photographer\" required *ngIf=\"selectedBookingDetails.status == 'PENDING'\">\n                      <option value=\"\"> - - - Select Photographer - - - </option>\n                      <option *ngFor=\"let photographers of opt_photographers\" [value]=\"photographers.email\">\n                        <span>{{photographers.firstName + ' ' + photographers.lastName }}</span>\n                        <span *ngIf=\"photographers.firstName == '' && photographers.lastName == ''\">{{photographers.email }}</span>\n                      </option>\n                    </select>\n              </div>\n          </div>\n        </div>\n\n        <div class=\"modal-footer\">\n            <div class=\"col-lg-12\"> \n          <div \n            class=\"text-center col-lg-12\" \n            [hidden]=\"selectedBookingDetails.status != 'PENDING'\">\n            <button \n              type=\"submit\" \n              class=\"btn btn-success\" \n              style=\"margin: 3px 10px;\"\n              (click)=\"acceptRequest(selectedBookingDetails.bookingId, 'modal')\">\n              Accept\n            </button>\n            <button \n              type=\"button\" \n              class=\"btn btn-danger\" \n              style=\"margin: 3px 10px;\"\n              (click)=\"declineRequest(selectedBookingDetails.bookingId, 'modal')\">\n              Decline\n            </button>\n          </div>\n\n          <div \n            class=\"text-center col-lg-12\" \n            [hidden]=\"selectedBookingDetails.status != 'CONFIRMED'\">\n            <button \n              type=\"submit\" \n              class=\"btn btn-success\" \n              style=\"margin: 3px 10px;\"\n              (click)=\"completeRequest(selectedBookingDetails.bookingId, 'modal')\">\n              Complete\n            </button>\n          </div>\n\n          <div \n            class=\"text-center col-lg-12\" \n            [hidden]=\"selectedBookingDetails.status != 'COMPLETED'\">\n            <button \n              type=\"submit\" \n              class=\"btn btn-success\" \n              style=\"margin: 3px 10px;\"\n              (click)=\"redirectToUploadPhoto(selectedBookingDetails.bookingId)\">\n              Upload Photos\n            </button>\n          </div>\n\n          <div class=\"text-center col-lg-12\" [hidden]=\"selectedBookingDetails.status == 'PENDING' || selectedBookingDetails.status == 'CONFIRMED' || selectedBookingDetails.status == 'COMPLETED'\">\n            <button type=\"button\" class=\"btn btn-secondary\" style=\"margin: 3px 10px;\" (click)=\"d('Cross click')\">Close</button>\n          </div>\n\n          <div class=\"clear-filler\"></div>\n            <div class=\"col-lg-12 text-center\">\n              <ngb-alert [type]=\"modalAlert.type\" (close)=\"closeModalAlert(modalAlert)\" *ngFor=\"let modalAlert of modalAlerts\">{{ modalAlert.message }}</ngb-alert>\n            </div>\n          </div>\n            \n        </div>\n      </ng-template>\n      <!-- End - Modal -->\n\n\n  </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/components/active-bookings/active-bookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveBookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__active_bookings_services_active_bookings_service__ = __webpack_require__("../../../../../src/app/layout/active-bookings/services/active-bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActiveBookingsComponent = (function () {
    function ActiveBookingsComponent(activeBookingsService, layoutService, modalService, router) {
        this.activeBookingsService = activeBookingsService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.router = router;
        this.errorMessage = "Unexpected error encountered.";
        this.loading = false;
        this.bookings = [];
        this.alerts = [];
        this.modalAlerts = [];
        this.opt_photographers = [];
        this.photographer = "";
        this.lbl_photographer = "";
        this.myOptions = {
            dateFormat: 'dd/mm/yyyy',
        };
    }
    ActiveBookingsComponent.prototype.ngOnInit = function () {
        this.searchBookingDetails();
    };
    ActiveBookingsComponent.prototype.searchBookingDetails = function () {
        var _this = this;
        this.closeActiveAlert();
        this.closeActiveModalAlert();
        this.loading = true;
        this.activeBookingsService.getBookings().subscribe(function (data) {
            _this.bookings = data;
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    ActiveBookingsComponent.prototype.open = function (content) {
        var _this = this;
        this.closeActiveAlert();
        this.closeActiveModalAlert();
        this.modalReference = this.modalService.open(content, { 'size': 'lg', backdrop: 'static', keyboard: false });
        this.modalReference.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ActiveBookingsComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ActiveBookingsComponent.prototype.getBookingDetailsRow = function (id) {
        var _this = this;
        this.photographer = "";
        this.lbl_photographer = "";
        this.bookings.forEach(function (item, index) {
            if (item.bookingId == id) {
                _this.selectedBookingDetails = _this.bookings[index];
                console.log(_this.selectedBookingDetails);
                return false;
            }
        });
        this.getPhotographers();
    };
    ActiveBookingsComponent.prototype.acceptRequest = function (id, src) {
        var _this = this;
        if (this.photographer == "") {
            alert("Please assign a Photographer.");
        }
        else {
            if (confirm("Are you sure you want to accept this request?")) {
                this.activeBookingsService.acceptBooking(id, this.photographer).subscribe(function (data) {
                    console.log(data);
                    if (!_this.isEmpty(data)) {
                        if (src == 'row') {
                            _this.successMessage('Booking successfully accepted.');
                            setTimeout(function () {
                                _this.closeActiveAlert();
                                _this.searchBookingDetails();
                            }, 3000);
                        }
                        else if (src == 'modal') {
                            _this.successModalMessage('Booking successfully accepted.');
                            setTimeout(function () {
                                _this.modalReference.close();
                                _this.closeActiveModalAlert();
                                _this.searchBookingDetails();
                            }, 3000);
                        }
                    }
                    else {
                        _this.errMessage(_this.errorMessage);
                    }
                }, function (err) {
                    console.log(err);
                    if (src == 'row') {
                        _this.errMessage(_this.errorMessage);
                    }
                    else if (src == 'modal') {
                        _this.errModalMessage(_this.errorMessage);
                    }
                });
            }
        }
    };
    ActiveBookingsComponent.prototype.completeRequest = function (id, src) {
        var _this = this;
        if (confirm("Are you sure you want to complete this request?")) {
            this.activeBookingsService.completeBooking(id).subscribe(function (data) {
                if (!_this.isEmpty(data)) {
                    console.log(data);
                    if (src == 'row') {
                        _this.successMessage('Booking successfully completed');
                        setTimeout(function () {
                            _this.closeActiveAlert();
                            _this.searchBookingDetails();
                        }, 3000);
                    }
                    else if (src == 'modal') {
                        _this.successModalMessage('Booking successfully completed.');
                        setTimeout(function () {
                            _this.modalReference.close();
                            _this.closeActiveModalAlert();
                            _this.router.navigateByUrl('photos?bookingId=' + id);
                        }, 3000);
                    }
                }
                else {
                    _this.errMessage(_this.errorMessage);
                }
            }, function (err) {
                console.log(err);
                if (src == 'row') {
                    _this.errMessage(_this.errorMessage);
                }
                else if (src == 'modal') {
                    _this.errModalMessage(_this.errorMessage);
                }
            });
        }
    };
    ActiveBookingsComponent.prototype.redirectToUploadPhoto = function (id) {
        this.modalReference.close();
        this.router.navigateByUrl('photos?bookingId=' + id);
    };
    ActiveBookingsComponent.prototype.declineRequest = function (id, src) {
        var _this = this;
        if (confirm("Are you sure you want to decline this request?")) {
            this.activeBookingsService.declineBooking(id).subscribe(function (data) {
                if (!_this.isEmpty(data)) {
                    console.log(data);
                    if (src == 'row') {
                        _this.successMessage('Booking successfully declined');
                        setTimeout(function () {
                            _this.closeActiveAlert();
                            _this.searchBookingDetails();
                        }, 3000);
                    }
                    else if (src == 'modal') {
                        _this.successModalMessage('Booking successfully declined.');
                        setTimeout(function () {
                            _this.modalReference.close();
                            _this.closeActiveModalAlert();
                            _this.searchBookingDetails();
                        }, 3000);
                    }
                }
            }, function (err) {
                console.log(err);
                if (src == 'row') {
                    _this.errMessage(_this.errorMessage);
                }
                else if (src == 'modal') {
                    _this.errModalMessage(_this.errorMessage);
                }
            });
        }
    };
    ActiveBookingsComponent.prototype.getPhotographers = function () {
        var _this = this;
        this.lbl_photographer = "";
        this.layoutService.getUsers().subscribe(function (data) {
            _this.opt_photographers = [];
            data.forEach(function (item, index) {
                if (item.role.toLowerCase() == "photographer") {
                    _this.opt_photographers.push(data[index]);
                    if (item.email == _this.selectedBookingDetails.photographerEmail) {
                        _this.lbl_photographer = data[index].firstName + ' ' + data[index].lastName;
                    }
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    ActiveBookingsComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    ActiveBookingsComponent.prototype.errModalMessage = function (msg) {
        this.closeActiveModalAlert();
        this.modalAlerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    ActiveBookingsComponent.prototype.successMessage = function (msg) {
        var _this = this;
        this.closeActiveAlert();
        setTimeout(function () {
            _this.alerts.push({
                id: 1,
                type: 'success',
                message: msg
            });
        }, 500);
        return true;
    };
    ActiveBookingsComponent.prototype.successModalMessage = function (msg) {
        var _this = this;
        this.closeActiveModalAlert();
        setTimeout(function () {
            _this.modalAlerts.push({
                id: 1,
                type: 'success',
                message: msg
            });
        }, 500);
        return true;
    };
    ActiveBookingsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    ActiveBookingsComponent.prototype.closeModalAlert = function (modalAlerts) {
        var index = this.modalAlerts.indexOf(alert);
        this.modalAlerts.splice(index, 1);
    };
    ActiveBookingsComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    ActiveBookingsComponent.prototype.closeActiveModalAlert = function () {
        this.modalAlerts.splice(0, 1);
    };
    ActiveBookingsComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return ActiveBookingsComponent;
}());
ActiveBookingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-active-bookings',
        template: __webpack_require__("../../../../../src/app/layout/active-bookings/components/active-bookings/active-bookings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/active-bookings/components/active-bookings/active-bookings.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__active_bookings_services_active_bookings_service__["a" /* ActiveBookingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__active_bookings_services_active_bookings_service__["a" /* ActiveBookingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object])
], ActiveBookingsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=active-bookings.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/components/booking-type/booking-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.row-action {\n    margin: 0 3px;\n    cursor: pointer;\n}\n\n.row-search {\n    color: #FF8D33;\n}\n\n.row-edit {\n    color: #33A2FF;\n}\n\n.row-delete {\n    color: #ff0000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/components/booking-type/booking-type.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n   <div [@routerTransition]>\n<app-page-header [heading]=\"'Active Bookings'\" [icon]=\"'fa-fw fa-calendar'\"></app-page-header>\n\n<div class=\"card\">\n    \n    <div class=\"card-header\">\n      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> Booking Type\n    </div>\n\n    <div class=\"clear-filler\"></div>\n    <div class=\"clear-filler\"></div>\n      <form role=\"form\">\n        <div class=\"col-lg-12\">\n        <div class=\"col-lg-3\">\n          <div class=\"pull-left\">\n            <div class=\"input-group\">\n              <span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-info\">\n                      <i class=\"fa fa-search\"></i>\n                  </button>\n              </span>  \n              <input #gb type=\"text\" pInputText class=\"form-control\" placeholder=\"Search\">\n            </div>\n            </div>\n      </div>\n      \n      <div class=\"col-lg-3 col-lg-offset-6\">\n      <div class=\"pull-right\">\n          <button type=\"button\" routerLink=\"../create-booking-type\" class=\"btn btn-info pull-right\">Create Booking Type</button>\n        </div>\n      </div>\n      \n      </div>\n        \n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-12 table-responsive\">\n            <div class=\"clear-filler\"></div>\n            <p-dataTable \n              [value]=\"bookingTypes\" \n              sortMode=\"multiple\" \n              [rows]=\"10\" \n              [paginator]=\"true\" \n              [pageLinks]=\"3\" \n              [rowsPerPageOptions]=\"[10,25,50,100]\" \n              [globalFilter]=\"gb\"\n              #dt> \n            <p-column \n              field=\"name\" \n              header=\"Name\" \n              [sortable]=\"true\" \n              [style]=\"{'width':'20%', 'text-align':'center', 'word-wrap': 'no-wrap'}\"> \n            </p-column>\n            <p-column \n              field=\"serviceType\" \n              header=\"Service Type\" \n              [sortable]=\"true\" \n              [style]=\"{'width':'20%', 'text-align':'center', 'word-wrap': 'no-wrap'}\">\n            </p-column>\n            <!-- <p-column \n              field=\"status\" \n              header=\"Status\" \n              [sortable]=\"true\" \n              [style]=\"{'width':'10%', 'text-align': 'center', 'word-wrap': 'no-wrap'}\">\n              <ng-template \n                let-bookingTypes=\"rowData\" \n                pTemplate=\"body\">\n                  <span \n                    [ngClass]=\"{'text-success': bookingTypes.status == 'ACTIVE', 'text-danger': bookingTypes.status == 'INACTIVE'}\">\n                    {{ bookingTypes.status }}\n                  </span> \n              </ng-template>  \n            </p-column> -->\n            <p-column \n              field=\"price\" \n              header=\"Price\" \n              [sortable]=\"true\" \n              [style]=\"{'width':'20%', 'text-align':'center'}\">\n              <ng-template \n                let-bookings=\"rowData\" \n                pTemplate=\"body\">\n                {{ bookings.price | currency: 'PHP': true}}\n              </ng-template>  \n            </p-column>\n            <p-column \n              field=\"dateUpdated\" \n              header=\"Date Modified\" \n              [sortable]=\"true\" \n              [style]=\"{'width':'20%', 'text-align':'center'}\">\n              <ng-template \n                let-bookings=\"rowData\" \n                pTemplate=\"body\">\n                  <span \n                    *ngIf=\"bookings.updatedTime != null\">\n                    {{ bookings.updatedTime | date: 'dd MMM yyyy hh:mm a': true}}\n                  </span>\n                  <span \n                    *ngIf=\"bookings.updatedTime == null && bookings.createdTime != null\">\n                    {{ bookings.createdTime | date: 'dd MMM yyyy hh:mm a': true}}\n                  </span>\n              </ng-template>  \n            </p-column>\n            <p-column \n              field=\"action\" \n              header=\"Action\" \n              [sortable]=\"false\" \n              [style]=\"{'width':'10%', 'text-align': 'center', 'word-wrap': 'no-wrap'}\">\n              <ng-template \n                let-bookingTypes=\"rowData\" \n                pTemplate=\"body\">\n                <span \n                  class=\"fa fa-search row-action row-search\" \n                  title=\"View\" \n                  (click)=\"getBookingTypeDetailsRow(bookingTypes.bookingTypeId); open(content)\">\n                </span>\n                <span \n                  class=\"fa fa-pencil row-action row-edit\" \n                  title=\"Update\" \n                  [routerLink]=\"['../update-booking-type']\" \n                  [queryParams]=\"{id:bookingTypes.bookingTypeId}\">\n                </span>\n                <span class=\"fa fa-times row-action row-delete\" title=\"Archive\" (click)=\"deleteBookingTypeRow(bookingTypes.bookingTypeId)\"></span>\n              </ng-template>\n            </p-column>\n            </p-dataTable>\n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-12 text-center\">\n            <ngb-alert \n              [type]=\"alert.type\" \n              (close)=\"closeAlert(alert)\" \n              *ngFor=\"let alert of alerts\">\n              {{ alert.message }}\n            </ngb-alert>\n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n\n        <!-- Start - Modal -->\n      <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\"> Booking Type Details</h6>\n          <button type=\"button\" #btnDismiss class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <!--\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Booking ID</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>{{ selectedBookingTypeDetails.bookingTypeId }}</p>\n            </div>\n          </div>\n          -->\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Name</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBookingTypeDetails.name }}\n                <span [hidden]=\"selectedBookingTypeDetails.name != ''\">N/A</span>\n              </p>\n              \n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Service Type</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBookingTypeDetails.serviceType }}\n                <span [hidden]=\"selectedBookingTypeDetails.serviceType != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Inclusion</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBookingTypeDetails.inclusion }}\n                <span [hidden]=\"selectedBookingTypeDetails.inclusion != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Add-Ons</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBookingTypeDetails.addOns }}\n                <span [hidden]=\"selectedBookingTypeDetails.addOns != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n          \n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Price</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBookingTypeDetails.price | currency : 'PHP' : true }}\n              </p>\n            </div>\n          </div>\n          \n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Credits</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBookingTypeDetails.freeCredits }}\n                <span [hidden]=\"selectedBookingTypeDetails.freeCredits != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <!-- <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Date Created</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBookingTypeDetails.createdTime | date : 'dd MMM yyyy hh:mm a' }}\n                <span [hidden]=\"selectedBookingTypeDetails.createdTime != null\">N/A</span>\n              </p>\n            </div>\n          </div> -->\n\n          <div class=\"col-lg-12\">\n              <div class=\"col-lg-6\">\n              <label>Date Modified</label>\n              </div>\n              <div class=\"col-lg-6\">\n              <p *ngIf=\"selectedBookingTypeDetails.updatedTime != null\">{{ selectedBookingTypeDetails.updatedTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n              <p *ngIf=\"selectedBookingTypeDetails.updatedTime == null\">{{ selectedBookingTypeDetails.createdTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n              </div>\n            </div>\n          <!-- <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Status</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <span [ngClass]=\"{'text-success': selectedBookingTypeDetails.status == 'ACTIVE', 'text-danger': selectedBookingTypeDetails.status == 'INACTIVE'}\">{{ selectedBookingTypeDetails.status }}</span>\n              <span [hidden]=\"selectedBookingTypeDetails.status != ''\">N/A</span>\n            </div>\n          </div> -->\n\n        </div>\n\n        <div class=\"modal-footer\">\n            <div class=\"col-lg-12\"> \n              <div class=\"text-center col-lg-12\">\n                <button \n                  type=\"button\" \n                  class=\"btn btn-secondary\" \n                  style=\"margin: 3px 10px;\" \n                  (click)=\"d('Cross click')\">\n                  Close\n                </button>\n              </div>\n              <div class=\"clear-filler\"></div>\n            \n          </div>\n            \n        </div>\n\n      </ng-template>\n      <!-- End - Modal -->\n\n\n  </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/components/booking-type/booking-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__active_bookings_services_active_bookings_service__ = __webpack_require__("../../../../../src/app/layout/active-bookings/services/active-bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookingTypeComponent = (function () {
    function BookingTypeComponent(activeBookingsService, layoutService, modalService) {
        this.activeBookingsService = activeBookingsService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.errorMessage = "Unexpected error encountered.";
        this.loading = false;
        this.bookingTypes = [];
        this.alerts = [];
        this.modalAlerts = [];
        this.myOptions = {
            dateFormat: 'dd/mm/yyyy',
        };
    }
    BookingTypeComponent.prototype.ngOnInit = function () {
        this.getBookingTypes();
    };
    BookingTypeComponent.prototype.getBookingTypes = function () {
        var _this = this;
        this.loading = true;
        this.activeBookingsService.getBookingTypes().subscribe(function (data) {
            _this.bookingTypes = data;
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    BookingTypeComponent.prototype.open = function (content) {
        var _this = this;
        this.modalReference = this.modalService.open(content, { 'size': 'lg', backdrop: 'static', keyboard: false });
        this.modalReference.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    BookingTypeComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    BookingTypeComponent.prototype.getBookingTypeDetailsRow = function (id) {
        var _this = this;
        this.bookingTypes.forEach(function (item, index) {
            if (item.bookingTypeId == id) {
                _this.selectedBookingTypeDetails = _this.bookingTypes[index];
                return false;
            }
        });
    };
    BookingTypeComponent.prototype.deleteBookingTypeRow = function (id) {
        if (confirm("Are you sure you want to archive this Booking Type?")) {
            this.deleteBookingType(id);
        }
    };
    BookingTypeComponent.prototype.deleteBookingType = function (id) {
        var _this = this;
        this.activeBookingsService.deleteBookingType(id).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('Booking Type successfully archived.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.getBookingTypes();
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    BookingTypeComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    BookingTypeComponent.prototype.errModalMessage = function (msg) {
        this.closeActiveModalAlert();
        this.modalAlerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    BookingTypeComponent.prototype.successMessage = function (msg) {
        var _this = this;
        this.closeActiveAlert();
        setTimeout(function () {
            _this.alerts.push({
                id: 1,
                type: 'success',
                message: msg
            });
        }, 500);
        return true;
    };
    BookingTypeComponent.prototype.successModalMessage = function (msg) {
        var _this = this;
        this.closeActiveModalAlert();
        setTimeout(function () {
            _this.modalAlerts.push({
                id: 1,
                type: 'success',
                message: msg
            });
        }, 500);
        return true;
    };
    BookingTypeComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    BookingTypeComponent.prototype.closeModalAlert = function (modalAlerts) {
        var index = this.modalAlerts.indexOf(alert);
        this.modalAlerts.splice(index, 1);
    };
    BookingTypeComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    BookingTypeComponent.prototype.closeActiveModalAlert = function () {
        this.modalAlerts.splice(0, 1);
    };
    BookingTypeComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return BookingTypeComponent;
}());
BookingTypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-booking-type',
        template: __webpack_require__("../../../../../src/app/layout/active-bookings/components/booking-type/booking-type.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/active-bookings/components/booking-type/booking-type.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__active_bookings_services_active_bookings_service__["a" /* ActiveBookingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__active_bookings_services_active_bookings_service__["a" /* ActiveBookingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object])
], BookingTypeComponent);

var _a, _b, _c;
//# sourceMappingURL=booking-type.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/components/create-booking-type/create-booking-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}\n\ntextarea {\n    resize: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/components/create-booking-type/create-booking-type.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Create Booking Type'\" [icon]=\"'fa-fw fa-plus'\"></app-page-header>\n  \n  <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create Booking Type\n    </div>\n\n    <div class=\"clear-filler\"></div>\n    <div class=\"clear-filler\"></div>\n    \n    <form role=\"form\" (ngSubmit)=\"createBookingType()\" ngNativeValidate>\n      <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-lg-12 form-group\">\n              <h4>Booking Type Details</h4>\n          </div>\n        </div>\n      \n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Name <span>*</span></label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" required>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Service Type <span>*</span></label>\n            <select class=\"form-control\" name=\"serviceType\" [(ngModel)]=\"serviceType\" required>\n              <option value=\"\"> - - - Please Select - - - </option>\n              <option value=\"personal\"> PERSONAL </option>\n              <option value=\"business\"> BUSINESS </option>\n            </select>\n          </div>\n        </div>\n\n        \n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Inclusion</label>\n            <textarea class=\"form-control\" rows=\"5\" name=\"inclusion\" [(ngModel)]=\"inclusion\"></textarea>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Add-Ons</label>\n            <textarea class=\"form-control\" rows=\"5\" name=\"addOns\" [(ngModel)]=\"addOns\"></textarea>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>Price </label>\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"price-ico\">PHP</span>\n              <input \n                type=\"number\" \n                step=\"any\" \n                class=\"form-control\" name=\"price\" [(ngModel)]=\"price\" aria-describedby=\"price-ico\" placeholder=\"0.00\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>Credits </label>\n              <div class=\"input-group\">\n                <input \n                  type=\"number\" \n                  step=\"any\" \n                  class=\"form-control\" name=\"credits\" [(ngModel)]=\"credits\" placeholder=\"0\">\n              </div>\n            </div>\n          </div>\n\n        <div class=\"clear-filler\"></div>\n        <div class=\"clear-filler\"></div>\n        \n        <div class=\"col-lg-12 text-center form-group\">\n          <div class=\"col-lg-2 col-lg-offset-4\">\n            <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n          </div>\n          <div class=\"col-lg-2\">\n              <button \n                type=\"button\" \n                routerLink=\"../booking-type\" \n                class=\"btn btn-warning\"> \n                  Cancel \n              </button>\n          </div>\n        </div>\n\n        \n      </div>\n      <div class=\"clear-filler\"></div>\n\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n      </div>\n\n        <div class=\"clear-filler\"></div>\n    </form>\n    \n    \n  \n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/components/create-booking-type/create-booking-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBookingTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__active_bookings_services_active_bookings_service__ = __webpack_require__("../../../../../src/app/layout/active-bookings/services/active-bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__active_bookings_model_booking_type_model__ = __webpack_require__("../../../../../src/app/layout/active-bookings/model/booking-type.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateBookingTypeComponent = (function () {
    function CreateBookingTypeComponent(activeBookingsService, layoutService, modalService, router) {
        this.activeBookingsService = activeBookingsService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.router = router;
        this.errorMessage = "Unexpected error encountered.";
        this.bookingTypeDetails = new __WEBPACK_IMPORTED_MODULE_5__active_bookings_model_booking_type_model__["a" /* BookingTypeDto */];
        this.bookingTypeId = '';
        this.status = '';
        this.serviceType = '';
        this.name = '';
        this.inclusion = '';
        this.addOns = '';
        this.updatedTime = new Date();
        this.createdTime = new Date();
        // dateOfBirthUI: any = [];
        // dateOfBirth: string;
        this.alerts = [];
        this.myOptions = {
            dateFormat: 'dd/mm/yyyy',
        };
    }
    CreateBookingTypeComponent.prototype.ngOnInit = function () { };
    CreateBookingTypeComponent.prototype.onDateChanged = function (event) {
        // on date change
    };
    CreateBookingTypeComponent.prototype.createBookingType = function () {
        // if(this.dateOfBirthUI.length != 0){
        //   let datePipe = new DatePipe("en-US"),
        //   d = this.dateOfBirthUI.date.day,
        //   m = this.dateOfBirthUI.date.month,
        //   y = this.dateOfBirthUI.date.year;
        //   this.dateOfBirth = datePipe.transform(y + '-' + m + '-' + d, 'y-MM-dd');
        // }
        var param = [];
        param.push({
            "status": "ACTIVE",
            "serviceType": this.serviceType.toLocaleUpperCase(),
            "name": this.name,
            "price": this.price,
            "inclusion": this.inclusion,
            "addOns": this.addOns,
            "freeCredits": this.credits
        });
        this.saveBookingType(param[0]);
    };
    CreateBookingTypeComponent.prototype.saveBookingType = function (bookingTypeDetails) {
        var _this = this;
        this.activeBookingsService.createBookingType(bookingTypeDetails).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('Booking Type successfully added.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('booking/booking-type');
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
            _this.errMessage(_this.errorMessage);
        });
    };
    CreateBookingTypeComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    CreateBookingTypeComponent.prototype.successMessage = function (msg) {
        var _this = this;
        this.closeActiveAlert();
        setTimeout(function () {
            _this.alerts.push({
                id: 1,
                type: 'success',
                message: msg
            });
        }, 500);
        return true;
    };
    CreateBookingTypeComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    CreateBookingTypeComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    CreateBookingTypeComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return CreateBookingTypeComponent;
}());
CreateBookingTypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-booking-type',
        template: __webpack_require__("../../../../../src/app/layout/active-bookings/components/create-booking-type/create-booking-type.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/active-bookings/components/create-booking-type/create-booking-type.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__active_bookings_services_active_bookings_service__["a" /* ActiveBookingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__active_bookings_services_active_bookings_service__["a" /* ActiveBookingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object])
], CreateBookingTypeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-booking-type.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/components/update-booking-type/update-booking-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}\n\ntextarea {\n    resize: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/components/update-booking-type/update-booking-type.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n    <app-page-header [heading]=\"'Update Booking Type'\" [icon]=\"'fa-fw fa-pencil-square-o'\"></app-page-header>\n    \n    <!-- <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert> -->\n\n    <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Update Booking Type\n      </div>\n  \n      <div class=\"clear-filler\"></div>\n      <div class=\"clear-filler\"></div>\n      \n      <form role=\"form\" (ngSubmit)=\"updateBookingType()\" ngNativeValidate>\n          <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n          <div class=\"col-lg-12\">\n              <div class=\"col-lg-12 form-group\">\n                <h4>Booking Type Details</h4>\n            </div>\n          </div>\n        \n\n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Name <span>*</span></label>\n              <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" readonly>\n            </div>\n          </div>\n        \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Service Type <span>*</span></label>\n              <select class=\"form-control\" name=\"serviceType\" [(ngModel)]=\"serviceType\" required>\n                <option value=\"\"> - - - Please Select - - - </option>\n                <option value=\"personal\"> PERSONAL </option>\n                <option value=\"business\"> BUSINESS </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Inclusion</label>\n              <textarea class=\"form-control\" rows=\"5\" name=\"inclusion\" [(ngModel)]=\"inclusion\"></textarea>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Add-Ons</label>\n              <textarea class=\"form-control\" rows=\"5\" name=\"addOns\" [(ngModel)]=\"addOns\"></textarea>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>Price </label>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\" id=\"price-ico\">PHP</span>\n                <input \n                  type=\"number\" \n                  step=\"any\" \n                  class=\"form-control\" name=\"price\" [(ngModel)]=\"price\" aria-describedby=\"price-ico\" placeholder=\"0.00\">\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"col-lg-12 form-group\">\n              <div class=\"col-lg-6\">\n                <label>Credits </label>\n                <div class=\"input-group\">\n                  <input \n                    type=\"number\" \n                    step=\"any\" \n                    class=\"form-control\" name=\"credits\" [(ngModel)]=\"credits\" placeholder=\"0\">\n                </div>\n              </div>\n            </div>\n  \n          <div class=\"clear-filler\"></div>\n          <div class=\"clear-filler\"></div>\n          <div class=\"col-lg-12 text-center form-group\">\n            <div class=\"col-lg-2 col-lg-offset-4\">\n              <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n            </div>\n            <div class=\"col-lg-2\">\n              <button \n                type=\"button\" \n                routerLink=\"../booking-type\" \n                class=\"btn btn-warning\"> \n                  Cancel \n              </button>\n            </div>\n          </div>\n  \n        </div>\n      </form>\n      <div class=\"clear-filler\"></div>\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n          <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        </div>\n      <div class=\"clear-filler\"></div>\n    \n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/components/update-booking-type/update-booking-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateBookingTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__active_bookings_services_active_bookings_service__ = __webpack_require__("../../../../../src/app/layout/active-bookings/services/active-bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__active_bookings_model_booking_type_model__ = __webpack_require__("../../../../../src/app/layout/active-bookings/model/booking-type.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateBookingTypeComponent = (function () {
    function UpdateBookingTypeComponent(activeBookingsService, layoutService, modalService, activatedRoute, router) {
        this.activeBookingsService = activeBookingsService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.errorMessage = "Unexpected error encountered.";
        this.bookingTypeDetails = new __WEBPACK_IMPORTED_MODULE_5__active_bookings_model_booking_type_model__["a" /* BookingTypeDto */];
        this.bookingTypeId = '';
        this.status = '';
        this.serviceType = '';
        this.name = '';
        this.inclusion = '';
        this.addOns = '';
        this.updatedTime = new Date();
        this.createdTime = new Date();
        // dateOfBirthUI: any = [];
        // dateOfBirth: string;
        this.alerts = [];
        this.myOptions = {
            dateFormat: 'dd/mm/yyyy',
        };
    }
    UpdateBookingTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.bookingTypeId = params['id'];
            _this.readBookingType(_this.bookingTypeId);
        });
    };
    UpdateBookingTypeComponent.prototype.onDateChanged = function (event) {
        // on date change
    };
    UpdateBookingTypeComponent.prototype.readBookingType = function (selectedId) {
        var _this = this;
        this.activeBookingsService.readBookingType(selectedId).subscribe(function (data) {
            _this.serviceType = data.serviceType.toLowerCase();
            _this.name = data.name;
            _this.price = data.price.toFixed(2);
            _this.inclusion = data.inclusion;
            _this.addOns = data.addOns;
            _this.credits = parseInt(data.freeCredits);
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    UpdateBookingTypeComponent.prototype.updateBookingType = function () {
        var param = [];
        param.push({
            "status": "ACTIVE",
            "serviceType": this.serviceType.toLocaleUpperCase(),
            "name": this.name,
            "price": this.price,
            "inclusion": this.inclusion,
            "addOns": this.addOns,
            freeCredits: this.credits
        });
        this.saveBookingType(param[0]);
    };
    UpdateBookingTypeComponent.prototype.saveBookingType = function (bookingTypeDetails) {
        var _this = this;
        this.activeBookingsService.updateBookingType(this.bookingTypeId, bookingTypeDetails).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('Booking Type successfully updated.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('booking/booking-type');
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    UpdateBookingTypeComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    UpdateBookingTypeComponent.prototype.successMessage = function (msg) {
        var _this = this;
        this.closeActiveAlert();
        setTimeout(function () {
            _this.alerts.push({
                id: 1,
                type: 'success',
                message: msg
            });
        }, 500);
        return true;
    };
    UpdateBookingTypeComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    UpdateBookingTypeComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    UpdateBookingTypeComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return UpdateBookingTypeComponent;
}());
UpdateBookingTypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-booking-type',
        template: __webpack_require__("../../../../../src/app/layout/active-bookings/components/update-booking-type/update-booking-type.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/active-bookings/components/update-booking-type/update-booking-type.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__active_bookings_services_active_bookings_service__["a" /* ActiveBookingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__active_bookings_services_active_bookings_service__["a" /* ActiveBookingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _e || Object])
], UpdateBookingTypeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=update-booking-type.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/model/booking-type.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingTypeDto; });
var BookingTypeDto = (function () {
    function BookingTypeDto() {
        this.bookingTypeId = '';
        this.status = '';
        this.serviceType = '';
        this.name = '';
        this.price = 0;
        this.inclusion = '';
        this.addOns = '';
        this.updatedTime = new Date();
        this.createdTime = new Date();
    }
    return BookingTypeDto;
}());

//# sourceMappingURL=booking-type.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/active-bookings/services/active-bookings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveBookingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_throw__ = __webpack_require__("../../../../rxjs/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActiveBookingsService = (function () {
    function ActiveBookingsService(http) {
        this.http = http;
        this.env = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].envName.toLocaleLowerCase();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].baseUrl;
        this.apiPath = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].apiPath;
        console.log('env: ', this.env);
        console.log('service: ', this.baseUrl);
    }
    ActiveBookingsService.prototype.getBookings = function () {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            path = "/bookings.json";
        }
        else {
            path = "/bookings/";
        }
        query = this.baseUrl + this.apiPath + path;
        result = this.http.get(encodeURI(query)).map(function (res) { return res.json(); });
        return result;
    };
    ActiveBookingsService.prototype.readBooking = function (id) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            path = "/read-booking.json";
        }
        else {
            path = "/bookings/" + id;
        }
        query = this.baseUrl + this.apiPath + path;
        result = this.http.get(encodeURI(query)).map(function (res) { return res.json(); });
        return result;
    };
    ActiveBookingsService.prototype.getBookingTypes = function () {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            path = "/booking-type.json";
        }
        else {
            path = "/bookingType/?status=ACTIVE";
        }
        query = this.baseUrl + this.apiPath + path;
        result = this.http.get(encodeURI(query)).map(function (res) { return res.json(); });
        return result;
    };
    ActiveBookingsService.prototype.readBookingType = function (id) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            path = "/read-booking-type.json";
        }
        else {
            path = "/bookingType/" + id;
        }
        query = this.baseUrl + this.apiPath + path;
        result = this.http.get(encodeURI(query)).map(function (res) { return res.json(); });
        return result;
    };
    ActiveBookingsService.prototype.createBookingType = function (param) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/bookingType/";
            query = this.baseUrl + this.apiPath + path;
            result = this.http.post(encodeURI(query), param, options).map(function (res) { return res.json(); });
        }
        return result;
    };
    ActiveBookingsService.prototype.updateBookingType = function (id, param) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/bookingType/" + id;
            query = this.baseUrl + this.apiPath + path;
            result = this.http.put(encodeURI(query), param, options).map(function (res) { return res.json(); });
        }
        return result;
    };
    ActiveBookingsService.prototype.deleteBookingType = function (id) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/bookingType/" + id;
            query = this.baseUrl + this.apiPath + path;
            result = this.http.put(encodeURI(query), { "status": "INACTIVE" }, options).map(function (res) { return res.json(); });
        }
        return result;
    };
    ActiveBookingsService.prototype.acceptBooking = function (bookingId, photographerEmail) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/bookings/" + bookingId + "/approve/?photographerEmail=" + photographerEmail;
            query = this.baseUrl + this.apiPath + path;
            console.log(encodeURI(query));
            result = this.http.put(encodeURI(query), options).map(function (res) { return res.json(); });
        }
        return result;
    };
    ActiveBookingsService.prototype.declineBooking = function (bookingId) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/bookings/" + bookingId + "/decline";
            query = this.baseUrl + this.apiPath + path;
            console.log(encodeURI(query));
            result = this.http.put(encodeURI(query), options).map(function (res) { return res.json(); });
        }
        return result;
    };
    ActiveBookingsService.prototype.completeBooking = function (bookingId) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/bookings/" + bookingId + "/complete";
            query = this.baseUrl + this.apiPath + path;
            console.log(encodeURI(query));
            result = this.http.put(encodeURI(query), options).map(function (res) { return res.json(); });
        }
        return result;
    };
    ActiveBookingsService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json"
        });
    };
    return ActiveBookingsService;
}());
ActiveBookingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ActiveBookingsService);

var _a;
//# sourceMappingURL=active-bookings.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/customer-support/components/customer-support/customer-support.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table td {\n    border-width: 0px;\n}\n\n.flightNumber {\n    color: blue !important;\n    text-decoration: underline !important;\n}\n\n.flightNumber:hover {\n    color: skyblue !important;\n}\n\n.flight-table > tbody > tr > td:first-child {\n    width: 200px !important;\n}\n\n.flight-table > tbody > tr {\n    line-height: 10px !important;\n}\n\n.row-action {\n    margin: 0 3px;\n    cursor: pointer;\n}\n\n.row-search {\n    color: #FF8D33;\n}\n\n.row-return {\n    color: #00cc00;\n}\n\n.row-delete {\n    color: #ff0000;\n}\n\n.action-disabled {\n    color: #dddddd;\n    pointer-events: none;\n    cursor: not-allowed\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/customer-support/components/customer-support/customer-support.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Customer Support'\" [icon]=\"'fa fa-desktop'\"></app-page-header>\n\n    <div class=\"card text-center\">\n      <div class=\"card-header\">\n          User Details\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row\">\n        \n           <!-- search email -->\n          <div class=\"col-xl-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search by Email\n              </div>\n\n                  <form role=\"form\" (ngSubmit)=\"searchAccountDetails()\" ngNativeValidate>\n              <div class=\"card-block\">\n                  \n                  <div class=\"form-group input-group\">\n                    <span class=\"input-group-addon\">@</span>\n                    <input type=\"email\" name = \"email\" class=\"form-control\" placeholder=\"Email Address\" [(ngModel)]=\"email\" required />\n                  </div>\n                \n              </div>\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-success\"> Search </button>\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"clear()\"> Clear </button>\n              </div>\n            </form>\n            </div>\n          </div>\n        \n          <!--  user Details -->\n          <div class=\"col-xl-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i> User Details \n              </div>\n              <div class=\"card-block table-responsive\">\n                <table class=\"table\" style=\"text-align:left; border:0px\">\n                  <tbody>\n                    <tr>\n                      <td>Account ID:</td>\n                      <td>{{ account.accountId }}</td>\n                    </tr>\n                    <tr>\n                      <td>First Name:</td>\n                      <td>{{ account.firstName }}</td>\n                    </tr>\n                    <tr>\n                      <td>Last Name:</td>\n                      <td>{{ account.lastName }}</td>\n                    </tr>\n                    <tr>\n                      <td>Gender:</td>\n                      <td> {{ account.gender }}</td>\n                    </tr>\n                    <tr>\n                      <td>Email Address:</td>\n                      <td>{{ account.email }}</td>\n                    </tr>\n                    <tr>\n                      <td>Birthday:</td>\n                      <td>{{ account.birthday }}</td>\n                    </tr>\n                    <tr>\n                      <td>Contact No:</td>\n                      <td> {{ account.mobileNumber }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n  <div class=\"clear-filler\"></div>\n\n    <div class=\"card text-default\">\n      <div class=\"card-header\" align=\"center\">\n        <i class=\"fa fa-calendar\" aria-hidden=\"true\"> </i> User Flight History\n        \n      </div>\n      <div class=\"clear-filler\"></div>\n      <div class=\"clear-filler\"></div>\n\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-12 table-responsive\">\n          \n          <div class=\"pull-right\">\n            <div class=\"input-group\">\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-info\">\n                        <i class=\"fa fa-search\"></i>\n                    </button>\n                </span>  \n              <input #gb type=\"text\" pInputText class=\"form-control\" placeholder=\"Search\">\n            </div>\n          </div>\n\n          <div class=\"clear-filler\"></div>\n\n          <p-dataTable tableStyleClass=\"table-hover\" [value]=\"flights\" sortMode=\"multiple\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,25,50,100]\" [globalFilter]=\"gb\" #dt> \n          <p-column header=\"Departure Date\" [sortable]=\"true\" [style]=\"{'width':'12%', 'text-align':'center'}\">\n            <ng-template let-flightDetails=\"rowData\" pTemplate=\"body\">\n                {{ flightDetails.flight.departureDate | date : 'dd MMM y' }}\n            </ng-template>\n          </p-column>\n          \n          <p-column field=\"flight.airline.name\" header=\"Airline Name\" [sortable]=\"true\" [style]=\"{'width':'23%', 'text-align':'center'}\"> </p-column>\n          <p-column field=\"bookingId\" header=\"Booking Id\" [sortable]=\"true\" [style]=\"{'width':'30%', 'text-align':'center'}\"> </p-column>\n          \n          <p-column field=\"flight.flightNumber\" header=\"Flight Number\" [sortable]=\"true\" [style]=\"{'width':'20%', 'text-align':'center'}\"> </p-column>\n          <p-column field=\"status\" header=\"Status\" [sortable]=\"true\" [style]=\"{'width':'15%', 'text-align':'center'}\"> </p-column>\n          \n          <p-column header=\"Action\" [sortable]=\"false\" [style]=\"{'width':'10%', 'text-align': 'center'}\">\n            <ng-template let-flightDetails=\"rowData\" pTemplate=\"body\">\n                <span class=\"fa fa-search row-action row-search\" title=\"View\" (click)=\"getFlightDetailsRow(flightDetails.id); open(content)\"></span>\n                <span class=\"fa fa-rotate-left row-action row-return\" title=\"Refund\" (click)=\"refundBooking(flightDetails.id)\"></span>\n                <span class=\"fa fa-times-circle row-action row-delete\" title=\"Cancel Booking\" [ngClass]=\"{'action-disabled': cancelledButtonDisable(flightDetails.status)}\" (click)=\"cancelBooking(flightDetails.id)\"></span>\n            </ng-template>\n          </p-column>\n          </p-dataTable>\n\n        </div>\n      </div>\n\n  </div>\n  \n  <!-- Start - Modal -->\n    \n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h6 class=\"modal-title\"> Flight Details</h6>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      \n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-6\">\n          <label>Booking ID</label>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>{{ selectedFlight.bookingId }}</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-6\">\n          <label>Flight ID</label>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>{{ selectedFlight.flight.flightId }}</p>\n        </div>\n      </div>\n      \n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-6\">\n          <label>Flight No.</label>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>{{ selectedFlight.flight.flightNumber }}</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-6\">\n          <label>Airline Name</label>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>{{ selectedFlight.flight.airline.name }}</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-6\">\n          <label>Origin</label>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>{{ selectedFlight.flight.airportOrigin.name }}</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-6\">\n          <label>Destination</label>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>{{ selectedFlight.flight.airportDestination.name }}</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-6\">\n          <label>Departure Date &amp; Time</label>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>{{ selectedFlight.flight.departureDateTime | date : 'dd MMM y hh:mm a' }}</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-6\">\n          <label>Arrival Date &amp; Time</label>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>{{ selectedFlight.flight.arrivalDateTime | date : 'dd MMM y hh:mm a' }}</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-6\">\n          <label>Flight Duration</label>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>{{ selectedFlight.flight.flightDuration }}</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-6\">\n          <label>Regular Ticket Price</label>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>{{ selectedFlight.flight.ticketPrice.regular | currency : 'USD' : true }}</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-6\">\n          <label>Cape Ticket Price</label>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>{{ selectedFlight.flight.ticketPrice.cape | currency : 'USD' : true }}</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-6\">\n          <label>Bid Ticket Price</label>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>{{ selectedFlight.flight.ticketPrice.bidPrice | currency : 'USD' : true }}</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-6\">\n          <label>Status</label>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>{{ selectedFlight.status }}</p>\n        </div>\n      </div>\n    \n\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n    </div>\n  </ng-template>\n\n  <!-- End - Modal -->\n\n  "

/***/ }),

/***/ "../../../../../src/app/layout/customer-support/components/customer-support/customer-support.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSupportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_support_services_customer_support_service__ = __webpack_require__("../../../../../src/app/layout/customer-support/services/customer-support.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_support_model_customer_support_model__ = __webpack_require__("../../../../../src/app/layout/customer-support/model/customer-support.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerSupportComponent = (function () {
    function CustomerSupportComponent(customerSupportService, layoutService, modalService) {
        this.customerSupportService = customerSupportService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.account = new __WEBPACK_IMPORTED_MODULE_4__customer_support_model_customer_support_model__["a" /* AccountDto */];
        // flights: FlightDto[];
        this.flights = [];
        this.loading = false;
        this.errorMessage = "Unexpected error encountered.";
    }
    CustomerSupportComponent.prototype.ngOnInit = function () {
        this.flights = [];
    };
    CustomerSupportComponent.prototype.searchAccountDetails = function () {
        var _this = this;
        this.loading = true;
        this.customerSupportService.getAccountDetails(this.email).subscribe(function (data) {
            if (data.accountId != null) {
                _this.account.accountId = data.accountId;
                _this.account.firstName = data.firstName;
                _this.account.lastName = data.lastName;
                _this.account.gender = data.gender;
                _this.account.birthday = data.birthday;
                _this.account.mobileNumber = data.mobileNumber;
                _this.account.email = data.user.email;
                _this.account.status = data.user.status;
                _this.account.photoUrl = data.user.photoUrl;
                _this.account.firebaseId = data.user.firebaseId;
                _this.getFlightDetails(_this.account.accountId);
            }
            else {
                _this.errMessage("Email does not exist.");
                _this.clear();
            }
        }, function (err) {
            console.log(err);
        });
        this.loading = false;
    };
    CustomerSupportComponent.prototype.getFlightDetails = function (accountId) {
        var _this = this;
        this.customerSupportService.getFlightDetails(accountId).subscribe(function (data) {
            if (data.count != 0) {
                //console.log(data.items[0].flightId);
                _this.flights = data.results;
            }
        }, function (err) {
            console.log(err);
        });
    };
    // setDataToFlights(data: any []) {
    //   for (let obj of data) {
    //     let flight :FlightDto = {
    //       departureDate: obj.flight.departureDate,
    //       airlineName: obj.flight.airline.name,
    //       bookingId: obj.bookingId,
    //       flightNumber: obj.flight.flightNumber
    //     }
    //     this.flights.push(flight);
    //   }
    // }
    CustomerSupportComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { 'size': 'lg', backdrop: 'static', keyboard: false }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    CustomerSupportComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    /**
      private getFlightRow(flight:any) {
        this.selectedFlight = flight;
        return false;
      }
    */
    CustomerSupportComponent.prototype.getFlightDetailsRow = function (id) {
        var _this = this;
        this.flights.forEach(function (item, index) {
            if (item.id == id) {
                _this.selectedFlight = _this.flights[index];
                return false;
            }
        });
    };
    CustomerSupportComponent.prototype.cancelBooking = function (flightBookingId) {
        if (confirm("Are you sure you want to cancel this booking?")) {
            this.cancelFLightBooking(flightBookingId);
        }
    };
    CustomerSupportComponent.prototype.refundBooking = function (flightBookingId) {
        if (confirm("Are you sure you want to refund this booking?")) {
            this.refundFLightBooking(flightBookingId);
        }
    };
    CustomerSupportComponent.prototype.cancelFLightBooking = function (flightBookingId) {
        var _this = this;
        this.customerSupportService.cancelBooking(flightBookingId).subscribe(function (data) {
            if (data.result) {
                alert('Booking successfully cancelled.');
                _this.searchAccountDetails();
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
        /**
        this.loading = true;
        let bookingId:string = flight.bookingId;
        let cancellationChargeAmount:number = flight.paymentTransaction.cancellationCharge;
        this.customerSupportService.cancelBooking(bookingId, 0).subscribe(
          resp => {
            this.getFlightDetails(this.account.accountId);
            this.loading = false;
          }, err => {
            this.loading = false;
          }, () => {}
        );
        */
    };
    CustomerSupportComponent.prototype.refundFLightBooking = function (flightBookingId) {
        var _this = this;
        this.customerSupportService.refundBooking(flightBookingId).subscribe(function (data) {
            if (data.result) {
                alert('Booking successfully refunded.');
                _this.searchAccountDetails();
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CustomerSupportComponent.prototype.clear = function () {
        this.errorMessage = "";
        this.email = "";
        this.account = new __WEBPACK_IMPORTED_MODULE_4__customer_support_model_customer_support_model__["a" /* AccountDto */]();
        this.flights = [];
    };
    CustomerSupportComponent.prototype.cancelledButtonDisable = function (bookingStatus) {
        if (bookingStatus == 'PENDING') {
            return false;
        }
        else {
            return true;
        }
    };
    CustomerSupportComponent.prototype.errMessage = function (msg) {
        alert(msg);
        return false;
    };
    return CustomerSupportComponent;
}());
CustomerSupportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customer-support',
        template: __webpack_require__("../../../../../src/app/layout/customer-support/components/customer-support/customer-support.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/customer-support/components/customer-support/customer-support.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__customer_support_services_customer_support_service__["a" /* CustomerSupportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__customer_support_services_customer_support_service__["a" /* CustomerSupportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object])
], CustomerSupportComponent);

var _a, _b, _c;
//# sourceMappingURL=customer-support.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/customer-support/customer-support-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSupportRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_customer_support_customer_support_component__ = __webpack_require__("../../../../../src/app/layout/customer-support/components/customer-support/customer-support.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_customer_support_customer_support_component__["a" /* CustomerSupportComponent */] }
];
var CustomerSupportRoutingModule = (function () {
    function CustomerSupportRoutingModule() {
    }
    return CustomerSupportRoutingModule;
}());
CustomerSupportRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], CustomerSupportRoutingModule);

//# sourceMappingURL=customer-support-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/customer-support/customer-support.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSupportModule", function() { return CustomerSupportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_support_routing_module__ = __webpack_require__("../../../../../src/app/layout/customer-support/customer-support-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_customer_support_customer_support_component__ = __webpack_require__("../../../../../src/app/layout/customer-support/components/customer-support/customer-support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_customer_support_service__ = __webpack_require__("../../../../../src/app/layout/customer-support/services/customer-support.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CustomerSupportModule = (function () {
    function CustomerSupportModule() {
    }
    return CustomerSupportModule;
}());
CustomerSupportModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__customer_support_routing_module__["a" /* CustomerSupportRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__shared__["c" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_loading__["a" /* LoadingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__components_customer_support_customer_support_component__["a" /* CustomerSupportComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_customer_support_service__["a" /* CustomerSupportService */]]
    })
], CustomerSupportModule);

//# sourceMappingURL=customer-support.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/customer-support/model/customer-support.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountDto; });
/* unused harmony export FlightDto */
var AccountDto = (function () {
    function AccountDto() {
    }
    return AccountDto;
}());

var FlightDto = (function () {
    function FlightDto() {
    }
    return FlightDto;
}());

//# sourceMappingURL=customer-support.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/customer-support/services/customer-support.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSupportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_throw__ = __webpack_require__("../../../../rxjs/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomerSupportService = (function () {
    function CustomerSupportService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].baseUrl;
        this.apiPath = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].apiPath;
    }
    CustomerSupportService.prototype.getAccountDetails = function (email) {
        var path = this.baseUrl + this.apiPath + "accounts/" + email + "/";
        if (__WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].envName == 'Local') {
            path = this.baseUrl + this.apiPath + '/account.json';
        }
        var query = path;
        return this.http.get(query).map(function (res) { return res.json(); });
    };
    CustomerSupportService.prototype.getFlightDetails = function (accountId) {
        var query = this.baseUrl + this.apiPath + '/dummy.json';
        return this.http.get(query).map(function (res) { return res.json(); });
    };
    /**
    cancelBooking(bookingId, cancellationChargeAmount) {
      let query = this.baseUrl + "/_ah/api/endpoint/v1/bookings/"
      + bookingId
      + "/cancel/"
      + cancellationChargeAmount
      + "/";
      return this.http.post(query, null, { headers: this.getHeaders()})
              .map((response: Response) => response.json());
    }
    */
    CustomerSupportService.prototype.cancelBooking = function (id) {
        //let query = this.baseUrl + "/flights.delete.php";
        var query = "http://www.quisi.net/mycape-test-api/booking.cancel.php";
        return this.http.post(query, id, { headers: this.getHeaders() }).map(function (response) { return response.json(); });
    };
    CustomerSupportService.prototype.refundBooking = function (id) {
        //let query = this.baseUrl + "/flights.delete.php";
        var query = "http://www.quisi.net/mycape-test-api/booking.refund.php";
        return this.http.post(query, id, { headers: this.getHeaders() }).map(function (response) { return response.json(); });
    };
    CustomerSupportService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-cape-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImQySXpPV015WTJSbE5UbGlOVFJrTjJNeU16TTRZV00wT0RBNU5tSXhOR0U0T0RRMU5UWTNZbUZoIiwiYXBwS2V5IjoiZDJKbE16ZG1OVE5qWW1NMk0yVmpPRE5tTkdJeE0ySmtNamcwTUdaaE1UZzFORE0zWkRjd1lUUXkiLCJwbGF0Zm9ybSI6IldFQiIsImNoYW5uZWwiOiJDQVBFIn0.yqp5Y4_hgrB3a3b9-v8MKSvAVqCAPmkn_rX5_kyY3Qc',
            "Content-Type": "application/json"
        });
    };
    CustomerSupportService.prototype._errorHandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || "Server Error");
    };
    return CustomerSupportService;
}());
CustomerSupportService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CustomerSupportService);

var _a;
//# sourceMappingURL=customer-support.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli);", ""]);

// module
exports.push([module.i, "@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-11 {\n    width: 91.66666667%; }\n  .col-sm-10 {\n    width: 83.33333333%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-8 {\n    width: 66.66666667%; }\n  .col-sm-7 {\n    width: 58.33333333%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-5 {\n    width: 41.66666667%; }\n  .col-sm-4 {\n    width: 33.33333333%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-2 {\n    width: 16.66666667%; }\n  .col-sm-1 {\n    width: 8.33333333%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-pull-11 {\n    right: 91.66666667%; }\n  .col-sm-pull-10 {\n    right: 83.33333333%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-8 {\n    right: 66.66666667%; }\n  .col-sm-pull-7 {\n    right: 58.33333333%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-5 {\n    right: 41.66666667%; }\n  .col-sm-pull-4 {\n    right: 33.33333333%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-2 {\n    right: 16.66666667%; }\n  .col-sm-pull-1 {\n    right: 8.33333333%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-push-11 {\n    left: 91.66666667%; }\n  .col-sm-push-10 {\n    left: 83.33333333%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-8 {\n    left: 66.66666667%; }\n  .col-sm-push-7 {\n    left: 58.33333333%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-5 {\n    left: 41.66666667%; }\n  .col-sm-push-4 {\n    left: 33.33333333%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-2 {\n    left: 16.66666667%; }\n  .col-sm-push-1 {\n    left: 8.33333333%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-offset-12 {\n    margin-left: 100%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%; }\n  .col-sm-offset-0 {\n    margin-left: 0; } }\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-11 {\n    width: 91.66666667%; }\n  .col-md-10 {\n    width: 83.33333333%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-8 {\n    width: 66.66666667%; }\n  .col-md-7 {\n    width: 58.33333333%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-5 {\n    width: 41.66666667%; }\n  .col-md-4 {\n    width: 33.33333333%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-2 {\n    width: 16.66666667%; }\n  .col-md-1 {\n    width: 8.33333333%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-pull-11 {\n    right: 91.66666667%; }\n  .col-md-pull-10 {\n    right: 83.33333333%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-8 {\n    right: 66.66666667%; }\n  .col-md-pull-7 {\n    right: 58.33333333%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-5 {\n    right: 41.66666667%; }\n  .col-md-pull-4 {\n    right: 33.33333333%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-2 {\n    right: 16.66666667%; }\n  .col-md-pull-1 {\n    right: 8.33333333%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-push-11 {\n    left: 91.66666667%; }\n  .col-md-push-10 {\n    left: 83.33333333%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-8 {\n    left: 66.66666667%; }\n  .col-md-push-7 {\n    left: 58.33333333%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-5 {\n    left: 41.66666667%; }\n  .col-md-push-4 {\n    left: 33.33333333%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-2 {\n    left: 16.66666667%; }\n  .col-md-push-1 {\n    left: 8.33333333%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-offset-12 {\n    margin-left: 100%; }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%; }\n  .col-md-offset-0 {\n    margin-left: 0; } }\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-11 {\n    width: 91.66666667%; }\n  .col-lg-10 {\n    width: 83.33333333%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-8 {\n    width: 66.66666667%; }\n  .col-lg-7 {\n    width: 58.33333333%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-5 {\n    width: 41.66666667%; }\n  .col-lg-4 {\n    width: 33.33333333%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-2 {\n    width: 16.66666667%; }\n  .col-lg-1 {\n    width: 8.33333333%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-pull-11 {\n    right: 91.66666667%; }\n  .col-lg-pull-10 {\n    right: 83.33333333%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-8 {\n    right: 66.66666667%; }\n  .col-lg-pull-7 {\n    right: 58.33333333%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-5 {\n    right: 41.66666667%; }\n  .col-lg-pull-4 {\n    right: 33.33333333%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-2 {\n    right: 16.66666667%; }\n  .col-lg-pull-1 {\n    right: 8.33333333%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-push-11 {\n    left: 91.66666667%; }\n  .col-lg-push-10 {\n    left: 83.33333333%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-8 {\n    left: 66.66666667%; }\n  .col-lg-push-7 {\n    left: 58.33333333%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-5 {\n    left: 41.66666667%; }\n  .col-lg-push-4 {\n    left: 33.33333333%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-2 {\n    left: 16.66666667%; }\n  .col-lg-push-1 {\n    left: 8.33333333%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-offset-12 {\n    margin-left: 100%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%; }\n  .col-lg-offset-0 {\n    margin-left: 0; } }\n\nbody, .form-control, table {\n  font-family: \"Muli\", sans-serif !important; }\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.clear-filler {\n  display: block;\n  padding: 1%;\n  width: 100%;\n  float: left; }\n\n.main-container {\n  margin-top: 50px;\n  margin-left: 235px;\n  padding: 50px 30px 20px 30px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/layout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_throw__ = __webpack_require__("../../../../rxjs/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LayoutService = (function () {
    function LayoutService(http) {
        this.http = http;
        this.env = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].envName.toLocaleLowerCase();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl;
        this.apiPath = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].apiPath;
    }
    LayoutService.prototype.getUsers = function () {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            path = "/users.json";
        }
        else {
            path = "/users/?status=ACTIVE";
        }
        query = this.baseUrl + this.apiPath + path;
        console.log(query);
        result = this.http.get(encodeURI(query)).map(function (res) { return res.json(); });
        return result;
    };
    // getCountry(){
    //   return this.http.get("assets/api-dummy-data/country.json").map(res => res.json());
    // }
    // getTimeZone(){
    //   return this.http.get("assets/api-dummy-data/timezone.json").map(res => res.json());
    // }
    LayoutService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json"
        });
    };
    return LayoutService;
}());
LayoutService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LayoutService);

var _a;
//# sourceMappingURL=layout.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/photos/components/photos/photos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".expansion-panel__content{\n    margin-left: 0% !important;\n}\n\n.expansion-panel--toggled .expansion-panel__header {\n    border-bottom: solid 1px rgba(145, 145, 145, 0.2);\n    background-color: #f7f7f9\n}\n\n.preview-img-holder {\n    max-height:235px;\n    max-width:235px;\n    width:235px;\n    height:235px;\n    margin-bottom:25px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.photolist-container {\n    padding: 20px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/photos/components/photos/photos.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n<app-page-header [heading]=\"'Photos'\" [icon]=\"'fa-fw fa-camera'\"></app-page-header>\n\n  <div class=\"card\">\n  <form role=\"form\" method=\"post\" enctype=\"multipart/form-data\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> Photos\n    </div>\n\n      <div class=\"col-lg-12 photolist-container\">\n        <expansion-panels-container>\n          <expansion-panel \n            *ngFor=\"let booking of bookings\" \n            (onOpen)=\"callFetchPhotos(booking.bookingId)\">\n              <expansion-panel-title>\n                {{ booking.dateTime | date: 'dd MMM yyyy hh:mm a': true}}\n              </expansion-panel-title>\n      \n              <expansion-panel-description-hidden>\n                {{booking.customer.firstName + ' ' + booking.customer.lastName + '&nbsp;&nbsp;&nbsp;('+ booking.bookingType.serviceType + ' &mdash; ' + booking.bookingType.name + ')' }}\n              </expansion-panel-description-hidden>\n      \n              <expansion-panel-description-toggled>\n                {{booking.customer.firstName + ' ' + booking.customer.lastName + '&nbsp;&nbsp;&nbsp;('+ booking.bookingType.serviceType + ' &mdash; ' + booking.bookingType.name + ')' }}\n              </expansion-panel-description-toggled>\n      \n              <expansion-panel-content>\n                <div class=\"row\">\n                  <div class=\"clear-filler\"></div>\n                  <div class=\"col-lg-12\">\n                    <div class=\"col-lg-12\">\n                      <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n                    </div>\n\n                    <span>\n                      <div class=\"col-lg-3\">\n                        <img \n                          src=\"../../../../../assets/images/add-photos.png\" \n                          class=\"img img-responsive img-thumbnail preview-img-holder\" \n                          (click)=\"fileUploadInput.click()\" />\n\n                        <input \n                          type=\"file\" \n                          style=\"display:none\"\n                          multiple=\"true\"\n                          (change)=\"onFileSelected($event, booking.bookingId)\"\n                          #fileUploadInput>\n                      </div>\n                    </span>\n\n                    <span *ngFor=\"let bookingPhoto of selectedBookingPhotos\">\n                      <div class=\"col-lg-3\" *ngIf=\"bookingPhoto.status == 'ACTIVE'\">\n                        <img \n                          src=\"{{bookingPhoto.raw}}\" \n                          class=\"img img-responsive img-thumbnail preview-img-holder\" \n                          (click)=\"getPhotoDetailsRow(bookingPhoto.photoId); open(content)\" />\n                      </div>\n                    </span>\n                  </div>\n                </div>\n\n              </expansion-panel-content>\n          </expansion-panel>\n        </expansion-panels-container>\n      \n      </div>\n\n      <!-- Start - Modal -->\n      <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n          <div class=\"modal-body\">\n            <div class=\"col-lg-12\">\n              <button type=\"button\" #btnDismiss class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n  \n            <div class=\"col-lg-12 text-center\">\n                <div class=\"clear-filler\"></div>\n                <img \n                  src=\"{{selectedPhoto.raw}}\" \n                  class=\"img img-responsive img-thumbnail\" />\n                <div class=\"clear-filler\"></div>\n            </div>\n          </div>\n          \n          <div class=\"modal-footer\">\n            \n              <div class=\"col-lg-12 text-center\">\n                  <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <small class=\"pull-left text-muted\">\n                    Date Modified: \n                    <span \n                      *ngIf=\"selectedPhoto.updatedTime != null\">\n                      {{ selectedPhoto.updatedTime | date: 'dd MMM yyyy hh:mm a': true}}\n                    </span>\n                    <span \n                      *ngIf=\"selectedPhoto.updatedTime == null && selectedPhoto.createdTime != null\">\n                      {{ selectedPhoto.createdTime | date: 'dd MMM yyyy hh:mm a': true}}\n                    </span>\n                  </small>\n                  <br/>\n                  <a class=\"pull-left\" [href]=\"selectedPhoto.raw\" target=\"_blank\" download=\"SelectedPhoto.png\">View Original Photo</a>\n                </div>\n                  \n                  \n                  \n\n                  <!-- <button \n                    type=\"button\" \n                    class=\"btn btn-success\" \n                    style=\"margin: 3px 10px; width:100px\"\n                    (click)=\"onDownloadPhoto(selectedPhoto.raw)\">\n                    Download\n                  </button> -->\n\n\n                  \n\n                  <div class=\"col-lg-6\">\n                  <button \n                    type=\"button\" \n                    class=\"btn btn-danger pull-right\" \n                    style=\"margin: 3px 10px; width:100px\"\n                    (click)=\"deletePhoto(selectedPhoto.photoId, selectedPhoto.bookingId, 'modal')\">\n                    Delete\n                  </button>\n                  </div>\n                </div>\n                  \n                \n            \n                <div class=\"clear-filler\"></div>\n                  <div class=\"col-lg-12 text-center\">\n                    <ngb-alert [type]=\"modalAlert.type\" (close)=\"closeModalAlert(modalAlert)\" *ngFor=\"let modalAlert of modalAlerts\">{{ modalAlert.message }}</ngb-alert>\n                  </div>\n                </div>\n          </div>\n\n\n        </ng-template>\n        <!-- End - Modal -->\n        \n      \n\n  </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/photos/components/photos/photos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photos_services_photos_service__ = __webpack_require__("../../../../../src/app/layout/photos/services/photos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__active_bookings_services_active_bookings_service__ = __webpack_require__("../../../../../src/app/layout/active-bookings/services/active-bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhotosComponent = (function () {
    function PhotosComponent(PhotosService, activeBookingsService, modalService) {
        this.PhotosService = PhotosService;
        this.activeBookingsService = activeBookingsService;
        this.modalService = modalService;
        this.errorMessage = "Unexpected error encountered.";
        this.loading = false;
        this.loadingPhotos = false;
        this.bookings = [];
        this.selectedFile = null;
        this.uploadedFilesCnt = 0;
        this.alerts = [];
        this.modalAlerts = [];
        this.panelOpenState = false;
    }
    PhotosComponent.prototype.ngOnInit = function () {
        this.bookings = [];
        this.selectedBookingPhotos = [];
        this.getBooking();
    };
    PhotosComponent.prototype.onFileSelected = function (event, bookingId) {
        //this.selectedFile = <File>event.target.files[0];
        if (event.target.files.length > 10) {
            alert("You are only allowed to upload a maximum of 10 files");
            return false;
        }
        else {
            this.loading = true;
            for (this.selectedFilesCnt = 0; this.selectedFilesCnt < event.target.files.length; this.selectedFilesCnt++) {
                this.selectedFile = event.target.files[this.selectedFilesCnt];
                this.onUpload(this.selectedFile, bookingId);
            }
        }
    };
    PhotosComponent.prototype.getBooking = function () {
        var _this = this;
        this.loading = true;
        this.PhotosService.getCompletedBookings().subscribe(function (data) {
            console.log(data);
            _this.bookings = data;
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    PhotosComponent.prototype.callFetchPhotos = function (bookingId) {
        var _this = this;
        this.loadingPhotos = true;
        console.log('callFetchPhotos');
        this.selectedBookingPhotos = [];
        this.PhotosService.readBookingPhotos(bookingId).subscribe(function (data) {
            _this.selectedBookingPhotos = data;
            _this.loadingPhotos = false;
        }, function (err) {
            console.log(err);
        });
    };
    PhotosComponent.prototype.open = function (content) {
        var _this = this;
        this.modalReference = this.modalService.open(content, { 'size': 'lg', backdrop: 'static', keyboard: false });
        this.modalReference.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PhotosComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    PhotosComponent.prototype.getPhotoDetailsRow = function (id) {
        var _this = this;
        console.log('selected id' + id);
        this.selectedBookingPhotos.forEach(function (item, index) {
            if (item.photoId == id) {
                console.log('each booking ID: ' + item.photoId);
                console.log(_this.selectedBookingPhotos[index]);
                _this.selectedPhoto = _this.selectedBookingPhotos[index];
                return false;
            }
        });
    };
    PhotosComponent.prototype.onUpload = function (selectedFile, bookingId) {
        var _this = this;
        this.PhotosService.createPhoto(selectedFile, bookingId).subscribe(function (data) {
            if (data != undefined) {
                console.log(data);
                if (!_this.isEmpty(data)) {
                    _this.uploadedFilesCnt++;
                    if (_this.selectedFilesCnt == _this.uploadedFilesCnt) {
                        _this.successMessage('File successfully uploaded.');
                        setTimeout(function () {
                            _this.closeActiveAlert();
                            _this.callFetchPhotos(bookingId);
                        }, 3000);
                        _this.loading = false;
                    }
                }
                else {
                    _this.errMessage(_this.errorMessage);
                }
            }
        });
    };
    PhotosComponent.prototype.onDownloadPhoto = function (photoUrl) {
        console.log(photoUrl);
        this.PhotosService.downloadPhoto(photoUrl).subscribe(function (res) {
            var fileURL = URL.createObjectURL(res);
            //window.location.href = fileURL;
        });
    };
    PhotosComponent.prototype.deletePhoto = function (id, bookingId, src) {
        var _this = this;
        if (confirm("Are you sure you want to delete this photo?")) {
            this.PhotosService.deletePhoto(id, bookingId).subscribe(function (data) {
                console.log('result', data);
                if (!_this.isEmpty(data)) {
                    if (src == 'modal') {
                        _this.successModalMessage('Photo successfully archived.');
                        setTimeout(function () {
                            _this.modalReference.close();
                            _this.closeActiveModalAlert();
                            _this.callFetchPhotos(bookingId);
                        }, 3000);
                    }
                }
                else {
                    _this.errMessage(_this.errorMessage);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    PhotosComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    PhotosComponent.prototype.successMessage = function (msg) {
        var _this = this;
        this.closeActiveAlert();
        setTimeout(function () {
            _this.alerts.push({
                id: 1,
                type: 'success',
                message: msg
            });
        }, 500);
        return true;
    };
    PhotosComponent.prototype.successModalMessage = function (msg) {
        var _this = this;
        this.closeActiveModalAlert();
        setTimeout(function () {
            _this.modalAlerts.push({
                id: 1,
                type: 'success',
                message: msg
            });
        }, 500);
        return true;
    };
    PhotosComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    PhotosComponent.prototype.closeModalAlert = function (modalAlerts) {
        var index = this.modalAlerts.indexOf(alert);
        this.modalAlerts.splice(index, 1);
    };
    PhotosComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    PhotosComponent.prototype.closeActiveModalAlert = function () {
        this.modalAlerts.splice(0, 1);
    };
    PhotosComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return PhotosComponent;
}());
PhotosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-photos',
        template: __webpack_require__("../../../../../src/app/layout/photos/components/photos/photos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/photos/components/photos/photos.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__photos_services_photos_service__["a" /* PhotosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__photos_services_photos_service__["a" /* PhotosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__active_bookings_services_active_bookings_service__["a" /* ActiveBookingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__active_bookings_services_active_bookings_service__["a" /* ActiveBookingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object])
], PhotosComponent);

var _a, _b, _c;
//# sourceMappingURL=photos.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/photos/photos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_photos_photos_component__ = __webpack_require__("../../../../../src/app/layout/photos/components/photos/photos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { CreateUserComponent } from './components/create-user/create-user.component';
// import { UpdateUserComponent } from './components/update-user/update-user.component';
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_photos_photos_component__["a" /* PhotosComponent */] },
    { path: 'photos', component: __WEBPACK_IMPORTED_MODULE_2__components_photos_photos_component__["a" /* PhotosComponent */] },
];
var PhotosRoutingModule = (function () {
    function PhotosRoutingModule() {
    }
    return PhotosRoutingModule;
}());
PhotosRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], PhotosRoutingModule);

//# sourceMappingURL=photos-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/photos/photos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosModule", function() { return PhotosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_mydatepicker__ = __webpack_require__("../../../../ngx-mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__photos_routing_module__ = __webpack_require__("../../../../../src/app/layout/photos/photos-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_photos_service__ = __webpack_require__("../../../../../src/app/layout/photos/services/photos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_photos_photos_component__ = __webpack_require__("../../../../../src/app/layout/photos/components/photos/photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_expansion_panels__ = __webpack_require__("../../../../ng2-expansion-panels/dist/ng2-expansion-panels.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_expansion_panels___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_expansion_panels__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { CreateUserComponent } from './components/create-user/create-user.component';
// import { UpdateUserComponent } from './components/update-user/update-user.component';

var PhotosModule = (function () {
    function PhotosModule() {
    }
    return PhotosModule;
}());
PhotosModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__photos_routing_module__["a" /* PhotosRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__shared__["c" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_10_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_mydatepicker__["NgxMyDatePickerModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_expansion_panels__["ExpansionPanelsModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_12__components_photos_photos_component__["a" /* PhotosComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_photos_service__["a" /* PhotosService */]]
    })
], PhotosModule);

//# sourceMappingURL=photos.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/photos/services/photos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_throw__ = __webpack_require__("../../../../rxjs/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PhotosService = (function () {
    function PhotosService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.env = __WEBPACK_IMPORTED_MODULE_4_environments_environment__["a" /* environment */].envName.toLocaleLowerCase();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4_environments_environment__["a" /* environment */].baseUrl;
        this.apiPath = __WEBPACK_IMPORTED_MODULE_4_environments_environment__["a" /* environment */].apiPath;
    }
    PhotosService.prototype.createPhoto = function (param, bookingId) {
        console.log('createPhoto');
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result = [];
        var formData = new FormData();
        formData.append('file', param, param.name);
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of({ result: true });
            return result;
        }
        else {
            path = "/bookings/" + bookingId + "/photos";
            query = this.baseUrl + this.apiPath + path;
            console.log(query);
            return this.httpClient.post(query, formData, {
                reportProgress: true,
                observe: 'events'
            }).map(function (event) {
                console.log(query);
                if (event.type === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                    console.log('event total', event.total);
                    console.log('event loaded', event.loaded);
                    console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
                    if (Math.round(event.loaded / event.total * 100) == 100) {
                        console.log('completed! [46]');
                    }
                }
                else if (event.type === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpEventType */].Response) {
                    console.log('completed! [55]');
                    console.log(event);
                    if (event.status == 200) {
                        console.log('done', event);
                        return event;
                    }
                    else {
                        console.log('error', event);
                    }
                }
            });
        }
    };
    // downloadPhoto(imageUrl: string){
    //   return this.http.get(encodeURI(imageUrl))
    //     .map((res) => {
    //       return new Blob([res['body']], {type: res.headers.get('Content-Type')});
    //     })
    // }
    PhotosService.prototype.downloadPhoto = function (imageUrl) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                "Access-Control-Allow-Origin": "*",
                "Content-type": "image/*",
                "Content-Disposition": "attachment; filename=adrian.png"
            })
        }), query = '', result;
        return this.http.get(imageUrl + "?alt=media", options)
            .map(function (res) {
            console.log(res);
            //return new Blob([res.body], {type: res.headers.get('Content-Type')});
        });
    };
    PhotosService.prototype.getCompletedBookings = function () {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            path = "/bookings.json";
        }
        else {
            path = "/bookings/?status=COMPLETED";
        }
        query = this.baseUrl + this.apiPath + path;
        result = this.http.get(encodeURI(query)).map(function (res) { return res.json(); });
        return result;
    };
    PhotosService.prototype.readBookingPhotos = function (id) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            path = "/read-booking-photos.json";
        }
        else {
            path = "/bookings/" + id + "/photos?status=ACTIVE";
        }
        query = this.baseUrl + this.apiPath + path;
        result = this.http.get(encodeURI(query)).map(function (res) { return res.json(); });
        return result;
    };
    /**
    updateUser(param) {
      //let query = this.baseUrl + "/user-management.update.php";
      let query = "http://www.quisi.net/mycape-test-api/user-management.update.php";
      return this.http.put(query, param, { headers: this.getHeaders()}).map((response: Response) => response.json());
    }
    */
    PhotosService.prototype.deletePhoto = function (id, bookingId) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/bookings/" + bookingId + "/photos/" + id;
            query = this.baseUrl + this.apiPath + path;
            console.log(query);
            result = this.http.delete(encodeURI(query)).map(function (res) { return res.json(); });
        }
        return result;
    };
    PhotosService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        });
    };
    PhotosService.prototype._errorHandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error || "Server Error");
    };
    return PhotosService;
}());
PhotosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], PhotosService);

var _a, _b;
//# sourceMappingURL=photos.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/user-management/components/create-user/create-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/user-management/components/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Create User'\" [icon]=\"'fa-fw fa-plus'\"></app-page-header>\n  \n  <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create User\n    </div>\n\n    <div class=\"clear-filler\"></div>\n    <div class=\"clear-filler\"></div>\n    \n    <form role=\"form\" (ngSubmit)=\"createUser()\" ngNativeValidate>\n      <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-lg-12 form-group\">\n              <h4>User Details</h4>\n          </div>\n        </div>\n      \n        <!-- <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>First Name <span>*</span></label>\n            <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"firstname\" required>\n          </div>\n          <div class=\"col-lg-6\">\n            <label>Last Name <span>*</span></label>\n            <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"lastname\" required>\n          </div>\n        </div> -->\n      \n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Email Address <span>*</span></label>\n            <input type=\"email\" class=\"form-control\" name=\"emailaddress\" [(ngModel)]=\"emailaddress\" required>\n          </div>\n        </div>\n\n        <!-- <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\">\n          </div>\n        </div> -->\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\">\n          </div>\n        </div>\n        \n        <!-- <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>Contact Number</label>\n            <input type=\"text\" class=\"form-control\" name=\"contactnumber\" [(ngModel)]=\"contactnumber\">\n          </div>\n        </div> -->\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Role <span>*</span></label>\n            <select class=\"form-control\" name=\"usertype\" [(ngModel)]=\"usertype\" required>\n              <option value=\"\"> - - - Please Select - - - </option>\n              <option value=\"ADMIN\"> ADMIN </option>\n              <option value=\"EDITOR\"> EDITOR </option>\n              <option value=\"PHOTOGRAPHER\"> PHOTOGRAPHER </option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"clear-filler\"></div>\n        <div class=\"clear-filler\"></div>\n        \n        <div class=\"col-lg-12 text-center form-group\">\n          <div class=\"col-lg-2 col-lg-offset-4\">\n            <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n          </div>\n          <div class=\"col-lg-2\">\n              <button \n                type=\"button\" \n                routerLink=\"/user-management\" \n                class=\"btn btn-warning\"> \n                  Cancel \n              </button>\n          </div>\n        </div>\n\n        \n      </div>\n      <div class=\"clear-filler\"></div>\n\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n      </div>\n\n        <div class=\"clear-filler\"></div>\n    </form>\n    \n    \n  \n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/user-management/components/create-user/create-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_management_services_user_management_service__ = __webpack_require__("../../../../../src/app/layout/user-management/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_management_model_user_management_model__ = __webpack_require__("../../../../../src/app/layout/user-management/model/user-management.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateUserComponent = (function () {
    function CreateUserComponent(userManagementService, layoutService, modalService, router) {
        this.userManagementService = userManagementService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.router = router;
        this.errorMessage = "Unexpected error encountered.";
        this.userDetails = new __WEBPACK_IMPORTED_MODULE_5__user_management_model_user_management_model__["a" /* userDetailsDto */];
        this.usertype = '';
        //dateOfBirthUI: any = [];
        this.username = '';
        this.password = '';
        this.contactnumber = '';
        this.alerts = [];
        this.myOptions = {
            dateFormat: 'dd/mm/yyyy',
        };
    }
    CreateUserComponent.prototype.ngOnInit = function () { };
    CreateUserComponent.prototype.onDateChanged = function (event) {
        // on date change
    };
    CreateUserComponent.prototype.createUser = function () {
        // if(this.dateOfBirthUI.length != 0){
        //   let datePipe = new DatePipe("en-US"),
        //   d = this.dateOfBirthUI.date.day,
        //   m = this.dateOfBirthUI.date.month,
        //   y = this.dateOfBirthUI.date.year;
        //   this.dateOfBirth = datePipe.transform(y + '-' + m + '-' + d, 'y-MM-dd');
        // }
        // this.userDetails.firstname = this.firstname;
        // this.userDetails.lastname = this.lastname ;
        // this.userDetails.email = this.emailaddress;
        // this.userDetails.usertype = this.usertype;
        // this.userDetails.username = this.username;
        // this.userDetails.password = btoa(this.password);
        // this.userDetails.mobileNumber = this.contactnumber;
        // this.userDetails.role = this.usertype;
        // this.userDetails.status = "ACTIVE";
        var param = [];
        param.push({
            "email": this.emailaddress,
            "password": btoa(this.password),
            "role": this.usertype
        });
        this.saveUser(param[0]);
    };
    CreateUserComponent.prototype.saveUser = function (userDetails) {
        var _this = this;
        this.userManagementService.createUser(userDetails).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('User successfully added.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('user-management');
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CreateUserComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    CreateUserComponent.prototype.successMessage = function (msg) {
        var _this = this;
        this.closeActiveAlert();
        setTimeout(function () {
            _this.alerts.push({
                id: 1,
                type: 'success',
                message: msg
            });
        }, 500);
        return true;
    };
    CreateUserComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    CreateUserComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    CreateUserComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return CreateUserComponent;
}());
CreateUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-user',
        template: __webpack_require__("../../../../../src/app/layout/user-management/components/create-user/create-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/user-management/components/create-user/create-user.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_management_services_user_management_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_management_services_user_management_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object])
], CreateUserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/user-management/components/update-user/update-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/user-management/components/update-user/update-user.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n    <app-page-header [heading]=\"'Update User'\" [icon]=\"'fa-fw fa-pencil-square-o'\"></app-page-header>\n    \n    <!-- <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert> -->\n\n    <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Update User\n      </div>\n  \n      <div class=\"clear-filler\"></div>\n      <div class=\"clear-filler\"></div>\n      \n      <form role=\"form\" (ngSubmit)=\"updateUser()\" ngNativeValidate>\n          <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n          <div class=\"col-lg-12\">\n              <div class=\"col-lg-12 form-group\">\n                <h4>User Details</h4>\n            </div>\n          </div>\n        \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>First Name</label>\n              <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"firstname\">\n            </div>\n            <div class=\"col-lg-6\">\n              <label>Last Name</label>\n              <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"lastname\">\n            </div>\n          </div>\n        \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Email Address <span>*</span></label>\n              <input type=\"email\" class=\"form-control\" name=\"emailaddress\" [(ngModel)]=\"emailaddress\" readonly>\n            </div>\n          </div>\n  \n  \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>Contact Number</label>\n              <input type=\"text\" class=\"form-control\" name=\"contactnumber\" [(ngModel)]=\"contactnumber\">\n            </div>\n          </div>\n\n\n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Role <span>*</span></label>\n              <select class=\"form-control\" name=\"usertype\" [(ngModel)]=\"usertype\" required>\n                <option value=\"\"> - - - Please Select - - - </option>\n                <option value=\"ADMIN\"> ADMIN </option>\n                <option value=\"EDITOR\"> EDITOR </option>\n                <option value=\"PHOTOGRAPHER\"> PHOTOGRAPHER </option>\n              </select>\n            </div>\n          </div>\n  \n          <div class=\"clear-filler\"></div>\n          <div class=\"clear-filler\"></div>\n          <div class=\"col-lg-12 text-center form-group\">\n            <div class=\"col-lg-2 col-lg-offset-4\">\n              <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n            </div>\n            <div class=\"col-lg-2\">\n                <button \n                  type=\"button\" \n                  routerLink=\"/user-management\" \n                  class=\"btn btn-warning\"> \n                    Cancel \n                </button>\n            </div>\n          </div>\n  \n        </div>\n      </form>\n      <div class=\"clear-filler\"></div>\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n          <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        </div>\n      <div class=\"clear-filler\"></div>\n    \n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/user-management/components/update-user/update-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_management_services_user_management_service__ = __webpack_require__("../../../../../src/app/layout/user-management/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_management_model_user_management_model__ = __webpack_require__("../../../../../src/app/layout/user-management/model/user-management.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateUserComponent = (function () {
    function UpdateUserComponent(userManagementService, layoutService, modalService, activatedRoute, router) {
        this.userManagementService = userManagementService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.errorMessage = "Unexpected error encountered.";
        this.userDetails = new __WEBPACK_IMPORTED_MODULE_5__user_management_model_user_management_model__["a" /* userDetailsDto */];
        this.usertype = '';
        this.contactnumber = '';
        this.alerts = [];
        this.myOptions = {
            dateFormat: 'dd/mm/yyyy',
        };
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.selectedUserId = params['id'];
            _this.readUsers(_this.selectedUserId);
        });
    };
    UpdateUserComponent.prototype.onDateChanged = function (event) {
        // on date change
    };
    UpdateUserComponent.prototype.readUsers = function (selectedUserId) {
        var _this = this;
        this.userManagementService.readUsers(selectedUserId).subscribe(function (data) {
            console.log(data);
            _this.firstname = data.firstName;
            _this.lastname = data.lastName;
            _this.emailaddress = data.email;
            _this.usertype = data.role;
            _this.contactnumber = data.mobileNumber;
            // if(data.results[0].records[0].birthday != "" && data.results[0].records[0].birthday != null){
            //   let datePipe = new DatePipe("en-US"),
            //     dateOfBirth = data.results[0].records[0].birthday,
            //     d = datePipe.transform(dateOfBirth, 'dd'),
            //     m = datePipe.transform(dateOfBirth, 'M'),
            //     y = datePipe.transform(dateOfBirth, 'yyyy');
            //   this.dateOfBirthUI = {date: { year: y, month: m, day: d }};
            // }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    UpdateUserComponent.prototype.updateUser = function () {
        var param = [];
        param.push({
            "firstName": this.firstname,
            "lastName": this.lastname,
            "email": this.emailaddress,
            "mobileNumber": this.contactnumber,
            "role": this.usertype
        });
        this.saveUser(param[0]);
    };
    UpdateUserComponent.prototype.saveUser = function (userDetails) {
        var _this = this;
        this.userManagementService.updateUser(userDetails, this.selectedUserId).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('User successfully updated.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('user-management');
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    UpdateUserComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    UpdateUserComponent.prototype.successMessage = function (msg) {
        var _this = this;
        this.closeActiveAlert();
        setTimeout(function () {
            _this.alerts.push({
                id: 1,
                type: 'success',
                message: msg
            });
        }, 500);
        return true;
    };
    UpdateUserComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    UpdateUserComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    UpdateUserComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return UpdateUserComponent;
}());
UpdateUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-user',
        template: __webpack_require__("../../../../../src/app/layout/user-management/components/update-user/update-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/user-management/components/update-user/update-user.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_management_services_user_management_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_management_services_user_management_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _e || Object])
], UpdateUserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=update-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/user-management/components/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-action {\n    margin: 0 3px;\n    cursor: pointer;\n}\n\n.row-search {\n    color: #FF8D33;\n}\n\n.row-edit {\n    color: #33A2FF;\n}\n\n.row-delete {\n    color: #ff0000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/user-management/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Users'\" [icon]=\"'fa-fw fa-users'\"></app-page-header>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-fw fa-users\" aria-hidden=\"true\"></i> Users      \n      </div>\n\n      <div class=\"clear-filler\"></div>\n      <div class=\"clear-filler\"></div>\n  \n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-3\">\n            <div class=\"pull-left\">\n              <div class=\"input-group\">\n                  <span class=\"input-group-btn\">\n                      <button type=\"button\" class=\"btn btn-info\">\n                          <i class=\"fa fa-search\"></i>\n                      </button>\n                  </span>  \n                <input #gb type=\"text\" pInputText class=\"form-control\" placeholder=\"Search\">\n              </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-3 col-lg-offset-6\">\n            <div class=\"pull-right\">\n              <button type=\"button\" routerLink=\"create-user\" class=\"btn btn-info pull-right\">Create User</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-12 table-responsive\">\n            <div class=\"clear-filler\"></div>\n            <p-dataTable \n              [value]=\"users\" \n              sortMode=\"multiple\" \n              [rows]=\"10\" \n              [paginator]=\"true\" \n              [pageLinks]=\"3\" \n              [responsive]=\"true\" \n              [rowsPerPageOptions]=\"[10,25,50,100]\" \n              [globalFilter]=\"gb\" \n            #dt> \n              <p-column \n                [sortable]=\"true\" \n                [style]=\"{'width':'17%'}\"> \n                <ng-template pTemplate=\"header\">Name</ng-template>  \n                <ng-template let-UserDetails=\"rowData\" pTemplate=\"body\">\n                  {{ UserDetails.firstName + ' ' + UserDetails.lastName }}\n                </ng-template>\n              </p-column>\n              \n              <p-column\n                field=\"email\"\n                header=\"Email Address\"\n                [sortable]=\"true\"\n                [style]=\"{'width':'20%'}\"> \n              </p-column>\n\n              <p-column\n                field=\"mobileNumber\"\n                header=\"Contact Number\"\n                [sortable]=\"true\"\n                [style]=\"{'width':'14%'}\"> \n              </p-column>\n              \n              <p-column\n                field=\"role\"\n                header=\"Role\" \n                [sortable]=\"true\" \n                [style]=\"{'width':'15%'}\"> \n              </p-column>\n              \n              <p-column \n                field=\"action\"\n                header=\"Action\"\n                [sortable]=\"false\"\n                [style]=\"{'width':'10%', 'text-align': 'center'}\">\n                <ng-template\n                  let-UserDetails=\"rowData\"\n                  pTemplate=\"body\">\n                  <span \n                    class=\"fa fa-search row-action row-search\" \n                    title=\"View\" \n                    (click)=\"getUserDetailsRow(UserDetails.userId); open(content)\">\n                  </span>\n                  <span\n                    class=\"fa fa-pencil row-action row-edit\"\n                    title=\"Update\"\n                    [routerLink]=\"['update-user']\"\n                    [queryParams]=\"{id:UserDetails.userId}\">\n                  </span>\n                  <span \n                    class=\"fa fa-times row-action row-delete\" \n                    title=\"Archive\"\n                    (click)=\"deleteUserDetailsRow(UserDetails.userId)\">\n                  </span>\n                </ng-template>\n              </p-column>\n            </p-dataTable>\n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-12 text-center\">\n            <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n\n      <!-- Start - Modal -->\n      <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\"> User Details</h6>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">        \n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Name</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedUserDetails.firstName + ' ' + selectedUserDetails.lastName }}\n                <span [hidden]=\"selectedUserDetails.firstName != '' && selectedUserDetails.lastName != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Email Addres</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>{{ selectedUserDetails.email }}</p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Mobile Number</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedUserDetails.mobileNumber }}\n                <span [hidden]=\"selectedUserDetails.mobileNumber != ''\">N/A</span>\n            </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Role</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>{{ selectedUserDetails.role }}</p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Date Modified</label>\n            </div>\n            <div class=\"col-lg-6\">\n            <p *ngIf=\"selectedUserDetails.updatedTime != null\">{{ selectedUserDetails.updatedTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n            <p *ngIf=\"selectedUserDetails.updatedTime == null\">{{ selectedUserDetails.createdTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n            </div>\n          </div>\n\n          <!-- <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Date of Birth</label>\n            </div>\n            <div class=\"col-lg-6\">\n            <p>{{ selectedUserDetails.birthday | date : 'dd MMM y' }}</p>\n            </div>\n          </div> -->\n\n          <!-- <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Status</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>{{ selectedUserDetails.user.status }}</p>\n            </div>\n          </div> -->\n\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"col-lg-12\"> \n            <div class=\"text-center col-lg-12\">\n              <button \n                type=\"button\" \n                class=\"btn btn-secondary\" \n                style=\"margin: 3px 10px;\" \n                (click)=\"d('Cross click')\">\n                Close\n              </button>\n            </div>\n            <div class=\"clear-filler\"></div>\n          \n        </div>\n          \n      </div>\n      </ng-template>\n      <!-- End - Modal -->\n\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/user-management/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_services_user_management_service__ = __webpack_require__("../../../../../src/app/layout/user-management/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_management_model_user_management_model__ = __webpack_require__("../../../../../src/app/layout/user-management/model/user-management.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersComponent = (function () {
    function UsersComponent(userManagementService, layoutService, modalService) {
        this.userManagementService = userManagementService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.errorMessage = "Unexpected error encountered.";
        this.userDetails = new __WEBPACK_IMPORTED_MODULE_4__user_management_model_user_management_model__["a" /* userDetailsDto */];
        this.loading = false;
        this.users = [];
        this.alerts = [];
        this.myOptions = {
            dateFormat: 'dd/mm/yyyy',
        };
    }
    UsersComponent.prototype.onDateChanged = function (event) {
        // on date change
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.loading = true;
        this.layoutService.getUsers().subscribe(function (data) {
            _this.users = data;
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    UsersComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { 'size': 'lg', backdrop: 'static', keyboard: false }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UsersComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    UsersComponent.prototype.getUserDetailsRow = function (id) {
        var _this = this;
        this.users.forEach(function (item, index) {
            if (item.userId == id) {
                console.log('id', id);
                console.log('item.id', item.userId);
                _this.selectedUserDetails = _this.users[index];
                return false;
            }
        });
    };
    UsersComponent.prototype.deleteUserDetailsRow = function (id) {
        if (confirm("Are you sure you want to archive this user?")) {
            this.deleteUser(id);
        }
    };
    UsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userManagementService.deleteUser(id).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('User successfully archived.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.getUsers();
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    UsersComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    UsersComponent.prototype.successMessage = function (msg) {
        var _this = this;
        this.closeActiveAlert();
        setTimeout(function () {
            _this.alerts.push({
                id: 1,
                type: 'success',
                message: msg
            });
        }, 500);
        return true;
    };
    UsersComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    UsersComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    UsersComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/layout/user-management/components/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/user-management/components/users/users.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_management_services_user_management_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_management_services_user_management_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object])
], UsersComponent);

var _a, _b, _c;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/user-management/model/user-management.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userDetailsDto; });
var userDetailsDto = (function () {
    function userDetailsDto() {
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.usertype = '';
        this.username = '';
        this.password = '';
        this.mobileNumber = '';
        this.role = '';
        this.status = '';
    }
    return userDetailsDto;
}());

//# sourceMappingURL=user-management.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/user-management/services/user-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_throw__ = __webpack_require__("../../../../rxjs/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserManagementService = (function () {
    function UserManagementService(http) {
        this.http = http;
        this.env = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].envName.toLocaleLowerCase();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].baseUrl;
        this.apiPath = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].apiPath;
    }
    UserManagementService.prototype.createUser = function (param) {
        console.log(param);
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/users/";
            query = this.baseUrl + this.apiPath + path;
            result = this.http.post(encodeURI(query), param, options).map(function (res) { return res.json(); });
        }
        return result;
    };
    UserManagementService.prototype.readUsers = function (id) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            path = "/read-user.json";
        }
        else {
            path = "/users/" + id;
        }
        query = this.baseUrl + this.apiPath + path;
        result = this.http.get(encodeURI(query)).map(function (res) { return res.json(); });
        return result;
    };
    UserManagementService.prototype.updateUser = function (param, id) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/users/" + id;
            query = this.baseUrl + this.apiPath + path;
            result = this.http.put(encodeURI(query), param, options).map(function (res) { return res.json(); });
        }
        return result;
    };
    UserManagementService.prototype.deleteUser = function (id) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/users/" + id;
            query = this.baseUrl + this.apiPath + path;
            result = this.http.put(encodeURI(query), { "status": "INACTIVE" }, options).map(function (res) { return res.json(); });
        }
        return result;
    };
    UserManagementService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json"
        });
    };
    UserManagementService.prototype._errorHandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || "Server Error");
    };
    return UserManagementService;
}());
UserManagementService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserManagementService);

var _a;
//# sourceMappingURL=user-management.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/user-management/user-management-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_users_users_component__ = __webpack_require__("../../../../../src/app/layout/user-management/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_create_user_create_user_component__ = __webpack_require__("../../../../../src/app/layout/user-management/components/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_update_user_update_user_component__ = __webpack_require__("../../../../../src/app/layout/user-management/components/update-user/update-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_users_users_component__["a" /* UsersComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_2__components_users_users_component__["a" /* UsersComponent */] },
    { path: 'create-user', component: __WEBPACK_IMPORTED_MODULE_3__components_create_user_create_user_component__["a" /* CreateUserComponent */] },
    { path: 'update-user', component: __WEBPACK_IMPORTED_MODULE_4__components_update_user_update_user_component__["a" /* UpdateUserComponent */] },
];
var UserManagementRoutingModule = (function () {
    function UserManagementRoutingModule() {
    }
    return UserManagementRoutingModule;
}());
UserManagementRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], UserManagementRoutingModule);

//# sourceMappingURL=user-management-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/user-management/user-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_mydatepicker__ = __webpack_require__("../../../../ngx-mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_management_routing_module__ = __webpack_require__("../../../../../src/app/layout/user-management/user-management-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_management_service__ = __webpack_require__("../../../../../src/app/layout/user-management/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_users_users_component__ = __webpack_require__("../../../../../src/app/layout/user-management/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_create_user_create_user_component__ = __webpack_require__("../../../../../src/app/layout/user-management/components/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_update_user_update_user_component__ = __webpack_require__("../../../../../src/app/layout/user-management/components/update-user/update-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var UserManagementModule = (function () {
    function UserManagementModule() {
    }
    return UserManagementModule;
}());
UserManagementModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__user_management_routing_module__["a" /* UserManagementRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared__["c" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_mydatepicker__["NgxMyDatePickerModule"].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_11__components_users_users_component__["a" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_12__components_create_user_create_user_component__["a" /* CreateUserComponent */], __WEBPACK_IMPORTED_MODULE_13__components_update_user_update_user_component__["a" /* UpdateUserComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_user_management_service__["a" /* UserManagementService */]]
    })
], UserManagementModule);

//# sourceMappingURL=user-management.module.js.map

/***/ }),

/***/ "../../../../../src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;
/* unused harmony export slideToRight */
/* unused harmony export slideToLeft */
/* unused harmony export slideToBottom */
/* unused harmony export slideToTop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

function routerTransition() {
    return slideToTop();
}
function slideToRight() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router.animations.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pos-f-t fixed-top header\">\n    <nav class=\"navbar navbar-inverse bg-inverse navbar-toggleable-md\">\n        <button class=\"navbar-toggler navbar-toggler-right\" (click)=\"toggleSidebar()\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n            <img src=\"../../../../assets/images/logo-white.png\" />\n        </a>\n        <div class=\"collapse navbar-collapse\">\n            <!--\n            <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n            </form>\n            -->\n            <ul class=\"navbar-nav ml-auto mt-2 mt-md-0\">\n                <!--\n                <li class=\"nav-item dropdown\" ngbDropdown>\n                    <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                        <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-menu-right\">\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">Pending Task <span class=\"badge badge-info\">6</span></a>\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">In queue <span class=\"badge badge-info\"> 13</span></a>\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">Mail <span class=\"badge badge-info\"> 45</span></a>\n                        <li class=\"dropdown-divider\"></li>\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">View All</a>\n                    </ul>\n                </li>\n                -->\n\n                <li class=\"nav-item dropdown\" ngbDropdown>\n                    <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                        <i class=\"fa fa-user\"></i> {{loggedUserName}} <b class=\"caret\"></b>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\">\n                        <!--\n                        \n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i class=\"fa fa-fw fa-envelope\"></i> Inbox</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i class=\"fa fa-fw fa-gear\"></i> Settings</a>\n                        -->\n                        <a class=\"dropdown-item\" routerLink=\"/profile\" [queryParams]=\"{id:loggedUserId}\"><i class=\"fa fa-fw fa-user\"></i> Profile</a>\n                        <a class=\"dropdown-item\" (click)=\"onLoggedout()\"><i class=\"fa fa-fw fa-power-off\"></i> Log Out</a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: \"Muli\", sans-serif !important; }\n\n.topnav {\n  border-radius: 0;\n  background: #222;\n  padding: 6px;\n  z-index: 2; }\n  .topnav .text-center {\n    text-align: center;\n    padding-left: 0;\n    cursor: pointer; }\n  .topnav .top-right-nav .buy-now a {\n    color: #999; }\n  .topnav .top-right-nav .dropdown-menu {\n    top: 40px;\n    right: -5px;\n    left: auto; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body .media-heading {\n      font-size: 14px;\n      font-weight: bold;\n      margin-bottom: 0; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p {\n      margin: 0; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p.last {\n      font-size: 13px;\n      margin-bottom: 0; }\n    .topnav .top-right-nav .dropdown-menu hr {\n      margin-top: 1px;\n      margin-bottom: 4px; }\n\n.messages {\n  width: 300px; }\n  .messages .media {\n    border-bottom: 1px solid #DDD;\n    padding: 5px 10px; }\n    .messages .media:last-child {\n      border-bottom: none; }\n  .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  .messages .media-body .small {\n    margin: 0; }\n  .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n.header .navbar {\n  background: #222 !important;\n  border-bottom: solid 1px #151515; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.loggedUserName = '';
        this.loggedUserId = '';
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"] && window.innerWidth <= 992) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.loggedUserName = localStorage.getItem('loggedUsername');
        this.loggedUserId = localStorage.getItem('loggedUserId');
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('push-right');
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        if (confirm("Are you sure you want to log out?")) {
            localStorage.setItem('isLoggedin', 'false');
            this.router.navigateByUrl('/login');
        }
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/shared/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("../../../../../src/app/shared/components/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\n    <ul class=\"list-group\">\n        <!--\n        <a *ngIf=\"loggedUserType==0\" \n            routerLink=\"/dashboard\" \n            [routerLinkActive]=\"['router-link-active']\" \n            class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-dashboard\"></i> {{ 'Dashboard' }}\n        </a>\n        -->\n        <a routerLink=\"/booking\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-calendar\"></i> {{ 'Booking' }}\n        </a>\n        <a routerLink=\"/photos\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-camera\"></i> {{ 'Photos' }}\n        </a>\n        <a [hidden]=\"loggedUserType!='ADMIN'\" routerLink=\"/products\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-tags\"></i> {{'Products' }}\n        </a>\n        <a [hidden]=\"loggedUserType!='ADMIN'\" routerLink=\"/user-management\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-users\"></i> {{'User Management' }}\n        </a>\n    </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: \"Muli\", sans-serif !important; }\n\n.sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 60px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n    .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n    .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n      .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: .75rem 1.5rem;\n        padding-top: 1rem; }\n    .sidebar .sidebar-dropdown .panel-title a:hover, .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radius: 0;\n    border: none; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #FFF; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n\n.nested-menu .list-group-item {\n  cursor: pointer; }\n\n.nested-menu .nested {\n  list-style-type: none; }\n\n.nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #FFF;\n    padding: 10px;\n    display: block; }\n\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { UserService } from '../../user/user.service';
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isActive = false;
        this.showMenu = '';
        this.loggedUserType = '';
        this.loggedUserType = localStorage.getItem('loggedUsertype');
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/shared/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/sidebar/sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        this.router.navigateByUrl('/login');
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_shared_pipes_module__ = __webpack_require__("../../../../../src/app/shared/pipes/shared-pipes.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("../../../../../src/app/shared/components/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules__ = __webpack_require__("../../../../../src/app/shared/modules/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__modules__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__modules__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guard_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guard/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__guard_auth_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_stat_module__ = __webpack_require__("../../../../../src/app/shared/modules/stat/stat.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__stat_stat_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_header_page_header_module__ = __webpack_require__("../../../../../src/app/shared/modules/page-header/page-header.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__page_header_page_header_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/page-header/page-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header\">\n            {{heading}}\n        </h2>\n        <ol class=\"breadcrumb\">\n            \n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            </li>\n            \n            <li class=\"breadcrumb-item active\"><i class=\"fa {{icon}}\"></i> {{heading}}</li>\n        </ol>\n    </div>\n</div>\n-->"

/***/ }),

/***/ "../../../../../src/app/shared/modules/page-header/page-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/page-header/page-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderComponent = (function () {
    function PageHeaderComponent() {
    }
    return PageHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "heading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "icon", void 0);
PageHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-header',
        template: __webpack_require__("../../../../../src/app/shared/modules/page-header/page-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/modules/page-header/page-header.component.scss")]
    })
], PageHeaderComponent);

//# sourceMappingURL=page-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/page-header/page-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_header_component__ = __webpack_require__("../../../../../src/app/shared/modules/page-header/page-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageHeaderModule = (function () {
    function PageHeaderModule() {
    }
    return PageHeaderModule;
}());
PageHeaderModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]]
    })
], PageHeaderModule);

//# sourceMappingURL=page-header.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/stat/stat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-inverse {{bgClass}}\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col col-xs-3\">\n                <i class=\"fa {{icon}} fa-5x\"></i>\n            </div>\n            <div class=\"col col-xs-9 text-right\">\n                <div class=\"d-block huge\">{{count}}</div>\n                <div class=\"d-block\">{{label}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <span class=\"float-left\">View Details {{data}}</span>\n        <a href=\"javascript:void(0)\" class=\"float-right card-inverse\">\n            <span ><i class=\"fa fa-arrow-circle-right\"></i></span>\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/modules/stat/stat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/stat/stat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatComponent = (function () {
    function StatComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StatComponent.prototype.ngOnInit = function () { };
    return StatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "bgClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "icon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "count", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], StatComponent.prototype, "event", void 0);
StatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stat',
        template: __webpack_require__("../../../../../src/app/shared/modules/stat/stat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/modules/stat/stat.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StatComponent);

var _a;
//# sourceMappingURL=stat.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/stat/stat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_component__ = __webpack_require__("../../../../../src/app/shared/modules/stat/stat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatModule = (function () {
    function StatModule() {
    }
    return StatModule;
}());
StatModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]]
    })
], StatModule);

//# sourceMappingURL=stat.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/shared-pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SharedPipesModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedPipesModule = (function () {
    function SharedPipesModule() {
    }
    return SharedPipesModule;
}());
SharedPipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: []
    })
], SharedPipesModule);

//# sourceMappingURL=shared-pipes.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_throw__ = __webpack_require__("../../../../rxjs/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.env = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].envName.toLocaleLowerCase();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].baseUrl;
        this.apiPath = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].apiPath;
    }
    UserService.prototype.setLoggedInUserId = function (id) {
        this.userId = id;
    };
    UserService.prototype.setLoggedInUserType = function (type) {
        this.usertype = type;
    };
    UserService.prototype.setLoggedInUserName = function (fname, lname) {
        this.userfirstname = fname;
        this.userlastname = lname;
    };
    UserService.prototype.getLoggedInUserId = function () {
        return this.userId;
    };
    UserService.prototype.getLoggedInUserType = function () {
        return this.usertype;
    };
    UserService.prototype.getLoggedInUserName = function () {
        return this.userfirstname + ' ' + this.userlastname;
    };
    UserService.prototype.createUser = function (param) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/users/";
            query = this.baseUrl + this.apiPath + path;
            result = this.http.post(encodeURI(query), param, options).map(function (res) { return res.json(); });
        }
        return result;
    };
    UserService.prototype.login = function (email, password) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/admin/login";
            query = this.baseUrl + this.apiPath + path;
            result = this.http.post(encodeURI(query), { "email": email, "password": password }).map(function (res) { return res.json(); });
        }
        return result;
    };
    UserService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json"
        });
    };
    UserService.prototype._errorHandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || "Server Error");
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    envName: 'Production',
    baseUrl: 'https://webtool-dot-greatimage.appspot.com',
    apiPath: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map