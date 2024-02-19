webpackJsonp(["branches.module"],{

/***/ "../../../../../src/app/layout/branches/branches-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_branches_branches_component__ = __webpack_require__("../../../../../src/app/layout/branches/components/branches/branches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_create_branch_create_branch_component__ = __webpack_require__("../../../../../src/app/layout/branches/components/create-branch/create-branch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_update_branch_update_branch_component__ = __webpack_require__("../../../../../src/app/layout/branches/components/update-branch/update-branch.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_branches_branches_component__["a" /* BranchesComponent */] },
    { path: 'branches', component: __WEBPACK_IMPORTED_MODULE_2__components_branches_branches_component__["a" /* BranchesComponent */] },
    { path: 'create-branch', component: __WEBPACK_IMPORTED_MODULE_3__components_create_branch_create_branch_component__["a" /* CreateBranchComponent */] },
    { path: 'update-branch', component: __WEBPACK_IMPORTED_MODULE_4__components_update_branch_update_branch_component__["a" /* UpdateBranchComponent */] },
];
var BranchesRoutingModule = (function () {
    function BranchesRoutingModule() {
    }
    return BranchesRoutingModule;
}());
BranchesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], BranchesRoutingModule);

//# sourceMappingURL=branches-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/branches/branches.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesModule", function() { return BranchesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__branches_routing_module__ = __webpack_require__("../../../../../src/app/layout/branches/branches-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__ = __webpack_require__("../../../../angular-2-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_branches_service__ = __webpack_require__("../../../../../src/app/layout/branches/services/branches.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_branches_branches_component__ = __webpack_require__("../../../../../src/app/layout/branches/components/branches/branches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_create_branch_create_branch_component__ = __webpack_require__("../../../../../src/app/layout/branches/components/create-branch/create-branch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_update_branch_update_branch_component__ = __webpack_require__("../../../../../src/app/layout/branches/components/update-branch/update-branch.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { NgxMyDatePickerModule } from 'ngx-mydatepicker';












var BranchesModule = (function () {
    function BranchesModule() {
    }
    return BranchesModule;
}());
BranchesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__branches_routing_module__["a" /* BranchesRoutingModule */],
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
        declarations: [__WEBPACK_IMPORTED_MODULE_11__components_branches_branches_component__["a" /* BranchesComponent */], __WEBPACK_IMPORTED_MODULE_12__components_create_branch_create_branch_component__["a" /* CreateBranchComponent */], __WEBPACK_IMPORTED_MODULE_13__components_update_branch_update_branch_component__["a" /* UpdateBranchComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_branches_service__["a" /* BranchesService */]]
    })
], BranchesModule);

