(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Dashboard';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_layout_components_header_menu_header_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/components/header-menu/header-menu.component */ "./src/app/components/layout/components/header-menu/header-menu.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_monitoring_etl_monitoring_etl_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/monitoring-etl/monitoring-etl.component */ "./src/app/components/monitoring-etl/monitoring-etl.component.ts");
/* harmony import */ var _components_monitoring_hosts_monitoring_hosts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/monitoring-hosts/monitoring-hosts.component */ "./src/app/components/monitoring-hosts/monitoring-hosts.component.ts");
/* harmony import */ var _components_monitoring_services_monitoring_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/monitoring-services/monitoring-services.component */ "./src/app/components/monitoring-services/monitoring-services.component.ts");
/* harmony import */ var _components_etl_page_etl_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/etl-page/etl-page.component */ "./src/app/components/etl-page/etl-page.component.ts");
/* harmony import */ var _components_hosts_page_hosts_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/hosts-page/hosts-page.component */ "./src/app/components/hosts-page/hosts-page.component.ts");
/* harmony import */ var _components_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/services-page/services-page.component */ "./src/app/components/services-page/services-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        data: {
            title: 'Dashboard'
        }
    },
    {
        path: 'etl',
        pathMatch: 'full',
        component: _components_etl_page_etl_page_component__WEBPACK_IMPORTED_MODULE_13__["EtlPageComponent"],
        data: {
            title: 'ETL processes'
        }
    },
    {
        path: 'hosts',
        pathMatch: 'full',
        component: _components_hosts_page_hosts_page_component__WEBPACK_IMPORTED_MODULE_14__["HostsPageComponent"],
        data: {
            title: 'Hosts'
        }
    },
    {
        path: 'services',
        pathMatch: 'full',
        component: _components_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_15__["ServicesPageComponent"],
        data: {
            title: 'Services'
        }
    },
    {
        path: '**',
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
                _components_layout_components_header_menu_header_menu_component__WEBPACK_IMPORTED_MODULE_7__["HeaderMenuComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _components_monitoring_etl_monitoring_etl_component__WEBPACK_IMPORTED_MODULE_10__["MonitoringEtlComponent"],
                _components_monitoring_hosts_monitoring_hosts_component__WEBPACK_IMPORTED_MODULE_11__["MonitoringHostsComponent"],
                _components_monitoring_services_monitoring_services_component__WEBPACK_IMPORTED_MODULE_12__["MonitoringServicesComponent"],
                _components_etl_page_etl_page_component__WEBPACK_IMPORTED_MODULE_13__["EtlPageComponent"],
                _components_hosts_page_hosts_page_component__WEBPACK_IMPORTED_MODULE_14__["HostsPageComponent"],
                _components_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_15__["ServicesPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxBulletModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxTemplateModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-block\">\n  <h2>ETL processes</h2>\n  <app-monitoring-etl></app-monitoring-etl>\n</div>\n<div class=\"dashboard-block\">\n  <h2>Hosts</h2>\n  <app-monitoring-hosts></app-monitoring-hosts>\n</div>\n<div class=\"dashboard-block\">\n  <h2>Services</h2>\n  <app-monitoring-services></app-monitoring-services>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-block {\n  margin-bottom: 30px; }\n  .dashboard-block:last-child {\n    margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/etl-page/etl-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/etl-page/etl-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>ETL processes</h1>\n<app-monitoring-etl></app-monitoring-etl>"

/***/ }),

/***/ "./src/app/components/etl-page/etl-page.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/etl-page/etl-page.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/etl-page/etl-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/etl-page/etl-page.component.ts ***!
  \***********************************************************/
/*! exports provided: EtlPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtlPageComponent", function() { return EtlPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EtlPageComponent = /** @class */ (function () {
    function EtlPageComponent() {
    }
    EtlPageComponent.prototype.ngOnInit = function () {
    };
    EtlPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-etl-page',
            template: __webpack_require__(/*! ./etl-page.component.html */ "./src/app/components/etl-page/etl-page.component.html"),
            styles: [__webpack_require__(/*! ./etl-page.component.scss */ "./src/app/components/etl-page/etl-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EtlPageComponent);
    return EtlPageComponent;
}());



/***/ }),

/***/ "./src/app/components/hosts-page/hosts-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/hosts-page/hosts-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hosts</h1>\n<app-monitoring-hosts></app-monitoring-hosts>\n"

/***/ }),

