webpackJsonp(["packages.module"],{

/***/ "../../../../../src/app/layout/packages/components/create-package/create-package.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}\n\ntextarea {\n    resize: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/packages/components/create-package/create-package.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Create Package'\" [icon]=\"'fa-fw fa-plus'\"></app-page-header>\n  \n  <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create Package\n    </div>\n\n    <div class=\"clear-filler\"></div>\n    <div class=\"clear-filler\"></div>\n    \n    <form role=\"form\" (ngSubmit)=\"createPackage()\" ngNativeValidate>\n      <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-lg-12 form-group\">\n              <h4>Package Details</h4>\n          </div>\n        </div>\n      \n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Name <span>*</span></label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" required>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Description </label>\n            <div class=\"input-group\">\n              <textarea class=\"form-control\" rows=\"5\" name=\"description\" [(ngModel)]=\"description\"></textarea>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>Price </label>\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"price-ico\">PHP</span>\n              <input \n                type=\"number\" \n                step=\"any\" \n                class=\"form-control\" name=\"price\" [(ngModel)]=\"price\" aria-describedby=\"price-ico\" placeholder=\"0.00\">\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>Credits </label>\n            <div class=\"input-group\">\n              <input \n                type=\"number\" \n                step=\"any\" \n                class=\"form-control\" name=\"credits\" [(ngModel)]=\"credits\" placeholder=\"0\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"clear-filler\"></div>\n        <div class=\"clear-filler\"></div>\n        \n        <div class=\"col-lg-12 text-center form-group\">\n          <div class=\"col-lg-2 col-lg-offset-4\">\n            <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n          </div>\n          <div class=\"col-lg-2\">\n              <button \n                type=\"button\" \n                routerLink=\"/packages\" \n                class=\"btn btn-warning\"> \n                  Cancel \n              </button>\n          </div>\n        </div>\n\n        \n      </div>\n      <div class=\"clear-filler\"></div>\n\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n      </div>\n\n        <div class=\"clear-filler\"></div>\n    </form>\n    \n    \n  \n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/packages/components/create-package/create-package.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__packages_services_packages_service__ = __webpack_require__("../../../../../src/app/layout/packages/services/packages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__packages_model_packages_model__ = __webpack_require__("../../../../../src/app/layout/packages/model/packages.model.ts");
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







var CreatePackageComponent = (function () {
    function CreatePackageComponent(packageService, layoutService, modalService, router) {
        this.packageService = packageService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.router = router;
        this.errorMessage = "Unexpected error encountered.";
        this.packagetDetails = new __WEBPACK_IMPORTED_MODULE_5__packages_model_packages_model__["a" /* packageDetailsDto */];
        this.name = '';
        this.description = '';
        this.alerts = [];
    }
    CreatePackageComponent.prototype.ngOnInit = function () { };
    CreatePackageComponent.prototype.createPackage = function () {
        var param = [];
        param.push({
            "name": this.name,
            "price": this.price,
            "description": this.description,
            "freeCredits": this.credits
        });
        this.savePackage(param[0]);
    };
    CreatePackageComponent.prototype.savePackage = function (packageDetails) {
        var _this = this;
        this.packageService.createPackage(packageDetails).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('Package successfully added.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('packages');
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CreatePackageComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    CreatePackageComponent.prototype.successMessage = function (msg) {
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
    CreatePackageComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    CreatePackageComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    CreatePackageComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return CreatePackageComponent;
}());
CreatePackageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-package',
        template: __webpack_require__("../../../../../src/app/layout/packages/components/create-package/create-package.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/packages/components/create-package/create-package.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__packages_services_packages_service__["a" /* PackagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__packages_services_packages_service__["a" /* PackagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object])
], CreatePackageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-package.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/packages/components/packages/packages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-action {\n    margin: 0 3px;\n    cursor: pointer;\n}\n\n.row-search {\n    color: #FF8D33;\n}\n\n.row-edit {\n    color: #33A2FF;\n}\n\n.row-delete {\n    color: #ff0000;\n}\n\n.pagination-box {\n    margin-top: 1% !important;\n}\n\n.pagination-page .input-group .input-group-addon {\n    display: inline;\n}\n\n.index-column-header, .index-column {\n    text-align: center;\n}\n\n.column-header {\n    text-align: center;\n    font-weight: 700;\n}\n\n.data-column {\n    word-wrap: break-word;\n}\n\n.column-header.column-action {\n    width: 10%;\n}\n\n.data-column.column-action {\n    text-align: center;\n}\n\n.column-header.column-price {\n    width: 18%;\n}\n\n.data-column.column-price {\n    text-align: right;\n}\n\n.column-header.column-name {\n    width: 22%;\n}\n\n.column-header.column-description {\n    width: 47%;\n}\n\n.column-header.column-freeCredits {\n    width: 13%;\n}\n\n.data-column.column-freeCredits {\n    text-align: center;\n}\n\n\n\n.multiline-paragraph {\n    white-space: pre-line; \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/packages/components/packages/packages.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Packages'\" [icon]=\"'fa-fw fa-th-list'\"></app-page-header>\n  \n    <div class=\"card\">\n      \n      <div class=\"card-header\">\n        <i class=\"fa fa-fw fa-th-list\" aria-hidden=\"true\"></i> Packages\n        \n      </div>\n\n      <div class=\"clear-filler\"></div>\n      \n  \n      <div class=\"col-lg-12\">\n\n        <div class=\"col-lg-3\">\n            <!-- <div class=\"pull-left\">\n              <div class=\"input-group\">\n                  <span class=\"input-group-btn\">\n                      <button type=\"button\" class=\"btn btn-info\">\n                          <i class=\"fa fa-search\"></i>\n                      </button>\n                  </span>  \n                <input #gb type=\"text\" pInputText class=\"form-control\" placeholder=\"Search\">\n              </div>\n            </div> -->\n        </div>\n\n        <div class=\"col-lg-3 col-lg-offset-6\">\n            <div class=\"pull-right\">\n              <button type=\"button\" routerLink=\"create-package\" class=\"btn btn-info pull-right\">Create Package</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12\" >\n          <div class=\"col-lg-12 table-responsive\">\n            <div class=\"clear-filler\"></div>\n            <div class=\"clear-filler\"></div> \n            \n            <data-table id=\"packages-grid\"\n                headerTitle=\"\"\n                [items]=\"packages\"\n                [itemCount]=\"packageCount\"\n                (reload)=\"reloadPackages($event)\"\n                [limit]=\"10\"\n                [sortBy]=\"'name'\"\n                [sortAsc]=\"true\"\n                [selectColumn]=\"false\"\n                [multiSelect]=\"false\"\n                [substituteRows]=\"false\"\n                [expandableRows]=\"false\"\n                [translations]=\"translations\"\n                [indexColumnHeader]=\"'#'\"\n                [selectOnRowClick]=\"true\"\n                >\n                <!-- <ng-template #dataTableExpand let-item=\"item\">\n                    <div [textContent]=\"item.description\" style=\"padding: 5px; color: gray\"></div>\n                </ng-template>\n                 -->\n                <data-table-column\n                    [property]=\"'name'\"\n                    [header]=\"'Name'\"\n                    [sortable]=\"true\">\n                </data-table-column>\n                <data-table-column\n                    [property]=\"'description'\"\n                    [header]=\"'Description'\"\n                    [sortable]=\"true\">\n                </data-table-column>\n                <data-table-column\n                  [property]=\"'price'\"\n                  [header]=\"'Price'\"\n                  [sortable]=\"true\">\n                  <ng-template #dataTableCell let-item=\"item\">\n                    {{ item.price | currency: 'PHP': true}}\n                  </ng-template>\n                </data-table-column>\n\n                <data-table-column\n                    [property]=\"'freeCredits'\"\n                    [header]=\"'Credits'\"\n                    [sortable]=\"true\">\n                </data-table-column>\n\n                <!-- <data-table-column\n                    [property]=\"'name'\"\n                    [header]=\"'Name + Credit Type'\"\n                    [sortable]=\"true\">\n                    <ng-template #dataTableCell let-item=\"item\">\n                      <span>{{ item.name + ' ' + item.creditType}}</span>\n                  </ng-template> \n                </data-table-column>\n                -->\n\n                <data-table-column\n                [property]=\"'action'\"\n                [header]=\"'Action'\"\n                style=\"width:10%;\">\n                <ng-template #dataTableCell let-item=\"item\">\n                    <span \n                      class=\"fa fa-search row-action row-search\" \n                      title=\"View\" \n                      (click)=\"getPackageDetailsRow(item.id); open(content)\">\n                    </span>\n                    <span \n                      class=\"fa fa-pencil row-action row-edit\"\n                      title=\"Update\"\n                      [routerLink]=\"['update-package']\"\n                      [queryParams]=\"{id:item.id}\">\n                    </span>\n                    <span \n                      class=\"fa fa-times row-action row-delete\"\n                      title=\"Archive\"\n                      (click)=\"deletePackageDetailsRow(item.id)\">\n                    </span>\n                </ng-template>\n                </data-table-column>\n            </data-table>\n          \n            <div class=\"clear-filler\"></div> \n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-12 text-center\">\n            <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n\n\n\n\n\n\n      <!-- Start - Modal -->\n      <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\"> Package Details</h6>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Name</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedPackageDetails.name }}\n                <span [hidden]=\"selectedPackageDetails.name != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          \n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Description</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p class=\"multiline-paragraph\" [innerHTML]=\"selectedPackageDetails.description\">\n                <span [hidden]=\"selectedPackageDetails.name != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Price</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedPackageDetails.price | currency : 'PHP' : true }}\n            </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Credits</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>{{ selectedPackageDetails.freeCredits }}</p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Date Modified</label>\n            </div>\n            <div class=\"col-lg-6\">\n            <p *ngIf=\"selectedPackageDetails.updatedTime != null\">{{ selectedPackageDetails.updatedTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n            <p *ngIf=\"selectedPackageDetails.updatedTime == null\">{{ selectedPackageDetails.createdTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n            </div>\n          </div>\n\n\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"col-lg-12\"> \n            <div class=\"text-center col-lg-12\">\n              <button \n                type=\"button\" \n                class=\"btn btn-secondary\" \n                style=\"margin: 3px 10px;\" \n                (click)=\"d('Cross click')\">\n                Close\n              </button>\n            </div>\n            <div class=\"clear-filler\"></div>\n          \n        </div>\n          \n      </div>\n      </ng-template>\n      <!-- End - Modal -->\n\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/packages/components/packages/packages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__packages_services_packages_service__ = __webpack_require__("../../../../../src/app/layout/packages/services/packages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__packages_model_packages_model__ = __webpack_require__("../../../../../src/app/layout/packages/model/packages.model.ts");
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







var PackagesComponent = (function () {
    function PackagesComponent(packagesService, layoutService, modalService, renderer, elem) {
        this.packagesService = packagesService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.renderer = renderer;
        this.elem = elem;
        this.errorMessage = "Unexpected error encountered.";
        this.packageDetails = new __WEBPACK_IMPORTED_MODULE_4__packages_model_packages_model__["a" /* packageDetailsDto */];
        this.loading = false;
        this.packages = [];
        this.packageCount = 0;
        this.alerts = [];
        this.translations = {
            indexColumn: '#',
            expandColumn: 'Expand column',
            selectColumn: 'Select column',
            paginationLimit: 'Limit',
            paginationRange: 'Results'
        };
    }
    PackagesComponent.prototype.ngOnInit = function () {
        this.getPackages();
    };
    PackagesComponent.prototype.getPackages = function () {
        var _this = this;
        this.loading = true;
        this.packagesService.getPackages().subscribe(function (data) {
            console.log(data);
            if (data != undefined) {
                _this.packages = data;
                _this.dtPackagesResource = new __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTableResource"](_this.packages);
                _this.dtPackagesResource.count().then(function (count) { return _this.packageCount = count; });
                _this.packagesTable.reloadItems();
                _this.loading = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    PackagesComponent.prototype.reloadPackages = function (params) {
        var _this = this;
        if (this.dtPackagesResource != undefined) {
            this.dtPackagesResource.query(params).then(function (packages) { return _this.packages = packages; });
        }
    };
    PackagesComponent.prototype.cellColor = function (car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };
    ;
    PackagesComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { 'size': 'lg', backdrop: 'static', keyboard: false }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PackagesComponent.prototype.getDismissReason = function (reason) {
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
    PackagesComponent.prototype.getPackageDetailsRow = function (id) {
        var _this = this;
        this.packages.forEach(function (item, index) {
            if (item.id == id) {
                _this.selectedPackageDetails = _this.packages[index];
                return false;
            }
        });
    };
    PackagesComponent.prototype.deletePackageDetailsRow = function (id) {
        if (confirm("Are you sure you want to archive this package?")) {
            this.deletePackage(id);
        }
    };
    PackagesComponent.prototype.deletePackage = function (id) {
        var _this = this;
        this.packagesService.deletePackage(id).subscribe(function (data) {
            console.log(data);
            //if(!this.isEmpty(data)){
            if (data.status == 200) {
                _this.successMessage('Package successfully archived.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.getPackages();
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    PackagesComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    PackagesComponent.prototype.successMessage = function (msg) {
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
    PackagesComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    PackagesComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    PackagesComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return PackagesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTable"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTable"]) === "function" && _a || Object)
], PackagesComponent.prototype, "packagesTable", void 0);
PackagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-packages',
        template: __webpack_require__("../../../../../src/app/layout/packages/components/packages/packages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/packages/components/packages/packages.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__packages_services_packages_service__["a" /* PackagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__packages_services_packages_service__["a" /* PackagesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object])
], PackagesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=packages.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/packages/components/update-package/update-package.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}\n\ntextarea {\n    resize: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/packages/components/update-package/update-package.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n    <app-page-header [heading]=\"'Update Package'\" [icon]=\"'fa-fw fa-pencil-square-o'\"></app-page-header>\n    \n    <!-- <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert> -->\n\n    <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Update Package\n      </div>\n  \n      <div class=\"clear-filler\"></div>\n      <div class=\"clear-filler\"></div>\n      \n      <form role=\"form\" (ngSubmit)=\"updatePackage()\" ngNativeValidate>\n          <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n          <div class=\"col-lg-12\">\n              <div class=\"col-lg-12 form-group\">\n                <h4>Package Details</h4>\n            </div>\n          </div>\n        \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Name <span>*</span></label>\n              <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" required>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Description </label>\n              <div class=\"input-group\">\n                <textarea class=\"form-control\" rows=\"5\" name=\"description\" [(ngModel)]=\"description\"></textarea>\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>Price </label>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\" id=\"price-ico\">PHP</span>\n                <input \n                  type=\"number\" \n                  step=\"any\" \n                  class=\"form-control\" name=\"price\" [(ngModel)]=\"price\" aria-describedby=\"price-ico\" placeholder=\"0.00\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>Credits </label>\n              <div class=\"input-group\">\n                <input \n                  type=\"number\" \n                  step=\"any\" \n                  class=\"form-control\" name=\"credits\" [(ngModel)]=\"credits\" placeholder=\"0\">\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"clear-filler\"></div>\n          <div class=\"clear-filler\"></div>\n          <div class=\"col-lg-12 text-center form-group\">\n            <div class=\"col-lg-2 col-lg-offset-4\">\n              <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n            </div>\n            <div class=\"col-lg-2\">\n                <button \n                  type=\"button\" \n                  routerLink=\"/packages\" \n                  class=\"btn btn-warning\"> \n                    Cancel \n                </button>\n            </div>\n          </div>\n  \n        </div>\n      </form>\n      <div class=\"clear-filler\"></div>\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n          <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        </div>\n      <div class=\"clear-filler\"></div>\n    \n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/packages/components/update-package/update-package.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__packages_services_packages_service__ = __webpack_require__("../../../../../src/app/layout/packages/services/packages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__packages_model_packages_model__ = __webpack_require__("../../../../../src/app/layout/packages/model/packages.model.ts");
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







var UpdatePackageComponent = (function () {
    function UpdatePackageComponent(packagesService, layoutService, modalService, activatedRoute, router) {
        this.packagesService = packagesService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.errorMessage = "Unexpected error encountered.";
        this.packageDetails = new __WEBPACK_IMPORTED_MODULE_5__packages_model_packages_model__["a" /* packageDetailsDto */];
        this.name = '';
        this.description = '';
        this.alerts = [];
    }
    UpdatePackageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.selectedPackageId = params['id'];
            _this.readPackage(_this.selectedPackageId);
        });
    };
    UpdatePackageComponent.prototype.readPackage = function (selectedPackageId) {
        var _this = this;
        this.packagesService.readPackage(selectedPackageId).subscribe(function (data) {
            console.log(data);
            _this.name = data.name;
            _this.price = data.price;
            _this.description = data.description;
            _this.credits = data.freeCredits;
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
    UpdatePackageComponent.prototype.updatePackage = function () {
        var param = [];
        param.push({
            "name": this.name,
            "price": this.price,
            "description": this.description,
            "freeCredits": this.credits
        });
        this.savePackage(param[0]);
    };
    UpdatePackageComponent.prototype.savePackage = function (packageDetails) {
        var _this = this;
        this.packagesService.updatePackage(packageDetails, this.selectedPackageId).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('Package successfully updated.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('packages');
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    UpdatePackageComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    UpdatePackageComponent.prototype.successMessage = function (msg) {
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
    UpdatePackageComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    UpdatePackageComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    UpdatePackageComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return UpdatePackageComponent;
}());
UpdatePackageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-package',
        template: __webpack_require__("../../../../../src/app/layout/packages/components/update-package/update-package.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/packages/components/update-package/update-package.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__packages_services_packages_service__["a" /* PackagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__packages_services_packages_service__["a" /* PackagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _e || Object])
], UpdatePackageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=update-package.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/packages/model/packages.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return packageDetailsDto; });
var packageDetailsDto = (function () {
    function packageDetailsDto() {
    }
    return packageDetailsDto;
}());

//# sourceMappingURL=packages.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/packages/packages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_packages_packages_component__ = __webpack_require__("../../../../../src/app/layout/packages/components/packages/packages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_create_package_create_package_component__ = __webpack_require__("../../../../../src/app/layout/packages/components/create-package/create-package.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_update_package_update_package_component__ = __webpack_require__("../../../../../src/app/layout/packages/components/update-package/update-package.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_packages_packages_component__["a" /* PackagesComponent */] },
    { path: 'packages', component: __WEBPACK_IMPORTED_MODULE_2__components_packages_packages_component__["a" /* PackagesComponent */] },
    { path: 'create-package', component: __WEBPACK_IMPORTED_MODULE_3__components_create_package_create_package_component__["a" /* CreatePackageComponent */] },
    { path: 'update-package', component: __WEBPACK_IMPORTED_MODULE_4__components_update_package_update_package_component__["a" /* UpdatePackageComponent */] },
];
var PackagesRoutingModule = (function () {
    function PackagesRoutingModule() {
    }
    return PackagesRoutingModule;
}());
PackagesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], PackagesRoutingModule);

//# sourceMappingURL=packages-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/packages/packages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesModule", function() { return PackagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__packages_routing_module__ = __webpack_require__("../../../../../src/app/layout/packages/packages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__ = __webpack_require__("../../../../angular-2-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_packages_service__ = __webpack_require__("../../../../../src/app/layout/packages/services/packages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_packages_packages_component__ = __webpack_require__("../../../../../src/app/layout/packages/components/packages/packages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_create_package_create_package_component__ = __webpack_require__("../../../../../src/app/layout/packages/components/create-package/create-package.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_update_package_update_package_component__ = __webpack_require__("../../../../../src/app/layout/packages/components/update-package/update-package.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { NgxMyDatePickerModule } from 'ngx-mydatepicker';












var PackagesModule = (function () {
    function PackagesModule() {
    }
    return PackagesModule;
}());
PackagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__packages_routing_module__["a" /* PackagesRoutingModule */],
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
        declarations: [__WEBPACK_IMPORTED_MODULE_11__components_packages_packages_component__["a" /* PackagesComponent */], __WEBPACK_IMPORTED_MODULE_12__components_create_package_create_package_component__["a" /* CreatePackageComponent */], __WEBPACK_IMPORTED_MODULE_13__components_update_package_update_package_component__["a" /* UpdatePackageComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_packages_service__["a" /* PackagesService */]]
    })
], PackagesModule);

//# sourceMappingURL=packages.module.js.map

/***/ })

});
//# sourceMappingURL=packages.module.chunk.js.map