//# sourceMappingURL=branches.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/branches/components/branches/branches.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-action {\n    margin: 0 3px;\n    cursor: pointer;\n}\n\n.row-search {\n    color: #FF8D33;\n}\n\n.row-edit {\n    color: #33A2FF;\n}\n\n.row-delete {\n    color: #ff0000;\n}\n\n.pagination-box {\n    margin-top: 1% !important;\n}\n\n.pagination-page .input-group .input-group-addon {\n    display: inline;\n}\n\n.index-column-header, .index-column {\n    text-align: center;\n}\n\n.column-header {\n    text-align: center;\n    font-weight: 700;\n}\n\n.data-column {\n    word-wrap: break-word;\n}\n\n.column-header.column-action {\n    width: 10%;\n}\n\n.data-column.column-action {\n    text-align: center;\n}\n\n.column-header.column-address {\n    width: 30%;\n}\n\n.column-header.column-name {\n    width: 23%;\n}\n\n.column-header.column-email {\n    width: 22%;\n}\n\n.column-header.column-contactNumber {\n    width: 15%;\n}\n\n.multiline-paragraph {\n    white-space: pre-line; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/branches/components/branches/branches.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Branches'\" [icon]=\"'fa-fw fa-home'\"></app-page-header>\n  \n    <div class=\"card\">\n      \n      <div class=\"card-header\">\n        <i class=\"fa fa-fw fa-home\" aria-hidden=\"true\"></i> Branches\n        \n      </div>\n\n      <div class=\"clear-filler\"></div>\n      \n      <div class=\"col-lg-12\">\n\n        <div class=\"col-lg-3\">\n            <!-- <div class=\"pull-left\">\n              <div class=\"input-group\">\n                  <span class=\"input-group-btn\">\n                      <button type=\"button\" class=\"btn btn-info\">\n                          <i class=\"fa fa-search\"></i>\n                      </button>\n                  </span>  \n                <input #gb type=\"text\" pInputText class=\"form-control\" placeholder=\"Search\">\n              </div>\n            </div> -->\n        </div>\n\n        <div class=\"col-lg-3 col-lg-offset-6\">\n            <div class=\"pull-right\">\n              <button type=\"button\" routerLink=\"create-branch\" class=\"btn btn-info pull-right\">Create Branch</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-12 table-responsive\">\n            <div class=\"clear-filler\"></div>\n            <div class=\"clear-filler\"></div>\n\n            <data-table id=\"branches-grid\"\n                headerTitle=\"\"\n                [items]=\"branches\"\n                [itemCount]=\"branchesCount\"\n                (reload)=\"reloadBranches($event)\"\n                [limit]=\"10\"\n                [sortBy]=\"'name'\"\n                [sortAsc]=\"true\"\n                [selectColumn]=\"false\"\n                [multiSelect]=\"false\"\n                [substituteRows]=\"false\"\n                [expandableRows]=\"false\"\n                [translations]=\"translations\"\n                [indexColumnHeader]=\"'#'\"\n                [selectOnRowClick]=\"true\"\n                >\n                <!-- <ng-template #dataTableExpand let-item=\"item\">\n                    <div [textContent]=\"item.description\" style=\"padding: 5px; color: gray\"></div>\n                </ng-template>\n                 -->\n                <data-table-column\n                    [property]=\"'name'\"\n                    [header]=\"'Name'\"\n                    [sortable]=\"true\">\n                </data-table-column>\n\n                <data-table-column\n                  [property]=\"'address'\"\n                  [header]=\"'Address'\"\n                  [sortable]=\"true\">\n                  <ng-template #dataTableCell let-item=\"item\">\n                    {{ \n                      item.address.address1 + ' ' + \n                      item.address.address2 + ' ' + \n                      item.address.city + ' ' + \n                      item.address.state + ' '\n\n                    }}\n                  </ng-template>\n                </data-table-column>\n\n                <data-table-column\n                [property]=\"'email'\"\n                [header]=\"'Email Address'\"\n                [sortable]=\"true\">\n                </data-table-column>\n\n                <data-table-column\n                  [property]=\"'contactNumber'\"\n                  [header]=\"'Contact Number'\"\n                  [sortable]=\"true\">\n                  <ng-template #dataTableCell let-item=\"item\">\n                    {{ item.contactNumbers[0] }}\n                  </ng-template>\n                </data-table-column>\n\n                <data-table-column\n                  [property]=\"'action'\"\n                  [header]=\"'Action'\"\n                  style=\"width:10%;\">\n                  <ng-template #dataTableCell let-item=\"item\">\n                      <span \n                        class=\"fa fa-search row-action row-search\" \n                        title=\"View\" \n                        (click)=\"getBranchDetailsRow(item.branchId); open(content)\">\n                      </span>\n                      <span \n                        class=\"fa fa-pencil row-action row-edit\"\n                        title=\"Update\"\n                        [routerLink]=\"['update-branch']\"\n                        [queryParams]=\"{id:item.branchId}\">\n                      </span>\n                      <span \n                        class=\"fa fa-times row-action row-delete\"\n                        title=\"Archive\"\n                        (click)=\"deleteBranchDetailsRow(item.branchId)\">\n                      </span>\n\n                  </ng-template>\n                </data-table-column>\n            </data-table>\n\n            \n\n            <div class=\"clear-filler\"></div> \n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-12 text-center\">\n            <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n\n      <!-- Start - Modal -->\n      <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\"> Branch Details</h6>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Name</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBranchDetails.name }}\n                <span [hidden]=\"selectedBranchDetails.name != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Address 1</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBranchDetails.address.address1 }}\n                <span [hidden]=\"selectedBranchDetails.address.address1 != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Address 2</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBranchDetails.address.address2 }}\n                <span [hidden]=\"selectedBranchDetails.address.address2 != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>City</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBranchDetails.address.city }}\n                <span [hidden]=\"selectedBranchDetails.address.city != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Region</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBranchDetails.address.state }}\n                <span [hidden]=\"selectedBranchDetails.address.state != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Zipcode</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBranchDetails.address.zipcode }}\n                <span [hidden]=\"selectedBranchDetails.address.zipcode != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Country</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedBranchDetails.address.country }}\n                <span [hidden]=\"selectedBranchDetails.address.country != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n              <div class=\"col-lg-6\">\n              <label>Latitude</label>\n              </div>\n              <div class=\"col-lg-6\">\n                <p>\n                  {{ selectedBranchDetails.address.location.latitude }}\n                  <span [hidden]=\"selectedBranchDetails.address.location.latitude != '' && selectedBranchDetails.address.location.latitude != 0\">N/A</span>\n                  \n                </p>\n              </div>\n            </div>\n\n            <div class=\"col-lg-12\">\n              <div class=\"col-lg-6\">\n              <label>Longitude</label>\n              </div>\n              <div class=\"col-lg-6\">\n                <p>\n                  {{ selectedBranchDetails.address.location.longitude }}\n                  <span [hidden]=\"selectedBranchDetails.address.location.longitude != '' && selectedBranchDetails.address.location.longitude != 0\">N/A</span>\n                </p>\n              </div>\n            </div>\n\n            <div class=\"col-lg-12\">\n              <div class=\"col-lg-6\">\n              <label>Email Address</label>\n              </div>\n              <div class=\"col-lg-6\">\n                <p>\n                  {{ selectedBranchDetails.email }}\n                  <span [hidden]=\"selectedBranchDetails.email != ''\">N/A</span>\n                </p>\n              </div>\n            </div>\n\n            <div class=\"col-lg-12\">\n              <div class=\"col-lg-6\">\n              <label>Contact Number</label>\n              </div>\n              <div class=\"col-lg-6\">\n                <p>\n                  {{ selectedBranchDetails.contactNumbers[0] }}\n                  <span [hidden]=\"selectedBranchDetails.contactNumbers[0] != ''\">N/A</span>\n                </p>\n              </div>\n            </div>\n\n            <div class=\"col-lg-12\">\n              <div class=\"col-lg-6\">\n              <label>Opens At</label>\n              </div>\n              <div class=\"col-lg-6\">\n                <p>\n                  {{ selectedBranchDetails.openAt }}\n                  <span [hidden]=\"selectedBranchDetails.openAt != ''\">N/A</span>\n                </p>\n              </div>\n            </div>\n\n            <div class=\"col-lg-12\">\n              <div class=\"col-lg-6\">\n              <label>Closes At</label>\n              </div>\n              <div class=\"col-lg-6\">\n                <p>\n                  {{ selectedBranchDetails.closesAt }}\n                  <span [hidden]=\"selectedBranchDetails.closesAt != ''\">N/A</span>\n                </p>\n              </div>\n            </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Date Modified</label>\n            </div>\n            <div class=\"col-lg-6\">\n            <p *ngIf=\"selectedBranchDetails.updatedTime != null\">{{ selectedBranchDetails.updatedTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n            <p *ngIf=\"selectedBranchDetails.updatedTime == null\">{{ selectedBranchDetails.createdTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n            </div>\n          </div>\n\n\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"col-lg-12\"> \n            <div class=\"text-center col-lg-12\">\n              <button \n                type=\"button\" \n                class=\"btn btn-secondary\" \n                style=\"margin: 3px 10px;\" \n                (click)=\"d('Cross click')\">\n                Close\n              </button>\n            </div>\n            <div class=\"clear-filler\"></div>\n          \n        </div>\n          \n      </div>\n      </ng-template>\n    \n      <!-- End - Modal -->\n\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/branches/components/branches/branches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__branches_services_branches_service__ = __webpack_require__("../../../../../src/app/layout/branches/services/branches.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__ = __webpack_require__("../../../../angular-2-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BranchesComponent = (function () {
    function BranchesComponent(branchesService, layoutService, modalService, renderer, elem) {
        this.branchesService = branchesService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.renderer = renderer;
        this.elem = elem;
        this.errorMessage = "Unexpected error encountered.";
        //branchDetails: branchDetailsDto = new branchDetailsDto;
        this.loading = false;
        this.branches = [];
        this.branchesCount = 0;
        this.alerts = [];
        this.translations = {
            indexColumn: '#',
            expandColumn: 'Expand column',
            selectColumn: 'Select column',
            paginationLimit: 'Limit',
            paginationRange: 'Results'
        };
    }
    BranchesComponent.prototype.ngOnInit = function () {
        this.getBranches();
    };
    BranchesComponent.prototype.getBranches = function () {
        var _this = this;
        this.loading = true;
        this.branchesService.getBranches().subscribe(function (data) {
            if (data != undefined) {
                _this.branches = data;
                _this.dtBranchesResource = new __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__["DataTableResource"](_this.branches);
                _this.dtBranchesResource.count().then(function (count) { return _this.branchesCount = count; });
                _this.branchesTable.reloadItems();
                _this.loading = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    BranchesComponent.prototype.reloadBranches = function (params) {
        var _this = this;
        if (this.dtBranchesResource != undefined) {
            this.dtBranchesResource.query(params).then(function (branches) { return _this.branches = branches; });
        }
    };
    BranchesComponent.prototype.cellColor = function (car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };
    ;
    BranchesComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { 'size': 'lg', backdrop: 'static', keyboard: false }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    BranchesComponent.prototype.getDismissReason = function (reason) {
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
    BranchesComponent.prototype.getBranchDetailsRow = function (id) {
        var _this = this;
        this.branches.forEach(function (item, index) {
            if (item.branchId == id) {
                _this.selectedBranchDetails = _this.branches[index];
                return false;
            }
        });
    };
    BranchesComponent.prototype.deleteBranchDetailsRow = function (id) {
        if (confirm("Are you sure you want to archive this branch?")) {
            this.deleteBranch(id);
        }
    };
    BranchesComponent.prototype.deleteBranch = function (id) {
        var _this = this;
        this.branchesService.deleteBranch(id).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('Branch successfully archived.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.getBranches();
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    BranchesComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    BranchesComponent.prototype.successMessage = function (msg) {
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
    BranchesComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    BranchesComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    BranchesComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return BranchesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__["DataTable"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__["DataTable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__["DataTable"]) === "function" && _a || Object)
], BranchesComponent.prototype, "branchesTable", void 0);
BranchesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-branches',
        template: __webpack_require__("../../../../../src/app/layout/branches/components/branches/branches.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/branches/components/branches/branches.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__branches_services_branches_service__["a" /* BranchesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__branches_services_branches_service__["a" /* BranchesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object])
], BranchesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=branches.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/branches/components/create-branch/create-branch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/branches/components/create-branch/create-branch.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Create Branch'\" [icon]=\"'fa-fw fa-plus'\"></app-page-header>\n  \n  <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create Branch\n    </div>\n\n    <div class=\"clear-filler\"></div>\n    <div class=\"clear-filler\"></div>\n    \n    <form role=\"form\" (ngSubmit)=\"createBranch()\" ngNativeValidate>\n      <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-lg-12 form-group\">\n              <h4>Branch Details</h4>\n          </div>\n        </div>\n      \n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Name <span>*</span></label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" required>\n          </div>\n        </div>\n      \n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Address 1</label>\n            <div class=\"input-group\">\n              <input \n                type=\"text\" \n                class=\"form-control\" name=\"address1\" [(ngModel)]=\"address1\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Address 2</label>\n            <div class=\"input-group\">\n              <input \n                type=\"text\" \n                class=\"form-control\" name=\"address2\" [(ngModel)]=\"address2\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-4\">\n            <label>City</label>\n            <div class=\"input-group\">\n              <input \n                type=\"text\" \n                class=\"form-control\" name=\"city\" [(ngModel)]=\"city\">\n            </div>\n          </div>\n        \n          <div class=\"col-lg-4\">\n            <label>Region</label>\n            <div class=\"input-group\">\n              <input \n                type=\"text\" \n                class=\"form-control\" name=\"state\" [(ngModel)]=\"state\">\n            </div>\n          </div>\n\n          <div class=\"col-lg-4\">\n            <label>Zipcode</label>\n            <div class=\"input-group\">\n              <input \n                type=\"text\" \n                class=\"form-control\" name=\"zipcode\" [(ngModel)]=\"zipcode\">\n            </div>\n          </div>  \n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>Country</label>\n            <div class=\"input-group\">\n              <input \n                type=\"text\" \n                class=\"form-control\" name=\"country\" [(ngModel)]=\"country\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>Latitude </label>\n            <div class=\"input-group\">\n              <input \n                type=\"number\"\n                step=\"any\" \n                class=\"form-control\" name=\"latitude\" [(ngModel)]=\"latitude\">\n            </div>\n          </div>\n\n          <div class=\"col-lg-6\">\n            <label>Longitude </label>\n            <div class=\"input-group\">\n              <input \n                type=\"number\"\n                step=\"any\" \n                class=\"form-control\" name=\"longitude\" [(ngModel)]=\"longitude\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Email Address</label>\n            <div class=\"input-group\">\n              <input \n                type=\"text\" \n                class=\"form-control\" name=\"email\" [(ngModel)]=\"email\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Contact Number</label>\n            <div class=\"input-group\">\n              <input \n                type=\"text\" \n                class=\"form-control\" name=\"contactNumber\" [(ngModel)]=\"contactNumber\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>Opens At:</label>\n            <div class=\"input-group\">\n              <input \n                type=\"text\" \n                class=\"form-control\" name=\"opensAt\" [(ngModel)]=\"opensAt\">\n            </div>\n          </div>\n\n          <div class=\"col-lg-6\">\n            <label>Closes At:</label>\n            <div class=\"input-group\">\n              <input \n                type=\"text\" \n                class=\"form-control\" name=\"closesAt\" [(ngModel)]=\"closesAt\">\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"clear-filler\"></div>\n        <div class=\"clear-filler\"></div>\n        \n        <div class=\"col-lg-12 text-center form-group\">\n          <div class=\"col-lg-2 col-lg-offset-4\">\n            <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n          </div>\n          <div class=\"col-lg-2\">\n              <button \n                type=\"button\" \n                routerLink=\"/branches\" \n                class=\"btn btn-warning\"> \n                  Cancel \n              </button>\n          </div>\n        </div>\n\n        \n      </div>\n      <div class=\"clear-filler\"></div>\n\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n      </div>\n\n        <div class=\"clear-filler\"></div>\n    </form>\n    \n    \n  \n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/branches/components/create-branch/create-branch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBranchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__branches_services_branches_service__ = __webpack_require__("../../../../../src/app/layout/branches/services/branches.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__branches_model_branches_model__ = __webpack_require__("../../../../../src/app/layout/branches/model/branches.model.ts");
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







var CreateBranchComponent = (function () {
    function CreateBranchComponent(branchesService, layoutService, modalService, router) {
        this.branchesService = branchesService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.router = router;
        this.errorMessage = "Unexpected error encountered.";
        this.branchDetails = new __WEBPACK_IMPORTED_MODULE_5__branches_model_branches_model__["a" /* branchDetailsDto */];
        this.name = '';
        this.address1 = '';
        this.address2 = '';
        this.city = '';
        this.state = '';
        this.zipcode = '';
        this.country = '';
        this.email = '';
        this.contactNumber = '';
        this.opensAt = '';
        this.closesAt = '';
        this.alerts = [];
    }
    CreateBranchComponent.prototype.ngOnInit = function () { };
    CreateBranchComponent.prototype.createBranch = function () {
        var param = [];
        param.push({
            "address": {
                "address1": this.address1,
                "address2": this.address2,
                "city": this.city,
                "state": this.state,
                "zipcode": this.zipcode,
                "country": this.country,
                "location": {
                    "latitude": this.latitude,
                    "longitude": this.longitude
                }
            },
            "contactNumbers": [
                this.contactNumber
            ],
            "name": this.name,
            "email": this.email,
            "openAt": this.opensAt,
            "closesAt": this.closesAt,
        });
        this.saveBranch(param[0]);
    };
    CreateBranchComponent.prototype.saveBranch = function (branchDetails) {
        var _this = this;
        console.log(branchDetails);
        this.branchesService.createBranch(branchDetails).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('Branch successfully added.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('branches');
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CreateBranchComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    CreateBranchComponent.prototype.successMessage = function (msg) {
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
    CreateBranchComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    CreateBranchComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    CreateBranchComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return CreateBranchComponent;
}());
CreateBranchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-branch',
        template: __webpack_require__("../../../../../src/app/layout/branches/components/create-branch/create-branch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/branches/components/create-branch/create-branch.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__branches_services_branches_service__["a" /* BranchesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__branches_services_branches_service__["a" /* BranchesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object])
], CreateBranchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-branch.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/branches/components/update-branch/update-branch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/branches/components/update-branch/update-branch.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n    <app-page-header [heading]=\"'Update Branch'\" [icon]=\"'fa-fw fa-pencil-square-o'\"></app-page-header>\n    \n    <!-- <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert> -->\n\n    <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Update Branch\n      </div>\n  \n      <div class=\"clear-filler\"></div>\n      <div class=\"clear-filler\"></div>\n      \n      <form role=\"form\" (ngSubmit)=\"updateBranch()\" ngNativeValidate>\n          <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n          <div class=\"col-lg-12\">\n              <div class=\"col-lg-12 form-group\">\n                <h4>Branch Details</h4>\n            </div>\n          </div>\n        \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Name <span>*</span></label>\n              <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" required>\n            </div>\n          </div>\n\n          \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Address 1</label>\n              <div class=\"input-group\">\n                <input \n                  type=\"text\" \n                  class=\"form-control\" name=\"address1\" [(ngModel)]=\"address1\">\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Address 2</label>\n              <div class=\"input-group\">\n                <input \n                  type=\"text\" \n                  class=\"form-control\" name=\"address2\" [(ngModel)]=\"address2\">\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-4\">\n              <label>City</label>\n              <div class=\"input-group\">\n                <input \n                  type=\"text\" \n                  class=\"form-control\" name=\"city\" [(ngModel)]=\"city\">\n              </div>\n            </div>\n          \n            <div class=\"col-lg-4\">\n              <label>Region</label>\n              <div class=\"input-group\">\n                <input \n                  type=\"text\" \n                  class=\"form-control\" name=\"state\" [(ngModel)]=\"state\">\n              </div>\n            </div>\n  \n            <div class=\"col-lg-4\">\n              <label>Zipcode</label>\n              <div class=\"input-group\">\n                <input \n                  type=\"text\" \n                  class=\"form-control\" name=\"zipcode\" [(ngModel)]=\"zipcode\">\n              </div>\n            </div>  \n          </div>\n  \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>Country</label>\n              <div class=\"input-group\">\n                <input \n                  type=\"text\" \n                  class=\"form-control\" name=\"country\" [(ngModel)]=\"country\">\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>Latitude </label>\n              <div class=\"input-group\">\n                <input \n                  type=\"number\"\n                  step=\"any\" \n                  class=\"form-control\" name=\"latitude\" [(ngModel)]=\"latitude\">\n              </div>\n            </div>\n  \n            <div class=\"col-lg-6\">\n              <label>Longitude </label>\n              <div class=\"input-group\">\n                <input \n                  type=\"number\"\n                  step=\"any\" \n                  class=\"form-control\" name=\"longitude\" [(ngModel)]=\"longitude\">\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Email Address</label>\n              <div class=\"input-group\">\n                <input \n                  type=\"text\" \n                  class=\"form-control\" name=\"email\" [(ngModel)]=\"email\">\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Contact Number</label>\n              <div class=\"input-group\">\n                <input \n                  type=\"text\" \n                  class=\"form-control\" name=\"contactNumber\" [(ngModel)]=\"contactNumber\">\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>Opens At:</label>\n              <div class=\"input-group\">\n                <input \n                  type=\"text\" \n                  class=\"form-control\" name=\"opensAt\" [(ngModel)]=\"opensAt\">\n              </div>\n            </div>\n  \n            <div class=\"col-lg-6\">\n              <label>Closes At:</label>\n              <div class=\"input-group\">\n                <input \n                  type=\"text\" \n                  class=\"form-control\" name=\"closesAt\" [(ngModel)]=\"closesAt\">\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"clear-filler\"></div>\n          <div class=\"clear-filler\"></div>\n          <div class=\"col-lg-12 text-center form-group\">\n            <div class=\"col-lg-2 col-lg-offset-4\">\n              <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n            </div>\n            <div class=\"col-lg-2\">\n                <button \n                  type=\"button\" \n                  routerLink=\"/branches\" \n                  class=\"btn btn-warning\"> \n                    Cancel \n                </button>\n            </div>\n          </div>\n  \n        </div>\n      </form>\n      <div class=\"clear-filler\"></div>\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n          <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        </div>\n      <div class=\"clear-filler\"></div>\n    \n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/branches/components/update-branch/update-branch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateBranchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__branches_services_branches_service__ = __webpack_require__("../../../../../src/app/layout/branches/services/branches.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__branches_model_branches_model__ = __webpack_require__("../../../../../src/app/layout/branches/model/branches.model.ts");
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







var UpdateBranchComponent = (function () {
    function UpdateBranchComponent(branchesService, layoutService, modalService, activatedRoute, router) {
        this.branchesService = branchesService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.errorMessage = "Unexpected error encountered.";
        this.branchDetails = new __WEBPACK_IMPORTED_MODULE_5__branches_model_branches_model__["a" /* branchDetailsDto */];
        this.name = '';
        this.address1 = '';
        this.address2 = '';
        this.city = '';
        this.state = '';
        this.zipcode = '';
        this.country = '';
        this.email = '';
        this.contactNumber = '';
        this.opensAt = '';
        this.closesAt = '';
        this.alerts = [];
    }
    UpdateBranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.selectedBranchId = params['id'];
            _this.readBranch(_this.selectedBranchId);
        });
    };
    UpdateBranchComponent.prototype.readBranch = function (selectedBranchId) {
        var _this = this;
        this.branchesService.readBranch(selectedBranchId).subscribe(function (data) {
            console.log(data);
            //data = data[0]; // remove on prod
            _this.name = data.name;
            _this.address1 = data.address.address1;
            _this.address2 = data.address.address2;
            _this.city = data.address.city;
            _this.state = data.address.state;
            _this.zipcode = data.address.zipcode;
            _this.country = data.address.country;
            _this.latitude = data.address.location.latitude;
            _this.longitude = data.address.location.longitude;
            _this.contactNumber = data.contactNumbers[0];
            _this.email = data.email;
            _this.opensAt = data.openAt;
            _this.closesAt = data.closesAt;
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    UpdateBranchComponent.prototype.updateBranch = function () {
        var param = [];
        param.push({
            "address": {
                "address1": this.address1,
                "address2": this.address2,
                "city": this.city,
                "state": this.state,
                "zipcode": this.zipcode,
                "country": this.country,
                "location": {
                    "latitude": this.latitude,
                    "longitude": this.longitude
                }
            },
            "contactNumbers": [
                this.contactNumber
            ],
            "name": this.name,
            "email": this.email,
            "openAt": this.opensAt,
            "closesAt": this.closesAt,
        });
        this.saveBranch(param[0]);
    };
    UpdateBranchComponent.prototype.saveBranch = function (branchDetails) {
        var _this = this;
        console.log(branchDetails);
        this.branchesService.updateBranch(branchDetails, this.selectedBranchId).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('Branch successfully updated.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('branches');
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    UpdateBranchComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    UpdateBranchComponent.prototype.successMessage = function (msg) {
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
    UpdateBranchComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    UpdateBranchComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    UpdateBranchComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return UpdateBranchComponent;
}());
UpdateBranchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-branch',
        template: __webpack_require__("../../../../../src/app/layout/branches/components/update-branch/update-branch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/branches/components/update-branch/update-branch.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__branches_services_branches_service__["a" /* BranchesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__branches_services_branches_service__["a" /* BranchesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _e || Object])
], UpdateBranchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=update-branch.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/branches/model/branches.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return branchDetailsDto; });
var branchDetailsDto = (function () {
    function branchDetailsDto() {
    }
    return branchDetailsDto;
}());

//# sourceMappingURL=branches.model.js.map

/***/ })

});
//# sourceMappingURL=branches.module.chunk.js.map