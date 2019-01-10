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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<!-- <div *ngIf=\"authService.loggedIn()\">\n\n</div> -->\n<div style=\"width:1200px; margin:0 auto;\">\n    <router-outlet></router-outlet>\n</div>\n<!-- <router-outlet></router-outlet> -->\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angualr-src';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/signin-signup/signin-signup.component */ "./src/app/components/signin-signup/signin-signup.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");



















var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'profile/:profilename', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"] },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] } // All unmatched routes
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_15__["SigninSignupComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_16__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: [_components_signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_15__["SigninSignupComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:200px\"></div>\n<h2 class=\"page-header\">DashBoard</h2>\n<p>\n  dashboard works!\n</p>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n  <head>\n\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>Creative - Start Bootstrap Theme</title>\n\n    <!-- Bootstrap core CSS -->\n    \n\n  </head>\n\n  <body id=\"page-top\">\n    <div style=\"height: 100px\"></div>\n    <!-- Navigation -->\n    <!-- <nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n      <div class=\"container\">\n        <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">Start Bootstrap</a>\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link js-scroll-trigger\" href=\"#about\">About</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link js-scroll-trigger\" href=\"#services\">Services</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link js-scroll-trigger\" href=\"#portfolio\">Portfolio</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link js-scroll-trigger\" href=\"#contact\">Contact</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav> -->\n\n    <header class=\"masthead text-center text-white d-flex\">\n      <div class=\"container my-auto\">\n        <div class=\"row\">\n          <div class=\"col-lg-10 mx-auto\">\n            <h1 class=\"text-uppercase\">\n              <strong>Your Favorite Source of Free Bootstrap Themes</strong>\n            </h1>\n            <hr>\n          </div>\n          <div class=\"col-lg-8 mx-auto\">\n            <p class=\"text-faded mb-5\">Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>\n            <a class=\"btn btn-primary btn-xl js-scroll-trigger\" href=\"#about\">Find Out More</a>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <section class=\"bg-primary\" id=\"about\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 mx-auto text-center\">\n            <h2 class=\"section-heading text-white\">We've got what you need!</h2>\n            <hr class=\"light my-4\">\n            <p class=\"text-faded mb-4\">Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</p>\n            <a class=\"btn btn-light btn-xl js-scroll-trigger\" href=\"#services\">Get Started!</a>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"services\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 text-center\">\n            <h2 class=\"section-heading\">At Your Service</h2>\n            <hr class=\"my-4\">\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6 text-center\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <i class=\"fas fa-4x fa-gem text-primary mb-3 sr-icon-1\"></i>\n              <h3 class=\"mb-3\">Sturdy Templates</h3>\n              <p class=\"text-muted mb-0\">Our templates are updated regularly so they don't break.</p>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 text-center\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <i class=\"fas fa-4x fa-paper-plane text-primary mb-3 sr-icon-2\"></i>\n              <h3 class=\"mb-3\">Ready to Ship</h3>\n              <p class=\"text-muted mb-0\">You can use this theme as is, or you can make changes!</p>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 text-center\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <i class=\"fas fa-4x fa-code text-primary mb-3 sr-icon-3\"></i>\n              <h3 class=\"mb-3\">Up to Date</h3>\n              <p class=\"text-muted mb-0\">We update dependencies to keep things fresh.</p>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 text-center\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <i class=\"fas fa-4x fa-heart text-primary mb-3 sr-icon-4\"></i>\n              <h3 class=\"mb-3\">Made with Love</h3>\n              <p class=\"text-muted mb-0\">You have to make your websites with love these days!</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"p-0\" id=\"portfolio\">\n      <div class=\"container-fluid p-0\">\n        <div class=\"row no-gutters popup-gallery\">\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/1.jpg\">\n              <img class=\"img-fluid\" src=\"img/portfolio/thumbnails/1.jpg\" alt=\"\">\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/2.jpg\">\n              <img class=\"img-fluid\" src=\"img/portfolio/thumbnails/2.jpg\" alt=\"\">\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/3.jpg\">\n              <img class=\"img-fluid\" src=\"img/portfolio/thumbnails/3.jpg\" alt=\"\">\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/4.jpg\">\n              <img class=\"img-fluid\" src=\"img/portfolio/thumbnails/4.jpg\" alt=\"\">\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/5.jpg\">\n              <img class=\"img-fluid\" src=\"img/portfolio/thumbnails/5.jpg\" alt=\"\">\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/6.jpg\">\n              <img class=\"img-fluid\" src=\"img/portfolio/thumbnails/6.jpg\" alt=\"\">\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"bg-dark text-white\">\n      <div class=\"container text-center\">\n        <h2 class=\"mb-4\">Free Download at Start Bootstrap!</h2>\n        <a class=\"btn btn-light btn-xl sr-button\" href=\"http://startbootstrap.com/template-overviews/creative/\">Download Now!</a>\n      </div>\n    </section>\n\n    <section id=\"contact\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 mx-auto text-center\">\n            <h2 class=\"section-heading\">Let's Get In Touch!</h2>\n            <hr class=\"my-4\">\n            <p class=\"mb-5\">Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 ml-auto text-center\">\n            <i class=\"fas fa-phone fa-3x mb-3 sr-contact-1\"></i>\n            <p>123-456-6789</p>\n          </div>\n          <div class=\"col-lg-4 mr-auto text-center\">\n            <i class=\"fas fa-envelope fa-3x mb-3 sr-contact-2\"></i>\n            <p>\n              <a href=\"mailto:your-email@your-domain.com\">feedback@startbootstrap.com</a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Bootstrap core JavaScript -->\n    <script src=\"vendor/jquery/jquery.min.js\"></script>\n    <script src=\"vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n\n    <!-- Plugin JavaScript -->\n    <script src=\"vendor/jquery-easing/jquery.easing.min.js\"></script>\n    <script src=\"vendor/scrollreveal/scrollreveal.min.js\"></script>\n    <script src=\"vendor/magnific-popup/jquery.magnific-popup.min.js\"></script>\n\n    <!-- Custom scripts for this template -->\n    <script src=\"js/creative.min.js\"></script>\n\n  </body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <!-- <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        </li> -->\n        <!-- <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li> -->\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n      <ul class=\"navbar-nav mr-auto ml-auto\">\n          <li class=\"nav-item\">\n            <a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" href=\"#\" (click)=\"openSignUpModal()\">\n              Login/Sign up\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n              <a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\">\n                Logout\n              </a>\n            </li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signin-signup/signin-signup.component */ "./src/app/components/signin-signup/signin-signup.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, modalService, router) {
        this.authService = authService;
        this.modalService = modalService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent.prototype.openSignUpModal = function () {
        this.modalService.open(_signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_4__["SigninSignupComponent"]);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* USER PROFILE PAGE */\n.card {\n    margin-top: 20px;\n    padding: 30px;\n    background-color: rgba(214, 224, 226, 0.2);\n    -moz-border-top-left-radius:5px;\n    border-top-left-radius:5px;\n    -moz-border-top-right-radius:5px;\n    border-top-right-radius:5px;\n    box-sizing: border-box;\n}\n.card.hovercard {\n    position: relative;\n    padding-top: 0;\n    overflow: hidden;\n    text-align: center;\n    background-color: #fff;\n    background-color: rgba(255, 255, 255, 1);\n}\n.card.hovercard .card-background {\n    height: 130px;\n}\n.card-background img {\n    -webkit-filter: blur(25px);\n    -moz-filter: blur(25px);\n    -o-filter: blur(25px);\n    -ms-filter: blur(25px);\n    filter: blur(25px);\n    margin-left: -100px;\n    margin-top: -200px;\n    min-width: 130%;\n}\n.card.hovercard .useravatar {\n    position: absolute;\n    top: 15px;\n    left: 0;\n    right: 0;\n}\n.card.hovercard .useravatar img {\n    width: 100px;\n    height: 100px;\n    max-width: 100px;\n    max-height: 100px;\n    border-radius: 50%;\n    border: 5px solid rgba(255, 255, 255, 0.5);\n}\n.card.hovercard .card-info {\n    position: absolute;\n    bottom: 14px;\n    left: 0;\n    right: 0;\n}\n.card.hovercard .card-info .card-title {\n    padding:0 5px;\n    font-size: 20px;\n    line-height: 1;\n    color: #262626;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 4px;\n}\n.card.hovercard .card-info {\n    overflow: hidden;\n    font-size: 12px;\n    line-height: 20px;\n    color: #737373;\n    text-overflow: ellipsis;\n}\n.card.hovercard .bottom {\n    padding: 0 20px;\n    margin-bottom: 17px;\n}\n.btn-pref .btn {\n    -webkit-border-radius:0 !important;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBdUI7QUFDdkI7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLDJDQUEyQztJQUUzQyxnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBRTNCLGlDQUFpQztJQUNqQyw0QkFBNEI7SUFHNUIsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlDQUF5QztDQUM1QztBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztDQUNaO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFHbEIsbUJBQW1CO0lBQ25CLDJDQUEyQztDQUM5QztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztDQUNaO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2YsMkNBQTJDO0lBRzNDLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksbUNBQW1DO0NBQ3RDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFVTRVIgUFJPRklMRSBQQUdFICovXG4uY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMjQsIDIyNiwgMC4yKTtcbiAgICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O1xuICAgIC1tb3otYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo1cHg7XG4gICAgLW1vei1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5jYXJkLmhvdmVyY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbn1cbi5jYXJkLmhvdmVyY2FyZCAuY2FyZC1iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDEzMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZCBpbWcge1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDI1cHgpO1xuICAgIC1tb3otZmlsdGVyOiBibHVyKDI1cHgpO1xuICAgIC1vLWZpbHRlcjogYmx1cigyNXB4KTtcbiAgICAtbXMtZmlsdGVyOiBibHVyKDI1cHgpO1xuICAgIGZpbHRlcjogYmx1cigyNXB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICAgIG1hcmdpbi10b3A6IC0yMDBweDtcbiAgICBtaW4td2lkdGg6IDEzMCU7XG59XG4uY2FyZC5ob3ZlcmNhcmQgLnVzZXJhdmF0YXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cbi5jYXJkLmhvdmVyY2FyZCAudXNlcmF2YXRhciBpbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5jYXJkLmhvdmVyY2FyZCAuY2FyZC1pbmZvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxNHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG4uY2FyZC5ob3ZlcmNhcmQgLmNhcmQtaW5mbyAuY2FyZC10aXRsZSB7XG4gICAgcGFkZGluZzowIDVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICMyNjI2MjY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jYXJkLmhvdmVyY2FyZCAuY2FyZC1pbmZvIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzczNzM3MztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5jYXJkLmhvdmVyY2FyZCAuYm90dG9tIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcbn1cbi5idG4tcHJlZiAuYnRuIHtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6MCAhaW1wb3J0YW50O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"col-lg-6 col-sm-6\">\n    <div class=\"card hovercard\">\n        <div class=\"card-background\">\n            <img class=\"card-bkimg\" alt=\"\" src=\"http://lorempixel.com/100/100/people/9/\">\n            <!-- http://lorempixel.com/850/280/people/9/ -->\n        </div>\n        <div class=\"useravatar\">\n            <img alt=\"\" src=\"http://lorempixel.com/100/100/people/9/\">\n        </div>\n        <div class=\"card-info\"> <span class=\"card-title\">Pamela Anderson</span>\n\n        </div>\n    </div>\n    <div class=\"btn-pref btn-group btn-group-justified btn-group-lg\" role=\"group\" aria-label=\"...\">\n        <div class=\"btn-group\" role=\"group\">\n            <button type=\"button\" id=\"stars\" class=\"btn btn-primary\" href=\"#tab1\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                <div class=\"hidden-xs\">Stars</div>\n            </button>\n        </div>\n        <div class=\"btn-group\" role=\"group\">\n            <button type=\"button\" id=\"favorites\" class=\"btn btn-default\" href=\"#tab2\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-heart\" aria-hidden=\"true\"></span>\n                <div class=\"hidden-xs\">Favorites</div>\n            </button>\n        </div>\n        <div class=\"btn-group\" role=\"group\">\n            <button type=\"button\" id=\"following\" class=\"btn btn-default\" href=\"#tab3\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\n                <div class=\"hidden-xs\">Following</div>\n            </button>\n        </div>\n    </div>\n\n        <div class=\"well\">\n      <div class=\"tab-content\">\n        <div class=\"tab-pane fade in active\" id=\"tab1\">\n          <h3>This is tab 1</h3>\n        </div>\n        <div class=\"tab-pane fade in\" id=\"tab2\">\n          <h3>This is tab 2</h3>\n        </div>\n        <div class=\"tab-pane fade in\" id=\"tab3\">\n          <h3>This is tab 3</h3>\n        </div>\n      </div>\n    </div>\n    \n    </div>\n            \n    "

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/signin-signup/signin-signup.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/signin-signup/signin-signup.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\tmargin:0;\n\tcolor:#6a6f8c;\n\tbackground:#c8c8c8;\n\tfont:600 16px/18px 'Open Sans',sans-serif;\n}\n*,:after,:before{box-sizing:border-box}\n.clearfix:after,.clearfix:before{content:'';display:table}\n.clearfix:after{clear:both;display:block}\na{color:inherit;text-decoration:none}\n.login-wrap{\n  \tborder-radius: 25px;\n\twidth:100%;\n\tmargin:auto;\n\tmax-width: 525px;\n\tmin-height: 670px;\n\tposition:relative;\n\t/* background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) no-repeat center; */\n\t/* background:url('../../../assets/img/web-page-background-color-funycoloring-coloring-pages-for-kids-12888-coloring-pages-for-adults.jpg'); */\n\tbox-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);\n}\n.login-html{\n\twidth:100%;\n\theight:100%;\n\tposition:absolute;\n\tpadding:90px 70px 50px 70px;\n\tbackground:rgba(215, 217, 218, 0.9);\n}\n.login-html .sign-in-htm,\n.login-html .sign-up-htm{\n\ttop:0;\n\tleft:0;\n\tright:0;\n\tbottom:0;\n\tposition:absolute;\n\t-webkit-transform:rotateY(180deg);\n\t        transform:rotateY(180deg);\n\t-webkit-backface-visibility:hidden;\n\t        backface-visibility:hidden;\n\ttransition:all .4s linear;\n}\n.login-html .sign-in,\n.login-html .sign-up,\n.login-form .group .check{\n\tdisplay:none;\n}\n.login-html .tab,\n.login-form .group .label,\n.login-form .group .button{\n\ttext-transform:uppercase;\n}\n.login-html .tab{\n\tfont-size:22px;\n\tmargin-right:15px;\n\tpadding-bottom:5px;\n\tmargin:0 15px 10px 0;\n\tdisplay:inline-block;\n\tborder-bottom:2px solid transparent;\n}\n.login-html .sign-in:checked + .tab,\n.login-html .sign-up:checked + .tab{\n\tcolor:#fff;\n\tborder-color:#fb5757;\n}\n.login-form{\n\tmin-height:345px;\n\tposition:relative;\n\t-webkit-perspective:1000px;\n\t        perspective:1000px;\n\t-webkit-transform-style:preserve-3d;\n\t        transform-style:preserve-3d;\n}\n.login-form .group{\n\tmargin-bottom:15px;\n}\n.login-form .group .label,\n.login-form .group .input,\n.login-form .group .button{\n\twidth:100%;\n\tcolor:#fff;\n\tdisplay:block;\n}\n.login-form .group .input,\n.login-form .group .button{\n\tborder:none;\n\tpadding:10px 10px;\n\tborder-radius:15px;\n\tbackground:rgba(7, 7, 7, 0.1);\n}\n.login-form .group input[data-type=\"password\"]{\n\ttext-security:circle;\n\t-webkit-text-security:circle;\n}\n.login-form .group .label{\n\tcolor:rgb(41, 39, 39);\n\tfont-size:12px;\n}\n.login-form .group .button{\n\tbackground:#1161ee;\n}\n.login-form .group label .icon{\n\twidth:15px;\n\theight:15px;\n\tborder-radius:2px;\n\tposition:relative;\n\tdisplay:inline-block;\n\tbackground:rgba(255,255,255,.1);\n}\n.login-form .group label .icon:before,\n.login-form .group label .icon:after{\n\tcontent:'';\n\twidth:10px;\n\theight:2px;\n\tbackground:#fff;\n\tposition:absolute;\n\ttransition:all .2s ease-in-out 0s;\n}\n.login-form .group label .icon:before{\n\tleft:3px;\n\twidth:5px;\n\tbottom:6px;\n\t-webkit-transform:scale(0) rotate(0);\n\t        transform:scale(0) rotate(0);\n}\n.login-form .group label .icon:after{\n\ttop:6px;\n\tright:0;\n\t-webkit-transform:scale(0) rotate(0);\n\t        transform:scale(0) rotate(0);\n}\n.login-form .group .check:checked + label{\n\tcolor:#fff;\n}\n.login-form .group .check:checked + label .icon{\n\tbackground:#1161ee;\n}\n.login-form .group .check:checked + label .icon:before{\n\t-webkit-transform:scale(1) rotate(45deg);\n\t        transform:scale(1) rotate(45deg);\n}\n.login-form .group .check:checked + label .icon:after{\n\t-webkit-transform:scale(1) rotate(-45deg);\n\t        transform:scale(1) rotate(-45deg);\n}\n.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{\n\t-webkit-transform:rotate(0);\n\t        transform:rotate(0);\n}\n.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{\n\t-webkit-transform:rotate(0);\n\t        transform:rotate(0);\n}\n.hr{\n\theight:2px;\n\tmargin:40px 0 20px 0;\n\tbackground:#fb5757;\n}\n.foot-lnk{\n\ttext-align:center;\n}\nform{\n    display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4tc2lnbnVwL3NpZ25pbi1zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFNBQVM7Q0FDVCxjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLDBDQUEwQztDQUMxQztBQUNELGlCQUFpQixxQkFBcUIsQ0FBQztBQUN2QyxpQ0FBaUMsV0FBVyxhQUFhLENBQUM7QUFDMUQsZ0JBQWdCLFdBQVcsYUFBYSxDQUFDO0FBQ3pDLEVBQUUsY0FBYyxvQkFBb0IsQ0FBQztBQUVyQztHQUNHLG9CQUFvQjtDQUN0QixXQUFXO0NBQ1gsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLHVIQUF1SDtDQUN2SCwrSUFBK0k7Q0FDL0ksdUVBQXVFO0NBQ3ZFO0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQiw0QkFBNEI7Q0FDNUIsb0NBQW9DO0NBQ3BDO0FBQ0Q7O0NBRUMsTUFBTTtDQUNOLE9BQU87Q0FDUCxRQUFRO0NBQ1IsU0FBUztDQUNULGtCQUFrQjtDQUNsQixrQ0FBMEI7U0FBMUIsMEJBQTBCO0NBQzFCLG1DQUEyQjtTQUEzQiwyQkFBMkI7Q0FDM0IsMEJBQTBCO0NBQzFCO0FBQ0Q7OztDQUdDLGFBQWE7Q0FDYjtBQUNEOzs7Q0FHQyx5QkFBeUI7Q0FDekI7QUFDRDtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsb0NBQW9DO0NBQ3BDO0FBQ0Q7O0NBRUMsV0FBVztDQUNYLHFCQUFxQjtDQUNyQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQiwyQkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLG9DQUE0QjtTQUE1Qiw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEOzs7Q0FHQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGNBQWM7Q0FDZDtBQUNEOztDQUVDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGdDQUFnQztDQUNoQztBQUNEOztDQUVDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFdBQVc7Q0FDWCxxQ0FBNkI7U0FBN0IsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyxRQUFRO0NBQ1IsUUFBUTtDQUNSLHFDQUE2QjtTQUE3Qiw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLFdBQVc7Q0FDWDtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyx5Q0FBaUM7U0FBakMsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQywwQ0FBa0M7U0FBbEMsa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyw0QkFBb0I7U0FBcEIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyw0QkFBb0I7U0FBcEIsb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCO0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ25pbi1zaWdudXAvc2lnbmluLXNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcblx0bWFyZ2luOjA7XG5cdGNvbG9yOiM2YTZmOGM7XG5cdGJhY2tncm91bmQ6I2M4YzhjODtcblx0Zm9udDo2MDAgMTZweC8xOHB4ICdPcGVuIFNhbnMnLHNhbnMtc2VyaWY7XG59XG4qLDphZnRlciw6YmVmb3Jle2JveC1zaXppbmc6Ym9yZGVyLWJveH1cbi5jbGVhcmZpeDphZnRlciwuY2xlYXJmaXg6YmVmb3Jle2NvbnRlbnQ6Jyc7ZGlzcGxheTp0YWJsZX1cbi5jbGVhcmZpeDphZnRlcntjbGVhcjpib3RoO2Rpc3BsYXk6YmxvY2t9XG5he2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmV9XG5cbi5sb2dpbi13cmFwe1xuICBcdGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cdHdpZHRoOjEwMCU7XG5cdG1hcmdpbjphdXRvO1xuXHRtYXgtd2lkdGg6IDUyNXB4O1xuXHRtaW4taGVpZ2h0OiA2NzBweDtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdC8qIGJhY2tncm91bmQ6dXJsKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raGFka2FtaG4vZGF5LTAxLWxvZ2luLWZvcm0vbWFzdGVyL2ltZy9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7ICovXG5cdC8qIGJhY2tncm91bmQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL3dlYi1wYWdlLWJhY2tncm91bmQtY29sb3ItZnVueWNvbG9yaW5nLWNvbG9yaW5nLXBhZ2VzLWZvci1raWRzLTEyODg4LWNvbG9yaW5nLXBhZ2VzLWZvci1hZHVsdHMuanBnJyk7ICovXG5cdGJveC1zaGFkb3c6MCAxMnB4IDE1cHggMCByZ2JhKDAsMCwwLC4yNCksMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLC4xOSk7XG59XG4ubG9naW4taHRtbHtcblx0d2lkdGg6MTAwJTtcblx0aGVpZ2h0OjEwMCU7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHRwYWRkaW5nOjkwcHggNzBweCA1MHB4IDcwcHg7XG5cdGJhY2tncm91bmQ6cmdiYSgyMTUsIDIxNywgMjE4LCAwLjkpO1xufVxuLmxvZ2luLWh0bWwgLnNpZ24taW4taHRtLFxuLmxvZ2luLWh0bWwgLnNpZ24tdXAtaHRte1xuXHR0b3A6MDtcblx0bGVmdDowO1xuXHRyaWdodDowO1xuXHRib3R0b206MDtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7XG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO1xuXHR0cmFuc2l0aW9uOmFsbCAuNHMgbGluZWFyO1xufVxuLmxvZ2luLWh0bWwgLnNpZ24taW4sXG4ubG9naW4taHRtbCAuc2lnbi11cCxcbi5sb2dpbi1mb3JtIC5ncm91cCAuY2hlY2t7XG5cdGRpc3BsYXk6bm9uZTtcbn1cbi5sb2dpbi1odG1sIC50YWIsXG4ubG9naW4tZm9ybSAuZ3JvdXAgLmxhYmVsLFxuLmxvZ2luLWZvcm0gLmdyb3VwIC5idXR0b257XG5cdHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbn1cbi5sb2dpbi1odG1sIC50YWJ7XG5cdGZvbnQtc2l6ZToyMnB4O1xuXHRtYXJnaW4tcmlnaHQ6MTVweDtcblx0cGFkZGluZy1ib3R0b206NXB4O1xuXHRtYXJnaW46MCAxNXB4IDEwcHggMDtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmxvZ2luLWh0bWwgLnNpZ24taW46Y2hlY2tlZCArIC50YWIsXG4ubG9naW4taHRtbCAuc2lnbi11cDpjaGVja2VkICsgLnRhYntcblx0Y29sb3I6I2ZmZjtcblx0Ym9yZGVyLWNvbG9yOiNmYjU3NTc7XG59XG4ubG9naW4tZm9ybXtcblx0bWluLWhlaWdodDozNDVweDtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdHBlcnNwZWN0aXZlOjEwMDBweDtcblx0dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO1xufVxuLmxvZ2luLWZvcm0gLmdyb3Vwe1xuXHRtYXJnaW4tYm90dG9tOjE1cHg7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgLmxhYmVsLFxuLmxvZ2luLWZvcm0gLmdyb3VwIC5pbnB1dCxcbi5sb2dpbi1mb3JtIC5ncm91cCAuYnV0dG9ue1xuXHR3aWR0aDoxMDAlO1xuXHRjb2xvcjojZmZmO1xuXHRkaXNwbGF5OmJsb2NrO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5pbnB1dCxcbi5sb2dpbi1mb3JtIC5ncm91cCAuYnV0dG9ue1xuXHRib3JkZXI6bm9uZTtcblx0cGFkZGluZzoxMHB4IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6MTVweDtcblx0YmFja2dyb3VuZDpyZ2JhKDcsIDcsIDcsIDAuMSk7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgaW5wdXRbZGF0YS10eXBlPVwicGFzc3dvcmRcIl17XG5cdHRleHQtc2VjdXJpdHk6Y2lyY2xlO1xuXHQtd2Via2l0LXRleHQtc2VjdXJpdHk6Y2lyY2xlO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5sYWJlbHtcblx0Y29sb3I6cmdiKDQxLCAzOSwgMzkpO1xuXHRmb250LXNpemU6MTJweDtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCAuYnV0dG9ue1xuXHRiYWNrZ3JvdW5kOiMxMTYxZWU7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgbGFiZWwgLmljb257XG5cdHdpZHRoOjE1cHg7XG5cdGhlaWdodDoxNXB4O1xuXHRib3JkZXItcmFkaXVzOjJweDtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjEpO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIGxhYmVsIC5pY29uOmJlZm9yZSxcbi5sb2dpbi1mb3JtIC5ncm91cCBsYWJlbCAuaWNvbjphZnRlcntcblx0Y29udGVudDonJztcblx0d2lkdGg6MTBweDtcblx0aGVpZ2h0OjJweDtcblx0YmFja2dyb3VuZDojZmZmO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dHJhbnNpdGlvbjphbGwgLjJzIGVhc2UtaW4tb3V0IDBzO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIGxhYmVsIC5pY29uOmJlZm9yZXtcblx0bGVmdDozcHg7XG5cdHdpZHRoOjVweDtcblx0Ym90dG9tOjZweDtcblx0dHJhbnNmb3JtOnNjYWxlKDApIHJvdGF0ZSgwKTtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCBsYWJlbCAuaWNvbjphZnRlcntcblx0dG9wOjZweDtcblx0cmlnaHQ6MDtcblx0dHJhbnNmb3JtOnNjYWxlKDApIHJvdGF0ZSgwKTtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCAuY2hlY2s6Y2hlY2tlZCArIGxhYmVse1xuXHRjb2xvcjojZmZmO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5jaGVjazpjaGVja2VkICsgbGFiZWwgLmljb257XG5cdGJhY2tncm91bmQ6IzExNjFlZTtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCAuY2hlY2s6Y2hlY2tlZCArIGxhYmVsIC5pY29uOmJlZm9yZXtcblx0dHJhbnNmb3JtOnNjYWxlKDEpIHJvdGF0ZSg0NWRlZyk7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgLmNoZWNrOmNoZWNrZWQgKyBsYWJlbCAuaWNvbjphZnRlcntcblx0dHJhbnNmb3JtOnNjYWxlKDEpIHJvdGF0ZSgtNDVkZWcpO1xufVxuLmxvZ2luLWh0bWwgLnNpZ24taW46Y2hlY2tlZCArIC50YWIgKyAuc2lnbi11cCArIC50YWIgKyAubG9naW4tZm9ybSAuc2lnbi1pbi1odG17XG5cdHRyYW5zZm9ybTpyb3RhdGUoMCk7XG59XG4ubG9naW4taHRtbCAuc2lnbi11cDpjaGVja2VkICsgLnRhYiArIC5sb2dpbi1mb3JtIC5zaWduLXVwLWh0bXtcblx0dHJhbnNmb3JtOnJvdGF0ZSgwKTtcbn1cblxuLmhye1xuXHRoZWlnaHQ6MnB4O1xuXHRtYXJnaW46NDBweCAwIDIwcHggMDtcblx0YmFja2dyb3VuZDojZmI1NzU3O1xufVxuLmZvb3QtbG5re1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuZm9ybXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/signin-signup/signin-signup.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/signin-signup/signin-signup.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrap\">\n  <div class=\"login-html\">\n    <input id=\"tab-1\" type=\"radio\" name=\"tab\" class=\"sign-in\"><label for=\"tab-1\" class=\"tab\">Sign In</label>\n    <input id=\"tab-2\" type=\"radio\" name=\"tab\" class=\"sign-up\" checked><label for=\"tab-2\" class=\"tab\">Sign Up</label>\n    <div class=\"login-form\">\n      <div class=\"sign-in-htm\">\n          <div class=\"group\">\n            <label for=\"user\" class=\"label\">Email</label>\n            <input [(ngModel)]=\"email\" id=\"signin-email\" type=\"text\" class=\"input\">\n          </div>\n          <div class=\"group\">\n            <label for=\"pass\" class=\"label\">Password</label>\n            <input [(ngModel)]=\"password\" id=\"signin-password\" type=\"password\" class=\"input\" data-type=\"password\">\n          </div>\n          <div class=\"group\">\n            <input (click)=\"onSignIn()\" type=\"submit\" class=\"button\" value=\"Sign In\">\n          </div>\n          <div class=\"hr\"></div>\n          <div class=\"foot-lnk\">\n            <a href=\"#forgot\">Forgot Password?</a>\n          </div>\n      </div>\n      <div class=\"sign-up-htm\">\n        <div class=\"group\">\n            <label for=\"user\" class=\"label\">Full Name</label>\n            <input [(ngModel)]=\"name\" id=\"signup-name\" type=\"text\" class=\"input\">\n        </div>\n        <div class=\"group\">\n            <label for=\"pass\" class=\"label\">Email Address</label>\n            <input [(ngModel)]=\"email\" id=\"signup-email\" type=\"text\" class=\"input\">\n          </div>\n        <div class=\"group\">\n          <label for=\"user\" class=\"label\">Profile Name</label>\n          <input [(ngModel)]=\"profileName\" id=\"signup-profilename\" type=\"text\" class=\"input\">\n        </div>\n\n        <div class=\"group\">\n          <label for=\"pass\" class=\"label\">Password</label>\n          <input [(ngModel)]=\"password\" id=\"signup-password\" type=\"password\" class=\"input\" data-type=\"password\">\n        </div>\n        <div class=\"group\">\n          <label for=\"pass\" class=\"label\">Confirm Password</label>\n          <input [(ngModel)]=\"confirmpassword\" id=\"signup-confirmpassword\" type=\"password\" class=\"input\" data-type=\"password\">\n        </div>\n        <div class=\"group\">\n          <input (click)=\"onSignUp()\" type=\"submit\" class=\"button\" value=\"Sign Up\">\n          <!-- <button type=\"button\" class=\"btn btn-warning shiny\" data-dismiss=\"modal\" aria-hidden=\"true\">Cancel</button> -->\n        </div>\n        <div class=\"hr\"></div>\n        <!-- <div class=\"foot-lnk\">\n          <label for=\"tab-1\">Already a Member?</label>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/signin-signup/signin-signup.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/signin-signup/signin-signup.component.ts ***!
  \*********************************************************************/
/*! exports provided: SigninSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninSignupComponent", function() { return SigninSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






var SigninSignupComponent = /** @class */ (function () {
    function SigninSignupComponent(authService, activeModal, validateService, router) {
        this.authService = authService;
        this.activeModal = activeModal;
        this.validateService = validateService;
        this.router = router;
    }
    SigninSignupComponent.prototype.ngOnInit = function () {
    };
    SigninSignupComponent.prototype.onSignIn = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                alert('successfully logged in');
                _this.router.navigate(['dashboard']);
                _this.activeModal.close();
                return true;
            }
            else {
                alert(data.msg);
                return false;
            }
        });
    };
    SigninSignupComponent.prototype.onSignUp = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            profileName: this.profileName,
            password: this.password,
            confirmations: {
                tos: true,
                email: true
            }
        };
        // required fields
        if (!this.validateService.validateSignUp(user)) {
            alert('Please fill out all required fields!');
            return false;
        }
        // email
        if (!this.validateService.validateEmail(user.email)) {
            alert('Please fill out email correctly!');
            return false;
        }
        // comfirmpassword
        if (!this.validateService.validateConfirmPassword(this.password, this.confirmpassword)) {
            alert('Passwords do not match!');
            return false;
        }
        this.authService.signUpUser(user).subscribe(function (data) {
            if (data.success) {
                alert('success');
                _this.router.navigate(['dashboard']);
                _this.activeModal.close();
                return true;
            }
            else {
                alert('Internal Server Error.');
                return false;
            }
        });
    };
    SigninSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin-signup',
            template: __webpack_require__(/*! ./signin-signup.component.html */ "./src/app/components/signin-signup/signin-signup.component.html"),
            styles: [__webpack_require__(/*! ./signin-signup.component.css */ "./src/app/components/signin-signup/signin-signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninSignupComponent);
    return SigninSignupComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        // Store the attempted URL for redirecting later
        // this.authService.redirectUrl = state.url;
        this.router.navigate(['']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.signUpUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        this.getToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        if (localStorage.id_token == undefined) {
            return false;
        }
        else {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
            return !helper.isTokenExpired(localStorage.id_token);
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateConfirmPassword = function (password, confirmpassword) {
        return password === confirmpassword;
    };
    ValidateService.prototype.validateSignUp = function (user) {
        return !(user.name === undefined ||
            user.email === undefined ||
            user.profileName === undefined ||
            user.password === undefined);
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email));
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jamesren/Desktop/git/authapp/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map