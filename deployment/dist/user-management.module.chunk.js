webpackJsonp(["user-management.module"],{

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

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Create User'\" [icon]=\"'fa-fw fa-plus'\"></app-page-header>\n  \n  <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create User\n    </div>\n\n    <div class=\"clear-filler\"></div>\n    <div class=\"clear-filler\"></div>\n    \n    <form role=\"form\" (ngSubmit)=\"createUser()\" ngNativeValidate>\n      <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-lg-12 form-group\">\n              <h4>User Details</h4>\n          </div>\n        </div>\n      \n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>First Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"firstname\">\n          </div>\n          <div class=\"col-lg-6\">\n            <label>Last Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"lastname\">\n          </div>\n        </div>\n      \n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Email Address <span>*</span></label>\n            <input type=\"email\" class=\"form-control\" name=\"emailaddress\" [(ngModel)]=\"emailaddress\" required>\n          </div>\n        </div>\n\n        <!-- <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>Contact Number</label>\n            <input type=\"text\" class=\"form-control\" name=\"contactnumber\" [(ngModel)]=\"contactnumber\">\n          </div>\n        </div> -->\n\n        <!-- <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\">\n          </div>\n        </div> -->\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\">\n          </div>\n        </div>\n        \n        <!-- <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>Contact Number</label>\n            <input type=\"text\" class=\"form-control\" name=\"contactnumber\" [(ngModel)]=\"contactnumber\">\n          </div>\n        </div> -->\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Role <span>*</span></label>\n            <select class=\"form-control\" name=\"usertype\" [(ngModel)]=\"usertype\" required>\n              <option value=\"\"> - - - Please Select - - - </option>\n              <option value=\"ADMIN\"> ADMIN </option>\n              <option value=\"BRANCH_MANAGER\"> BRANCH MANAGER </option>\n              <option value=\"EDITOR\"> EDITOR </option>\n              <option value=\"PHOTOGRAPHER\"> PHOTOGRAPHER </option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\" [hidden]=\"usertype!='BRANCH_MANAGER'\">\n            <div class=\"col-lg-12\">\n              <label>Branch <span>*</span></label>\n              <select class=\"form-control\" name=\"branch\" [(ngModel)]=\"branch\" [required]=\"usertype=='BRANCH_MANAGER'\">\n                <option value=\"\"> - - - Please Select - - - </option>\n                <option *ngFor=\"let branch of opt_branch\" [value]=\"branch.branchId\">{{branch.name}}</option>\n              </select>\n            </div>\n          </div>\n\n        <div class=\"clear-filler\"></div>\n        <div class=\"clear-filler\"></div>\n        \n        <div class=\"col-lg-12 text-center form-group\">\n          <div class=\"col-lg-2 col-lg-offset-4\">\n            <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n          </div>\n          <div class=\"col-lg-2\">\n              <button \n                type=\"button\" \n                routerLink=\"/user-management\" \n                class=\"btn btn-warning\"> \n                  Cancel \n              </button>\n          </div>\n        </div>\n\n        \n      </div>\n      <div class=\"clear-filler\"></div>\n\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n      </div>\n\n        <div class=\"clear-filler\"></div>\n    </form>\n    \n    \n  \n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/user-management/components/create-user/create-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_management_services_user_management_service__ = __webpack_require__("../../../../../src/app/layout/user-management/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__branches_services_branches_service__ = __webpack_require__("../../../../../src/app/layout/branches/services/branches.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_management_model_user_management_model__ = __webpack_require__("../../../../../src/app/layout/user-management/model/user-management.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
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
    function CreateUserComponent(userManagementService, branchesService, layoutService, modalService, router) {
        this.userManagementService = userManagementService;
        this.branchesService = branchesService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.router = router;
        this.errorMessage = "Unexpected error encountered.";
        this.userDetails = new __WEBPACK_IMPORTED_MODULE_6__user_management_model_user_management_model__["a" /* userDetailsDto */];
        this.usertype = '';
        //dateOfBirthUI: any = [];
        this.username = '';
        this.password = '';
        this.contactnumber = '';
        this.branch = '';
        this.alerts = [];
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        this.getBranches();
    };
    CreateUserComponent.prototype.getBranches = function () {
        var _this = this;
        this.branchesService.getBranches().subscribe(function (data) {
            _this.opt_branch = data;
        }, function (err) {
            console.log(err);
        });
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
            "firstName": this.firstname,
            "lastName": this.lastname,
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
                if (_this.branch != "" && _this.branch != undefined) {
                    var user_id = data.userId, branch_id = _this.branch;
                    _this.saveBranchUser(user_id, branch_id);
                }
                else {
                    _this.processCompletedSuccessfully();
                }
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CreateUserComponent.prototype.saveBranchUser = function (user_id, branch_id) {
        var _this = this;
        this.userManagementService.createBranchUser(user_id, branch_id).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.processCompletedSuccessfully();
            }
        }, function (err) {
            console.log(err);
        });
    };
    CreateUserComponent.prototype.processCompletedSuccessfully = function () {
        var _this = this;
        this.successMessage('User successfully added.');
        setTimeout(function () {
            _this.closeActiveAlert();
            _this.router.navigateByUrl('user-management');
        }, 3000);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_management_services_user_management_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_management_services_user_management_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__branches_services_branches_service__["a" /* BranchesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__branches_services_branches_service__["a" /* BranchesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__layout_service__["a" /* LayoutService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _e || Object])
], CreateUserComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n    <app-page-header [heading]=\"'Update User'\" [icon]=\"'fa-fw fa-pencil-square-o'\"></app-page-header>\n    \n    <!-- <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert> -->\n\n    <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Update User\n      </div>\n  \n      <div class=\"clear-filler\"></div>\n      <div class=\"clear-filler\"></div>\n      \n      <form role=\"form\" (ngSubmit)=\"updateUser()\" ngNativeValidate>\n          <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n          <div class=\"col-lg-12\">\n              <div class=\"col-lg-12 form-group\">\n                <h4>User Details</h4>\n            </div>\n          </div>\n        \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>First Name</label>\n              <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"firstname\">\n            </div>\n            <div class=\"col-lg-6\">\n              <label>Last Name</label>\n              <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"lastname\">\n            </div>\n          </div>\n        \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Email Address <span>*</span></label>\n              <input type=\"email\" class=\"form-control\" name=\"emailaddress\" [(ngModel)]=\"emailaddress\" readonly>\n            </div>\n          </div>\n  \n  \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>Contact Number</label>\n              <input type=\"text\" class=\"form-control\" name=\"contactnumber\" [(ngModel)]=\"contactnumber\">\n            </div>\n          </div>\n\n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Role <span>*</span></label>\n              <select class=\"form-control\" name=\"usertype\" [(ngModel)]=\"usertype\" required>\n                <option value=\"\"> - - - Please Select - - - </option>\n                <option value=\"ADMIN\"> ADMIN </option>\n                <option value=\"BRANCH_MANAGER\"> BRANCH MANAGER </option>\n                <option value=\"EDITOR\"> EDITOR </option>\n                <option value=\"PHOTOGRAPHER\"> PHOTOGRAPHER </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12 form-group\" [hidden]=\"usertype!='BRANCH_MANAGER'\">\n            <div class=\"col-lg-12\">\n              <label>Branch <span>*</span></label>\n              <select class=\"form-control\" name=\"branch\" [(ngModel)]=\"branch\" [required]=\"usertype=='BRANCH_MANAGER'\">\n                <option *ngFor=\"let branch of opt_branch\" [value]=\"branch.branchId\">{{branch.name}}</option>\n              </select>\n            </div>\n          </div>\n  \n          <div class=\"clear-filler\"></div>\n          <div class=\"clear-filler\"></div>\n          <div class=\"col-lg-12 text-center form-group\">\n            <div class=\"col-lg-2 col-lg-offset-4\">\n              <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n            </div>\n            <div class=\"col-lg-2\">\n                <button \n                  type=\"button\" \n                  routerLink=\"/user-management\" \n                  class=\"btn btn-warning\"> \n                    Cancel \n                </button>\n            </div>\n          </div>\n  \n        </div>\n      </form>\n      <div class=\"clear-filler\"></div>\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n          <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        </div>\n      <div class=\"clear-filler\"></div>\n    \n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/user-management/components/update-user/update-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_management_services_user_management_service__ = __webpack_require__("../../../../../src/app/layout/user-management/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__branches_services_branches_service__ = __webpack_require__("../../../../../src/app/layout/branches/services/branches.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_management_model_user_management_model__ = __webpack_require__("../../../../../src/app/layout/user-management/model/user-management.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
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
    function UpdateUserComponent(userManagementService, branchesService, layoutService, modalService, activatedRoute, router) {
        this.userManagementService = userManagementService;
        this.branchesService = branchesService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.errorMessage = "Unexpected error encountered.";
        this.userDetails = new __WEBPACK_IMPORTED_MODULE_6__user_management_model_user_management_model__["a" /* userDetailsDto */];
        this.usertype = '';
        this.contactnumber = '';
        this.branch = '';
        this.alerts = [];
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.selectedUserId = params['id'];
            _this.readUsers(_this.selectedUserId);
        });
        this.getBranches();
    };
    UpdateUserComponent.prototype.getBranches = function () {
        var _this = this;
        this.branchesService.getBranches().subscribe(function (data) {
            _this.opt_branch = data;
        }, function (err) {
            console.log(err);
        });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_management_services_user_management_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_management_services_user_management_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__branches_services_branches_service__["a" /* BranchesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__branches_services_branches_service__["a" /* BranchesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__layout_service__["a" /* LayoutService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _f || Object])
], UpdateUserComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=update-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/user-management/components/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-action {\n    margin: 0 3px;\n    cursor: pointer;\n}\n\n.row-search {\n    color: #FF8D33;\n}\n\n.row-edit {\n    color: #33A2FF;\n}\n\n.row-delete {\n    color: #ff0000;\n}\n\n\n.pagination-box {\n    margin-top: 1% !important;\n}\n\n.pagination-page .input-group .input-group-addon {\n    display: inline;\n}\n\n.index-column-header, .index-column {\n    text-align: center;\n}\n\n.column-header {\n    text-align: center;\n    font-weight: 700;\n}\n\n.data-column {\n    word-wrap: break-word;\n}\n\n.column-header.column-action {\n    width: 10%;\n}\n\n.data-column.column-action {\n    text-align: center;\n}\n\n.column-header.column-name {\n    width: 30%;\n}\n\n\n.column-header.column-email {\n    width: 25%;\n}\n\n.column-header.column-mobileNumber {\n    width: 18%;\n}\n\n.column-header.column-role {\n    width: 17%;\n}\n\n.multiline-paragraph {\n    white-space: pre-line; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/user-management/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Users'\" [icon]=\"'fa-fw fa-users'\"></app-page-header>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-fw fa-users\" aria-hidden=\"true\"></i> Users      \n      </div>\n\n      <div class=\"clear-filler\"></div>\n      \n  \n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-3\">\n            <!-- <div class=\"pull-left\">\n              <div class=\"input-group\">\n                  <span class=\"input-group-btn\">\n                      <button type=\"button\" class=\"btn btn-info\">\n                          <i class=\"fa fa-search\"></i>\n                      </button>\n                  </span>  \n                <input #gb type=\"text\" pInputText class=\"form-control\" placeholder=\"Search\">\n              </div>\n            </div> -->\n        </div>\n\n        <div class=\"col-lg-3 col-lg-offset-6\">\n            <div class=\"pull-right\">\n              <button type=\"button\" routerLink=\"create-user\" class=\"btn btn-info pull-right\">Create User</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-12 table-responsive\">\n            <div class=\"clear-filler\"></div>\n            <div class=\"clear-filler\"></div> \n\n            <data-table id=\"users-grid\"\n                headerTitle=\"\"\n                [items]=\"users\"\n                [itemCount]=\"usersCount\"\n                (reload)=\"reloadUsers($event)\"\n                [limit]=\"10\"\n                [sortBy]=\"'name'\"\n                [sortAsc]=\"true\"\n                [selectColumn]=\"false\"\n                [multiSelect]=\"false\"\n                [substituteRows]=\"false\"\n                [expandableRows]=\"false\"\n                [translations]=\"translations\"\n                [indexColumnHeader]=\"'#'\"\n                [selectOnRowClick]=\"true\"\n                >\n                <!-- <ng-template #dataTableExpand let-item=\"item\">\n                    <div [textContent]=\"item.description\" style=\"padding: 5px; color: gray\"></div>\n                </ng-template>\n                 -->\n                <data-table-column\n                    [property]=\"'name'\"\n                    [header]=\"'Name'\"\n                    [sortable]=\"true\">\n                    <ng-template #dataTableCell let-item=\"item\">\n                      {{ item.firstName + ' ' + item.lastName }}\n                    </ng-template>\n                </data-table-column>\n                <data-table-column\n                  [property]=\"'email'\"\n                  [header]=\"'Email Address'\"\n                  [sortable]=\"true\">\n                </data-table-column>\n\n                <data-table-column\n                  [property]=\"'mobileNumber'\"\n                  [header]=\"'Contact Number'\"\n                  [sortable]=\"true\">\n                </data-table-column>\n\n                <data-table-column\n                  [property]=\"'role'\"\n                  [header]=\"'Role'\"\n                  [sortable]=\"true\">\n                </data-table-column>\n\n                <data-table-column\n                [property]=\"'action'\"\n                [header]=\"'Action'\"\n                style=\"width:10%;\">\n                <ng-template #dataTableCell let-item=\"item\">\n                    <span \n                      class=\"fa fa-search row-action row-search\" \n                      title=\"View\" \n                      (click)=\"getUserDetailsRow(item.userId); open(content)\">\n                    </span>\n                    <span \n                      class=\"fa fa-pencil row-action row-edit\"\n                      title=\"Update\"\n                      [routerLink]=\"['update-user']\"\n                      [queryParams]=\"{id:item.userId}\">\n                    </span>\n                    <span \n                      class=\"fa fa-times row-action row-delete\"\n                      title=\"Archive\"\n                      (click)=\"deleteUserDetailsRow(item.userId)\">\n                    </span>\n\n                </ng-template>\n                </data-table-column>\n            </data-table>\n\n            <div class=\"clear-filler\"></div> \n\n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-12 text-center\">\n            <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n\n      <!-- Start - Modal -->\n      <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\"> User Details</h6>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">        \n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Name</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedUserDetails.firstName + ' ' + selectedUserDetails.lastName }}\n                <span [hidden]=\"selectedUserDetails.firstName != '' && selectedUserDetails.lastName != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Email Addres</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>{{ selectedUserDetails.email }}</p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Mobile Number</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedUserDetails.mobileNumber }}\n                <span [hidden]=\"selectedUserDetails.mobileNumber != ''\">N/A</span>\n            </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Role</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>{{ selectedUserDetails.role }}</p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Date Modified</label>\n            </div>\n            <div class=\"col-lg-6\">\n            <p *ngIf=\"selectedUserDetails.updatedTime != null\">{{ selectedUserDetails.updatedTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n            <p *ngIf=\"selectedUserDetails.updatedTime == null\">{{ selectedUserDetails.createdTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n            </div>\n          </div>\n\n          <!-- <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Date of Birth</label>\n            </div>\n            <div class=\"col-lg-6\">\n            <p>{{ selectedUserDetails.birthday | date : 'dd MMM y' }}</p>\n            </div>\n          </div> -->\n\n          <!-- <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Status</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>{{ selectedUserDetails.user.status }}</p>\n            </div>\n          </div> -->\n\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"col-lg-12\"> \n            <div class=\"text-center col-lg-12\">\n              <button \n                type=\"button\" \n                class=\"btn btn-secondary\" \n                style=\"margin: 3px 10px;\" \n                (click)=\"d('Cross click')\">\n                Close\n              </button>\n            </div>\n            <div class=\"clear-filler\"></div>\n          \n        </div>\n          \n      </div>\n      </ng-template>\n      <!-- End - Modal -->\n\n    </div>\n  </div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__ = __webpack_require__("../../../../angular-2-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__);
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
    function UsersComponent(userManagementService, layoutService, modalService, renderer, elem) {
        this.userManagementService = userManagementService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.renderer = renderer;
        this.elem = elem;
        this.errorMessage = "Unexpected error encountered.";
        this.userDetails = new __WEBPACK_IMPORTED_MODULE_4__user_management_model_user_management_model__["a" /* userDetailsDto */];
        this.loading = false;
        this.users = [];
        this.usersCount = 0;
        this.alerts = [];
        this.translations = {
            indexColumn: '#',
            expandColumn: 'Expand column',
            selectColumn: 'Select column',
            paginationLimit: 'Limit',
            paginationRange: 'Results'
        };
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.loading = true;
        this.layoutService.getUsers().subscribe(function (data) {
            if (data != undefined) {
                _this.users = data;
                _this.dtUsersResource = new __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTableResource"](_this.users);
                _this.dtUsersResource.count().then(function (count) { return _this.usersCount = count; });
                _this.usersTable.reloadItems();
                _this.loading = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    UsersComponent.prototype.reloadUsers = function (params) {
        var _this = this;
        if (this.dtUsersResource != undefined) {
            this.dtUsersResource.query(params).then(function (users) { return _this.users = users; });
        }
    };
    UsersComponent.prototype.cellColor = function (car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };
    ;
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTable"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTable"]) === "function" && _a || Object)
], UsersComponent.prototype, "usersTable", void 0);
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/layout/user-management/components/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/user-management/components/users/users.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_management_services_user_management_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_management_services_user_management_service__["a" /* UserManagementService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object])
], UsersComponent);

var _a, _b, _c, _d, _e, _f;
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
    UserManagementService.prototype.createBranchUser = function (user_id, branch_id) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/branchUsers/";
            query = this.baseUrl + this.apiPath + path;
            result = this.http.post(encodeURI(query), {
                "branchId": branch_id,
                "userId": user_id,
                "status": "ACTIVE"
            }, options).map(function (res) { return res.json(); });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_management_routing_module__ = __webpack_require__("../../../../../src/app/layout/user-management/user-management-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__ = __webpack_require__("../../../../angular-2-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_management_service__ = __webpack_require__("../../../../../src/app/layout/user-management/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__branches_services_branches_service__ = __webpack_require__("../../../../../src/app/layout/branches/services/branches.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_users_users_component__ = __webpack_require__("../../../../../src/app/layout/user-management/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_create_user_create_user_component__ = __webpack_require__("../../../../../src/app/layout/user-management/components/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_update_user_update_user_component__ = __webpack_require__("../../../../../src/app/layout/user-management/components/update-user/update-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { NgxMyDatePickerModule } from 'ngx-mydatepicker';













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
            __WEBPACK_IMPORTED_MODULE_3__user_management_routing_module__["a" /* UserManagementRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared__["c" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_loading__["a" /* LoadingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_12__components_users_users_component__["a" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_13__components_create_user_create_user_component__["a" /* CreateUserComponent */], __WEBPACK_IMPORTED_MODULE_14__components_update_user_update_user_component__["a" /* UpdateUserComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_user_management_service__["a" /* UserManagementService */], __WEBPACK_IMPORTED_MODULE_11__branches_services_branches_service__["a" /* BranchesService */]]
    })
], UserManagementModule);

//# sourceMappingURL=user-management.module.js.map

/***/ })

});
//# sourceMappingURL=user-management.module.chunk.js.map