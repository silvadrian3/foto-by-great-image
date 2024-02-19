webpackJsonp(["products.module"],{

/***/ "../../../../../src/app/layout/products/components/create-product/create-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/products/components/create-product/create-product.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Create Product'\" [icon]=\"'fa-fw fa-plus'\"></app-page-header>\n  \n  <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create Product\n    </div>\n\n    <div class=\"clear-filler\"></div>\n    <div class=\"clear-filler\"></div>\n    \n    <form role=\"form\" (ngSubmit)=\"createProduct()\" ngNativeValidate>\n      <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-lg-12 form-group\">\n              <h4>Product Details</h4>\n          </div>\n        </div>\n      \n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Name <span>*</span></label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" required>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-12\">\n            <label>Credit Type <span>*</span></label>\n            <select class=\"form-control\" name=\"creditType\" [(ngModel)]=\"creditType\" required>\n              <option value=\"\"> - - - Please Select - - - </option>\n              <option value=\"ALL\"> ALL </option>\n              <option value=\"RETAIL\"> RETAIL </option>\n            </select>\n          </div>\n        </div>\n      \n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>Credits </label>\n            <div class=\"input-group\">\n              <input \n                type=\"number\" \n                step=\"any\" \n                class=\"form-control\" name=\"credits\" [(ngModel)]=\"credits\" placeholder=\"0\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>Price </label>\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"price-ico\">PHP</span>\n              <input \n                type=\"number\" \n                step=\"any\" \n                class=\"form-control\" name=\"price\" [(ngModel)]=\"price\" aria-describedby=\"price-ico\" placeholder=\"0.00\">\n            </div>\n          </div>\n        </div>\n        \n        <!-- <div class=\"col-lg-12 form-group\">\n          <div class=\"col-lg-6\">\n            <label>Contact Number</label>\n            <input type=\"text\" class=\"form-control\" name=\"contactnumber\" [(ngModel)]=\"contactnumber\">\n          </div>\n        </div> -->\n\n        \n\n        <div class=\"clear-filler\"></div>\n        <div class=\"clear-filler\"></div>\n        \n        <div class=\"col-lg-12 text-center form-group\">\n          <div class=\"col-lg-2 col-lg-offset-4\">\n            <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n          </div>\n          <div class=\"col-lg-2\">\n              <button \n                type=\"button\" \n                routerLink=\"/products\" \n                class=\"btn btn-warning\"> \n                  Cancel \n              </button>\n          </div>\n        </div>\n\n        \n      </div>\n      <div class=\"clear-filler\"></div>\n\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n      </div>\n\n        <div class=\"clear-filler\"></div>\n    </form>\n    \n    \n  \n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/products/components/create-product/create-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_services_products_service__ = __webpack_require__("../../../../../src/app/layout/products/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_model_products_model__ = __webpack_require__("../../../../../src/app/layout/products/model/products.model.ts");
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







var CreateProductComponent = (function () {
    function CreateProductComponent(productService, layoutService, modalService, router) {
        this.productService = productService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.router = router;
        this.errorMessage = "Unexpected error encountered.";
        this.productDetails = new __WEBPACK_IMPORTED_MODULE_5__products_model_products_model__["a" /* productDetailsDto */];
        this.name = '';
        this.creditType = '';
        this.alerts = [];
    }
    CreateProductComponent.prototype.ngOnInit = function () { };
    CreateProductComponent.prototype.createProduct = function () {
        var param = [];
        param.push({
            "name": this.name,
            "price": this.price,
            "creditType": this.creditType,
            "credits": this.credits
        });
        this.saveProduct(param[0]);
    };
    CreateProductComponent.prototype.saveProduct = function (productDetails) {
        var _this = this;
        this.productService.createProduct(productDetails).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('Product successfully added.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('products');
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CreateProductComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    CreateProductComponent.prototype.successMessage = function (msg) {
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
    CreateProductComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    CreateProductComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    CreateProductComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return CreateProductComponent;
}());
CreateProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-product',
        template: __webpack_require__("../../../../../src/app/layout/products/components/create-product/create-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/products/components/create-product/create-product.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__products_services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__products_services_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object])
], CreateProductComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/products/components/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-action {\n    margin: 0 3px;\n    cursor: pointer;\n}\n\n.row-search {\n    color: #FF8D33;\n}\n\n.row-edit {\n    color: #33A2FF;\n}\n\n.row-delete {\n    color: #ff0000;\n}\n\n.pagination-box {\n    margin-top: 1% !important;\n}\n\n.pagination-page .input-group .input-group-addon {\n    display: inline;\n}\n\n.index-column-header, .index-column {\n    text-align: center;\n}\n\n.column-header {\n    text-align: center;\n    font-weight: 700;\n}\n\n.data-column {\n    word-wrap: break-word;\n}\n\n.column-header.column-action {\n    width: 10%;\n}\n\n.data-column.column-action {\n    text-align: center;\n}\n\n.column-header.column-price {\n    width: 20%;\n}\n\n.data-column.column-price {\n    text-align: right;\n}\n\n.column-header.column-name {\n    width: 30%;\n}\n\n.column-header.column-creditType {\n    width: 20%;\n}\n\n.column-header.column-credits {\n    width: 20%;\n}\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/products/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Products'\" [icon]=\"'fa-fw fa-tags'\"></app-page-header>\n  \n    <div class=\"card\">\n      \n      <div class=\"card-header\">\n        <i class=\"fa fa-fw fa-tags\" aria-hidden=\"true\"></i> Products\n        \n      </div>\n\n      <div class=\"clear-filler\"></div>\n      \n  \n      <div class=\"col-lg-12\">\n\n        <div class=\"col-lg-3\">\n            <!-- <div class=\"pull-left\">\n              <div class=\"input-group\">\n                  <span class=\"input-group-btn\">\n                      <button type=\"button\" class=\"btn btn-info\">\n                          <i class=\"fa fa-search\"></i>\n                      </button>\n                  </span>  \n                <input #gb type=\"text\" pInputText class=\"form-control\" placeholder=\"Search\">\n              </div>\n            </div> -->\n        </div>\n\n        <div class=\"col-lg-3 col-lg-offset-6\">\n            <div class=\"pull-right\">\n              <button type=\"button\" routerLink=\"create-product\" class=\"btn btn-info pull-right\">Create Product</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12\" >\n          <div class=\"col-lg-12 table-responsive\">\n            <div class=\"clear-filler\"></div>\n            <div class=\"clear-filler\"></div> \n            <!--\n            <p-dataTable \n              [value]=\"products\"\n              sortMode=\"multiple\"\n              [rows]=\"10\"\n              [paginator]=\"true\"\n              [pageLinks]=\"3\"\n              [responsive]=\"true\"\n              [rowsPerPageOptions]=\"[10,25,50,100]\"\n              [globalFilter]=\"gb\" #dt> \n              <p-column\n                field=\"name\"\n                header=\"Name\"\n                [sortable]=\"true\"\n                [style]=\"{'width':'20%'}\"> \n              </p-column>\n\n              <p-column\n                field=\"creditType\"\n                header=\"Type\"\n                [sortable]=\"true\"\n                [style]=\"{'width':'15%'}\"> \n              </p-column>\n\n              <p-column\n                field=\"credits\"\n                header=\"Credits\"\n                [sortable]=\"true\"\n                [style]=\"{'width':'14%'}\"> \n              </p-column>\n\n              <p-column \n                field=\"price\" \n                header=\"Price\" \n                [sortable]=\"true\" \n                [style]=\"{'width':'20%', 'text-align':'center'}\">\n                <ng-template \n                  let-productDetails=\"rowData\" \n                  pTemplate=\"body\">\n                    {{ productDetails.price | currency: 'PHP': true}}\n                </ng-template>  \n              </p-column>\n\n              <p-column\n                field=\"action\"\n                header=\"Action\"\n                [sortable]=\"false\"\n                [style]=\"{'width':'10%', 'text-align': 'center'}\">\n                <ng-template \n                  let-ProductDetails=\"rowData\"\n                  pTemplate=\"body\">\n                    <span \n                      class=\"fa fa-search row-action row-search\" \n                      title=\"View\" \n                      (click)=\"getProductDetailsRow(ProductDetails.productId); open(content)\">\n                    </span>\n                    <span \n                      class=\"fa fa-pencil row-action row-edit\"\n                      title=\"Update\"\n                      [routerLink]=\"['update-product']\"\n                      [queryParams]=\"{id:ProductDetails.productId}\">\n                    </span>\n                    <span \n                      class=\"fa fa-times row-action row-delete\"\n                      title=\"Archive\"\n                      (click)=\"deleteProductDetailsRow(ProductDetails.productId)\">\n                    </span>\n                </ng-template>\n              </p-column>\n            </p-dataTable>\n          -->\n          \n            <data-table id=\"products-grid\"\n                headerTitle=\"\"\n                [items]=\"products\"\n                [itemCount]=\"productCount\"\n                (reload)=\"reloadProducts($event)\"\n                [limit]=\"10\"\n                [sortBy]=\"'name'\"\n                [sortAsc]=\"true\"\n                [selectColumn]=\"false\"\n                [multiSelect]=\"false\"\n                [substituteRows]=\"false\"\n                [expandableRows]=\"false\"\n                [translations]=\"translations\"\n                [indexColumnHeader]=\"'#'\"\n                [selectOnRowClick]=\"true\"\n                >\n                <!-- <ng-template #dataTableExpand let-item=\"item\">\n                    <div [textContent]=\"item.description\" style=\"padding: 5px; color: gray\"></div>\n                </ng-template>\n                 -->\n                <data-table-column\n                    [property]=\"'name'\"\n                    [header]=\"'Name'\"\n                    [sortable]=\"true\">\n                </data-table-column>\n                <data-table-column\n                    [property]=\"'creditType'\"\n                    [header]=\"'Type'\"\n                    [sortable]=\"true\">\n                </data-table-column>\n                <data-table-column\n                    [property]=\"'credits'\"\n                    [header]=\"'Credits'\"\n                    [sortable]=\"true\">\n                </data-table-column>\n                <data-table-column\n                  [property]=\"'price'\"\n                  [header]=\"'Price'\"\n                  [sortable]=\"true\">\n                  <ng-template #dataTableCell let-item=\"item\">\n                    {{ item.price | currency: 'PHP': true}}\n                  </ng-template>\n                </data-table-column>\n\n                <!-- <data-table-column\n                    [property]=\"'name'\"\n                    [header]=\"'Name + Credit Type'\"\n                    [sortable]=\"true\">\n                    <ng-template #dataTableCell let-item=\"item\">\n                      <span>{{ item.name + ' ' + item.creditType}}</span>\n                  </ng-template> \n                </data-table-column>\n                -->\n\n                <data-table-column\n                [property]=\"'action'\"\n                [header]=\"'Action'\"\n                style=\"width:10%;\">\n                <ng-template #dataTableCell let-item=\"item\">\n                    <span \n                      class=\"fa fa-search row-action row-search\" \n                      title=\"View\" \n                      (click)=\"getProductDetailsRow(item.productId); open(content)\">\n                    </span>\n                    <span \n                      class=\"fa fa-pencil row-action row-edit\"\n                      title=\"Update\"\n                      [routerLink]=\"['update-product']\"\n                      [queryParams]=\"{id:item.productId}\">\n                    </span>\n                    <span \n                      class=\"fa fa-times row-action row-delete\"\n                      title=\"Archive\"\n                      (click)=\"deleteProductDetailsRow(item.productId)\">\n                    </span>\n                </ng-template>\n                </data-table-column>\n            </data-table>\n\n            <!-- <div style=\"margin-top: 10px\">\n                <b>Selected:</b>\n                <span *ngIf=\"productsTable.selectedRow == null\"><i>No item selected</i></span>\n                <span [textContent]=\"productsTable.selectedRow && productsTable.selectedRow.item.title\"></span>\n            </div> -->\n          \n            <div class=\"clear-filler\"></div> \n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n        <div class=\"col-lg-12\">\n          <div class=\"col-lg-12 text-center\">\n            <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n          </div>\n        </div>\n        <div class=\"clear-filler\"></div>\n\n\n\n\n\n\n      <!-- Start - Modal -->\n      <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\"> Product Details</h6>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n              <label>Name</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>\n                {{ selectedProductDetails.name }}\n                <span [hidden]=\"selectedProductDetails.name != ''\">N/A</span>\n              </p>\n            </div>\n          </div>\n\n          \n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Type</label>\n            </div>\n            <div class=\"col-lg-6\">\n              <p>{{ selectedProductDetails.creditType }}</p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12\">\n              <div class=\"col-lg-6\">\n                <label>Credits</label>\n              </div>\n              <div class=\"col-lg-6\">\n                <p>{{ selectedProductDetails.credits }}</p>\n              </div>\n            </div>\n\n            <div class=\"col-lg-12\">\n              <div class=\"col-lg-6\">\n              <label>Price</label>\n              </div>\n              <div class=\"col-lg-6\">\n                <p>\n                  {{ selectedProductDetails.price | currency : 'PHP' : true }}\n              </p>\n              </div>\n            </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n            <label>Date Modified</label>\n            </div>\n            <div class=\"col-lg-6\">\n            <p *ngIf=\"selectedProductDetails.updatedTime != null\">{{ selectedProductDetails.updatedTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n            <p *ngIf=\"selectedProductDetails.updatedTime == null\">{{ selectedProductDetails.createdTime | date : 'dd MMM yyyy hh:mm a' }}</p>\n            </div>\n          </div>\n\n\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"col-lg-12\"> \n            <div class=\"text-center col-lg-12\">\n              <button \n                type=\"button\" \n                class=\"btn btn-secondary\" \n                style=\"margin: 3px 10px;\" \n                (click)=\"d('Cross click')\">\n                Close\n              </button>\n            </div>\n            <div class=\"clear-filler\"></div>\n          \n        </div>\n          \n      </div>\n      </ng-template>\n      <!-- End - Modal -->\n\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/products/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_services_products_service__ = __webpack_require__("../../../../../src/app/layout/products/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_model_products_model__ = __webpack_require__("../../../../../src/app/layout/products/model/products.model.ts");
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







var ProductsComponent = (function () {
    function ProductsComponent(productsService, layoutService, modalService, renderer, elem) {
        this.productsService = productsService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.renderer = renderer;
        this.elem = elem;
        this.errorMessage = "Unexpected error encountered.";
        this.productDetails = new __WEBPACK_IMPORTED_MODULE_4__products_model_products_model__["a" /* productDetailsDto */];
        this.loading = false;
        this.products = [];
        this.productCount = 0;
        this.alerts = [];
        this.translations = {
            indexColumn: '#',
            expandColumn: 'Expand column',
            selectColumn: 'Select column',
            paginationLimit: 'Limit',
            paginationRange: 'Results'
        };
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.loading = true;
        this.productsService.getProducts().subscribe(function (data) {
            console.log(data);
            if (data != undefined) {
                _this.products = data;
                _this.dtProductsResource = new __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTableResource"](_this.products);
                _this.dtProductsResource.count().then(function (count) { return _this.productCount = count; });
                _this.productsTable.reloadItems();
                _this.loading = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductsComponent.prototype.reloadProducts = function (params) {
        var _this = this;
        if (this.dtProductsResource != undefined) {
            this.dtProductsResource.query(params).then(function (products) { return _this.products = products; });
        }
    };
    ProductsComponent.prototype.cellColor = function (car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };
    ;
    ProductsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { 'size': 'lg', backdrop: 'static', keyboard: false }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ProductsComponent.prototype.getDismissReason = function (reason) {
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
    ProductsComponent.prototype.getProductDetailsRow = function (id) {
        var _this = this;
        this.products.forEach(function (item, index) {
            if (item.productId == id) {
                console.log('id', id);
                console.log('item.id', item.productId);
                _this.selectedProductDetails = _this.products[index];
                return false;
            }
        });
    };
    ProductsComponent.prototype.deleteProductDetailsRow = function (id) {
        if (confirm("Are you sure you want to archive this product?")) {
            this.deleteProduct(id);
        }
    };
    ProductsComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.productsService.deleteProduct(id).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('Product successfully archived.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.getProducts();
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductsComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    ProductsComponent.prototype.successMessage = function (msg) {
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
    ProductsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    ProductsComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    ProductsComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return ProductsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTable"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_2_data_table__["DataTable"]) === "function" && _a || Object)
], ProductsComponent.prototype, "productsTable", void 0);
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/layout/products/components/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/products/components/products/products.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__products_services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__products_services_products_service__["a" /* ProductsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__layout_service__["a" /* LayoutService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object])
], ProductsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/products/components/update-product/update-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-body label span {\n    color:#ff0000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/products/components/update-product/update-product.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n    <app-page-header [heading]=\"'Update Product'\" [icon]=\"'fa-fw fa-pencil-square-o'\"></app-page-header>\n    \n    <!-- <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert> -->\n\n    <div class=\"col-lg-8 col-lg-offset-2 form-group\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Update Product\n      </div>\n  \n      <div class=\"clear-filler\"></div>\n      <div class=\"clear-filler\"></div>\n      \n      <form role=\"form\" (ngSubmit)=\"updateProduct()\" ngNativeValidate>\n          <div class=\"col-lg-10 col-lg-offset-1 form-body\">\n          <div class=\"col-lg-12\">\n              <div class=\"col-lg-12 form-group\">\n                <h4>Product Details</h4>\n            </div>\n          </div>\n        \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Name <span>*</span></label>\n              <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" required>\n            </div>\n          </div>\n\n          \n\n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-12\">\n              <label>Credit Type <span>*</span></label>\n              <select class=\"form-control\" name=\"creditType\" [(ngModel)]=\"creditType\" required>\n                <option value=\"\"> - - - Please Select - - - </option>\n                <option value=\"ALL\"> ALL </option>\n                <option value=\"RETAIL\"> RETAIL </option>\n              </select>\n            </div>\n          </div>\n  \n  \n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>Credits </label>\n              <div class=\"input-group\">\n                <input \n                  type=\"number\" \n                  step=\"any\" \n                  class=\"form-control\" name=\"credits\" [(ngModel)]=\"credits\" placeholder=\"0\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-12 form-group\">\n            <div class=\"col-lg-6\">\n              <label>Price </label>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\" id=\"price-ico\">PHP</span>\n                <input \n                  type=\"number\" \n                  step=\"any\" \n                  class=\"form-control\" name=\"price\" [(ngModel)]=\"price\" aria-describedby=\"price-ico\" placeholder=\"0.00\">\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"clear-filler\"></div>\n          <div class=\"clear-filler\"></div>\n          <div class=\"col-lg-12 text-center form-group\">\n            <div class=\"col-lg-2 col-lg-offset-4\">\n              <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\n            </div>\n            <div class=\"col-lg-2\">\n                <button \n                  type=\"button\" \n                  routerLink=\"/products\" \n                  class=\"btn btn-warning\"> \n                    Cancel \n                </button>\n            </div>\n          </div>\n  \n        </div>\n      </form>\n      <div class=\"clear-filler\"></div>\n      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n          <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        </div>\n      <div class=\"clear-filler\"></div>\n    \n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/products/components/update-product/update-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_services_products_service__ = __webpack_require__("../../../../../src/app/layout/products/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__("../../../../../src/app/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_model_products_model__ = __webpack_require__("../../../../../src/app/layout/products/model/products.model.ts");
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







//import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';
var UpdateProductComponent = (function () {
    function UpdateProductComponent(productsService, layoutService, modalService, activatedRoute, router) {
        this.productsService = productsService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.errorMessage = "Unexpected error encountered.";
        this.productDetails = new __WEBPACK_IMPORTED_MODULE_5__products_model_products_model__["a" /* productDetailsDto */];
        this.name = '';
        this.creditType = '';
        this.alerts = [];
    }
    UpdateProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.selectedProductId = params['id'];
            _this.readProduct(_this.selectedProductId);
        });
    };
    UpdateProductComponent.prototype.readProduct = function (selectedProductId) {
        var _this = this;
        this.productsService.readProduct(selectedProductId).subscribe(function (data) {
            console.log(data);
            _this.name = data.name;
            _this.price = data.price;
            _this.creditType = data.creditType;
            _this.credits = data.credits;
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
    UpdateProductComponent.prototype.updateProduct = function () {
        var param = [];
        param.push({
            "name": this.name,
            "price": this.price,
            "creditType": this.creditType,
            "credits": this.credits
        });
        this.saveProduct(param[0]);
    };
    UpdateProductComponent.prototype.saveProduct = function (productDetails) {
        var _this = this;
        this.productsService.updateProduct(productDetails, this.selectedProductId).subscribe(function (data) {
            if (!_this.isEmpty(data)) {
                _this.successMessage('Product successfully updated.');
                setTimeout(function () {
                    _this.closeActiveAlert();
                    _this.router.navigateByUrl('products');
                }, 3000);
            }
            else {
                _this.errMessage(_this.errorMessage);
            }
        }, function (err) {
            console.log(err);
        });
    };
    UpdateProductComponent.prototype.errMessage = function (msg) {
        this.closeActiveAlert();
        this.alerts.push({
            id: 1,
            type: 'danger',
            message: msg
        });
        return false;
    };
    UpdateProductComponent.prototype.successMessage = function (msg) {
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
    UpdateProductComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    UpdateProductComponent.prototype.closeActiveAlert = function () {
        this.alerts.splice(0, 1);
    };
    UpdateProductComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    return UpdateProductComponent;
}());
UpdateProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-product',
        template: __webpack_require__("../../../../../src/app/layout/products/components/update-product/update-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/products/components/update-product/update-product.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__products_services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__products_services_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _e || Object])
], UpdateProductComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=update-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/products/model/products.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productDetailsDto; });
var productDetailsDto = (function () {
    function productDetailsDto() {
    }
    return productDetailsDto;
}());

//# sourceMappingURL=products.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/products/products-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_products_products_component__ = __webpack_require__("../../../../../src/app/layout/products/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_create_product_create_product_component__ = __webpack_require__("../../../../../src/app/layout/products/components/create-product/create-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_update_product_update_product_component__ = __webpack_require__("../../../../../src/app/layout/products/components/update-product/update-product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_products_products_component__["a" /* ProductsComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_2__components_products_products_component__["a" /* ProductsComponent */] },
    { path: 'create-product', component: __WEBPACK_IMPORTED_MODULE_3__components_create_product_create_product_component__["a" /* CreateProductComponent */] },
    { path: 'update-product', component: __WEBPACK_IMPORTED_MODULE_4__components_update_product_update_product_component__["a" /* UpdateProductComponent */] },
];
var ProductsRoutingModule = (function () {
    function ProductsRoutingModule() {
    }
    return ProductsRoutingModule;
}());
ProductsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], ProductsRoutingModule);

//# sourceMappingURL=products-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/products/products.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_routing_module__ = __webpack_require__("../../../../../src/app/layout/products/products-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__ = __webpack_require__("../../../../angular-2-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_products_service__ = __webpack_require__("../../../../../src/app/layout/products/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_products_products_component__ = __webpack_require__("../../../../../src/app/layout/products/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_create_product_create_product_component__ = __webpack_require__("../../../../../src/app/layout/products/components/create-product/create-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_update_product_update_product_component__ = __webpack_require__("../../../../../src/app/layout/products/components/update-product/update-product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { NgxMyDatePickerModule } from 'ngx-mydatepicker';












var ProductsModule = (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
ProductsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__products_routing_module__["a" /* ProductsRoutingModule */],
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
        declarations: [__WEBPACK_IMPORTED_MODULE_11__components_products_products_component__["a" /* ProductsComponent */], __WEBPACK_IMPORTED_MODULE_12__components_create_product_create_product_component__["a" /* CreateProductComponent */], __WEBPACK_IMPORTED_MODULE_13__components_update_product_update_product_component__["a" /* UpdateProductComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_products_service__["a" /* ProductsService */]]
    })
], ProductsModule);

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/products/services/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
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







var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
        this.env = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].envName.toLocaleLowerCase();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].baseUrl;
        this.apiPath = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].apiPath;
    }
    ProductsService.prototype.getProducts = function () {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            path = "/read-product.json";
        }
        else {
            path = "/product/?status=ACTIVE";
        }
        query = this.baseUrl + this.apiPath + path;
        result = this.http.get(encodeURI(query)).map(function (res) { return res.json(); });
        return result;
    };
    ProductsService.prototype.createProduct = function (param) {
        console.log(param);
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/product/";
            query = this.baseUrl + this.apiPath + path;
            result = this.http.post(encodeURI(query), param, options).map(function (res) { return res.json(); });
        }
        return result;
    };
    ProductsService.prototype.readProduct = function (id) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            path = "/read-product.json";
        }
        else {
            path = "/product/" + id;
        }
        query = this.baseUrl + this.apiPath + path;
        result = this.http.get(encodeURI(query)).map(function (res) { return res.json(); });
        return result;
    };
    ProductsService.prototype.updateProduct = function (param, id) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/product/" + id;
            query = this.baseUrl + this.apiPath + path;
            result = this.http.put(encodeURI(query), param, options).map(function (res) { return res.json(); });
        }
        return result;
    };
    ProductsService.prototype.deleteProduct = function (id) {
        var path = '', options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.getHeaders() }), query = '', result;
        if (this.env == 'local') {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ result: true });
        }
        else {
            path = "/product/" + id;
            query = this.baseUrl + this.apiPath + path;
            result = this.http.put(encodeURI(query), { "status": "INACTIVE" }, options).map(function (res) { return res.json(); });
        }
        return result;
    };
    ProductsService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json"
        });
    };
    ProductsService.prototype._errorHandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || "Server Error");
    };
    return ProductsService;
}());
ProductsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductsService);

var _a;
//# sourceMappingURL=products.service.js.map

/***/ })

});
//# sourceMappingURL=products.module.chunk.js.map