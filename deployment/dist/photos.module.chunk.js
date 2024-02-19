webpackJsonp(["photos.module"],{

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

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<div [@routerTransition]>\n<app-page-header [heading]=\"'Photos'\" [icon]=\"'fa-fw fa-image'\"></app-page-header>\n\n  <div class=\"card\">\n  <form role=\"form\" method=\"post\" enctype=\"multipart/form-data\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> Photos\n    </div>\n\n      <div class=\"col-lg-12 photolist-container\">\n        <expansion-panels-container>\n          <expansion-panel \n            *ngFor=\"let booking of bookings\" \n            (onOpen)=\"callFetchPhotos(booking.bookingId)\">\n              <expansion-panel-title>\n                {{ booking.dateTime | date: 'dd MMM yyyy hh:mm a': true}}\n                <small class=\"text-muted\">{{booking.bookingId}}</small>\n              </expansion-panel-title>\n      \n              <expansion-panel-description-hidden>\n                  <span *ngIf=\"booking.customer != null\">\n                      {{booking.customer.firstName + ' ' + booking.customer.lastName + '&nbsp;&nbsp;' }}\n                  </span>\n                  {{'('+ booking.bookingType.serviceType + ' &mdash; ' + booking.bookingType.name + ')'}}\n              </expansion-panel-description-hidden>\n      \n              <expansion-panel-description-toggled>\n                <span *ngIf=\"booking.customer != null\">\n                  {{booking.customer.firstName + ' ' + booking.customer.lastName + '&nbsp;&nbsp;'}}\n                </span>\n                {{'('+ booking.bookingType.serviceType + ' &mdash; ' + booking.bookingType.name + ')'}}\n              </expansion-panel-description-toggled>\n      \n              <expansion-panel-content>\n                <div class=\"row\">\n                  <div class=\"clear-filler\"></div>\n                  <div class=\"col-lg-12\">\n                    <div class=\"col-lg-12\">\n                      <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n                    </div>\n\n                    <span>\n                      <div class=\"col-lg-3\">\n                        <img \n                          src=\"../../../../../assets/images/add-photos.png\" \n                          class=\"img img-responsive img-thumbnail preview-img-holder\" \n                          (click)=\"fileUploadInput.click()\" />\n\n                        <input \n                          type=\"file\" \n                          style=\"display:none\"\n                          multiple=\"true\"\n                          (change)=\"onFileSelected($event, booking.bookingId)\"\n                          #fileUploadInput>\n                      </div>\n                    </span>\n\n                    <span *ngFor=\"let bookingPhoto of selectedBookingPhotos\">\n                      <div class=\"col-lg-3\" *ngIf=\"bookingPhoto.status == 'ACTIVE'\">\n                        <img \n                          src=\"{{bookingPhoto.raw}}\" \n                          class=\"img img-responsive img-thumbnail preview-img-holder\" \n                          (click)=\"getPhotoDetailsRow(bookingPhoto.photoId); open(content)\" />\n                      </div>\n                    </span>\n                  </div>\n                </div>\n\n              </expansion-panel-content>\n          </expansion-panel>\n        </expansion-panels-container>\n      \n      </div>\n\n      <!-- Start - Modal -->\n      <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n          <div class=\"modal-body\">\n            <div class=\"col-lg-12\">\n              <button type=\"button\" #btnDismiss class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n  \n            <div class=\"col-lg-12 text-center\">\n                <div class=\"clear-filler\"></div>\n                <img \n                  src=\"{{selectedPhoto.raw}}\" \n                  class=\"img img-responsive img-thumbnail\" />\n                <div class=\"clear-filler\"></div>\n            </div>\n          </div>\n          \n          <div class=\"modal-footer\">\n            \n              <div class=\"col-lg-12 text-center\">\n                  <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <small class=\"pull-left text-muted\">\n                    Date Modified: \n                    <span \n                      *ngIf=\"selectedPhoto.updatedTime != null\">\n                      {{ selectedPhoto.updatedTime | date: 'dd MMM yyyy hh:mm a': true}}\n                    </span>\n                    <span \n                      *ngIf=\"selectedPhoto.updatedTime == null && selectedPhoto.createdTime != null\">\n                      {{ selectedPhoto.createdTime | date: 'dd MMM yyyy hh:mm a': true}}\n                    </span>\n                  </small>\n                  <br/>\n                  <a class=\"pull-left\" [href]=\"selectedPhoto.raw\" target=\"_blank\">Download Original Photo</a>\n                </div>\n                  \n                  \n                  \n\n                  <!-- <button \n                    type=\"button\" \n                    class=\"btn btn-success\" \n                    style=\"margin: 3px 10px; width:100px\"\n                    (click)=\"onDownloadPhoto(selectedPhoto.raw)\">\n                    Download\n                  </button> -->\n\n\n                  \n\n                  <div class=\"col-lg-6\">\n                  <button \n                    type=\"button\" \n                    class=\"btn btn-danger pull-right\" \n                    style=\"margin: 3px 10px; width:100px\"\n                    (click)=\"deletePhoto(selectedPhoto.photoId, selectedPhoto.bookingId, 'modal')\">\n                    Delete\n                  </button>\n                  </div>\n                </div>\n                  \n                \n            \n                <div class=\"clear-filler\"></div>\n                  <div class=\"col-lg-12 text-center\">\n                    <ngb-alert [type]=\"modalAlert.type\" (close)=\"closeModalAlert(modalAlert)\" *ngFor=\"let modalAlert of modalAlerts\">{{ modalAlert.message }}</ngb-alert>\n                  </div>\n                </div>\n          </div>\n\n\n        </ng-template>\n        <!-- End - Modal -->\n        \n      \n\n  </form>\n  </div>\n</div>"

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
        this.loggedUserBranch = localStorage.getItem('loggedUserBranch');
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
        this.PhotosService.getCompletedBookings(this.loggedUserBranch).subscribe(function (data) {
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
        this.loading = true;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__photos_routing_module__ = __webpack_require__("../../../../../src/app/layout/photos/photos-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__active_bookings_services_active_bookings_service__ = __webpack_require__("../../../../../src/app/layout/active-bookings/services/active-bookings.service.ts");
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




//import { NgxMyDatePickerModule } from 'ngx-mydatepicker';










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
            __WEBPACK_IMPORTED_MODULE_4__photos_routing_module__["a" /* PhotosRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared__["c" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_expansion_panels__["ExpansionPanelsModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_12__components_photos_photos_component__["a" /* PhotosComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_photos_service__["a" /* PhotosService */], __WEBPACK_IMPORTED_MODULE_10__active_bookings_services_active_bookings_service__["a" /* ActiveBookingsService */]]
    })
], PhotosModule);

