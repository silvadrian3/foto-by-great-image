webpackJsonp(["addons.module"],{

/***/ "../../../../../src/app/layout/addons/addons-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_addons_addons_component__ = __webpack_require__("../../../../../src/app/layout/addons/components/addons/addons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_create_addons_create_addons_component__ = __webpack_require__("../../../../../src/app/layout/addons/components/create-addons/create-addons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_update_addons_update_addons_component__ = __webpack_require__("../../../../../src/app/layout/addons/components/update-addons/update-addons.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_addons_addons_component__["a" /* AddonsComponent */] },
    { path: 'addons', component: __WEBPACK_IMPORTED_MODULE_2__components_addons_addons_component__["a" /* AddonsComponent */] },
    { path: 'create-addons', component: __WEBPACK_IMPORTED_MODULE_3__components_create_addons_create_addons_component__["a" /* CreateAddonsComponent */] },
    { path: 'update-addons', component: __WEBPACK_IMPORTED_MODULE_4__components_update_addons_update_addons_component__["a" /* UpdateAddonsComponent */] },
];
var AddonsRoutingModule = (function () {
    function AddonsRoutingModule() {
    }
    return AddonsRoutingModule;
}());
AddonsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], AddonsRoutingModule);

//# sourceMappingURL=addons-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/addons/addons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonsModule", function() { return AddonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addons_routing_module__ = __webpack_require__("../../../../../src/app/layout/addons/addons-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__ = __webpack_require__("../../../../angular-2-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_addons_service__ = __webpack_require__("../../../../../src/app/layout/addons/services/addons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_addons_addons_component__ = __webpack_require__("../../../../../src/app/layout/addons/components/addons/addons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_create_addons_create_addons_component__ = __webpack_require__("../../../../../src/app/layout/addons/components/create-addons/create-addons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_update_addons_update_addons_component__ = __webpack_require__("../../../../../src/app/layout/addons/components/update-addons/update-addons.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { NgxMyDatePickerModule } from 'ngx-mydatepicker';












var AddonsModule = (function () {
    function AddonsModule() {
    }
    return AddonsModule;
}());
AddonsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__addons_routing_module__["a" /* AddonsRoutingModule */],
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
        declarations: [__WEBPACK_IMPORTED_MODULE_11__components_addons_addons_component__["a" /* AddonsComponent */], __WEBPACK_IMPORTED_MODULE_12__components_create_addons_create_addons_component__["a" /* CreateAddonsComponent */], __WEBPACK_IMPORTED_MODULE_13__components_update_addons_update_addons_component__["a" /* UpdateAddonsComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_addons_service__["a" /* AddonsService */]]
    })
], AddonsModule);