/***/ "./src/app/components/hosts-page/hosts-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/hosts-page/hosts-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/hosts-page/hosts-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/hosts-page/hosts-page.component.ts ***!
  \***************************************************************/
/*! exports provided: HostsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostsPageComponent", function() { return HostsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HostsPageComponent = /** @class */ (function () {
    function HostsPageComponent() {
    }
    HostsPageComponent.prototype.ngOnInit = function () {
    };
    HostsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hosts-page',
            template: __webpack_require__(/*! ./hosts-page.component.html */ "./src/app/components/hosts-page/hosts-page.component.html"),
            styles: [__webpack_require__(/*! ./hosts-page.component.scss */ "./src/app/components/hosts-page/hosts-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HostsPageComponent);
    return HostsPageComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/components/header-menu/header-menu.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/layout/components/header-menu/header-menu.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-menu\">\n  <ul class=\"header-menu__list\">\n    <li class=\"header-menu__item\">\n      <a routerLink=\"/\" routerLinkActive=\"header-menu__link--active\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"header-menu__link\">Dashboard</a>\n    </li>\n    <li class=\"header-menu__item\">\n      <a routerLink=\"/etl\" routerLinkActive=\"header-menu__link--active\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"header-menu__link\">ETL processes</a>\n    </li>\n    <li class=\"header-menu__item\">\n      <a routerLink=\"/hosts\" routerLinkActive=\"header-menu__link--active\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"header-menu__link\">Hosts</a>\n    </li>\n    <li class=\"header-menu__item\">\n      <a routerLink=\"/services\" routerLinkActive=\"header-menu__link--active\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"header-menu__link\">Services</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/components/header-menu/header-menu.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/layout/components/header-menu/header-menu.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-menu__list {\n  display: flex;\n  margin: auto;\n  padding: 0;\n  list-style: none; }\n\n.header-menu__item {\n  margin-right: 35px; }\n\n.header-menu__item:last-child {\n    margin-right: 0; }\n\n.header-menu__link {\n  color: #fff; }\n\n.header-menu__link--active {\n    text-decoration: none; }\n\n@media (max-width: 768px) {\n  .header-menu__list {\n    display: block;\n    margin: 10px 0; }\n  .header-menu__item {\n    margin: 0 0 15px; }\n    .header-menu__item:last-child {\n      margin-bottom: 0; } }\n"

/***/ }),

/***/ "./src/app/components/layout/components/header-menu/header-menu.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/layout/components/header-menu/header-menu.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HeaderMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMenuComponent", function() { return HeaderMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderMenuComponent = /** @class */ (function () {
    function HeaderMenuComponent() {
    }
    HeaderMenuComponent.prototype.ngOnInit = function () {
    };
    HeaderMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-menu',
            template: __webpack_require__(/*! ./header-menu.component.html */ "./src/app/components/layout/components/header-menu/header-menu.component.html"),
            styles: [__webpack_require__(/*! ./header-menu.component.scss */ "./src/app/components/layout/components/header-menu/header-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderMenuComponent);
    return HeaderMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n  <div class=\"layout__header-wrapper\">\n    <div class=\"layout__header\">\n      <div class=\"layout__logo\">Monitoring</div>\n      <app-header-menu class=\"layout__header-menu\"></app-header-menu>\n    </div>\n  </div>\n  <div class=\"layout__content-wrapper\">\n    <div class=\"layout__content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout {\n  min-width: 320px; }\n  .layout__header-wrapper {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 15px;\n    background-color: #00897b;\n    color: #fff; }\n  .layout__header {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 1000px;\n    padding: 5px 0;\n    margin: 0 15px; }\n  .layout__logo {\n    margin-right: 70px;\n    font-size: 30px;\n    line-height: 40px; }\n  .layout__content-wrapper {\n    display: flex;\n    justify-content: center;\n    margin: 0 15px 15px; }\n  .layout__content {\n    padding: 15px;\n    width: 100%;\n    max-width: 1000px;\n    border-radius: 2px;\n    background: #fff;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  @media (max-width: 768px) {\n  .layout__header {\n    display: block; } }\n"

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/components/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/components/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/monitoring-etl/monitoring-etl.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/monitoring-etl/monitoring-etl.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-data-grid\n  id=\"etlGrid\"\n  [dataSource]=\"data\"\n  [columnHidingEnabled]=\"true\"\n  [columns]=\"['name', 'isWork', 'isError', 'lastStartDate', 'lastErrorDate', 'lastErrorMessage']\"\n  [showBorders]=\"true\">\n\n  <dxo-editing \n    mode=\"cell\"\n    [allowUpdating]=\"true\">\n  </dxo-editing>\n\n  <dxo-paging [pageSize]=\"10\"></dxo-paging>\n\n  <dxi-column dataField=\"name\" caption=\"Name\" [allowEditing]=\"false\"></dxi-column>\n  <dxi-column dataField=\"isWork\" caption=\"On / Off\"></dxi-column>\n  <dxi-column dataField=\"isError\" caption=\"Error\" [allowEditing]=\"false\"></dxi-column>\n  <dxi-column dataField=\"lastStartDate\" caption=\"Last start date\" dataType=\"date\" format=\"dd.MM.yyyy\" [allowEditing]=\"false\"></dxi-column>\n  <dxi-column dataField=\"lastErrorDate\" caption=\"Last error date\" dataType=\"date\" format=\"dd.MM.yyyy\" [allowEditing]=\"false\"></dxi-column>\n  <dxi-column dataField=\"lastErrorMessage\" caption=\"Last error message\" [allowEditing]=\"false\"></dxi-column>\n\n</dx-data-grid>\n"

/***/ }),

/***/ "./src/app/components/monitoring-etl/monitoring-etl.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/monitoring-etl/monitoring-etl.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/monitoring-etl/monitoring-etl.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/monitoring-etl/monitoring-etl.component.ts ***!
  \***********************************************************************/
/*! exports provided: MonitoringEtlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringEtlComponent", function() { return MonitoringEtlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _monitoring_etl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitoring-etl.service */ "./src/app/components/monitoring-etl/monitoring-etl.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonitoringEtlComponent = /** @class */ (function () {
    function MonitoringEtlComponent(service) {
        this.service = service;
    }
    MonitoringEtlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getData().subscribe(function (data) { return _this.data = data; });
    };
    MonitoringEtlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monitoring-etl',
            template: __webpack_require__(/*! ./monitoring-etl.component.html */ "./src/app/components/monitoring-etl/monitoring-etl.component.html"),
            styles: [__webpack_require__(/*! ./monitoring-etl.component.scss */ "./src/app/components/monitoring-etl/monitoring-etl.component.scss")],
            providers: [_monitoring_etl_service__WEBPACK_IMPORTED_MODULE_1__["Service"]],
        }),
        __metadata("design:paramtypes", [_monitoring_etl_service__WEBPACK_IMPORTED_MODULE_1__["Service"]])
    ], MonitoringEtlComponent);
    return MonitoringEtlComponent;
}());