//# sourceMappingURL=photos.module.js.map

/***/ }),

/***/ "../../../../ng2-expansion-panels/dist/ng2-expansion-panels.bundle.js":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__("../../../core/@angular/core.es5.js"), __webpack_require__("../../../common/@angular/common.es5.js"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ng2-expansion-panels"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ng2-expansion-panels"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(2);
	var expansion_panel_1 = __webpack_require__(3);
	var expansion_panels_container_1 = __webpack_require__(5);
	var components = [
	    expansion_panels_container_1.ExpansionPanelsContainerComponent,
	    expansion_panel_1.ExpansionPanelComponent,
	    expansion_panel_1.ExpansionPanelTitle,
	    expansion_panel_1.ExpansionPanelContent,
	    expansion_panel_1.ExpansionPanelDescriptionToggled,
	    expansion_panel_1.ExpansionPanelDescriptionHidden,
	    expansion_panel_1.ExpansionPanelButtons
	];
	var ExpansionPanelsModule = (function () {
	    function ExpansionPanelsModule() {
	    }
	    return ExpansionPanelsModule;
	}());
	ExpansionPanelsModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        declarations: components,
	        exports: components,
	        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
	    })
	], ExpansionPanelsModule);
	exports.ExpansionPanelsModule = ExpansionPanelsModule;
	

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(4));
	var directives_1 = __webpack_require__(11);
	exports.ExpansionPanelTitle = directives_1.ExpansionPanelTitle;
	exports.ExpansionPanelContent = directives_1.ExpansionPanelContent;
	exports.ExpansionPanelDescriptionHidden = directives_1.ExpansionPanelDescriptionHidden;
	exports.ExpansionPanelDescriptionToggled = directives_1.ExpansionPanelDescriptionToggled;
	exports.ExpansionPanelButtons = directives_1.ExpansionPanelButtons;
	

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(1);
	var expansion_panels_container_1 = __webpack_require__(5);
	var ExpansionPanelComponent = (function () {
	    function ExpansionPanelComponent(container) {
	        this.container = container;
	        this.onOpen = new core_1.EventEmitter();
	        this.onClose = new core_1.EventEmitter();
	        this.onCancel = new core_1.EventEmitter();
	        this.onSubmit = new core_1.EventEmitter();
	    }
	    ExpansionPanelComponent.prototype.toggle = function () {
	        (this.isToggled) ? this.unselect() : this.select();
	    };
	    Object.defineProperty(ExpansionPanelComponent.prototype, "isToggled", {
	        get: function () {
	            return this.container.selectedPanel === this;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ExpansionPanelComponent.prototype.submit = function () {
	        this.unselect();
	        this.onSubmit.emit();
	    };
	    ExpansionPanelComponent.prototype.cancel = function () {
	        this.unselect();
	        this.onCancel.emit();
	    };
	    ExpansionPanelComponent.prototype.select = function () {
	        this.container.selectedPanel = this;
	        this.onOpen.emit(this);
	    };
	    ExpansionPanelComponent.prototype.unselect = function () {
	        this.container.selectedPanel = undefined;
	        this.onClose.emit(this);
	    };
	    return ExpansionPanelComponent;
	}());
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], ExpansionPanelComponent.prototype, "onOpen", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], ExpansionPanelComponent.prototype, "onClose", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], ExpansionPanelComponent.prototype, "onCancel", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], ExpansionPanelComponent.prototype, "onSubmit", void 0);
	ExpansionPanelComponent = __decorate([
	    core_1.Component({
	        selector: 'expansion-panel',
	        styles: [__webpack_require__(9)],
	        template: __webpack_require__(10)
	    }),
	    __metadata("design:paramtypes", [expansion_panels_container_1.ExpansionPanelsContainerComponent])
	], ExpansionPanelComponent);
	exports.ExpansionPanelComponent = ExpansionPanelComponent;
	

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(6));
	

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(1);
	var ExpansionPanelsContainerComponent = (function () {
	    function ExpansionPanelsContainerComponent() {
	    }
	    return ExpansionPanelsContainerComponent;
	}());
	ExpansionPanelsContainerComponent = __decorate([
	    core_1.Component({
	        selector: 'expansion-panels-container',
	        styles: [__webpack_require__(7)],
	        template: __webpack_require__(8)
	    })
	], ExpansionPanelsContainerComponent);
	exports.ExpansionPanelsContainerComponent = ExpansionPanelsContainerComponent;
	

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "expansion-panels-container {\n  display: block; }\n"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"expansion-panels-container\">\n    <ng-content></ng-content>\n</div>\n";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = ".layout-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.layout-column {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.expansion-panel {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 0;\n  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);\n  color: #212121;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  font-size: inherit;\n  line-height: 1.5;\n  background: #fff;\n  font-family: 'Roboto', \"Helvetica Neue\", sans-serif; }\n\n.expansion-panel__header {\n  padding: 14px 18px;\n  cursor: pointer;\n  outline: 0; }\n\nexpansion-panel:first-child .expansion-panel:not(.expansion-panel--toggled) {\n  border-top-right-radius: 1px;\n  border-top-left-radius: 1px; }\n\nexpansion-panel:last-child .expansion-panel:not(.expansion-panel--toggled) {\n  border-bottom-right-radius: 1px;\n  border-bottom-left-radius: 1px; }\n\n.expansion-panel--toggled {\n  margin: 0.8em 0;\n  border-radius: 1px; }\n\n.expansion-panel__header:hover, .expansion-panel__header:focus {\n  background: #f9f9f9; }\n\n.expansion-panel__title {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 25%;\n          flex: 1 1 25%; }\n\n.expansion-panel__description {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 70%;\n          flex: 1 1 70%;\n  color: #727272; }\n\n.expansion-panel__content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  margin-left: 25%;\n  background: #fff;\n  padding: 14px 10px;\n  outline: 0; }\n\n.expansion-panel__arrow-down {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 5%;\n          flex: 1 1 5%;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n              -ms-grid-row-align: flex-end;\n          align-items: flex-end; }\n\n.expansion-panel__arrow-down svg {\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n  width: 24px;\n  height: 24px; }\n\n.expansion-panel--toggled .expansion-panel__arrow-down svg {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.expansion-panel__buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"expansion-panel\" [class.expansion-panel--toggled]=\"isToggled\">\n    <!-- PANEL HEADER -->\n    <div class=\"layout-row expansion-panel__header\"\n         [attr.tabindex]=\"0\"\n         (keyup.enter)=\"toggle()\"\n         (click)=\"toggle()\">\n\n        <!-- TITLE/NAME -->\n        <div class=\"expansion-panel__title layout-column\">\n            <ng-content select=\"expansion-panel-title\"></ng-content>\n        </div>\n\n        <!-- DESCRIPTION (PANEL VISIBLE) -->\n        <div class=\"expansion-panel__description layout-column\" *ngIf=\"isToggled\">\n            <ng-content select=\"expansion-panel-description-toggled\"></ng-content>\n        </div>\n\n        <!-- DESCRIPTION (PANEL HIDDEN) -->\n        <div class=\"expansion-panel__description layout-column\" *ngIf=\"isToggled === false\">\n            <ng-content select=\"expansion-panel-description-hidden\"></ng-content>\n        </div>\n\n        <!-- ARROW -->\n        <div class=\"expansion-panel__arrow-down layout-column\">\n            <svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z\"/>\n                <path d=\"M0-.75h24v24H0z\" fill=\"none\"/>\n            </svg>\n        </div>\n    </div>\n\n    <!-- PANEL CONTENT -->\n    <div class=\"expansion-panel__content\"\n         *ngIf=\"isToggled\"\n         [attr.tabindex]=\"-1\">\n\n        <ng-content select=\"expansion-panel-content\"></ng-content>\n\n        <!-- PANEL BUTTONS -->\n        <div class=\"expansion-panel__buttons\">\n            <ng-content select=\"expansion-panel-buttons\"></ng-content>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(1);
	var ExpansionPanelTitle = (function () {
	    function ExpansionPanelTitle() {
	    }
	    return ExpansionPanelTitle;
	}());
	ExpansionPanelTitle = __decorate([
	    core_1.Directive({ selector: 'expansion-panel-title' })
	], ExpansionPanelTitle);
	exports.ExpansionPanelTitle = ExpansionPanelTitle;
	var ExpansionPanelDescriptionToggled = (function () {
	    function ExpansionPanelDescriptionToggled() {
	    }
	    return ExpansionPanelDescriptionToggled;
	}());
	ExpansionPanelDescriptionToggled = __decorate([
	    core_1.Directive({ selector: 'expansion-panel-description-toggled' })
	], ExpansionPanelDescriptionToggled);
	exports.ExpansionPanelDescriptionToggled = ExpansionPanelDescriptionToggled;
	var ExpansionPanelDescriptionHidden = (function () {
	    function ExpansionPanelDescriptionHidden() {
	    }
	    return ExpansionPanelDescriptionHidden;
	}());
	ExpansionPanelDescriptionHidden = __decorate([
	    core_1.Directive({ selector: 'expansion-panel-description-hidden' })
	], ExpansionPanelDescriptionHidden);
	exports.ExpansionPanelDescriptionHidden = ExpansionPanelDescriptionHidden;
	var ExpansionPanelContent = (function () {
	    function ExpansionPanelContent() {
	    }
	    return ExpansionPanelContent;
	}());
	ExpansionPanelContent = __decorate([
	    core_1.Directive({ selector: 'expansion-panel-content' })
	], ExpansionPanelContent);
	exports.ExpansionPanelContent = ExpansionPanelContent;
	var ExpansionPanelButtons = (function () {
	    function ExpansionPanelButtons() {
	    }
	    return ExpansionPanelButtons;
	}());
	ExpansionPanelButtons = __decorate([
	    core_1.Directive({ selector: 'expansion-panel-buttons' })
	], ExpansionPanelButtons);
	exports.ExpansionPanelButtons = ExpansionPanelButtons;
	

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-expansion-panels.map

/***/ })

});
//# sourceMappingURL=photos.module.chunk.js.map