//# sourceMappingURL=addons.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/addons/components/addons/addons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-action {\n    margin: 0 3px;\n    cursor: pointer;\n}\n\n.row-search {\n    color: #FF8D33;\n}\n\n.row-edit {\n    color: #33A2FF;\n}\n\n.row-delete {\n    color: #ff0000;\n}\n\n.pagination-box {\n    margin-top: 1% !important;\n}\n\n.pagination-page .input-group .input-group-addon {\n    display: inline;\n}\n\n.index-column-header, .index-column {\n    text-align: center;\n}\n\n.column-header {\n    text-align: center;\n    font-weight: 700;\n}\n\n.data-column {\n    word-wrap: break-word;\n}\n\n.column-header.column-action {\n    width: 10%;\n}\n\n.data-column.column-action {\n    text-align: center;\n}\n\n.column-header.column-price {\n    width: 25%;\n}\n\n.data-column.column-price {\n    text-align: right;\n}\n\n.column-header.column-description {\n    width: 65%;\n}\n\n.multiline-paragraph {\n    white-space: pre-line; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/addons/components/addons/addons.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'AddOns'\" [icon]=\"'fa-fw fa-plus-square'\"></app-page-header>\n  \n    <div class=\"card\">\n      \n      <div class=\"card-header\">\n        <i class=\"fa fa-fw fa-plus-square\" aria-hidden=\"true\"></i> AddOns\n      </div>\n\n      <div class=\"clear-filler\"></div>\n  \n      <div class=\"col-lg-12\">\n\n        <div class=\"col-lg-3\">\n            <!-- <div class=\"pull-left\">\n              <div class=\"input-group\">\n                  <span class=\"input-group-btn\">\n                      <button type=\"button\" class=\"btn btn-info\">\n                          <i class=\"fa fa-search\"></i>\n                      </button>\n                  </span>  \n                <input #gb type=\"text\" pInputText class=\"form-control\" placeholder=\"Search\">\n              </div>\n            </div> -->\n        </div>\n\n        <div class=\"col-lg-3 col-lg-offset-6\">\n            <div class=\"pull-right\">\n              <button type=\"button\" routerLink=\"create-addons\" class=\"btn btn-info pull-right\">Create AddOns</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12\" >\n          <div class=\"col-lg-12 table-responsive\">\n            <div class=\"clear-filler\"></div>\n            <div class=\"clear-filler\"></div> \n            \n            <data-table id=\"addons-grid\"\n                headerTitle=\"\"\n                [items]=\"addons\"\n                [itemCount]=\"addonsCount\"\n                (reload)=\"reloadAddons($event)\"\n                [limit]=\"10\"\n                [sortBy]=\"'description'\"\n                [sortAsc]=\"true\"\n                [selectColumn]=\"false\"\n                [multiSelect]=\"false\"\n                [substituteRows]=\"false\"\n                [expandableRows]=\"false\"\n                [translations]=\"translations\"\n                [indexColumnHeader]=\"'#'\"\n                [selectOnRowClick]=\"true\"\n                >\n                <!-- <ng-template #dataTableExpand let-item=\"item\">\n                    <div [textContent]=\"item.description\" style=\"padding: 5px; color: gray\"></div>\n                </ng-template>\n                 -->\n                <data-table-column\n                    [property]=\"'description'\"\n                    [header]=\"'Name'\"\n                    [sortable]=\"true\">\n                </data-table-column>\n                <data-table-column\n                  [property]=\"'price'\"\n                  [header]=\"'Price'\"\n                  [sortable]=\"true\">\n                  <ng-template #dataTableCell let-item=\"item\">\n                    {{ item.price | currency: 'PHP': true}}\n                  </ng-template>\n                </data-table-column>\n\n                <data-table-column\n                [property]=\"'action'\"\n                [header]=\"'Action'\"\n                style=\"width:10%;\">\n                <ng-template #dataTableCell let-item=\"item\">\n                    <span \n                      class=\"fa fa-search row-action row-search\" \n                      title=\"View\" \n                      (click)=\"getAddonsDetailsRow(item.id); open(content)\">\n                    </span>\n                    <span \n                      class=\"fa fa-pencil row-action row-edit\"\n                      title=\"Update\"\n                      [routerLink]=\"['update-addons']\"\n                      [queryParams]=\"{id:item.id}\">\n                    </span>\n                    <span \n                      class=\"fa fa-times row-action row-delete\"\n                      title=\"Archive\"\n                      (click)=\"deleteAddonsDetailsRow(item.id)\">\n                    </span>\n                </ng-template>\n                </data-table-column>\n            </data-table>\n          \n            <div class=\"clear-filler\"></div> \n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-12 text-center\">\n            <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n\n      <!-- Start - Modal -->\n      <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\"> AddOns Details</h6>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          \n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Name</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p class=\"multiline-paragraph\" [innerHTML]=\"selectedAddonsDetails.description\">\n                <span [hidden]=\"selectedAddonsDetails.name != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Price</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedAddonsDetails.price | currency : 'PHP' : true }}\n            </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Date Modified</label>\n            </div>\n            <div class=\"col-lg-6\">\n            <p *ngIf=\"selectedAddonsDetails.updatedTime != null\">{{ selectedAddonsDetails.updatedTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n            <p *ngIf=\"selectedAddonsDetails.updatedTime == null\">{{ selectedAddonsDetails.createdTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n            </div>\n          </div>\n\n\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"col-lg-12\"> \n            <div class=\"text-center col-lg-12\">\n              <button \n                type=\"button\" \n                class=\"btn btn-secondary\" \n                style=\"margin: 3px 10px;\" \n                (click)=\"d('Cross click')\">\n                Close\n              </button>\n            </div>\n            <div class=\"clear-filler\"></div>\n          \n        </div>\n          \n      </div>\n      </ng-template>\n      <!-- End - Modal -->\n\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/addons/components/addons/addons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addons_services_addons_service__ = __webpack_require__("../../../../../src/app/layout/addons/services/addons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addons_model_addons_model__ = __webpack_require__("../../../../../src/app/layout/addons/model/addons.model.ts");
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