/***/ }),

/***/ "./src/app/components/monitoring-etl/monitoring-etl.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/monitoring-etl/monitoring-etl.service.ts ***!
  \*********************************************************************/
/*! exports provided: Data, Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());

var Service = /** @class */ (function () {
    function Service(http) {
        this.http = http;
    }
    Service.prototype.getData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/etl").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res['data'];
        }));
    };
    Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/components/monitoring-hosts/monitoring-hosts.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/monitoring-hosts/monitoring-hosts.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hosts-grid\">\n  <div class=\"hosts-grid__inner\">\n    <dx-data-grid\n      rowTemplate=\"warningRowTemplate\"\n      [dataSource]=\"data\"\n      [columns]=\"['name', 'cpu', 'memory', 'freeDiskSpace', 'fullDiskSpace']\"\n      [showBorders]=\"true\">\n\n      <dxi-column dataField=\"name\" caption=\"Name\"></dxi-column>\n      <dxi-column dataField=\"cpu\" caption=\"CPU\" dataType=\"number\"></dxi-column>\n      <dxi-column dataField=\"memory\" caption=\"Memory\" dataType=\"number\"></dxi-column>\n      <dxi-column dataField=\"freeDiskSpace\" caption=\"Free disk space\" dataType=\"number\"></dxi-column>\n      <dxi-column dataField=\"fullDiskSpace\" caption=\"Full disk space\" dataType=\"number\"></dxi-column>\n\n      <tbody class=\"dx-row custom-table\" *dxTemplate=\"let item of 'warningRowTemplate'\">\n        <tr class=\"custom-table__row\" [ngClass]=\"{'custom-table__row--warning': (item.data.cpu >= 0.8 || item.data.memory >= 0.8)}\">\n          <td [ngStyle]=\"{borderRight: '1px solid #dedede'}\">{{item.data.name}}</td>\n          <td [ngStyle]=\"{borderRight: '1px solid #dedede'}\">\n            <ng-container *ngTemplateOutlet=\"bullet; context: {value: item.data.cpu}\"></ng-container>\n          </td>\n          <td [ngStyle]=\"{borderRight: '1px solid #dedede'}\">\n            <ng-container *ngTemplateOutlet=\"bullet; context: {value: item.data.memory}\"></ng-container>\n          </td>\n          <td [ngStyle]=\"{textAlign: 'right', borderRight: '1px solid #dedede'}\">{{item.data.freeDiskSpace}}</td>\n          <td [ngStyle]=\"{textAlign: 'right'}\">{{item.data.fullDiskSpace}}</td>\n        </tr>\n      </tbody>\n\n      <ng-template #bullet let-value=\"value\">\n        <div class=\"chart-cell\">\n          <dx-bullet\n            [showTarget]=\"false\"\n            [showZeroLevel]=\"true\"\n            [startScaleValue]=\"0\"\n            [endScaleValue]=\"100\"\n            [value]=\"value * 100\">\n            <dxo-size [width]=\"150\" [height]=\"35\"></dxo-size>\n            <dxo-tooltip\n              [enabled]=\"true\"\n              [paddingTopBottom]=\"2\"\n              [customizeTooltip]=\"customizeTooltip\">\n              <dxo-font [size]=\"18\"></dxo-font>\n            </dxo-tooltip>\n            <dxo-margin\n                [top]=\"5\"\n                [bottom]=\"0\"\n                [left]=\"5\"\n            ></dxo-margin>\n          </dx-bullet>\n        </div>\n      </ng-template>\n\n    </dx-data-grid>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/monitoring-hosts/monitoring-hosts.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/monitoring-hosts/monitoring-hosts.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dx-datagrid .dx-data-row > td.bullet {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.hosts-grid {\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: none; }\n\n.hosts-grid__inner {\n    min-width: 800px; }\n\n.custom-table__row--warning {\n  background-color: #f9bdb6; }\n"

