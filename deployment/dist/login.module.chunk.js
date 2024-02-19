webpackJsonp(["login.module"],{

/***/ "../../../../../src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], LoginRoutingModule);

//# sourceMappingURL=login-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div class=\"login-page\">\n    <div class=\"col-md-6 push-md-3\">\n        <div class=\"col-lg-12 login-container\">\n            <form (ngSubmit)=\"login()\" role=\"form\" #form=\"ngForm\" ngNativeValidate>\n                <img src=\"assets/images/logo.png\" />\n                <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"form-content\">\n                        <div class=\"form-group\">\n                            <input \n                                type=\"email\" \n                                id=\"emailAddress\" \n                                name=\"emailAddress\" \n                                [(ngModel)]=\"emailAddress\" \n                                class=\"form-control input-lg\" \n                                #email=\"ngModel\" \n                                placeholder=\"Email\" \n                                [email]\n                                required />\n                            <div\n                                *ngIf=\"email.errors && (email.dirty || email.touched)\"\n                                class=\"text-danger text-space pull-right\"\n                                [hidden]=\"!email.errors.required\">\n                                    Email Address is Required.\n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group\">\n                            <input \n                                type=\"password\" \n                                class=\"form-control input-lg\"\n                                id=\"password\" \n                                name=\"password\" \n                                [(ngModel)] = \"password\" \n                                #pass=\"ngModel\" \n                                placeholder=\"Password\" \n                                required />\n                            \n                            <!--\n                            <div class=\"text-space pull-left\">\n                                <a [routerLink]=\"['/forgotpassword']\" class=\"text-left\">Forgot Password?</a>    \n                            </div>\n                            -->\n\n                            <div\n                                *ngIf=\"pass.errors && (pass.dirty || pass.touched)\"\n                                class=\"text-danger text-space pull-right\"\n                                [hidden]=\"!pass.errors.required\">\n                                Password is Required.\n                            </div>\n                        </div>\n                    </div>\n\n                    \n                </div>\n            </div>\n                \n                <div class=\"row\">\n                    <div class=\"col-lg-12 form-group\">\n                        <button class=\"btn btn-success btn-lg\" type=\"submit\" [disabled]=\"form.invalid || loading\">Log in</button>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n                    </div>\n                </div>\n                \n                <!-- TODO: Register-->\n                <!-- <a class=\"btn rounded-btn\" [routerLink]=\"['/signup']\">Register</a> -->\n            </form>\n        </div>\n    </div>\n</div>\n    "

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.login-page {\n  font-family: \"Muli\", sans-serif !important;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #fff;\n  text-align: center;\n  padding: 3em; }\n\n.login-container {\n  padding: 5% 12% 3% 12%;\n  background-color: #FFF;\n  margin-top: 14%;\n  border: solid 1px #ddd;\n  border-radius: 5px; }\n\n.text-space {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.col-lg-4 {\n  padding: 0; }\n\n.input-lg {\n  height: 42px;\n  padding: 8px 16px;\n  font-size: 14px;\n  line-height: 1.3333333; }\n\n.rounded-btn {\n  border-radius: 5px;\n  color: rgba(0, 0, 0, 0.8);\n  background: #fff;\n  border: 2px solid rgba(0, 0, 0, 0.8);\n  font-size: 18px;\n  padding: 12px 25px; }\n\n.rounded-btn:hover, .rounded-btn:focus, .rounded-btn:active, .rounded-btn:visited {\n  color: black;\n  border: 2px solid black; }\n\nh1 {\n  font-weight: 300;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 36px; }\n  h1 small {\n    color: rgba(255, 255, 255, 0.7); }\n\n.form-group {\n  padding: 4px 0; }\n\n.form-content {\n  padding: 20px 0 10px 0; }\n\n.user-avatar {\n  border-radius: 50%;\n  border: 2px solid #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.loggedUserType = "";
        this.loggedUserName = "";
        this.loggedUserId = "";
        this.loggedUserBranch = "";
        this.alerts = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.setItem('isLoggedin', 'false');
        localStorage.setItem('loggedUsername', '');
        localStorage.setItem('loggedUsertype', '');
        localStorage.setItem('loggedUserId', '');
        localStorage.setItem('loggedUserBranch', '');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.closeActiveAlert();
        this.loading = true;
        this.userService.login(this.emailAddress, btoa(this.password)).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.userService.setLoggedInUserId(data.userId);
                _this.userService.setLoggedInUserType(data.role);
                if (data.userBranch != null) {
                    _this.userService.setLoggedInBranch(data.userBranch.branchId);
                }
                if (data.firstName == "" && data.lastName == "") {
                    _this.userService.setLoggedInUserName(data.email, '');
                }
                else {
                    _this.userService.setLoggedInUserName(data.firstName, data.lastName);
                }
                _this.loggedUserId = _this.userService.getLoggedInUserId();
                _this.loggedUserName = _this.userService.getLoggedInUserName();
                _this.loggedUserType = _this.userService.getLoggedInUserType();
                _this.loggedUserBranch = _this.userService.getLoggedInUserBranch();
                _this.successMessage('Log in successful. Please wait...');
                _this.loading = false;
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('loggedUsername', _this.loggedUserName);
                localStorage.setItem('loggedUsertype', _this.loggedUserType);
                localStorage.setItem('loggedUserId', _this.loggedUserId);
                localStorage.setItem('loggedUserBranch', _this.loggedUserBranch);
                setTimeout(function () {
                    //this.closeActiveAlert();
                    _this.router.navigateByUrl('/booking');
                    /**
                    if(this.loggedUserType == "ADMIN"){
                        this.router.navigate(['/booking']);
                    } else if(this.loggedUserType == "EDITOR" || this.loggedUserType == "PHOTOGRAPHER"){
                        this.router.navigate(['/photos']);
                    }
                    */
                }, 2000);
            }
        }, function (err) {
            console.log(err);
            _this.loading = false;
            var errMsg = JSON.parse(err._body);
            _this.errMessage(errMsg.message.toLocaleString());
            return false;
        });
    };
    LoginComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    LoginComponent.prototype.successMessage = function (msg) {
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
    LoginComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    LoginComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    LoginComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["EmailValidator"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["f" /* UserService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_routing_module__ = __webpack_require__("../../../../../src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__login_routing_module__["a" /* LoginRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_ngx_loading__["a" /* LoadingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */]]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map