var AddonsComponent = (function () {
    function AddonsComponent(addonsService, layoutService, modalService, renderer, elem) {
        this.addonsService = addonsService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.renderer = renderer;
        this.elem = elem;
        this.errorMessage = "Unexpected error encountered.";
        this.addonsDetails = new __WEBPACK_IMPORTED_MODULE_4__addons_model_addons_model__["a" /* addonsDetailsDto */];
        this.loading = false;
        this.addons = [];
        this.addonsCount = 0;
        this.alerts = [];
        this.translations = {
            indexColumn: '#',
            expandColumn: 'Expand column',
            selectColumn: 'Select column',
            paginationLimit: 'Limit',
            paginationRange: 'Results'
        };
    }
    AddonsComponent.prototype.ngOnInit = function () {
        this.getAddons();
    };
    AddonsComponent.prototype.getAddons = function () {
        var _this = this;
        this.loading = true;
        this.addonsService.getAddons().subscribe(function (data) {
            console.log(data);
            if (data != undefined) {
                _this.addons = data;
                _this.dtAddonsResource = new __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTableResource"](_this.addons);
                _this.dtAddonsResource.count().then(function (count) { return _this.addonsCount = count; });
                _this.addonsTable.reloadItems();
                _this.loading = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddonsComponent.prototype.reloadAddons = function (params) {
        var _this = this;
        if (this.dtAddonsResource != undefined) {
            this.dtAddonsResource.query(params).then(function (addons) { return _this.addons = addons; });
        }
    };
    AddonsComponent.prototype.cellColor = function (car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };
    ;
    AddonsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { 'size': 'lg', backdrop: 'static', keyboard: false }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AddonsComponent.prototype.getDismissReason = function (reason) {
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
    AddonsComponent.prototype.getAddonsDetailsRow = function (id) {
        var _this = this;
        this.addons.forEach(function (item, index) {
            if (item.id == id) {
                _this.selectedAddonsDetails = _this.addons[index];
                return false;
            }
        });
    };
    AddonsComponent.prototype.deleteAddonsDetailsRow = function (id) {
        if (confirm("Are you sure you want to archive this AddOns?")) {
            this.deleteAddons(id);
        }
    };
    AddonsComponent.prototype.deleteAddons = function (id) {
        var _this = this;
        this.addonsService.deleteAddons(id).subscribe(function (data) {
            //if(!this.isEmpty(data)){
            if (data.status == 200) {
                _this.successMessage('AddOns successfully archived.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.getAddons();
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddonsComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    AddonsComponent.prototype.successMessage = function (msg) {
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
    AddonsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    AddonsComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    AddonsComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return AddonsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTable"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTable"]) === "function" && _a || Object)
], AddonsComponent.prototype, "addonsTable", void 0);
AddonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addons',
        template: __webpack_require__("../../../../../src/app/layout/addons/components/addons/addons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/addons/components/addons/addons.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__addons_services_addons_service__["a" /* AddonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__addons_services_addons_service__["a" /* AddonsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object])
], AddonsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=addons.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/addons/components/create-addons/create-addons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}\n\ntextarea {\n    resize: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/addons/components/create-addons/create-addons.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Create AddOns'\" [icon]=\"'fa-fw fa-plus'\"></app-page-header>\n  \n  <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create AddOns\n    </div>\n\n    <div class=\"clear-filler\"></div>\n    <div class=\"clear-filler\"></div>\n    \n    <form role=\"form\" (ngSubmit)=\"createAddons()\" ngNativeValidate>\n      <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-lg-12 form-group\">\n              <h4>AddOns Details</h4>\n          </div>\n        </div>\n      \n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Name <span>*</span></label>\n            <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"description\" required>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>Price </label>\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"price-ico\">PHP</span>\n              <input \n                type=\"number\" \n                step=\"any\" \n                class=\"form-control\" name=\"price\" [(ngModel)]=\"price\" aria-describedby=\"price-ico\" placeholder=\"0.00\">\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"clear-filler\"></div>\n        <div class=\"clear-filler\"></div>\n        \n        <div class=\"col-lg-12 text-center form-group\">\n          <div class=\"col-lg-2 col-lg-offset-4\">\n            <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n          </div>\n          <div class=\"col-lg-2\">\n              <button \n                type=\"button\" \n                routerLink=\"/addons\" \n                class=\"btn btn-warning\"> \n                  Cancel \n              </button>\n          </div>\n        </div>\n\n        \n      </div>\n      <div class=\"clear-filler\"></div>\n\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n      </div>\n\n        <div class=\"clear-filler\"></div>\n    </form>\n    \n    \n  \n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/addons/components/create-addons/create-addons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAddonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addons_services_addons_service__ = __webpack_require__("../../../../../src/app/layout/addons/services/addons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addons_model_addons_model__ = __webpack_require__("../../../../../src/app/layout/addons/model/addons.model.ts");
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







var CreateAddonsComponent = (function () {
    function CreateAddonsComponent(addonsService, layoutService, modalService, router) {
        this.addonsService = addonsService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.router = router;
        this.errorMessage = "Unexpected error encountered.";
        this.addonstDetails = new __WEBPACK_IMPORTED_MODULE_5__addons_model_addons_model__["a" /* addonsDetailsDto */];
        this.description = '';
        this.alerts = [];
    }
    CreateAddonsComponent.prototype.ngOnInit = function () { };
    CreateAddonsComponent.prototype.createAddons = function () {
        var param = [];
        param.push({
            "price": this.price,
            "description": this.description
        });
        this.saveAddons(param[0]);
    };
    CreateAddonsComponent.prototype.saveAddons = function (addonsDetails) {
        var _this = this;
        this.addonsService.createAddons(addonsDetails).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('AddOns successfully added.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('addons');
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CreateAddonsComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    CreateAddonsComponent.prototype.successMessage = function (msg) {
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
    CreateAddonsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    CreateAddonsComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    CreateAddonsComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return CreateAddonsComponent;
}());
CreateAddonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-addons',
        template: __webpack_require__("../../../../../src/app/layout/addons/components/create-addons/create-addons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/addons/components/create-addons/create-addons.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__addons_services_addons_service__["a" /* AddonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__addons_services_addons_service__["a" /* AddonsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object])
], CreateAddonsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-addons.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/addons/components/update-addons/update-addons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/addons/components/update-addons/update-addons.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n    <app-page-header [heading]=\"'Update AddOns'\" [icon]=\"'fa-fw fa-pencil-square-o'\"></app-page-header>\n    \n    <!-- <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert> -->\n\n    <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Update AddOns\n      </div>\n  \n      <div class=\"clear-filler\"></div>\n      <div class=\"clear-filler\"></div>\n      \n      <form role=\"form\" (ngSubmit)=\"updateAddons()\" ngNativeValidate>\n          <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n          <div class=\"col-lg-12\">\n              <div class=\"col-lg-12 form-group\">\n                <h4>AddOns Details</h4>\n            </div>\n          </div>\n        \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Name <span>*</span></label>\n              <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"description\" required>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>Price </label>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\" id=\"price-ico\">PHP</span>\n                <input \n                  type=\"number\" \n                  step=\"any\" \n                  class=\"form-control\" name=\"price\" [(ngModel)]=\"price\" aria-describedby=\"price-ico\" placeholder=\"0.00\">\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"clear-filler\"></div>\n          <div class=\"clear-filler\"></div>\n          <div class=\"col-lg-12 text-center form-group\">\n            <div class=\"col-lg-2 col-lg-offset-4\">\n              <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n            </div>\n            <div class=\"col-lg-2\">\n                <button \n                  type=\"button\" \n                  routerLink=\"/addons\" \n                  class=\"btn btn-warning\"> \n                    Cancel \n                </button>\n            </div>\n          </div>\n  \n        </div>\n      </form>\n      <div class=\"clear-filler\"></div>\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n          <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        </div>\n      <div class=\"clear-filler\"></div>\n    \n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/addons/components/update-addons/update-addons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateAddonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addons_services_addons_service__ = __webpack_require__("../../../../../src/app/layout/addons/services/addons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addons_model_addons_model__ = __webpack_require__("../../../../../src/app/layout/addons/model/addons.model.ts");
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







var UpdateAddonsComponent = (function () {
    function UpdateAddonsComponent(addonsService, layoutService, modalService, activatedRoute, router) {
        this.addonsService = addonsService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.errorMessage = "Unexpected error encountered.";
        this.addonsDetails = new __WEBPACK_IMPORTED_MODULE_5__addons_model_addons_model__["a" /* addonsDetailsDto */];
        this.description = '';
        this.alerts = [];
    }
    UpdateAddonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.selectedAddonsId = params['id'];
            _this.readAddons(_this.selectedAddonsId);
        });
    };
    UpdateAddonsComponent.prototype.readAddons = function (selectedAddonsId) {
        var _this = this;
        this.addonsService.readAddons(selectedAddonsId).subscribe(function (data) {
            console.log(data);
            _this.description = data.description;
            _this.price = data.price;
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
    UpdateAddonsComponent.prototype.updateAddons = function () {
        var param = [];
        param.push({
            "description": this.description,
            "price": this.price
        });
        this.saveAddons(param[0]);
    };
    UpdateAddonsComponent.prototype.saveAddons = function (addonsDetails) {
        var _this = this;
        this.addonsService.updateAddons(addonsDetails, this.selectedAddonsId).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('Addons successfully updated.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('addons');
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    UpdateAddonsComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    UpdateAddonsComponent.prototype.successMessage = function (msg) {
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
    UpdateAddonsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    UpdateAddonsComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    UpdateAddonsComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return UpdateAddonsComponent;
}());
UpdateAddonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-addons',
        template: __webpack_require__("../../../../../src/app/layout/addons/components/update-addons/update-addons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/addons/components/update-addons/update-addons.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__addons_services_addons_service__["a" /* AddonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__addons_services_addons_service__["a" /* AddonsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _e || Object])
], UpdateAddonsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=update-addons.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/addons/model/addons.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addonsDetailsDto; });
var addonsDetailsDto = (function () {
    function addonsDetailsDto() {
    }
    return addonsDetailsDto;
}());

//# sourceMappingURL=addons.model.js.map

/***/ })

});
//# sourceMappingURL=addons.module.chunk.js.map