/***/ }),

/***/ "./src/app/components/monitoring-hosts/monitoring-hosts.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/monitoring-hosts/monitoring-hosts.component.ts ***!
  \***************************************************************************/
/*! exports provided: MonitoringHostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringHostsComponent", function() { return MonitoringHostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _monitoring_hosts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitoring-hosts.service */ "./src/app/components/monitoring-hosts/monitoring-hosts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonitoringHostsComponent = /** @class */ (function () {
    function MonitoringHostsComponent(service) {
        this.service = service;
        this.customizeTooltip = function (pointsInfo) {
            return { text: parseInt(pointsInfo.originalValue) + "%" };
        };
    }
    MonitoringHostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getData().subscribe(function (data) { return _this.data = data; });
    };
    MonitoringHostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monitoring-hosts',
            template: __webpack_require__(/*! ./monitoring-hosts.component.html */ "./src/app/components/monitoring-hosts/monitoring-hosts.component.html"),
            styles: [__webpack_require__(/*! ./monitoring-hosts.component.scss */ "./src/app/components/monitoring-hosts/monitoring-hosts.component.scss")],
            providers: [_monitoring_hosts_service__WEBPACK_IMPORTED_MODULE_1__["Service"]],
        }),
        __metadata("design:paramtypes", [_monitoring_hosts_service__WEBPACK_IMPORTED_MODULE_1__["Service"]])
    ], MonitoringHostsComponent);
    return MonitoringHostsComponent;
}());



