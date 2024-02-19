webpackJsonp(["services.module"],{

/***/ "../../../../../src/app/layout/services/components/create-service/create-service.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}\n\ntextarea {\n    resize: none;\n}\n\n.ui-select-container.open .dropdown-menu {\n    display: block !important;\n}\n\n.ui-select-container.ui-select-multiple {\n    padding: 0.45rem 0.75rem !important;\n}\n\n.ui-select-choices-row a {\npadding: 8px !important;\n}\n\n.ui-select-multiple {\n    min-height: 90px !important;\n}\n.ui-select-match .btn{\n    padding: 0.3rem 0.3rem;\n    margin: 0;\n    color: #292b2c !important;\n    background-color: #fff !important;\n    /* border: 1px solid rgba(0, 0, 0, 0.15); */\n    font-size: 12px;\n}\n\n.ui-select-choices-row.active > a{\n    color: #464a4c !important;\n    text-decoration: none;\n    outline: 0;\n    background-color:rgba(0, 0, 0, 0.15) !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/services/components/create-service/create-service.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Create Service'\" [icon]=\"'fa-fw fa-plus'\"></app-page-header>\n  \n  <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create Servivce\n    </div>\n\n    <div class=\"clear-filler\"></div>\n    <div class=\"clear-filler\"></div>\n    \n    <form role=\"form\" (ngSubmit)=\"createService()\" ngNativeValidate>\n      <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-lg-12 form-group\">\n              <h4>Service Details</h4>\n          </div>\n        </div>\n      \n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Name <span>*</span></label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" required>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Service Type <span>*</span></label>\n            <select class=\"form-control\" name=\"serviceType\" [(ngModel)]=\"serviceType\" required>\n              <option value=\"\"> - - - Please Select - - - </option>\n              <option value=\"OUTDOOR\"> OUTDOOR </option>\n              <option value=\"STUDIO\"> STUDIO </option>\n            </select>\n          </div>\n        </div>\n\n        <!--\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-8\">\n            <label>Icon </label>\n            <div class=\"input-group\">\n              <input \n                type=\"file\" \n                multiple=\"false\"\n                class=\"form-control-file form-control\"\n                (change)=\"onFileIconSelected($event)\"\n                #fileUploadIcon>\n            </div>\n          </div>\n        </div> \n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-8\">\n            <label>Banner </label>\n            <div class=\"input-group\">\n              <input \n                type=\"file\" \n                multiple=\"false\"\n                class=\"form-control-file form-control\"\n                (change)=\"onFileBannerSelected($event)\"\n                #fileUploadBanner>\n            </div>\n          </div>\n        </div>\n        --> \n\n        <!-- <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Inclusion</label>\n            <textarea class=\"form-control\" rows=\"5\" name=\"inclusion\" [(ngModel)]=\"inclusion\"></textarea>\n          </div>\n        </div> -->\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Description </label>\n            <div class=\"input-group\">\n              <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"description\" rows=\"5\"></textarea>\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"col-lg-12 form-group\" *ngIf=\"addOns.length > 0\">\n          <div class=\"col-lg-12\">\n            <label>Add-Ons</label>\n            <ng-select\n              [multiple]=\"true\"\n              [items]=\"addOns\"\n              (data)=\"refreshAddOnsValue($event)\"\n              placeholder=\"Choose Add-Ons\"\n              notFoundText=\"'No result found.''\">\n            </ng-select>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\" *ngIf=\"packages.length > 0\">\n          <div class=\"col-lg-12\">\n            <label>Packages</label>\n            <ng-select\n              [multiple]=\"true\"\n              [items]=\"packages\"\n              (data)=\"refreshPackagesValue($event)\"\n              placeholder=\"Choose Packages\"\n              notFoundText=\"'No result found.''\">\n            </ng-select>\n          </div>\n        </div>\n        \n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n              <label>Featured Service </label><br/>\n            <ui-switch name=\"isFeatured\" size=\"small\" [(ngModel)]=\"isFeatured\"></ui-switch>\n          </div>\n        </div>\n\n        <!-- <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>\n              <Input type=\"checkbox\" (change)=\"chkIsFeatured($event)\"> <strong>Featured Service</strong> </label>\n          </div>\n        </div> -->\n\n        <div class=\"clear-filler\"></div>\n        <div class=\"clear-filler\"></div>\n        \n        <div class=\"col-lg-12 text-center form-group\">\n          <div class=\"col-lg-2 col-lg-offset-4\">\n            <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n          </div>\n          <div class=\"col-lg-2\">\n              <button \n                type=\"button\" \n                routerLink=\"/services\" \n                class=\"btn btn-warning\"> \n                  Cancel \n              </button>\n          </div>\n        </div>\n        \n      </div>\n      <div class=\"clear-filler\"></div>\n\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n      </div>\n\n        <div class=\"clear-filler\"></div>\n    </form>\n    \n    \n  \n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/services/components/create-service/create-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services_services_service__ = __webpack_require__("../../../../../src/app/layout/services/services/services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addons_services_addons_service__ = __webpack_require__("../../../../../src/app/layout/addons/services/addons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__packages_services_packages_service__ = __webpack_require__("../../../../../src/app/layout/packages/services/packages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_model_services_model__ = __webpack_require__("../../../../../src/app/layout/services/model/services.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateServiceComponent = (function () {
    function CreateServiceComponent(servicesService, addonsService, packagesService, layoutService, modalService, router) {
        this.servicesService = servicesService;
        this.addonsService = addonsService;
        this.packagesService = packagesService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.router = router;
        this.errorMessage = "Unexpected error encountered.";
        this.servicesDetails = new __WEBPACK_IMPORTED_MODULE_7__services_model_services_model__["a" /* ServicesDto */];
        this.loading = false;
        this.saveServiceStatus = false;
        this.uploadIconStatus = false;
        this.uploadBannerStatus = false;
        this.serviceType = '';
        this.name = '';
        this.serviceAddOns = [];
        this.addOns = [];
        this.selectedAddOns = [];
        this.servicePackages = [];
        this.packages = [];
        this.selectedPackages = [];
        this.description = '';
        this.updatedTime = new Date();
        this.createdTime = new Date();
        this.selectedIconFile = null;
        this.selectedBannerFile = null;
        this.isFeatured = false;
        // dateOfBirthUI: any = [];
        // dateOfBirth: string;
        this.alerts = [];
        this.value = this.addOns;
    }
    CreateServiceComponent.prototype.ngOnInit = function () {
        this.getAddons();
        this.getPackages();
    };
    // private _disabledV:string = '0';
    // private disabled:boolean = false;
    // private get disabledV():string {
    //   return this._disabledV;
    // }
    CreateServiceComponent.prototype.refreshAddOnsValue = function (value) {
        this.selectedAddOns = value.map(function (item) { return item.text; });
    };
    CreateServiceComponent.prototype.refreshPackagesValue = function (value) {
        this.selectedPackages = value.map(function (item) { return item.text; });
    };
    CreateServiceComponent.prototype.onFileIconSelected = function (event) {
        this.selectedIconFile = event.target.files[0];
    };
    CreateServiceComponent.prototype.onFileBannerSelected = function (event) {
        this.selectedBannerFile = event.target.files[0];
    };
    // chkIsFeatured(event){
    //   this.isFeatured = event.target.checked;
    // }
    CreateServiceComponent.prototype.getAddons = function () {
        var _this = this;
        this.addonsService.getAddons().subscribe(function (data) {
            if (data != undefined) {
                console.log(data);
                _this.serviceAddOns = data;
                for (var x = 0; x < data.length; x++) {
                    _this.addOns.push(data[x].description);
                }
            }
            console.log(_this.addOns);
        }, function (err) {
            console.log(err);
        });
    };
    CreateServiceComponent.prototype.getPackages = function () {
        var _this = this;
        this.packagesService.getPackages().subscribe(function (data) {
            if (data != undefined) {
                console.log(data);
                _this.servicePackages = data;
                for (var x = 0; x < data.length; x++) {
                    _this.packages.push(data[x].name);
                }
            }
            console.log(_this.packages);
        }, function (err) {
            console.log(err);
        });
    };
    CreateServiceComponent.prototype.createService = function () {
        var _this = this;
        this.loading = true;
        var arrSelectedAddOnsId = [], arrSelectedPackagesId = [], param = [];
        this.selectedAddOns.map(function (addOnsItem) {
            _this.serviceAddOns.forEach(function (item, index) {
                if (item.description == addOnsItem) {
                    arrSelectedAddOnsId.push(_this.serviceAddOns[index].id);
                }
            });
        });
        this.selectedPackages.map(function (packagesItem) {
            _this.servicePackages.forEach(function (item, index) {
                if (item.name == packagesItem) {
                    arrSelectedPackagesId.push(_this.servicePackages[index].id);
                }
            });
        });
        param.push({
            "status": "ACTIVE",
            "serviceType": this.serviceType.toLocaleUpperCase(),
            "name": this.name.trim(),
            "description": this.description.trim(),
            "featured": this.isFeatured,
            "serviceAddOns": arrSelectedAddOnsId,
            "servicePackages": arrSelectedPackagesId
        });
        this.saveService(param[0]);
    };
    CreateServiceComponent.prototype.saveService = function (serviceDetails) {
        var _this = this;
        this.servicesService.createService(serviceDetails).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                /**
                if(this.selectedIconFile == null && this.selectedBannerFile == null){
                  this.saveServiceStatus = true;
                  this.processCompleted();
                } else {
                  if(this.selectedIconFile != null){
                    this.uploadIcon(data.id);
                  }
                  
                  if(this.selectedBannerFile != null){
                    this.uploadBanner(data.id);
                  }
                }
                */
                _this.loading = false;
                _this.successMessage('Service successfully added.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('services');
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
    CreateServiceComponent.prototype.processCompleted = function () {
        var _this = this;
        var x = false;
        if ((this.selectedIconFile != null && this.uploadIconStatus) && (this.selectedBannerFile != null && this.uploadBannerStatus)) {
            x = true;
            console.log('banner and icon uploaded');
        }
        else if (this.selectedIconFile != null && this.selectedBannerFile == null && this.uploadIconStatus) {
            x = true;
            console.log('icon uploaded');
        }
        else if (this.selectedIconFile == null && this.selectedBannerFile != null && this.uploadBannerStatus) {
            x = true;
            console.log('banner uploaded.');
        }
        else if (this.selectedIconFile == null && this.selectedBannerFile == null && this.saveServiceStatus) {
            x = true;
            console.log('no file uploaded.');
        }
        if (x) {
            this.loading = false;
            this.successMessage('Service successfully added.');
            setTimeout(function () {
                _this.closeActiveAlert();
                _this.router.navigateByUrl('services');
            }, 3000);
        }
    };
    CreateServiceComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    CreateServiceComponent.prototype.successMessage = function (msg) {
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
    CreateServiceComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    CreateServiceComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    CreateServiceComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return CreateServiceComponent;
}());
CreateServiceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-service',
        template: __webpack_require__("../../../../../src/app/layout/services/components/create-service/create-service.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/services/components/create-service/create-service.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_services_services_service__["a" /* ServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_services_services_service__["a" /* ServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__addons_services_addons_service__["a" /* AddonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__addons_services_addons_service__["a" /* AddonsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__packages_services_packages_service__["a" /* PackagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__packages_services_packages_service__["a" /* PackagesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__layout_service__["a" /* LayoutService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _f || Object])
], CreateServiceComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=create-service.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/services/components/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.row-action {\n    margin: 0 3px;\n    cursor: pointer;\n}\n\n.row-search {\n    color: #FF8D33;\n}\n\n.row-edit {\n    color: #33A2FF;\n}\n\n.row-delete {\n    color: #ff0000;\n}\n\n.pagination-box {\n    margin-top: 1% !important;\n}\n\n.pagination-page .input-group .input-group-addon {\n    display: inline;\n}\n\n.index-column-header, .index-column {\n    text-align: center;\n}\n\n.column-header {\n    text-align: center;\n    font-weight: 700;\n}\n\n.data-column {\n    word-wrap: break-word;\n}\n\n.column-header.column-action {\n    width: 10%;\n}\n\n.data-column.column-action {\n    text-align: center;\n}\n\n/* \n.column-header.column-price {\n    width: 20%;\n}\n\n.data-column.column-price {\n    text-align: right;\n} \n*/\n\n.column-header.column-name {\n    width: 35%;\n}\n\n.column-header.column-serviceType {\n    width: 35%;\n}\n\n.column-header.column-featured {\n    width: 20%;\n}\n\n.data-column.column-featured {\n    text-align: center;\n}\n\n.multiline-paragraph {\n    white-space: pre-line; \n}\n\n.photoLoading{\n    color: white;\n    padding-top: 50px;\n  }\n\n.black-overlay {\n    position: relative !important;\n}\n\n.black-overlay > p {\n    top: 73% !important;\n    font-weight: 500 !important;\n}\n\n\n.preview-icons-holder {\n    /* max-height:100px;\n    max-width:100px;\n    width:100px;\n    height:100px; */\n    max-height: 120px;\n    max-width: 120px;\n    width: 120px;\n    height: 120px;\n    margin-bottom:25px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    cursor: pointer;\n}\n\n.preview-banners-holder {\n    /* max-height:150px;\n    max-width:300px;\n    width:300px;\n    height:150px; */\n    max-height: 235px;\n    max-width: 470px;\n    width: 470px;\n    height: 235px;\n    margin-bottom:25px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    cursor: pointer;\n}\n \n.preview-img-holder {\n    max-height:235px;\n    max-width:235px;\n    width:235px;\n    height:235px;\n    margin-bottom:25px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.photolist-container {\n    padding: 20px\n}\n\ntextarea {\n    resize: none;\n}\n\n.ui-select-container.open .dropdown-menu {\n    display: block !important;\n}\n\n.ui-select-container.ui-select-multiple {\n    padding: 0.45rem 0.75rem !important;\n}\n\n/* .services-tabs {\n    height: 350px;\n    overflow-y: auto;\n    overflow-x: hidden;\n} */\n\n.ui-select-choices-row a {\npadding: 8px !important;\n}\n\n.ui-select-multiple {\n    min-height: 90px !important;\n}\n.ui-select-match .btn{\n    padding: 0.3rem 0.3rem;\n    margin: 0;\n    color: #292b2c !important;\n    background-color: #fff !important;\n    /* border: 1px solid rgba(0, 0, 0, 0.15); */\n    font-size: 12px;\n}\n\n.ui-select-choices-row.active > a{\n    color: #464a4c !important;\n    text-decoration: none;\n    outline: 0;\n    background-color:rgba(0, 0, 0, 0.15) !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/services/components/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n   <div [@routerTransition]>\n<app-page-header [heading]=\"'Active Bookings'\" [icon]=\"'fa-fw fa-calendar'\"></app-page-header>\n\n<div class=\"card\">\n    \n    <div class=\"card-header\">\n      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> Service\n    </div>\n\n    <div class=\"clear-filler\"></div>\n      <div class=\"col-lg-12\">\n          <div class=\"col-lg-3\">\n            <!-- <div class=\"pull-left\">\n              <div class=\"input-group\">\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-info\">\n                        <i class=\"fa fa-search\"></i>\n                    </button>\n                </span>  \n                <input #gb type=\"text\" pInputText class=\"form-control\" placeholder=\"Search\">\n              </div>\n              </div> -->\n          </div>\n      \n        <div class=\"col-lg-3 col-lg-offset-6\">\n          <div class=\"pull-right\">\n            <button type=\"button\" routerLink=\"create-service\" class=\"btn btn-info pull-right\">Create Service</button>\n          </div>\n        </div>\n\n      </div>\n        \n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-12 table-responsive\">\n            <div class=\"clear-filler\"></div>\n            <div class=\"clear-filler\"></div>\n\n            <data-table id=\"services-grid\"\n                headerTitle=\"\"\n                [items]=\"services\"\n                [itemCount]=\"servicesCount\"\n                (reload)=\"reloadServices($event)\"\n                [limit]=\"10\"\n                [sortBy]=\"'name'\"\n                [sortAsc]=\"true\"\n                [selectColumn]=\"false\"\n                [multiSelect]=\"false\"\n                [substituteRows]=\"false\"\n                [expandableRows]=\"true\"\n                [translations]=\"dtTranslations\"\n                [indexColumnHeader]=\"'#'\"\n                [selectOnRowClick]=\"true\"\n                (rowClick)=\"expandRow($event)\"\n                >\n                <ng-template #dataTableExpand let-item=\"item\">\n                    <div class=\"clear-filler\"></div>\n                    <div class=\"col-lg-12\">\n                      <tabset>\n                        <tab heading=\"Details\" class=\"services-tabs\">\n                            <div class=\"row expanded-description\">  \n                                <div class=\"col-lg-12\">\n                                  <div class=\"clear-filler\"></div>\n                                  <div class=\"clear-filler\"></div>\n                                  </div>\n\n                                  <div class=\"col-lg-12\">\n                                      <div class=\"row\">\n                                        <div class=\"col-lg-5\">\n                                          <label>Service Name</label>\n                                        </div>\n                                        <div class=\"col-lg-7\">\n                                          <p>\n                                              {{ item.name }}\n                                              <span [hidden]=\"item.name != ''\">N/A</span>\n                                          </p>\n                                        </div>\n                                      </div>\n                                  \n                                      <div class=\"row\">\n                                        <div class=\"col-lg-5\">\n                                          <label>Service Type</label>\n                                        </div>\n                                        <div class=\"col-lg-7\">\n                                          <p>\n                                              {{ item.serviceType }}\n                                              <span [hidden]=\"item.serviceType != ''\">N/A</span>\n                                          </p>\n                                        </div>\n                                      </div>\n\n                                      <!-- \n                                      <div class=\"row\">\n                                        <div class=\"col-lg-5\">\n                                          <label>Price</label>\n                                        </div>\n                                        <div class=\"col-lg-7\">\n                                          <p>\n                                              {{ item.price | currency : 'PHP' : true }}\n                                              <span [hidden]=\"item.price != '' && item.price != null\">N/A</span>\n                                          </p>\n                                        </div>\n                                      </div>\n                                      -->\n                                      <div class=\"row\">\n                                        <div class=\"col-lg-5\">\n                                          <label>Description</label>\n                                        </div>\n                                        <div class=\"col-lg-7\">\n                                          <p class=\"multiline-paragraph\">{{ item.description }}<span [hidden]=\"item.description != '' && item.description != null\">N/A</span></p>\n                                        </div>\n                                      </div>\n\n                                      <div class=\"row\">\n                                          <div class=\"col-lg-5\">\n                                            <label>Featured Service</label>\n                                          </div>\n                                          <div class=\"col-lg-7\">\n                                            <p *ngIf=\"item.featured\">Yes</p>\n                                            <p *ngIf=\"!item.featured\">No</p>\n                                          </div>\n                                      </div>\n\n                                      <div class=\"row\" *ngIf=\"item.servicePackages != null\">\n                                          <div class=\"col-lg-5\">\n                                            <label>Packages</label>\n                                          </div>\n                                          <div class=\"col-lg-7\">\n                                              <ul>\n                                                <li *ngFor=\"let packages of item.servicePackages\">\n                                                  <b>{{packages.name}}</b>\n                                                </li>\n                                              </ul>\n                                            </div>\n                                      </div>\n\n                                      <div class=\"row\" *ngIf=\"item.serviceAddOns != null\">\n                                          <div class=\"col-lg-5\">\n                                            <label>AddOns</label>\n                                          </div>\n                                          <div class=\"col-lg-7\">\n                                              <ul>\n                                                <li *ngFor=\"let addons of item.serviceAddOns\">\n                                                  <b>{{addons.description}}</b>\n                                                </li>\n                                              </ul>\n                                            </div>\n                                      </div>\n                                          \n                                      <div class=\"row\">\n                                          <div class=\"col-lg-5\">\n                                            <label>Date Modified</label>\n                                          </div>\n                                          <div class=\"col-lg-7\">\n                                              <p *ngIf=\"item.updatedTime != null\">{{ item.updatedTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n                                              <p *ngIf=\"item.updatedTime == null\">{{ item.createdTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n                                          </div>\n                                      </div>\n\n                                  </div>\n\n                                  <div class=\"col-lg-12\">\n                                  <div class=\"clear-filler\"></div>\n                                </div>\n                              </div>\n                        </tab>\n\n                        <!--\n                        <tab heading=\"Packages\" class=\"services-tabs\" (select)=\"readService(item.id, 'packages')\">\n                          <div class=\"row form-group\">\n                            <div class=\"clear-filler\"></div>\n                            <div class=\"clear-filler\"></div>\n                            \n                            <div class=\"col-lg-12 form-group\">\n                              <div class=\"col-lg-12\">\n                                <ng-select\n                                  [multiple]=\"true\"\n                                  [items]=\"packages\"\n                                  (data)=\"refreshPackagesValue($event)\"\n                                  [(ngModel)]=\"defaultPackages\"\n                                  name=\"defaultPackages\"\n                                  placeholder=\"Choose Packages\"\n                                  notFoundText=\"'No result found.''\">\n                                </ng-select>\n                              </div>\n                            \n                              <div class=\"clear-filler\"></div>\n                              <div class=\"clear-filler\"></div>\n\n                              \n                              <div class=\"col-lg-12 text-center form-group\">\n                                <button type=\"button\" (click)=\"savePackages(item.id)\" class=\"btn btn-success\"> Save Packages </button>\n                              </div>\n                            </div>\n\n                          </div>\n                        </tab>\n\n                        <tab heading=\"Add-Ons\" class=\"services-tabs\" (select)=\"readService(item.id, 'addons')\">\n                            <div class=\"row form-group\">\n                              <div class=\"clear-filler\"></div>\n                              <div class=\"clear-filler\"></div>\n                              <div class=\"col-lg-12 form-group\">\n                                <div class=\"col-lg-12\">\n                                  <ng-select\n                                    [multiple]=\"true\"\n                                    [items]=\"addOns\"\n                                    (data)=\"refreshAddOnsValue($event)\"\n                                    [(ngModel)]=\"defaultAddOns\"\n                                    name=\"defaultAddOns\"\n                                    placeholder=\"Choose Add-Ons\"\n                                    notFoundText=\"'No result found.''\">\n                                  </ng-select>\n                                </div>\n                              \n                                <div class=\"clear-filler\"></div>\n                                <div class=\"clear-filler\"></div>\n\n                                <div class=\"col-lg-12 text-center form-group\">\n                                  <button type=\"button\" (click)=\"saveAddons(item.id)\" class=\"btn btn-success\"> Save Addons </button>\n                                </div>\n\n                              </div>\n\n                          </div>\n                        </tab>   \n                        -->\n\n                        \n\n                        <tab heading=\"Banner\" class=\"services-tabs\" (select)=\"readService(item.id, 'banners')\">\n                            <div class=\"row form-group\">\n                                <div class=\"clear-filler\"></div>\n                                <div class=\"clear-filler\"></div>\n                                \n                                <span [hidden]=\"item.bannerUrl != '' && item.bannerUrl != null\">\n                                  <div class=\"col-lg-12\">\n                                    <img \n                                      src=\"../../../../../assets/images/add-banner.png\" \n                                      class=\"img img-responsive img-thumbnail preview-banners-holder\" \n                                      (click)=\"bannerUploadInput.click()\" />\n            \n                                    <input \n                                      type=\"file\" \n                                      style=\"display:none\"\n                                      multiple=\"true\"\n                                      (change)=\"onBannerSelected($event, item.id)\"\n                                      #bannerUploadInput>\n                                  </div>\n                                </span>\n            \n                                <span [hidden]=\"displayUploadBanner && item.id == selectedServiceId\" *ngIf=\"item.bannerUrl != '' && item.bannerUrl != null\">\n                                  <!-- <div class=\"col-lg-12\">\n                                    <img src=\"{{item.bannerUrl}}\" class=\"img img-responsive img-thumbnail preview-banners-holder\"/>\n                                  </div> -->\n\n                                  <span *ngIf=\"selectedServiceBanner != undefined && selectedServiceBanner != []\">\n                                    <span *ngFor=\"let serviceBanner of selectedServiceBanner\">\n                                        <span *ngIf=\"serviceBanner.selectedServiceId != undefined && serviceBanner.selectedServiceId == item.id\">\n                                          \n                                            <div class=\"col-lg-12\">\n                                              <img \n                                                src=\"{{serviceBanner.data}}\" \n                                                class=\"img img-responsive img-thumbnail preview-banners-holder\"\n                                                (click)=\"photoPreview(serviceBanner.data); open(content)\"\n                                              />\n                                            </div>\n\n                                            <div class=\"col-lg-12\">\n                                              <button \n                                                type=\"button\" \n                                                class=\"btn btn-info btn-sm\"\n                                                (click)=\"bannerUploadInput.click()\">\n                                                Change Banner\n                                              </button>\n                                            </div>\n                                        </span>\n                                    </span>\n                                  </span>\n                                </span>\n\n                                <div class=\"clear-filler\"></div>\n                                <div class=\"col-lg-12 text-center\" [hidden]=\"item.id != selectedServiceId\">\n                                  <ngb-alert [type]=\"panelAlert.type\" (close)=\"closePanelAlert(panelAlert)\" *ngFor=\"let panelAlert of panelAlerts\">{{ panelAlert.message }}</ngb-alert>\n                                </div>\n                                \n                            </div>\n                        </tab>\n\n                        <tab heading=\"Icon\" class=\"services-tabs\" (select)=\"readService(item.id, 'icons')\">\n                            <div class=\"row form-group\">\n                                <div class=\"clear-filler\"></div>\n                                <div class=\"clear-filler\"></div>\n\n                                <span [hidden]=\"item.iconUrl != '' && item.iconUrl != null\">\n                                    <div class=\"col-lg-12\">\n                                      <img \n                                        src=\"../../../../../assets/images/add-icon.png\" \n                                        class=\"img img-responsive img-thumbnail preview-icons-holder\" \n                                        (click)=\"iconUploadInput.click()\" />\n              \n                                      <input \n                                        type=\"file\" \n                                        style=\"display:none\"\n                                        multiple=\"true\"\n                                        (change)=\"onIconSelected($event, item.id)\"\n                                        #iconUploadInput>\n                                    </div>\n                                  </span>\n\n                                  <span [hidden]=\"displayUploadIcon && item.id == selectedServiceId\" *ngIf=\"item.iconUrl != '' && item.iconUrl != null\">\n                                    <!-- <div class=\"col-lg-12\">\n                                      <img src=\"{{item.iconUrl}}\" class=\"img img-responsive img-thumbnail preview-icons-holder\"/>\n                                    </div> -->\n\n                                    <span *ngIf=\"selectedServiceIcon != undefined && selectedServiceIcon != []\">\n                                      <span *ngFor=\"let serviceIcon of selectedServiceIcon\">\n                                          <span *ngIf=\"serviceIcon.selectedServiceId != undefined && serviceIcon.selectedServiceId == item.id\">\n                                            \n                                              <div class=\"col-lg-12\">\n                                                <img \n                                                  src=\"{{serviceIcon.data}}\" \n                                                  class=\"img img-responsive img-thumbnail preview-icons-holder\"\n                                                  (click)=\"photoPreview(serviceIcon.data); open(content)\"\n                                                />\n                                              </div>\n  \n                                              <div class=\"col-lg-12\">\n                                                  <button \n                                                    type=\"button\" \n                                                    class=\"btn btn-info btn-sm\"\n                                                    (click)=\"iconUploadInput.click()\">\n                                                    Change Icon\n                                                  </button>\n                                                </div>\n                                          </span>\n                                      </span>\n                                    </span>\n\n                                  </span>\n\n                                  <div class=\"clear-filler\"></div>\n                                  <div class=\"col-lg-12 text-center\" [hidden]=\"item.id != selectedServiceId\">\n                                    <ngb-alert [type]=\"panelAlert.type\" (close)=\"closePanelAlert(panelAlert)\" *ngFor=\"let panelAlert of panelAlerts\">{{ panelAlert.message }}</ngb-alert>\n                                  </div>\n                            </div>\n                        </tab>\n\n                        <tab heading=\"Photos\" class=\"services-tabs\" (select)=\"readService(item.id, 'servicePhoto')\">\n                            <div class=\"col-lg-12 form-group\">\n                                <div class=\"clear-filler\"></div>\n                                <div class=\"clear-filler\"></div>\n                                \n                                  <div class=\"col-lg-3\">\n                                    <img \n                                      src=\"../../../../../assets/images/add-photos.png\"\n                                      class=\"img img-responsive img-thumbnail preview-img-holder\" \n                                      (click)=\"photoUploadInput.click()\" />\n            \n                                    <input \n                                      type=\"file\" \n                                      style=\"display:none\"\n                                      multiple=\"true\"\n                                      (change)=\"onPhotoSelected($event, item.id)\"\n                                      #photoUploadInput>\n                                  </div>\n                                \n                                <!-- <span *ngFor=\"let imgUrl of item.imageUrls\">\n                                  <div class=\"col-lg-3\">\n                                    <img \n                                      src=\"{{imgUrl}}\" \n                                      class=\"img img-responsive img-thumbnail preview-img-holder\" \n                                      />\n                                  </div>\n                                </span> -->\n\n                                <span *ngIf=\"selectedServicePhotos != undefined && selectedServicePhotos != []\">\n                                  <span *ngFor=\"let servicePhotos of selectedServicePhotos\">\n                                      <span *ngIf=\"servicePhotos.selectedServiceId != undefined && servicePhotos.selectedServiceId == item.id\">\n                                        <span *ngFor=\"let servicePhotoUrl of servicePhotos.data; index as i\">\n                                          <div class=\"col-lg-3\">\n                                            <img \n                                              src=\"{{servicePhotoUrl}}\" \n                                              class=\"img img-responsive img-thumbnail preview-img-holder\" \n                                              (click)=\"getPhotoDetailsRow(i, servicePhotos.selectedServiceId); open(content)\"\n                                            />\n                                          </div>\n                                        </span>\n                                      </span>\n                                  </span>\n                                </span>\n\n                                <span [hidden]=\"selectedServiceId != item.id\">\n                                  \n                                <div class=\"col-lg-3\" [hidden]=\"!loadingSpinner\">\n                                  <div class=\"img-thumbnail preview-img-holder\">\n                                    <ngx-spinner\n                                      bdOpacity = 0.9\n                                      bdColor = \"#333333\"\n                                      size = \"medium\"\n                                      color = \"#fff\"\n                                      type = \"ball-clip-rotate\"\n                                      fullScreen = \"false\"\n                                      loadingText=\"Uploading...\"\n                                    ></ngx-spinner>\n                                  </div>\n                                </div>\n                              </span>\n                                \n                            </div>\n                        </tab>\n                      </tabset>\n                    </div>\n\n                </ng-template>\n                \n                <data-table-column\n                    [property]=\"'name'\"\n                    [header]=\"'Service Name'\"\n                    [sortable]=\"true\">\n                </data-table-column>\n\n                <data-table-column\n                    [property]=\"'serviceType'\"\n                    [header]=\"'Service Type'\"\n                    [sortable]=\"true\">\n                    <ng-template #dataTableCell let-item=\"item\">\n                      <span>{{item.serviceType}}</span>\n                  </ng-template> \n                </data-table-column>\n\n                <data-table-column\n                    [property]=\"'featured'\"\n                    [header]=\"'Featured Service'\"\n                    [sortable]=\"true\">\n                    <ng-template #dataTableCell let-item=\"item\">\n                      <span [hidden]=\"item.featured\">No</span>\n                      <span [hidden]=\"!item.featured\">Yes</span>\n                    </ng-template>\n                </data-table-column>\n\n                <data-table-column\n                [property]=\"'action'\"\n                [header]=\"'Action'\"\n                style=\"width:10%;\">\n                  <ng-template #dataTableCell let-item=\"item\">\n                    <span\n                      id=\"spUpdate\" \n                      class=\"fa fa-pencil row-action row-edit\"\n                      title=\"Update\"\n                      [routerLink]=\"['update-service']\"\n                      [queryParams]=\"{id:item.id}\">\n                    </span>\n                    <span \n                      id=\"spDelete\"\n                      class=\"fa fa-times row-action row-delete\"\n                      title=\"Archive\"\n                      (click)=\"deleteServiceRow(item.id)\">\n                    </span>\n                  </ng-template>\n                </data-table-column>\n            </data-table>\n\n            <div class=\"clear-filler\"></div> \n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-12 text-center\">\n            <ngb-alert \n              [type]=\"alert.type\" \n              (close)=\"closeAlert(alert)\" \n              *ngFor=\"let alert of alerts\">\n              {{ alert.message }}\n            </ngb-alert>\n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n\n        <!-- Start - Modal -->\n      <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-body\">\n          <div class=\"col-lg-12\">\n            <button type=\"button\" #btnDismiss class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"col-lg-12 text-center\">\n              <div class=\"clear-filler\"></div>\n              <img \n                src=\"{{openedPhotoUrl}}\" \n                class=\"img img-responsive img-thumbnail\" />\n              <div class=\"clear-filler\"></div>\n          </div>\n        </div>\n        \n        <div class=\"modal-footer\">\n            <div class=\"col-lg-12 text-center\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <a class=\"pull-left\" [href]=\"openedPhotoUrl\" target=\"_blank\">Download Original Photo</a>\n                </div>\n                <div class=\"col-lg-6\">\n                <button \n                  type=\"button\" \n                  class=\"btn btn-danger pull-right\" \n                  style=\"margin: 3px 10px; width:100px\"\n                  (click)=\"deleteServicePhoto(openedPhotoServiceId, openedPhotoIndex)\">\n                  Delete\n                </button>\n                </div>\n              </div>  \n            </div>\n        </div>\n       \n\n\n      </ng-template>\n      <!-- End - Modal -->\n  \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/services/components/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services_services_service__ = __webpack_require__("../../../../../src/app/layout/services/services/services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addons_services_addons_service__ = __webpack_require__("../../../../../src/app/layout/addons/services/addons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__packages_services_packages_service__ = __webpack_require__("../../../../../src/app/layout/packages/services/packages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_data_table__ = __webpack_require__("../../../../angular-2-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular_2_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { BookingDto } from '../../../active-bookings/model/active-bookings.model';



var ServicesComponent = (function () {
    function ServicesComponent(servicesService, layoutService, addonsService, packagesService, modalService, renderer, elem, spinner) {
        this.servicesService = servicesService;
        this.layoutService = layoutService;
        this.addonsService = addonsService;
        this.packagesService = packagesService;
        this.modalService = modalService;
        this.renderer = renderer;
        this.elem = elem;
        this.spinner = spinner;
        this.errorMessage = "Unexpected error encountered.";
        this.loading = false;
        this.loadingSpinner = false;
        this.services = [];
        this.servicesCount = 0;
        this.selectedServicePhotos = [];
        this.selectedServiceBanner = [];
        this.selectedServiceIcon = [];
        this.displayUploadBanner = false;
        this.displayUploadIcon = false;
        this.addOns = [];
        this.defaultAddOns = [];
        this.selectedAddOns = [];
        this.serviceAddOns = [];
        this.packages = [];
        this.defaultPackages = [];
        this.selectedPackages = [];
        this.servicePackages = [];
        this.alerts = [];
        this.panelAlerts = [];
        this.selectedBannerFile = null;
        this.selectedIconFile = null;
        this.selectedPhotoFile = null;
        this.selectedPhotoFilesCnt = 0;
        this.selectedPhotosCnt = 0;
        this.dtTranslations = {
            indexColumn: '#',
            expandColumn: 'Expand column',
            selectColumn: 'Select column',
            paginationLimit: 'Limit',
            paginationRange: 'Results'
        };
    }
    ServicesComponent.prototype.ngOnInit = function () {
        this.getServices();
    };
    ServicesComponent.prototype.expandRow = function (evt) {
        if (evt.event.target.id != 'spDelete' && evt.event.target.id != 'spUpdate') {
            evt.row.expanded = !evt.row.expanded;
        }
    };
    ServicesComponent.prototype.getServices = function () {
        var _this = this;
        this.closeActiveAlert();
        this.closeActivePanelAlert();
        this.loading = true;
        this.spinner.hide();
        this.loadingSpinner = false;
        this.servicesService.getServices().subscribe(function (data) {
            console.log(data);
            _this.services = data;
            _this.dtServicesResource = new __WEBPACK_IMPORTED_MODULE_7_angular_2_data_table__["DataTableResource"](_this.services);
            _this.dtServicesResource.count().then(function (count) { return _this.servicesCount = count; });
            _this.servicesTable.reloadItems();
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesComponent.prototype.reloadServices = function (params) {
        var _this = this;
        if (this.dtServicesResource != undefined) {
            this.dtServicesResource.query(params).then(function (services) { return _this.services = services; });
        }
    };
    ServicesComponent.prototype.readService = function (selectedId, src) {
        var _this = this;
        this.loading = true;
        this.loadingSpinner = false;
        this.spinner.hide();
        //this.selectedServicePhotos = [];
        //console.log('readService()');
        //this.loading = true;
        //console.log(src);
        this.servicesService.readService(selectedId).subscribe(function (data) {
            //console.log('get services', banners);
            if (src == 'packages') {
                _this.defaultPackages = [];
                _this.packages = [];
                _this.servicePackages = [];
                if (!_this.isEmpty(data.servicePackages)) {
                    for (var y = 0; y < data.servicePackages.length; y++) {
                        _this.defaultPackages.push(data.servicePackages[y].name);
                    }
                }
                //console.log('selected packages', this.defaultPackages);
            }
            if (src == 'addons') {
                _this.defaultAddOns = [];
                if (!_this.isEmpty(data.serviceAddOns)) {
                    for (var x = 0; x < data.serviceAddOns.length; x++) {
                        _this.defaultAddOns.push(data.serviceAddOns[x].description);
                    }
                }
            }
            if (src == 'servicePhoto') {
                _this.selectedServicePhotos.forEach(function (item, index) {
                    if (item.selectedServiceId == selectedId) {
                        _this.selectedServicePhotos[index].data = [];
                        //checkExists = true;
                        return false;
                    }
                });
                var imgData = [];
                if (data.imageUrls != null) {
                    imgData = data.imageUrls;
                }
                _this.selectedServicePhotos.push({
                    "selectedServiceId": selectedId,
                    "data": imgData
                });
            }
            if (src == 'banners') {
                _this.selectedServiceBanner.forEach(function (item, index) {
                    if (item.selectedServiceId == selectedId) {
                        _this.selectedServiceBanner[index].data = [];
                        //checkExists = true;
                        return false;
                    }
                });
                var imgData = [];
                if (data.bannerUrl != null) {
                    imgData = data.bannerUrl;
                }
                _this.selectedServiceBanner.push({
                    "selectedServiceId": selectedId,
                    "data": imgData
                });
            }
            if (src == 'icons') {
                _this.selectedServiceIcon.forEach(function (item, index) {
                    if (item.selectedServiceId == selectedId) {
                        _this.selectedServiceIcon[index].data = [];
                        //checkExists = true;
                        return false;
                    }
                });
                var imgData = [];
                if (data.iconUrl != null) {
                    imgData = data.iconUrl;
                }
                _this.selectedServiceIcon.push({
                    "selectedServiceId": selectedId,
                    "data": imgData
                });
                console.log('selectedServiceBanner: ', _this.selectedServiceIcon);
            }
            //this.getPackages();
            //this.getAddons();
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesComponent.prototype.getAddons = function () {
        var _this = this;
        this.addOns = [];
        this.addonsService.getAddons().subscribe(function (data) {
            if (data != undefined) {
                for (var x = 0; x < data.length; x++) {
                    _this.addOns.push(data[x].description);
                }
                console.log(_this.addOns);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ServicesComponent.prototype.getPackages = function () {
        var _this = this;
        this.packagesService.getPackages().subscribe(function (data) {
            if (data != undefined) {
                _this.servicePackages = data;
                for (var x = 0; x < data.length; x++) {
                    _this.packages.push(data[x].name);
                }
                console.log(_this.packages);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ServicesComponent.prototype.refreshAddOnsValue = function (value) {
        if (value != null) {
            this.selectedAddOns = value.map(function (item) { return item.text; });
        }
    };
    ServicesComponent.prototype.refreshPackagesValue = function (value) {
        this.selectedPackages = value.map(function (item) { return item.text; });
    };
    ServicesComponent.prototype.open = function (content) {
        var _this = this;
        this.modalReference = this.modalService.open(content, { 'size': 'lg', backdrop: 'static', keyboard: false });
        this.modalReference.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ServicesComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // private getServiceDetailsRow(id) {
    //   this.services.forEach((item, index) => {
    //       if(item.id == id){
    //         this.selectedServiceDetails = this.services[index];
    //         console.log(this.services[index]);
    //         return false;
    //       }
    //   });
    // }
    ServicesComponent.prototype.deleteServiceRow = function (id) {
        if (confirm("Are you sure you want to archive this Service?")) {
            this.loading = true;
            this.deleteService(id);
        }
    };
    ServicesComponent.prototype.deleteService = function (id) {
        // var rowsResult = ths.servicesTable.rows._results;
        // rowsResult.forEach((item, index) => {
        //   item.expanded = false;
        //   console.log(item.expanded);
        // });
        var _this = this;
        this.servicesService.deleteService(id).subscribe(function (data) {
            //console.log(data);
            if (data.status == 200) {
                _this.loading = false;
                _this.successMessage('Service successfully archived.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.getServices();
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ServicesComponent.prototype.savePackages = function (selectedId) {
        var _this = this;
        this.loading = true;
        var arrSelectedPackagesId = [];
        this.selectedPackages.map(function (packagesItem) {
            _this.servicePackages.forEach(function (item, index) {
                if (item.name == packagesItem) {
                    arrSelectedPackagesId.push(_this.servicePackages[index].id);
                }
            });
        });
        this.servicesService.updateService(selectedId, { "servicePackages": arrSelectedPackagesId }).subscribe(function (data) {
            console.log(data);
            if (!_this.isEmpty(data)) {
                _this.loading = false;
                _this.successMessage('Service successfully updated.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.getServices();
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ServicesComponent.prototype.saveAddons = function (selectedId) {
        var _this = this;
        console.log(selectedId);
        console.log(this.defaultAddOns);
        this.loading = true;
        var arrSelectedAddOnsId = [], param = [];
        this.addOns.map(function (addOnsItem) {
            _this.defaultAddOns.forEach(function (item, index) {
                if (item.description == addOnsItem) {
                    arrSelectedAddOnsId.push(_this.addOns[index].serviceAddOnsId);
                }
            });
        });
        this.servicesService.updateService(selectedId, { "serviceAddOns": arrSelectedAddOnsId }).subscribe(function (data) {
            console.log(data);
            if (!_this.isEmpty(data)) {
                console.log('updated');
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    // showUploadBannerUrl(){
    //   this.displayUploadBanner = true;
    // }
    // showUploadIconUrl(){
    //   this.displayUploadIcon = true;
    // }
    ServicesComponent.prototype.onBannerSelected = function (event, serviceId) {
        var _this = this;
        this.loading = true;
        this.selectedBannerFile = event.target.files[0];
        //this.onUpload(this.selectedBannerFile, serviceId, "banner");
        this.selectedServiceId = serviceId;
        this.servicesService.createPhoto(this.selectedBannerFile, 'banner').subscribe(function (data) {
            if (data != undefined) {
                if (data.status == 200) {
                    var serviceIndex_1 = 0, param = [];
                    param.push({
                        "bannerUrl": data.body.url
                    });
                    _this.saveService(param[0], serviceId, 'banner');
                    _this.selectedServiceBanner.forEach(function (item, index) {
                        if (item.selectedServiceId == serviceId) {
                            _this.selectedServiceBanner[index].data = [];
                            _this.selectedServiceBanner[index].data.push(data.body.url);
                            serviceIndex_1 = index;
                            return false;
                        }
                    });
                }
                else {
                    console.log(data);
                }
            }
        });
    };
    ServicesComponent.prototype.onIconSelected = function (event, serviceId) {
        var _this = this;
        this.loading = true;
        this.selectedIconFile = event.target.files[0];
        this.selectedServiceId = serviceId;
        this.servicesService.createPhoto(this.selectedIconFile, 'icon').subscribe(function (data) {
            if (data != undefined) {
                if (data.status == 200) {
                    var serviceIndex_2 = 0, param = [];
                    param.push({
                        "iconUrl": data.body.url
                    });
                    _this.saveService(param[0], serviceId, 'icon');
                    _this.selectedServiceIcon.forEach(function (item, index) {
                        if (item.selectedServiceId == serviceId) {
                            _this.selectedServiceIcon[index].data = [];
                            _this.selectedServiceIcon[index].data.push(data.body.url);
                            serviceIndex_2 = index;
                            return false;
                        }
                    });
                }
                else {
                    console.log(data);
                }
            }
        });
    };
    ServicesComponent.prototype.onPhotoSelected = function (event, serviceId) {
        var _this = this;
        this.selectedServiceId = serviceId;
        //this.selectedPhotoFile = <File>event.target.files;
        //if (event.target.files.length > 10){
        //alert("You are only allowed to upload a maximum of 10 files");
        //return false;
        //} else {
        //this.loading = true;
        this.loadingSpinner = true;
        this.spinner.show();
        this.selectedPhotosCnt = 0;
        for (this.selectedPhotoFilesCnt = 0; this.selectedPhotoFilesCnt < event.target.files.length; this.selectedPhotoFilesCnt++) {
            this.selectedPhotoFile = event.target.files[this.selectedPhotoFilesCnt];
            this.servicesService.createPhoto(this.selectedPhotoFile, "servicePhoto").subscribe(function (data) {
                if (data != undefined) {
                    if (!_this.isEmpty(data)) {
                        if (data.status == 'uploading') {
                            _this.spinner.show();
                            _this.loadingSpinner = true;
                            console.log('Progress => ', data.progress);
                            //this.progressPercentage = data.progress;
                            //this.ngProgress.set(data.progress);
                        }
                        else if (data.status == 'completed') {
                            console.log(data);
                            //this.spinner.hide();
                            //this.loadingSpinner = false;
                        }
                        else {
                            if (data.status == 200) {
                                var serviceIndex_3 = 0;
                                _this.spinner.hide();
                                _this.loadingSpinner = false;
                                console.log('Returned data on upload: #' + _this.selectedPhotosCnt + ' ', data);
                                _this.selectedPhotosCnt++;
                                _this.selectedServicePhotos.forEach(function (item, index) {
                                    if (item.selectedServiceId == serviceId) {
                                        _this.selectedServicePhotos[index].data.push(data.body.url);
                                        serviceIndex_3 = index;
                                        return false;
                                    }
                                });
                                if ((_this.selectedPhotoFilesCnt == _this.selectedPhotosCnt) && _this.selectedPhotosCnt != 0) {
                                    _this.saveService({ "imageUrls": _this.selectedServicePhotos[serviceIndex_3].data }, serviceId, 'servicePhoto');
                                    //this.spinner.hide();
                                    //this.loadingSpinner = false;
                                }
                            }
                            else {
                                console.log(data);
                                //this.errMessage(this.errorMessage);
                            }
                        }
                    }
                }
            });
        }
    };
    ServicesComponent.prototype.getPhotoDetailsRow = function (dataIndex, serviceId) {
        var _this = this;
        this.selectedServicePhotos.forEach(function (item, index) {
            if (item.selectedServiceId == serviceId) {
                _this.openedPhotoUrl = _this.selectedServicePhotos[index].data[dataIndex];
                _this.openedPhotoServiceId = serviceId;
                _this.openedPhotoIndex = dataIndex;
                return false;
            }
        });
    };
    ServicesComponent.prototype.photoPreview = function (photoUrl) {
        this.openedPhotoUrl = photoUrl;
    };
    ServicesComponent.prototype.deleteServicePhoto = function (serviceId, photoIndex) {
        var _this = this;
        if (confirm("Are you sure you want to delete this Photo?")) {
            this.selectedServicePhotos.forEach(function (item, index) {
                if (item.selectedServiceId == serviceId) {
                    _this.selectedServicePhotos[index].data.splice(photoIndex, 1);
                    //this.loading = true;
                    _this.servicesService.updateService(serviceId, { "imageUrls": _this.selectedServicePhotos[index].data }).subscribe(function (data) {
                        if (!_this.isEmpty(data)) {
                            _this.modalReference.close();
                        }
                    }, function (err) {
                        console.log(err);
                    });
                    return false;
                }
            });
        }
    };
    ServicesComponent.prototype.saveService = function (serviceDetails, serviceId, src) {
        var _this = this;
        this.servicesService.updateService(serviceId, serviceDetails).subscribe(function (data) {
            console.log(data);
            if (!_this.isEmpty(data)) {
                _this.loading = false;
                if (src == "servicePhoto") {
                    _this.successPanelMessage('Photo successfully uploaded.');
                    _this.spinner.hide();
                    _this.loadingSpinner = false;
                }
                else if (src == "banner") {
                    _this.successPanelMessage('Banner successfully uploaded.');
                    setTimeout(function () {
                        _this.closeActivePanelAlert();
                        //this.readService(serviceId, src);
                        //this.getServices();
                    }, 3000);
                }
                else if (src == "icon") {
                    _this.successPanelMessage('Icon successfully uploaded.');
                    setTimeout(function () {
                        _this.closeActivePanelAlert();
                        //this.readService(serviceId, src);
                        //this.getServices();
                    }, 3000);
                }
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ServicesComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    ServicesComponent.prototype.errPanelMessage = function (msg) {
        this.closeActivePanelAlert();
        this.panelAlerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    ServicesComponent.prototype.successMessage = function (msg) {
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
    ServicesComponent.prototype.successPanelMessage = function (msg) {
        var _this = this;
        this.closeActivePanelAlert();
        setTimeout(function () {
            _this.panelAlerts.push({
                id: 1,
                type: 'success',
                message: msg
            });
        }, 500);
        return true;
    };
    ServicesComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    ServicesComponent.prototype.closePanelAlert = function (panelAlerts) {
        var index = this.panelAlerts.indexOf(alert);
        this.panelAlerts.splice(index, 1);
    };
    ServicesComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    ServicesComponent.prototype.closeActivePanelAlert = function () {
        this.panelAlerts.splice(0, 1);
    };
    ServicesComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return ServicesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_2_data_table__["DataTable"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_angular_2_data_table__["DataTable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular_2_data_table__["DataTable"]) === "function" && _a || Object)
], ServicesComponent.prototype, "servicesTable", void 0);
ServicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-services',
        template: __webpack_require__("../../../../../src/app/layout/services/components/services/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/services/components/services/services.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_services_services_service__["a" /* ServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_services_services_service__["a" /* ServicesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__layout_service__["a" /* LayoutService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__addons_services_addons_service__["a" /* AddonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__addons_services_addons_service__["a" /* AddonsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__packages_services_packages_service__["a" /* PackagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__packages_services_packages_service__["a" /* PackagesService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_spinner__["NgxSpinnerService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_spinner__["NgxSpinnerService"]) === "function" && _j || Object])
], ServicesComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/services/components/update-service/update-service.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}\n\ntextarea {\n    resize: none;\n}\n\n.ui-select-container.open .dropdown-menu {\n    display: block !important;\n}\n\n.ui-select-container.ui-select-multiple {\n    padding: 0.45rem 0.75rem !important;\n}\n\n.ui-select-choices-row a {\npadding: 8px !important;\n}\n\n.ui-select-multiple {\n    min-height: 90px !important;\n}\n.ui-select-match .btn{\n    padding: 0.3rem 0.3rem;\n    margin: 0;\n    color: #292b2c !important;\n    background-color: #fff !important;\n    /* border: 1px solid rgba(0, 0, 0, 0.15); */\n    font-size: 12px;\n}\n\n.ui-select-choices-row.active > a{\n    color: #464a4c !important;\n    text-decoration: none;\n    outline: 0;\n    background-color:rgba(0, 0, 0, 0.15) !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/services/components/update-service/update-service.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n    <app-page-header [heading]=\"'Update Service'\" [icon]=\"'fa-fw fa-pencil-square-o'\"></app-page-header>\n    \n    <!-- <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert> -->\n\n    <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Update Service\n      </div>\n  \n      <div class=\"clear-filler\"></div>\n      <div class=\"clear-filler\"></div>\n      \n      <form role=\"form\" (ngSubmit)=\"updateService()\" ngNativeValidate>\n          <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n          <div class=\"col-lg-12\">\n              <div class=\"col-lg-12 form-group\">\n                <h4>Service Details</h4>\n            </div>\n          </div>\n        \n\n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Name</label>\n              <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" readonly>\n            </div>\n          </div>\n        \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Service Type</label>\n              <input type=\"text\" class=\"form-control\" name=\"serviceType\" [(ngModel)]=\"serviceType\" readonly>\n            </div>\n          </div>\n\n          <!--\n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-8\">\n              <label>Icon </label>\n              <div class=\"input-group\" [hidden]=\"hdIconFileUpload\">\n                  <input \n                    type=\"file\" \n                    multiple=\"false\"\n                    class=\"form-control-file form-control\"\n                    (change)=\"onFileIconSelected($event)\"\n                    #fileUploadIcon>\n                </div>\n\n                <div class=\"col-lg-12\" [hidden]=\"!hdIconFileUpload\">\n                <div class=\"row\">\n                  <img \n                    src=\"{{iconUrl}}\"\n                    class=\"img img-responsive img-thumbnail preview-img-holder form-group\"/>\n                \n                  <div class=\"input-group\">\n                    <input \n                      type=\"button\" \n                      class=\"btn btn-info btn-sm\"\n                      value=\"Change Photo\"\n                      (click)=\"hdIconFileUpload = false\">\n                  </div>\n                  </div>\n                  \n              </div>\n            </div>\n          </div> \n  \n          <div class=\"col-lg-12 form-group\">\n              <div class=\"col-lg-8\">\n                <label>Banner </label>\n                <div class=\"input-group\" [hidden]=\"hdBannerFileUpload\">\n                    <input \n                      type=\"file\" \n                      multiple=\"false\"\n                      class=\"form-control-file form-control\"\n                      (change)=\"onFileBannerSelected($event)\"\n                      #fileUploadBanner>\n                  </div>\n  \n                  <div class=\"col-lg-12\" [hidden]=\"!hdBannerFileUpload\">\n                  <div class=\"row\">\n                    <img \n                      src=\"{{bannerUrl}}\"\n                      class=\"img img-responsive img-thumbnail preview-img-holder form-group\"/>\n                  \n                    <div class=\"input-group\">\n                      <input \n                        type=\"button\" \n                        class=\"btn btn-info btn-sm\"\n                        value=\"Change Photo\"\n                        (click)=\"hdBannerFileUpload = false\">\n                    </div>\n                    </div>\n                    \n                </div>\n              </div>\n            </div> \n          -->\n          \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Description </label>\n              <div class=\"input-group\">\n                <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"description\" rows=\"5\"></textarea>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"col-lg-12 form-group\" *ngIf=\"addOns.length > 0\">\n            <div class=\"col-lg-12\">\n              <label>Add-Ons</label>\n              <ng-select\n                [multiple]=\"true\"\n                [items]=\"addOns\"\n                (data)=\"refreshAddOnsValue($event)\"\n                [(ngModel)]=\"defaultAddOns\"\n                name=\"defaultAddOns\"\n                placeholder=\"Choose Add-Ons\"\n                notFoundText=\"'No result found.''\">\n              </ng-select>\n            </div>\n          </div>\n  \n          <div class=\"col-lg-12 form-group\" *ngIf=\"packages.length > 0\">\n            <div class=\"col-lg-12\">\n              <label>Packages</label>\n              <ng-select\n                [multiple]=\"true\"\n                [items]=\"packages\"\n                (data)=\"refreshPackagesValue($event)\"\n                [(ngModel)]=\"defaultPackages\"\n                name=\"defaultPackages\"\n                placeholder=\"Choose Packages\"\n                notFoundText=\"'No result found.''\">\n              </ng-select>\n            </div>\n          </div>\n          \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n                <label>Featured Service </label><br/>\n              <ui-switch name=\"isFeatured\" size=\"small\" [(ngModel)]=\"isFeatured\"></ui-switch>\n            </div>\n          </div>\n\n          <!-- <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>\n                <Input type=\"checkbox\" (change)=\"chkIsFeatured($event)\" [checked]=\"isFeatured\"> <strong>Featured Service</strong> </label>\n            </div>\n          </div> -->\n  \n          <div class=\"clear-filler\"></div>\n          <div class=\"clear-filler\"></div>\n          <div class=\"col-lg-12 text-center form-group\">\n            <div class=\"col-lg-2 col-lg-offset-4\">\n              <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n            </div>\n            <div class=\"col-lg-2\">\n              <button \n                type=\"button\" \n                routerLink=\"/services\" \n                class=\"btn btn-warning\"> \n                  Cancel \n              </button>\n            </div>\n          </div>\n  \n        </div>\n      </form>\n      <div class=\"clear-filler\"></div>\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n          <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        </div>\n      <div class=\"clear-filler\"></div>\n    \n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/services/components/update-service/update-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services_services_service__ = __webpack_require__("../../../../../src/app/layout/services/services/services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addons_services_addons_service__ = __webpack_require__("../../../../../src/app/layout/addons/services/addons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__packages_services_packages_service__ = __webpack_require__("../../../../../src/app/layout/packages/services/packages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_model_services_model__ = __webpack_require__("../../../../../src/app/layout/services/model/services.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UpdateServiceComponent = (function () {
    function UpdateServiceComponent(servicesService, addonsService, packagesService, layoutService, modalService, activatedRoute, router) {
        this.servicesService = servicesService;
        this.addonsService = addonsService;
        this.packagesService = packagesService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.errorMessage = "Unexpected error encountered.";
        this.servicesDetails = new __WEBPACK_IMPORTED_MODULE_7__services_model_services_model__["a" /* ServicesDto */];
        this.serviceTypeId = '';
        this.saveServiceStatus = false;
        this.uploadIconStatus = false;
        this.uploadBannerStatus = false;
        this.serviceType = '';
        this.name = '';
        this.description = '';
        this.defaultAddOns = [];
        this.serviceAddOns = [];
        this.addOns = [];
        this.selectedAddOns = [];
        this.defaultPackages = [];
        this.servicePackages = [];
        this.packages = [];
        this.selectedPackages = [];
        this.updatedTime = new Date();
        this.createdTime = new Date();
        this.iconUrl = '';
        this.bannerUrl = '';
        this.hdBannerFileUpload = true;
        this.hdIconFileUpload = true;
        this.selectedIconFile = null;
        this.selectedBannerFile = null;
        this.isFeatured = false;
        this.alerts = [];
    }
    UpdateServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.serviceTypeId = params['id'];
            _this.readService(_this.serviceTypeId);
        });
    };
    UpdateServiceComponent.prototype.refreshAddOnsValue = function (value) {
        this.selectedAddOns = value.map(function (item) { return item.text; });
    };
    UpdateServiceComponent.prototype.refreshPackagesValue = function (value) {
        this.selectedPackages = value.map(function (item) { return item.text; });
    };
    UpdateServiceComponent.prototype.onFileIconSelected = function (event) {
        this.selectedIconFile = event.target.files[0];
    };
    UpdateServiceComponent.prototype.onFileBannerSelected = function (event) {
        this.selectedBannerFile = event.target.files[0];
    };
    UpdateServiceComponent.prototype.readService = function (selectedId) {
        var _this = this;
        this.servicesService.readService(selectedId).subscribe(function (data) {
            console.log(data);
            _this.serviceType = data.serviceType.toLocaleUpperCase();
            _this.name = data.name;
            _this.iconUrl = data.iconUrl;
            _this.bannerUrl = data.bannerUrl;
            if (!_this.isEmpty(data.serviceAddOns)) {
                for (var x = 0; x < data.serviceAddOns.length; x++) {
                    _this.defaultAddOns.push(data.serviceAddOns[x].description);
                }
            }
            if (!_this.isEmpty(data.servicePackages)) {
                for (var y = 0; y < data.servicePackages.length; y++) {
                    _this.defaultPackages.push(data.servicePackages[y].name);
                }
            }
            _this.description = data.description;
            _this.isFeatured = data.featured;
            _this.loading = false;
            if (_this.iconUrl == "") {
                _this.hdIconFileUpload = false;
            }
            if (_this.bannerUrl == "") {
                _this.hdBannerFileUpload = false;
            }
            _this.getAddons();
            _this.getPackages();
        }, function (err) {
            console.log(err);
        });
    };
    // chkIsFeatured(event){
    //   this.isFeatured = event.target.checked;
    // }
    UpdateServiceComponent.prototype.getAddons = function () {
        var _this = this;
        this.addonsService.getAddons().subscribe(function (data) {
            if (data != undefined) {
                console.log(data);
                _this.serviceAddOns = data;
                for (var x = 0; x < data.length; x++) {
                    _this.addOns.push(data[x].description);
                }
            }
            console.log(_this.addOns);
        }, function (err) {
            console.log(err);
        });
    };
    UpdateServiceComponent.prototype.getPackages = function () {
        var _this = this;
        this.packagesService.getPackages().subscribe(function (data) {
            if (data != undefined) {
                console.log(data);
                _this.servicePackages = data;
                for (var x = 0; x < data.length; x++) {
                    _this.packages.push(data[x].name);
                }
            }
            console.log(_this.packages);
        }, function (err) {
            console.log(err);
        });
    };
    UpdateServiceComponent.prototype.updateService = function () {
        var _this = this;
        this.loading = true;
        var param = [], arrSelectedAddOnsId = [], arrSelectedPackagesId = [];
        this.selectedAddOns.map(function (addOnsItem) {
            _this.serviceAddOns.forEach(function (item, index) {
                if (item.description == addOnsItem) {
                    arrSelectedAddOnsId.push(_this.serviceAddOns[index].id);
                }
            });
        });
        this.selectedPackages.map(function (packagesItem) {
            _this.servicePackages.forEach(function (item, index) {
                if (item.name == packagesItem) {
                    arrSelectedPackagesId.push(_this.servicePackages[index].id);
                }
            });
        });
        param.push({
            "description": this.description.trim(),
            "featured": this.isFeatured,
            "serviceAddOns": arrSelectedAddOnsId,
            "servicePackages": arrSelectedPackagesId
        });
        this.saveService(param[0]);
    };
    UpdateServiceComponent.prototype.saveService = function (serviceDetails) {
        var _this = this;
        this.servicesService.updateService(this.serviceTypeId, serviceDetails).subscribe(function (data) {
            console.log(data);
            if (!_this.isEmpty(data)) {
                /**
                if(this.selectedIconFile == null && this.selectedBannerFile == null){
                  this.saveServiceStatus = true;
                  this.processCompleted();
                } else {
                  if(this.selectedIconFile != null){
                    this.uploadIcon(this.serviceTypeId);
                  }
                  
                  if(this.selectedBannerFile != null){
                    this.uploadBanner(this.serviceTypeId);
                  }
                }
                */
                _this.loading = false;
                _this.successMessage('Service successfully updated.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('services');
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    UpdateServiceComponent.prototype.processCompleted = function () {
        var _this = this;
        var x = false;
        if ((this.selectedIconFile != null && this.uploadIconStatus) && (this.selectedBannerFile != null && this.uploadBannerStatus)) {
            x = true;
            console.log('upload banner and icon');
        }
        else if (this.selectedIconFile != null && this.selectedBannerFile == null && this.uploadIconStatus) {
            x = true;
            console.log('upload icon');
        }
        else if (this.selectedIconFile == null && this.selectedBannerFile != null && this.uploadBannerStatus) {
            x = true;
            console.log('upload banner');
        }
        else if (this.selectedIconFile == null && this.selectedBannerFile == null && this.saveServiceStatus) {
            x = true;
            console.log('no upload');
        }
        if (x) {
            this.loading = false;
            this.successMessage('Service successfully updated.');
            setTimeout(function () {
                _this.closeActiveAlert();
                _this.router.navigateByUrl('services');
            }, 3000);
        }
    };
    UpdateServiceComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    UpdateServiceComponent.prototype.successMessage = function (msg) {
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
    UpdateServiceComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    UpdateServiceComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    UpdateServiceComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return UpdateServiceComponent;
}());
UpdateServiceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-service',
        template: __webpack_require__("../../../../../src/app/layout/services/components/update-service/update-service.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/services/components/update-service/update-service.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_services_services_service__["a" /* ServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_services_services_service__["a" /* ServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__addons_services_addons_service__["a" /* AddonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__addons_services_addons_service__["a" /* AddonsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__packages_services_packages_service__["a" /* PackagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__packages_services_packages_service__["a" /* PackagesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__layout_service__["a" /* LayoutService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _g || Object])
], UpdateServiceComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=update-service.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/services/model/services.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesDto; });
var ServicesDto = (function () {
    function ServicesDto() {
        this.customer = '';
        this.photographer = '';
        this.appointment = new Date();
        this.status = '';
    }
    return ServicesDto;
}());

//# sourceMappingURL=services.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/services/services-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_services_services_component__ = __webpack_require__("../../../../../src/app/layout/services/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_create_service_create_service_component__ = __webpack_require__("../../../../../src/app/layout/services/components/create-service/create-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_update_service_update_service_component__ = __webpack_require__("../../../../../src/app/layout/services/components/update-service/update-service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_services_services_component__["a" /* ServicesComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_2__components_services_services_component__["a" /* ServicesComponent */] },
    { path: 'create-service', component: __WEBPACK_IMPORTED_MODULE_3__components_create_service_create_service_component__["a" /* CreateServiceComponent */] },
    { path: 'update-service', component: __WEBPACK_IMPORTED_MODULE_4__components_update_service_update_service_component__["a" /* UpdateServiceComponent */] }
];
var ServicesRoutingModule = (function () {
    function ServicesRoutingModule() {
    }
    return ServicesRoutingModule;
}());
ServicesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], ServicesRoutingModule);

//# sourceMappingURL=services-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_ui_switch__ = __webpack_require__("../../../../ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_routing_module__ = __webpack_require__("../../../../../src/app/layout/services/services-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_data_table__ = __webpack_require__("../../../../angular-2-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular_2_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__addons_services_addons_service__ = __webpack_require__("../../../../../src/app/layout/addons/services/addons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__packages_services_packages_service__ = __webpack_require__("../../../../../src/app/layout/packages/services/packages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_services_services_component__ = __webpack_require__("../../../../../src/app/layout/services/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_create_service_create_service_component__ = __webpack_require__("../../../../../src/app/layout/services/components/create-service/create-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_update_service_update_service_component__ = __webpack_require__("../../../../../src/app/layout/services/components/update-service/update-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_services_service__ = __webpack_require__("../../../../../src/app/layout/services/services/services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var ServicesModule = (function () {
    function ServicesModule() {
    }
    return ServicesModule;
}());
ServicesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__services_routing_module__["a" /* ServicesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular_2_data_table__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__shared__["c" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_11_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_select__["SelectModule"],
            __WEBPACK_IMPORTED_MODULE_20_ngx_spinner__["NgxSpinnerModule"],
            __WEBPACK_IMPORTED_MODULE_4_ngx_ui_switch__["a" /* UiSwitchModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__components_services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_create_service_create_service_component__["a" /* CreateServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_update_service_update_service_component__["a" /* UpdateServiceComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__services_services_service__["a" /* ServicesService */], __WEBPACK_IMPORTED_MODULE_14__addons_services_addons_service__["a" /* AddonsService */], __WEBPACK_IMPORTED_MODULE_15__packages_services_packages_service__["a" /* PackagesService */]]
    })
], ServicesModule);

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ "../../../../ng2-select/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../ng2-select/select/common.js"));
__export(__webpack_require__("../../../../ng2-select/select/off-click.js"));
__export(__webpack_require__("../../../../ng2-select/select/select.module.js"));
__export(__webpack_require__("../../../../ng2-select/select/select.js"));
__export(__webpack_require__("../../../../ng2-select/select/select-item.js"));
__export(__webpack_require__("../../../../ng2-select/select/select-pipes.js"));


/***/ }),

/***/ "../../../../ng2-select/select/common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
exports.escapeRegexp = escapeRegexp;


/***/ }),

/***/ "../../../../ng2-select/select/off-click.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    OffClickDirective.prototype.onClick = function ($event) {
        $event.stopPropagation();
    };
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { if (typeof document !== 'undefined') {
            document.addEventListener('click', _this.offClickHandler);
        } }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this.offClickHandler);
        }
    };
    OffClickDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[offClick]'
                },] },
    ];
    /** @nocollapse */
    OffClickDirective.ctorParameters = function () { return []; };
    OffClickDirective.propDecorators = {
        'offClickHandler': [{ type: core_1.Input, args: ['offClick',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;


/***/ }),

/***/ "../../../../ng2-select/select/select-item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectItem = (function () {
    function SelectItem(source) {
        var _this = this;
        if (typeof source === 'string') {
            this.id = this.text = source;
        }
        if (typeof source === 'object') {
            this.id = source.id || source.text;
            this.text = source.text;
            if (source.children && source.text) {
                this.children = source.children.map(function (c) {
                    var r = new SelectItem(c);
                    r.parent = _this;
                    return r;
                });
                this.text = source.text;
            }
        }
    }
    SelectItem.prototype.fillChildrenHash = function (optionsMap, startIndex) {
        var i = startIndex;
        this.children.map(function (child) {
            optionsMap.set(child.id, i++);
        });
        return i;
    };
    SelectItem.prototype.hasChildren = function () {
        return this.children && this.children.length > 0;
    };
    SelectItem.prototype.getSimilar = function () {
        var r = new SelectItem(false);
        r.id = this.id;
        r.text = this.text;
        r.parent = this.parent;
        return r;
    };
    return SelectItem;
}());
exports.SelectItem = SelectItem;


/***/ }),

/***/ "../../../../ng2-select/select/select-pipes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../../ng2-select/select/common.js");
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, query) {
        if (query.length < 1) {
            return value;
        }
        if (query) {
            var tagRE = new RegExp('<[^<>]*>', 'ig');
            // get ist of tags
            var tagList = value.match(tagRE);
            // Replace tags with token
            var tmpValue = value.replace(tagRE, '$!$');
            // Replace search words
            value = tmpValue.replace(new RegExp(common_1.escapeRegexp(query), 'gi'), '<strong>$&</strong>');
            // Reinsert HTML
            for (var i = 0; value.indexOf('$!$') > -1; i++) {
                value = value.replace('$!$', tagList[i]);
            }
        }
        return value;
    };
    HighlightPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'highlight' },] },
    ];
    /** @nocollapse */
    HighlightPipe.ctorParameters = function () { return []; };
    return HighlightPipe;
}());
exports.HighlightPipe = HighlightPipe;
function stripTags(input) {
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, '');
}
exports.stripTags = stripTags;


/***/ }),

/***/ "../../../../ng2-select/select/select.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var select_item_1 = __webpack_require__("../../../../ng2-select/select/select-item.js");
var select_pipes_1 = __webpack_require__("../../../../ng2-select/select/select-pipes.js");
var common_1 = __webpack_require__("../../../../ng2-select/select/common.js");
var styles = "\n  .ui-select-toggle {\n    position: relative;\n  }\n\n  /* Fix caret going into new line in Firefox */\n  .ui-select-placeholder {\n    float: left;\n  }\n  \n  /* Fix Bootstrap dropdown position when inside a input-group */\n  .input-group > .dropdown {\n    /* Instead of relative */\n    position: static;\n  }\n  \n  .ui-select-match > .btn {\n    /* Instead of center because of .btn */\n    text-align: left !important;\n  }\n  \n  .ui-select-match > .caret {\n    position: absolute;\n    top: 45%;\n    right: 15px;\n  }\n  \n  .ui-disabled {\n    background-color: #eceeef;\n    border-radius: 4px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0.6;\n    top: 0;\n    left: 0;\n    cursor: not-allowed;\n  }\n  \n  .ui-select-choices {\n    width: 100%;\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n    margin-top: 0;\n  }\n  \n  .ui-select-multiple .ui-select-choices {\n    margin-top: 1px;\n  }\n  .ui-select-choices-row>a {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: 400;\n      line-height: 1.42857143;\n      color: #333;\n      white-space: nowrap;\n  }\n  .ui-select-choices-row.active>a {\n      color: #fff;\n      text-decoration: none;\n      outline: 0;\n      background-color: #428bca;\n  }\n  \n  .ui-select-multiple {\n    height: auto;\n    padding:3px 3px 0 3px;\n  }\n  \n  .ui-select-multiple input.ui-select-search {\n    background-color: transparent !important; /* To prevent double background when disabled */\n    border: none;\n    outline: none;\n    box-shadow: none;\n    height: 1.6666em;\n    padding: 0;\n    margin-bottom: 3px;\n    \n  }\n  .ui-select-match .close {\n      font-size: 1.6em;\n      line-height: 0.75;\n  }\n  \n  .ui-select-multiple .ui-select-match-item {\n    outline: 0;\n    margin: 0 3px 3px 0;\n  }\n  .ui-select-toggle > .caret {\n      position: absolute;\n      height: 10px;\n      top: 50%;\n      right: 10px;\n      margin-top: -2px;\n  }\n";
var SelectComponent = (function () {
    function SelectComponent(element, sanitizer) {
        this.sanitizer = sanitizer;
        this.allowClear = false;
        this.placeholder = '';
        this.idField = 'id';
        this.textField = 'text';
        this.childrenField = 'children';
        this.multiple = false;
        this.data = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.removed = new core_1.EventEmitter();
        this.typed = new core_1.EventEmitter();
        this.opened = new core_1.EventEmitter();
        this.options = [];
        this.itemObjects = [];
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inputMode = false;
        this._optionsOpened = false;
        this.inputValue = '';
        this._items = [];
        this._disabled = false;
        this._active = [];
        this.element = element;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    Object.defineProperty(SelectComponent.prototype, "items", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this._items = this.itemObjects = [];
            }
            else {
                this._items = value.filter(function (item) {
                    if ((typeof item === 'string') || (typeof item === 'object' && item && item[_this.textField] && item[_this.idField])) {
                        return item;
                    }
                });
                this.itemObjects = this._items.map(function (item) { return (typeof item === 'string' ? new select_item_1.SelectItem(item) : new select_item_1.SelectItem({ id: item[_this.idField], text: item[_this.textField], children: item[_this.childrenField] })); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (this._disabled === true) {
                this.hideOptions();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (selectedItems) {
            var _this = this;
            if (!selectedItems || selectedItems.length === 0) {
                this._active = [];
            }
            else {
                var areItemsStrings_1 = typeof selectedItems[0] === 'string';
                this._active = selectedItems.map(function (item) {
                    var data = areItemsStrings_1
                        ? item
                        : { id: item[_this.idField], text: item[_this.textField] };
                    return new select_item_1.SelectItem(data);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "optionsOpened", {
        get: function () {
            return this._optionsOpened;
        },
        set: function (value) {
            this._optionsOpened = value;
            this.opened.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SelectComponent.prototype.inputEvent = function (e, isUpMode) {
        if (isUpMode === void 0) { isUpMode = false; }
        // tab
        if (e.keyCode === 9) {
            return;
        }
        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
            e.keyCode === 40 || e.keyCode === 13)) {
            e.preventDefault();
            return;
        }
        // backspace
        if (!isUpMode && e.keyCode === 8) {
            var el = this.element.nativeElement
                .querySelector('div.ui-select-container > input');
            if (!el.value || el.value.length <= 0) {
                if (this.active.length > 0) {
                    this.remove(this.active[this.active.length - 1]);
                }
                e.preventDefault();
            }
        }
        // esc
        if (!isUpMode && e.keyCode === 27) {
            this.hideOptions();
            this.element.nativeElement.children[0].focus();
            e.preventDefault();
            return;
        }
        // del
        if (!isUpMode && e.keyCode === 46) {
            if (this.active.length > 0) {
                this.remove(this.active[this.active.length - 1]);
            }
            e.preventDefault();
        }
        // left
        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
            this.behavior.first();
            e.preventDefault();
            return;
        }
        // right
        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
            this.behavior.last();
            e.preventDefault();
            return;
        }
        // up
        if (!isUpMode && e.keyCode === 38) {
            this.behavior.prev();
            e.preventDefault();
            return;
        }
        // down
        if (!isUpMode && e.keyCode === 40) {
            this.behavior.next();
            e.preventDefault();
            return;
        }
        // enter
        if (!isUpMode && e.keyCode === 13) {
            if (this.active.indexOf(this.activeOption) === -1) {
                this.selectActiveMatch();
                this.behavior.next();
            }
            e.preventDefault();
            return;
        }
        var target = e.target || e.srcElement;
        if (target && target.value) {
            this.inputValue = target.value;
            this.behavior.filter(new RegExp(common_1.escapeRegexp(this.inputValue), 'ig'));
            this.doEvent('typed', this.inputValue);
        }
        else {
            this.open();
        }
    };
    SelectComponent.prototype.ngOnInit = function () {
        this.behavior = (this.firstItemHasChildren) ?
            new ChildrenBehavior(this) : new GenericBehavior(this);
    };
    SelectComponent.prototype.remove = function (item) {
        if (this._disabled === true) {
            return;
        }
        if (this.multiple === true && this.active) {
            var index = this.active.indexOf(item);
            this.active.splice(index, 1);
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
        if (this.multiple === false) {
            this.active = [];
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
    };
    SelectComponent.prototype.doEvent = function (type, value) {
        if (this[type] && value) {
            this[type].next(value);
        }
        this.onTouched();
        if (type === 'selected' || type === 'removed') {
            this.onChange(this.active);
        }
    };
    SelectComponent.prototype.clickedOutside = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    Object.defineProperty(SelectComponent.prototype, "firstItemHasChildren", {
        get: function () {
            return this.itemObjects[0] && this.itemObjects[0].hasChildren();
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.writeValue = function (val) {
        this.active = val;
        this.data.emit(this.active);
    };
    SelectComponent.prototype.validate = function (c) {
        var controlValue = c ? c.value : [];
        if (!controlValue) {
            controlValue = [];
        }
        return (controlValue.length > 0) ? null : {
            ng2SelectEmptyError: {
                valid: false
            }
        };
    };
    SelectComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    SelectComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectComponent.prototype.matchClick = function (e) {
        if (this._disabled === true) {
            return;
        }
        this.inputMode = !this.inputMode;
        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
            this.focusToInput();
            this.open();
        }
    };
    SelectComponent.prototype.mainClick = function (event) {
        if (this.inputMode === true || this._disabled === true) {
            return;
        }
        if (event.keyCode === 46) {
            event.preventDefault();
            this.inputEvent(event);
            return;
        }
        if (event.keyCode === 8) {
            event.preventDefault();
            this.inputEvent(event, true);
            return;
        }
        if (event.keyCode === 9 || event.keyCode === 13 ||
            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
            event.preventDefault();
            return;
        }
        this.inputMode = true;
        var value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        var target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    };
    SelectComponent.prototype.selectActive = function (value) {
        this.activeOption = value;
    };
    SelectComponent.prototype.isActive = function (value) {
        return this.activeOption.id === value.id;
    };
    SelectComponent.prototype.removeClick = function (value, event) {
        event.stopPropagation();
        this.remove(value);
    };
    SelectComponent.prototype.focusToInput = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        setTimeout(function () {
            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 0);
    };
    SelectComponent.prototype.open = function () {
        var _this = this;
        this.options = this.itemObjects
            .filter(function (option) { return (_this.multiple === false ||
            _this.multiple === true && !_this.active.find(function (o) { return option.text === o.text; })); });
        if (this.options.length > 0) {
            this.behavior.first();
        }
        this.optionsOpened = true;
    };
    SelectComponent.prototype.hideOptions = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    SelectComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this.activeOption);
    };
    SelectComponent.prototype.selectMatch = function (value, e) {
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.options.length <= 0) {
            return;
        }
        if (this.multiple === true) {
            this.active.push(value);
            this.data.next(this.active);
        }
        if (this.multiple === false) {
            this.active[0] = value;
            this.data.next(this.active[0]);
        }
        this.doEvent('selected', value);
        this.hideOptions();
        if (this.multiple === true) {
            this.focusToInput('');
        }
        else {
            this.focusToInput(select_pipes_1.stripTags(value.text));
            this.element.nativeElement.querySelector('.ui-select-container').focus();
        }
    };
    SelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-select',
                    styles: [styles],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            /* tslint:disable */
                            useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                            /* tslint:enable */
                            multi: true
                        },
                        {
                            provide: forms_1.NG_VALIDATORS,
                            useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                            multi: true,
                        }
                    ],
                    template: "\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === false\"\n     (keyup)=\"mainClick($event)\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container dropdown open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <div class=\"ui-select-match\"\n         *ngIf=\"!inputMode\">\n      <span tabindex=\"-1\"\n          class=\"btn btn-default btn-secondary form-control ui-select-toggle\"\n          (click)=\"matchClick($event)\"\n          style=\"outline: 0;\">\n        <span *ngIf=\"active.length <= 0\" class=\"ui-select-placeholder text-muted\">{{placeholder}}</span>\n        <span *ngIf=\"active.length > 0\" class=\"ui-select-match-text pull-left\"\n              [ngClass]=\"{'ui-select-allow-clear': allowClear && active.length > 0}\"\n              [innerHTML]=\"sanitize(active[0].text)\"></span>\n        <i class=\"dropdown-toggle pull-right\"></i>\n        <i class=\"caret pull-right\"></i>\n        <a *ngIf=\"allowClear && active.length>0\" class=\"btn btn-xs btn-link pull-right\" style=\"margin-right: 10px; padding: 0;\" (click)=\"removeClick(active[0], $event)\">\n           <i class=\"glyphicon glyphicon-remove\"></i>\n        </a>\n      </span>\n    </div>\n    <input type=\"text\" autocomplete=\"false\" tabindex=\"-1\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           [disabled]=\"disabled\"\n           class=\"form-control ui-select-search\"\n           *ngIf=\"inputMode\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === true\"\n     (keyup)=\"mainClick($event)\"\n     (focus)=\"focusToInput('')\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container ui-select-multiple dropdown form-control open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <span class=\"ui-select-match\">\n        <span *ngFor=\"let a of active\">\n            <span class=\"ui-select-match-item btn btn-default btn-secondary btn-xs\"\n                  tabindex=\"-1\"\n                  type=\"button\"\n                  [ngClass]=\"{'btn-default': true}\">\n               <a class=\"close\"\n                  style=\"margin-left: 5px; padding: 0;\"\n                  (click)=\"removeClick(a, $event)\">&times;</a>\n               <span [innerHtml]=\"sanitize(a.text)\"></span>\n           </span>\n        </span>\n    </span>\n    <input type=\"text\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           (click)=\"matchClick($event)\"\n           [disabled]=\"disabled\"\n           autocomplete=\"false\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           class=\"form-control ui-select-search\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\"\n           role=\"combobox\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    SelectComponent.propDecorators = {
        'allowClear': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'idField': [{ type: core_1.Input },],
        'textField': [{ type: core_1.Input },],
        'childrenField': [{ type: core_1.Input },],
        'multiple': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'active': [{ type: core_1.Input },],
        'data': [{ type: core_1.Output },],
        'selected': [{ type: core_1.Output },],
        'removed': [{ type: core_1.Output },],
        'typed': [{ type: core_1.Output },],
        'opened': [{ type: core_1.Output },],
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
var Behavior = (function () {
    function Behavior(actor) {
        this.optionsMap = new Map();
        this.actor = actor;
    }
    Behavior.prototype.fillOptionsMap = function () {
        var _this = this;
        this.optionsMap.clear();
        var startPos = 0;
        this.actor.itemObjects
            .map(function (item) {
            startPos = item.fillChildrenHash(_this.optionsMap, startPos);
        });
    };
    Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
        if (!container) {
            return;
        }
        var choices = container.querySelectorAll('.ui-select-choices-row');
        if (choices.length < 1) {
            return;
        }
        var activeIndex = this.getActiveIndex(optionsMap);
        if (activeIndex < 0) {
            return;
        }
        var highlighted = choices[activeIndex];
        if (!highlighted) {
            return;
        }
        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        var height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    };
    Behavior.prototype.getActiveIndex = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var ai = this.actor.options.indexOf(this.actor.activeOption);
        if (ai < 0 && optionsMap !== void 0) {
            ai = optionsMap.get(this.actor.activeOption.id);
        }
        return ai;
    };
    return Behavior;
}());
exports.Behavior = Behavior;
var GenericBehavior = (function (_super) {
    __extends(GenericBehavior, _super);
    function GenericBehavior(actor) {
        return _super.call(this, actor) || this;
    }
    GenericBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.last = function () {
        this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.prev = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.next = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.filter = function (query) {
        var _this = this;
        var options = this.actor.itemObjects
            .filter(function (option) {
            return select_pipes_1.stripTags(option.text).match(query) &&
                (_this.actor.multiple === false ||
                    (_this.actor.multiple === true && _this.actor.active.map(function (item) { return item.id; }).indexOf(option.id) < 0));
        });
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0];
            _super.prototype.ensureHighlightVisible.call(this);
        }
    };
    return GenericBehavior;
}(Behavior));
exports.GenericBehavior = GenericBehavior;
var ChildrenBehavior = (function (_super) {
    __extends(ChildrenBehavior, _super);
    function ChildrenBehavior(actor) {
        return _super.call(this, actor) || this;
    }
    ChildrenBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0].children[0];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.last = function () {
        this.actor.activeOption =
            this.actor
                .options[this.actor.options.length - 1]
                .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.prev = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent - 1]) {
                this.actor.activeOption = this.actor
                    .options[indexParent - 1]
                    .children[this.actor.options[indexParent - 1].children.length - 1];
            }
        }
        if (!this.actor.activeOption) {
            this.last();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.next = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent + 1]) {
                this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
            }
        }
        if (!this.actor.activeOption) {
            this.first();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.filter = function (query) {
        var options = [];
        var optionsMap = new Map();
        var startPos = 0;
        for (var _i = 0, _a = this.actor.itemObjects; _i < _a.length; _i++) {
            var si = _a[_i];
            var children = si.children.filter(function (option) { return query.test(option.text); });
            startPos = si.fillChildrenHash(optionsMap, startPos);
            if (children.length > 0) {
                var newSi = si.getSimilar();
                newSi.children = children;
                options.push(newSi);
            }
        }
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0].children[0];
            _super.prototype.ensureHighlightVisible.call(this, optionsMap);
        }
    };
    return ChildrenBehavior;
}(Behavior));
exports.ChildrenBehavior = ChildrenBehavior;


/***/ }),

/***/ "../../../../ng2-select/select/select.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var select_1 = __webpack_require__("../../../../ng2-select/select/select.js");
var select_pipes_1 = __webpack_require__("../../../../ng2-select/select/select-pipes.js");
var off_click_1 = __webpack_require__("../../../../ng2-select/select/off-click.js");
var SelectModule = (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective],
                    exports: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective]
                },] },
    ];
    /** @nocollapse */
    SelectModule.ctorParameters = function () { return []; };
    return SelectModule;
}());
exports.SelectModule = SelectModule;


/***/ })

});
//# sourceMappingURL=services.module.chunk.js.map