/***/ }),

/***/ "./src/app/components/monitoring-hosts/monitoring-hosts.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/monitoring-hosts/monitoring-hosts.service.ts ***!
  \*************************************************************************/
/*! exports provided: Data, Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());

var Service = /** @class */ (function () {
    function Service(http) {
        this.http = http;
    }
    Service.prototype.getData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/hosts").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res['data'];
        }));
    };
    Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/components/monitoring-services/monitoring-services.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/monitoring-services/monitoring-services.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-data-grid\n  id=\"etlGrid\"\n  [dataSource]=\"data\"\n  [columnHidingEnabled]=\"true\"\n  [columns]=\"['name', 'tags', 'status', 'releaseVersion']\"\n  [showBorders]=\"true\">\n\n  <dxo-paging [pageSize]=\"10\"></dxo-paging>\n\n  <dxo-group-panel [visible]=\"true\"></dxo-group-panel>\n\n  <dxi-column dataField=\"name\" caption=\"Name\"></dxi-column>\n  <dxi-column dataField=\"tags\" caption=\"Tags\"></dxi-column>\n  <dxi-column dataField=\"status\" caption=\"Status\"></dxi-column>\n  <dxi-column dataField=\"releaseVersion\" caption=\"Release version\"></dxi-column>\n\n</dx-data-grid>\n"

/***/ }),

/***/ "./src/app/components/monitoring-services/monitoring-services.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/monitoring-services/monitoring-services.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/monitoring-services/monitoring-services.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/monitoring-services/monitoring-services.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MonitoringServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringServicesComponent", function() { return MonitoringServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _monitoring_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitoring-services.service */ "./src/app/components/monitoring-services/monitoring-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonitoringServicesComponent = /** @class */ (function () {
    function MonitoringServicesComponent(service) {
        this.service = service;
    }
    MonitoringServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getData().subscribe(function (data) { return _this.data = data; });
    };
    MonitoringServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monitoring-services',
            template: __webpack_require__(/*! ./monitoring-services.component.html */ "./src/app/components/monitoring-services/monitoring-services.component.html"),
            styles: [__webpack_require__(/*! ./monitoring-services.component.scss */ "./src/app/components/monitoring-services/monitoring-services.component.scss")],
            providers: [_monitoring_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"]],
        }),
        __metadata("design:paramtypes", [_monitoring_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"]])
    ], MonitoringServicesComponent);
    return MonitoringServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/monitoring-services/monitoring-services.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/monitoring-services/monitoring-services.service.ts ***!
  \*******************************************************************************/
/*! exports provided: Data, Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());

var Service = /** @class */ (function () {
    function Service(http) {
        this.http = http;
    }
    Service.prototype.getData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/services").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res['data'];
        }));
    };
    Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  404 Not Found\n</p>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/components/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/services-page/services-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/services-page/services-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Services</h1>\n<app-monitoring-services></app-monitoring-services>"

/***/ }),

/***/ "./src/app/components/services-page/services-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/services-page/services-page.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/services-page/services-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/services-page/services-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServicesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageComponent", function() { return ServicesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesPageComponent = /** @class */ (function () {
    function ServicesPageComponent() {
    }
    ServicesPageComponent.prototype.ngOnInit = function () {
    };
    ServicesPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services-page',
            template: __webpack_require__(/*! ./services-page.component.html */ "./src/app/components/services-page/services-page.component.html"),
            styles: [__webpack_require__(/*! ./services-page.component.scss */ "./src/app/components/services-page/services-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesPageComponent);
    return ServicesPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3001/api',
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Moki5473/projects/test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map